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
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

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
        setFreelanceProfiles(data.freelancersList)
      } catch (error) {
        setFetchError(true)
        console.log(error)
      } finally {
        setDataLoading(false)
      }
    }
    getFreelanceProfiles()
  }, [])

  if (fetchError) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <CardsBaseline>
        <h1>Trouvez votre prestataire</h1>
        <span>Chez Shiny nous réunissons les meilleurs profils pour vous.</span>
      </CardsBaseline>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
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
