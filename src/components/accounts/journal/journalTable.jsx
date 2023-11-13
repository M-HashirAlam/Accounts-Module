import { useState, useMemo } from "react";
import { TextField } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import NativeSelect from '@mui/material/NativeSelect';

import {
  Box,
  Modal,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const data = {
  sequence: "",
  title: "",
  description: "",
  debit: "",
  credit:"",
  detail :""
}

const JournalTable = (props) => {
  const [tableData, setTableData] = useState([data]);
  const [rowIndex, setRowIndex] = useState(0);
  const [seqVal,setseqVal]=useState(1)




  console.log(tableData);


  const handleSaveCell = (cell, value) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
    tableData[cell.row.index][cell.column.id] = value;
    //send/receive api updates here
    setTableData([...tableData]); //re-render with new data
  };

  const inputCustomStyle = {
    "& .MuiInputBase-root": {
      "&:after": {
        borderBottom: '2px solid black'
      }
    },
    "& label.Mui-focused": {
      color: "#24388a",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      backgroundColor: "#f6f6f6",
      margin: 0,
      paddingTop: 0.5,
    },
  };

  const columns = useMemo(() => [
    {
      accessorKey: "sequence",
      header: "Seq",
      size: "small",
      Edit: ({ cell }) => (
        console.log(cell),
        < TextField
          id="sequence"
          value={cell.row.index+1}
          sx={{width:"50px"}}
          disabled
          type="number"
          variant="standard"
          size="small"
          onChange={(e) => handleSaveCell(cell, e.target.value)}
          
        />
      ),
    },
    {
      accessorKey: "title",
      header: "Title Of Accounts",
      size: 80,
      Edit: ({ cell }) => (
        <FormControl
                    
                    fullWidth
                    size="small"
                    variant="standard"
              
                    sx={inputCustomStyle}
                    
                  >
                    {/* <InputLabel id="bank">Deposit Bank Name</InputLabel> */}
                    <Select 
                      labelId="bank"
                      
                      id="bank"
                      fullWidth
                      
                      
                      inputProps={{
                        "aria-label": "Without label",
                      }}
                      displayEmpty
                      size="small"
                    >
                      <MenuItem value="title1">Title 1</MenuItem>
                      <MenuItem value="title2">Title2</MenuItem>
                      <MenuItem value="title3">Title3</MenuItem>
                      
                    </Select>
                  </FormControl>
        // <TextField id="title" sx={inputCustomStyle}  variant="standard" />
      ),
    },
    {
      accessorKey: "detail",
      header: "Sub-Account Detail",
      size: 80,
      Edit: ({ cell }) => (
        <FormControl
                    fullWidth
                    size="small"
                    variant="standard"
                    sx={inputCustomStyle}
                  >
                    {/* <InputLabel id="bank">Deposit Bank Name</InputLabel> */}
                    <Select
                      labelId="detail"
                      id="detail"
                      fullWidth
                      inputProps={{
                        "aria-label": "Without label",
                      }}
                      displayEmpty
                      size="small"
                    >
                      <MenuItem value={5}> </MenuItem>
                      <MenuItem value={10}>Detail</MenuItem>
                      <MenuItem value={20}>Detail 1</MenuItem>
                      <MenuItem value={30}>Detail 2</MenuItem>
                    </Select> 
                  </FormControl>
        
      ),
    },
    
    {
      accessorKey: "description",
      header: "Description",
      size: 80,
      Edit: ({ cell }) => (
        <TextField id="description" sx={inputCustomStyle} multiline variant="standard" />
      ),
    },
    {
      accessorKey: "debit",
      header: "Debit",
      size: 80,
      Edit: ({ cell }) => (
        <TextField id="debit" sx={inputCustomStyle}  variant="standard" />
      ),
    },
    {
      accessorKey: "credit",
      header: "Credit",
      size: 80,
      Edit: ({ cell }) => (
        <TextField id="cheque" sx={inputCustomStyle}  variant="standard"
        onKeyDown={(e) => {
          
          if(e.key=='Enter'){
          if (cell.row.index == rowIndex && e.target.value != '') {
            setTableData([
              ...tableData,
              data
            ]);
            setseqVal(seqVal+1)
            setRowIndex(rowIndex + 1);
          }
        }
        }
      }
         />
      ),
    },
    
    
    

  ]);
  return (
    <div className="flex w-full flex-col px-4">
    
      {/* <div className="max-w-5xl"> */}
        <MaterialReactTable          columns={columns}
          enableTopToolbar={false}
          data={tableData}
          muiTablePaperProps={{ sx: { borderRadius: "10px" } }}
          muiTableContainerProps={{ sx: { borderRadius: "10px" } }}
          editDisplayMode="table"
          renderRowActions={false}
          autoResetPageIndex={false}
          enableEditing
          muiTableBodyCellProps={{
            sx:{padding: '0.5rem'}
          }}
       
        />
        {/* </div> */}
      </div>
      
    
  );
};

export default JournalTable;
