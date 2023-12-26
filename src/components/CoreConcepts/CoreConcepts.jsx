import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "./CoreConcept.jsx";


export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
    );
}