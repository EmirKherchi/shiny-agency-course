import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import color from '../../utils/style/color'
import darkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: ${color.secondary};
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color:${color.primary};
    padding:.4rem 1.2rem
    `}
`
const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`
const HeaderLogo = styled.img`
  max-width: 10rem;
`

function Header() {
  const [questionNumber, setQuestionNumber] = useState(1)
  return (
    <HeaderNav>
      <HeaderLogo src={darkLogo} alt="logo" />
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to={`/freelances`}>Profils</StyledLink>
        <StyledLink to={`/survey/${questionNumber}`} $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </HeaderNav>
  )
}
export default Header
