import { useContext } from 'react'
import { useFetch, useTheme } from '../../utils/hooks/index'
import color from '../../utils/style/color'
import { SurveyContext } from '../../utils/context/SurveyProvider'
import { StyledLink, Loader } from '../../utils/style/atom'
import styled from 'styled-components'

// Style
const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? color.backgroundLight : color.backgroundDark};
`
const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`
const DescriptionWrapper = styled.div`
  padding: 60px;
`
const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? color.primary : color.backgroundLight};
  text-transform: capitalize;
`
const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? color.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
// Functions
export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
    return title
  } else {
    return `${title},`
  }
}
function formatQueryParams(answers) {
  const answersNumbers = Object.keys(answers)
  return answersNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstAnswer = index === 0
    const separator = isFirstAnswer ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

// Component
function Results() {
  const { theme } = useTheme()
  const { results } = useContext(SurveyContext)
  const queryParams = formatQueryParams(results)

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${queryParams}`
  )
  const resultsData = data?.resultsData

  if (error) {
    return <p> Oups... une erreur</p>
  }

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results
