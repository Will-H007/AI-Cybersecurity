

import navbar from './navbar/navbar'
import typeWriter from './typewriter/typewriter'
import box from './boxes/distinct'
import './style.css'


const tags = ['About', "Impact", "Discover"]
navbar(document.querySelector<HTMLDivElement>('#navbar')!, tags)
box(document.querySelector<HTMLDivElement>('#distinct_box')!,"Heading Text", "Description Text")
box(document.querySelector<HTMLDivElement>('#connection_box')!,"Heading Text", "Description Text")
typeWriter(document.querySelector<HTMLDivElement>('#typewriter')!)
var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image);