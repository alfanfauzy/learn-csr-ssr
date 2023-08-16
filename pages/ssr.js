import Layout from '../components/layout';

const SSRPage = ({ data }) => {
  return (
    <Layout>
      <h1>You here SSR Page</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        {data && data.map((cat) => <img src={cat.url} width={120} />)}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  console.log('getServerSideProps is running.');
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=10'
  );
  const dataCats = await response.json();

  return {
    props: { data: dataCats },
  };
};
export default SSRPage;
