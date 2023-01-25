import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, not sorry</h2>
            <p>404 Page Not Found</p>
            <Link to='/'>Back to the home page...</Link>
        </div>
     );
}
 
export default NotFound;