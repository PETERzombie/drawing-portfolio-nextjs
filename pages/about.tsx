import BackArrow from '../components/BackArrow';
import HamburgerMenu from '../components/HamburgerMenu';

const AboutPage = () => {
  return (
    <>
      <BackArrow />
      <HamburgerMenu />
      <div className="about-page">
        <h1>About</h1>
        {/* Add your about content here */}
      </div>
      <style jsx>{`
        .about-page {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default AboutPage;
