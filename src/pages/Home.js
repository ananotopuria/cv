import { Link } from "react-router-dom";
import PhotoBox from "../components/PhotoBox";
import avatar from "./../assets/images/avatar.webp";
import background from "../assets/images/background.png";
import Button from "../components/Button";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    overlay: "bg-black bg-opacity-60",
  };

  return (
    <div className="h-screen bg-cover bg-top" style={backgroundStyle}>
      <div className={`absolute inset-0 ${backgroundStyle.overlay}`}>
        <div className="">
          <PhotoBox
            imgSrc={avatar}
            fullName="Samantha Black"
            position="Programmer. Creative. Innovator"
            description="I'm a passionate and creative frontend developer with a strong foundation in HTML, CSS, and JavaScript. I excel at translating design concepts into responsive web applications that captivate users. My portfolio is a testament to my ability to bring ideas to life. I'm committed to continuous growth and am dedicated to enhancing my skills further."
          >
            <Link to="/inner">
              <Button>Know More</Button>
            </Link>
          </PhotoBox>
        </div>
      </div>
    </div>
  );
}

export default Home;
