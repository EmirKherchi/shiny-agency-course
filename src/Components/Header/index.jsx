import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import color from '../../utils/style/color'
import darkLogo from '../../assets/dark-logo.png'
import { SurveyContext } from '../../utils/context/SurveyProvider'

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
  const { questionsNumber } = useContext(SurveyContext)
  return (
    <HeaderNav>
      <HeaderLogo src={darkLogo} alt="logo" />
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to={`/freelances`}>Profils</StyledLink>
        <StyledLink to={`/survey/${questionsNumber}`} $isFullLink>
          {questionsNumber > 1 ? 'Reprendre le test' : 'Faire le test'}
        </StyledLink>
      </nav>
    </HeaderNav>
  )
}
export default Header
