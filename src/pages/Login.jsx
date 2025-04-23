import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email){
        localStorage.setItem("devlogin", JSON.stringify({ nome, email }));
        navigate("/");
    }
  };

  return (
    <div className="container py-5 w-50">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control"
            type="text"
            name="Nome"
            id="Nome"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="text"
            name="frmEmail"
            id="frmEmail"
          />
        </div>

        <button className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
