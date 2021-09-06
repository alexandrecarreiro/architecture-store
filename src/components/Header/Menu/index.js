import { forwardRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "./Button";
import navigation from "./navigation.json";

const ButtonArea = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;

  @media (max-width: 992px) {
    margin-bottom: 5px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const fowardRefToButtonArea = forwardRef(({ children }, ref) => (
  <ButtonArea ref={ref}>{children}</ButtonArea>
));

fowardRefToButtonArea.displayName = "MotionButtonArea";

const MotionButtonArea = motion(fowardRefToButtonArea);

function Menu({ isVisible }) {
  return (
    <MotionButtonArea
      initial="visible"
      animate={isVisible}
      variants={{
        hidden: {
          opacity: 0,
          height: 0,
        },
        visible: {
          opacity: 1,
          height: "100%",
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      {navigation.map((index, key) => (
        <Button title={index.title} route={index.route} key={key} />
      ))}
    </MotionButtonArea>
  );
}

export default Menu;
