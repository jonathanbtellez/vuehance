import * as bootstrap from 'bootstrap'
import Swiper from 'swiper/bundle';

export default function () {
    try {
        window.Swiper = Swiper
        window.bootstrap = bootstrap


    } catch (error) {
        console.error(error)
    }
}