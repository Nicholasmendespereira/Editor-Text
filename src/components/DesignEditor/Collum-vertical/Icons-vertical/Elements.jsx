import StyleIconsVertical from './StyleIconsVertical.css'
import img1 from '../../../../imgs/facebook.png'
import img2 from '../../../../imgs/instagram.png'
import img3 from '../../../../imgs/linkedin.png'
import img4 from '../../../../imgs/redes-sociais.png'
import img5 from '../../../../imgs/twitter.png'
import img6 from '../../../../imgs/youtube.png'


function Elements() {
    return (
        <>

           <div>
           <h1>Elements</h1>
            <div className='imgsElements'>
            <img src={img1} alt="icon-facebook" />
            <img src={img2} alt="icon-instagram" />
            <img src={img3} alt="icon-linkedin" />
            <img src={img4} alt="icon-redes-sociais" />
            <img src={img5} alt="icon-twitter" />
            <img src={img6} alt="icon-youtube" />
            </div>
           </div>


        </>
    )
};
export default Elements;