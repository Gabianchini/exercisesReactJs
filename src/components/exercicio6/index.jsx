import React from "react";
import './listaemoji.css';

const emojis = [
	{
		emoji:'🐶',
		name: 'dog'
	},
	{
		emoji:'😺',
		name:'cat'
	},
	{
		emoji:'🐔',
		name:'chicken'
	},
	{
		emoji:'🐮',
		name:'cow'
	},
	{
		emoji:'🐑',
		name:'sheep'
	},
	{
		emoji:'🐴',
		name:'horse'
	}

];
function Exercicio6() {
	
	return (
		<div className="list-emoji">
			<ul className="listaemoji">
				{
					emojis.map(emoji => (
						<li className="itememoji">
							{emoji.emoji}
							{emoji.name}
						</li>
					))
				}

			</ul>

			
		</div>
	)
   
}


		

export default Exercicio6
