import React from 'react';

type Photo = {
  url: string;
  caption: string;
};

type PhotoViewerProps = {
  photos: Photo[];
};

const PhotoViewer: React.FC<PhotoViewerProps> = ({ photos }) => {
  return (
    <div className="photo-viewer">
      {photos.map((photo, index) => (
        <div key={index} className="flex flex-col items-center mb-4">
          <img src={photo.url} alt={`Photo ${index + 1}`} className="max-w-full rounded-lg" />
          <p className="mt-2 text-sm text-gray-600">{photo.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoViewer;
