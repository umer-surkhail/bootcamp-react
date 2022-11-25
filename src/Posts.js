import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Posts.css'


function Posts() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetchPosts();
    }, [])
    //WITH PROMISE
    // const fetchPosts = () =>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response);
    //         console.log(response.data)
    //         setPosts(response.data)
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    // }

    //WITH ASYNC/AWAIT
    const fetchPosts = async () =>{
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

    const navigateToRoute = (route) => {
        navigate(route)
    }
    return (
        <>
            <h1>This is Posts Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{post.userId}</td>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    {/* <td onClick={()=>navigateToRoute(`/post/${post.id}`)}> */}
                                    <td>
                                        {/* <Link to={`/post/${post.id}`}>Click to view</Link> */}
                                        <button onClick={()=>navigateToRoute(`/post?id=${post.id}`)}>Click to View</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Posts;
