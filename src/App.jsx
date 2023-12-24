import reactImage from "./assets/react-core-concepts.png";
import componentImage from "./assets/components.png";
import { CORE_CONCEPTS} from "./data.js";

const stringDescriptons = ["Core", "Crucial", "Fundamental"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
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

function CoreConcepts({image, title, description}) {
  return(
    <li>
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
