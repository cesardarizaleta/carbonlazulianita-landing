class AppTestimonial extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section id="testimonial" class="testimonial_area pt-120">
      </section>
      `;
    }
}

customElements.define('app-testimonial', AppTestimonial);
