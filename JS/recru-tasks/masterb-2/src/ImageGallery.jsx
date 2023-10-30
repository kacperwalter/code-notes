import { useRef, useState, useEffect } from 'react';

function ImageGallery({ images }) {
  const containerRef = useRef();
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry.isIntersecting)
        entry.isIntersecting && setVisibleImages((prevVisibleImages) => prevVisibleImages + 3);
      });
    }, options);

    containerRef.current && observer.observe(containerRef.current);

    return () => containerRef.current && observer.unobserve(containerRef.current)
  }, [images]);

  return (
    <>
      <div
        className="image-gallery"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 200px)', gap: '10px' }}
        ref={containerRef}
      >
        {images.slice(0, visibleImages).map((image, index) => (
          <img src={image} key={index} />
        ))}
      </div>
    </>
  );
}

export default ImageGallery;
