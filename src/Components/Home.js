import React from 'react'
import '../Scss/Home.scss'
import { CardsFirst, Navbar } from './Data'
const Home = () => {
  return (

    // BANNER GIF IMAGE SECTION START HERE


    <div className='home-parent'>
      <div className='home-header-images'>
        <img src={'./images/1.gif'} alt="" style={{ width: '100%' }} />
      </div>

      {/* NAVBAR SECTION START HERE */}

      <div className='navbar-first-parent'>
        <div className='nav-bar-parent'>
          <div className='nav-bar'>
            {
              Navbar.map((map) => {
                return (
                  <div>
                    <button>
                      <a href="#" style={{ textDecoration: 'none' }}>{map.button}
                      </a>
                    </button>

                  </div>
                )
              })
            }
          </div>
          <div>
            <button>
              <a href="#" style={{ textDecoration: 'none', background: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', fontSize: '14px' }}>카지노솔루션 제작정보</a>
            </button>
          </div>
        </div>
      </div>


      {/* CARDS SECTION FIRST START HERE */}

      <div className='card-first-grid'>
     {
      CardsFirst.map((map)=>{
        return(
          <div className='card-first'>
         <div className='img-div'>
         <img src={map.img} alt="" />
         </div>
        <b>
        <p  className='title'>{map.title}</p>
        </b>
          <p className="date">
            {map.date}

          </p>

          <div style={{width:'90%'}}>
          <span style={{fontSize:'19px',color:'#008AFC'}} className='title-head'>{map.titlehead}</span>
          <span className='detail'>
          {map.detail}
          </span>
          </div>
          <p  className='system'>{map.system}</p>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button ><a href="">{map.button}</a></button>
          </div>
        </div>
        )
      })
     }
      </div>

    </div>
  )
}

export default Home