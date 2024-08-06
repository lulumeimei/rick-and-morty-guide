import { useRouter } from "next/router";

const ContactDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Contact Detail</h1>
      <p>Contact ID: {id}</p>
    </div>
  );
};

export default ContactDetail;
