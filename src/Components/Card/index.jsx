import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.jpeg'
import styled from 'styled-components'
import color from '../../utils/style/color'

const CardLabel = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? color.primary : color.backgroundLight};
  font-size: 19px;
  font-weight: 400;
  margin-right: auto;
  margin: 0.8rem auto 1.6rem 0;
`
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? color.backgroundLight : color.backgroundDark};
  border-radius: 30px;
  border: ${({ theme }) =>
    theme === 'light' ? 'none' : `1px solid ${color.backgroundLight}`};
  transition: 200ms;
  width: 15rem;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
function Card({ label, title, picture, theme }) {
  return (
    <CardWrapper theme={theme}>
      <CardLabel theme={theme}> {label} </CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span> {title} </span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  title: '',
  label: '',
  picture: DefaultPicture,
}
export default Card
