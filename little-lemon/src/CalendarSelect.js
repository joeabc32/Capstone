import * as React from 'react';
import { ArrowDropDownIcon, DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Typography, Menu, MenuItem, Button, Icon } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useState } from 'react';
import person from "./images/person.png";
import clock from './images/clock.png';
import dish from "./images/Dish icon.svg";
import lemon from './images/logolemon.PNG';
import Confirmation from './Confirmation';
import dayjs from 'dayjs';
import arrow from './images/arrow.png';


function CalendarSelect() {
    const today = dayjs();
    const date_today = today.format('YYYY-MM-DD');


    const [timeSelected, setTimeSelected] = useState("Select a Time");
    const [peopleSelected, setPeopleSelected] = useState("Select Party Size");
    const [seatingType, setSeatingType] = useState("Seating Preference");
    const [ocassion, setOccasion] = useState("Select the Occasion")
    const [dateSelected, setDateSelected] = useState(date_today);

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

    function dateUpdate(newValue) {
        const updatedDate = dayjs(newValue).format('YYYY-MM-DD');
        setDateSelected(updatedDate);
    }


    const lemon_image = <img src={lemon} width={50} height={40} style={{ paddingRight: "10px" }}></img>
    const dish_image = <img src={dish} width={50} style={{ marginRight: "10px", backgroundColor: "white" }}></img>
    const clock_image = <img src={clock} width={50} style={{ paddingRight: "10px" }}></img>
    const person_image = <img src={person} width={50} style={{ paddingRight: "10px" }}></img>
    const arrow_image = <img src={arrow} width={20} style={{ paddingLeft: "10px" }}></img>

    return (
        <div style={{ paddingBottom: "40px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography variant="h3" component={'div'} color={"black"} style={{ fontFamily: "Markazi", paddingLeft: "22vw", paddingTop: "30px", paddingBottom: "20px" }}> Make a Reservation</Typography>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr" }}>
                    <div style={{ paddingLeft: "13vw" }}>
                        <DateCalendar disablePast onChange={dateUpdate} />
                    </div>
                    <div style={{ paddingLeft: "100px" }}>

                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button startIcon={lemon_image} variant="contained" size='large' endIcon={arrow_image} style={{ backgroundColor: "#495E57", width: "300px", height: "80px" }} {...bindTrigger(popupState)}>
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
                                    <Button startIcon={clock_image} variant="contained" size='large' endIcon={arrow_image} style={{ backgroundColor: "#495E57", width: "300px", height: "80px" }} {...bindTrigger(popupState)}>
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
                                    <Button startIcon={dish_image} variant="contained" size='large' endIcon={arrow_image} style={{ backgroundColor: "#495E57", width: "300px", height: "80px" }} {...bindTrigger(popupState)}>
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
                                    <Button startIcon={person_image} variant="contained" size='large' endIcon={arrow_image} style={{ backgroundColor: "#495E57", width: "300px", height: "80px" }} {...bindTrigger(popupState)}>
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
            <Confirmation people={peopleSelected} ocassion={ocassion} date={dateSelected} time={timeSelected} seating={seatingType} />
        </div >
    );
}

export default CalendarSelect;