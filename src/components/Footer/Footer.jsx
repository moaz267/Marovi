import React from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer px">
            <div className="footer_logo">
                <h4>Blogs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nihil. Quia nobis et numquam beatae molestias.</p>
            </div>
            <div className="footer_logo_contact">
                <h6>Contact us</h6>
                <div className="footer_logo_contact_social">
                    <FaYoutube />
                    <FaFacebook />
                    <FaGithub />
                </div>
            </div>
            <div className="footer_logo_bottom">
                <p>
                    All rights reserved <span>Moaz EL-Henawy</span>  © 2024
                </p>
            </div>
        </footer>
    );
}
