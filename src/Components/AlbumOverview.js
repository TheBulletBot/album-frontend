import { Grid } from "@material-ui/core";
import {useAlbums} from "../Hooks/useAlbums"
import {AlbCrd} from "./"

function AlbOvv(){
    const albums=useAlbums()
    return(
        <div>
            {albums.map((album) => (
                <Grid item container direction="column" xs={12} key={album.id}>
                    <AlbCrd id={album.id} name={album.name} artist={album.artist} imageURL={album.imageURL}/>
                </Grid>
            ))}

        </div>
    )
}

export default AlbOvv;