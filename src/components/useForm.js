import { useState } from 'react';

export function useForm(intialValues){
    const [values, setValues] = useState(intialValues);

    return [
        values,
        (e) => {
            setValues({
            ...values,
            [e.target.name]: e.target.type === "checkbox" ?
            e.target.checked : e.target.value,
        })
    }
    ]
}