import React, { useCallback, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
const data = [
  {
    sequence: "1",
    title: "Bank Title",
    detail: "Bank Detail",
    description: "Item Sold",
    credit: 10000,
    debit: 23456,
    
  },
  {
    sequence: 2,
    title: "Bank Title",
    detail: "Bank Detail",
    description: "Item Sold",
    credit: 120000,
    debit: 26456,
    
    
  },
  {
    sequence: 3,
    title: "Bank Title",
    detail: "Bank Detail",
    description: "Item Sold",
    credit: 130000,
    debit: 27456,
  },  
];

const JournalGrid = () => {
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
          `Are you sure you want to delete ${row.getValue("firstName")}`
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
      accessorKey: "sequence",
      header: "Sequence",
      enableColumnOrdering: false,
      enableEditing: false,
      enableSorting: false,
      size: 80,
    },
    {
      accessorKey: "title",
      header: "Title Of Accounts",
      size: 80,
    },
    
    {
      accessorKey: "description",
      header: "Description",
      size: 80,
    },
    {
        accessorKey: "debit",
        header: "Debit",
        size: 80,
      },
    {
        accessorKey: "credit",
        header: "Credit",
        size: 80,
      },
    {
        accessorKey:"detail",
        header:"Sub-Account Detail",
        size:80,
    }
    
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

export default JournalGrid;
