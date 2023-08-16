import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MenuNavbar from './menuNavbar';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Learning SSR & CSR</title>
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Learning CSR & SSR</h1>

      <MenuNavbar />
      <article>{children}</article>
    </main>
  </div>
);
export default Layout;
