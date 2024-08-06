import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Character } from "../types/character";

interface DataTableProps {
  data: Character[];
  rowCount: number;
  loading: boolean;
  page: number;
  pageSize: number;
  columns: GridColDef[];
  onPageChange: (newPage: number) => void;
  onRowClick: (id: any) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  rowCount,
  loading,
  page,
  onPageChange,
  pageSize,
  columns,
  onRowClick,
}) => {
  const rows: GridRowsProp = data.map((character, _) => ({
    ...character,
  }));

  return (
    <Box width="100%">
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSizeOptions={[pageSize]}
        rowCount={rowCount}
        paginationMode="server"
        onPaginationModelChange={(params) => onPageChange(params.page)}
        loading={loading}
        disableColumnFilter
        onRowClick={(x) => {
          onRowClick(x.row);
        }}
        disableColumnSelector={true}
        disableRowSelectionOnClick={true}
        paginationModel={{ page, pageSize }}
        disableColumnMenu={true}
        autoHeight // Automatically adjusts the height based on content
      />
    </Box>
  );
};

export default DataTable;
