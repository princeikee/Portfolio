class Navbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                nav {
                    position: fixed;
                    width: 100%;
                    z-index: 50;
                    background-color: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid #1e293b;
                }
                .nav-content {
                    max-width: 80rem;
                    margin: 0 auto;
                    padding: 1rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    text-decoration: none;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .desktop-links {
                    display: none;
                    space-x: 2rem;
                }
                .desktop-links a {
                    color: #f8fafc;
                    text-decoration: none;
                    margin-left: 2rem;
                    transition: color 0.3s;
                }
                .desktop-links a:hover {
                    color: #6366f1;
                }
                @media(min-width: 768px) {
                    .desktop-links {
                        display: block;
                    }
                    .mobile-menu-btn {
                        display: none;
                    }
                }
                .mobile-menu {
                    display: none;
                    background-color: rgba(15, 23, 42, 0.95);
                    backdrop-filter: blur(16px);
                    border-top: 1px solid #1e293b;
                    padding: 1.5rem;
                }
                .mobile-menu.open {
                    display: block;
                }
                .mobile-menu a {
                    display: block;
                    color: #f8fafc;
                    text-decoration: none;
                    padding: 0.75rem 0;
                    transition: color 0.3s;
                }
                .mobile-menu a:hover {
                    color: #6366f1;
                }
                .mobile-menu-btn {
                    background: none;
                    border: none;
                    color: #f8fafc;
                    cursor: pointer;
                }
            </style>
            <nav>
                <div class="nav-content">
                    <a href="#home" class="logo">Prince</a>
                    <div class="desktop-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <button class="mobile-menu-btn" id="menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                </div>
                <div class="mobile-menu" id="mobile-menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        `;

        // Mobile Menu Logic
        const menuBtn = this.shadowRoot.getElementById('menu-btn');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        const links = this.shadowRoot.querySelectorAll('a');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }
}

customElements.define('custom-navbar', Navbar);