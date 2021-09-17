import { Carousel } from 'antd';
import image1 from  '../../assets/images/autfit1.jpeg'
import image2 from  '../../assets/images/autfit2.jpeg'
import image3 from  '../../assets/images/autfit3.jpeg'
import image4 from  '../../assets/images/botas.jpeg'
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
    <img src={image2} style={contentStyle}></img>    </div>
    <div>
    <img src={image3} style={contentStyle}></img>    </div>
    <div>
    <img src={image4} style={contentStyle}></img>    </div>
  </Carousel>
    )
}
export default SlideCarousel;










