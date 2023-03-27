import React from 'react'
import { Link } from 'react-router-dom'
import '../../Scss/Navbar.scss'
import { Navbadata } from '../Data'
const Navbar = () => {
    return (
        <div>
            <div className='navbar-first-parent'>
                <div className='nav-bar-parent'>
                    <div className='nav-bar'>
                        <ul className='first' >
                            <Link to='/' style={{ textDecoration: 'none',fontSize:'14px',color:'black' }}><li>홈</li></Link>
                            <Link to='/sgaming9' style={{ textDecoration: 'none',fontSize:'14px',color:'black' }}>
                                <li className='active'>회사소개
                                    <ul className='drop-down'>
                                        <Link to='/카지노사이트제작' style={{ textDecoration: 'none',fontSize:'14px',color:'black' }}><li>CEO인사말</li></Link>
                                    </ul>
                                </li>
                            </Link>
                            <Link to='/evolution'  style={{ textDecoration: 'none',fontSize:'14px',color:'black' }}> <li>에볼루션 카지노 솔루션</li></Link>
                            <Link to='/sgaming2'  style={{ textDecoration: 'none',fontSize:'14px',color:'black' }}><li>라이브 카지노</li></Link>
                            <Link to='/s4ugaming3'  style={{ textDecoration: 'none',fontSize:'14px',color:'black' }}><li>게임리스트 (슬롯+라이브)</li></Link>
                            <Link to='/sgaming3'  style={{ textDecoration: 'none',fontSize:'14px',color:'black' }}><li>사이트 솔루션</li></Link>
                            <Link to='/casinostudio'  style={{ textDecoration: 'none',fontSize:'14px',color:'black' }}> <li>스튜디오 솔루션</li></Link>
                        </ul>
                    </div>
                    <div>
                        <button className='download'>
                            <a href="https://docs.google.com/document/d/1k3mrQ6orZZAz-XwYeLAiVVAz1JkU78pzqMvQktxcBuQ/edit" target={'_blank'} style={{ textDecoration: 'none', background: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', fontSize: '14px' }}>카지노솔루션 제작정보</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar