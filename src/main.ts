

import navbar from './navbar/navbar'
import typeWriter from './typewriter/typewriter'
import './style.css'


const tags = ['About', "Impact", "Discover"]
navbar(document.querySelector<HTMLDivElement>('#navbar')!, tags)
typeWriter(document.querySelector<HTMLDivElement>('#typewriter')!)
