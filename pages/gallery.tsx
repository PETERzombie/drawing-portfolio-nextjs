import React from 'react';
import PhotoViewer from '../components/PhotoViewer';

const photos = [
  { url: 'https://backblaze-url1', caption: 'Caption 1' },
  { url: 'https://backblaze-url2', caption: 'Caption 2' },
  { url: 'https://backblaze-url3', caption: 'Caption 3' },
];

const Gallery: React.FC = () => {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <PhotoViewer photos={photos} />
    </div>
  );
};

export default Gallery;
