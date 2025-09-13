// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle && navList) {
	navToggle.addEventListener('click', () => {
		const isOpen = navList.classList.toggle('show');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});
	
	// Close nav when clicking on links
	navList.addEventListener('click', (e) => {
		if (e.target.tagName === 'A') {
			navList.classList.remove('show');
			navToggle.setAttribute('aria-expanded', 'false');
		}
	});
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = new Date().getFullYear();
}

// Ensure video is always muted and add click to play/pause
document.addEventListener('DOMContentLoaded', () => {
	const video = document.querySelector('.fleet-video');
	if (video) {
		// Force mute
		video.muted = true;
		video.volume = 0;
		
		// Add click to play/pause functionality
		video.addEventListener('click', () => {
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		});
		
		// Ensure it stays muted
		video.addEventListener('loadeddata', () => {
			video.muted = true;
			video.volume = 0;
		});
		video.addEventListener('play', () => {
			video.muted = true;
			video.volume = 0;
		});
	}
});


// Booking form to WhatsApp deep link
const bookingForm = document.getElementById('booking');
if (bookingForm) {
	bookingForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(bookingForm);
		const pickup = formData.get('pickup') || '';
		const drop = formData.get('drop') || '';
		const date = formData.get('date') || '';
		const time = formData.get('time') || '';
		const tripType = formData.get('tripType') || '';
		const carType = formData.get('carType') || '';
		const name = formData.get('name') || '';
		const phone = formData.get('phone') || '';
		const notes = formData.get('notes') || '';

		const lines = [
			'New Booking Enquiry:',
			`Name: ${name}`,
			`Phone: ${phone}`,
			`Trip: ${tripType}`,
			`Car: ${carType}`,
			`Pickup: ${pickup}`,
			`Drop: ${drop}`,
			`Date: ${date} Time: ${time}`,
			notes ? `Notes: ${notes}` : ''
		].filter(Boolean).join('%0A');

		const whatsappNumber = '919998281604'; // WhatsApp for quotes/bookings
		const url = `https://wa.me/${whatsappNumber}?text=${lines}`;
		window.open(url, '_blank');
	});
}


