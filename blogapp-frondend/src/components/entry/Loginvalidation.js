function validation(formValues){

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    

    if (!formValues.email) {
        errors.email= "Email is required";
    }
    else if (!regex.test(formValues.email)) {
        errors.email = "Email is invalid";
    }
    if (!formValues.password) {
        errors.password = "password is required";
    }
    

    
    

    return errors;
}

export default validation;