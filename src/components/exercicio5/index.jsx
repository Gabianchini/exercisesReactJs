import React from "react";
import ReactDOM from 'react-dom'

function Exercicio5() {
   const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
   const  listAnimals = animals.map((animal) => 
   <li>{animal}</li>
   );
   
  


	return (
		<div>
			<ul>{listAnimals}</ul>
			
		</div>
	);
}

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
ReactDOM.render(
	<Exercicio5 animals = {animals} />,
	document.getElementById('root')
);

export default Exercicio5
