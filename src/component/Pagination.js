import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export function PaginationComponent({ totalRows, onPageChange, onRowsPerPageChange }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    const rows = parseInt(event.target.value, 10);
    setRowsPerPage(rows);
    setPage(0);
    if (onRowsPerPageChange) {
      onRowsPerPageChange(rows);
    }
  };

  return (
    <TablePagination
      component="div"
      count={totalRows}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5,10, 25, 50, 100]}
    />
  );
}
