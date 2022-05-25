import React, {useState} from 'react';
//importa useState
import './style4.css'

function Exercicio4() {
//cria var count e estado setcount o estado vai ser igual a 0, definido nos parenteses
	const [count,setCount] = useState(0);

	return (
		<div className='centraliza'>
			<p className='numeroclick'>Você clicou {count} vezes</p>
			<button onClick={()=> setCount(count+1)}> 
			Clique aqui
			</button>
		</div>
	);
}

export default Exercicio4
