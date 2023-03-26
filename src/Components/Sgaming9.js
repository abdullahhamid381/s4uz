import React from 'react'
import '../Scss/Sgaming9.scss'
import Footer from './Reuseable/Footer'
import Navbar from './Reuseable/Navbar'
const Sgaming9 = () => {
    return (
        <div className='sgaming9-parent'>

            <div className='home-header-images'>
                <img src={'./images/16.gif'} alt="" style={{ width: '100%' }} />
            </div>



            {/* NAVBAR SECTION START HERE */}

            <Navbar></Navbar>

            <div className='data-parent'>
                <div className='ceo'>
                    <h1>회사소개 회사연혁 <br /> <b style={{ color: 'black', fontWeight: '500' }}>CEO 인사말 연락처</b></h1>
                </div>
                <div className='data-para'>
                    <p>설립일 <b style={{ fontWeight: '500' }}>2010년 11월</b></p>
                    <p>회사명     <b style={{ fontWeight: '500' }}>SOLUTION 4U</b></p>
                    <p style={{ marginTop: '40px' }}>대표이사  정일선</p>
                    <span><b style={{ fontWeight: '400',fontSize:'15px',color:'rgb(133, 133, 133)' }}>100 metros oeste Escuela de Franklin Roosevelt, San Jose, San Pedro, Costa Rica</b></span>
                </div>
                <div className='data-img'>
                    <img src={'./images/36.png'} alt="" />
                </div>
            </div>

            {/* SOLUTION */}

            <div className='solution'>
                <img src={'./images/37.png'} alt="" width={"100%"} />

                {/* DETAIL FIRST */}
                <div>
                    <h3 >IT 모임에서 하나의 회사로 도약</h3>
                    <p>
                        2010년 어느 한 온라인 까페의 개발자 모임에서 마음을 같이한
                        <br />
                        다수의 엔지니어들이 법인을 만들고 솔루션 라이센스를 취득 하였으며,
                        <br />
                        해외 카지노 소프트 웨어 제공을 하며,  수 많은 거래 업체와 개발 산출물을 제공한지
                        <br />
                        어느덧 10년이란 세월이 흘렀습니다.
                        <br />
                        <br />
                        지난 10년간 오로지 카지노 소프트웨어에만 집중 개발및 투자를 하여,
                        <br />
                        현재 많은 분야의 광 범위한 개발 산출물을 제공 해 드리고 있습니다.
                        <br />

                        <br />
                        해외에 본사를 두고 있는 SOLUTION 4U의 한국 시장 진출은 아직 미미하지만,
                        <br />
                        이미 한국시장에도 수 많은 결과물을 제공하여 관리 서비스 중이며,
                        <br />
                        그로 인하여 향후 고객사들에게 더욱 큰 기반이 될수 있으리라 예측 합니다.
                    </p>
                </div>

                {/* DETAIL SECOND */}
                <div>
                    <h3 >​영상송출 기반에서 광범위한 솔루션으로</h3>
                    <p>
                        - 2010년 카지노 스튜디오 개발로 유명 스튜디오 API구축과 관리및 현장 장비 세팅과 인테리어,
                        <br />
                        더불어, 딜러. 셔플러. 핏보스. 매니저 트레이닝과 라이센스 컨설팅을 도맡아 왔습니다.

                        <br />
                        <br />

                        - 2014년을 시작으로 다수의 카지노 게임공급과 RNG게임 개발,
                        <br />
                        각종 프로그램 분석및 신규 개발에 대한 프로젝트를 완벽히 소화를 해왔으며,
                        <br />
                        <br />


                        - 2016년부터 카지노 사이트 제작에 의거한 어드민 제공과 게임분양 및 충실한 관리로
                        <br />
                        온라인 카지노 시장에 많은 솔루션 분야에서 다져진 기술력과 수많은 물량의 산출물을 제공해야 했음으로,
                        <br />
                        <br />

                        - 2017년부터 라이센스 제공관련 및 회사 법무팀, 게임 공급팀, 엔지니어를 추측으로 생성된 개발팀과
                        <br />
                        홍보팀 및 서브 개발팀으로 나뉘게 됩니다.
                        <br />
                        <br />

                        2022년 현재, SOLUTION 4U는 회사의 존립을 위하여 많은 오차 범위를 넘나들며 더욱 현실적인 서비스 방안과,
                        <br />
                        민첩한 시장 분석력에 더해진 신규개발 기술력, 끊김이 없고 원활한 관리력으로 고객의 만족감에 더할 나위없는,
                        <br />

                        최상의 카지노 소프트웨어 산출물을 서비스 제공 중입니다.


                    </p>
                </div>

            </div>


            {/* FOOTER SECTION  */}

            <Footer></Footer>
        </div>

    )
}

export default Sgaming9