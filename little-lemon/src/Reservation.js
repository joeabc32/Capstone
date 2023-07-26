import CalendarSelect from "./CalendarSelect";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ReserveHeader from "./ReserveHeader";
import Confirmation from "./Confirmation";

function Reservation() {
    return (
        <>
            <Navigation></Navigation>
            <ReserveHeader></ReserveHeader>
            <CalendarSelect></CalendarSelect>
            <Footer></Footer>
        </>
    )
}

export default Reservation;