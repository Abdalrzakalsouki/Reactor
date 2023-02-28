import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const key = import.meta.env.VITE_API_URL;
  const { data: blog, error, loading } = useFetch(key + "/" + id);

  const history = useHistory();

  const handleDelete = async () => {
    await axios
      .delete(key + "/" + blog.id)
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        throw e;
      });
  };
  return (
    <div className="details">
      <h1>Blog details</h1>
      {loading && <div>loading...</div>}
      {error && <div>Something went wrong, {error}</div>}
      {blog && (
        <article>
          <div className="blog-list">
            <h1>{blog.title}</h1>
            <p> Written by: {blog.author}</p>
            <p>{blog.description} </p>
            <p>{blog.likes} &#10084; </p>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
