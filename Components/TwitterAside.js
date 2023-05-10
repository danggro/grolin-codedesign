class TwitterAside extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="cardAside">
    <img src="Public/Twitter.svg" alt="Twitter" />
    <h5>Twitter Account</h5>
    <p>
      Tweet, reply to tweet, manage DMs, and more in a single
      dashboard.
    </p>
  </div>
                   
                `;
  }
}

customElements.define("twitter-card", TwitterAside);
