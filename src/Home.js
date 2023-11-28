
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return(
        <div>
            <div>
                <div className = "message">
                    <h1>Your site, your way, ACME!</h1>
                    <p>Finally, a way to get the site you want the WAY you want</p>
                    <a href="#/projectform" className = "new-button">New Project</a>
                </div>
                <Slider {...settings} className='home-slider'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/ferenc-almasi-eYpcLDXHVb0-unsplash.jpg`} alt="Image 1" class = "slide"/>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/brooke-cagle-WHWYBmtn3_0-unsplash.jpg`} alt="Image 2" class = "slide"/>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/luke-peters-B6JINerWMz0-unsplash.jpg`} alt="Image 3" class = "slide"/>
                    </div>
                </Slider>
            </div>
            <div className="message-block-container">
                <div className="message-block">
                    <h1>INCREASE REVENUE WITH AN AWESOME SITE.</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;