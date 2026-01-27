class AppProducts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section id="productos" class="destination_area pt-130 pb-130">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                      <div class="section_title text-center pb-25">
                          <h3 class="title">Nuestros Productos</h3>
                          <p>Carbón vegetal premium, seleccionado y empacado en Carabobo, Venezuela. Somos su mejor opción en el centro del país, distribuyendo principalmente en todo el estado Carabobo.</p>
                      </div> <!-- section title -->
                  </div>
              </div> <!-- row -->
              <div class="row">
                  <div class="col-lg-4 col-md-6">
                      <div class="single_destination mt-30">
                          <div class="destination_image">
                              <img src="assets/images/blog-1.jpg" alt="Carbón Premium">
                          </div>
                          <div class="destination_content">
                              <h4 class="title">Carbón Premium Bolsa 5kg</h4>
                              <p>Carbón vegetal de alta calidad, perfecto para parrillas y asados familiares.</p>
                              <a href="#contact" class="more">Cotizar</a>
                          </div>
                      </div> <!-- single destination -->
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="single_destination mt-30">
                          <div class="destination_image">
                              <img src="assets/images/blog-2.jpg" alt="Carbón Industrial">
                          </div>
                          <div class="destination_content">
                              <h4 class="title">Carbón Industrial Saco 25kg</h4>
                              <p>Ideal para uso en industrias y comercios. Alto poder calorífico y duración prolongada.
                              </p>
                              <a href="#contact" class="more">Cotizar</a>
                          </div>
                      </div> <!-- single destination -->
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="single_destination mt-30">
                          <div class="destination_image">
                              <img src="assets/images/blog-3.jpg" alt="Carbón Ecológico">
                          </div>
                          <div class="destination_content">
                              <h4 class="title">Carbón Ecológico</h4>
                              <p>Producido de manera sostenible, respetando el medio ambiente zuliano.</p>
                              <a href="#contact" class="more">Cotizar</a>
                          </div>
                      </div> <!-- single destination -->
                  </div>
              </div> <!-- row -->
          </div> <!-- container -->
      </section>
      `;
    }
}

customElements.define('app-products', AppProducts);
