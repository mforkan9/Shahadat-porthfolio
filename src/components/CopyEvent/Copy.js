import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Copy = () => {
    const [copySuccess,setCopySuccess] = useState({
        value:'',
        copied:false
    })
    const handleChange = ({target:{value}}) =>{
        setCopySuccess({value,copied:false })
    }
    const handleCopy = () =>{
        setCopySuccess({copied:true})
    }
    return (
        <div>
             <input  onChange={handleChange} value={copySuccess.value} />
            <CopyToClipboard text={copySuccess.value} onCopy={handleCopy}>
          <button>Copy</button>
        </CopyToClipboard>
        <div>
        {copySuccess.copied  ? <span style={{color: 'red'}}>Copied.</span> : null}
        </div>
        <input type="text" /> 
        </div>
    );
};

export default Copy;