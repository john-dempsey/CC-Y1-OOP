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
                field: ageError,
                message: "Age must be between 0 and 120"
            });
        }
    
        if (!this.notEmpty(categoryInput)) {
            errors.push({
                field: categoryError,
                message: "Category is required"
            });
        }
        else {
            let options = categoryInput.querySelectorAll('option');
            let optionValues = Array.from(options).map(option => option.value);
            let selectedOption = categoryInput.querySelector('option:checked');
            if (!this.isSubset([selectedOption.value], optionValues)) {
                errors.push({
                    field: categoryError,
                    message: "Invalid category"
                });
            };
        }
    
        if (!this.minChecked(experienceBtns, 1)) {
            errors.push({
                field: experienceError,
                message: "Experience is required"
            });
        }
        else {
            let optionValues = Array.from(experienceBtns).map(option => option.value);
            let selectedOption = form.querySelector('[name=experience]:checked');
            if (!this.isSubset([selectedOption.value], optionValues)) {
                errors.push({
                    field: experienceError,
                    message: "Invalid experience"
                });
            };
        }
    
        if (!this.minChecked(languageBtns, 1) || !this.maxChecked(languageBtns, 2)) {
            errors.push({
                field: languagesError,
                message: "Choose one or two languages"
            });
        }
        else {
            let optionValues = Array.from(languageBtns).map(option => option.value);
            let selectedOptions = form.querySelectorAll("[name='languages[]']:checked");
            let selectedValues = Array.from(selectedOptions).map(option => option.value);
            if (!this.isSubset(selectedValues, optionValues)) {
                errors.push({
                    field: languagesError,
                    message: "Invalid language(s)"
                });
            };
        }

        return errors;
    }
}

export default FormValidator;