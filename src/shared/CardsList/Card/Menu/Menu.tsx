import React from 'react';
import styles from './menu.less';
import {MenuIcon} from "../../../icons";
import {Dropdown} from "../../../Dropdown";
import colors from "./src/main.global.less";
import {MenuItemsList} from "./MenuItemsList";

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId="1234" />
          <button className={styles.closeButton}>
            {/*<Text mobileSize={12} size={14} color="#666666">*/}
              Close
            {/*</Text>*/}
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
