import React from 'react';
import { useParams } from 'react-router-dom';

import Button from './Button'

const TaskDetails = () => {
    const params = useParams()
    console.log(params);
    return ( 
        <>
            <div className="back-button-container">
            <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero, sequi doloremque atque dolorem perspiciatis.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;