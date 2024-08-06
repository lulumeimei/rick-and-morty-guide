import React, { useState, useEffect, ChangeEvent } from "react";
import DataTable from "../components/DataTable";
import SearchBar from "../components/SearchBar";
import { Character } from "../types/character";
import { GridColDef } from "@mui/x-data-grid";
import { fetchCharacters } from "../services/characterService";
import { Origin } from "@/types/origin";
import { Location } from "@/types/location";
import PaginationButtons from "@/components/PaginationButtons";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, sortable: false },
  {
    field: "image",
    headerName: "Image",
    width: 150, // this is the height of a row & image too
    renderCell: (params) => (
      // <img src={params.value} alt={params.row.name} style={{ width: "100%" }} />
      <Image
        src={params.value}
        alt={params.row.name}
        layout="responsive"
        width={150}
        height={150}
      />
    ),
    sortable: false,
  },
  { field: "name", headerName: "Name", width: 200, sortable: false },
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
  const router = useRouter();
  const { query } = router;

  const [page, setPage] = useState<number>(parseInt(query.page as string) || 0);
  const [searchTerm, setSearchTerm] = useState<string>(
    (query.search as string) || ""
  );
  const [pageSize] = useState(20);
  const [data, setData] = useState<Character[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (page: number, searchTerm: string) => {
    setLoading(true);
    try {
      const response = await fetchCharacters(page, searchTerm);
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

  // Effect for handling query changes
  useEffect(() => {
    const newPage = parseInt(query.page as string) || 0;
    const newSearchTerm = (query.search as string) || "";
    setPage(newPage);
    setSearchTerm(newSearchTerm);
    fetchData(newPage, newSearchTerm);
  }, [query]);

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    // const currentPage = parseInt(query.page as string) || 0;
    // Set the page query parameter
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: newPage,
      },
    });
  };

  const handleSearch = (term: string) => {
    const currentSearchTerm = router.query.search;
    // Set the page query parameter if the search term has changed
    if (term !== currentSearchTerm) {
      console.log(`Search term changed from:  to: ${term}`);
      // Set the page query parameter
      router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
          page: 0,
          search: term ? term : null,
        },
      });
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <SearchBar
        value={searchTerm}
        onChanged={handleSearch}
        placeholder="Filter by name"
      />
      <Container>
        <DataTable
          data={data}
          rowCount={rowCount}
          loading={loading}
          page={page}
          pageSize={pageSize}
          columns={columns} // Pass columns as a prop
          onRowClick={(x: Character) => {
            console.log(x);
          }}
          rowHeight={150}
        />
      </Container>
      <PaginationButtons
        currentPage={page == 0 ? 1 : page}
        totalPages={Math.ceil(rowCount / pageSize)}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

export default HomePage;
