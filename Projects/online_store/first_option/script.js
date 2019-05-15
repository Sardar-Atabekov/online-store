
window.addEventListener('DOMContentLoaded', function () {


		// Menu 

		function getMenuData(){			
				fetch('http://68.183.214.51/category/') 
			 		.then(response => {
			 		return response.json();
			 		})
			 		.then( responseJSON => {			 		
			 		let data =responseJSON;
			 		console.log(data);
					document.querySelector('.menu__box').innerHTML="";
					data.map(a => {
					document.querySelector('.menu__box').innerHTML+="<li><a class='menu__item' key="+a.id +'">'+a.name + "</a></li>";
					})
			
					// let categoryBtns = document.querySelectorAll(".header .menu__box .menu__item");
					// console.log(categoryBtns);

					// let contentCategory = document.querySelector("main .content-category");
					// categoryBtns.forEach(category => {
					// 	category.addEventListener("click", function () {
					// 		menu__box.classList.toggle("active");	
					// 		contentCategory.classList.toggle("active");
					// 		document.querySelector(".main .content").classList.toggle("active");
					// 		// document.querySelectorAll(".main .content").classList.toggle("none");
					// 	})
					// }) 
			 			})
		}
		getMenuData();

		let menu__btn = document.querySelector(".menu__btn"),
		menu__box = document.querySelector(".header .menu__box"),
		slider = document.querySelector(".slider-banner ");
		menu__btn.addEventListener("click", function () {
			menu__box.classList.toggle("active");	
			slider.classList.toggle("active");		
		});

	
		// Slider 
	
		let slidIndex = 1;
			slides = document.querySelectorAll('.slider-banner .slider-item'),
			dotsWrap = document.querySelector('.slider-banner .slider-dots'),
			dots = document.querySelectorAll('.slider-banner .dot');

		showSlides(slidIndex);
		function showSlides(n) {

			if (n > slides.length) {
				slidIndex = 1;
			}

			if (n < 1) {
				slidIndex = slides.length;
			}
			for (let i = 0; i< slides.length; i++) {
				slides[i].style.display = 'none';
				dots[i].classList.remove('dot-active');
			}
			/* В моем браузере почему-то не поддерживаеться метод forEach
			slides.forEach( item => item.style.display = 'none');
			dots.forEach( item => item.classList.remove('dot-active'));
			*/
			slides[slidIndex - 1].style.display = 'block';
			dots[slidIndex - 1].classList.add('dot-active');
		}

		function plusSlides (n) {
			showSlides(slidIndex += n);
		}

		function currentSlide (n) {
			showSlides(slidIndex = n);
		}


		dotsWrap.addEventListener('click', function (event) {
			for (let i = 0; i < dots.length + 1; i++  ) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1] ) {
				   currentSlide(i);
				}
			}
		});

		let timerId = setTimeout( function log(argument) {
			plusSlides(1);
			setTimeout(log, 10000)
		});
	

	

	

});
