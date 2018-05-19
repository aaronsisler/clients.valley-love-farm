import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
        <div><Link to="/privacy">Privacy Policy</Link></div>
    </footer>
);

export default Footer;
