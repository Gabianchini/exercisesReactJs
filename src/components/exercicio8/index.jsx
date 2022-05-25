import React from "react";
import './jokes.css'

const jokes = [
	{
		jokepart1:'What is the best part about a boolean?',
		jokepart2:"Even if you're wrong, only off a bit."
	},
	{
		joke2part1:'Why do programmers wear glasses?',
		joke2part2:'Because they need to c#'
	}

];
function Exercicio8() {
	return (
		<div className="container-jokes">
		<div className="joke1">
			{
				jokes.map(jokes => (
				<div>
					<p className="part1">{jokes.jokepart1}</p>

					<p className="part2">{jokes.jokepart2}</p>
					
				</div>
				))
			}
		
		</div>

		<div className="joke2">
			{
				jokes.map(jokes => (
				<div>
					<p className="part1">{jokes.joke2part1}</p>
						
					<p className="part2">{jokes.joke2part2}</p>
				</div>
				))
			}
		</div>
		</div>
		
	)	
}

export default Exercicio8
