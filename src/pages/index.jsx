import HomePage from "../components/HomePage";
import useRedox from "../hook/useRedox";
import FrontEnd from "../layout/FrontEnd";

const Home = () => {
  const { gstate } = useRedox()
  return (
    <FrontEnd>
      <HomePage />
    </FrontEnd>
  )
}

export default Home
