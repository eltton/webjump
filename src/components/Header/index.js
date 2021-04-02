import {
  Container,
  AcessRegister,
  TopHeader,
  LinkStyle,
  MainHeader,
  Logo,
  Search,
  Input,
  Button
} from './styles'
import Link from 'next/link'

function Header() {
  return (
    <Container>
      <TopHeader>
        <AcessRegister>
          <Link href="#" passHref>
            <LinkStyle>Acesse sua Conta</LinkStyle>
          </Link>
          ou
          <Link href="#" passHref>
            <LinkStyle>Cadastre-se</LinkStyle>
          </Link>
        </AcessRegister>
      </TopHeader>

      <MainHeader>
        <Logo />
        <Search>
          <Input></Input>
          <Button>Buscar</Button>
        </Search>
      </MainHeader>
    </Container>
  )
}

export default Header
