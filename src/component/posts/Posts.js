
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {


    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });
    }, []);

    const chosePost = (item) => {
        setPost(item);
    };


    return (<div>
        {post.id && <div>{post.userId} {post.body}</div>}
        <h2>posts component page</h2>
        {posts.map((post, index) => <Post
            key={index}
            item={post}
            color={'silver'}
            chosePost={chosePost}
        />)}
    </div>);
}
