import BackArrow from '../components/BackArrow';
import HamburgerMenu from '../components/HamburgerMenu';
import PhotoViewer from '../components/PhotoViewer';

const images = [
  { url: 'https://f005.backblazeb2.com/file/artarchive/face_roots_early.jpg', caption: 'Caption 1' },
  { url: 'https://f005.backblazeb2.com/file/artarchive/another_image.jpg', caption: 'Caption 2' },
  { url: 'https://f005.backblazeb2.com/file/artarchive/yet_another_image.jpg', caption: 'Caption 3' },
];

const GalleryPage = () => {
  return (
    <>
      <BackArrow />
      <HamburgerMenu />
      <div className="gallery-page">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <PhotoViewer key={index} url={image.url} caption={image.caption} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .gallery-page {
          padding: 20px;
          text-align: center;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default GalleryPage;
