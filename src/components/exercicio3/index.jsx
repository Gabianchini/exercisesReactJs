import './ex3.css'

function Message2(props){

	function myalert(){
		alert("Você clicou no botão" + (props.className));
	}
	return <button style={{padding:"10px", margin:"20px", textalign:"center"}} className={props.className} onClick={myalert}> Button{props.className} </button>
}



function Exercicio3() {
	return (
	<div className='butaum3'>
	<Message2 className="1"></Message2>
	<Message2 className="2"></Message2>
	<Message2 className="3"></Message2>
	</div>


	)
	
}

export default Exercicio3
