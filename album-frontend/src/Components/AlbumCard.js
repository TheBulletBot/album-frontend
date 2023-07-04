import "@material-ui/core";
import { CardMedia,Card, CardHeader, CardContent, Typography} from "@material-ui/core";

const AlbCrd = ({ id, name, artist, imageUrl }) => {
    const Name="Banjo Kazooie Re-Jiggy'd"
    return (
        <Card height="140">
            <CardHeader></CardHeader>
            <CardMedia
                component="img"
                style={{height:140, objectFit: "contain"}}
                image="https://wiki.teamfortress.com/w/images/5/59/Lvl1dispenser.png"
                title="dispenser"/>
            <CardContent>
                <Typography variant="Title" color="text.primary">
                {Name}
                </Typography>
                <Typography>
                Grant Kirkhope
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AlbCrd;