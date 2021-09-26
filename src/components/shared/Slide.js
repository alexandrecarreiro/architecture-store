import { useState, useRef, useCallback } from "react";
import useIsomorphicLayoutEffect from "lib/hooks/useIsomorphicLayoutEffect";
import { Carousel } from "react-carousel-minimal/next";
import "react-carousel-minimal/stylesheet";

function Slide({ images = [] }) {
  const slideRef = useRef();
  const [slideWidth, setSlideWidth] = useState(0);

  const onWindowResize = useCallback(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
  }, []);

  return (
    <div ref={slideRef}>
      {images && (
        <Carousel
          data={images?.map((index, key) => ({ image: index.url, key: key }))}
          time={4000}
          width="100%"
          height={slideWidth * 0.66 - 30}
          radius="10px"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="#222222"
          pauseIconSize="40px"
          slideBackgroundColor="#FFF"
          slideImageFit="contain"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            padding: 15,
          }}
        />
      )}
    </div>
  );
}

export default Slide;
