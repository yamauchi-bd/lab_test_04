import React, { useState, useEffect } from 'react'
import useForm from '../hooks/useForm';

const Form = () => {
    const { name, email, data, handleNameChange, handleEmailChange } = useForm();
    
    return (
        <div>
            {data &&
                data.map((i, index) => (
                    <div key={index}>
                        <p>{i.id}</p>
                        <p>{i.title}</p>
                        <p>{i.userId}</p>
                    </div>
                ))}

            <div>
                <div>名前</div>
                <input type="text" value={name} onChange={handleNameChange} />
            </div>

            <div>
                <div>メールアドレス</div>
                <input type="text" value={email} onChange={handleEmailChange} />
            </div>

            <p>名前: {name}</p>
            <p>メールアドレス: {email}</p>
        </div>
    )
}

export default Form