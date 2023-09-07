import React, { useState } from 'react'
import styles from '../styles/left.module.css'



const LeftSec = ({setSearchFor}) => {

  const HandleTokenClick = ()=>{
    console.log("clickedToken");
    setSearchFor("token")
    // localStorage.setItem("searchFor", "token")
  }

  const HandlePairClick = ()=>{
    console.log("clickedPair");
    setSearchFor("pair")
    // localStorage.setItem("searchFor", "pair")
  }

  return (
    <div className={styles.leftDiv}>
        <div>

            <div id={styles.leftHeading}>
              <div>Logo</div>
              <div>nFTify</div>
            </div>

            <div>
              <button id={styles.leftTokenBtn} onClick={HandleTokenClick}>
                <div>Token logo</div>
                <div>Token Address</div>
              </button>
              <button id={styles.leftPairBtn} onClick={HandlePairClick}>
                <div>Pair logo</div>
                <div>Pair Address</div>
              </button>
            </div>

            <div id={styles.leftSociaDiv}>
              <div>facebook logo</div>
              <div>linkdin logo</div>
              <div>twitter logo</div>
            </div>

        </div>

    </div>
  )
}

export default LeftSec