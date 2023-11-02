// Iмпорт createHeader та createElement
import { createHeader, createElement, createPost } from '../../script/layout';

// Отримання посилання на елемент .page
const page = document.querySelector('.page');

// Створення та додавання header
const header = createHeader();
page.append(header);

// Створення та додавання заголовка h1
const title = createElement('h1', 'title', 'Мій блог');
page.append(title);

// Додавання блоку постів до сторінки
page.append(createPost());