import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { carregarLista } from "../../utils/lista";
import Lista from "../List";
import Form from "../Form";


export default function Home({usuario, lista, setLista}) {
  const navigate = useNavigate();

  if (!usuario.id) {
    navigate("/login");
  }

  useEffect(() => {
    function getLista() {
      if(!lista[1]){
           carregarLista(setLista);
      console.log("listarProdutos");
      }
   
    }

    getLista();
  }, []);

  return (
    <>
      <h2>Bem vindo ao meu AT de Mobile-First</h2>
      <Form lista={lista} setLista={setLista} usuario={usuario}/>
      <Lista lista={lista} setLista={setLista}  usuario={usuario}/>
    </>
  );
}
