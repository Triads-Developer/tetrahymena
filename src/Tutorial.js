import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

function Tutorial({ handleDismissTutorial }) {
  return (
    <>
      <div className='tutorial-box'>
        <h2>Welcome to Washington University in St. Louis&apos; Tetrahymena Stock Center.</h2>
        <p>
          The national Tetrahymena Stock Center (TSC) is located at Washington University in St Louis where it serves as a centralized
          repository and distribution site for a variety of Tetrahymena strains of T. thermophila, the most commonly used laboratory
          species, and a variety of other species derived from both laboratory maintained stocks and wild isolates.
        </p>

        <Button variant='text' id='tutorial-button' onClick={handleDismissTutorial}>
          Begin searching
        </Button>
      </div>
    </>
  )
}

Tutorial.propTypes = {
  handleDismissTutorial: PropTypes.func
}

export default Tutorial
