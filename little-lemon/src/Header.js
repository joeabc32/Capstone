import { Button, Typography } from "@mui/material";
import header_photo from "./images/restauranfood.jpg";

function Header() {
    return (
        <header>
            <div className="header-section">
                <div style={{ backgroundColor: "#495E57" }}>
                    <Typography variant="h1" component={'div'} color={'#F4CE14'} style={{ paddingTop: "80px", fontFamily: "Markazi" }}>Little Lemon</Typography>
                    <Typography variant="h2" component={'div'} color={"white"} style={{ fontFamily: "Markazi" }}> Chicago</Typography>
                    <Typography variant="h5" component={'div'} color={'white'} style={{ width: '450px', paddingTop: '40px', fontFamily: "Inter", lineHeight: "1.5" }}>
                        We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</Typography>
                    <Button style={{ backgroundColor: "#F4CE14", marginTop: '100px', color: "black", padding: "20px 40px 20px 40px", fontWeight: "bold", fontSize: "22px" }} size="large">Reserve a Table</Button>
                </div>
                <div style={{ backgroundColor: "#495E57" }}>
                    <div >
                        <img src={header_photo} width={570} height={660} style={{ borderRadius: "6%", maxWidth: "100%", position: "relative", bottom: "-50px", right: "0px", zIndex: "1" }}></img>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;