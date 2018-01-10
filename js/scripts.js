alert('Witaj w programie rysującym choinkę');

function drawTree(h){
	
	for( var i=0; i < h; i++){
		var star = "";
	
		for(var j=0; j<=i ;j++){
			star += "*";
		
		}
		console.log(star);
		document.getElementById("tree").innerHTML += "<br>" + star;
	}

}
	

do{
	var h = prompt('Podaj wysokość choinki:'),		
		drawedTree = drawTree(h),
		zapytanie = prompt("Czy chcesz narysować kolejną choinkę? Wpisz tak lub nie.");
		
		console.log(zapytanie);

}while(zapytanie.toLowerCase() == "tak"); //rób dopuki to warunek jest prawdziwy jeśli nie przerwij pentlę