import Blog from "./Blog";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const key = import.meta.env.VITE_API_URL;
  const { data, error, loading } = useFetch(key);
  return (
    <div>
      {error && <div>Something went wrong, {error}</div>}
      {loading && <div>Loading...</div>}
      {data && <Blog blogs={data} title={"Featured posts"} />}
    </div>
  );
};

export default Home;
