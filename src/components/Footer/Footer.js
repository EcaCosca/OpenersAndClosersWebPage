import React from "react";
import "./footer.css";
import styled from 'styled-components';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>SOBRE NOSOTROS</h4>
            <h1 className="list-unstyled">
              <li>NUESTRA HISTORIA</li>
              <li>MISION, VALORES Y VISION</li>
              <li>MEMORIA CORPORATIVA</li>
              <li>RESPONSABILIDAD SOCIAL CORPORATIVA</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>PRODUCTOS</h4>
            <ui className="list-unstyled">
              <li>CERRADEROS ELECTRONICOS</li>
              <li>CERRADEROS ELECTRICOS</li>
              <li>CERRADURAS ELECTROMAGNETICAS</li>
              <li>CERRADURAS DE SEGURIDAD</li>
              <li>ACCESORIOS</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>SERVICIOS</h4>
            <ui className="list-unstyled">
              <li>CONSULTORIA TECNOLOGICA DE PUERTAS</li>
              <li>SERVICIO DE ATENCION AL CLIENTE</li>
              <li>FORMACION DE PRODUCTO</li>
              <li>CALENDARIO DE EVENTOS</li>
              <li>DESCARGAS</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Openers & Closers | Todos los derechos reservados |
            Politica de Privacidad | Politica de Cookies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const FooterContainer = styled.footer