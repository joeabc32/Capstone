import { Typography } from "@mui/material";

function ReserveHeader() {
    return (
        <div style={{ backgroundColor: "#495E57", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14vw", paddingBottom: "30px" }}>
            <div>
                <Typography variant="h1" component={'div'} color={'#F4CE14'} style={{ paddingTop: "20px", fontFamily: "Markazi", }}>Little Lemon</Typography>
                <Typography variant="h2" component={'div'} color={"white"} style={{ fontFamily: "Markazi" }}> Chicago</Typography>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "420px" }}>
                <center>
                    <Typography variant="h6" component={'div'} color={'white'} style={{ width: '450px', paddingTop: '40px', fontFamily: "Inter", lineHeight: "1.5" }}>
                        We Would Love To Host You! <br /><br /> Our patio is open for the Summer! Select the outdoor seating option while booking your reservation.<br /><br />See you Soon!</Typography>
                </center>
            </div>
        </div>
    );
}

export default ReserveHeader;