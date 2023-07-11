import { CardMedia,Card, CardHeader, CardContent, Typography,CardActionArea} from "@material-ui/core";

const AlbCrd = ({ album }) => {
    return (
        <Card height="140">
            <CardActionArea to={"/details/"+album.id}>
            <CardHeader>{album.id}</CardHeader>
            <CardMedia
                component="img"
                style={{height:140, objectFit: "contain"}}
                image= {album.imageURL}
                title="dispenser"></CardMedia>
            <CardContent>
                <Typography variant="h4">
                {album.name}
                </Typography>
                <Typography>
                {album.artist}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default AlbCrd;