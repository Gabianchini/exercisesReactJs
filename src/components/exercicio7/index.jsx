import React from "react"
import './form.css'


 
function Exercicio7() {

	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState(''); 

	const onSubmit = (e) => {
		e.preventDefault();
		alert('Hello' + (firstName)+ ' ' +(lastName));
	}

	


	return (
	<div className="form">
	<form onSubmit={onSubmit}>

	
	<input className="name" type="text"  name="firstName" placeholder="First Name"
	value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
	

	
	<input  className="lastname"type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
	

	<button className="form-fullname" type="submit">Greet me</button>


	</form>
	
	</div>
	)
}

export default Exercicio7
