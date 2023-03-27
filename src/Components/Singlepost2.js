import React from 'react'
import Navbar from './Reuseable/Navbar'
import '../Scss/Singlepost.scss'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { AiFillFacebook } from 'react-icons/ai'
import { koreanpoints } from './Data'
const Singlepost2 = () => (
    <div className='single-post-parent'>
        <div className='home-header-images'>
            <img src={'./images/16.gif'} alt="" style={{ width: '100%' }} />
        </div>

        {/* NAVIGATION SECTION */}

        <Navbar></Navbar>

        <div className='text'>
            <div className='purple-text'>
                <h1>카지노사이트제작 | 성피솔루션 | 성인피씨방게임 | 대한민국 | 바 <br />
                    다이야기구매 | 릴가격릴게임가격 | 슬롯알공급 | 카지노알공급 | <br /> 바카라알공급 | 에볼루션알공급</h1>

            </div>
            <div className='solution-4u'>
                <span className='solution'>SOLUTION 4U(솔루션포유)는</span>
                <br />
                <span>급변하는 카지노시장의 앞서가는 기술력과 노하우로,
                    <br />
                    탄탄한 카지노개발업체로 2011년부터 계속 성장을 하고 있습니다.
                    <br />
                    당사는 고객의 만족과 편리하고 혁신적인 카지노솔루션을 제공하여
                    <br />
                    앞으로도 귀하의 동반자가 되겠습니다.</span>
                <br /><br />
                <div>
                    <span style={{ fontSize: '38px', color: 'rgb(102, 102, 102)', fontWeight: '400' }}>--------------------------</span>
                </div>
            </div>

            <div className='three-four'>
                <span style={{ fontSize: '18px', color: ' rgb(60, 120, 216)', fontWeight: '400' }}>365일 풀 가동되는 다수의 CS 고객팀.
                </span>
                <br />
                <span style={{ fontSize: '18px', fontWeight: '400', color: "rgb(102, 102, 102)" }}>눈에 쉽고 편리한 어드민.
                </span>
                <br />
                <span style={{ fontSize: '18px', color: ' rgb(60, 120, 216)', fontWeight: '400' }}>강력한 서버보안 구성력과 섬세한 시스템 케어.
                </span>
                <br />
                <span style={{ fontSize: '18px', fontWeight: '400', color: "rgb(102, 102, 102)" }}>더욱 더 자유도가 높아진 신규 시스템 추가.
                </span>
                <br />
                <span style={{ fontSize: '18px', color: ' rgb(60, 120, 216)', fontWeight: '400' }}>다수의</span>
                <span style={{ color: 'rgb(255, 0, 0)', fontSize: '18px', fontWeight: '700' }}>개발자들의 24시간 실시간 응대.</span>
                <div>
                    <span style={{ fontSize: '38px', color: 'rgb(102, 102, 102)', fontWeight: '400' }}>--------------------------</span>
                </div>
            </div>


            <div className='section-image'>
                <div>
                    <img src={'./images/42.webp'} alt="" />
                    <center><p>카지노사이트제작 | 성피솔루션 | 성인피씨방게임 | 대한민국 | 바다이야기구매 | 릴가격릴게임가격 | 슬롯알공급 | 카지노알공급 | 바카라알공급 | 에볼루션알공급</p></center>
                </div>
            </div>




            {/* SECTION KOREAN POINTS */}



            <div className='korean-points'>
                <div>
                    <h1>솔루션포유 - 핵심 솔루션 개발 항목.</h1>
                </div>
                {koreanpoints.map((map) => {
                    return (
                        <div>
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
                            <br />
                            <span>{map.p11}</span>
                            <br />
                            <span>{map.p12}</span>
                            <br /><br />
                            <div>
                                <span style={{ fontSize: '38px', color: 'rgb(102, 102, 102)', fontWeight: '400' }}>--------------------------</span>
                            </div>
                        </div>
                    )
                })}
            </div>




            {/* SECTION TD GAMING */}

            <div className='td-gaming'>
                <div >
                    <span>TD GAMING [정품 게임 공급]</span>
                    <br />
                    <span>TD GAMING 는 본 당사에서 직접 개발한 카지노 게임 API 입니다.</span>
                    <br /><br />
                    <li>정품 통합알 API 게임 (자동 머니이동 통합게임)</li>
                    <li>추가금이 없는 에볼루션 카지노 공급</li>
                    <li>슬롯+라이브 통합/ 자동게임 API</li>
                    <li>24시간 비상대응 체계 완비</li>
                    <li>게임데모 / 게임API 메뉴얼은 아래 상담원에게 연락 주셔야 합니다.</li>
                    <p>카지노 사이트 - 유져샘플 / 어드민샘플 / 제작일정 / 제작가격 / 게임데모 / API 자료는,텔레 <br /> 그램 : CASINOPOWER4 로 상담을 주시길 바랍니다.</p>
                    <h6>[ 게임 구매 가격 ]
                        <br />
                        1천만개 알 이상 구매 (9%) - 알구매 가능시간 : 낮 12시부터 , 밤 12시까지 가능.
                        <br />
                        3천만개 알 이상 구매 (9%) - 알구매 가능시간 : 24시간 가능.

                    </h6>


                    <div>
                        <span style={{ fontSize: '38px', color: 'rgb(102, 102, 102)', fontWeight: '400' }}>--------------------------</span>
                    </div>
                </div>
            </div>


            {/* SECTION S GAMING */}

            <div className='sgaming'>
                <span>
                    SOLUTION 4U . S-GAMING .
                </span>
                <br />
                <span style={{ fontWeight: '700' }}>카지노 사이트 제작 순서.</span>
                <br /><br />
                <div className='order-list'>
                    <span>1.서버 개설</span>
                    <br />
                    <span>2.유져 페이지 디자인 산출작업</span>
                    <br />
                    <span>3.사업장에 맞는 관리자 산출작업 [매장/온라인]</span>
                    <br />
                    <span>4.증설된 서버에 디자인과 관리자 세팅 </span>
                    <br />
                    <span>5.게임회사 선별</span>
                    <br />
                    <span>6.선별된 게임회사 - 서버세팅 [API 게임연동] </span>
                    <br />
                    <span>7.모든 세팅을 마감한 후 게임 테스트와 관리자 정산 페이지 테스트 및 영업개시
                        <br />

                        위 모든 작업은 약 7일에서 10일의 작업일정이 소모 됩니다.</span>
                    <p>[ 더 깊은 설명과 샘플을 원하신다면 상담원과 대화를 나누어 보세요 ]

                    </p>
                </div>
                <div>
                    <span style={{ fontSize: '38px', color: 'rgb(102, 102, 102)', fontWeight: '400' }}>--------------------------</span>
                </div>
            </div>



        </div>


        {/* SECTION FOOTER */}

        <div className='footer-parent'>
            <div className='link-parent'>
                <div className='link'>
                    <span>댓글 0개</span>
                    <span><ImFacebook /></span>
                    <span><BsTwitter /></span>
                    <span><FaLinkedinIn /></span>
                </div>
                <div style={{ display: 'flex' }}>
                    <span>카지노사이트제작
                        •
                        라이브 카지노 제작
                        •
                        카지노 슬롯머신 분양
                        정렬 기준</span>
                    <select>
                        <option value="">날짜 오름차순</option>
                    </select>
                </div>
            </div>

            <div className='user'>
                <span style={{ color: '#E6E6E6', fontSize: '60px' }}><BiUserCircle /></span>
                <input type="textarea" placeholder='댓글 달기...' />
            </div>
            <div className='submit'>
                <button style={{ float: 'right', background: '#A0AAB8', padding: '5px 10px', border: 'none' }}>게시
                </button>
            </div>

            <div className='facebook-link'>
                <span style={{ color: '#37549C' }}><AiFillFacebook /></span>
                <a href="https://developers.facebook.com/products/social-plugins/comments/?utm_campaign=social_plugins&utm_medium=offsite_pages&utm_source=comments_plugin">Facebook 댓글 플러그인</a>
            </div>
        </div>
    </div>
)

export default Singlepost2