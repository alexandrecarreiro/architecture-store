import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const InputArea = styled.form`
  align-items: center;
  display: flex;
  font-size: 16px;
  height: 100%;
  justify-content: center;
  min-height: 50px;
  padding-bottom: 0px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0px;
  width: 300px;

  &:hover {
    border-color: #222222;
    border-width: 0px 0px 2px 0px;
    outline: none;
  }

  &:focus {
    border-color: #222222;
    border-width: 0px 0px 2px 0px;
  }

  @media (max-width: 991px) {
    height: 50px;
    align-self: center;
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const Input = styled.input`
  border-radius: 0px;
  border-style: none;
  border-width: 0px;
  font-size: 16px;
  height: 80%;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  cursor: pointer;
  height: 24px;
  width: 24px;
`;

function SearchInput() {
  const [keywords, setKeywords] = useState("");
  const router = useRouter();
  return (
    <InputArea
      onSubmit={(e) => {
        e.preventDefault();
        router.push({
          pathname: "/busca",
          query: { keywords },
        });
      }}
    >
      <Input
        type="text"
        onChange={(e) => setKeywords(e.target.value)}
        value={keywords}
        placeholder="Do que você precisa?"
      />
      <Icon
        src="/icons/search.svg"
        onClick={() =>
          router.push({
            pathname: "/busca",
            query: { keywords },
          })
        }
      />
    </InputArea>
  );
}

export default SearchInput;
