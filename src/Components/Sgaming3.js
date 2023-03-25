import React from 'react'
import '../Scss/Sgaming3.scss'
import { sgamingcard } from './Data'
import Navbar from './Reuseable/Navbar'
import Footer from './Reuseable/Footer'
const Sgaming3 = () => {
  return (
    <div className='sgaming-parent'>
      <div className='home-header-images'>
        <img src={'./images/16.gif'} alt="" style={{ width: '100%' }} />
      </div>

      {/* NABAR SECTION */}

      <Navbar></Navbar>


      {/* CARDS SECTION START HERE */}

      <div className='cards-section'>
        {
          sgamingcard.map((map) => {
            return (
              <div className='cards-sub-parent'>
                <div className='title-div'>
                  <h1 style={{ fontWeight: '400' }}>{map.titlefirst}</h1>
                  <p>{map.titlesub}</p>
                </div>
                <div className='cards-detail'>
                  <div style={{width:'100%'}}>
                    <img src={map.img} alt="" />
                  </div>
                  <div>
                  <h3 style={{ fontWeight: '400',lineHeight:'0',color:' rgb(110, 110, 103)' }}>
                    {map.title}
                  </h3>
                  <p>{map.pfirst}</p>
                  <p>{map.psecond}</p>
                  <p>{map.pthird}</p>
                  <p>{map.pfourth}</p>
                  <div className='points'>
                  <h3>{map.p1}</h3>
                  <h3>{map.p2}</h3>
                  <h3>{map.p3}</h3>
                  <h3>{map.p4}</h3>
                  </div>
                  </div>
                 
                  <div>
                    
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
              </div>
            )
          })
        }

        <div className='copy-right'>
          <center>
            <p style={{fontWeight:'500'}}>대한민국 l 100 metros oeste Escuela de Franklin Roosevelt, San Jose, San Pedro, Costa Rica  l  powersolution2007@gmail.com</p>
            <p> Copyright 2011 www.s4uz.com - 본사이트는 회원가입없이 자유롭게 이용가능하며, 개인정보를 수집하고 있지 않습니다.</p>
            
          </center>
        </div>
        <div style={{width:'90%',margin:'auto'}}>
        <img src={'./images/31.png'} alt="" width={'100%'} />
  
        </div>
      </div>



      {/* FOOTER SECTION */}
<Footer></Footer>
      
    </div>
  )
}

export default Sgaming3