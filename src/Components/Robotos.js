import React from 'react';
import '../Styled/Robotos.css';
import RobotosLogo from '../assets/image/robotos-logo.png';
import Mockup from '../assets/robotos-image/mockup.png';
import { BsArrowRight } from 'react-icons/bs';
import Icon1 from '../assets/robotos-image/mockup-icon.svg';
import Icon2 from '../assets/robotos-image/robotos-about-icon.svg';
import Robotosillust1 from '../assets/robotos-image/robotos-illust-left.png';
import Robotosillust2 from '../assets/robotos-image/robotos-illust-center.png';
import Robotosillust3 from '../assets/robotos-image/robotos-illust-right.png';

const Robotos = () => {
    return (
        <div id='service' className='robotos-wrap'>
            <div className='robotos-mockup-box'>
                <div className='robotos-top-mockup-wrap'>
                    <div className='left-mockup-box'>
                        <div className='text-align'>
                            <img src={RobotosLogo} alt="robotoslogoimage"/>
                            <h3>AI매칭 플랫폼 로보토스</h3>
                        </div>
                        <div className='detail-btn'>
                            <span>자세히 보기</span>
                            <BsArrowRight className='detail-arrow' size={20} color="#3FA9F5"/>
                        </div>
                    </div>
                    <div className='right-mockup-box'>
                        <img src={Mockup} alt="mockupimage"/>
                    </div>
                </div>
                <div className='robotos-bottom-mockup-wrap'>
                    <div className='service-overlay-wrap'>
                        <div className='left-service-overlay service-overlay'></div>
                        <div className='service-text-wrap left-padding'>
                            <h3>빠른 견적 서비스</h3>
                            <img src={Icon1} alt="icon"/>
                        </div>
                    </div>
                    <div className='service-overlay-wrap'>
                        <div className='right-service-overlay service-overlay'></div>
                        <div className='service-text-wrap right-padding'>
                            <h3>AI 매칭 서비스</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-robotos-wrap'>
                <div className='about-robotos-text-box'>
                    <div className='about-top-text'>
                        <div className='about-title-wrap'>
                            <div className='about-line'></div>
                            <h3>로보토스 소개</h3>
                            <div className='about-line'></div>
                        </div>
                        <p>로보토스는 E-커머스와 O2O를 결합한 서비스입니다.</p>
                    </div>
                    <div className='about-bottom-text'>
                        <div className='about-bottom-img-box'>
                            <img src={Icon2} alt="iconimage"/> 
                        </div>
                        <div className='about-bottom-text-box'>
                            <p>
                                더이상 발품팔 필요 없습니다! 이제부터 로보토스에서 쉽게 거래하세요.<br/>
                                로보토스는 B2B, B2C, C2C 거래가 이루어질 수 있게<br/>
                                구매자와 판매자를 연결하는 허브 역할을 합니다.<br/>
                                정해진 예산에서 딱맞는 판매자를 만나세요.<br/>
                                AI알고리즘이 자동으로 매칭하여<br/>
                                최적화된 경험을 지원해주는 AI기반 매칭서비스를 제공합니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='about-robotos-illust-box'>
                    <div className='robotos-illust-wrap'>
                        <div className='illust-img-box'>
                            <img src={Robotosillust1} alt="robotosillust"/>
                        </div>
                        <div className='illust-text-box'>
                            <div className='illust-title-box'>
                                <h4>
                                    쉽고 편한<br/>
                                    매칭 플랫폼
                                </h4>
                                <p>
                                    기술플랫폼으로써<br/>
                                    누구나 쉽게 활용할 수 있는<br/>
                                    일상의 친숙한 서비스로<br/>
                                    제공하기 위해<br/>
                                    변화를 추구합니다
                                </p>
                            </div>
                            <div className='detail-btn'>
                                <span>자세히 보기</span>
                                <BsArrowRight className='detail-arrow' size={20} color="#191919"/>
                            </div>
                        </div>
                    </div>
                    <div className='robotos-illust-wrap order-setting'>
                        <div className='illust-img-box order1'>
                            <img src={Robotosillust2} alt="robotosillust"/>
                        </div>
                        <div className='illust-text-box order2'>
                            <div className='illust-title-box'>
                                <h4>
                                    새로운 거래 생태계를<br/>
                                    만들어 나갑니다
                                </h4>
                                <p>
                                    구매자와 판매자가 만나<br/>
                                    새로운 경험과<br/>
                                    또다른 기회를 만들어가며<br/>
                                    시장의 새로운 패러다임을<br/>
                                    구축하고자 합니다.
                                </p>
                            </div>
                            <div className='detail-btn'>
                                <span>자세히 보기</span>
                                <BsArrowRight className='detail-arrow' size={20} color="#191919"/>
                            </div>
                        </div>
                    </div>
                    <div className='robotos-illust-wrap'>
                        <div className='illust-img-box'>
                            <img src={Robotosillust3} alt="robotosillust"/>
                        </div>
                        <div className='illust-text-box'>
                            <div className='illust-title-box'>
                                <h4>
                                    여러분의 지금을<br/>
                                    함께 합니다
                                </h4>
                                <p>
                                    강력한 커뮤니티를 구축하고<br/>
                                    장르를 가리지 않고<br/>
                                    다양한 분야에서<br/>
                                    여러분을 서포트해드립니다.
                                </p>
                            </div>
                            <div className='detail-btn'>
                                <span>자세히 보기</span>
                                <BsArrowRight className='detail-arrow' size={20} color="#191919"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-partner-wrap'>
                <div className='partner-overlay'></div>
                <div className='partner-text-wrap'>
                    <h2>
                        <u>당신의 든든한 파트너,</u><br/>
                        화진로보틱스
                    </h2>
                    <div className='partner-btn'>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSf05_vX4gy_PY6OYXuyWbosedkNC_sWYiYM53JPgn7tpKLq9g/viewform?usp=sf_link' target='_blank' rel="noreferrer">제휴문의</a>
                        <BsArrowRight className='detail-arrow' size={32} color="#3FA9F5"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Robotos;