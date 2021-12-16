 const nombre='sebastian';
 const p=document.querySelector('#texto');
 switch(nombre){
 	case "jorge":
 	console.log("JORGE");
 	p.innerHTML="JORGE";
 	break;
 	
 	case "sebastian": 	
 	console.log("SEBASTIAN");
 	p.innerHTML="SEBASTIAN";
 	break;
 	
 	case "maria": 	
 	console.log("MARIA");
 	p.innerHTML="MARIA";
 	break;
 	
 	default:
 	console.log("no hay coincidencia");
 	break
 }