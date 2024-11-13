
import axios from 'axios';
import { useEffect,useState } from 'react';
const PostAxi = ({ addPost }) => {
    const [title, setTitle] = useState("");  

    const addNew = () => {
        // Create a new post object
        const newPost = {
            id: Date.now(), // Temporary ID for local use
            title: title,
            userId: 1
        };

        // Call the addPost function to update the table
        addPost(newPost);
        setTitle(""); // Reset the title
    }

    return (
        <div>
            <input 
                type='text' 
                placeholder='Title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <button onClick={addNew}>Add to Table</button>
        </div>
    );
}

const Sample = ({ data }) => {
    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>User ID</th>
                </tr>
            </thead> 
            <tbody>
                {data.map((post) => (
                    <tr key={post.id}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{post.id}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{post.title}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{post.userId}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const ParentComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPosts(response.data));
    }, []);

    const addPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <div>
            <PostAxi addPost={addPost} />
            <Sample data={posts} />
        </div>
    );
}

export default ParentComponent;