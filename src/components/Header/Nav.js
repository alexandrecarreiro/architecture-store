import { forwardRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const NavArea = styled.div`
  box-shadow: 5px 1px 5px #e8e8e8;
  display: flex;
  justify-content: center;
  padding: 1px;
`;

const forwardRefToNav = forwardRef(({ children }, ref) => (
  <NavArea ref={ref}>{children}</NavArea>
));

forwardRefToNav.displayName = "MotionNav";

const MotionNav = motion(forwardRefToNav);

export default function Comp({ children, isMenuVisible }) {
  return (
    <MotionNav
      initial="visible"
      animate={isMenuVisible}
      variants={{
        hidden: {
          height: 106,
        },
        visible: {
          height: "100%",
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      {children}
    </MotionNav>
  );
}
