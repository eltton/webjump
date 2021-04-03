import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

function SideBar() {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a>Página Inicial</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Camisetas</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Calças</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sapatos</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </Container>
  )
}

export default SideBar
