import './App.css'; // Importa App.css (ya que estás usando React con Vite)

function App() {
  return (
    <>
      <header>
        <img src="/assets/imgs/logo.svg" alt="Logo de Batabit" />
        <div className="header--title-container">
          <h1>La próxima revolución en el intercambio de criptomonedas</h1>
          <p>Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
          <a href="/" className="header--button">
            Conoce Nuestros Planes <span></span>
          </a>
        </div>
      </header>

      <main>
        {/* Sección de Exchange */}
        <section className="main-exchange-container">
          <div className="backgroundImg"></div>
          <div className="main-exchange-container--title">
            <h2>Visibilizamos todas las tasas de cambio.</h2>
            <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
          </div>
        </section>

        {/* Sección de Tabla de Monedas */}
        <section className="main-table-container">
          <div className="main-currency-table">
            <p className="currency-table--title">Monedas:</p>
            <div className="currency-table--container">
              <table>
                <tbody>
                  <tr>
                    <td className="table__top-left">Bitcoin</td>
                    <td className="table__top-right table__right">$1.96<span className="down"></span></td>
                  </tr>
                  <tr>
                    <td className="table__top-left">Ethereum</td>
                    <td className="table__right">$0.07</td>
                  </tr>
                  <tr>
                    <td className="table__top-left">Ripple</td>
                    <td className="table__right">$2.15</td>
                  </tr>
                  <tr>
                    <td className="table__bottom-left">Stellar</td>
                    <td className="table__bottom-right table__right">$4.96</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="currency-table--date">
              <p><b>Actualizado:</b> 19 Julio 23:45</p>
            </div>
          </div>
        </section>

        {/* Sección de Detalles del Producto */}
        <section className="main-product-detail">
          <span className="product-detail--batata-logo"></span>
          <div className="product-detail--title">
            <h2>Creamos un producto sin comparación.</h2>
            <p>Confiable y diseñado para su uso diario.</p>
          </div>

          <section className="products-cards-container">
            <article className="product-detail--card">
              <img src="/assets/icons/clock.svg" alt="clock" />
              <p className="product--card-title">Tiempo real</p>
              <p className="product--card-body">Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            </article>
            <article className="product-detail--card">
              <img src="/assets/icons/eye.svg" alt="eye" />
              <p className="product--card-title">No hay tasas escondidas</p>
              <p className="product--card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
            </article>
            <article className="product-detail--card">
              <img src="/assets/icons/dollar-sign.svg" alt="dollar" />
              <p className="product--card-title">Compare monedas</p>
              <p className="product--card-body">No más rumores, con Batabit sabrás el valor real de cada moneda en el mercado actual.</p>
            </article>
            <article className="product-detail--card">
              <img src="/assets/icons/check-circle.svg" alt="check" />
              <p className="product--card-title">Información confiable</p>
              <p className="product--card-body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
            </article>
          </section>
        </section>

        {/* Sección de Imagen de Bitcoin */}
        <section className="bitcoin-img-container">
          <h2>Conócelo hoy</h2>
        </section>

        {/* Footer */}
        <footer></footer>
      </main>
    </>
  );
}

export default App;
