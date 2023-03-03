class Validator {
    constructor() {}

    notEmpty(field) {
        return field.value !== "";
    }

    minLength(field, minLen) {
        return field.value.length >= minLen;
    }

    maxLength(field, minLen) {
        return field.value.length <= minLen;
    }

    minChecked(buttons, minNum) {
        let count = 0;
        for (let i = 0; i < buttons.length; i++) {
            let btn = buttons[i];
            if (btn.checked) {
                count++;
            }
        }
        return count >= minNum;
    }

    maxChecked(buttons, maxNum) {
        let count = 0;
        for (let i = 0; i < buttons.length; i++) {
            let btn = buttons[i];
            if (btn.checked) {
                count++;
            }
        }
        return count <= maxNum;
    }

    numeric(field) {
        return !isNaN(field.value) && !isNaN(parseFloat(field.value));
    }

    min(field, minValue) {
        return this.numeric(field) && parseFloat(field.value) >= minValue;
    }

    max(field, maxValue) {
        return this.numeric(field) && parseFloat(field.value) <= maxValue;
    }

    isSubset(a, b) {
        let results = [];
        for (let i = 0; i != a.length; i++) {
            let val = a[i];
            
            results.push(b.includes(val));
        }
        let result = true;
        for (let i = 0; i != results.length; i++) {
            if (results[i] === false) {
                result = false;
                break;
            }
        }
        return result;
    }
}

export default Validator;