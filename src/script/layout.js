export const createElement = (tag, className, text) => {
	const elem = document.createElement(tag)

	if (className) {
		elem.className = className
	}

	if (text) {
		elem.innerHTML = text
	}

	return elem
}


// Окрема константа для списку кнопок
const HEADER_BUTTON_LIST = [
	{
		src: '/svg/header__back.svg',
		alt: 'back',
		width: '24px',
		height: '24px',
	},
	{
		src: '/img/header__avatar.png',
		alt: 'avatar',
		width: '24px',
		height: '24px',
	},
];


// Функція для створення заголовка
export const createHeader = () => {
	// Створення елементу <header>
	const header = document.createElement('header');
	header.className = 'header';

	// Створення кнопок та додавання їх до заголовку
	HEADER_BUTTON_LIST.forEach((buttonData) => {
		const button = document.createElement('button');
		button.className = 'button';

		const img = document.createElement('img');

		// Перебір та встановлення атрибутів для кожної кнопки
		Object.keys(buttonData).forEach((attr) => {
			img.setAttribute(attr, buttonData[attr]);
		});

		button.append(img);
		header.append(button);
	});

	return header;
};


// Окрема константа для списку постів
const POST_LIST = [
	{
		categories: ['Важливо', 'Нова'],
		date: '25.01',
		text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
	},
	{
		categories: ['Важливо'],
		date: '24.01',
		text: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
	},
	{
		categories: ['Важливо', 'Нова'],
		date: '23.01',
		text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс.',
	},
];


// Функція для створення постів
export const createPost = () => {
	const postList = document.createElement('main');
	postList.className = 'post__list';

	POST_LIST.forEach((postData) => {
		const post = document.createElement('div');
		post.className = 'post button';

		const postHeader = document.createElement('div');
		postHeader.className = 'post__header';

		const categoryList = document.createElement('div');
		categoryList.className = 'post__category-list';

		postData.categories.forEach((category, index) => {
			const categorySpan = document.createElement('span');
			categorySpan.className = `post__category post__category--${index + 1}`;
			categorySpan.textContent = category;
			categoryList.append(categorySpan);
		});

		const dateSpan = document.createElement('span');
		dateSpan.className = 'post__date';
		dateSpan.textContent = postData.date;

		const infoParagraph = document.createElement('p');
		infoParagraph.className = 'post__info';
		infoParagraph.textContent = postData.text;

		postHeader.append(categoryList);
		postHeader.append(dateSpan);

		post.append(postHeader);
		post.append(infoParagraph);

		postList.append(post);
	});

	return postList;
};