import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const MyBlog = () => {
    const {data} = UseFetch("http://localhost:4000/blogs");

    return (
        <div className="home">
            {data && <BlogList blogs= {data} title="All Blogs"/>}
        </div>

    );
}

export default MyBlog;