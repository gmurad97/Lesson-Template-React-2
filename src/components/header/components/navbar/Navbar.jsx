import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="/#" className="navbar__link navbar__link-active">
                        Home
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">
                        Catalogue
                        <span className="navbar__link-badge">6</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">
                        Company
                        <span className="navbar__link-badge">2</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/#" className="navbar__link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;