import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

const Area = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

const Center = styled.span`
  align-items: center;
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: row;
  left: 0px;
  top: 0px;
  width: 100%;

  @media (max-width: 991px) {
    align-items: center;
    justify-content: center;
    flex: 4;
  }
`;

const Side = styled.span`
  display: none;

  @media (max-width: 576px) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

function Logo({ toggleMenu }) {
  const router = useRouter();

  return (
    <Area>
      <Side onClick={toggleMenu}>
        <Image
          className="pointer"
          src="/icons/menu.svg"
          alt="menu"
          height={32}
          width={32}
          layout="fixed"
          objectFit="contain"
        />
      </Side>
      <Center onClick={() => router.push("/")}>
        <Image
          className="pointer"
          src="/Logo.svg"
          alt="Architecture Store"
          height={50}
          width={180}
          layout="fixed"
          objectFit="contain"
        />
      </Center>
      <Side />
    </Area>
  );
}

export default Logo;
