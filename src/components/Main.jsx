import React, { useState } from 'react'
import LeftSec from './LeftSec'
import RightSec from './RightSec'
import styles from '../styles/main.module.css'



const Main = () => {

  const [searchFor, setSearchFor] = useState("")
  
  return (
    <div className={styles.mainDiv}>
      <div className={styles.mainDivTop}>
          <LeftSec setSearchFor={setSearchFor}/>
          <RightSec searchFor={searchFor}/>
      </div>
      <div className={styles.mainDivBottom}></div>
    </div>
  )
}

export default Main