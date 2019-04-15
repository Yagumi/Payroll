const mainContent = document.querySelector('.main-content');
const displayTable = document.querySelector('.btn--table-close');
const payroll = document.querySelector('.btn--payroll-display');
const payrollPereod = document.querySelector('.btn--payroll-pereod');

let ratePerHour = 100,
		orderRate = 50;

displayTable.addEventListener('click', function() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/date.json', true);
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;
		if(xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			try {
				var days = JSON.parse(xhr.responseText);
			} catch(e) {
				alert('Bad response' + e.message);
			}
			showTable(days);
		}
	}
	
	xhr.send();
});

function showTable(days){
	let table = document.querySelector('.table');

	if(displayTable.classList.contains('btn--table-close')) {
		displayTable.classList.remove('btn--table-close');
		displayTable.classList.add('btn--table-display');
		displayTable.innerHTML = 'Close the table';
		
		let table = mainContent.appendChild(document.createElement('table'));
		table.classList.add('table');
		let tbody = table.appendChild(document.createElement('tbody'));
		let trCaption = tbody.appendChild(document.createElement('tr'));
		let tdCaptionDate = trCaption.appendChild(document.createElement('td'));
		let tdCaptionHours = trCaption.appendChild(document.createElement('td'));
		let tdCaptionOrders = trCaption.appendChild(document.createElement('td'));
		tdCaptionDate.innerHTML = "Date";
		tdCaptionHours.innerHTML = "Hours";
		tdCaptionOrders.innerHTML = "Orders";
	
		days.forEach(function(day) {
			let tr = tbody.appendChild(document.createElement('tr'));
			let tdDay = tr.appendChild(document.createElement('td'));
			let tdHour = tr.appendChild(document.createElement('td'));
			let tdOrder = tr.appendChild(document.createElement('td'));

			tdDay.innerHTML = day.date;
			tdHour.innerHTML = day.hours;
			tdOrder.innerHTML = day.orders;
		});
	} else if (displayTable.classList.contains('btn--table-display')) {
		displayTable.classList.remove('btn--table-display');
		displayTable.classList.add('btn--table-close');
		displayTable.innerHTML = 'Show me the table';
		table.remove();
	}
}

payroll.addEventListener('click', function() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/date.json', true);
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;
		if(xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			try {
				var days = JSON.parse(xhr.responseText);
			} catch(e) {
				alert('Bad response' + e.message);
			}
			count(days);
		}
	}
	
	xhr.send();
});

function count(days) {
	let totalHours = 0,
			totalOrders = 0,
			sum = 0; 

	days.forEach(function(num) {
		totalHours += num.hours;
		totalOrders += num.orders;
	});

	sum = (totalHours * ratePerHour) + (totalOrders * orderRate);
	
	let displayPayroll = mainContent.appendChild(document.createElement('span'));
	displayPayroll.innerHTML = "salary is " + sum;
	payroll.remove();
	return sum;
};




//NEW code Check payroll for the pereod
payrollPereod.addEventListener('click', function() {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/date.json', true);
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;
		if(xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			try {
				var days = JSON.parse(xhr.responseText);
			} catch(e) {
				alert('Bad response' + e.message);
			}
			coutnForPereod(days);
		}
	}
	
	xhr.send();
});

function coutnForPereod(days) {
	
}
	
(function demo() {
	let d = new Date();
	

	console.log(d.toString());
})();





