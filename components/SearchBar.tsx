import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // Adjust the debounce delay as needed

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  return (
    <Box
      display="flex"
      alignItems="center"
      mb={2}
      p={2}
      bgcolor="#f5f5f5"
      borderRadius="8px"
      boxShadow="0 3px 6px rgba(0, 0, 0, 0.1)"
      width="100%"
    >
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
