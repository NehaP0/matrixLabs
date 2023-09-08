import React, { useEffect, useState } from 'react'
import styles from '../styles/right.module.css'
import axios from "axios";
import {FaDollarSign} from 'react-icons/fa'
import { MdOutlineToken } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";


const RightSec = ({searchFor}) => {

  const[baseurl, setbaseurl] = useState("")
  const[input, setinput] = useState("")
  const [data, setData] = useState([])

// console.log(data);

  useEffect(()=>{
    if(searchFor == "token"){
      setbaseurl("https://api.dexscreener.com/latest/dex/tokens/")
    }
    else if(searchFor == "pair"){
      setbaseurl("https://api.dexscreener.com/latest/dex/search/?q=")
    }
  },[searchFor])

  const handleEnter = (e)=>{
    // if(e.key == 'Enter'){
      
      if(searchFor == "token"){
        axios.get(`${baseurl}${input}`)
        .then((res)=>{
          let datareceived = res.data.pairs
          let sortedArr = datareceived.sort((a, b) => b.priceUsd - a.priceUsd)
          let threeItemSortArr = []
          for(let i=0; i<3; i++){
            threeItemSortArr.push(sortedArr[i])
          }
          setData(threeItemSortArr)
        })
        .catch((err)=>console.log(err))
      }
      else if(searchFor == "pair"){
        axios.get(`${baseurl}${input}`)
        .then((res)=>{
          let datareceived = res.data.pairs
          let threeItemSortArr = []
          for(let i=0; i<3; i++){
            threeItemSortArr.push(datareceived[i])
          }
          setData(threeItemSortArr)
        })
        .catch((err)=>console.log(err))
      }
      setinput("")
    // }
  }

  console.log(data);

  
  return (
    <div className={styles.rightDiv}>
      <div id={styles.rightTopDiv}>
        <div id={styles.searchDiv}>
          <input type="text" placeholder='Search' value={input} onChange={(e)=>setinput(e.target.value)}/>
          <AiOutlineSearch onClick={handleEnter} style={{marginTop:"1px", fontSize:"24px", cursor:"pointer"}}/>
        </div>
        <button id={styles.connectbtn}>
          Connect
        </button>
      </div>

      {/* <div id={styles.rightTopDivSmlScr}>
        <div id={styles.navDiv}>
          <div>
            <GiHamburgerMenu style={{marginTop:"1px", fontSize:"24px", cursor:"pointer"}}/>
            <div id={styles.nftify}>NFTify</div>
          </div>
          <div>
            <button id={styles.connectbtn}>
              Connect
            </button>
          </div>
          
        </div>       

      </div> */}

      <div id={styles.rightBottomDiv}>
        <p>{searchFor=="token"?"Token Search Results":searchFor=="pair"?"Pair Search Results":"Search the Token Address or Pair Address"}</p>

        <div>
            {data.map((item)=>{
              return <div key={item.url} className={styles.makeFlex}>
                      <div className={styles.boxInnerDiv}>
                        <div className={styles.DeetsBox}>
                          <p>Basic Info</p>
                          <div className={styles.deetsInnerDivs}>
                            <p>Pair created at</p>
                            <p>{item.pairCreatedAt}</p>
                          </div>
                          <div className={styles.deetsInnerDivs}>
                            <p>Symbol</p>
                            <p>{item.baseToken.symbol}</p>
                          </div>
                          <div className={styles.deetsInnerDivs}>
                            <p>Dex ID</p>
                            <p>{item.dexId}</p>
                          </div>
                          <div className={styles.deetsInnerDivs}>
                            <p>Pair Address</p>
                            <p>{item.pairAddress}</p>
                          </div>
                        </div>
                        <div className={styles.LogoBox}>                        
                          <AiOutlineInfoCircle style={{marginTop:"1px", fontSize:"24px"}}/>
                        </div>
                      </div>
                      <div className={styles.boxInnerDiv}>
                        <div className={styles.DeetsBox}>
                          <p>Base Token</p>
                          <div className={styles.deetsInnerDivs}>
                            <p>Name</p>
                            <p>{item.baseToken.name}</p>
                          </div>
                          <div className={styles.deetsInnerDivs}>
                            <p>Symbol</p>
                            <p>{item.baseToken.symbol}</p>
                          </div>
                          <div className={styles.deetsInnerDivs}>
                            <p>Address</p>
                            <p>{item.baseToken.address}</p>
                          </div>
                        </div>
                        <div className={styles.LogoBox}>
                          <MdOutlineToken style={{marginTop:"1px", fontSize:"24px"}}/>
                        </div>
                      </div>
                      <div className={styles.boxInnerDiv}>
                        <div className={styles.DeetsBox}>
                          <p>Quote Token</p>
                          <div className={styles.deetsInnerDivs}>
                            <p>Name</p>
                            <p>{item.quoteToken.name}</p>
                          </div>
                          <div className={styles.deetsInnerDivs}>
                            <p>Symbol</p>
                            <p>{item.quoteToken.symbol}</p>
                          </div>
                          <div className={styles.deetsInnerDivs}>
                            <p>Address</p>
                            <p>{item.quoteToken.address}</p>
                          </div>
                        </div>
                        <div className={styles.LogoBox}>
                          <MdOutlineToken style={{marginTop:"1px", fontSize:"24px"}}/>
                        </div>
                      </div>
                      <div className={styles.boxInnerDiv}>
                        <div className={styles.DeetsBox}>
                          <p>Price</p>
                          <div className={styles.deetsInnerDivs}>
                            <p>Price Native</p>
                            <p>{item.priceNative}</p>
                          </div>
                          <div className={styles.deetsInnerDivs}>
                            <p>Price USD</p>
                            <p>{item.priceUsd}</p>
                          </div>
                        </div>
                        <div className={styles.LogoBox}>
                            <FaDollarSign style={{marginTop:"1px", fontSize:"20px"}}/>
                        </div>
                      </div>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default RightSec