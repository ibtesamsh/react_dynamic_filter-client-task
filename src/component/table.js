// import * as React from 'react';
// import { PaginationComponent } from './Pagination.js';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import data from '../asset/data.json';

// const columns = [
//   { id: 'id', label: 'ID', minWidth: 100 },
//   { id: 'users', label: 'User', minWidth: 100 },
//   { id: 'phone_number', label: 'Phone Number', minWidth: 150 },
//   { id: 'did_number', label: 'DID Number', minWidth: 150 },
//   { id: 'reference_id', label: 'Reference ID', minWidth: 150 },
//   { id: 'disconnector', label: 'Disconnector', minWidth: 150 },
//   { id: 'end_point', label: 'End Point', minWidth: 150 },
//   { id: 'leadset', label: 'Leadset', minWidth: 150 },
//   { id: 'mode_of_calling', label: 'Mode of Calling', minWidth: 150 },
//   { id: 'call_type', label: 'Call Type', minWidth: 150 },
//   { id: 'lob', label: 'LOB', minWidth: 100 },
//   { id: 'campaign', label: 'Campaign', minWidth: 150 },
//   { id: 'process', label: 'Process', minWidth: 150 },
//   { id: 'dispose_first_level', label: 'Dispose First Level', minWidth: 150 },
//   { id: 'dispose_second_level', label: 'Dispose Second Level', minWidth: 150 },
//   { id: 'dispose_third_level', label: 'Dispose Third Level', minWidth: 150 },
//   { id: 'createdDate', label: 'Created Date', minWidth: 150 },
//   { id: 'reportType', label: 'Report Type', minWidth: 150 },
//   { id: 'fileName', label: 'File Name', minWidth: 150 },
//   { id: 'time', label: 'Time', minWidth: 100 },
//   { id: 'azureResponse', label: 'Azure Response', minWidth: 150 },
//   { id: 'queryResponse', label: 'Query Response', minWidth: 150 },
//   { id: 'action', label: 'Action', minWidth: 100 },
// ];

// export function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//   };

//   const visibleRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 400 /* Set max height for vertical scroll */ }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {visibleRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell key={column.id}>
//                     {row[column.id]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <PaginationComponent
//         totalRows={data.length}
//         onPageChange={handlePageChange}
//         onRowsPerPageChange={handleRowsPerPageChange}
//       />
//     </Paper>
//   );
// }





// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import data from '../asset/data.json'; // Import the JSON data

// // Define columns based on the structure of the data
// const columns = [
//   { id: 'id', label: 'ID', minWidth: 100 },
//   { id: 'users', label: 'User', minWidth: 100 },
//   { id: 'phone_number', label: 'Phone Number', minWidth: 150 },
//   { id: 'did_number', label: 'DID Number', minWidth: 150 },
//   { id: 'reference_id', label: 'Reference ID', minWidth: 150 },
//   { id: 'disconnector', label: 'Disconnector', minWidth: 150 },
//   { id: 'end_point', label: 'End Point', minWidth: 150 },
//   { id: 'leadset', label: 'Leadset', minWidth: 150 },
//   { id: 'mode_of_calling', label: 'Mode of Calling', minWidth: 150 },
//   { id: 'call_type', label: 'Call Type', minWidth: 150 },
//   { id: 'lob', label: 'LOB', minWidth: 100 },
//   { id: 'campaign', label: 'Campaign', minWidth: 150 },
//   { id: 'process', label: 'Process', minWidth: 150 },
//   { id: 'dispose_first_level', label: 'Dispose First Level', minWidth: 150 },
//   { id: 'dispose_second_level', label: 'Dispose Second Level', minWidth: 150 },
//   { id: 'dispose_third_level', label: 'Dispose Third Level', minWidth: 150 },
//   { id: 'createdDate', label: 'Created Date', minWidth: 150 },
//   { id: 'reportType', label: 'Report Type', minWidth: 150 },
//   { id: 'fileName', label: 'File Name', minWidth: 150 },
//   { id: 'time', label: 'Time', minWidth: 100 },
//   { id: 'azureResponse', label: 'Azure Response', minWidth: 150 },
//   { id: 'queryResponse', label: 'Query Response', minWidth: 150 },
//   { id: 'action', label: 'Action', minWidth: 100 },
// ];

// export  function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }




// import * as React from 'react';
// import { PaginationComponent } from './Pagination.js';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import data from '../asset/data.json';
// import { FiltersComponent } from './filter.js';  // Assuming Filter component is created in same folder

// const columns = [
//   { id: 'id', label: 'ID', minWidth: 100 },
//   { id: 'users', label: 'User', minWidth: 100 },
//   { id: 'phone_number', label: 'Phone Number', minWidth: 150 },
//   { id: 'did_number', label: 'DID Number', minWidth: 150 },
//   { id: 'reference_id', label: 'Reference ID', minWidth: 150 },
//   { id: 'disconnector', label: 'Disconnector', minWidth: 150 },
//   { id: 'end_point', label: 'End Point', minWidth: 150 },
//   { id: 'leadset', label: 'Leadset', minWidth: 150 },
//   { id: 'mode_of_calling', label: 'Mode of Calling', minWidth: 150 },
//   { id: 'call_type', label: 'Call Type', minWidth: 150 },
//   { id: 'lob', label: 'LOB', minWidth: 100 },
//   { id: 'campaign', label: 'Campaign', minWidth: 150 },
//   { id: 'process', label: 'Process', minWidth: 150 },
//   { id: 'dispose_first_level', label: 'Dispose First Level', minWidth: 150 },
//   { id: 'dispose_second_level', label: 'Dispose Second Level', minWidth: 150 },
//   { id: 'dispose_third_level', label: 'Dispose Third Level', minWidth: 150 },
//   { id: 'createdDate', label: 'Created Date', minWidth: 150 },
//   { id: 'reportType', label: 'Report Type', minWidth: 150 },
//   { id: 'fileName', label: 'File Name', minWidth: 150 },
//   { id: 'time', label: 'Time', minWidth: 100 },
//   { id: 'azureResponse', label: 'Azure Response', minWidth: 150 },
//   { id: 'queryResponse', label: 'Query Response', minWidth: 150 },
//   { id: 'action', label: 'Action', minWidth: 100 },
// ];

// export function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [filterState, setFilterState] = React.useState({});
  
//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//   };

//   const handleFilterChange = (newFilters) => {
//     setFilterState(newFilters);
//   };

//   const applyFilters = (data) => {
//     return data.filter((row) => {
//       return Object.keys(filterState).every((key) => {
//         if (!filterState[key]) return true;
//         return row[key] && row[key].toString().includes(filterState[key].toString());
//       });
//     });
//   };

//   const filteredData = applyFilters(data);
//   const visibleRows = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <FiltersComponent onFilterChange={handleFilterChange} />
//       <TableContainer sx={{ maxHeight: 400 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {visibleRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell key={column.id}>
//                     {row[column.id]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <PaginationComponent
//         totalRows={filteredData.length}
//         onPageChange={handlePageChange}
//         onRowsPerPageChange={handleRowsPerPageChange}
//       />
//     </Paper>
//   );
// }


// import React,{useState}from 'react';

// import { PaginationComponent } from './Pagination.js';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import data from '../asset/data.json';
// import { FiltersComponent } from './filter.js';

// const columns = [
//   { id: 'id', label: 'ID', minWidth: 100 },
//   { id: 'users', label: 'User', minWidth: 100 },
//   { id: 'phone_number', label: 'Phone Number', minWidth: 150 },
//   { id: 'did_number', label: 'DID Number', minWidth: 150 },
//   { id: 'reference_id', label: 'Reference ID', minWidth: 150 },
//   { id: 'disconnector', label: 'Disconnector', minWidth: 150 },
//   { id: 'end_point', label: 'End Point', minWidth: 150 },
//   { id: 'leadset', label: 'Leadset', minWidth: 150 },
//   { id: 'mode_of_calling', label: 'Mode of Calling', minWidth: 150 },
//   { id: 'call_type', label: 'Call Type', minWidth: 150 },
//   { id: 'lob', label: 'LOB', minWidth: 100 },
//   { id: 'campaign', label: 'Campaign', minWidth: 150 },
//   { id: 'process', label: 'Process', minWidth: 150 },
//   { id: 'dispose_first_level', label: 'Dispose First Level', minWidth: 150 },
//   { id: 'dispose_second_level', label: 'Dispose Second Level', minWidth: 150 },
//   { id: 'dispose_third_level', label: 'Dispose Third Level', minWidth: 150 },
//   { id: 'createdDate', label: 'Created Date', minWidth: 150 },
//   { id: 'reportType', label: 'Report Type', minWidth: 150 },
//   { id: 'fileName', label: 'File Name', minWidth: 150 },
//   { id: 'time', label: 'Time', minWidth: 100 },
//   { id: 'azureResponse', label: 'Azure Response', minWidth: 150 },
//   { id: 'queryResponse', label: 'Query Response', minWidth: 150 },
//   { id: 'action', label: 'Action', minWidth: 100 },
// ];

// export function StickyHeadTable() {
//   const [page, setPage] =useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [filterState, setFilterState] = useState({});

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//   };

//   const handleFilterChange = (newFilters) => {
//     setFilterState(newFilters);
//   };

//   const applyFilters = (data) => {
//     return data.filter((row) => {
//       return Object.keys(filterState).every((key) => {
//         const filterValue = filterState[key];
//         if (!filterValue || filterValue.length === 0) return true;
//         if (Array.isArray(filterValue)) {
//           return filterValue.some((value) => row[key] && row[key].toString().includes(value.toString()));
//         } else {
//           return row[key] && row[key].toString().includes(filterValue.toString());
//         }
//       });
//     });
//   };

//   const filteredData = applyFilters(data);
//   const visibleRows = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <FiltersComponent filteredData={filteredData} onFilterChange={handleFilterChange} /> 
//       <TableContainer sx={{ maxHeight: 400 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {visibleRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell key={column.id}>
//                     {row[column.id]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <PaginationComponent
//         totalRows={filteredData.length}
//         onPageChange={handlePageChange}
//         onRowsPerPageChange={handleRowsPerPageChange}
//       />
//     </Paper>
//   );
// }

import React, { useState } from 'react';
import { PaginationComponent } from './Pagination.js';
import { IoIosArrowRoundUp, IoIosArrowRoundDown} from "react-icons/io";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from '../asset/data.json';
import { FiltersComponent } from './filter.js';
import robot from '../asset/robot-01.svg';
import Typography from "@mui/material/Typography";

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'users', label: 'User', minWidth: 100 },
  { id: 'phone_number', label: 'Phone Number', minWidth: 150 },
  { id: 'did_number', label: 'DID Number', minWidth: 150 },
  { id: 'reference_id', label: 'Reference ID', minWidth: 150 },
  { id: 'disconnector', label: 'Disconnector', minWidth: 150 },
  { id: 'end_point', label: 'End Point', minWidth: 150 },
  { id: 'leadset', label: 'Leadset', minWidth: 150 },
  { id: 'mode_of_calling', label: 'Mode of Calling', minWidth: 150 },
  { id: 'call_type', label: 'Call Type', minWidth: 150 },
  { id: 'lob', label: 'LOB', minWidth: 100 },
  { id: 'campaign', label: 'Campaign', minWidth: 150 },
  { id: 'process', label: 'Process', minWidth: 150 },
  { id: 'dispose_first_level', label: 'Dispose First Level', minWidth: 150 },
  { id: 'dispose_second_level', label: 'Dispose Second Level', minWidth: 150 },
  { id: 'dispose_third_level', label: 'Dispose Third Level', minWidth: 150 },
  { id: 'createdDate', label: 'Created Date', minWidth: 150 },
  { id: 'reportType', label: 'Report Type', minWidth: 150 },
  { id: 'fileName', label: 'File Name', minWidth: 150 },
  { id: 'time', label: 'Time', minWidth: 100 },
  { id: 'azureResponse', label: 'Azure Response', minWidth: 150 },
  { id: 'queryResponse', label: 'Query Response', minWidth: 150 },
  { id: 'action', label: 'Action', minWidth: 100 },
];

export function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterState, setFilterState] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handlePageChange = (newPage) => setPage(newPage);
  const handleRowsPerPageChange = (newRowsPerPage) => setRowsPerPage(newRowsPerPage);

  const handleFilterChange = (newFilters) => setFilterState(newFilters);

  const handleSort = (columnId) => {
    const direction = sortConfig.key === columnId && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: columnId, direction });
  };

  const applyFilters = (data) => {
    return data.filter((row) =>
      Object.keys(filterState).every((key) => {
        const filterValue = filterState[key];
        if (!filterValue || filterValue.length === 0) return true;
        if (Array.isArray(filterValue)) {
          return filterValue.some((value) => row[key]?.toString().includes(value.toString()));
        } else {
          return row[key]?.toString().includes(filterValue.toString());
        }
      })
    );
  };

  const applySorting = (data) => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const filteredData = applyFilters(data);
  const sortedData = applySorting(filteredData);
  const visibleRows = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <FiltersComponent filteredData={filteredData} onFilterChange={handleFilterChange} />
      {filteredData.length > 0 ? (
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, cursor: 'pointer'}}
                  onClick={() => handleSort(column.id)}
                >
                  {column.label} {sortConfig.key === column.id ? (sortConfig.direction === 'asc' ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />) : ''}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <img src={robot} alt="No data found" style={{ width: "150px", marginBottom: "10px" }} />
          <Typography variant="h6" color="textSecondary">
            No data found
          </Typography>
        </div>
      )}
      {filteredData.length > 0 && (
      <PaginationComponent
        totalRows={filteredData.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
      )}
    </Paper>
  );
}
