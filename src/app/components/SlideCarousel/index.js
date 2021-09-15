import { Carousel } from 'antd';
import image1 from  '../../assets/images/bloodbackground.jpeg'
const contentStyle = {
  height: '560px',
  color: '#fff',
  lineHeight: '160px',
  alignItems: 'center',
  background: '#364D79',
  width: '1000px',
  marginLeft: '15%',
  borderRadius: '5%'
};
function SlideCarousel(){
return(
  <Carousel autoplay>
    <div>
      <img src={image1} style={contentStyle}></img>
    </div>
    <div>
    <img src={image1} style={contentStyle}></img>    </div>
    <div>
    <img src={image1} style={contentStyle}></img>    </div>
    <div>
    <img src={image1} style={contentStyle}></img>    </div>
  </Carousel>
    )
}
export default SlideCarousel;










