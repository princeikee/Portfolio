class Footer extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                footer {
                    background-color: #0f172a;
                    padding: 2rem 0;
                    border-top: 1px solid #1e293b;
                }
                .container {
                    max-width: 80rem;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    text-align: center;
                }
                p {
                    color: #94a3b8;
                    font-size: 0.875rem;
                }
            </style>
            <footer>
                <div class="container">
                    <p>© 2024 Prince. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);