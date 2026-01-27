class AppContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section id="contact" class="contact_area pt-120 pb-130">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                      <div class="section_title text-center pb-25">
                          <h3 class="title">Contáctanos</h3>
                          <p>Estamos listos para atenderte. Escríbenos para pedidos al mayor, distribución o cualquier consulta sobre nuestros productos de carbón vegetal.</p>
                      </div> <!-- section title -->
                  </div>
              </div> <!-- row -->
              <div class="contact_form">
                  <form action="assets/contact.php" method="POST" id="contact-form">
                      <div class="row">
                          <div class="col-lg-6">
                              <div class="single_form">
                                  <input type="text" name="name" id="name" placeholder="Nombre">
                              </div> <!-- single form -->
                          </div>
                          <div class="col-lg-6">
                              <div class="single_form">
                                  <input type="text" name="phone" id="phone" placeholder="Teléfono">
                              </div> <!-- single form -->
                          </div>
                          <div class="col-lg-6">
                              <div class="single_form">
                                  <input type="email" name="email" id="email" placeholder="Correo Electrónico">
                              </div> <!-- single form -->
                          </div>
                          <div class="col-lg-6">
                              <div class="single_form">
                                  <select id="country" name="country">
                                      <option value="0" selected disabled>Seleccionar Producto</option>
                                      <option value="1">Carbón Premium 5kg</option>
                                      <option value="2">Carbón Industrial 25kg</option>
                                      <option value="3">Carbón Ecológico</option>
                                      <option value="4">Otro</option>
                                  </select>
                              </div> <!-- single form -->
                          </div>
                          <div class="col-lg-12">
                              <div class="single_form">
                                  <textarea name="message" id="message" placeholder="Mensaje"></textarea>
                              </div> <!-- single form -->
                          </div>
                          <div class="col-lg-12">
                              <div class="single_form">
                                  <button type="submit" class="main-btn">Enviar Mensaje</button>
                              </div> <!-- single form -->
                          </div>
                      </div> <!-- row -->
                      <p class="form-message pt-30"></p>
                  </form>
              </div> <!-- row -->
          </div> <!-- container -->
      </section>
      `;
    }
}

customElements.define('app-contact', AppContact);
