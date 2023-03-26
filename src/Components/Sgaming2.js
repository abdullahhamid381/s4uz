import React from 'react'
import '../Scss/Sgaming2.scss'
import Navbar from './Reuseable/Navbar'
import { sgamingcard2 } from './Data'
import Footer from './Reuseable/Footer'
const Sgaming2 = () => {
  return (
    <div className='sgamingtwo-parent'>

      <div className='home-header-images'>
        <img src={'./images/16.gif'} alt="" style={{ width: '100%' }} />
      </div>

      {/* NABR SECTION START HERE */}
      <Navbar></Navbar>



      {/* CARDS SECTION START HERE */}

      <div className='cards-section'>
        {
          sgamingcard2.map((map) => {
            return (
              <div className='cards-sub-parent'>
                <div className='title-div'>
                  <h1 style={{ fontWeight: '400' }}>{map.titlefirst}</h1>
                  <img src={'./images/line.png'} alt="" style={{ width: '60%', height: '0px' }} />
                </div>
                <div className='cards-detail'>
                  <div style={{ width: '100%' }}>
                    <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Live Casino with Evolution Gaming" width="100%" height="100%" src="https://www.youtube.com/embed/TlcfC6ZqgZA?autoplay=1&amp;mute=1&amp;controls=1&amp;loop=1&amp;origin=https%3A%2F%2Fwww.s4uz.com&amp;playsinline=1&amp;playlist=TlcfC6ZqgZA&amp;enablejsapi=1&amp;widgetid=3" id="widget4" _idm_id_="1163274"></iframe>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '400', lineHeight: '0', color: ' rgb(110, 110, 103)' }}>
                      {map.title}
                    </h3>
                    <div className='korean'>
                      <span>{map.pfirst}</span>
                      <br />
                      <span>{map.psecond}</span>
                      <br />
                      <span>{map.pthird}</span>
                      <br />
                      <span>{map.pfourth}</span>
                      <br />
                      <span>{map.pfifth}</span>
                      <br />
                      <span>{map.psixth}</span>
                      <br />
                      <span>{map.pseventh}</span>
                      <br />
                      <span>{map.pseight}</span>
                      <br />
                      <span>{map.pninght}</span>
                    </div>


                    <div className='points'>
                      <br />
                      <span>{map.p1}</span>
                      <br />
                      <span>{map.p2}</span>
                    <br />
                      <span>{map.p3}</span>
                      <br />
                      <span>{map.p4}</span>
                      <br />
                      <span>{map.p5}</span>
                      <br />
                      <span>{map.p6}</span>
                      <br />

                      <span>{map.p7}</span>
                      <br />

                      <span>{map.p8}</span>
                      <br />

                      <span>{map.p9}</span>
                      <br />

                      <span>{map.p10}</span>


                    </div>
                  </div>

                </div>
              </div>
            )
          })
        }

        <div className='copy-right'>
          <center>
            <p style={{ fontWeight: '500' }}>대한민국 l 100 metros oeste Escuela de Franklin Roosevelt, San Jose, San Pedro, Costa Rica  l  powersolution2007@gmail.com</p>
            <p> Copyright 2011 www.s4uz.com - 본사이트는 회원가입없이 자유롭게 이용가능하며, 개인정보를 수집하고 있지 않습니다.</p>

          </center>
        </div>
        <div style={{ width: '90%', margin: 'auto' }}>
          <img src={'./images/31.png'} alt="" width={'100%'} />

        </div>
      </div>
      {/* FOOTER SECTION */}

      <Footer></Footer>
    </div>
  )
}

export default Sgaming2