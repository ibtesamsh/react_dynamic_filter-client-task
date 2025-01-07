const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


// import React, { useState, useEffect } from "react";

// const TableComponent = () => {
//   const [data, setData] = useState([]);
//   const [filters, setFilters] = useState({
//     reportType: "",
//     azureResponse: "",
//   });

  
//   useEffect(() => {
//     fetch("/data.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error loading data:", error));
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const applyFilters = () => {
//     return data.filter((item) => {
//       return (
//         (filters.reportType === "" || item.reportType === filters.reportType) &&
//         (filters.azureResponse === "" || item.azureResponse === filters.azureResponse)
//       );
//     });
//   };

//   const filteredData = applyFilters();

//   const downloadFile = (fileName) => {
//     alert(`Downloading ${fileName}`);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Failed Reports</h1>

//       {/* Filters */}
//       <div style={{ marginBottom: "20px" }}>
//         <label htmlFor="reportTypeFilter" style={{ marginRight: "10px" }}>
//           Report Type:
//         </label>
//         <select
//           id="reportTypeFilter"
//           name="reportType"
//           value={filters.reportType}
//           onChange={handleFilterChange}
//           style={{ marginRight: "20px" }}
//         >
//           <option value="">All</option>
//           <option value="volumeReport">volumeReport</option>
//         </select>

//         <label htmlFor="azureResponseFilter" style={{ marginRight: "10px" }}>
//           Azure Response:
//         </label>
//         <select
//           id="azureResponseFilter"
//           name="azureResponse"
//           value={filters.azureResponse}
//           onChange={handleFilterChange}
//         >
//           <option value="">All</option>
//           <option value="success">success</option>
//           <option value="failure">failure</option>
//         </select>
//       </div>

//       {/* Table */}
//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           textAlign: "center",
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ccc", padding: "10px" }}>Created Date</th>
//             <th style={{ border: "1px solid #ccc", padding: "10px" }}>Report Type</th>
//             <th style={{ border: "1px solid #ccc", padding: "10px" }}>File Name</th>
//             <th style={{ border: "1px solid #ccc", padding: "10px" }}>Time</th>
//             <th style={{ border: "1px solid #ccc", padding: "10px" }}>Azure Response</th>
//             <th style={{ border: "1px solid #ccc", padding: "10px" }}>Query Response</th>
//             <th style={{ border: "1px solid #ccc", padding: "10px" }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length > 0 ? (
//             filteredData.map((item, index) => (
//               <tr key={index}>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>{item.createdDate}</td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>{item.reportType}</td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>{item.fileName}</td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>{item.time}</td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>{item.azureResponse}</td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>{item.queryResponse}</td>
//                 <td style={{ border: "1px solid #ccc", padding: "10px" }}>
//                   <button
//                     onClick={() => downloadFile(item.fileName)}
//                     style={{
//                       padding: "5px 10px",
//                       backgroundColor: "#007bff",
//                       color: "white",
//                       border: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Download
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" style={{ padding: "10px" }}>
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableComponent;
