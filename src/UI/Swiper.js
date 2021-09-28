import Carousel from 'react-bootstrap/Carousel'
import sliderImg_1 from "../static/images/Grill_slider_rus.jpg"
import sliderImg_2 from "../static/images/119_slider_rus.jpg"
import sliderImg_3 from "../static/images/Manhattan_slider_rus.jpg"

function Swiper() {
    return (
        <Carousel className = "slider" style = {{height: "400px", overflow: "hidden"}}>
            <Carousel.Item>
                <img
                style ={{display: "block"}}
                className="d-block w-100"
                src={sliderImg_1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sliderImg_2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sliderImg_3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
    )
}

export default Swiper