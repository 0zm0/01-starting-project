import "./Header.css";
import reactImage from "../../assets/react-core-concepts.png";

const stringDescriptons = ["Core", "Crucial", "Fundamental"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
    const description = stringDescriptons[getRandomInt(stringDescriptons.length)];
  
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }