import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>김하림</h3>
            <p>웹 개발자 & 디자이너</p>
          </div>
          <div className="footer-links">
            <div className="footer-nav">
              <h4>바로가기</h4>
              <ul>
                <li><a href="#home">홈</a></li>
                <li><a href="#about">소개</a></li>
                <li><a href="#skills">기술</a></li>
                <li><a href="#projects">프로젝트</a></li>
                <li><a href="#contact">연락처</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>연락처</h4>
              <ul>
                <li>example@email.com</li>
                <li>010-2222-3333</li>
                <li>서울, 대한민국</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} 김하림. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;