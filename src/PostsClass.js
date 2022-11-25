import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Posts.css'

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        this.fetchPosts();
    }

    async fetchPosts() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response)
        this.setState({posts: response.data})
        
    }
    render() {
        return (
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
                        this.state.posts && this.state.posts.map((post, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{post.userId}</td>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>
                                        <Link to={`/post/${post.id}`}>Click to view</Link>
                                        {/* Click to View */}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
export default Posts;
