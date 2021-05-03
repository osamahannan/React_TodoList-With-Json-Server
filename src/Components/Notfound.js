import { Link } from "react-router-dom"

const Notfound = () => {
    return ( 
        <div className="Not-found">
            <h1>Sorry!</h1>
            <p>That page cannot be found</p>
            <div className="links">
                <Link to="/"><b>Back to the homepage...</b></Link>
            </div>
        </div>
     );
}
 
export default Notfound;