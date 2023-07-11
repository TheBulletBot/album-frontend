import {Card, CardContent,TextField,CardMedia,Typography, FormControl} from "@material-ui/core"
//TODO: MAKE DISPLAY FORM FOR ALBUMDETAIL
//TODO: MAKE INPUT FORM FOR ADD
//MAYBE? MAKE INPUT FORM FOR delete
function AlbForm(album){
    function handleSubmit(){
        
    }
    
    if (album.album){
        return(
            <div>
            <Card>
                <CardContent>
                <CardMedia
                component="img"
                style={{height:140, objectFit: "contain"}}
                image= {album.album.imageURL}
                title="dispenser"></CardMedia>
                    <TextField  helperText="Title" value={album.album.name}/>

                    <TextField helperText="Artist" value={album.album.artist}/>
                </CardContent>
            </Card>
            </div>
        )
    }
    else {
    return(
        <div>
        
        <form autoComplete="off" onSubmit={handleSubmit}>
            <FormControl>
            <Typography>Add an Album</Typography>
            <CardContent>
                <CardMedia></CardMedia>
                <TextField  helperText="Title" ></TextField>
                <TextField helperText="Artist"></TextField>
                <TextField helperText="Image URL"></TextField>
            </CardContent>
            </FormControl>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
    }
    
}
export default AlbForm;