
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div>
            <h3>This is 404 error</h3>
            <Link to='/'>  Go to Home</Link>
            
        </div>
    );
};

export default ErrorPage;