const entryForm = document.querySelector('.entry');
const btnEntryOpenModal = document.querySelector('.header__signIn-entry');
const signInLoginUser = document.querySelector('.header__signIn-login');
const goOutSignIn =document.querySelector('.header__signIn-goOut');
const changeNameElement = document.querySelector('.header__signIn-changeName');
const modalElement = document.querySelector('.modal');
const modalClose = document.querySelector('.entry__close');
const formLogin = document.querySelector(".entry__login");
const formPassword = document.querySelector('.entry__password');
const formCheckbox = document.querySelector('.entry__checkbox'); 

entryForm.addEventListener('submit', event => {
    event.preventDefault();
    authorization();
    modalElement.classList.remove('modal__active');
})

btnEntryOpenModal.addEventListener('click', event => {
    modalElement.classList.add('modal__active');
})

modalClose.addEventListener('click', event => {
    modalElement.classList.remove('modal__active');
})

function authorization() {
    let user1 = new User(formLogin.value, formPassword.value, formCheckbox.value);
    signInLoginUser.innerText = user1.name;
    btnEntryOpenModal.classList.add('header__signIn-entry_disabled');
    goOutSignIn.classList.add('header__signIn-goOut_active');
}

/**
 * Функция конструктор принимает на вход Имя,Пароль, значение чекбокса.
 * Генерирует объект с данными пользователя.
 * @param {string} name - Имя пользователя.
 * @param {string} password - Пароль пользователя.
 * @param {string} save  - Значение указывающее на сохранять/не сохранять данные.
 */
function User(name, password, save) {
    this.name = name;
    this.password = password;
    this.save = save;
}


function changeName() {
    signInLoginUser.addEventListener('click', event => {
        signInLoginUser.classList.add('header__signIn-login_disabled');
        changeNameElement.classList.add('header__signIn-changeName_active');
        changeNameElement.value = signInLoginUser.innerText;
    })
}

changeName();