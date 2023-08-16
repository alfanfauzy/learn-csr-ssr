import { useEffect, useState } from 'react';
import Layout from '../components/layout';

/**
 * When access CSR page will be show the page directly and the static data will directly show to, but for the fetch data will be delayed before show all data
 */

const CSRPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setIsLoading(true);

    getData().then((response) => {
      setDataUsers(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout>
      <h1>You here CSR Page</h1>
      {isLoading && <p>Loading . . .</p>}
      {dataUsers && dataUsers.map((user) => <p key={user.id}>{user.name}</p>)}
    </Layout>
  );
};
export default CSRPage;
