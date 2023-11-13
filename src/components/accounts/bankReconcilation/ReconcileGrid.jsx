import React, { useCallback, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip,Checkbox,FormControlLabel,FormGroup } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment"
const data = [
  {
    date: "24-10-2023",
    invoice: "INV-21-12-009",
    description: "Buying Goods",
    narration: "Transfer",
    cheque: 100000,
    debit: 5000,
    credit: 4000,
    clear: "Yes",
    reconcile: "26-10-2023",
  },
  {
    date: "24-8-2023",
    invoice: "INV-21-122-009",
    description: "Buying Goods",
    narration: "Transfer",
    cheque: 100600,
    debit: 5500,
    credit: 4090,
    clear: "Yes",
    reconcile: "16-10-2023",
  },
  {
    date: "24-10-2022",
    invoice: "INV-31-12-009",
    description: "Buying Goods",
    narration: "Transfer",
    cheque: 140000,
    debit: 5080,
    credit: 4400,
    clear: "No",
    reconcile: "26-10-2023",
  },


];
const inputCustomStyle = {
  "& .MuiInputBase-root": {
    "&:after": {
      borderBottom: '2px solid #24388a'
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

const ReconcileGrid = () => {
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !window.confirm(
          `Are you sure you want to delete: ${row.getValue("invoice")}`
        )
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const columns = useMemo(() => [
    {
      accessorKey: "date",
      header: "Date",
      enableColumnOrdering: false,
      enableEditing: false,
      enableSorting: false,
      size: 80,
    },
    {
      accessorKey: "invoice",
      header: "Invoice No.",
      size: 80,
      enableEditing: false,
    },
    {
      accessorKey: "description",
      header: "Description",
      size: 80,
      enableEditing: false,
    },
    {
      accessorKey: "narration",
      header: "Narration",
      size: 80,
      enableEditing: false,
    },
    {
      accessorKey: "cheque",
      header: "Cheque No.",
      size: 80,
      enableEditing: false,
    },

    {
      accessorKey: "debit",
      header: "Debit",
      size: 80,
      enableEditing: false,
    },
    {
      accessorKey: "credit",
      header: "Credit",
      size: 80,
      enableEditing: false,
    },
    {
      accessorKey: "clear",
      header: "Clear",
      size: 80,
      enableEditing: false,
    },
    {
      accessorKey: "reconcile",
      header: "Reconcile Date",
      size: 80,
      Edit: ({ cell }) => (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Date"
            //format="dd.mm.yyyy"
            //value={moment(cell.row.original.reconcile).format('lll')}
            slotProps={{
              input: {
                size: "small",
                fullWidth: true,
                variant: "standard",
                sx: inputCustomStyle,
              },
            }}
          />
        </LocalizationProvider>
      ),
    },


  ]);

  return (
    <>
      <MaterialReactTable
      
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        editingMode="row" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderTopToolbarCustomActions={()=>(
          <FormGroup aria-label="position" row
          sx={{display:"flex",alignItems:"space-between",paddingX:1}}
           >
        <FormControlLabel control={<Checkbox  />} label="Clear" />
        <FormControlLabel  control={<Checkbox />} label="Unclear" />
        </FormGroup>
        )}
        renderRowActions={({ row, table }) => (

          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>

          </Box>

        )}
      />
      <div className="flex mr-1">
      <div className="my-5  flex w-full justify-end">
            <button className="mr-5 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-5">
                New
              </button>
              <button className="mr-2 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
                Submit
              </button>
              
            </div>
            </div>
    </>
  );
};

export default ReconcileGrid;
