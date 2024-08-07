import { Typography, Box } from "@mui/material";
import Image from "next/image";

interface ContactInformationSectionProps {
  name: string;
  image?: string;
}

const ContactInformationSection: React.FC<ContactInformationSectionProps> = ({
  name,
  image,
}) => {
  return (
    <section id="contact-information">
      <Box display="flex" alignItems="center" marginBottom={4}>
        <Image
          src={image ?? ""}
          alt={name}
          width={200}
          height={200}
          style={{ borderRadius: "50%", marginRight: "20px" }}
        />
        <Typography variant="h2">{name}</Typography>
      </Box>
    </section>
  );
};

export default ContactInformationSection;
