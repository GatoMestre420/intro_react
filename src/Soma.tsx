import { useState } from "react";
// 1 - Exibir o valor do contador no HTML
// 2 - Somar os dois numeros da caixa de texto e exibir no navegador


function Soma(){

    const [contador, setContador] = useState(0);
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [resultado, setResulatdo] = useState(0);



    function IncrementarContador(){
        setContador(contador + 1);
        
    }



    function EscreverNumero1(e : any){
        setNumero1(e.target.value);
        
    }

    function somar(){
        let soma = (parseInt(numero1) + parseInt(numero2));
        setResulatdo(soma);
    }


    return(
        <div>
            <h1>Soma</h1>
            <label>Numero 1: </label>
            <input type="text" onChange={EscreverNumero1}/><br/>

            <label>Numero 2:</label>
            <input type="text" onChange={
                (e : any) => {setNumero2(e.target.value)}
                }/><br/>

            <br></br>
            <button onClick={IncrementarContador}>Contador</button>
            <button onClick={somar}>Somar</button>
            <p><h1>
                { contador }
                </h1>
            </p>
            <p>
                <h1>
                    { resultado }
                </h1>
            </p>
        </div>    
    );
}

export default Soma;