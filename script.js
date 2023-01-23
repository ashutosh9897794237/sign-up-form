let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let passwordInput = document.querySelector('#Password');
let emailInput = document.querySelector('#Email');
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let password = passwordInput.value;
    let email  = emailInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${password}</td>
                    <td><button class="deleteBtn">Delete</button></td>
                    <td><button class="login"><a href="index2.html" > login </a></button></td>
                </tr>`;
    table.innerHTML += template;
});

