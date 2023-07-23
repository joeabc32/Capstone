import profile1 from "./images/profile 1.jpg"
import profile2 from "./images/profile 2.jpg"
import profile3 from "./images/profile 3.jpg"
import profile4 from "./images/profile 4.jpg"
import { CardContent, CardMedia, Typography, Card, CardHeader, Rating } from '@mui/material';

function Testimonials() {
    return (
        <div style={{ backgroundColor: "#495E57", paddingBottom: "100px" }}>
            <center>
                <b><h2 style={{ color: "white", padding: "100px 0 50px 0", fontSize: 48, fontFamily: "Karla, sans-serif", letterSpacing: "2px" }}>TESTIMONIALS</h2></b>
            </center>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 60 }}>
                <Card sx={{ maxWidth: 275, borderRadius: 16 }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ padding: "22px", fontWeight: 400, fontSize: "1.5rem", margin: "0px", letterSpacing: "0em", fontFamily: "sans-serif" }}>Rating:</h4>
                        <Rating name="read-only" value="5" readOnly style={{ paddingTop: "4px" }} />
                    </span>
                    <CardMedia
                        component="img"
                        height="194"
                        image={profile1}
                        alt="Michael Review"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" fontSize={20} align="center">
                            Michael - "My Favorite weekend joint!"
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 275, borderRadius: 16 }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ padding: "22px", fontWeight: 400, fontSize: "1.5rem", margin: "0px", letterSpacing: "0em", fontFamily: "sans-serif" }}>Rating:</h4>
                        <Rating name="read-only" value="4.5" precision={0.5} readOnly style={{ paddingTop: "4px" }} />
                    </span>
                    <CardMedia
                        component="img"
                        height="194"
                        image={profile2}
                        alt="Michael Review"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" fontSize={20} align="center">
                            Mary - "Great for taking out the family"
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 275, borderRadius: 16 }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ padding: "22px", fontWeight: 400, fontSize: "1.5rem", margin: "0px", letterSpacing: "0em", fontFamily: "sans-serif" }}>Rating:</h4>
                        <Rating name="read-only" value="5" readOnly style={{ paddingTop: "4px" }} />
                    </span>
                    <CardMedia
                        component="img"
                        height="194"
                        image={profile3}
                        alt="Michael Review"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" fontSize={20} align="center">
                            Allison - "Best salads on Main street"
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 275, borderRadius: 16 }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ padding: "22px", fontWeight: 400, fontSize: "1.5rem", margin: "0px", letterSpacing: "0em", fontFamily: "sans-serif" }}>Rating:</h4>
                        <Rating name="read-only" value="5" readOnly style={{ paddingTop: "4px" }} />
                    </span>
                    <CardMedia
                        component="img"
                        height="194"
                        image={profile4}
                        alt="Michael Review"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" fontSize={20} align="center">
                            Jackson - "The dessert here is amazing!"
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div >
    );
}

export default Testimonials;