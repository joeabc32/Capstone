import { CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import salad from './images/salad.jpg';
import bruchetta from './images/bruchetta.svg';
import lemon from './images/lemon dessert.jpg'
import Card from '@mui/material/Card';

function Mainpage() {
    return (
        <div style={{ padding: "60px 0 100px 0" }}>
            <div style={{ display: "flex", flex: "wrap", justifyContent: "center", fontSize: 34, alignItems: "center", fontFamily: "Inter, sans-serif", gap: "14vw" }}>
                <h1><b>This week's specials!</b></h1>
                <Button style={{ backgroundColor: "#F4CE14", color: "black", padding: "20px 40px 20px 40px", fontWeight: "bold", fontSize: "22px" }} size="large">Online Menu</Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", justifyContent: "center", marginTop: "20px" }}>
                <Card sx={{ maxWidth: 400, borderRadius: 16, backgroundColor: "#EDEFEE" }}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height="300"
                            image={salad}
                            alt="Greek salad"
                        />
                        <CardContent>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                <Typography variant="h6">Greek Salad</Typography>
                                <Typography variant="h6" style={{ paddingRight: "10px", color: "#F9B609", fontWeight: "300" }}>$12.99</Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: "20px", fontFamily: "Inter", fontSize: "18px" }}>
                                The famous Greek salad of lettuce, peppers, olives, and out Chicago style feta cheese,
                                garnished with crunchy garlic and croutons. </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" style={{ padding: "20px" }}>
                            Order for delivery
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 400, borderRadius: 16, backgroundColor: "#EDEFEE" }}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height="300"
                            image={bruchetta}
                            alt="Freek salad"
                        />
                        <CardContent>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                <Typography variant="h6">Bruschetta</Typography>
                                <Typography variant="h6" style={{ paddingRight: "10px", color: "#F9B609", fontWeight: "300" }}>$5.99</Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: "20px", fontFamily: "Inter", fontSize: "18px" }}>
                                Our Bruschetta is made from grilled bread that has been
                                smeared with garlic and seasoned with seal salt and authentic Italian olive oil. </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" style={{ padding: "20px" }}>
                            Order for delivery
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 400, borderRadius: 16, backgroundColor: "#EDEFEE" }}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height="300"
                            image={lemon}
                            alt="Freek salad"
                        />
                        <CardContent>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                <Typography variant="h6">Lemon Dessert</Typography>
                                <Typography variant="h6" style={{ paddingRight: "10px", color: "#F9B609", fontWeight: "300" }}>$5.00</Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: "20px", fontFamily: "Inter", fontSize: "18px" }}>
                                This comes straight from grandma’s recipe book, every last ingredient
                                has been sourced and is authentic as can be imagined. </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" style={{ padding: "20px" }}>
                            Order for delivery
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Mainpage;