import React from 'react';
import styles from './card.less';
import {Menu} from "./Menu";

export function Card() {
  
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="avatar"/>
            <a href="#user-url" className={styles.username}>Max Power</a>
          </div>
          <span className={styles.createdAt}><span className={styles.publishedLabel}>Published</span> 4 hours ago</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Need to mention, that the new model organisation the best organisation that I saw
          </a>
        </h2>
      </div>
      <div className={styles.preview}>
        <img src="https://images.unsplash.com/photo-1525447153550-9b38670d8fcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className={styles.previewImg}/>
      </div>
      <Menu />
      <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 10">
              <path d="M9.5 0L0 10H19L9.5 02" fill="#c4c4c4" />
            </svg>
          </button>
          <span className={styles.karmaValue}>234</span>
          <button className={styles.down}>
            <svg className={styles.down} width="19" height="10" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 10">
              <path d="M9.5 0L0 10H19L9.5 02" fill="#c4c4c4" />
            </svg>
          </button>
        </div>
        <button className={styles.commentsButton}>
          <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
            {/*<path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.01667V9 10H19L9" />*/}
          </svg>
          <span className={styles.commentsNumber}>13</span>
        </button>
        <div className={styles.actions}>
          <button className={styles.shareButton}>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              {/*<path d="M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956" />*/}
            </svg>
          </button>
          <button className={styles.saveButton}>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#c4c4c4" />
              {/*<path d="M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5" />*/}
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
