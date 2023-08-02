import TextField from '@mui/material/TextField';
import { Button, FormHelperText, InputLabel, Input, Grow } from '@mui/material';
import FormControl from '@mui/material/FormControl';

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const pop = formData.get('people')
    console.log(pop);
};

function Confirmation(props) {
    return (
        <>
            <div>
                <form onSubmit={handleSubmit} style={{ paddingTop: "60px" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <FormControl>
                            <InputLabel htmlFor="people">Select Party Size</InputLabel>
                            <Input name="people" aria-describedby="my-helper-text" readOnly required={true} value={props.people} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="date">Select a Date on the Calendar</InputLabel>
                            <Input name="date" aria-describedby="my-helper-text" readOnly required={true} value={props.date} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="occasion">Select the Occasion</InputLabel>
                            <Input name="occasion" aria-describedby="my-helper-text" readOnly required={true} value={props.ocassion} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="time">Select an Available Time</InputLabel>
                            <Input name="time" aria-describedby="my-helper-text" readOnly required={true} value={props.time} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="seating">Select your Seating Preference</InputLabel>
                            <Input name="seating" aria-describedby="my-helper-text" readOnly required={true} value={props.seating} />
                        </FormControl>
                        <FormHelperText id="my-helper-text">Confirm the details prior to submitting</FormHelperText>
                    </div>
                    <br /><br /><br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button type='submit' style={{ backgroundColor: "#F4CE14", color: "black", padding: "20px 40px 20px 40px", fontWeight: "bold", fontSize: "22px" }} size="large">Submit Reservation</Button>
                    </div>
                </form>
            </div >
        </>
    );
}

export default Confirmation;