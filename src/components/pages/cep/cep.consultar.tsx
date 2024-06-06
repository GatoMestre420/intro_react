import { useEffect, useState } from "react";
import { Endereco } from "../../../models/Endereco";

//Consultar os produtos da API e exibir na tela
// - Resolver o problema de CORS (API)
// - Como exibir uma array na tela utilizando React

function CepConsultar() {

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [localidade, setlocalidade] = useState("");


  //Executar algum código no carregamento do componente
  useEffect(() => {
    console.log("O componente foi carregado...");
    // carregarCep();
  }, [])
  
    function carregarCep(){
    //FETCH ou AXIOS
    fetch("https://viacep.com.br/ws/" + cep + "/json/")
      .then((resposta) => resposta.json())
      .then((endereco : Endereco) => {
        console.log(endereco);
        setBairro(endereco.bairro);
        setLogradouro(endereco.logradouro);
        setlocalidade(endereco.localidade);
        setUf(endereco.uf);
      });
  };


  return (
    <div>
      <h1>Consultar CEP </h1>
      <input type="text" placeholder="Digite o CEP"
         onBlur={carregarCep}
         onChange={(e : any) => setCep(e.target.value)}
      />
        
      <p>{logradouro}</p> <br />
      <input type="text" value={bairro} disabled></input><br />
      <button>{localidade}</button>
      <h2>{uf}</h2><br />
    </div>
  );
}

export default CepConsultar;
