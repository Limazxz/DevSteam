import React from "react";

const Header = () => {
  return (
    <header className="w-100 navbar navbar-dark bg-dark gap-5 w-50 justify-content-between">
      <div id="logo-pesq" className="d-flex">
        <div id="logo" role="button" className="d-flex">
          <i className="bi bi-controller fs-1 text-light me-2"></i>
          <span className="navbar-brand fw-bold fs-3">DevSteam</span>
        </div>
        <input
          type="text"
          placeholder="Buscar"
          className="bg-secondary-subtle d-none d-md-block border-0 rounded-3 search-input px-4 my-2"
        />
      </div>
    </header>
  );
};

export default Header;
