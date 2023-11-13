import React, { useCallback, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
const data = [
  {
    id: 1,
    name: "National Bank of Bahrain",
    branch: "Main Branch",
    address: "Manama, Bahrain",
    telephone: 67989439,
    b_no: 6-1-1-20310-402-336331,
    nature: "Current",
    currency: "USD",
    status: "Active",
    IBAN:'GB33BUKB20201555555555'
  },
  {
    id: 2,
    name: "Ahli United Bank",
    branch: "Main Branch",
    address: "Manama, Bahrain",
    telephone: 6796639,
    b_no: 6-1-3-25310-462-3566134,
    nature: "Locker",
    currency: "EUR",
    status: "Active",
    IBAN:'GB94BARC10201530093459'
  },
  {
    id: 3,
    name: "Bahrain Development Bank",
    branch: "Central Branch",
    address: "Manama, Bahrain",
    telephone: 600015,
    b_no: 4-3-2-24320-132-3586134,
    nature: "Saving",
    currency: "BHD",
    status: "In Active",
    IBAN:'GB94BARC20201530093459 '
  },
  
  
  
];

const BankGrid = () => {
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
          `Are you sure you want to delete: ${row.getValue("name")}`
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
      accessorKey: "id",
      header: "Bank Id",
      enableColumnOrdering: false,
      enableEditing: false,
      enableSorting: false,
      size: 80,
    },
    {
      accessorKey: "name",
      header: "Bank Name",
      size: 80,
    },
    {
      accessorKey: "branch",
      header: "Branch Name",
      size: 80,
    },
    {
      accessorKey: "address",
      header: "Bank Address",
      size: 80,
    },
    {
      accessorKey: "telephone",
      header: "Bank Telephone",
      size: 80,
    },
    
    {
      accessorKey: "b_no",
      header: "Bank Account Number",
      size: 80,
    },
    {
      accessorKey: "nature",
      header: "Account Nature",
      size: 80,
    },
    {
      accessorKey: "currency",
      header: "Currency",
      size: 80,
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 80,
    },
    {
        accessorKey: "IBAN",
        header: "IBAN",
        size: 80,
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
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
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
    </>
  );
};

export default BankGrid;
