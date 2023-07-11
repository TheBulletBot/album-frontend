import {Card, CardContent,TextField,CardMedia,Typography, FormControl, CardActionArea} from "@material-ui/core"
import { useForm,Controller } from "react-hook-form";

//TODO: MAKE DISPLAY FORM FOR ALBUMDETAIL
//TODO: MAKE INPUT FORM FOR ADD
//MAYBE? MAKE INPUT FORM FOR delete
function AlbForm(album,{onSubmit}){
    const { handleSubmit, control } = useForm({
        defaultValues: album
            ? album
            : {
                name: "",
                artist: "",
                imageUrl: "",
            },
    });
    
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
        
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
            <Typography>Add an Album</Typography>
            <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <TextField
                        label="Name"
                        variant="outlined"
                        {...field}
                        margin="normal"
                        fullWidth
                    />
                )}
                margin="normal"
            />  
            <Controller
                name="Artist"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <TextField
                        label="Artist"
                        variant="outlined"
                        {...field}
                        margin="normal"
                        fullWidth
                    />
                )}
                margin="normal"
            />  
            <Controller
                name="ImageURL"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <TextField
                        label="Link to Image"
                        variant="outlined"
                        {...field}
                        margin="normal"
                        fullWidth
                    />
                )}
                margin="normal"
            />  
            
            <button type="submit">Submit</button>
            </FormControl>
            
            </form>
        </div>
        
    )
    }
}
export default AlbForm;