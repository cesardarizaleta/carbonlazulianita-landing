class AppAbout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section id="about" class="about_area pt-130 pb-130">
          <div class="about_wrapper">
              <div class="about_image bg_cover" style="background-image: url(assets/images/about_image.jpg)"></div>
              <!-- about image -->
              <div class="container">
                  <div class="row justify-content-end">
                      <div class="col-lg-6">
                          <div class="about_content">
                              <div class="section_title">
                                  <h3 class="title">Sobre Nosotros <br> Carbon La Zulianita en <span>Números</span></h3>
                                  <p>Carbon La Zulianita es una empresa líder en la producción y distribución de carbón
                                      vegetal de alta calidad en Venezuela. Nos dedicamos a ofrecer productos sostenibles,
                                      elaborados con técnicas tradicionales y modernas, garantizando pureza y eficiencia
                                      energética. Nuestro compromiso es con la calidad, el medio ambiente y el desarrollo
                                      de la región zuliana.</p>
                              </div> <!-- section title -->
                              <a href="#contact" class="main-btn">Saber Más</a>
                          </div> <!-- about content -->
                          <div class="about_counter d-flex flex-wrap">
                              <div class="single_counter counter_1 d-flex justify-content-center align-items-center wow fadeInUpBig"
                                  data-wow-duration="1.3s" data-wow-delay="0.2s">
                                  <div class="counter_wrapper">
                                      <span class="counter">1500</span>
                                      <p>Toneladas Producidas</p>
                                  </div> <!-- single wrapper -->
                              </div> <!-- single counter -->

                              <div class="single_counter counter_2 d-flex justify-content-center align-items-center wow fadeInUpBig"
                                  data-wow-duration="1.3s" data-wow-delay="0.5s">
                                  <div class="counter_wrapper">
                                      <span class="counter">200</span>
                                      <p>Clientes Empresariales</p>
                                  </div> <!-- single wrapper -->
                              </div> <!-- single counter -->

                              <div class="single_counter counter_2 d-flex justify-content-center align-items-center wow fadeInUpBig"
                                  data-wow-duration="1.3s" data-wow-delay="0.8s">
                                  <div class="counter_wrapper">
                                      <span class="counter">10</span>
                                      <p>Años de Experiencia</p>
                                  </div> <!-- single wrapper -->
                              </div> <!-- single counter -->

                              <div class="single_counter counter_1 d-flex justify-content-center align-items-center wow fadeInUpBig"
                                  data-wow-duration="1.3s" data-wow-delay="1.1s">
                                  <div class="counter_wrapper">
                                      <span class="counter">50</span>
                                      <p>Empleados</p>
                                  </div> <!-- single wrapper -->
                              </div> <!-- single counter -->
                          </div> <!-- about_counter -->
                      </div>
                  </div> <!-- row -->
              </div> <!-- container -->
          </div> <!-- about wrapper -->
      </section>
      `;
    }
}

customElements.define('app-about', AppAbout);
