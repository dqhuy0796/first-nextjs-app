import * as React from 'react';
import styles from './TopBarProgress.module.css'

export default function TopBarProgress () {
  return (
    <div className={styles.bar}>
      <div className={styles.progress}></div>
    </div>
  );
}
