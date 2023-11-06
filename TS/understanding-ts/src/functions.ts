function add3(n1: number, n2: number) {
  return n1 + n2
}
// type void if function doesn't return anything
function printResult(num: number): void {
  console.log('Result: ' + num)
}

// function type (declaring what function gets and what it returns)
let combineValues: (a: number, b: number) => number
combineValues = add3

console.log(combineValues(8, 8))

// callback functions type
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

// Will this code compile?
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!' })
}

sendRequest('Send this!', (response) => {
  console.log(response)
  return true
})
