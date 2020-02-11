import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map?module';

class RandomColorButton extends LitElement {

  static get properties() {
    return {
      color: { type: String }
    };
  }

  static get styles() {
    return css`
      button {
        width: 6rem;
        height: 2rem;
        position: absolute;
      }
    `;
  }

  constructor() {
    super();
    this.color = this.randomColor();
  }

  connectedCallback() {
    super.connectedCallback();

    const rect = this.parentNode.getBoundingClientRect();
    this.left = Math.random() * rect.width;
    this.top = Math.random() * rect.height;
  }

  render() {
    return html`
      <button style=${styleMap({ 
        backgroundColor: this.color,
        left: `${this.left}px`,
        top: `${this.top}px`,
      })}>${this.color}</button>
    `;
  }

  randomColor = () => `#${Math.random().toString(16).slice(-6)}`;
}

customElements.define('random-color-button', RandomColorButton);