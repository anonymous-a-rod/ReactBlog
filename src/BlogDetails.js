import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    
    
    const { data: blog, error, isPending } = useFetch('https://my-json-server.typicode.com/anonymous-a-rod/ReactBlog/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('https://my-json-server.typicode.com/anonymous-a-rod/ReactBlog/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && <article>
                <h2>{ blog.title }</h2>
                <p>{ blog.author }</p>
                <div> { blog.body }</div>
                <button onClick={handleClick}>delete</button>
                <p>read only, as I don't want you modifying the actual DB haha</p>
                </article>}
        </div>
     );
}
 
export default BlogDetails;