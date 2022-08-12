window.addEventListener('DOMContentLoaded' , () => {
	const modalTel = document.querySelector('.modal-tel'); 
	const modalTelArrow = modalTel.querySelector('.arrow');
	const subMenuModalTel = modalTel.querySelector('.sub-menu');
	modalTel.addEventListener('click' , e => {
		if (e.target == modalTel.querySelector('h2') || e.target == modalTelArrow)
		{
			modalTelArrow.classList.toggle('active');
			subMenuModalTel.classList.toggle('active');
		}
	});
	const subMenuModalTelLi = subMenuModalTel.querySelectorAll('.sub-menu__content');
	
	for (let i = 0 ; i < subMenuModalTelLi.length ; i++){
		subMenuModalTelLi[i].addEventListener('click' , () => {
			subMenuModalTelLi[i].classList.toggle('active');
			if (subMenuModalTelLi[i].nextElementSibling){
				subMenuModalTelLi[i].nextElementSibling.classList.toggle('active');
			}
		});
	};
	
	
	const burger = document.querySelector('.burger'); 
	const headerMain = document.querySelector('.header__main');
	burger.addEventListener('click' , () => {
		burger.classList.toggle('active');
		headerMain.classList.toggle('active');
	});
	
	
	//	var swiper = new Swiper(".swiper", {
	//		slidesPerView: 3,
	//		spaceBetween: 50,
	//		slidesPerGroup: 3,
	//		loop: true,
	//		loopFillGroupWithBlank: true,
	//	});
		if (window.screen.width > 1200){
			var swiper = new Swiper(".swiper", {
				slidesPerView: 3,
				spaceBetween: 50,
				slidesPerGroup: 3,
				loop: true,
				loopFillGroupWithBlank: true,
			});
		}else if (window.screen.width <= 1200){
			var swiper = new Swiper(".swiper", {
				slidesPerView: 2,
				spaceBetween: 50,
				slidesPerGroup: 2,
				loop: true,
				loopFillGroupWithBlank: true,
			});
		}else if (window.screen.width <= 576){
			var swiper = new Swiper(".swiper", {
				slidesPerView: 1,
				spaceBetween: 50,
				slidesPerGroup: 1,
				loop: true,
				loopFillGroupWithBlank: true,
			});
		}
})