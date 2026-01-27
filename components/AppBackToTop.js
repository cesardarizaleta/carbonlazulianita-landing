class AppBackToTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
      `;
    }
}

customElements.define('app-back-to-top', AppBackToTop);
