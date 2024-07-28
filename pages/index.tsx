import { useEffect, useState } from 'react';
import Image from 'next/image';
import HamburgerMenu from '../components/HamburgerMenu';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HamburgerMenu />
      <div className={`landing-page ${isLoaded ? 'loaded' : ''}`}>
        <div className="background-image-wrapper">
          <Image
            src="https://f005.backblazeb2.com/file/artarchive/face_roots_early.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="background-image"
          />
        </div>
        <div className="header">
          <h1 className="fade-in">Your Name</h1>
          <h2 className="fade-in">Portfolio Title</h2>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
      <style jsx>{`
        .landing-page {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          text-align: center;
          overflow: hidden;
        }
        .background-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .background-image {
          transition: opacity 1s ease-in-out;
        }
        .header {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 1;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px;
          border-radius: 10px;
        }
        .fade-in {
          font-family: 'ReduxRegular', sans-serif;
          font-weight: bold;
          color: #fff;
          margin: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .loaded .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .footer {
          width: 100%;
          text-align: center;
          padding: 16px;
          background-color: rgba(255, 255, 255, 0.8);
          position: absolute;
          bottom: 0;
        }
        .footer p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default HomePage;
