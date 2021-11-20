import React from 'react';
import styles from './userblock.less';
import {Break} from "../../../Break";
import {EColor, Text} from "../../../Text";
import {IconAnon} from "../../../icons";

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=IU5ftJBt2FaMXewF4sWIvA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read subscribe identity" className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <IconAnon />
        }
      </div>
      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Anybody'}</Text>
      </div>
    </a>
  );
}
