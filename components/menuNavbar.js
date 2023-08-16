import Link from 'next/link';
import styles from '../styles/Home.module.css';

const MenuNavbar = () => (
  <nav>
    <ul className={styles.link}>
      <li>
        <Link href="/">CSR Page</Link>
      </li>
      <li>
        <Link href="/ssr">SSR Page</Link>
      </li>
    </ul>
  </nav>
);
export default MenuNavbar;
