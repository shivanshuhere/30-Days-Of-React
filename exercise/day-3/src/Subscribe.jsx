const heading = {
    textAlign: "center",
    textTransform: "uppercase",
};

const para = {
    textAlign: "center",
};

const inputContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
};

const container_style = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
    gap: "20px",
    flexDirection: "column",
    widht: "100%",
    backgroundColor: "skyblue",
};

const input = {
    border: "2px solid green",
    borderRadius: "10px",
};

const Subscribe = (
    <div style={container_style}>
        <h1 style={heading}>Subscribe</h1>
        <p style={para}>
            Sign up with your email address to receive news and updates.
        </p>
        <div style={inputContainer}>
            <input style={input} type="text" placeholder="First Name" />
            <input style={input} type="text" placeholder="Last Name" />
            <input style={input} type="text" placeholder="Email Address" />
        </div>
        <button>Subscribe</button>
    </div>
);

export default Subscribe;
