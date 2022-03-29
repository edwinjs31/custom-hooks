# useForm Hook

Ejemplo de uso:

```
    const initialForm = {
        name:'',
        age:'',
        email:''
    };

    const { formValues, handleInputChange, reset } = useForm(initialForm);

```