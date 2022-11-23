/*
Создайте функции:
   hasClass(elem, elemСlass),
   addClass(elem, elemСlass),
   removeClass(elem, elemСlass),
   toggleClass(elem, elemСlass),
которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему CSS-класс, удалить CSS-класс и переключить CSS-класс.

В функции передаются 2 параметра:
   elem - DOM-элемент, который проверяется,
   elemСlass - название класса, которое проверяется.
*/

export function hasClass(elem, elemClass) {
    if (elem.classList.contains(elemClass + '')) {
        return true;
    } else {
        return false;
    }
}

export function addClass(elem, elemClass) {
    elem.classList.add(elemClass + '');
}

export function removeClass(elem, elemClass) {
    elem.classList.remove(elemClass + '');
}

export function toggleClass(elem, elemClass) {
    elem.classList.toggle(elemClass + '');
}
