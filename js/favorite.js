window.addEventListener('DOMContentLoaded' , function(){

	function createFavorite(){

		// Создаем элементы 
		let favorite = document.createElement('div'),
				wrapp = document.createElement('div'),
				favoriteItems = document.createElement('div'),
				favoriteTop = document.createElement('div'),
				heading = document.createElement('h2'),
				closeBtn = document.createElement('button'),
				favoriteField = document.createElement('div');

		favorite.classList.add('favorite');
		wrapp.classList.add('_wrapp');
		favoriteItems.classList.add('favorite__items');
		closeBtn.classList.add('favorite__close');
		favoriteField.classList.add('favorite__field');
		favoriteTop.classList.add('favorite__top')

		heading.textContent = 'Избранное' ;
		closeBtn.textContent = 'Закрыть' ;

		// Добавляем элементы 
		let main = document.querySelector('main');
			main.appendChild(favorite);
			favorite.appendChild(wrapp);
			wrapp.appendChild(favoriteItems);
			favoriteItems.appendChild(favoriteTop);
			favoriteTop.appendChild(heading);
			favoriteTop.appendChild(closeBtn);
			favoriteItems.appendChild(favoriteField);
	};
	createFavorite();

	// Ищем наши элементы
	let favorite = document.querySelector('.favorite'),
			closeBtn = document.querySelector('.favorite__close'),
			favoriteItems = document.querySelector('.favorite__items'),
			favoriteField = document.querySelector('.favorite__field');
	
	function openFavorite(){
		favorite.style.display = 'block';
		favoriteItems.style.display = 'flex';
	};

	function closeFavorite(){
		favorite.style.display = 'none';
	};

	const favoriteOpen = document.querySelector('.favourites');
	favoriteOpen.addEventListener('click' , openFavorite );

	closeBtn.addEventListener('click' , closeFavorite);


	let products = document.querySelectorAll('.product'),
			productsHeart = document.querySelectorAll('.product__heart'),
			productCounter = document.querySelector('.favourites__counter');
			
			productsHeart.forEach(function(productHeart , i){

				productHeart.addEventListener('click' , () =>{

					let item = products[i].cloneNode(true);

					favoriteField.appendChild(item);
					products[i].remove();
				});
			});
});





