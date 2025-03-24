import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = '이름을 입력해주세요';
    if (!formData.email.trim()) {
      errors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = '유효한 이메일 주소를 입력해주세요';
    }
    if (!formData.message.trim()) errors.message = '메시지를 입력해주세요';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // Form submission logic would go here in a real application
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">연락하기</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h3>이메일</h3>
                <p>example@email.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-details">
                <h3>전화번호</h3>
                <p>010-2222-3333</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>위치</h3>
                <p>서울, 대한민국</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">😊</a>
              <a href="#" className="social-link">😊</a>
              <a href="#" className="social-link">😊</a>
              <a href="#" className="social-link">😊</a>
            </div>
          </div>
          <div className="contact-form">
            {isSubmitted ? (
              <div className="success-message">
                <h3>메시지가 전송되었습니다!</h3>
                <p>빠른 시일 내에 답변 드리겠습니다.</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setIsSubmitted(false)}
                >
                  다시 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">이름</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">이메일</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">제목 (선택사항)</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">메시지</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary">메시지 보내기</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;