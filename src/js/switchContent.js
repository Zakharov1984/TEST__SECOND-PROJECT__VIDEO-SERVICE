const tabElements = document.querySelectorAll('.tabs__item');
const contentElements = document.querySelectorAll('[data-content]');


/**
 * Получаем коллекцию элементов 'tabs__item'.
 * Обходим коллекцию с помощью метода .forEach(), на вход методу передаем callback-функцию.
 * На каждый элемет стави слушатель события, событие - click.
 * В обработчике проверяем, есть ли у элемента, на котором произошло событие - активный класс - с момощью метода .contains('tabs__item_active'),
 * если его нет, соответсвенно, получаем тот элемент, у которого есть такой класс, удаляем активный класс у ненужного элемента
 * и добавляем активный класс у элемента на котором произошло событие.
 * Вызывается функция для добавления активного класса контенту, в зависимости от переданного значения id.
 */
tabElements.forEach(element => {
    element.addEventListener('click', event => {
        if ( !event.target.classList.contains('tabs__item_active') ) {
            document.querySelector('.tabs__item_active').classList.remove('tabs__item_active');
            event.target.classList.add('tabs__item_active');
            changeContnent(event.target.id);
        }
    })
})

/**
 * 
 * @param {string} id - принимает значение id - елемента, на котором произошло событие.
 * Функция принимает на вход значение id - елемента, на котором произошло событие.
 * Проверяет полученое значение со значение data-атрибута, контент - елемента.
 * в зависимости от пришедшего значения выполняются действия, а именно, добавляется активный класс для контента.
 */
function changeContnent(id) {
    if (id === 'films') {
        document.querySelector('[data-content="films"]').classList.add('content-films_active');
        document.querySelector('[data-content="channels"]').classList.remove('content-channels_active');
    } else if (id === 'channels') {
        document.querySelector('[data-content="channels"]').classList.add('content-channels_active');
        document.querySelector('[data-content="films"]').classList.remove('content-films_active');
    }
}

