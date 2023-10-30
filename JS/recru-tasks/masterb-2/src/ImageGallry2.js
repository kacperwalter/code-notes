import { useRef, useState, useEffect } from 'react';

function ImageGallery({ images }) {
  const containerRef = useRef();
  const [visibleImages, setVisibleImages] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && currentIndex < images.length - 3) {
          setCurrentIndex(prevIndex => prevIndex + 3);
          setVisibleImages(prevVisibleImages => prevVisibleImages + 3);
          console.log('new images loaded')
        } else if (currentIndex < images.length && currentIndex + 3 > images.length) {
          const remaining = images.length - currentIndex;
          setCurrentIndex(prevIndex => prevIndex + remaining);
          setVisibleImages(prevVisibleImages => prevVisibleImages + remaining);
          console.log('new images loaded')

        }
      });
    }, options);

    containerRef.current && observer.observe(containerRef.current);

    return () => containerRef.current && observer.unobserve(containerRef.current);
  }, [images, currentIndex]);

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
