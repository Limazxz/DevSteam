import React from "react";

const Header = () => {
  return (
    <header className="w-100 navbar navbar-dark bg-dark gap-5 w-50 justify-content-between justify-content-around   ">
      <div id="info" className="d-flex w-50 gap-5">
        <div id="logo" role="button" className="d-flex align-items-center">
          <i className="bi bi-controller fs-1 text-light me-2"></i>
          <span className="navbar-brand fw-bold fs-3">DevSteam</span>
        </div>
        <input
          type="text"
          placeholder="Buscar"
          className="w-100  d-none d-md-block border-0 rounded-3 buscar px-4 my-2 ms-5"
        />
      </div>

      <div id="carrinho" role="button">
        <i className="bi bi-cart4 text-light fs-2"></i>
      </div>
    </header>
  );
};

export default Header;
