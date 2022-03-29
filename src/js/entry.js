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
let user1; 


/**
 * При событии DOMContentLoaded, делаем проверку и при условии, если пользователь вводил имя, либо редактировал имя,
 * вставляем значение в поле "Логин", у форы.
 * 
 */
document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('name') != undefined) {
        formLogin.value = sessionStorage.getItem('name');
    }
})

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
    user1 = new User(formLogin.value, formPassword.value, formCheckbox.value);
    signInLoginUser.innerText = user1.name;
    sessionStorage.setItem('name', user1.name); 
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



/**
 * На элемент ставим слушатель события "click", при возникновении события, вызывается обработчик,
 * скрываем элемент с первоночальным именем пользователя, показываем элемент для ввода нового значения,
 * в поле ввода уже дефолтно стоит старое значение, далее отслеживаем событие "change" в поля воода, как только событие срабатывает,
 * записываем новое значение в элемент с именем пользователя, и все эелементы возвращаем на свои первоначальные места.
 * И выполним проверку на пустое поле, если ничего не ввели, то подставим дефолтное значение.
 */
function changeName() {
    signInLoginUser.addEventListener('click', event => {
        signInLoginUser.classList.add('header__signIn-login_disabled');
        changeNameElement.classList.add('header__signIn-changeName_active');
        changeNameElement.value = signInLoginUser.innerText;
        changeNameElement.addEventListener('change', event => {
            if (!changeNameElement.value) { // если ничего не ввели, подставим дефолтное значение.
                signInLoginUser.innerText = 'defaultName';
            } else { // иначе записываем значение в элемент с именем и в объект, можно наоборот, и подставлять значение из поля name, объекта user1.
                signInLoginUser.innerText = changeNameElement.value;
                user1.name = changeNameElement.value;
                sessionStorage.setItem('name', user1.name);
                console.dir(user1);
            }

            signInLoginUser.classList.remove('header__signIn-login_disabled');
            changeNameElement.classList.remove('header__signIn-changeName_active');

        })

    })
}

changeName();

