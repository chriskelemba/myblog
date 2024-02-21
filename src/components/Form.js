import React , { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
    const [data, setData] = useState({
        title: '',
        author: '',
        body: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData ((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form Validation
        if (data.title.length === 0) {
            toast.error("Title field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.author.length === 0) {
            toast.error("Author field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.body.length === 0) {
            toast.error("Body field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
        
        // Axios
        axios.post("http://localhost:4000/blogs", data)
        .then (res => {
            toast.success("New Blog Added Successfully", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
        })
        .catch (err => {
            toast.error("An error Occurred while adding the blog", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
        })
    }}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-75 p-3 mx-auto">
                    <div className="form-group">
                        <label className="mb-1">Title</label>
                        <input type="text" className="form-control" name="title" value={data.title} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Author</label>
                        <input type="text" className="form-control" name="author" value={data.author} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Body</label>
                        <textarea className="form-control" rows="4" cols="50" name="body" value={data.body} onChange={handleChange}/>
                    </div>
                    <div className="form-check mt-3 text-center">
                        <button type="submit" className="btn btn-primary justify-content-center">Save Blog</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;