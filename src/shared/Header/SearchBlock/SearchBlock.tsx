// import React, {useEffect, useState} from 'react';
import React, {useContext} from 'react';
import styles from './searchblock.less';
import {UserBlock} from "./UserBlock";
import {userContext} from "../../context/userContext";
// import axios from "axios";
// import {useUserData} from "../../../hooks/useUserData";

// interface ISearchBlockProps {
//   token: string;
// }

// interface IUserData {
//   name?: string;
//   iconImg?: string;
// }

export function SearchBlock() {
  // const [data, setData] = useState<IUserData>({})
  // useEffect(()=>{
  //  axios.get('https://oauth.reddit.com/api/v1/me', {
  //    headers: {Authorization: `bearer ${token}`}
  //  })
  //    .then((resp)=>{
  //      const userData = resp.data
  //      // console.log(userData)
  //      setData({name: userData.name, iconImg: userData.snoovatar_img})
  //    })
  //    .catch(console.log)
  // },[token])
  // const [data] = useUserData()
  const {iconImg, name} = useContext(userContext)
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name}/>
    </div>
  );
}
// video 2