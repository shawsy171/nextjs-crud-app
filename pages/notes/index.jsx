import Link from "next/link";

const Notes = () => {

  return (
    <>
      <h1>Notes</h1>
      <Link href="/profile">Profile</Link>
      <br/>
      <Link href="/notes/[id]" as={`notes/32`}>Notes: 34</Link>
    </>
  )
}

export default Notes;
