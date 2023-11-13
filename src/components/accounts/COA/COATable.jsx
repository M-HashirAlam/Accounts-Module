import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(account, title, type, level) {
  return { account, title, type, level };
}

const rows = [
  createData('001', "Assets", "Control", 1),
  createData('002', "Liabilities", "Control", 1),
  createData('003', "Owner's Equity", "Control", 1),
  createData('004', "Revenues", "Control", 1),
  createData('005', "Expenses", "Control", 1),
];

const ChartsTable = ({ Tdata }) => {
  const [chartData,setChartsData]=React.useState( [])
  React.useEffect(()=>{
    setChartsData(Tdata || [])
    // console.log(chartData,'aaaaaa')
  },[Tdata])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell sx={{ fontWeight: 700 }}>Account</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Title</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Type</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {chartData.map((row) =>
           (
            
            <TableRow
              key={row.accId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th">
                {row.accId}
              </TableCell>
              {/* <TableCell>{row.account}</TableCell> */}
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.aclevel}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ChartsTable;