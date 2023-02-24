import Validator from "./Validator.js";

class FormValidator extends Validator {
    constructor() {
        super();
    }

    clearErrors(form) {
        let nameError = form.querySelector("#name_error");
        let ageError = form.querySelector("#age_error");
        let categoryError = form.querySelector("#category_error");
        let experienceError = form.querySelector("#experience_error");
        let languagesError = form.querySelector("#languages_error");
        
        nameError.innerHTML = "";
        ageError.innerHTML = "";
        categoryError.innerHTML = "";
        experienceError.innerHTML = "";
        languagesError.innerHTML = "";
    }

    displayErrors(errors) {
        for (let i = 0; i != errors.length; i++) {
            let error = errors[i];
            error.field.innerHTML = error.message;
        }
    }

    validate(form) {
        let errors = [];

        let nameField = form.querySelector("#name");
        let ageField = form.querySelector("#age");
        let categoryInput = form.querySelector("#category");
        let experienceBtns = form.querySelectorAll("[name=experience]");
        let languageBtns = form.querySelectorAll("[name='languages[]']");

        let nameError = form.querySelector("#name_error");
        let ageError = form.querySelector("#age_error");
        let categoryError = form.querySelector("#category_error");
        let experienceError = form.querySelector("#experience_error");
        let languagesError = form.querySelector("#languages_error");
        
        if (!this.notEmpty(nameField)) {
            errors.push({
                field: nameError,
                message: "Name is required"
            });
        }
        else if (!this.minLength(nameField, 6)) {
            errors.push({
                field: nameError,
                message: "Name must be at least 6 characters"
            });
        }

        if (!this.notEmpty(ageField)) {
            errors.push({
                field: ageError,
                message: "Age is required"
            });
        }
        else if (!this.min(ageField, 0) || !this.max(ageField, 120)) {
            errors.push({
                field: nameError,
                message: "Age must be between 0 and 120"
            });
        }
    
        if (!this.notEmpty(categoryInput)) {
            errors.push({
                field: categoryError,
                message: "Category is required"
            });
        }
    
        if (!this.minChecked(experienceBtns, 1)) {
            errors.push({
                field: experienceError,
                message: "Experience is required"
            });
        }
    
        if (!this.minChecked(languageBtns, 1) || !this.maxChecked(languageBtns, 2)) {
            errors.push({
                field: languagesError,
                message: "Choose one or two languages"
            });
        }

        return errors;
    }
}

export default FormValidator;