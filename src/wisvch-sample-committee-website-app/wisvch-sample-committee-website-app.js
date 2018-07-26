import {html, PolymerElement} from '@polymer/polymer';
import '../elements/wisvch-button/wisvch-button.js';

/**
 * @customElement
 * @polymer
 */
class WisvchSampleCommitteeWebsiteApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      
      <div>
        <wisvch-button handleClick=[[this.handleClick]]></wisvch-button>
      </div>
    `;
  }

  static get properties() {
    return {};
  }
}

window.customElements.define('wisvch-sample-committee-website-app', WisvchSampleCommitteeWebsiteApp);
