import React, { useEffect, useState } from 'react'

function Problem5() {
    const [formData, setFormData] = useState(()=>{
        return {
            name : localStorage.getItem('name') || '',
            email : localStorage.getItem('email') || '',
            message : localStorage.getItem('message') || ''
        };
    });

    const handleInputChange=(e)=>{
        const {name, value} = e.target;
        setFormData((prevData)=>{
            const newData = {...prevData, [name] : value};
            return newData;
        }) 
    }
    console.log(localStorage)
    useEffect(()=>{
        localStorage.setItem('name', formData.name);
        localStorage.setItem('email', formData.email);
        localStorage.setItem('message', formData.message);

    },[formData])
  return (
    <div>
        <form>
            <div>
                <label>
                    Name:
                    <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
        </form>
    </div>
  )
}

export default Problem5