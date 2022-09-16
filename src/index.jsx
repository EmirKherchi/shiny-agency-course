import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/index'
import Results from './Pages/Results/index'
import Freelances from './Pages/Freelances/index'
import Header from './Components/Header/index'
import Error from './Components/Error/index'
import Survey from './Pages/Survey/index'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <div>
      <Routes>
        <Route path="/survey" element={<Survey />}>
          <Route path=":questionNumber" element={<Survey />} />
        </Route>
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  </BrowserRouter>
)
