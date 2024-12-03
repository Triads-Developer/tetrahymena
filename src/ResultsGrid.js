import React from 'react'
import './App.css'
import { DataGridPro, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid-pro'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import * as Constants from './constants.js'

function ResultsGrid({ results }) {
  const columns = [
    { field: 'id', headerName: 'RRID', minWidth: 10 },
    { field: 'Name', headerName: 'Name', flex: 1, minWidth: 125 },
    { field: 'AKA', headerName: 'AKA', flex: 1, minWidth: 125 },
    { field: 'Species', headerName: 'Species', flex: 1, minWidth: 125 },
    { field: 'Description', headerName: 'Description', flex: 1, minWidth: 125 },
    { field: 'Department', headerName: 'Department', flex: 1, minWidth: 125 },
    { field: 'Gene of interest', headerName: 'Gene of Interest', flex: 1, minWidth: 125 },
    { field: 'Origin', headerName: 'Origin', flex: 1, minWidth: 125 },
    { field: 'Publications', headerName: 'Publications', flex: 1, minWidth: 125 },
    { field: 'Comments', headerName: 'Comments', flex: 1, minWidth: 125 }
  ]

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    )
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        {results.length > 0 ? (
          <DataGridPro
            rows={results}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 10 } }
            }}
            columnVisibilityModel={{
              id: false
            }}
            pagination
            checkboxSelection
            pageSizeOptions={[5, 10, 25, 50, 100]}
            autoHeight
            disableColumnFilter
            headerFilters
            slots={{ toolbar: CustomToolbar }}
          />
        ) : null}
      </Box>
    </>
  )
}

ResultsGrid.propTypes = {
  results: PropTypes.array
}

export default ResultsGrid
