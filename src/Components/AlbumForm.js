import {Card, CardContent,TextField,CardMedia,Typography, FormControl, CardActionArea} from "@material-ui/core"
import { useForm,Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//TODO: MAKE DISPLAY FORM FOR ALBUMDETAIL
//TODO: MAKE INPUT FORM FOR ADD
//MAYBE? MAKE INPUT FORM FOR delete
function AlbForm({album,onSubmit}){
    const { control, handleSubmit } = useForm({
        defaultValues: album
            ? album
            : {
                name: "",
                artist: "",
                imageUrl: "",
            },
    });

    const endpoint =`${process.env.REACT_APP_API_URL}Album`;
    const navigate=useNavigate()
    
    if (album){
        return(
            <div>
            <Card>
                <CardContent>
                <CardMedia
                component="img"
                style={{height:140, objectFit: "contain"}}
                image= {album.imageURL}
                title="dispenser"></CardMedia>
                    <TextField  helperText="Title" value={album.name}/>

                    <TextField helperText="Artist" value={album.artist}/>
                    <TextField helperText="URL: " value={album.imageURL}/>
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
                name="artist"
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
                name="imageUrl"
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