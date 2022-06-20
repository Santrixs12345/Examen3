import './Navbar.css';
import logo from '../../shared/images/logo.svg';

export default function Navbar(){
    return <nav className="nav">
        <a href="/" className= "site-title"><img src={logo} className="App-logo" alt="logo" />Santiago</a>
        <ul>
            <li>
                <a href="/about">Curriculum Vitae</a>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
        
}