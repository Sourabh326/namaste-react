import UserClass from "./UserClass";


const About = () => {
    return(
        <div className="about-container">
            <h1 className="about-heading">This is About Page</h1>
            <UserClass name="Sourabh" location="Indore" designation="Software Developer" />
        </div>
    )
}

export default About;