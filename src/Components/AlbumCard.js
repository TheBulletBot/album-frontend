import "@material-ui/core";
import { CardMedia,Card, CardHeader, CardContent, Typography} from "@material-ui/core";

const AlbCrd = ({ id, name, artist, imageURL }) => {
    console.log(id,name,artist,imageURL)
    return (
        <Card height="140">
            <CardHeader>{id}</CardHeader>
            <CardMedia
                component="img"
                style={{height:140, objectFit: "contain"}}
                image= {imageURL}
                title="dispenser"/>
            <CardContent>
                <Typography variant="h4">
                {name}
                </Typography>
                <Typography>
                {artist}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AlbCrd;