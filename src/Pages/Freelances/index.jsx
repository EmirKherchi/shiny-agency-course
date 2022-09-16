import Card from '../../Components/Card/index'
import styled from 'styled-components'
import color from '../../utils/style/color'

const CardsBaseline = styled.div`
  text-align: center;
  line-height: 40px;
  margin-bottom: 2.5rem;
  & h1 {
    font-weight: 700;
    font-size: 30px;
  }
  & span {
    font-weight: 700;
    font-size: 20px;
    color: ${color.secondary};
  }
`
const CardsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 24px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

function Freelances() {
  return (
    <div>
      <CardsBaseline>
        <h1>Trouvez votre prestataire</h1>
        <span>Chez Shiny nous réunissons les meilleurs profils pour vous.</span>
      </CardsBaseline>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
