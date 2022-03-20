

import React, { useEffect, useState } from 'react'
import { Button, Grid, Paper, FormControlLabel  } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AddCircleOutlined } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import _ from 'lodash';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import theme from '../constant/theme';
import { ThemeProvider } from "@mui/material/styles";



const MatEdit = ({ index }) => {

    const handleEditClick = () => {
        // some action
    }


    return <FormControlLabel
               control={
                   <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                       <EditIcon style={{ color: "#333" }} />
                   </IconButton>
               }
           />
};


const Customer =() => {
   
   

    const [data, setData] = useState( [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ])

    const [dataTable, setDataTable] = useState(data)

   

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            width: 140,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div  style={{ cursor: "pointer" }}>
                        <MatEdit index={params.row.id} />
                     </div>
                );
             }
          }
      ];  
    return (
        <>
        <Grid
                container
                spacing={2}
                paddingTop="32px"
                paddingBottom="32px"
                paddingLeft="24px"
                marginLeft="16px"
            >
                <Typography variant="h3">
                    Quản lý khách hàng
                </Typography>
            </Grid>
     <Paper style={{ height: 400, width: '100%', padding :" 30px" }}>

                <DataGrid
                     rows={data}
                     columns={columns}
                     pageSize={5}
                     rowsPerPageOptions={[5]}
                     checkboxSelection
                     disableSelectionOnClick
                />

     </Paper>


           
        
        </>
    )
}
export default Customer;