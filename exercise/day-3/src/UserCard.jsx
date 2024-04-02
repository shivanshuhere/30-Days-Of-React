import userImg from "./images/asabeneh.jpg";

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "MongoDB",
    "Express",
];

const skillStyle = {
    display: "inline-block",
    backgroundColor: "skyblue",
    padding: "10px",
    textAlign: "center",
    widht: "33px",
    height: "20px",
};

const imgStyle = {
    widht: "200px",
    height: "210px",
};

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
const Card = (
    <div style={containerStyle}>
        <img src={userImg} alt="" style={imgStyle} />
        <h2>Shivansh Koundal</h2>
        <p>FrontEnd Developer</p>
        <h2>
            <strong>skills</strong>
        </h2>
        <div>
            {skills.map((skill) => (
                <div key={Math.random()} style={skillStyle}>
                    {skill}
                </div>
            ))}
        </div>
        <p>Joined on March 2022</p>
    </div>
);

export default Card;
