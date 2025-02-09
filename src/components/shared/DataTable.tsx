import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface DataTableProps {
  data: any[];
  rowCount: number;
  loading: boolean;
  page: number;
  pageSize: number;
  columns: GridColDef[];
  onRowClick: (id: any) => void;
  rowHeight?: number;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  rowCount,
  loading,
  page,
  pageSize,
  columns,
  onRowClick,
  rowHeight = 150,
}) => {
  const rows: GridRowsProp = [...data];

  return (
    <Box width="100%">
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSizeOptions={[pageSize]}
        rowCount={rowCount}
        paginationMode="server"
        showCellVerticalBorder={false}
        loading={loading}
        disableColumnFilter
        rowHeight={rowHeight}
        onRowClick={(x) => {
          onRowClick(x.row);
        }}
        disableColumnSelector={true}
        disableRowSelectionOnClick={true}
        paginationModel={{ page, pageSize }}
        disableColumnMenu={true}
        hideFooter={true}
        autoHeight={true} // Automatically adjusts the height based on content
      />
    </Box>
  );
};

export default DataTable;
