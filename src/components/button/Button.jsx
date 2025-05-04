import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Button({ title, slug ,isLoading,customClick }) {
    const navigate = useNavigate()
    return (
        <button
            className="custom_btn"
            type="submit"
            onClick={() => {
                if (slug) {
                    navigate(slug);
                    scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }
                 else if (customClick) {
                    customClick()
                }
            }}>
            <div className="custom_btn_text">
                <p>{title}</p>
                {isLoading && <BiLoaderAlt className="loader-spinner" size={20} />}
            </div>
            <div className="custom_btn_arrow">
                <FaArrowRight />
            </div>
        </button>
    );
}
