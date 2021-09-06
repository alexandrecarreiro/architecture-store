import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const Span = styled.span`
  align-items: center;
  border-color: ${(props) => (props.active ? "#222222" : "#e1e1e1")};
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 100%;
  justify-content: center;
  margin-right: 20px;
  max-width: 75px;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    border-color: #222222;
    border-width: 0px 0px 2px 0px;
  }

  @media (min-width: 576px) {
    width: 200px;
    height: 50px;
  }

  @media (min-width: 992px) {
    width: 300px;
  }

  @media (max-width: 576px) {
    height: 50px;
  }
`;

function Button({ title, route }) {
  const router = useRouter();
  const active = router.pathname === route;

  return (
    <Link href={route} passHref>
      <Span active={active}>{title}</Span>
    </Link>
  );
}

export default Button;
