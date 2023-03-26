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
                        {
                            Navbadata.map((map) => {
                                return (
                                    <div>
                                        <button>
                                            <Link to={map.path} style={{ textDecoration: 'none' }}>{map.button}
                                            </Link>
                                        </button>

                                    </div>
                                )
                            })
                        }
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