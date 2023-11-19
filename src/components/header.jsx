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
                <h1>*PASSWORD GENERATOR*</h1>
                <h4><i>Create Strong and Secure Passwords to keep your accounts safe.</i></h4>
            </div>
        </>
    );
}

export default Header;
