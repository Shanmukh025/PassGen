import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="heading">
                <h1>PASSWORD GENERATOR</h1>
                <p><i>Create Strong and Secure Passwords and PIN to keep your account safe.</i></p>
            </div>
        </>
    );
}

export default Header;
