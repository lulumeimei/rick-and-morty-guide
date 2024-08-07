import { Character } from "@/src/domain/entities/character";
import { Paper, Typography } from "@mui/material";

interface PersonalInformationSectionProps {
  character: Character;
}

const PersonalInformationSection: React.FC<PersonalInformationSectionProps> = ({
  character,
}) => {
  return (
    <section id="personal-information">
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Personal Info
        </Typography>
        <Typography variant="body1">
          <strong>Status:</strong> {character.status}
        </Typography>
        <Typography variant="body1">
          <strong>Species:</strong> {character.species}
        </Typography>
        <Typography variant="body1">
          <strong>Gender:</strong> {character.gender}
        </Typography>
        <Typography variant="body1">
          <strong>Origin:</strong> {character.origin.name}
        </Typography>
        <Typography variant="body1">
          <strong>Location:</strong> {character.location.name}
        </Typography>
      </Paper>
    </section>
  );
};

export default PersonalInformationSection;
