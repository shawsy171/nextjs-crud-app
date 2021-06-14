/** @jsx jsx */
// the jsx comment tells babel (the compiler) which jsx transformation to use.
// So use the jsx from theme-ui.
import { jsx } from 'theme-ui';
import Link from 'next/link';

const styles = { 
  header: {
    height: '60px', 
    width: '100vw', 
    bg: 'primary', 
    borderBottom: '1px solid', 
    borderColor: 'primary'
  }
}

const Nav = () => (
  <header sx={styles.header}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>Note App</a>
      </Link>

      <Link href="/notes">
        <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
      </Link>

    </nav>
  </header>
)

export default Nav;