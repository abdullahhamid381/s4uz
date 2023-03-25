import React, { Fragment } from 'react'
import '.././Scss/CasinoStudio.scss'
import { cardscasinostudio } from './Data'
import Footer from './Reuseable/Footer'
import Navbar from './Reuseable/Navbar'
const CasinoStudio = () => {
    return (
        <div className='Studio-parent'>

            {/* HEADER IMAGE SECTION START */}

            <div className='home-header-images'>
                <img src={'./images/16.gif'} alt="" style={{ width: '100%' }} />
            </div>

            {/* NAVBAR START HERE */}

            <Navbar></Navbar>


            {/* CARDS SECTION START HERE */}

            <div>
              {
                cardscasinostudio.map((map)=>{
                    return(
                      <div className='card-parent'>
                          <div style={{width:'80%'}}>
                        <img src={map.img} alt="" />
                    </div>
                    <div>
                        <h1>{map.title}</h1>
                     <p>{map.pfirst}</p>
                     <p>{map.psecond}</p>
                     <p>{map.pthird}</p>
                    </div>
                      </div>
                    )
                })
              }
          
            </div>
      
           <div className='cards-link'>
               
                <img src={'./images/31.png'} alt=""  style={{width:'100%'}}/>
              </div>


{/* FOOTER SECTION LINK */}


<Footer></Footer>

           </div>
      
    )
}

export default CasinoStudio