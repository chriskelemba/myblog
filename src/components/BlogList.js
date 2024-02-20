import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="home">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="preview" key={blog.id}>
                    <Link to={`BlogDetails/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>Written By: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;