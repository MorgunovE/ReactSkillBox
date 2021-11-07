const str = 'string';
const num = 2;
const nan = NaN;
const obj = {};
const arr = [];
const nul = null;
const sym = Symbol();
const und = undefined;
const _void = void 0;
const bool = true;
const fn = () => {
};

let tsStr: string = 'ads'
// function sumJS(arr) {
//   if(arr instanceof Array){
//     return arr.reduce((a,v)=> a + v);
//   }
//   throw new Error('type mismatch')
// }
// function sumJS(arr) {
//   return arr.reduce((a,v)=> a + v);
// }
// function sumJS(arr) {
//   return arr.concat([1])
// }
function sumTS(arr: number[]) {
  return arr.reduce((a, v) => a + v)
}

const tsNumber = 2;
const tsString = 'str';

const result = tsNumber + tsString
const resultTwo = parseInt(tsString) - tsNumber;
if (typeof tsString === 'number') {
  const resultTwo = tsString - tsNumber;
}
const strOrNumber: string | number = '2'
type StrOrNumber = string | number;
type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

const tsArray: number[] = [1, 2, 3]
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number) [] = [1, 2, '3']
const unionArray2: Array<string | number> = [1, 2, '3']

const myTuple: [number, string] = [1, '2']
const [val1, val2] = myTuple;

type MyObjType = { a: number, b: string }
const myObj: MyObjType = {a: 1, b: '2'}

interface MyFirstInterface {
  readonly a: number,
  b: string,
  c?: number[],
}

const myObj2: MyFirstInterface = {
  a: 2,
  b: '123',
}
// myObj2.a = 5

const ApiAnswer: IndexInterface = {key: 'asd', key1: 'asd'}
const val3 = ApiAnswer.randomkey;
interface IndexInterface {
  [n:string]: string
}
enum Methods {
  add = 0,
  sub = 1
}
function calculate(method: Methods, left: number, right: number): number{
  switch (method) {
    case Methods.add: return left + right
    case Methods.sub: return left - right
  }
}
const sum = calculate(Methods.add, 2, 2)

const ArrowFn: TypeFn = () => 2
type TypeFn = () => number

interface FnInterface {
  (a:number): void;
}

type StrangeTsTypes = any | unknown | never;

const some: any = '2'
some.reduce()

const un: unknown = '2'
if(typeof un === 'string'){
  un.concat()
}
function neverFn():never {
  throw new Error('my exception')
}
const someValue = neverFn()