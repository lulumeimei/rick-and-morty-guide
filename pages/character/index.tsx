import React, { useState, useEffect, ChangeEvent, useCallback } from "react";
import DataTable from "../../src/components/shared/DataTable";
import SearchBar from "../../src/components/shared/SearchBar";
import { Character } from "../../src/domain/entities/character";
import { GridColDef } from "@mui/x-data-grid";
import { Origin } from "@/src/domain/entities/origin";
import { Location } from "@/src/domain/entities/location";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import SEO from "../../src/components/shared/SEO";
import { useFetchCharactersUseCase } from "@/src/context/useCaseContext";
import PaginationButtons from "@/src/components/shared/PaginationButtons";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, sortable: false },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (params) => (
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

const useFetchCharacters = (page: number, searchTerm: string) => {
  const fetchCharactersUseCase = useFetchCharactersUseCase();
  const [data, setData] = useState<Character[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchCharactersUseCase.execute(page, searchTerm);
        setData(response.results);
        setRowCount(response.info.count);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, searchTerm, fetchCharactersUseCase]);

  return { data, rowCount, loading, error };
};

function HomePage() {
  const router = useRouter();
  const { query } = router;

  const [page, setPage] = useState<number>(parseInt(query.page as string) || 0);
  const [searchTerm, setSearchTerm] = useState<string>(
    (query.search as string) || ""
  );
  const [pageSize] = useState(20);

  const { data, rowCount, loading, error } = useFetchCharacters(
    page,
    searchTerm
  );

  useEffect(() => {
    const newPage = parseInt(query.page as string) || 0;
    const newSearchTerm = (query.search as string) || "";
    setPage(newPage);
    setSearchTerm(newSearchTerm);
  }, [query]);

  const handlePageChange = useCallback(
    (event: ChangeEvent<unknown>, newPage: number) => {
      router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
          page: newPage,
        },
      });
    },
    [router]
  );

  const handleSearch = useCallback(
    (term: string) => {
      const currentSearchTerm = router.query.search;
      if (term !== currentSearchTerm) {
        router.replace({
          pathname: router.pathname,
          query: {
            ...router.query,
            page: 0,
            search: term ? term : null,
          },
        });
      }
    },
    [router]
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <SEO />
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
          columns={columns}
          onRowClick={(x: Character) => {
            console.log(x);
            router.push(`/character/${x.id}`);
          }}
          rowHeight={150}
        />
      </Container>
      <PaginationButtons
        currentPage={page === 0 ? 1 : page}
        totalPages={Math.ceil(rowCount / pageSize)}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

export default HomePage;
