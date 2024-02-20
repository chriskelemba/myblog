import BlogList from "./BlogList";
import useFetch from "./useFetch";

const MyBlog = () => {
    const blogs = useFetch("http://localhost:4000/blogs");

    return (
        <div className="home">
            {blogs &&<BlogList blogs={blogs}/>}
        </div>

    );
}

export default MyBlog;