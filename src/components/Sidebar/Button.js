import styled from "styled-components";

const Button = styled.span.attrs((props) => ({
  children: props.value,
}))`
  align-items: center;
  background-color: ${(props) => (props.selected ? "#222222" : "#ffffff")};
  border: ${(props) => (props.selected ? "" : "1px solid #e1e1e1")};
  border-radius: 5px;
  color: ${(props) => (!props.selected ? "#222222" : "#ffffff")};
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
`;

export default Button;
