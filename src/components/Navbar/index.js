import React from 'react'
import Link from 'next/link'

import { Container, Nav } from './styles'

function Navbar(props) {
  return (
    <Container selected={props.selected}>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <a>PÁGINA INICIAL</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>CAMISETA</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>CALÇAS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>SAPATOS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>CONTATO</a>
            </Link>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}

export default Navbar
