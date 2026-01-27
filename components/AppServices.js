class AppServices extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section id="services" class="services_area pt-120">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                      <div class="section_title text-center pb-25">
                          <h3 class="title">Servicios que Ofrecemos</h3>
                          <p>Desde la producción hasta la entrega, garantizamos calidad y eficiencia en todos nuestros
                              servicios relacionados con el carbón vegetal en Venezuela.</p>
                      </div> <!-- section title -->
                  </div>
              </div> <!-- row -->
              <div class="row">
                  <div class="col-lg-3 col-sm-6">
                      <div class="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s"
                          data-wow-delay="0.2s">
                          <div class="services_icon">
                              <i class="lni lni-delivery"></i>
                          </div>
                          <div class="services_content">
                              <h4 class="title">Distribución Nacional</h4>
                              <p>Entregamos nuestros productos a todo el territorio venezolano con puntualidad y
                                  seguridad.</p>
                          </div>
                      </div> <!-- single service -->
                  </div>
                  <div class="col-lg-3 col-sm-6">
                      <div class="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s"
                          data-wow-delay="0.4s">
                          <div class="services_icon">
                              <i class="lni lni-checkmark-circle"></i>
                          </div>
                          <div class="services_content">
                              <h4 class="title">Control de Calidad</h4>
                              <p>Garantizamos que cada lote cumple con los estándares más altos de pureza y rendimiento.
                              </p>
                          </div>
                      </div> <!-- single service -->
                  </div>
                  <div class="col-lg-3 col-sm-6">
                      <div class="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s"
                          data-wow-delay="0.6s">
                          <div class="services_icon">
                              <i class="lni lni-leaf"></i>
                          </div>
                          <div class="services_content">
                              <h4 class="title">Producción Sostenible</h4>
                              <p>Utilizamos métodos ecológicos para preservar los recursos naturales de la región zuliana.
                              </p>
                          </div>
                      </div> <!-- single service -->
                  </div>
                  <div class="col-lg-3 col-sm-6">
                      <div class="single_service mt-30 text-center wow fadeInUpBig" data-wow-duration="1.3s"
                          data-wow-delay="0.8s">
                          <div class="services_icon">
                              <i class="lni lni-consulting"></i>
                          </div>
                          <div class="services_content">
                              <h4 class="title">Asesoría Técnica</h4>
                              <p>Brindamos consultoría para el uso óptimo de nuestros productos en diferentes
                                  aplicaciones.</p>
                          </div>
                      </div> <!-- single service -->
                  </div>
              </div> <!-- row -->
          </div> <!-- container -->
      </section>
      `;
    }
}

customElements.define('app-services', AppServices);
