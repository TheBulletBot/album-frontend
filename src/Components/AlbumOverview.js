import { Grid } from "@material-ui/core";
import {useAlbums} from "../Hooks/useAlbums"
import {AlbCrd} from "./"
import { Link } from "react-router-dom";

function AlbOvv(){
    const albums=useAlbums()
    return(
        <div>
            {albums.map((album) => (
                <Grid item container direction="column" xs={12} key={album.id}>
                    <AlbCrd album={album}/>
                </Grid>
            ))}
            <Link to="/new">Add Album</Link>
        </div>
    )
}

export default AlbOvv;