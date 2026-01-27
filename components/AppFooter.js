class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section id="footer" class="footer_area">
          <div class="footer_widget pt-80 pb-130">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-4 col-md-6 order-md-1 order-lg-1">
                          <div class="footer_about mt-50">
                              <a href="#"><img src="assets/images/logo.jpg" alt="Carbon La Zulianita"
                                      style="height:60px;"></a>
                              <p>Carbon La Zulianita, líder en producción de carbón vegetal premium en Venezuela. Calidad,
                                  sostenibilidad y servicio excepcional.</p>
                              <ul class="social">
                                  <li><a class="social_1" href="https://www.facebook.com/carbonlazulianita" target="_blank"><i
                                              class="lni lni-facebook-original"></i></a></li>
                                  <li><a class="social_3" href="https://www.instagram.com/carbonlazulianita" target="_blank"><i
                                              class="lni lni-instagram-original"></i></a></li>
                              </ul>
                          </div> <!-- footer about -->
                      </div>
                      <div class="col-lg-4 col-md-12 order-md-3 order-lg-2">
                          <div class="footer_link_wrapper d-flex flex-wrap">
                              <div class="footer_link mt-45">
                                  <h4 class="footer_title">Enlaces Rápidos</h4>
                                  <ul class="link">
                                      <li><a href="#home">Inicio</a></li>
                                      <li><a href="#about">Acerca de</a></li>
                                      <li><a href="#productos">Productos</a></li>
                                      <li><a href="#services">Servicios</a></li>
                                      <li><a href="#gallery">Galería</a></li>
                                  </ul>
                              </div> <!-- footer link -->
                              <div class="footer_link mt-45">
                                  <h4 class="footer_title">Soporte</h4>
                                  <ul class="link">
                                      <li><a href="#contact">Soporte al Cliente</a></li>
                                      <li><a href="#">Política de Privacidad</a></li>
                                      <li><a href="#">Términos y Condiciones</a></li>
                                      <li><a href="#blog">Blog</a></li>
                                      <li><a href="#contact">Contacto</a></li>
                                  </ul>
                              </div> <!-- footer link -->
                          </div> <!-- footer link wrapper -->
                      </div>
                      <div class="col-lg-4 col-md-6 order-md-2 order-lg-3">
                          <div class="footer_subscribe mt-45">
                              <h4 class="footer_title">Suscríbete al Boletín</h4>
                              <p>Recibe noticias, ofertas especiales y novedades sobre la producción de carbón en el Zulia.</p>
                              <div class="subscribe_form">
                                  <form action="#">
                                      <input type="text" placeholder="Ingresa tu correo">
                                      <button><i class="lni lni-arrow-right"></i></button>
                                  </form>
                              </div>
                          </div> <!-- footer subscribe -->
                      </div>
                  </div> <!-- row -->
              </div> <!-- container -->
              <p class="text-center mt-90">Carbon La Zulianita &copy; 2026. Todos los derechos reservados.</p>
          </div> <!-- footer widget -->
      </section>
      `;
    }
}

customElements.define('app-footer', AppFooter);
