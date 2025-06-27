import Little_lemon_logo from '../images/Little_lemon_logo.png'
function Nav() {
    return (
        <>
        <h1>Navigation</h1>
        <img src={Little_lemon_logo} alt='Little Lemon Yellow Logo' width={200}/>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Reservation</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
                
            </ul>
        </nav>
        </>
    )
}

export default Nav;