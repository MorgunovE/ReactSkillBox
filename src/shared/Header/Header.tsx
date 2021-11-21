// import React, {useContext} from 'react';
import React from 'react';
import styles from './header.less';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
// import {tokenContext} from "../context/tokenContext";

// interface IHeaderProps {
//   token:string;
// }

export function Header() {
  // const {Consumer} = tokenContext
  // const token = useContext(tokenContext);
  return (
    <header className={styles.header}>
      {/*<Consumer>*/}
      {/*  {(token)=> <SearchBlock token={token} />}*/}
      {/*</Consumer>*/}
      {/*<SearchBlock token={token} />*/}
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
