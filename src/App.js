import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import './App.css'
import Controls from './Controls.js'
import Tutorial from './Tutorial.js'
import Search from './search.js'
import ResultsGrid from './ResultsGrid.js'
import * as Constants from './constants.js'

/*
 * This app will contain two components, a toggle and a button
 * When the toggle is off, the button will be disabled
 * When the toggle is on, the button will be enabled
 *
 * When the toggle is flipped, a note will be sent to the console (to emulate
 * hitting the database)
 * When the button is pressed, a note will be sent to the console
 */

function App() {
  const [showIntro, setShowIntro] = React.useState(true)
  const [results, setResults] = React.useState([])

  const handleDismissTutorial = (event) => {
    if (event) {
      setResults(Search(Constants.Datasets.strains, {}))
      setShowIntro(false)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
      {showIntro && <Tutorial handleDismissTutorial={handleDismissTutorial} /> }
      {!showIntro && 
        <Box sx={{ m: 5 }}>
          <Link rel="noopener noreferrer"  target="_blank" href="https://wustl.az1.qualtrics.com/jfe/form/SV_1AMfQBkC0fRdNrg">Click here to request available strains and/or plasmids, isolated genomic DNA, and/or media packets</Link>
        </Box>
      }
        <ResultsGrid results={results} />
      </header>
    </div>
  )
}

export default App
