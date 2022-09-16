import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [questionNumber, setQuestionNumber] = useState(1)
  return (
    <nav>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/survey/${questionNumber}`}>Survey</Link>
          </li>
          <li>
            <Link to={`/freelances`}>Freelances</Link>
          </li>
        </ul>
      </nav>
    </nav>
  )
}
export default Header
