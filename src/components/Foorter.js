import Little_lemon_logo from '../images/Little_lemon_logo.png'


function Footer() {
    return (
        <>
        <h1>Footer</h1>
        <footer>
            <h3>Footer navigation links</h3>
            {/* 4 column div for 
            - logo
            - Navigation Links
            - Contacts
            - Social Links
             */}
             <div>
                <div>
                    <img src={Little_lemon_logo} alt='Little Lemon Yellow Logo' width={200}/>
                </div>
                <div>
                    <h4>Doormat</h4>
                    <div>
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#reservation">Reservation</a></li>
                            <li><a href="#order">Order Online</a></li>
                            <li><a href="#login">Login</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Contacts</h4>
                    <p>Address</p>
                    <p>0123456789</p>
                    <p>contact@littlelemon.com</p>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <p>Facebook</p>
                    <p>YouTube</p>
                    <p>Instagram</p>
                    <p>X</p>
                </div>                
             </div>

        </footer>
        </>
    )
}

export default Footer;