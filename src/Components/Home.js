import React from 'react'
import '../Scss/Home.scss'
import { CardsFirst, CardsSecond, CardsThird } from './Data'
import Footer from './Reuseable/Footer'
import Navbar from './Reuseable/Navbar'

const Home = () => {
  return (

    // BANNER GIF IMAGE SECTION START HERE


    <div className='home-parent'>
      <div className='home-header-images'>
        <img src={'./images/1.gif'} alt="" style={{ width: '100%' }} />
      </div>

      {/* Navbar Section Start Here */}
      <Navbar></Navbar>



      {/* CARDS SECTION FIRST START HERE */}

      <div className='card-first-grid'>
        {
          CardsFirst.map((map) => {
            return (
              <div className='card-first'>
                <div className='img-div'>
                  <img src={map.img} alt="" />
                </div>
                <b>
                  <p className='title'>{map.title}</p>
                </b>
                <p className="date">
                  {map.date}

                </p>

                <div style={{ width: '90%' }}>
                  <span style={{ fontSize: '19px', color: '#008AFC' }} className='title-head'>{map.titlehead}</span>
                  <span className='detail'>
                    {map.detail}
                  </span>
                </div>
                <p className='system'>{map.system}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button ><a href="">{map.button}</a></button>
                </div>
              </div>
            )
          })
        }
      </div>



      {/* CARDS SECTION SECOND START HERE */}

      <div className='card-second-grid'>
        {
          CardsSecond.map((map) => {
            return (
              <div className='card-first'>
                <div className='img-div'>
                  <img src={map.img} alt="" />
                </div>
                <b>
                  <p className='title'>{map.title}</p>
                </b>
                <p className="date">
                  {map.date}

                </p>

                <div style={{ width: '90%' }}>
                  <span style={{ fontSize: '19px', color: '#008AFC' }} className='title-head'>{map.titlehead}</span>
                  <br />
                  <div className='detail-para'>
                    <p className='detail'>
                      {map.detailfirst}
                    </p>
                    <p className='detail'>
                      {map.detailsecond}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center', gap: '10px' }}>
                  <img src={map.logo} alt="" style={{ width: '15%', borderRadius: '80px' }} />
                  <p>{map.logotext}</p>
                </div>
              </div>
            )
          })
        }
      </div>





      {/* CARDS SECTION THIRD START HERE */}

      <div className='card-second-grid'>
        {
          CardsThird.map((map) => {
            return (
              <div className='card-first'>
                <div className='img-div'>
                  <img src={map.img} alt="" />
                </div>
                <b>
                  <p className='title'>{map.title}</p>
                </b>
                <p className="date">
                  {map.date}

                </p>

                <div style={{ width: '90%' }}>
                  <span style={{ fontSize: '19px', color: '#008AFC' }} className='title-head'>{map.titlehead}</span>
                  <br />
                  <div className='detail-para' style={{ margin: '0px 0 40px 0', padding: "0 0 30px 0" }}>
                    <p className='detail' style={{ lineHeight: '25px' }}>
                      {map.detailfirst}
                    </p>

                  </div>
                </div>


              </div>
            )
          })
        }
      </div>




      {/* SECTION COPY RIGHT START HERE */}

      <div style={{}}>

        <p style={{ fontSize: '15px', padding: '10px 20px', borderTop: '1px solid rgba(128, 128, 128, 0.202)', borderBottom: '1px solid rgba(128, 128, 128, 0.202)', margin: '40px 0 10px 0' }}>
          대한민국
          24시간 고객 센터 l 게임 관련 문의 l 텔레그램 CASINOPOWER4 , Copyright © SOLUTION 4U - 본사이트는 회원가입없이 자유롭게 이용가능하며, 개인정보를 수집하고 있지 않습니다.</p>
        <center>
          <img src={'./images/16.gif'} alt="" style={{ width: '90%', margin: 'auto', padding: '0px 0 10px 0' }} />
          <img src={'./images/15.gif'} alt="" style={{ width: '90%', margin: 'auto' }} />
        </center>
      </div>



      {/* FOOTER SECTION START HERE */}

      <Footer />

    </div>
  )
}

export default Home