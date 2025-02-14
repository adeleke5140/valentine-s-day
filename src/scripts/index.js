import Cursor from "./cursor";
import { preloader } from "./preloader";
import LScroll from 'locomotive-scroll'
import Menu from "./menu";


const menuEl = document.querySelector('.menu')

preloader('.menu__item').then(() => {
    const scroll = new LScroll({el: menuEl, smooth: true})
    const cursor = new Cursor(document.querySelector('.cursor'))

    new Menu(menuEl)
})