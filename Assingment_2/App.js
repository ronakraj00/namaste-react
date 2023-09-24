import React from "react";
import ReactDOM from "react-dom/client";
import RLogo from "./R-logo.svg"
import userIcon from "./user-icon.jpg"

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <img src={RLogo} />
                </div>
                <div>
                    <input type="search" placeholder="let's find" />
                </div>
                <div>
                    <img src={userIcon} alt="user-icon" />
                </div>
            </header>
        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Header/>
);
