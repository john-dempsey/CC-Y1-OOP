class Validator {
    constructor() {}

    clearErrors(form) {
        let nameError = form.querySelector("#name_error");
        let categoryError = form.querySelector("#category_error");
        let experienceError = form.querySelector("#experience_error");
        let languagesError = form.querySelector("#languages_error");
        
        nameError.innerHTML = "";
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
        let categoryInput = form.querySelector("#category");
        let experienceBtns = form.querySelectorAll("[name=experience]");
        let languageBtns = form.querySelectorAll("[name='languages[]']");

        let nameError = form.querySelector("#name_error");
        let categoryError = form.querySelector("#category_error");
        let experienceError = form.querySelector("#experience_error");
        let languagesError = form.querySelector("#languages_error");
        
        let errorExists = false;
        
        function showError(errorField, errorMessage) {
            errorField.innerHTML = errorMessage;
            errorExists = true;
        }

        errorExists = false;
    
        if (nameField.value === "") {
            errors.push({
                field: nameError,
                message: "Name is required"
            });
        }
    
        if (categoryInput.value === "") {
            errors.push({
                field: categoryError,
                message: "Category is required"
            });
        }
    
        let expSelected = false;
        for (let i = 0; i < experienceBtns.length; i++) {
            let btn = experienceBtns[i];
            if (btn.checked) {
                expSelected = true;
                break;
            }
        }
        if (!expSelected) {
            errors.push({
                field: experienceError,
                message: "Experience is required"
            });
        }
    
        let minLang = 1;
        let maxLang = 2;
        let countLang = 0;
        for (let i = 0; i < languageBtns.length; i++) {
            let btn = languageBtns[i];
            if (btn.checked) {
                countLang++;
            }
        }
        if (countLang < minLang || countLang > maxLang) {
            errors.push({
                field: languagesError,
                message: "Choose one or two languages"
            });
        }

        return errors;
    }
}

function onClick(e) {
    e.preventDefault();

    let commentForm = document.getElementById("comment_form");
    let validator = new Validator();
    validator.clearErrors(commentForm);
    let errors = validator.validate(commentForm);

    // if there was no errors then submit the form
    if (!errors.length === 0) {
        commentForm.submit();
    }
    else {
        validator.displayErrors(errors);
    }
}

let submitBtn = document.getElementById("submit_btn");   
submitBtn.addEventListener("click", onClick);