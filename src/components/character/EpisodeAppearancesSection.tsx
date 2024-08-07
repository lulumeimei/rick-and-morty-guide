import { Episode } from "@/src/domain/entities/episode";
import { Container, Paper, Typography } from "@mui/material";
import DataTable from "../shared/DataTable";
import { GridColDef } from "@mui/x-data-grid";

interface EpisodeAppearancesSectionProps {
  episodes: Episode[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, sortable: false },
  { field: "name", headerName: "Name", flex: 2, sortable: false },
  { field: "episode", headerName: "Episode", flex: 1.5, sortable: false },
  { field: "air_date", headerName: "Air Date", flex: 1.5, sortable: false },
  { field: "created", headerName: "Created", flex: 1.5, sortable: false },
];

const EpisodeAppearancesSection: React.FC<EpisodeAppearancesSectionProps> = ({
  episodes,
}) => {
  const handleEpisodeClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="episode-appearances">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Episode Appearances
        </Typography>
        <Container>
          <DataTable
            data={episodes}
            rowCount={episodes.length}
            loading={false}
            page={0}
            pageSize={20}
            columns={columns}
            onRowClick={(x: Episode) => {
              console.log(x);
              handleEpisodeClick(x.url);
              //   router.push(`/character/${x.id}`);
            }}
            rowHeight={60}
          />
        </Container>
      </Paper>
    </section>
  );
};

export default EpisodeAppearancesSection;
