const myForm = document.querySelector('#myForm');
const send = document.querySelector('#send');
const statusPopup = document.querySelector('#statusPopup');
const statusBtn = document.querySelector('#statusBtn');

var formData = new FormData;

    send.addEventListener('click', event => {
        event.preventDefault();

        if (validateForm(myForm)) {
            formData.append("name", myForm.elements.name.value);
            formData.append("phone", myForm.elements.phone.value);
            formData.append("comment", myForm.elements.comment.value);
            formData.append("to", "nimgrin@hotmail.com");

            const xhr = new XMLHttpRequest();

            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(formData);

            xhr.addEventListener('load', () => {
                if (xhr.status >= 400) {
                    const results = JSON.parse(xhr.responseText);
                    const element = document.createElement('div');
                    statusPopup.insertBefore(element, statusBtn);
                    element.textContent = results.message;
                    element.style.marginTop = '15px';
                    statusPopup.style.display = 'block';

                } else {
                    const results = JSON.parse(xhr.responseText);
                    const element = document.createElement('div');
                    statusPopup.insertBefore(element, statusBtn);
                    element.textContent = results.message;
                    element.style.marginTop = '15px';
                    statusPopup.style.display = 'block';
                }
            });
        };

        statusBtn.addEventListener("click", function(e) {
        e.preventDefault();
        statusPopup.style.display = "none";
        });

        function validateForm(myForm) {
            let valid = true;

            if (!validateField(myForm.elements.name)) {
                valid = false;
            }

            if (!validateField(myForm.elements.phone)) {
                valid = false;
            }

            if (!validateField(myForm.elements.comment)) {
                valid = false;
            }

            return valid;
        }

        function validateField(field) {
            if (!field.checkValidity()) {
                field.nextElementSibling.textContent = field.validationMessage;
  
                return false;
            } else {
                field.nextElementSibling.textContent = '';
  
                return true;
            }
        }
    });