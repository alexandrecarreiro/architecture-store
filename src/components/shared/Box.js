import styled from "styled-components";

const Box = styled.div`
  align-items: ${(props) => props.alignItems};
  display: flex;
  flex: ${(props) => props.flex};
  height: 100%;
  justify-content: ${(props) => props.justifyContent};
`;

Box.defaultProps = {
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flex: 1,
};

export default Box;
