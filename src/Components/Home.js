import React, { useEffect, useState } from 'react';
import '../Styled/Home.css';
/* import Banner from '../assets/home-image/home-banner.png'; */

const Home = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
  }, []);
    return (
        <div id='home' className='home-wrap'>
            <div className='home-contents'>
                <div className='home-bg-img'>
                    <div className='blur-overlay'></div>
                    <div className='home-bg-text'>
                        {/* <h2>상상 그 이상,</h2> */}
                        <h2>IT기술과 서비스로<br/>더 나은 삶을 향해 테스트용 + 다른계정 테스트 + 통일테스트</h2>
                    </div>
                    <div className={scrolled ? 'home-bg-box' : 'none'}>
                    {/* <div className='home-bg-box'> */}
                        <div className='bg-text-box left-box'>
                            <div>
                                <h4>Connect</h4>
                                <p>
                                    생활을 이어주는<br/>
                                    모든것을 연결
                                </p>
                            </div>
                        </div>
                        <div className='bg-text-box center-box'>
                            <div>
                                <h4>Improve</h4>
                                <p>
                                    불편함은 줄이고<br/>
                                    더 가치있는 것에 집중
                                </p>
                            </div>
                        </div>
                        <div className='bg-text-box right-box'>
                            <div>
                                <h4>Innovation</h4>
                                <p>
                                    새로운 삶의<br/>
                                    방식을 창조
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;