import chef from "./images/restaurant chef B.jpg"
import balcony from "./images/restaurant.jpg"
import { Typography } from "@mui/material";

function About() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "100px", gap: "60px", paddingBottom: "100px" }}>
            <div>
                <Typography variant="h2" component={'div'} color={'#F4CE14'} style={{ fontFamily: "Markazi" }}>Little Lemon</Typography>
                <Typography variant="h3" component={'div'} color={"black"} style={{ fontFamily: "Markazi" }}> Chicago</Typography>
                <Typography variant="h5" component={'div'} color={'black'} style={{ width: '450px', paddingTop: '40px', fontFamily: "Inter" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
            </div>
            <div className="image1_contain">
                <img src={chef} ></img>
            </div>
            <div className="image2_contain">
                <img src={balcony} width="100%" height="100%" object-fit="cover" ></img>
            </div>
        </div>
    )
}

export default About;