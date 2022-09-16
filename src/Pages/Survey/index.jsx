import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <li>
        <Link
          to={
            parseFloat(questionNumber) < 2
              ? '/survey/1'
              : `/survey/${parseFloat(questionNumber) - 1}`
          }
        >
          Previous Question
        </Link>
      </li>
      <li>
        <Link
          to={
            parseFloat(questionNumber) !== 10
              ? `/survey/${parseFloat(questionNumber) + 1}`
              : '/results'
          }
        >
          Next Question
        </Link>
      </li>
      <h2>Question numero {questionNumber}</h2>
    </div>
  )
}
export default Survey
