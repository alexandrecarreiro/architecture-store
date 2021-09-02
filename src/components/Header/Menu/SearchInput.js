import styled from "styled-components";

const SearchInput = styled.input.attrs((props) => ({
  placeholder: props.placeholder || "O que você busca?",
}))`
  width: 100%;
  height: 60%;
  border-radius: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
  border-style: solid;
  border-width: 0px;
  border-color: #e1e1e1;
  border-width: 0px 0px 1px 0px;

  &:hover {
    outline: none;
    border-color: #222222;
    border-width: 0px 0px 2px 0px;
  }

  &:focus {
    outline: none;
    border-color: #222222;
    border-width: 0px 0px 2px 0px;
  }

  @media (min-width: 576px) {
    width: 200px;
  }

  @media (min-width: 992px) {
    width: 300px;
  }
`;

export default SearchInput;
