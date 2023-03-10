import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};
        
        setIsPending(true);

        fetch('https://my-json-server.typicode.com/anonymous-a-rod/ReactBlog/blogs',{
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added')
            setIsPending(false)
            //history.go(-1)
            history.push('/')
        })

        
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} 
                ></textarea>
                <label>Blog author:</label>
                <select 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                >
                    <option value="Aaron">Aaron</option>
                    <option value="Daniel">Daniel</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
            <p>read only, as I don't want you modifying the actual DB haha</p>
        </div>
     );
}
 
export default Create;