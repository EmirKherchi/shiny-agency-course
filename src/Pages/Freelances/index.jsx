import { useState, useEffect } from 'react'
import Card from '../../Components/Card/index'
import styled from 'styled-components'
import color from '../../utils/style/color'
import { Loader } from '../../utils/style/atom'

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
  gap: 32px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem;
`

// const freelanceProfiles = [
//   {
//     name: 'Jane Doe',
//     jobTitle: 'Devops',
//   },
//   {
//     name: 'John Doe',
//     jobTitle: 'Developpeur frontend',
//   },
//   {
//     name: 'Jeanne Biche',
//     jobTitle: 'Développeuse Fullstack',
//   },
//   {
//     name: 'Jeanne Biche',
//     jobTitle: 'Développeuse Fullstack',
//   },
// ]

function Freelances() {
  const [freelanceProfiles, setFreelanceProfiles] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    async function getFreelanceProfiles() {
      setDataLoading(true)
      try {
        const response = await fetch('http://localhost:8000/freelances')
        const data = await response.json()
        console.log(data.freelancersList)
        setFreelanceProfiles(data.freelancersList)
        // const { freelancersList } = await response.data
        // console.log(freelancersList)
        // setFreelanceProfiles(await freelancersList)
      } catch (error) {
        setFetchError(true)
        console.log(error)
      } finally {
        setDataLoading(false)
      }
    }
    getFreelanceProfiles()
  }, [])

  return (
    <div>
      <CardsBaseline>
        <h1>Trouvez votre prestataire</h1>
        <span>Chez Shiny nous réunissons les meilleurs profils pour vous.</span>
      </CardsBaseline>
      {isDataLoading || fetchError ? (
        isDataLoading ? (
          <Loader />
        ) : (
          <p>There is an error</p>
        )
      ) : (
        <CardsContainer>
          {freelanceProfiles.map((profile, index) => (
            <Card
              key={profile.id}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
