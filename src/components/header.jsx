import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
        <nav>
            <div className="nav-logo">
                <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pinterest-round-white-icon.png' alt='logo' />
                PASSGEN
            </div>

            <div className="nav-buttons">
                <button>Github</button>
                <button>Linkedin</button>
            </div>
        </nav>
            <div className="heading">
                <h1>PASSWORD GENERATOR</h1>
                <h4><i>Create Strong and Secure Passwords to keep your accounts safe.</i></h4>
            </div>
        </>
    );
}

export default Header;
