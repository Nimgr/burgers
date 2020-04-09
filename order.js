const myForm = document.querySelector('#myForm');
const send = document.querySelector('#send');

        send.addEventListener('click', event => {
            event.preventDefault();

            if (validateForm(myForm)) {
                const data = {
                    name: myForm.elements.name.value,
                    phone: myForm.elements.phone.value,
                    email: myForm.elements.email.value,
                    comment: myForm.elements.comment.value
                };

                const xhr = new XMLHttpRequest();

                xhr.responseType = 'json';
                xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.send(JSON.stringify(data));
                xhr.addEventListener('load', () => {
                    if (xhr.response.status) {
                        const result = JSON.parse(xhr.responseText);
                        console.log(result);
                    }
                });
            }
        });

        function createResultDOM(result) {
            const div = document.createElement('div');
            div.classList.add('result');
            div.textContent = "result";
            return div;
        }

        function validateForm(form) {
            let valid = true;

            if (!validateField(form.elements.name)) {
                valid = false;
            }

            if (!validateField(form.elements.phone)) {
                valid = false;
            }

            if (!validateField(form.elements.email)) {
                valid = false;
            }

            if (!validateField(form.elements.comment)) {
                valid = false;
            }

            return valid;
        }

        function validateField(field) {
            field.nextElementSibling.textContent = field.validationMessage;
            return field.checkValidity();
        }