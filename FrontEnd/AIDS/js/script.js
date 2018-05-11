// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "1- Ácido nucleico componente do vírus HIV e de todos os retrovirus.",
					answer: "rna",
					position: 1,
					orientation: "across",
					startx: 3,
					starty: 1
				},
			 	{
					clue: "2- Síndrome da Imunodeficiência Adquirida - SIDA ou _________.",
					answer: "aids",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "3- Nome da enzima responsável por produzir cadeias de DNA a partir de cadeias de RNA: _________ reversa",
					answer: "transcriptase",
					position: 3,
					orientation: "down",
					startx: 8,
					starty: 3
				},
				{
					clue: "4- Agente causador de doenças como gripe, dengue e AIDS",
					answer: "virus",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "5- Classificação do vírus HIV",
					answer: "retrovirus",
					position: 5,
					orientation: "down",
					startx: 3,
					starty: 4
				},
				{
					clue: "6- Estruturas do linfócito utilizadas para fabricar as proteínas do vírus a partir do RNA-mensageiro.",
					answer: "ribossomos",
					position: 6,
					orientation: "across",
					startx: 8,
					starty: 4
				},
				{
					clue: "7- Os linfócitos são as células que o vírus HIV ataca e são um tipo de leucócitos ou glóbulos _________.",
					answer: "brancos",
					position: 7,
					orientation: "across",
					startx: 2,
					starty: 7
				},
				{
					clue: "8- A enzima RNA-_________ do linfócito transcreve RNA mensageiros para a tradução de proteínas do vírus.",
					answer: "polimerase",
					position: 8,
					orientation: "down",
					startx: 12,
					starty: 7
				},
				{
					clue: "9- Incorporam o DNA gerado a partir do RNA do virus com a atuação da enzima integrase.",
					answer: "cromossomos",
					position: 9,
					orientation: "across",
					startx: 8,
					starty: 8
				},
				{
					clue: "10- Receptores de membrana exclusivos de linfócitos T4 onde os vírus HIV ancoram: CD4 e _________.",
					answer: "ccr5",
					position: 10,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "11- Enzima existente no vírus que corta cadeias polipetídicas e torna o vírus maduro.",
					answer: "protease",
					position: 11,
					orientation: "across",
					startx: 5,
					starty: 12
				},
				{
					clue: "12- O vírus insere no linfócito seu material genético e duas enzimas: transcriptase reversa e _________.",
					answer: "integrase",
					position: 12,
					orientation: "across",
					startx: 5,
					starty: 15
				},

			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
