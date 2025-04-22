import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {
  const [carrinhoItem, setCarrinhoItem] = useState([]);
  const [carrinhoTotal, setCarrinhoTotal] = useState(false);

  const adicionarCarrinho = (item) => {
    setCarrinhoItem((itensAnteriores) => [...itensAnteriores, item]);
    const existing = carrinhoItem.find((i) => i.id === item.id);
    if (existing) {
      setCarrinhoTotal(
        (total) => total + item.preco - (item.preco * item.desconto) / 100
      );
    } else {
      setCarrinhoTotal((total) => total + item.preco);
    }
  };

  return (
    <>
      <Header contadorJogos={2} />
      <Promotion adicionarCarrinho={adicionarCarrinho} />
    </>
  );
}

export default App;
