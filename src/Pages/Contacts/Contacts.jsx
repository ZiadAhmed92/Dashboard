import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './data';

import Header from '../../Components/Header/Header';
const Contacts = () => {
  return (
    <>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
    <Box sx={{ height: 650,   mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box></>
  )
}

export default Contacts