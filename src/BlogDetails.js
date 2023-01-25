import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    
    
    const { data: blog, error, isPending } = useFetch('https://raw.githubusercontent.com/anonymous-a-rod/ReactBlog/main/data/db.json/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('https://raw.githubusercontent.com/anonymous-a-rod/ReactBlog/main/data/db.json/blogs/' + blog.id, {
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
                </article>}
        </div>
     );
}
 
export default BlogDetails;