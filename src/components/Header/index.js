import { useState } from 'react'
import Link from 'next/link'

import {
  Container,
  AcessRegister,
  TopHeader,
  LinkStyle,
  MainHeader,
  Logo,
  Search,
  Input,
  Button,
  IconSearch,
  IconClose,
  InputMobile
} from './styles'

function Header() {
  const [clickSearch, setClickSearch] = useState(false)

  const handleClick = () => setClickSearch(!clickSearch)
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
          {clickSearch ? null : (
            <>
              <Input />
              <Button>Buscar</Button>
            </>
          )}

          {clickSearch ? (
            <>
              <IconClose onClick={handleClick} />

              <InputMobile />
            </>
          ) : (
            <>
              <IconSearch onClick={handleClick} />
            </>
          )}
        </Search>
      </MainHeader>
    </Container>
  )
}

export default Header
