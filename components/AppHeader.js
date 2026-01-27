class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section class="header_area">
          <div class="header_navbar">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <nav class="navbar navbar-expand-lg">
                              <a class="navbar-brand" href="index.html">
                                  <img src="assets/images/logo.jpg" alt="Carbon La Zulianita" style="height:60px;">
                              </a>
                              <button class="navbar-toggler" type="button" data-toggle="collapse"
                                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                  aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="toggler-icon"></span>
                                  <span class="toggler-icon"></span>
                                  <span class="toggler-icon"></span>
                              </button>

                              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                  <ul id="nav" class="navbar-nav ml-auto">
                                      <li class="nav-item active">
                                          <a class="page-scroll" href="#home">Inicio</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#about">Acerca de</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#productos">Productos</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#services">Servicios</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#gallery">Galería</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#blog">Blog</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#contact">Contacto</a>
                                      </li>
                                  </ul>
                              </div> <!-- navbar collapse -->
                          </nav> <!-- navbar -->
                      </div>
                  </div> <!-- row -->
              </div> <!-- container -->
          </div> <!-- header navbar -->

          <div id="home" class="header_slider">
              <div class="single_slider bg_cover d-flex align-items-center"
                  style="background-image: url(assets/images/hero-area.png); position: relative;">
                  <div class="overlay"
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1;">
                  </div>
                  <div class="container" style="position: relative; z-index: 2;">
                      <div class="row">
                          <div class="col-lg-6 col-md-8">
                              <div class="slider_content">
                                  <h2 class="slider_title wow fadeInLeftBig" data-wow-duration="1.3s"
                                      data-wow-delay="0.2s">Bienvenido a <span>Carbon La Zulianita</span></h2>
                                  <p class="wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">El mejor
                                      carbón vegetal de calidad premium, directo de la tierra zuliana. Producción
                                      sostenible y distribución nacional en Venezuela.</p>
                                  <a href="#contact" class="main-btn wow fadeInLeftBig" data-wow-duration="1.3s"
                                      data-wow-delay="0.8s">Contáctanos</a>
                              </div> <!-- slider content -->
                          </div>
                      </div> <!-- row -->
                  </div> <!-- container -->
              </div> <!-- single slider -->
          </div> <!-- header slider -->
      </section>
      `;
    }
}

customElements.define('app-header', AppHeader);
