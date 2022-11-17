import StyleIconsVertical from './StyleIconsVertical.css'

import { RiImageAddFill } from 'react-icons/ri'

import img1 from '../../../../imgs/images/pexels-anna-shvets-3845458.jpg'
import img2 from '../../../../imgs/images/pexels-fauxels-3183150.jpg'
import img3 from '../../../../imgs/images/pexels-icsa-1709003.jpg'
import img4 from '../../../../imgs/images/pexels-icsa-1709003.jpg'
import img5 from '../../../../imgs/images/pexels-lex-photography-1109543.jpg'
import img6 from '../../../../imgs/images/pexels-liza-summer-6348129.jpg'
import img7 from '../../../../imgs/images/pexels-mathias-reding-7664118.jpg'
import img8 from '../../../../imgs/images/pexels-pixabay-39866.jpg'
import img9 from '../../../../imgs/images/pexels-rodnae-productions-5922537.jpg'
import img10 from '../../../../imgs/images/pexels-rodnae-productions-5922543.jpg'


function Images() {
    return (
        <>
            <div>
                <h1>Images</h1>
                <div className='container-images-vertical'>
                    <RiImageAddFill style={{ fontSize: 35, marginRight: 250, marginBottom: 10, marginTop: 5 }} />
                    <img src={img1} alt="pexels-anna-shvets-3845458" />
                    <img src={img2} alt="fauxels-3183150" />
                    <img src={img3} alt="icsa-1709003" />
                    <img src={img4} alt="icsa-1709003" />
                    <img src={img5} alt="lex-photography-1109543" />
                    <img src={img6} alt="liza-summer-6348129" />
                    <img src={img7} alt="mathias-reding-7664118" />
                    <img src={img8} alt="pixabay-39866" />
                    <img src={img9} alt="rodnae-productions-5922537" />
                    <img src={img10} alt="rodnae-productions-5922543" />
                </div>

            </div>
        </>
    )
};
export default Images;