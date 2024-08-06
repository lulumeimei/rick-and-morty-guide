import SEO from "@/components/SEO";
import { useRouter } from "next/router";

const ContactDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <SEO title={`Character ${id} - SleekFlow`} />
      <h1>Contact Detail</h1>
      <p>Contact ID: {id}</p>
    </div>
  );
};

export default ContactDetail;
