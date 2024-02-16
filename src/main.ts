

import navbar from './navbar/navbar'
import typeWriter from './typewriter/typewriter'
import box from './boxes/feature_box'
import './style.css'

const distinct_description = "Our company seeks to utilize the emergence feature steam from AI to gain distinct and unique insights from data. It also means that AI will show us capacities that we have never imagine before";
const connection_description = "AI getting more mainstream means that it is increasing ubiquitous. Our company seeks to explore the connections between AI and everything else"

const tags = ['About', "Impact", "Discover"]
navbar(document.querySelector<HTMLDivElement>('#navbar')!, tags)

const typewriterElement = document.querySelector<HTMLDivElement>('#typewriter');

if (typewriterElement) {
    await typeWriter(typewriterElement, 'Born from the AI Era', 40);
    // Introduce a delay after the typing is complete
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log('Typing complete');
} else {
    console.error("Element with id 'typewriter' not found.");
}

typeWriter(document.querySelector<HTMLDivElement>('#company_name')!, 'Ubiquitous',200)

box(document.querySelector<HTMLDivElement>('#distinct_box')!,"Emergence", distinct_description)
box(document.querySelector<HTMLDivElement>('#connection_box')!,"Connection", connection_description)


