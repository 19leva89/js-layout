// Iмпорт createHeader та createElement
import { createHeader, createElement } from '../../script/layout';

// Отримання посилання на елемент .page
const page = document.querySelector('.page');

// Створення та додавання header
const header = createHeader();
page.append(header);

// Створення та додавання заголовка h1
const title = createElement('h1', 'title', 'Коммьюніті');
page.append(title);


// Оголошення константи NAV_LIST зі списком елементів навігації
const NAV_LIST = ['База знань', 'Інформація'];

// Оголошення об'єкта communityContent з інформацією для відображення
const communityContent = {
	imageSrc: '/img/community__telegram.png',
	title: 'Що таке база знань?',
	info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
};

// Створення <main class="community__list">
const communityList = document.createElement('main');
communityList.className = 'community__list';

// Створення навігаційного меню
const navList = document.createElement('nav');
navList.className = 'nav__list';

NAV_LIST.forEach((navItemText) => {
	const navButton = document.createElement('button');
	navButton.className = 'nav__button';

	if (navItemText === 'База знань') {
		navButton.classList.add('nav__button__inactive');
	}

	navButton.textContent = navItemText;
	navList.append(navButton);
});

// Створення блоку з контентом
const communityContentBlock = document.createElement('div');
communityContentBlock.className = 'community__content';

// Створення зображення
const communityImage = document.createElement('img');
communityImage.className = 'community--img';
communityImage.src = communityContent.imageSrc;
communityImage.alt = 'Community Telegram';

// Створення заголовку
const communityTitle = document.createElement('h2');
communityTitle.className = 'community--title';
communityTitle.textContent = communityContent.title;

// Створення тексту інформації
const communityInfo = document.createElement('p');
communityInfo.className = 'community--info';
communityInfo.textContent = communityContent.info;

// Створення кнопки
const communityButton = document.createElement('button');
communityButton.className = 'community__button';
communityButton.textContent = "Перейти до ком'юніті у Телеграм";

// Додавання створених елементів до блоку з контентом
communityContentBlock.append(communityImage);
communityContentBlock.append(communityTitle);
communityContentBlock.append(communityInfo);
communityContentBlock.append(communityButton);

// Додавання навігаційного меню та блоку з контентом до головного контейнера
communityList.append(navList);
communityList.append(communityContentBlock);

page.append(communityList);
