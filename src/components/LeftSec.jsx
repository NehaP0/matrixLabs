import React, { useState } from 'react'
import styles from '../styles/left.module.css'
import { MdToken } from "react-icons/md";
import { TbPhotoHexagon, TbBrandFacebook } from "react-icons/tb"
import { PiExcludeSquareThin } from "react-icons/pi"
import { AiFillFacebook } from "react-icons/ai"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"






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
              <TbPhotoHexagon style={{marginTop:"1px", fontSize:"30px", marginTop:"15px"}}/>
              <div id={styles.nftify}>NFTify</div>
            </div>

            <div>
              <button id={styles.leftTokenBtn} onClick={HandleTokenClick}>
                <MdToken style={{marginTop:"1px", fontSize:"24px"}}/>
                <div>Token Address</div>
              </button>
              <button id={styles.leftPairBtn} onClick={HandlePairClick}>
                <PiExcludeSquareThin style={{marginTop:"1px", fontSize:"24px"}}/>
                <div>Pair Address</div>
              </button>
            </div>
        </div>
            <div id={styles.leftSociaDiv}>
              {/* <TbBrandFacebook style={{marginTop:"1px", fontSize:"24px", backgroundColor:"#F30050"}}/> */}
              <FaFacebookF style={{marginTop:"1px", fontSize:"24px", backgroundColor:"#F30050", padding:"4px", borderRadius:"5px"}}/>
              <FaLinkedinIn style={{marginTop:"1px", fontSize:"24px", backgroundColor:"#F30050", padding:"4px", borderRadius:"5px"}}/>
              <FaTwitter style={{marginTop:"1px", fontSize:"24px", backgroundColor:"#F30050", padding:"4px", borderRadius:"5px"}}/>

              

            </div>

        

    </div>
  )
}

export default LeftSec