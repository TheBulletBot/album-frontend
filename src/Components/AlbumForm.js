import {Card, CardContent,TextField,CardMedia,Typography} from "@material-ui/core"
//TODO: MAKE DISPLAY FORM FOR ALBUMDETAIL
//TODO: MAKE INPUT FORM FOR ADD
//MAYBE? MAKE INPUT FORM FOR delete
function AlbForm(album){

    if (album){
        return(
            <div></div>
        )
    }
    else {
    return(
        <div>
        
        <Card>
            <Typography>Delete an Album</Typography>
            <CardContent>
                <CardMedia></CardMedia>
                <TextField  helperText="Title" >

                </TextField>
            </CardContent>
        </Card>
        </div>
    )
    }
}
export default AlbForm;