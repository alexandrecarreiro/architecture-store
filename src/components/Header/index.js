import Image from "next/image";
import Link from "next/link";
import Container from "components/shared/Container";
import Box from "components/shared/Box";
import Menu from "./Menu";
import Nav from "./Nav";
import SearchInput from "./Menu/SearchInput";

function Header() {
  return (
    <Nav>
      <Container>
        <Box>
          <Link href="/" passHref>
            <Image
              className="pointer"
              src="/Logo.svg"
              alt="Architecture Store"
              height={50}
              width={180}
              layout="fixed"
              objectFit="contain"
            />
          </Link>
        </Box>
        <Box flex={1}>
          <Menu />
        </Box>
        <Box justifyContent="center" alignItems="center">
          <SearchInput />
        </Box>
      </Container>
    </Nav>
  );
}

export default Header;
