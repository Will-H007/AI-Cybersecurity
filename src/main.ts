

import navbar from './navbar/navbar'
import './style.css'


const tags = ['About', "Technology", "Impact", "Discover"]
navbar(document.querySelector<HTMLDivElement>('#navbar')!, tags)

