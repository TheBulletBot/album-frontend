import {Link} from "@material-ui/core";
import {useParams} from 'react-router-dom'
import { useAlbum } from "../Hooks/useAlbum";
function AlbDet(){
    let params = useParams();
    const album = useAlbum(params.id)
    return(
        <div>
            <Link href="/album"> Back?</Link>
        </div>
    )
}
export default AlbDet