import styleDesignEditor from './styleDesignEditor.css'

import Header from './Header'
import CollumVerticalIcons from './Collum-vertical/CollumVerticalIcons.jsx'
import Collumhorizontal from './Collum-horizontal/Collumhorizontal'


function DesignEditor() {
    return(
        <>
        <Header/>
    <div className='container-body'>
        <CollumVerticalIcons/>
        <Collumhorizontal/>        
    </div>
        </>
    )
};
export default DesignEditor;