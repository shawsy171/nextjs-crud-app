import Link from 'next/link';
import {useRouter} from 'next/router';

const Profile = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Profile</h1>
      <Link href="/notes">Notes</Link>
      <br/>
      <button onClick={e => router.push('/')}>
        Home
      </button>
    </div>
  )
}

export default Profile;
