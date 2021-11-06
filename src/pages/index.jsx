import client from "../apollo/client";
import HOMEPAGE_QUERY from "../apollo/query/HOMEPAGE_QUERY";
import HomePage from "../components/HomePage";
import FrontEnd from "../layout/FrontEnd";

const Home = (props) => {
  return (
    <FrontEnd>
      <HomePage {...props} />
    </FrontEnd>
  )
}


export const getStaticProps = async () => {
  const data = await client.query({
    query: HOMEPAGE_QUERY
  })
  return {
    props: data?.data,
    revalidate: 1
  }

}

export default Home
