class InstagramAside extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="cardAside">
    <img src="Public/Instagram.svg" alt="Instagram" />
    <h5>Instagram Account</h5>
    <p>
    Post a story, manage DMs, and more in a single dashboard.
    </p>
  </div>
                   
                `;
  }
}

customElements.define("instagram-card", InstagramAside);
