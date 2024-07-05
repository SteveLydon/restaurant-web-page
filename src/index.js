import './style.css';
import * as Hometab from './hometab';
import * as Menutab from './menutab';
import * as Abouttab from './abouttab';


Hometab.createContentDiv();
document.body.classList.add("reset");
let homebutton = document.getElementById('navHome');
let menubutton = document.getElementById('navMenu');
let aboutbutton = document.getElementById('navAbout');

homebutton.onclick = Hometab.createContentDiv;
menubutton.onclick = Menutab.createContentDiv;
aboutbutton.onclick = Abouttab.createContentDiv;

if (module.hot) {
   module.hot.accept();
}