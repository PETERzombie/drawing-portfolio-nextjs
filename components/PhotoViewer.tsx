import { useState } from 'react';
import Image from 'next/image';

interface PhotoViewerProps {
  url: string;
  caption: string;
}

const PhotoViewer = ({ url, caption }: PhotoViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="photo-thumbnail" onClick={openModal}>
        <Image src={url} alt={caption} layout="responsive" width={300} height={300} objectFit="cover" />
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <Image src={url} alt={caption} layout="fill" objectFit="contain" />
            <p>{caption}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .photo-thumbnail {
          cursor: pointer;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          width: 80%;
          height: 80%;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
        }
        .modal-content img {
          max-width: 100%;
          max-height: 80vh;
          margin-bottom: 20px;
        }
        .modal-content p {
          text-align: center;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default PhotoViewer;
