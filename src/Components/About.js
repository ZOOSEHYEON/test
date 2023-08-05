import React, { useRef, useEffect, useState } from 'react';
import useScrollFadeIn from '../Hook/useScrollFadeIn';
import '../Styled/About.css';
import Icon1 from '../assets/about-image/value-left-icon.svg';
import Icon2 from '../assets/about-image/value-center-icon.svg';
import Icon3 from '../assets/about-image/value-right-icon.svg';
import ValueCoreImg from '../assets/about-image/about-core-value.png';

const About = () => {

    const fadeIn1 = useScrollFadeIn('up', 1, 0);
    const fadeIn2 = useScrollFadeIn('up', 1, 200);
    const fadeIn3 = useScrollFadeIn('up', 1, 400);
    const fadeIn4 = useScrollFadeIn('down', 1, 0);
    const fadeIn5 = useScrollFadeIn('down', 1, 200);
    const fadeIn6 = useScrollFadeIn('down', 1, 400);
    const fadeIn7 = useScrollFadeIn('right', 1, 0);

    return (
        <div className='about-wrap'>
            <div className='about-content-box'>
                <div ref={fadeIn1.ref} style={fadeIn1.style} className='about-box'>
                    <div className='img-box-overlay left-overlay'></div>
                    <div className='text-squar'>
                        <span>OURSTORY</span>
                    </div>
                </div>
                <div ref={fadeIn2.ref} style={fadeIn2.style} className='about-box about-center-box'>
                    <div>
                        <h3>
                            연결, 개선, 혁신
                        </h3>
                        <h3>
                            상상 그 이상
                        </h3>
                    </div>
                </div>
                <div ref={fadeIn3.ref} style={fadeIn3.style} className='about-box'>
                    <div className='img-box-overlay right-overlay'></div>
                    <div className='text-squar'>
                        <span>PASSION</span>
                    </div>
                </div>
            </div>
            <div id='about' className='about-value-wrap' >
                <div className='value-top-text'>
                    <div className='value-line'></div>
                    <h3>가치 실현</h3>
                    <div className='value-line'></div>
                </div>
                <div className='value-img-wrap'>
                {/* <div ref={serviceRef} className={`value-img-wrap${isVisible ? 'visible':''}`}> */}
                    <div ref={fadeIn4.ref} style={fadeIn4.style} className='value-box'>
                        <div className='v-img-overlay v-left-overlay'></div>
                        <div className='v-text-box'>
                            <img src={Icon1} alt="left icon"/>
                            <p>
                                우리는 최고의 기술과 서비스를 통해<br/>
                                사회의 발전과 혁신에 기여하는<br/>
                                선도적인 기업으로 성장하고자 합니다.
                            </p>
                        </div>
                    </div>
                    <div ref={fadeIn5.ref} style={fadeIn5.style} className='value-box'>
                        <div className='v-img-overlay v-center-overlay'></div>
                        <div className='v-text-box'>
                            <img src={Icon2} alt="center icon"/>
                            <p>
                                우리는 직원들이 자신의 능력을<br/>
                                최대한 활용하고 창의적인 아이디어를<br/>
                                발휘할 수 있게 자유로운 의사소통과<br/>
                                협력을 지원하는 소통 문화를 지향합니다.
                            </p>
                        </div>
                    </div>
                    <div ref={fadeIn6.ref} style={fadeIn6.style} className='value-box'>
                        <div className='v-img-overlay v-right-overlay'></div>
                        <div className='v-text-box'>
                            <img src={Icon3} alt="right icon"/>
                            <p>
                                우리는 고객들과의<br/>
                                긴밀한 관계를 통해<br/>
                                그들의 니즈를 이해하고<br/>
                                더 나은 서비스를 제공하기 위해<br/>
                                지속적으로 노력합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-value-core-wrap'>
                <div className='value-core-wrap'>
                    <div className='value-core-text-wrap'>
                        <h2>화진로보틱스의 핵심가치</h2>
                        <div className='value-core-text-flex'>
                            <div>
                                <h4>고객 중심의 혁신과 창의성</h4>
                                <p>
                                    우리는 항상 혁신과 창의성을 바탕으로<br/>
                                    고객 중심의 효율적이고 혁신적인 솔루션을 제공합니다.<br/>
                                    고객의 성공을 위해 항상 고객들의 니즈를 이해하고<br/>
                                    최고의 서비스로 만족시키는 것을 우선시합니다.
                                </p>
                            </div>
                            {/* <div>
                                <h4>혁신과 창의성</h4>
                                <p>
                                    우리는 항상 새로운 아이디어와<br/> 
                                    창의적인 방법을 모색하여<br/>
                                    효율적이고 혁신적인<br/>
                                    솔루션을 제공합니다.
                                </p>
                            </div>
                            <div>
                                <h4>고객중심</h4>
                                <p>
                                    고객의 성공은 우리의 성공입니다.<br/>
                                    고객들의 니즈를 이해하고<br/>
                                    최고의 서비스로 만족시키는 것을<br/>
                                    항상 우선시합니다.
                                </p>
                            </div> */}
                        </div>
                    </div>
                    <div className='value-core-img-wrap'>
                        <img src={ValueCoreImg} alt="valuecoreimage"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;