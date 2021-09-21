import styled from "styled-components";

const Button = styled.span`
  align-items: center;
  background-color: #222222;
  border-radius: ${(props) => props.borderRadius || "5px"};
  color: #fff;
  cursor: pointer;
  display: flex;
  height: ${(props) => props.height || "50px"};
  justify-content: center;
  width: ${(props) => props.width || "100px"};
`;

export default Button;
