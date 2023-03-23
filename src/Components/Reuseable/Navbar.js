import React from 'react'
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
        </div>
    )
}

export default Navbar