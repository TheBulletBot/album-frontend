import { CardMedia,Card, CardHeader, CardContent, Typography,CardActionArea} from "@material-ui/core";

const AlbCrd = ({ id, name, artist, imageURL }) => {
    console.log(id,name,artist,imageURL)
    return (
        <Card height="140">
            <CardActionArea href={"/details/"+id}>
            <CardHeader>{id}</CardHeader>
            <CardMedia
                component="img"
                style={{height:140, objectFit: "contain"}}
                image= {imageURL}
                title="dispenser"></CardMedia>
            <CardContent>
                <Typography variant="h4">
                {name}
                </Typography>
                <Typography>
                {artist}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default AlbCrd;