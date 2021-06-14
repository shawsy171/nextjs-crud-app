import { useRouter } from "next/router";

const Note = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Notes {id}</h1>
}

export default Note;
