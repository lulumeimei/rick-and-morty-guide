import { Box, Pagination } from "@mui/material";
import { ChangeEvent } from "react";

const PaginationButtons = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
}) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        size="large"
        onChange={(e, page) => onPageChange(e, page)}
        color="primary"
        siblingCount={3}
        boundaryCount={0}
        // showFirstButton
        // showLastButton
      />
    </Box>
  );
};

export default PaginationButtons;
