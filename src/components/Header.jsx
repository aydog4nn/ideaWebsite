import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="h-28 flex flex-row bg-black text-white text-2xl justify-around font-headersTitle">
            <div className="flex items-center mr-5 hover:text-hoverTextColor transition duration-800">
                <Link to="/home">Random Hoca</Link>
            </div>
            <div className="flex items-center gap-10">
                <Link className="hover:text-hoverTextColor transition duration-800" to="/home">Ana Sayfa</Link>
                <Link className="hover:text-hoverTextColor transition duration-800" to="/about">Hakkında</Link>
                <Link className="hover:text-hoverTextColor transition duration-800" to="/academic">Akademik</Link>
            </div>
        </div>
    );
}

export default Header;
