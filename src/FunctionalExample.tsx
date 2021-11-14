import React from "react";
import {preventDefault} from "./utils/react/preventDefault";
import {stopPropagation} from "./utils/react/stopPropagation";
import {pickFromSyntheticEvent} from "./utils/react/pickFromSyntheticEvent";

function add(leftSide: number){
  return (rightSide: number) => leftSide + rightSide;
}
const add2 = (leftSide: number) => (rightSide: number) => leftSide + rightSide;
const addOne = add(1)
const addSix = add(6)
addOne(5)
window.addEventListener('resize', ()=>{})
function addEventListenerWithDispose(element: any, name: string, handler: any) {
  element.addEventListener(name, handler)
  return ()=> element.removeEventListener(name, handler)
}
const dispose = addEventListenerWithDispose(window, 'resize', ()=>{
  console.log('resize')
  dispose()
})


///////////////////////////////////////////
interface IBlockProps {
  id: string,
  title: string
}
// const withIdKey = withKey('id')
function Feed(props:{blocks: IBlockProps[]}) {
  return (
    <div>
      {props.blocks.map((block)=>
      <Block key={block.id} {...block}/>)}
    </div>
  )
}
function Block(props: IBlockProps){
  return (
    <div>{props.title}</div>
  )
}
// function withKey(key?:string) {
//   return <E, T extends React.ComponentType<E>>(component: T) =>
//     (props: E, index:number) =>
//       React.createElement(
//         component,
//         { ...props, key: key?props[key as keyof E]:index },
//         []
//       )
// }
/////////////////////////////
function Input({onChange, value}: { onChange: (value: string) => void, value: string }){
  return (
    // <input value={props.value} onChange={(e)=> props.onChange(e.currentTarget.value)}/>
    <input value={value} onChange={getValue(onChange)}/>
  )
}
function CheckBox(props:{onChange:(value:boolean)=> void, value:boolean}){
  return (
    // <input type="checkbox" checked={props.value} onChange={(e)=> props.onChange(e.currentTarget.checked)}/>
    <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)}/>
  )
}
export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked')
/////////////////////////////
function NotStandardLink(props: any){
  // const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   props.onClick();
  // }
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
  )
}

interface Input2Props{
  onChange: (value: string) => void;
  value: string
}

function Input2({value, onChange}: Input2Props) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))}/>
  )
}