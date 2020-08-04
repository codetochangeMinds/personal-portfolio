import React from 'react';
import { Link } from 'react-router-dom';
import './cv.css'

function CvDoc(props) {
    return(
    <div>
        <iframe src={process.env.PUBLIC_URL + '/Assets/AbhishekCV.pdf'} width="100%" height="600px" />
    </div>
    )
}

export default CvDoc;