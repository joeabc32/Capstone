import logo_snip from "./images/logo snip.PNG"

function Footer() {
    return (
        <footer>
            <div className="footer_logo">
                <img src={logo_snip}></img>
            </div>
            <div className="footer_doormat">
                <center>
                    <h3 style={{ margin: "0", fontSize: "24px" }}>Navigation</h3>
                    <br />
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </center>
            </div>
            <div className="footer_contact">
                <center>
                    <h3 style={{ margin: "0", fontSize: "24px" }}>Contact</h3>
                    <br />
                    <li><a>4685 Main Street
                        <br />Seattle Washington 80503</a></li>
                    <br />
                    <li><a>1-584-568-1543</a></li>
                    <br />
                    <li><a>contact@llemon.com</a></li>
                </center>
            </div>
            <div className="footer_social">
                <center>
                    <h3 style={{ margin: "0", fontSize: "24px" }}>Social Media</h3>
                    <br />
                    <li><a>Facebook</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>Twitter</a></li>
                    <li><a>Grubhub</a></li>
                    <li><a>Yelp</a></li>
                </center>
            </div>
        </footer >
    );
}

export default Footer;