import Layout from '../components/layout';

const SSRPage = ({ data }) => {
  return (
    <Layout>
      <h1>You here SSR Page</h1>
      {data && data.map((user) => <p key={user.id}>{user.name}</p>)}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  console.log('getServerSideProps is running.');
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();

  return {
    props: { data: dataUsers },
  };
};
export default SSRPage;
