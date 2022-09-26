import Card from '../../Components/Card/index'
import styled from 'styled-components'
import color from '../../utils/style/color'
import { Loader } from '../../utils/style/atom'
import { useFetch, useTheme } from '../../utils/hooks/index'

// Style
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
    color: ${({ theme }) =>
      theme === 'light' ? color.primary : color.backgroundLight};
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

// Component
function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )
  const freelanceProfiles = data?.freelancersList

  // useEffect(() => {
  //   async function getFreelanceProfiles() {
  //     setDataLoading(true)
  //     try {
  //       const response = await fetch('http://localhost:8000/freelances')
  //       const data = await response.json()
  //       setFreelanceProfiles(data.freelancersList)
  //     } catch (error) {
  //       setFetchError(true)
  //       console.log(error)
  //     } finally {
  //       setDataLoading(false)
  //     }
  //   }
  //   getFreelanceProfiles()
  // }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <CardsBaseline theme={theme}>
        <h1>Trouvez votre prestataire</h1>
        <span>Chez Shiny nous réunissons les meilleurs profils pour vous.</span>
      </CardsBaseline>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelanceProfiles.map((profile, index) => (
            <Card
              theme={theme}
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
