import React from "react";
import ReactDOM from "react-dom/client";
import html from "./images/html_logo.png";
import css from "./images/css_logo.png";
import react from "./images/react_logo.png";

const container_style = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
    gap: "20px",
    // flexDirection: "column",
    widht: "100%",
};
const img_style = {
    widht: "100px",
    height: "100px",
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div style={container_style}>
            <h1>Frontend Technologies</h1>
            <img style={img_style} src={html} alt="" />
            <img style={img_style} src={css} alt="" />
            <img style={img_style} src={react} alt="" />
        </div>
    </React.StrictMode>
);
