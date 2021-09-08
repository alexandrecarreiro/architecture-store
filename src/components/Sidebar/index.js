import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Area = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 25px;
  width: 100%;

  @media (max-width: 576px) {
    width: calc(100% - 30px);
    align-self: center;
  }
`;

const Header = styled.div`
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 3px 3px;
  display: flex;
  height: 50px;
  width: 100%;

  & > h3 {
    flex: 1;
    margin: 15px;
  }
`;

const Icon = styled.img`
  flex: 1;
  margin-left: 5px;
  max-height: 24px;
  max-width: 24px;
  padding: 10px;

  @media (min-width: 992px) {
    display: none;
  }
`;

const Content = styled.div`
  overflow: hidden;

  & > div {
    padding: 15px;
  }
`;

const forwardRefToContent = forwardRef(({ children }, ref) => (
  <Content ref={ref}>{children}</Content>
));

forwardRefToContent.displayName = "MotionContent";

const MotionContent = motion(forwardRefToContent);

function Sidebar() {
  const [isFilterVisible, setIsFilterVisible] = useState("visible");

  function handleFilterAnimate() {
    if (window.screen.width < 992) {
      setIsFilterVisible("hidden");
    } else {
      setIsFilterVisible("visible");
    }
  }

  useEffect(() => {
    handleFilterAnimate();

    window.addEventListener("resize", handleFilterAnimate);
  }, []);

  return (
    <Area>
      <Header>
        <h3>Filtro</h3>
        <Icon
          onClick={() =>
            setIsFilterVisible(
              isFilterVisible === "visible" ? "hidden" : "visible"
            )
          }
          src={
            isFilterVisible === "visible"
              ? "icons/filter-up.png"
              : "icons/filter-down.png"
          }
        />
      </Header>
      <MotionContent
        initial="visible"
        animate={isFilterVisible}
        variants={{
          hidden: {
            height: 1,
          },
          visible: {
            height: "100%",
            transition: {
              delay: 0,
            },
          },
        }}
      >
        <div>
          <h3>Content</h3>
        </div>
      </MotionContent>
    </Area>
  );
}

export default Sidebar;
