import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
        <footer component="footer" className="flex justify-center text-white h-7 fixed inset-x-0 bottom-0">
            <p>Made with </p><FontAwesomeIcon className="text-red-400 md:w-6 animate-pulse" icon={faHeartbeat} /><p> by HeyJack</p>
        </footer>
);

export default Footer;
