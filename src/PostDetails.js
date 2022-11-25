import { useState, useEffect } from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function PostDetails() {
    // const params = useParams();
    const [searchParams] = useSearchParams();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        // const id = params.id;
        const id = searchParams.get('id');
        fetchPostDetails(id);
    }, [])
    const fetchPostDetails = async (id) =>{
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPost(response.data)
    }
    return (
        <div>
            <h1>This is Post Details Page</h1>
            {
                post ? 
                <>
                <div>
                    <span>UserId: </span>
                    <span>{post.userId}</span>
                </div>
                <div>
                    <span>Id: </span>
                    <span>{post.id}</span>
                </div>
                <div>
                    <span>Title: </span>
                    <span>{post.title}</span>
                </div>
                <div>
                    <span>Body: </span>
                    <span>{post.body}</span>
                </div>
                </> :
                "No Data fetched yet"
            }
            
        </div>
    )
}
export default PostDetails;
