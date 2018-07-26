import {PolymerElement, html} from '@polymer/polymer';

// Define the element's API using an ES2015 class
class WisvchButton extends PolymerElement {

    // Define optional shadow DOM template
    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
        
        .wisvch-button {
          background-color: var(--wisvch-button-backgroundcolor, #058cce);
          border-radius: var(--wisvch-button-border-radius, 2px);
          padding: var(--wisvch-button-padding, 1em 2em);
          color: var(--wisvch-button-color, #fff);
          font-size: var(--wisvch-button-size, 15px);
        }
      </style>

      <button class="wisvch-button">
        [[buttonText]]
      </button>
    `;
    }

    // Declare properties for the element's public API
    static get properties() {
        return {
            buttonText: {
                type: String,
                value: () => {return 'Click me'},
            },
            handleClick: {
                type: Function,
                value: () => {
                    return (event) => {
                        console.log(event);
                        alert('I have been clicked!');
                    }
                }
            }
        }
    }

    constructor() {
        super();
        this.addEventListener('click', this.handleClick.bind(this));
    }

}

// Register the x-custom element with the browser
customElements.define('wisvch-button', WisvchButton);