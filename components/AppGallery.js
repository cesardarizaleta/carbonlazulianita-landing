class AppGallery extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section id="gallery" class="gallery_area pt-120 pb-130">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                      <div class="section_title text-center pb-25">
                          <h3 class="title">Galería de Productos</h3>
                          <p>Descubre la calidad y variedad de nuestro carbón vegetal, producido con dedicación en
                              Venezuela.</p>
                      </div> <!-- section title -->
                  </div>
              </div> <!-- row -->
              <div class="row">
                  <div class="col-lg-4 col-sm-6">
                      <div class="single_gallery mt-30">
                          <div class="gallery_image">
                              <img src="assets/images/blog-1.jpg" alt="Galería de Carbón">
                          </div>
                      </div> <!-- single gallery -->
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="single_gallery mt-30">
                          <div class="gallery_image">
                              <img src="assets/images/blog-2.jpg" alt="Galería de Carbón">
                          </div>
                      </div> <!-- single gallery -->
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="single_gallery mt-30">
                          <div class="gallery_image">
                              <img src="assets/images/blog-3.jpg" alt="Galería de Carbón">
                          </div>
                      </div> <!-- single gallery -->
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="single_gallery mt-30">
                          <div class="gallery_image">
                              <img src="assets/images/about_image.jpg" alt="Galería de Carbón">
                          </div>
                      </div> <!-- single gallery -->
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="single_gallery mt-30">
                          <div class="gallery_image">
                              <img src="assets/images/blog-1.jpg" alt="Galería de Carbón">
                          </div>
                      </div> <!-- single gallery -->
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="single_gallery mt-30">
                          <div class="gallery_image">
                              <img src="assets/images/blog-2.jpg" alt="Galería de Carbón">
                          </div>
                      </div> <!-- single gallery -->
                  </div>
              </div> <!-- row -->
          </div> <!-- container -->
      </section>
      `;
    }
}

customElements.define('app-gallery', AppGallery);
