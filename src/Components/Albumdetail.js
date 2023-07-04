import {Link} from "@material-ui/core";
import {useParams} from 'react-router-dom'
import { useAlbum } from "../Hooks/useAlbum";
import AlbForm from "./AlbumForm";
import AlbCrd from "./AlbumCard";
function AlbDet(){
    let params = useParams();
    const album = useAlbum(params.id);
    return(
        <div>
            <AlbCrd id={album.id} name={album.name} artist={album.artist} imageURL={album.imageURL}/>
            <AlbForm></AlbForm>
            <Link href="/album"> Back?</Link>
        </div>
    )
}
export default AlbDet