import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import color from '../../utils/style/color'

const StyledLink = styled(Link)`
  padding: 15px;
  color: ${color.secondary};
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color:${color.primary};`}
`

function Header() {
  const [questionNumber, setQuestionNumber] = useState(1)
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to={`/survey/${questionNumber}`} $isFullLink>
        Faire le test
      </StyledLink>
      <StyledLink to={`/freelances`}>Freelances</StyledLink>
    </nav>
  )
}
export default Header
