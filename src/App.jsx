import reactImage from "./assets/react-core-concepts.png";
import componentImage from "./assets/components.png";

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

function CoreConcepts(props) {
  return(
    <li>
      <img src={props.image}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
            <CoreConcepts
              title="Components"
              description="The core UI building blocks of React!"
              image={componentImage} />
            <CoreConcepts 
              title="Props"
              description="Passing data from one component to another!"
              image={componentImage} />
            <CoreConcepts 
              title="State"
              description="Managing data within a component!"
              image={componentImage} />
            <CoreConcepts 
              title="Lifecycle functions"
              description="Setting up the initial state of a component!"
              image={componentImage} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
