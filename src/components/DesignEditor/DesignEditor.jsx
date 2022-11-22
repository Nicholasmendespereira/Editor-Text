import styleDesignEditor from './styleDesignEditor.css'

import Header from './Header'
import CollumVerticalIcons from './Collum-vertical/CollumVerticalIcons.jsx'
import Collumhorizontal from './Collum-horizontal/Collumhorizontal'


function DesignEditor() {
    return (
        <>
            {/* <Header /> */}
            <div className='container-body'>
                <CollumVerticalIcons />
                <Collumhorizontal colorData={"red"} />

            </div>
        </>
    )
};
export default DesignEditor;