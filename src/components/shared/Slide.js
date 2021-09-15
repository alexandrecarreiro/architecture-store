import styled from "styled-components";
import { useRef, useState, useLayoutEffect, forwardRef } from "react";
import { motion, useSpring } from "framer-motion";

const Area = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const SwipeArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 100;

  & > div {
    display: flex;
    flex: 1;

    &:nth-child(2n + 1) {
      justify-content: flex-start;
    }

    &:nth-child(2n) {
      justify-content: flex-end;
    }
  }

  &:hover {
    & > div > img {
      display: flex;
    }
  }
`;

const SwipeIcon = styled.img`
  display: none;
  height: 32px;
  opacity: 0.5;
  transform: rotate(${(props) => (!props.next ? "90" : "-90")}deg);
  width: 32px;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
`;

const forwardRefToImg = forwardRef((props, ref) => (
  <Img ref={ref} {...props} />
));

forwardRefToImg.displayName = "MotionImg";

const MotionImg = motion(forwardRefToImg);

function Slide({ images }) {
  const slideRef = useRef();
  const [slideWidth, setSlideWidth] = useState(0);
  const right = useSpring(0);

  useLayoutEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
    }
  }, []);

  function swipe(type) {
    let rightPosition = right.get();

    if (type === "next" && rightPosition < slideWidth * (images.length - 1)) {
      return right.set(rightPosition + slideWidth);
    }

    if (type === "previous" && rightPosition > 0) {
      return right.set(rightPosition - slideWidth);
    }

    return;
  }
  return (
    <Area ref={slideRef} slideWidth={slideWidth}>
      <SwipeArea>
        <div>
          <SwipeIcon
            src="icons/filter-up.png"
            onClick={() => swipe("previous")}
            next
          />
        </div>
        <div>
          <SwipeIcon
            src="icons/filter-up.png"
            onClick={() => swipe("next")}
            previous
          />
        </div>
      </SwipeArea>
      {images.map(({ url }, key) => (
        <MotionImg src={url} style={{ right }} key={key} />
      ))}
    </Area>
  );
}

export default Slide;
