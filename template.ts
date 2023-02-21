import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts"
import { dirname } from "https://deno.land/std@0.177.0/path/mod.ts"

const regex = /<!--\s*{(?<path>.*)}\s*-->/g
const marp = /---\s*marp:\s*true\s*---/g

async function replace(match: RegExpMatchArray) {
  const location = match[0]
  const { path } = match.groups as { path: string }
  const text = (await Deno.readTextFile(path)).replace(marp, "")

  return { location, text }
}

async function main(input: string, output: string) {
  const text = await Deno.readTextFile(input)

  const replaces = await Promise.all([...text.matchAll(regex)].map(replace))
  const result = replaces.reduce(
    (acc, { location, text }) => acc.replace(location, text),
    text,
  )
  await Deno.mkdir(dirname(output), { recursive: true })
  await Deno.writeTextFile(output, result)
}

await new Command()
  .name("template")
  .description("Replace <!-- {path} --> with the content of the file at path.")
  .option("-o --output <output:string>", "Output file.", { required: true })
  .arguments("<input:string>")
  .action(async ({ output }, input) => {
    await main(input, output)
  })
  .parse(Deno.args)
