import React, { useEffect, useState } from 'react'
import styles from '../styles/right.module.css'
import axios from "axios";


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
    if(e.key == 'Enter'){
      if(searchFor == "token"){
        axios.get(`${baseurl}${input}`)
        .then((res)=>{
          let datareceived = res.data.pairs
          let sortedArr = datareceived.sort((a, b) => b.priceUsd - a.priceUsd)
          let tenItemSortArr = []
          for(let i=0; i<10; i++){
            tenItemSortArr.push(sortedArr[i])
          }
          setData(tenItemSortArr)
        })
        .catch((err)=>console.log(err))
      }
      else if(searchFor == "pair"){
        axios.get(`${baseurl}${input}`)
        .then((res)=>{
          let datareceived = res.data.pairs
          setData(datareceived)
        })
        .catch((err)=>console.log(err))
      }
    }
  }

  console.log(data);

  
  return (
    <div className={styles.rightDiv}>
      <div id={styles.rightTopDiv}>
        <input type="text" placeholder='Search' value={input} onChange={(e)=>setinput(e.target.value)} onKeyDown={handleEnter} style={{color:"black"}}/>
        <button id={styles.connectbtn}>
          Connect
        </button>
      </div>

      <div id={styles.rightBottomDiv}>
        <p>{searchFor=="token"?"Token Search Results":searchFor=="pair"?"Pair Search Results":""}</p>

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
                        <div className={styles.LogoBox}>Box Logo</div>
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
                        <div className={styles.LogoBox}>Box Logo</div>
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
                        <div className={styles.LogoBox}>Box Logo</div>
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
                        <div className={styles.LogoBox}>Box Logo</div>
                      </div>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default RightSec