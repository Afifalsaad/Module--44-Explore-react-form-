import React from 'react';

const ActionForm = () => {

    const handleActionForm = (formData)=>{
        console.log(formData.get('email'))
    }

    return (
        <div>
            <form action={handleActionForm}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="text" name='email' placeholder='Email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ActionForm;