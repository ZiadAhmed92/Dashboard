
import { columns, rows } from './data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import Header from '../../Components/Header/Header'

const Invoices = () => {
  return (
    <>
     <Header title="INVOICES" subTitle="List of Invoice Balances" />
  
    <Box sx={{ height: 650,   mx: "auto" }}>
      <DataGrid    rows={rows}
        // @ts-ignore
        columns={columns} slots={{ toolbar: GridToolbar }} />
    </Box></>
  )
}

export default Invoices