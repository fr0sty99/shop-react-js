import PropTypes from 'prop-types';
import logo from '../logo.png';
import avatar from '../avatar.png';

const user = "Joris Neber"

const Header = ({ title }) => {
    return (
        <header className='header' >
            <img src={logo} className='logo' alt='Logo' />
            <h3>{user}</h3>
            <input type="image" className='avatar-btn' src={avatar} />
            <button className='cart-btn'>Cart</button>
        </header >
    )
}
//         <img src={avatar}  onclick="myFunction()" alt='user Logo' />

Header.defaultProps = {
    title: 'JN Shop'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header