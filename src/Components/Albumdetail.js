import {Link} from "@material-ui/core";
import {useParams} from 'react-router-dom'
import { useAlbum } from "../Hooks/useAlbum";
import AlbForm from "./AlbumForm";
function AlbDet(){
    let params = useParams();
    const album = useAlbum(params.id);
    return(
        <div>

            <AlbForm album={album}></AlbForm>
            <Link to="/album"> Back?</Link>
            
        </div>
    )
}
export default AlbDet