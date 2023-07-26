import * as React from 'react';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Typography, Menu, MenuItem, Button } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import person from "./images/person.png";
import clock from './images/clock.png';
import dish from "./images/Dish icon.svg";
import lemon from './images/logolemon.PNG';
import dayjs from 'dayjs';


function CalendarSelect() {
    const [timeSelected, setTimeSelected] = useState("Select a Time");
    const [peopleSelected, setPeopleSelected] = useState("Select Party Size");
    const [seatingType, setSeatingType] = useState("Seating Preference");
    const [ocassion, setOccasion] = useState("Select the Occasion")
    const [dateChoice, setDateChoice] = useState(null);

    function timing(e) {
        const text = e.target.textContent;
        setTimeSelected(text);
    }

    function partySize(e) {
        const text = e.target.textContent;
        setPeopleSelected(text);
    }

    function seating(e) {
        const text = e.target.textContent;
        setSeatingType(text);
    }

    function eventSet(e) {
        const text = e.target.textContent;
        setOccasion(text);
    }

    function dateSet() {
        const element = document.getElementById(':r1:-grid-label').innerHTML;
        setDateChoice(element);
    }

    return (
        <div style={{ paddingBottom: "40px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography variant="h3" component={'div'} color={"black"} style={{ fontFamily: "Markazi", paddingLeft: "22vw", paddingTop: "30px", paddingBottom: "20px" }}> Make a Reservation</Typography>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr" }}>
                    <div style={{ paddingLeft: "13vw" }}>
                        <DateCalendar disablePast onChange={dateSet} />
                    </div>
                    <div style={{ paddingLeft: "100px" }}>

                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button variant="contained" size='large' style={{ backgroundColor: "#495E57", width: "250px", height: "80px" }} {...bindTrigger(popupState)}>
                                        <IconButton><img src={lemon} width={34} style={{ backgroundColor: "white" }}></img></IconButton>
                                        {ocassion}
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={(e) => { eventSet(e); popupState.close(); }}>Birthday</MenuItem>
                                        <MenuItem onClick={(e) => { eventSet(e); popupState.close(); }}>Engagement</MenuItem>
                                        <MenuItem onClick={(e) => { eventSet(e); popupState.close(); }}>Anniversary</MenuItem>
                                        <MenuItem onClick={(e) => { eventSet(e); popupState.close(); }}>Just Dinner!</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

                        <br /><br /> <br /><br /> <br /><br />

                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button variant="contained" size='large' style={{ backgroundColor: "#495E57", width: "250px", height: "80px" }} {...bindTrigger(popupState)}>
                                        <IconButton><img src={clock} width={50}></img></IconButton>
                                        {timeSelected}
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={(e) => { timing(e); popupState.close(); }}>05:00 PM</MenuItem>
                                        <MenuItem onClick={(e) => { timing(e); popupState.close(); }}>05:30 PM</MenuItem>
                                        <MenuItem onClick={(e) => { timing(e); popupState.close(); }}>06:00 PM</MenuItem>
                                        <MenuItem onClick={(e) => { timing(e); popupState.close(); }}>06:30 PM</MenuItem>
                                        <MenuItem onClick={(e) => { timing(e); popupState.close(); }}>07:00 PM</MenuItem>
                                        <MenuItem onClick={(e) => { timing(e); popupState.close(); }}>07:30 PM</MenuItem>
                                        <MenuItem onClick={(e) => { timing(e); popupState.close(); }}>08:00 PM</MenuItem>
                                        <MenuItem onClick={(e) => { timing(e); popupState.close(); }}>08:30 PM</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

                    </div>
                    <div>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button variant="contained" size='large' style={{ backgroundColor: "#495E57", width: "250px", height: "80px" }} {...bindTrigger(popupState)}>
                                        <IconButton><img src={dish} width={50} style={{ backgroundColor: "white" }}></img></IconButton>
                                        {seatingType}
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={(e) => { seating(e); popupState.close(); }}>Either</MenuItem>
                                        <MenuItem onClick={(e) => { seating(e); popupState.close(); }}>Indoors</MenuItem>
                                        <MenuItem onClick={(e) => { seating(e); popupState.close(); }}>Outdoors</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

                        <br /><br /> <br /><br /> <br /><br />

                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button variant="contained" size='large' style={{ backgroundColor: "#495E57", width: "250px", height: "80px" }} {...bindTrigger(popupState)}>
                                        <IconButton><img src={person} width={50}></img></IconButton>
                                        {peopleSelected}
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={(e) => { partySize(e); popupState.close(); }}>1 person</MenuItem>
                                        <MenuItem onClick={(e) => { partySize(e); popupState.close(); }}>2 people</MenuItem>
                                        <MenuItem onClick={(e) => { partySize(e); popupState.close(); }}>3 people</MenuItem>
                                        <MenuItem onClick={(e) => { partySize(e); popupState.close(); }}>4 people</MenuItem>
                                        <MenuItem onClick={(e) => { partySize(e); popupState.close(); }}>5 people</MenuItem>
                                        <MenuItem onClick={(e) => { partySize(e); popupState.close(); }}>6 people</MenuItem>
                                        <MenuItem onClick={(e) => { partySize(e); popupState.close(); }}>7 people</MenuItem>
                                        <MenuItem onClick={(e) => { partySize(e); popupState.close(); }}>8 people</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </div >
                </div>
            </LocalizationProvider >
            <h1>{dateChoice}</h1>
        </div >
    );
}

export default CalendarSelect;