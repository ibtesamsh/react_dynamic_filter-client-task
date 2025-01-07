// import React, { useState, useEffect } from 'react';
// import { Box, Grid, TextField, Button, Autocomplete } from '@mui/material';
// import filtersData from './filters.json';

// const FiltersComponent = () => {
//   const [filters, setFilters] = useState([]);
//   const [selectedFilters, setSelectedFilters] = useState({});

//   useEffect(() => {
//     // Load filters data from JSON
//     setFilters(filtersData.filters);
//   }, []);

//   const handleFilterChange = (id, value) => {
//     setSelectedFilters({
//       ...selectedFilters,
//       [id]: value,
//     });
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Grid container spacing={2}>
//         {filters.map((filter) => (
//           <Grid item xs={12} sm={6} md={4} key={filter.id}>
//             {filter.type === 'text' && (
//               <TextField
//                 size="small"
//                 fullWidth
//                 label={filter.label}
//                 placeholder={filter.placeholder}
//                 value={selectedFilters[filter.id] || ''}
//                 onChange={(e) => handleFilterChange(filter.id, e.target.value)}
//                 variant="outlined"
//               />
//             )}

//             {filter.type === 'dropdown' && (
//               <Autocomplete
//                 size="small"
//                 options={filter.options || []}
//                 getOptionLabel={(option) => option}
//                 value={selectedFilters[filter.id] || null}
//                 onChange={(e, value) => handleFilterChange(filter.id, value)}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     label={filter.label}
//                     placeholder={filter.placeholder}
//                     variant="outlined"
//                   />
//                 )}
//               />
//             )}

//             {filter.type === 'date' && (
//               <TextField
//                 size="small"
//                 fullWidth
//                 label={filter.label}
//                 type="date"
//                 value={selectedFilters[filter.id] || ''}
//                 onChange={(e) => handleFilterChange(filter.id, e.target.value)}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             )}
//           </Grid>
//         ))}
//       </Grid>

//       <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
//         <Button variant="contained" color="primary">
//           Apply Filters
//         </Button>
//         <Button variant="outlined" color="secondary" onClick={() => setSelectedFilters({})}>
//           Reset Filters
//         </Button>
//         <Button variant="contained" color="success">
//           Download CSV
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default FiltersComponent;


// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import filterData from "../asset/filter.json"; // Importing data from filter.json

// export const FiltersComponent = () => {
//   const [selectedDateRange, setSelectedDateRange] = useState("");

//   return (
//     <Grid container spacing={2} style={{ padding: "16px" }}>
//       {filterData.filters.map((filter) => (
//         <Grid item xs={12} sm={6} md={4} key={filter.id}>
//           <InputLabel
//             style={{
//               fontSize: "11px",
//               fontWeight: 600,
//               marginBottom: "8px",
//               display: "block"
//             }}
//           >
//             {filter.label}
//           </InputLabel>
//           {filter.type === "dropdown" && (
//             <Autocomplete
//               multiple
//               id={`autocomplete-${filter.id}`}
//               size="small"
//               options={
//                 filter.options.map((option) =>
//                   typeof option === "string" ? option : option.label
//                 ) || []
//               }
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="standard"
//                   placeholder={filter.placeholder}
//                 />
//               )}
//               onChange={(event, value) => {
//                 if (filter.id === "date_range") {
//                   setSelectedDateRange(value?.value || "");
//                 }
//               }}
//             />
//           )}
//           {filter.type === "text" && (
//             <TextField
//               fullWidth
//               size="small"
//               variant="standard"
//               placeholder={filter.placeholder}
//             />
//           )}
//         </Grid>
//       ))}
//       {selectedDateRange === "custom_range" && (
//         <>
//           {filterData.filters
//             .find((filter) => filter.id === "date_range")
//             .sub_filters.custom_range.map((subFilter) => (
//               <Grid item xs={12} sm={6} md={4} key={subFilter.id}>
//                 <InputLabel
//                   style={{
//                     fontSize: "11px",
//                     fontWeight: 600,
//                     marginBottom: "8px",
//                     display: "block"
//                   }}
//                 >
//                   {subFilter.label}
//                 </InputLabel>
//                 <TextField
//                   fullWidth
//                   size="small"
//                   variant="standard"
//                   placeholder={subFilter.placeholder}
//                 />
//               </Grid>
//             ))}
//         </>
//       )}
//     </Grid>
//   );
// };

// import React, { useState } from "react";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import Button from "@mui/material/Button";
// import filterData from "../asset/filter.json"; // Importing data from filter.json

// export const FiltersComponent = () => {
//   const [selectedDateRange, setSelectedDateRange] = useState("");
//   const [autocompleteValues, setAutocompleteValues] = useState({});
//   const [showFilters, setShowFilters] = useState(false);

//   const handleAutocompleteChange = (filterId, value) => {
//     setAutocompleteValues((prevValues) => ({
//       ...prevValues,
//       [filterId]: value,
//     }));

//     if (filterId === "date_range") {
//       setSelectedDateRange(value?.value || "");
//     }
//   };

//   const handleFilter = () => {
//     console.log("Filter applied with selected filters:", autocompleteValues);
//   };

//   const handleReset = () => {
//     setAutocompleteValues({});
//     setSelectedDateRange("");
//   };

//   const handleDownloadCSV = () => {
//     console.log("Download CSV triggered");
//   };

//   const toggleFilters = () => {
//     setShowFilters(!showFilters);
//   };

//   return (
//     <div
//       style={{
//         padding: "16px",
//         display: "flex",
//         flexDirection: "column",
//         gap: "16px",
//       }}
//     >
//       {/* Show/Hide Filters Button */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "flex-end",
//         }}
//       >
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={toggleFilters}
//           style={{ marginBottom: "16px" }}
//         >
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </Button>
//       </div>

//       {/* Filters Section */}
//       {showFilters && (
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "16px",
//           }}
//         >
//           {filterData.filters.map((filter) => (
//             <div
//               key={filter.id}
//               style={{
//                 flex: "1 1 18%",
//                 minWidth: "150px",
//                 maxWidth: "20%",
//                 boxSizing: "border-box",
//               }}
//             >
//               <InputLabel
//                 style={{
//                   fontSize: "11px",
//                   fontWeight: 600,
//                   marginBottom: "4px",
//                   display: "block",
//                 }}
//               >
//                 {filter.label}
//               </InputLabel>

//               {filter.type === "dropdown" && (
//                 <Autocomplete
//                   multiple={filter.options.length > 1}
//                   id={`autocomplete-${filter.id}`}
//                   size="small"
//                   options={
//                     filter.options.map((option) =>
//                       typeof option === "string" ? option : option.label
//                     ) || []
//                   }
//                   value={autocompleteValues[filter.id] || []}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       variant="standard"
//                       placeholder={
//                         autocompleteValues[filter.id] &&
//                         autocompleteValues[filter.id].length > 0
//                           ? ""
//                           : filter.placeholder
//                       }
//                       InputProps={{
//                         ...params.InputProps,
//                         style: {
//                           fontSize: "11px",
//                           padding: "0 6px",
//                           height: "30px",
//                         },
//                       }}
//                       InputLabelProps={{
//                         style: { fontSize: "11px" },
//                       }}
//                     />
//                   )}
//                   onChange={(event, value) =>
//                     handleAutocompleteChange(filter.id, value)
//                   }
//                 />
//               )}

//               {filter.type === "text" && (
//                 <TextField
//                   fullWidth
//                   size="small"
//                   variant="standard"
//                   placeholder={filter.placeholder}
//                   value={autocompleteValues[filter.id] || ""}
//                   onChange={(e) =>
//                     setAutocompleteValues((prevValues) => ({
//                       ...prevValues,
//                       [filter.id]: e.target.value,
//                     }))
//                   }
//                   InputProps={{
//                     style: {
//                       fontSize: "11px",
//                       padding: "0 6px",
//                       height: "30px",
//                     },
//                   }}
//                 />
//               )}

//               {filter.id === "date_range" && selectedDateRange === "custom_range" && (
//                 <>
//                   {filter.sub_filters.custom_range.map((subFilter) => (
//                     <div
//                       key={subFilter.id}
//                       style={{
//                         flex: "1 1 18%",
//                         minWidth: "150px",
//                         maxWidth: "20%",
//                         boxSizing: "border-box",
//                       }}
//                     >
//                       <InputLabel
//                         style={{
//                           fontSize: "11px",
//                           fontWeight: 600,
//                           marginBottom: "4px",
//                           display: "block",
//                         }}
//                       >
//                         {subFilter.label}
//                       </InputLabel>
//                       <TextField
//                         fullWidth
//                         size="small"
//                         variant="standard"
//                         placeholder={subFilter.placeholder}
//                         InputProps={{
//                           style: {
//                             fontSize: "11px",
//                             padding: "0 6px",
//                             height: "30px",
//                           },
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </>
//               )}
//             </div>
//           ))}

//           <div
//             style={{
//               width: "100%",
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "16px",
//               gap: "8px",
//             }}
//           >
//             <Button variant="contained" color="primary" onClick={handleFilter}>
//               Filter
//             </Button>
//             <Button variant="outlined" color="secondary" onClick={handleReset}>
//               Reset Filters
//             </Button>
//             <Button variant="contained" color="default" onClick={handleDownloadCSV}>
//               Download CSV
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };








import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import filterData from "../asset/filter.json";  
import { saveAs } from "file-saver";  

export const FiltersComponent = ({ filteredData, onFilterChange }) => {
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [autocompleteValues, setAutocompleteValues] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  const handleAutocompleteChange = (filterId, value) => {
    setAutocompleteValues((prevValues) => ({
      ...prevValues,
      [filterId]: value,
    }));
  };

  const handleFilter = () => {
    onFilterChange(autocompleteValues);
  };

  const handleReset = () => {
    setAutocompleteValues({});
    setSelectedDateRange("");
    onFilterChange({});
  };

  const handleDownloadCSV = () => {
    if (!filteredData || filteredData.length === 0) {
      alert("No data available to download with the selected filters.");
      return;
    }

    const headers = Object.keys(filteredData[0] || {}).join(",") + "\n";
    const rows = filteredData
      .map((row) =>
        Object.values(row)
          .map((value) => `"${value}"`)
          .join(",")
      )
      .join("\n");

    const csvContent = headers + rows;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "filtered_data.csv");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary" onClick={toggleFilters} style={{ marginBottom: "16px" }}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {showFilters && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {filterData.filters.map((filter) => (
            <div key={filter.id} style={{ flex: "1 1 18%", minWidth: "150px", maxWidth: "20%" }}>
              <InputLabel style={{ fontSize: "11px", fontWeight: 600, marginBottom: "4px", display: "block" }}>
                {filter.label}
              </InputLabel>

              {filter.type === "dropdown" && (
                <Autocomplete
                  multiple={filter.options.length > 1}
                  id={`autocomplete-${filter.id}`}
                  size="small"
                  options={filter.options.map((option) => (typeof option === "string" ? option : option.label))}
                  value={autocompleteValues[filter.id] || []}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      placeholder={autocompleteValues[filter.id] && autocompleteValues[filter.id].length > 0 ? "" : filter.placeholder}
                      InputProps={{ ...params.InputProps, style: { fontSize: "11px", padding: "0 6px", height: "30px" } }}
                      InputLabelProps={{ style: { fontSize: "11px" } }}
                    />
                  )}
                  onChange={(event, value) => handleAutocompleteChange(filter.id, value)}
                />
              )}

              {filter.type === "text" && (
                <TextField
                  fullWidth
                  size="small"
                  variant="standard"
                  placeholder={filter.placeholder}
                  value={autocompleteValues[filter.id] || ""}
                  onChange={(e) => setAutocompleteValues((prevValues) => ({ ...prevValues, [filter.id]: e.target.value }))}
                  InputProps={{ style: { fontSize: "11px", padding: "0 6px", height: "30px" } }}
                />
              )}
            </div>
          ))}

          <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "16px", gap: "8px" }}>
            <Button variant="contained" color="primary" onClick={handleFilter}>Filter</Button>
            <Button variant="outlined" color="secondary" onClick={handleReset}>Reset Filters</Button>
            <Button variant="contained" color="default" onClick={handleDownloadCSV}>Download CSV</Button>
          </div>
        </div>
      )}
    </div>
  );
};
















