import * as React from 'react';
import {preventDefault} from "./utils/react/preventDefault";
import {stopPropagation} from "./utils/react/stopPropagation";
import {getValue} from "./utils/react/pickFromSyntheticEvent";

function InputExample({value, onChange}: any){
  return (
    <input
      value={value}
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}
      // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
    />
  )
}
function compose<U>(...fns: Function[]){
  return <E,>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn)=>fn(previousValue), initialValue)
}
function pipe<U>(...fns: Function[]){
  return <E,>(initialValue: any): U =>
    fns.reduce((previousValue, fn)=>fn(previousValue), initialValue)
}
function pick<K extends string>(prop: K){
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}
// const some = pick('value')({value: 1}) // => 1
function isEqual<T>(left: T){
  return <E extends T>(right: E) => left === right
}
const comments = [{id: 22, text: 'text one'}, {id: 44, text: 'text two'}]
// const filteredComments = comments.filter(({id})=> id !== 22)
// const filterWithId = (id: number) => pipe(pick('id'), isEqual(id), cond)
const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond)

const filterWithId = createFilterBy('id')
const filteredCommentsById = comments.filter(filterWithId(22))

const filterByValue = createFilterBy('value')
const filteredCommentsByValue = comments.filter(filterByValue(22))

const filterWithId22 = createFilterBy('id')(22)
const filteredCommentsWithId22 = comments.filter(filterWithId22)

function cond(b:boolean){
  return !b;
}

const getValueNumber = pipe<number>(
  pick('currentTarget'),
  pick('value'),
  parseInt
)