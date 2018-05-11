// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "1- Cientista britânico que identificou o espectro visível de cores que forma a luz branca.",
					answer: "isaacnewton",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "2- Instrumento utilizado por Newton para decompor a luz branca.",
					answer: "prisma",
					position: 2,
					orientation: "down",
					startx: 7,
					starty: 1
				},
				{
					clue: "3- Células da retina do olho humano especializadas na percepção das cores.",
					answer: "cones",
					position: 3,
					orientation: "down",
					startx: 12,
					starty: 1
				},
				{
					clue: "4- Células da retina dos vertebrados especializadas na percepção de luminosidade.",
					answer: "bastonetes",
					position: 4,
					orientation: "down",
					startx: 10,
					starty: 2
				},
				{
					clue: "5- Luz branca passa através de gotículas de água em suspensão na atmosfera e é decomposta nos vários comprimentos de onda (cada um deles correspondendo a uma cor).",
					answer: "arcoiris",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "6- Características que distinguem as cores que formam a luz branca.",
					answer: "comprimentosdeonda",
					position: 6,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "7- Uma das cores identificadas pelos cones cujo comprimento de onda é de cerca de 720 nm.",
					answer: "vermelha",
					position: 7,
					orientation: "across",
					startx: 6,
					starty: 8
				},
				{
					clue: "8- Espectro formado por ondas eletromagnéticas de comprimentos de onda variando entre 380 nm e 720 nm.",
					answer: "visivel",
					position: 8,
					orientation: "across",
					startx: 5,
					starty: 10
				},

			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
