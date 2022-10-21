import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

import Logo from '../../assets/logo.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}

export default Header
