//this is neccesary
//the toolbar proves why
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div>
        <Link to="/album">Overview</Link>
        <p>  </p>
        <Link to="/Details/1"> Details</Link>
        <p>  </p>
        <Link to="/new">Add New</Link>
        </div>
    )
}
export default Nav;