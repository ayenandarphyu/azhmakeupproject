// Start Header
// For Navbutton
const navbuttons = document.querySelector('.navbuttons');
const ulel = document.querySelector('.navbar-nav');

navbuttons.addEventListener('click',()=>{
	navbuttons.classList.toggle('changes');
	ulel.classList.toggle('color');
});	

// for navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
	const getscrolly = window.scrollY;

	// console.log(getscrolly);

	if(getscrolly >=200){
		navbar.classList.add('navmenus');
	}else{
		navbar.classList.remove('navmenus');
	}

});

// End Header

// Start About Us Section
const autext = document.querySelector('.aboutustexts'),
	auimg = document.querySelector('.aboutusimgcontainers');

window.addEventListener('scroll',()=>{
	const getscrolly = window.scrollY;

	// console.log(getscrolly);

	if(getscrolly >=300){
		autext.classList.add('fromlefts');
		auimg.classList.add('fromrights');
	}else{
		autext.classList.remove('fromlefts');
		auimg.classList.remove('fromrights');
	}

});

// End About Us Section


// Start Service Section
const servicecontainers = document.querySelectorAll('.servicecontainers');

servicecontainers.forEach((servicecontainer)=>{
	// console.log(servicecontainer);

window.addEventListener('scroll',()=>{
	const getscrolly = window.scrollY;

	// console.log(getscrolly);

	if(getscrolly >=750){
		servicecontainer.classList.add('fromtops');
	}else{
		servicecontainer.classList.remove('fromtops');
	}

	});	

});

// End Service Section

// Start Contact Us Section
const contactinfo = document.querySelector('.contactinfocontainers'),
	contactform = document.querySelector('.contactformcontainers');


window.addEventListener('scroll',()=>{
	const getscrolly = window.scrollY;

	// console.log(getscrolly);

	if(getscrolly >=2300){
		contactinfo.classList.add('fromlefts');
		contactform.classList.add('fromrights');
	}else{
		contactinfo.classList.remove('fromlefts');
		contactform.classList.remove('fromrights');
	}

})

// End Contact Us Section


// Start Footer Section
const getyear = document.getElementById('showyear');

getyear.textContent = new Date().getUTCFullYear();

// End Footer Section


	