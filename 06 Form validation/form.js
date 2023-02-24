import FormValidator from "./classes/FormValidator.js";

function onClick(e) {
    e.preventDefault();

    let commentForm = document.getElementById("comment_form");
    let validator = new FormValidator();
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