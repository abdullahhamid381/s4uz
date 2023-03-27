import React, { Fragment } from 'react'
import '../../Scss/Footer.scss'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => (
    <Fragment>
      <div className='foter-parent'>
      <div className='footer-img-parent'>
            <Link to='/single_post'><img src={'./images/17.webp'} alt="" /></Link>
           <Link to = '/single_post_2'> <img src={'./images/18.webp'} alt="" /></Link>
           <Link to = '/single_post_3'><img src={'./images/19.webp'} alt="" /></Link> 
        </div>



        {/* FOOTER SECTION LINK */}
        <div className='footer-link'>
            <div>
                <p>24시간 고객 센터 l 제작 관련 문의 l 텔레그램 CASINOPOWER4 , Copyright 대한민국 © SOLUTION 4U .E - MAIL SOLUTION4U@s4uz.com</p>
            </div>
            <div style={{display:'flex'}}>
                <a href="https://www.facebook.com/solution4uz?_rdc=1&_rdr" target={'_blank'}><img src={'./images/20.webp'} style={{width:'100%'}}/></a>
                <a href="https://twitter.com/whereareu04"><img src={'./images/21.webp'} style={{width:'100%'}} /></a>
                <a href="https://www.linkedin.com/in/solution-4u-%EC%86%94%EB%A3%A8%EC%85%98-%ED%8F%AC%EC%9C%A0-27456610a/"><img src={'./images/22.webp'}style={{width:'100%'}} /></a>
                <a href="https://accounts.google.com/v3/signin/confirmidentifier?dsh=S-569991393%3A1679610333359465&continue=https%3A%2F%2Fwww.blogger.com%2Fu%2F1%2Fblog%2Fposts%2F5206430706562734487&followup=https%3A%2F%2Fwww.blogger.com%2Fu%2F1%2Fblog%2Fposts%2F5206430706562734487&ifkv=AWnogHdTgmanJASQmw5pettSdvP_6zIm65liCNxp6gHxwN5-Y48KY1ErE1xfWEzSgJ3ClZLekc0xcA&passive=1209600&service=blogger&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><img src={'./images/23.webp'} style={{width:'100%'}}/></a>
                <a href="https://www.pinterest.com/2022kimsel4/"><img src={'./images/24.webp'} style={{width:'100%'}}/></a>
            </div>
        </div>
      </div>
    </Fragment>
)

export default Footer