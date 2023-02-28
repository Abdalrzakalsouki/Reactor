import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const submition = async (e) => {
    e.preventDefault();
    const data = { title, content, author };
    const key = import.meta.env.VITE_API_URL;
    setLoading(true);
    await axios
      .post(key, data)
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch((e) => {
        throw e;
      });
  };

  return (
    <div className="create">
      <form onSubmit={submition}>
        <h1>Make a new blog:</h1>
        <label>Title:</label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          required
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Author:</label>
        <input
          type="text"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!loading && <button>Add blog</button>}
        {loading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};
export default Create;
