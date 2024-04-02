import React from "react";
import ReactDOM from "react-dom/client";
import FrontendTech from "./FrontendTech";
import Subscribe from "./Subscribe";
import Card from "./UserCard";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {FrontendTech}
        {Subscribe}
        {Card}
    </React.StrictMode>
);
