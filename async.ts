function getPromise(): Promise<number> {
  return new Promise(resolve => resolve(1))
}

function fetchDataThen() {
  const promise: Promise<number> = getPromise()
  promise.then((data: number) => console.log(data))
}
fetchDataThen()

async function getPromiseAsync(): Promise<number> {
  return 1
}

async function fetchDataAsync() {
  const data: number = await getPromiseAsync()

  console.log(data)
}
fetchDataAsync()
