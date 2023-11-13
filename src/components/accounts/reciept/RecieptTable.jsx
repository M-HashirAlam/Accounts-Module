import { useState, useMemo } from "react";
import { TextField } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import {
  FormControl,
  Select,
  MenuItem,

} from "@mui/material";

const data = {
  sequence: "",
  title: "",
  detail: "",
  description: "",
  credit: "",
  cheque: "",
  slip: "",
}

const RecieptTable = (props) => {
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
      color: "black",
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
      size: 10,
      
      Edit: ({ cell }) => (
        console.log(cell),
        < TextField
        type="number"
          id="sequence"
          // sx={inputCustomStyle}
          sx={{width:"50px"}}
          disabled
        //   label="Sequence"
          variant="standard"
          value={cell.row.index+1}
          onChange={(e) => handleSaveCell(cell, e.target.value)}
          // onBlur={(e) => {
          //   if (cell.row.index == rowIndex && e.target.value.length > 0) {
          //     setTableData([
          //       ...tableData,
          //       data
          //     ]);
          //     setRowIndex(rowIndex + 1);
          //   }
          // }
          // }
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
                      // sx={inputCustomStyle}
                      id="detail"
                      fullWidth
                      
                      inputProps={{
                        "aria-label": "Without label",
                      }}
                      displayEmpty
                      size="small"
                    >
                      

                      <MenuItem value="Detail 1">Detail 1</MenuItem>
                      <MenuItem value="Detail 2">Detail 2</MenuItem>
                      <MenuItem value="Detail 3">Detail 3</MenuItem>
                    </Select> 
                  </FormControl>
        // <TextField id="detail" sx={inputCustomStyle}  variant="standard" />
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
      accessorKey: "credit",
      header: "Credit",
      size: 80,
      Edit: ({ cell }) => (
        <TextField id="credit" sx={inputCustomStyle}  variant="standard" />
      ),
    },
    {
      accessorKey: "cheque",
      header: "Cheque No.",
      size: 80,
      Edit: ({ cell }) => (
        <TextField id="cheque" sx={inputCustomStyle}  variant="standard" />
      ),
    },
    {
      accessorKey: "slip",
      header: "Slip No",
      size: 80,
      Edit: ({ cell }) => (
        <TextField id="city" sx={inputCustomStyle}  variant="standard"
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
          // editingMode
          editDisplayMode="table"
          autoResetPageIndex={false}
          enableEditing
          renderRowActions={false}
          muiTableBodyCellProps={{
            sx:{padding: '0.5rem'}
          }}
       
        />
        {/* </div> */}
      </div>
      
    
  );
};

export default RecieptTable;
