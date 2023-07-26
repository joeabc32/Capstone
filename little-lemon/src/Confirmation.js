import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import salad from './images/greek salad.jpg'

function Confirmation(props) {
    if (props.people === "Select Party Size") {

        return (
            <div style={{ paddingLeft: "300px" }}>
                <img src={salad} width={500} style={{ paddingLeft: "200px", paddingRight: "200px" }}></img>
                <TextField
                    style={{ width: "550px", border: "solid", borderRadius: "6px" }}
                    id="filled-multiline-static"
                    label="Make a Special Request"
                    multiline
                    rows={10}
                    defaultValue="We are looking for..."
                    variant="filled"
                />
                <div style={{ paddingLeft: "50vw", paddingBottom: "60px" }}>
                    <Button style={{ backgroundColor: "#F4CE14", color: "black", padding: "20px 40px 20px 40px", fontWeight: "bold", fontSize: "22px" }} size="large">Find a Table</Button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={{ paddingLeft: "300px" }}>
                <img src={salad} width={500} style={{ paddingLeft: "200px", paddingRight: "200px" }}></img>
                <TextField
                    style={{ width: "550px", border: "solid", borderRadius: "6px" }}
                    id="filled-multiline-static"
                    label="Make a Special Request"
                    multiline
                    rows={10}
                    defaultValue="We are looking for..."
                    variant="filled"
                />
                <div style={{ paddingLeft: "50vw", paddingBottom: "60px" }}>
                    <Button style={{ backgroundColor: "#F4CE14", color: "black", padding: "20px 40px 20px 40px", fontWeight: "bold", fontSize: "22px" }} size="large">Find a Table</Button>
                </div>
            </div>
        )
    }
}

export default Confirmation;