// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "1- Intervalo completo das diversas formas de radiação eletromagnética, caracterizadas por um certo intervalo de comprimentos de onda e energia.",
					answer: "espectroeletromagnetico",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "2- Radiação com frequência mais baixa, o comprimento de onda mais longo e a energia mais baixa.",
					answer: "ondasderadio",
					position: 2,
					orientation: "down",
					startx: 8,
					starty: 1
				},
				{
					clue: "3- Radiação não ionizante, percebida como calor, cuja frequência é imediatamente inferior à frequência da luz visível.",
					answer: "infravermelha",
					position: 3,
					orientation: "down",
					startx: 21,
					starty: 1
				},
				{
					clue: "4- Tipo de radiação não ionizante com frequência localizada entre as ondas de rádio e as ondas infravermelhas.",
					answer: "microondas",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "5- Único tipo de radiação eletromagnética que os nossos olhos podem perceber.",
					answer: "luzvisivel",
					position: 5,
					orientation: "across",
					startx: 3,
					starty: 5
				},
				{
					clue: "6- Radiação ionizante com frequência imediatamente superior à frequência da luz visível.",
					answer: "ultravioleta",
					position: 6,
					orientation: "down",
					startx: 4,
					starty: 5
				},
				{
					clue: "7- Radiação com a frequência mais alta, o comprimento de onda mais curto e a energia mais alta.",
					answer: "raiosgama",
					position: 7,
					orientation: "across",
					startx: 8,
					starty: 8
				},
				{
					clue: "8- Radiação ionizante com frequência situada entre as frequências da radiação ultravioleta e dos raios gama.",
					answer: "raiox",
					position: 8,
					orientation: "across",
					startx: 6,
					starty: 11
				},

			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
