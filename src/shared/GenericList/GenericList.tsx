import React from 'react';
import styles from './genericlist.less';

// interface IItem {
//   value: string;
//   id: string;
//   onClick: (id: string) => void;
// }
interface IItem {
  text: string;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

// interface IMyListProps {
//   list: IItem[];
//   // onClick: (id: string) => void;
// }
interface IGenericListProps {
  list: IItem[];
  // onClick: (id: string) => void;
}
// export function MyList({list, onClick}:IMyListProps) {
// export function MyList({list}:IMyListProps) {
//   return (
//     <ul>
//       {list.map((item)=>(
//         <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//       ))}
//     </ul>
//   );
// }
// video 4
const noop = ()=>{}
export function GenericList({list}: IGenericListProps){
  return (
    <>
      {list.map(({As= 'div', text, onClick = noop, className, id, href})=>(
        <As
          className={className}
          onClick={() =>onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  )
}
// const prevJsxs = [
//   <li key={0}>Content one 0</li>,
//   <li key={1}>Content one 1</li>,
//   <li key={2}>Content one 2</li>,
//   <li key={3}>Content one 3</li>,
//   <li key={4}>Content one 4</li>,
// ]
// const jsxs = [
//   <li key={0}>Content one 0</li>,
//   <li key={1}>Content one 1</li>,
//   <li key={2}>Content one 2</li>,
//   <li key={3}>Content one 4</li>,
// ]