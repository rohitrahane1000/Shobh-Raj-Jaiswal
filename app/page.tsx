'use client';

import Image from 'next/image'
import { useState } from 'react'
import ServicesTable from '../components/ServicesTable'
import Footer from '../components/Footer'
import LoginModal from '../components/LoginModal'

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <main>
      {/* Header */}
      <header className="header">
        <nav className="nav container">
          <div className="logo-section">
            <Image
              src="/Images/logo.png"
              alt="CA Shobh Raj Jaiswal Logo"
              width={120}
              height={120}
              className="logo"
              priority
              quality={100}
              style={{
                width: 'auto',
                height: '60px',
                objectFit: 'contain'
              }}
            />
            <div className="logo-text-container">
              <div className="logo-text">Shobh Raj Jaiswal</div>
              <div className="logo-subtitle">—— Chartered Accountants ——</div>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#about">Who We Are</a></li>
            <li><a href="#services">Services</a></li>
            {/* <li><a href="#industries">Industries</a></li> */}
            <li><a href="#resources">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#enquire" className="enquire-btn">Enquire Now</a></li>
            <li>
              <button 
                onClick={() => setIsLoginModalOpen(true)} 
                className="login-btn"
              >
                Login/Signup
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Scrolling Text Strip */}
        <div className="scrolling-strip">
          <div className="scrolling-text">
            <span>चार्टर्ड अकाउंटेंट शोभ राज जैसवाल - विश्वसनीय वित्तीय सेवाएं • आयकर रिटर्न फाइलिंग • जीएसटी रिटर्न • ऑडिट सेवाएं • व्यापारिक सलाह • कर नियोजन • वित्तीय परामर्श • Chartered Accountant Shobh Raj Jaiswal - Reliable Financial Services • Income Tax Return Filing • GST Return • Audit Services • Business Advisory • Tax Planning • Financial Consultation • चार्टर्ड अकाउंटेंट शोभ राज जैसवाल - विश्वसनीय वित्तीय सेवाएं • आयकर रिटर्न फाइलिंग • जीएसटी रिटर्न • ऑडिट सेवाएं • व्यापारिक सलाह • कर नियोजन • वित्तीय परामर्श • Chartered Accountant Shobh Raj Jaiswal - Reliable Financial Services • Income Tax Return Filing • GST Return • Audit Services • Business Advisory • Tax Planning • Financial Consultation • </span>
          </div>
        </div>
        
        <div className="banner-container">
          <div className="banner banner1"></div>
          <div className="banner banner2"></div>
          <div className="banner banner3"></div>
        </div>
        
        {/* Banner Text Content */}
        <div className="banner-text banner-text-1">
          <h1 className="banner-heading">Precision. Integrity. Excellence.</h1>
          <p className="banner-subtext">Professional chartered accountant services tailored to meet your financial, taxation, and business advisory needs</p>
        </div>
        
        <div className="banner-text banner-text-2">
          <h1 className="banner-heading">Your Financial Success, Our Responsibility</h1>
          <p className="banner-subtext">From tax planning to business consulting, we provide end-to-end solutions you can trust.</p>
        </div>
        
        <div className="banner-text banner-text-3">
          <h1 className="banner-heading">Trusted Financial Expertise You Can Rely On</h1>
          <p className="banner-subtext">Providing reliable accounting, taxation, and advisory services with precision, integrity, and a commitment to your financial growth.</p>
        </div>

        <div className="card-overlay">
          <div className="card-container">
            <Image
              src="/Images/card.png"
              alt="Card"
              width={350}
              height={120}
              className="card-image"
              priority
              quality={100}
            />
            <div className="card-text">ITR Filing</div>
          </div>
        </div>
        
        <div className="card-overlay-bottom">
          <div className="card-container">
            <Image
              src="/Images/card.png"
              alt="Card"
              width={350}
              height={120}
              className="card-image"
              priority
              quality={100}
            />
            <div className="card-text-bottom">Audit</div>
          </div>
        </div>
        <div className="card-overlay-right">
          <div className="card-container">
            <Image
              src="/Images/card1.png"
              alt="Card1"
              width={350}
              height={120}
              className="card-image"
              priority
              quality={100}
            />
            <div className="card-text-right">GST&nbsp;Return</div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="tel:+91" className="social-icon phone-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>
          
          <a href="https://instagram.com" target="_blank" className="social-icon instagram-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a href="https://wa.me/91" target="_blank" className="social-icon whatsapp-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
          </a>
          
          <a href="https://facebook.com" target="_blank" className="social-icon facebook-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="cta-buttons">
              <a href="#services" className="btn btn-primary">
                <svg className="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Our Services
              </a>
              <a href="#contact" className="btn btn-secondary">
                <svg className="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Small Blog Section */}
      <section id="about" className="smallblog">
        <div className="container">
          <div className="blog-content">
            <div className="blog-image">
              <Image
                src="/Images/blog.png"
                alt="CA Shobh Raj Jaiswal Team"
                width={500}
                height={400}
                className="blog-img"
                priority
                quality={100}
              />
            </div>
            <div className="blog-text">
              <h2>We Are Team CA Shobh Raj Jaiswal - Chartered Accountant Firm In India</h2>
              <p>
                CA Shobh Raj Jaiswal is a leading chartered accountant firm in India, offering 
                reliable, end-to-end financial services for startups, SMEs, and global 
                businesses. At CA Shobh Raj Jaiswal, we take pride in being one of the most 
                trusted Chartered Accountant firms in India. Our goal is to provide 
                complete financial, accounting, and business advisory solutions that 
                help individuals and companies grow with confidence.
              </p>
              <p>
                As a trusted accounting solutions company in India, we specialise in 
                bookkeeping, business consulting, business setups in India, Indian tax 
                filing, audits, and virtual CFO services. Our expert team ensures 
                accuracy, compliance, and growth-focused insights using modern 
                cloud tools.
              </p>
              <p>
                You can simplify your finances and scale your business with CA Shobh Raj 
                Jaiswal's comprehensive suite of services tailored to meet the unique 
                needs of companies across sectors. From auditing and taxation to 
                advisory and consultancy services, we deliver meticulous attention to 
                detail and innovative solutions that empower you to navigate 
                complex financial landscapes with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Table Component */}
      <ServicesTable />

      {/* Footer */}
      <Footer />
    </main>
  )
}