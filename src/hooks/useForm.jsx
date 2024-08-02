import React, { useState, useEffect } from 'react';

const useForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        // console.log("発火！！");
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
                console.log(response, "データ取得中");
                const data = await response.json();
                console.log(data, "データ取得完了");
                setData(data);
            } catch (error) {
                console.error('エラー発生:', error);
            }
        };
        fetchData();
    }, []);

    return{
        name,
        email,
        data,
        handleNameChange,
        handleEmailChange,
    };
}

export default useForm;