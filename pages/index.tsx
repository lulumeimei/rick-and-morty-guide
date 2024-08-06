import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable";
import SearchBar from "../components/SearchBar";
import { Character } from "../types/character";
import { GridColDef } from "@mui/x-data-grid";
import { fetchCharacters } from "../services/characterService";
import { Origin } from "@/types/origin";
import { Location } from "@/types/location";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, sortable: false },
  { field: "name", headerName: "Name", width: 200, sortable: false },
  // {
  //   field: "image",
  //   headerName: "Image",
  //   width: 150,
  //   renderCell: (params) => (
  //     <img src={params.value} alt={params.row.name} style={{ width: "100%" }} />
  //   ),
  //   sortable: false,
  // },
  { field: "status", headerName: "Status", width: 150, sortable: false },
  { field: "species", headerName: "Species", width: 150, sortable: false },
  { field: "type", headerName: "Type", width: 150, sortable: false },
  { field: "gender", headerName: "Gender", width: 150, sortable: false },
  {
    field: "origin",
    headerName: "Origin",
    width: 200,
    valueGetter: (params: Origin) => params.name,
    sortable: false,
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
    valueGetter: (params: Location) => params.name,
    sortable: false,
  },
];

function HomePage() {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize] = useState(20);
  const [data, setData] = useState<Character[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchCharacters(page + 1, searchTerm);
      setData(response.results);
      setRowCount(response.info.count);
      setError(null);
    } catch (err) {
      // setError("Failed to fetch data");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, searchTerm]);
  0;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(0); // Reset to first page on new search
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <DataTable
        data={data}
        rowCount={rowCount}
        loading={loading}
        page={page}
        pageSize={pageSize}
        columns={columns} // Pass columns as a prop
        onPageChange={handlePageChange}
        onRowClick={(x: Character) => {}}
      />
    </div>
  );
}

export default HomePage;
