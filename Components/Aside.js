class Aside extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside>
      <div class="boxAside">
        <div>
          <img src="Public/Logo.svg" alt="Logo" />
          <p>accaunt.io</p>
          <h1>Manage multiple accounts in one place</h1>
        </div>
        <div class="middleAside">
          <div class="containerCardAside">
            <twitter-Card></twitter-Card>
            <twitter-Card></twitter-Card>
            <instagram-Card></instagram-Card>
          </div>
          <div class="listCard">
          <span class="half"></span>
            <span class="full"></span>
            <span class="half"></span>
          </div>
        </div>
        <div class="footAside">
          <a href="#">privacy policy</a>
          <span></span>
          <a href="#">terms of service</a>
        </div>
      </div>
    </aside>
                     
                  `;
  }
}

customElements.define("aside-aside", Aside);
