import styled from "styled-components";

const Area = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  & > input {
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    font-size: 18px;
    font-size: 16px;
    height: 20px;
    padding: 10px;
    width: ${(props) => (!props.width ? "95%" : props.width)};

    @media (max-width: 576px) {
      width: calc(100% - 15px);
      align-self: center;
    }

    &:focus {
      outline: none;
    }
  }
`;

function Input(props) {
  return (
    <Area>
      <input {...props} />
    </Area>
  );
}

export default Input;
