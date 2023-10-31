import {useState} from 'react';

function useEmailValidation(initialState = {})
{
    const [email,setEmail] = useState(initialState.email ?? "");
    const [error,setError] = useState(initialState.error ?? false);

    function validateEmail(testEmail)
    {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
        return regex.test(testEmail);
    }

    function setEmailWithValidation(newEmail)
    {
        setEmail(newEmail);
        setError(!validateEmail(newEmail));
    }

    return [email,error,setEmailWithValidation];
}

export default useEmailValidation;