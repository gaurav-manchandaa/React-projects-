import CoreConcepts from "./CoreConcepts"
import { CORE_CONCEPTS } from "../data"
export default function CoreComponents(){
    // in this we will import the corconcepts 
    return(
        <section id='core-concepts'>
        <h2>Core Concept</h2>
        <ul>
        {CORE_CONCEPTS.map((core_items)=>
        <CoreConcepts key={core_items.title} {...core_items}/>)}
        </ul>
        </section>
    )
}