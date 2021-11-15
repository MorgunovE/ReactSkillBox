import React from 'react';
import styles from './menuitemslist.less';
import {BlockIcon, WarningIcon} from "../../../../icons";

interface IMenuItemListProps {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemListProps) {
  return (
    <ul className={styles.menuItemList}>
      <li className={styles.menuItem} onClick={()=> console.log(postId)}>
        {/*<BlockIcon />*/}
        Скрыть
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem} onClick={()=> console.log(postId)}>
        {/*<WarningIcon />*/}
        Compliant
      </li>
    </ul>
  );
}
