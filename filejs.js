var elem = document.querySelectorAll('h2') ; //присваивание переменой и обращение к селектору h2

elem.forEach(function(i){ // перебор селектора h2
	console.log(i);


	i.addEventListener('click', function(e){ // действие мыши на h2


		e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden; // если <p> открыто то при нажатии закрыт и на оборот

	});

	i.addEventListener('keydown', function (event) { // действие клавиши на h2


		if (event.key === "1") { // если нажали на кнопку 1 нажата то происходит

			event.target.nextElementSibling.hidden = !event.target.nextElementSibling.hidden; // если <p> открыто то при нажатии закрыт и на оборот

		}

	});

});
