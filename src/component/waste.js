// import React, { useState, useEffect } from "react";
// import data from "../asset/data.json";

// export const Table = () => {
//   const [tableData, setTableData] = useState([]);
//   const [order, setOrder] = useState("asc");
//   const [orderBy, setOrderBy] = useState("createdDate");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   useEffect(() => {
//     setTableData(data);
//   }, []);

//   if (tableData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const sortedData = [...tableData].sort((a, b) => {
//     const valA = orderBy === "createdDate" ? new Date(a[orderBy]) : a[orderBy];
//     const valB = orderBy === "createdDate" ? new Date(b[orderBy]) : b[orderBy];

//     if (order === "asc") {
//       return valA > valB ? 1 : -1;
//     }
//     return valA < valB ? 1 : -1;
//   });

//   const paginatedData = sortedData.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   const handleSort = (column) => {
//     if (orderBy === column) {
//       setOrder(order === "asc" ? "desc" : "asc");
//     } else {
//       setOrderBy(column);
//       setOrder("asc");
//     }
//   };

//   const handleChangePage = (newPage) => setPage(newPage);

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(Number(event.target.value));
//     setPage(0);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Failed Reports</h1>
//       {/* Fixed container with vertical scrolling */}
//       <div
//         style={{
//           maxHeight: "400px", // Fixed height for the table container
//           overflowY: "auto",
//           border: "1px solid #ccc",
//         }}
//       >
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             textAlign: "center",
//           }}
//         >
//           <thead>
//             <tr
//               style={{
//                 position: "sticky",
//                 top: -1,
//                 backgroundColor: "#f1f1f1",
//               }}
//             >
//               <th
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleSort("createdDate")}
//               >
//                 Created Date{" "}
//                 {orderBy === "createdDate" ? (order === "asc" ? "↑" : "↓") : ""}
//               </th>
//               <th
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleSort("reportType")}
//               >
//                 Report Type{" "}
//                 {orderBy === "reportType" ? (order === "asc" ? "↑" : "↓") : ""}
//               </th>
//               <th
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleSort("fileName")}
//               >
//                 File Name{" "}
//                 {orderBy === "fileName" ? (order === "asc" ? "↑" : "↓") : ""}
//               </th>
//               <th
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleSort("time")}
//               >
//                 Time {orderBy === "time" ? (order === "asc" ? "↑" : "↓") : ""}
//               </th>
//               <th
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleSort("azureResponse")}
//               >
//                 Azure Response{" "}
//                 {orderBy === "azureResponse"
//                   ? order === "asc"
//                     ? "↑"
//                     : "↓"
//                   : ""}
//               </th>
//               <th
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleSort("queryResponse")}
//               >
//                 Query Response{" "}
//                 {orderBy === "queryResponse"
//                   ? order === "asc"
//                     ? "↑"
//                     : "↓"
//                   : ""}
//               </th>
//               <th style={{ border: "1px solid #ccc", padding: "10px" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.map((item) => (
//               <tr key={item.id}>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>
//                   {item.createdDate}
//                 </td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>
//                   {item.reportType}
//                 </td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>
//                   {item.fileName}
//                 </td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>
//                   {item.time}
//                 </td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>
//                   {item.azureResponse}
//                 </td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>
//                   {item.queryResponse}
//                 </td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>
//                   <button
//                     style={{
//                       border: "none",
//                       padding: "10px",
//                       backgroundColor: "#4CAF50",
//                       color: "white",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => alert(`Downloading ${item.fileName}`)}
//                   >
//                     Download
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <div>
//           Rows per page:{" "}
//           <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
//             {[5, 10, 25].map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           Page: {page + 1} of {Math.ceil(tableData.length / rowsPerPage)}
//           <button
//             onClick={() => handleChangePage(page - 1)}
//             disabled={page === 0}
//             style={{ marginLeft: "10px" }}
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => handleChangePage(page + 1)}
//             disabled={page >= Math.ceil(tableData.length / rowsPerPage) - 1}
//             style={{ marginLeft: "10px" }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };



// import React, { useState, useEffect } from "react";
// import tableDataJSON from "../asset/data.json";
// import filtersJSON from "../asset/filter.json";

// export const Table = () => {
//   const [tableData, setTableData] = useState([]);
//   const [filters, setFilters] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [appliedFilters, setAppliedFilters] = useState({});
//   const [dropdownVisible, setDropdownVisible] = useState({});
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

//   useEffect(() => {
//     setTableData(tableDataJSON);
//     setFilteredData(tableDataJSON);
//     setFilters(filtersJSON.filters);
//   }, []);

//   const handleFilterChange = (filterKey, value) => {
//     setAppliedFilters((prevFilters) => ({
//       ...prevFilters,
//       [filterKey]: value,
//     }));
//   };

//   const applyFilters = () => {
//     let newData = tableData;

//     for (const key in appliedFilters) {
//       const filterValue = appliedFilters[key];
//       if (filterValue && filterValue.length > 0) {
//         if (key === "customStartDate" || key === "customEndDate") continue;
//         newData = newData.filter((item) =>
//           filterValue.includes(item[key])
//         );
//       }
//     }

//     if (appliedFilters.customStartDate && appliedFilters.customEndDate) {
//       const startDate = new Date(appliedFilters.customStartDate);
//       const endDate = new Date(appliedFilters.customEndDate);
//       newData = newData.filter((item) => {
//         const itemDate = new Date(item.createdDate);
//         return itemDate >= startDate && itemDate <= endDate;
//       });
//     }

//     setFilteredData(newData);
//     setPage(0);
//   };

//   const resetFilters = () => {
//     setAppliedFilters({});
//     setFilteredData(tableData);
//   };

//   const downloadCSV = () => {
//     const csvContent =
//       "data:text/csv;charset=utf-8," +
//       [
//         "Created Date,Report Type,File Name,Time,Azure Response,Query Response",
//         ...filteredData.map(
//           (row) =>
//             `${row.createdDate},${row.reportType},${row.fileName},${row.time},${row.azureResponse},${row.queryResponse}`
//         ),
//       ].join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "filtered_data.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleDropdownToggle = (key) => {
//     setDropdownVisible((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };

//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortData = (data) => {
//     if (sortConfig.key) {
//       return [...data].sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'asc' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'asc' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return data;
//   };

//   const paginatedData = sortData(filteredData).slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   const handleChangePage = (newPage) => setPage(newPage);

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(Number(event.target.value));
//     setPage(0);
//   };

//   const getSortArrow = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === 'asc' ? '↑' : '↓';
//     }
//     return '';
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ marginBottom: "20px", fontSize: "24px", color: "#333" }}>
//         Failed Reports
//       </h1>

//       {/* Filter Buttons */}
//       <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
//         <button onClick={applyFilters} style={buttonStyle}>
//           Apply Filters
//         </button>
//         <button onClick={resetFilters} style={buttonStyle}>
//           Reset Filters
//         </button>
//         <button onClick={downloadCSV} style={buttonStyle}>
//           Download CSV
//         </button>
//       </div>

//       {/* Filter Section */}
//       <div style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "15px" }}>
//         {Object.entries(filters).map(([key, filter]) => (
//           <div key={key} style={{ flex: "1 1 calc(25% - 15px)", minWidth: "200px" }}>
//             <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "14px", color: "#333" }}>
//               {filter.label}
//             </label>

//             {filter.type === "dropdown" && (
//               <div style={{ position: "relative" }}>
//                 <button
//                   onClick={() => handleDropdownToggle(key)}
//                   style={{
//                     width: "100%",
//                     padding: "8px 12px",
//                     fontSize: "14px",
//                     backgroundColor: "#f9f9f9",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                     textAlign: "left",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Select Options
//                 </button>
//                 {dropdownVisible[key] && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "110%",
//                       left: "0",
//                       width: "100%",
//                       background: "#fff",
//                       border: "1px solid #ccc",
//                       borderRadius: "4px",
//                       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                       padding: "10px",
//                       zIndex: 10,
//                     }}
//                   >
//                     {filter.options.map((option) => (
//                       <div key={option} style={{ marginBottom: "5px" }}>
//                         <label style={{ display: "flex", alignItems: "center" }}>
//                           <input
//                             type="checkbox"
//                             value={option}
//                             checked={
//                               appliedFilters[key]
//                                 ? appliedFilters[key].includes(option)
//                                 : false
//                             }
//                             onChange={(e) => {
//                               const newValues = appliedFilters[key]
//                                 ? [...appliedFilters[key]]
//                                 : [];
//                               if (e.target.checked) {
//                                 newValues.push(option);
//                               } else {
//                                 const index = newValues.indexOf(option);
//                                 if (index > -1) newValues.splice(index, 1);
//                               }
//                               handleFilterChange(key, newValues);
//                             }}
//                             style={{ marginRight: "8px" }}
//                           />
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {filter.type === "date" && (
//               <div>
//                 <select
//                   onChange={(e) => handleFilterChange(key, e.target.value)}
//                   style={{
//                     width: "100%",
//                     padding: "8px 12px",
//                     fontSize: "14px",
//                     backgroundColor: "#f9f9f9",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 >
//                   {filter.options.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//                 {appliedFilters[key] === "Custom Range" && (
//                   <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//                     <input
//                       type="date"
//                       onChange={(e) =>
//                         handleFilterChange("customStartDate", e.target.value)
//                       }
//                       style={{
//                         flex: "1",
//                         padding: "8px",
//                         fontSize: "14px",
//                         border: "1px solid #ccc",
//                         borderRadius: "4px",
//                       }}
//                     />
//                     <input
//                       type="date"
//                       onChange={(e) =>
//                         handleFilterChange("customEndDate", e.target.value)
//                       }
//                       style={{
//                         flex: "1",
//                         padding: "8px",
//                         fontSize: "14px",
//                         border: "1px solid #ccc",
//                         borderRadius: "4px",
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Table Section */}
//       <div
//         style={{
//           maxHeight: "400px",
//           overflowY: "auto",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//         }}
//       >
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             textAlign: "center",
//           }}
//         >
//           <thead>
//             <tr
//               style={{
//                 position: "sticky",
//                 top: -1,
//                 backgroundColor: "#f1f1f1",
//               }}
//             >
//               <th
//                 onClick={() => handleSort("createdDate")}
//                 style={cellStyle}
//               >
//                 Created Date {getSortArrow("createdDate")}
//               </th>
//               <th
//                 onClick={() => handleSort("reportType")}
//                 style={cellStyle}
//               >
//                 Report Type {getSortArrow("reportType")}
//               </th>
//               <th
//                 onClick={() => handleSort("fileName")}
//                 style={cellStyle}
//               >
//                 File Name {getSortArrow("fileName")}
//               </th>
//               <th
//                 onClick={() => handleSort("time")}
//                 style={cellStyle}
//               >
//                 Time {getSortArrow("time")}
//               </th>
//               <th
//                 onClick={() => handleSort("azureResponse")}
//                 style={cellStyle}
//               >
//                 Azure Response {getSortArrow("azureResponse")}
//               </th>
//               <th
//                 onClick={() => handleSort("queryResponse")}
//                 style={cellStyle}
//               >
//                 Query Response {getSortArrow("queryResponse")}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.map((item) => (
//               <tr key={item.id}>
//                 <td style={cellStyle}>{item.createdDate}</td>
//                 <td style={cellStyle}>{item.reportType}</td>
//                 <td style={cellStyle}>{item.fileName}</td>
//                 <td style={cellStyle}>{item.time}</td>
//                 <td style={cellStyle}>{item.azureResponse}</td>
//                 <td style={cellStyle}>{item.queryResponse}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <div>
//           Rows per page:{" "}
//           <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
//             {[5, 10, 25].map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           Page: {page + 1} of {Math.ceil(filteredData.length / rowsPerPage)}
//           <button
//             onClick={() => handleChangePage(page - 1)}
//             disabled={page === 0}
//             style={{ marginLeft: "10px" }}
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => handleChangePage(page + 1)}
//             disabled={page >= Math.ceil(filteredData.length / rowsPerPage) - 1}
//             style={{ marginLeft: "10px" }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Style for buttons
// const buttonStyle = {
//   padding: "10px 15px",
//   fontSize: "14px",
//   color: "#fff",
//   backgroundColor: "#007BFF",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// const cellStyle = {
//   border: "1px solid #ccc",
//   padding: "10px",
//   fontSize: "14px",
//   color: "#333",
// };


// import React, { useState, useEffect } from "react";
// import tableDataJSON from "../asset/data.json";
// import filtersJSON from "../asset/filter.json";
// import {
//   Button,
//   Grid,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableSortLabel,
//   TablePagination,
// } from "@mui/material";

// export const TableComponent = () => {
//   const [tableData, setTableData] = useState([]);
//   const [filters, setFilters] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [appliedFilters, setAppliedFilters] = useState({});
//   const [dropdownVisible, setDropdownVisible] = useState({});
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

//   useEffect(() => {
//     setTableData(tableDataJSON);
//     setFilteredData(tableDataJSON);
//     setFilters(filtersJSON.filters);
//   }, []);

//   const handleFilterChange = (filterKey, value) => {
//     setAppliedFilters((prevFilters) => ({
//       ...prevFilters,
//       [filterKey]: value,
//     }));
//   };

//   const applyFilters = () => {
//     let newData = tableData;

//     for (const key in appliedFilters) {
//       const filterValue = appliedFilters[key];
//       if (filterValue && filterValue.length > 0) {
//         if (key === "customStartDate" || key === "customEndDate") continue;
//         newData = newData.filter((item) =>
//           filterValue.includes(item[key])
//         );
//       }
//     }

//     if (appliedFilters.customStartDate && appliedFilters.customEndDate) {
//       const startDate = new Date(appliedFilters.customStartDate);
//       const endDate = new Date(appliedFilters.customEndDate);
//       newData = newData.filter((item) => {
//         const itemDate = new Date(item.createdDate);
//         return itemDate >= startDate && itemDate <= endDate;
//       });
//     }

//     setFilteredData(newData);
//     setPage(0);
//   };

//   const resetFilters = () => {
//     setAppliedFilters({});
//     setFilteredData(tableData);
//   };

//   const downloadCSV = () => {
//     const csvContent =
//       "data:text/csv;charset=utf-8," +
//       [
//         "Created Date,Report Type,File Name,Time,Azure Response,Query Response",
//         ...filteredData.map(
//           (row) =>
//             `${row.createdDate},${row.reportType},${row.fileName},${row.time},${row.azureResponse},${row.queryResponse}`
//         ),
//       ].join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "filtered_data.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleDropdownToggle = (key) => {
//     setDropdownVisible((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };

//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortData = (data) => {
//     if (sortConfig.key) {
//       return [...data].sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'asc' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'asc' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return data;
//   };

//   const paginatedData = sortData(filteredData).slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   const handleChangePage = (newPage) => setPage(newPage);

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(Number(event.target.value));
//     setPage(0);
//   };

//   const getSortArrow = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === 'asc' ? '↑' : '↓';
//     }
//     return '';
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Failed Reports</h1>

//       {/* Filter Section */}
//       <Grid container spacing={2} style={{ marginBottom: "20px" }}>
//         {Object.entries(filters).map(([key, filter]) => (
//           <Grid item xs={12} sm={6} md={3} key={key}>
//             <div>
//               <FormControl fullWidth>
//                 <InputLabel>{filter.label}</InputLabel>
//                 {filter.type === "dropdown" && (
//                   <Select
//                     multiple
//                     value={appliedFilters[key] || []}
//                     onChange={(e) => handleFilterChange(key, e.target.value)}
//                   >
//                     {filter.options.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 )}

//                 {filter.type === "date" && (
//                   <Select
//                     value={appliedFilters[key] || ""}
//                     onChange={(e) => handleFilterChange(key, e.target.value)}
//                   >
//                     {filter.options.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 )}
//               </FormControl>

//               {appliedFilters[key] === "Custom Range" && (
//                 <div style={{ marginTop: "10px" }}>
//                   <TextField
//                     type="date"
//                     onChange={(e) =>
//                       handleFilterChange("customStartDate", e.target.value)
//                     }
//                     fullWidth
//                     margin="normal"
//                   />
//                   <TextField
//                     type="date"
//                     onChange={(e) =>
//                       handleFilterChange("customEndDate", e.target.value)
//                     }
//                     fullWidth
//                     margin="normal"
//                   />
//                 </div>
//               )}
//             </div>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Filter Buttons */}
//       <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
//         <Button variant="contained" color="primary" onClick={applyFilters}>
//           Apply Filters
//         </Button>
//         <Button variant="outlined" onClick={resetFilters}>
//           Reset Filters
//         </Button>
//         <Button variant="outlined" onClick={downloadCSV}>
//           Download CSV
//         </Button>
//       </div>

//       {/* Table Section */}
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <TableSortLabel
//                   active={sortConfig.key === "createdDate"}
//                   direction={sortConfig.direction}
//                   onClick={() => handleSort("createdDate")}
//                 >
//                   Created Date {getSortArrow("createdDate")}
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <TableSortLabel
//                   active={sortConfig.key === "reportType"}
//                   direction={sortConfig.direction}
//                   onClick={() => handleSort("reportType")}
//                 >
//                   Report Type {getSortArrow("reportType")}
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <TableSortLabel
//                   active={sortConfig.key === "fileName"}
//                   direction={sortConfig.direction}
//                   onClick={() => handleSort("fileName")}
//                 >
//                   File Name {getSortArrow("fileName")}
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <TableSortLabel
//                   active={sortConfig.key === "time"}
//                   direction={sortConfig.direction}
//                   onClick={() => handleSort("time")}
//                 >
//                   Time {getSortArrow("time")}
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <TableSortLabel
//                   active={sortConfig.key === "azureResponse"}
//                   direction={sortConfig.direction}
//                   onClick={() => handleSort("azureResponse")}
//                 >
//                   Azure Response {getSortArrow("azureResponse")}
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <TableSortLabel
//                   active={sortConfig.key === "queryResponse"}
//                   direction={sortConfig.direction}
//                   onClick={() => handleSort("queryResponse")}
//                 >
//                   Query Response {getSortArrow("queryResponse")}
//                 </TableSortLabel>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedData.map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell>{item.createdDate}</TableCell>
//                 <TableCell>{item.reportType}</TableCell>
//                 <TableCell>{item.fileName}</TableCell>
//                 <TableCell>{item.time}</TableCell>
//                 <TableCell>{item.azureResponse}</TableCell>
//                 <TableCell>{item.queryResponse}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Pagination */}
//       <TablePagination
//         component="div"
//         count={filteredData.length}
//         page={page}
//         onPageChange={(event, newPage) => handleChangePage(newPage)}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// };

