import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 300); // Delay to ensure the image is preloaded and the fade-in is noticeable

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`landing-page ${loaded ? 'loaded' : ''}`}
      style={{ backgroundImage: "url('https://f005.backblazeb2.com/file/artarchive/face_roots_early.jpg')" }}
    >
      <h1 className="fade-in">JIM SHEBIB - Drawings</h1>
    </div>
  );
};

export default Home;
