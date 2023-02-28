import { Link } from "react-router-dom";
const Blog = (props) => {
  const blogs = props.blogs;
  return (
    <div>
      <h1 id="title">{props.title}</h1>
      {blogs.map((blog) => (
        <div className="blog-list" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <p>{blog.description}</p>
          <p>{blog.likes} &#10084;</p>
          <Link to={`/blog/${blog.id}`}>read more</Link>
        </div>
      ))}
      ;
    </div>
  );
};
export default Blog;
