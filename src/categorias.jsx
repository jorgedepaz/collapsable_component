import "./app.scss";
import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";

class Categorias extends React.Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
    spy3: {}
  };

  render() {
    return (
      <div className="app">
        
 {/* Primer toggle*/}       
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen1
          })}
          onClick={() => this.toggle(1)}
        >
        
        <span className="app__toggle-text">Banca En Línea Y Banca Móvil</span>{/*Primer TOGGLE---------------------------*/}
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen1 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen1 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                
                <ul className={"app__list"}> {/*Texto de los temas segundo toggle */}
                        <li >Compass</li>
                        <li>Pagos de servicios</li>
                        <li>Problemas en Banca en Línea y Banca Móvil</li>
                        <li>Solicitudes y gestiones en línea</li>
                        <li>Transferencias</li>
                        <li>Usuario y contraseña</li>
                </ul>  
                
                {/*<div>{collapseState}</div>Log en texto del colapso */}

                {/* <button onClick={() => this.toggle(2)} className="app__button">
                Cerrar
                </button>*/}
              </div>
            </React.Fragment>
          )}
        />
{/* Segundo toggle*/}
<button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen2
          })}
          onClick={() => this.toggle(2)}
        >
        
        <span className="app__toggle-text">Tarjetas De Crédito</span>{/*Primer TOGGLE---------------------------*/}
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen2 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen2 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen2 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                
                <ul className={"app__list"}> {/*Texto de los temas segundo toggle */}
                        <li>Estado de cuenta</li>
                        <li>Financiamientos</li>
                        <li>Solicitudes y Gestiones</li>
                </ul>  
                
                {/*<div>{collapseState}</div>Log en texto del colapso */}

                {/* <button onClick={() => this.toggle(2)} className="app__button">
                Cerrar
                </button>*/}
              </div>
            </React.Fragment>
          )}
        />
{/* Tercer toggle*/}
<button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen3
          })}
          onClick={() => this.toggle(3)}
        >
        
        <span className="app__toggle-text">Cuentas Bancarias Y Tarjetas De Débito</span>{/*Primer TOGGLE---------------------------*/}
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen3 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen3}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen3 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen3 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                
                <ul className={"app__list"}> {/*Texto de los temas segundo toggle */}
                        <li>Estado de cuenta</li>
                        <li>Solicitudes y Gestiones</li>
                </ul>  
                
                {/*<div>{collapseState}</div>Log en texto del colapso */}

                {/* <button onClick={() => this.toggle(2)} className="app__button">
                Cerrar
                </button>*/}
              </div>
            </React.Fragment>
          )}
        />     
        
{/*Cuarto toggle*/}
<button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen4
          })}
          onClick={() => this.toggle(4)}
        >
        
        <span className="app__toggle-text">Código BAC</span>{/*Primer TOGGLE---------------------------*/}
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen4 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen4}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen4 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen4 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                
                <ul className={"app__list"}> {/*Texto de los temas segundo toggle */}
                        <li>Ver todas</li>
                </ul>  
                
                {/*<div>{collapseState}</div>Log en texto del colapso */}

                {/* <button onClick={() => this.toggle(2)} className="app__button">
                Cerrar
                </button>*/}
              </div>
            </React.Fragment>
          )}
        />     

{/*Quinto toggle*/}
<button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen5
          })}
          onClick={() => this.toggle(5)}
        >
        
        <span className="app__toggle-text">Canales De Atención</span>{/*Primer TOGGLE---------------------------*/}
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen5 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen5}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen5 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen5 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                
                <ul className={"app__list"}> {/*Texto de los temas segundo toggle */}
                        <li>Ver todas</li>
                </ul>  
                
                {/*<div>{collapseState}</div>Log en texto del colapso */}

                {/* <button onClick={() => this.toggle(2)} className="app__button">
                Cerrar
                </button>*/}
              </div>
            </React.Fragment>
          )}
        />   
{/*Sexto toggle*/}
<button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen6
          })}
          onClick={() => this.toggle(6)}
        >
        
        <span className="app__toggle-text">Préstamos</span>{/*Primer TOGGLE---------------------------*/}
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen6 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen6}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen6 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen6 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                
                <ul className={"app__list"}> {/*Texto de los temas segundo toggle */}
                        <li>Ver todas</li>
                </ul>  
                
                {/*<div>{collapseState}</div>Log en texto del colapso */}

                {/* <button onClick={() => this.toggle(2)} className="app__button">
                Cerrar
                </button>*/}
              </div>
            </React.Fragment>
          )}
        />  
{/*Séptimo toggle*/}
<button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen7
          })}
          onClick={() => this.toggle(7)}
        >
        
        <span className="app__toggle-text">Seguros Y Coberturas</span>{/*Primer TOGGLE---------------------------*/}
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen7 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>

        <Collapse
          isOpen={this.state.isOpen7}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen7 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen7 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                
                <ul className={"app__list"}> {/*Texto de los temas segundo toggle */}
                        <li>Solicitudes y Gestiones</li>
                        <li>Tipos de Seguro</li>
                </ul>  
                
                {/*<div>{collapseState}</div>Log en texto del colapso */}

                {/* <button onClick={() => this.toggle(2)} className="app__button">
                Cerrar
                </button>*/}
              </div>
            </React.Fragment>
          )}
        />  
 {/*------------------------------------------------------------------------------------------------------*/}               
        <p className="app__text">Algún texto necesario</p>
      </div>
    );
  }

  toggle = index => {
    let collapse = "isOpen" + index;

    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };
}

export default Categorias;
