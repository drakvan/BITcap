import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './bootstrap-styles.js';

class FormView extends PolymerElement {
  static get template() {
    return html`
        <style include="bootstrap-styles"></style>
        <style>
        .content {
            width: 550px;
            display: flex;
            flex-direction: column;
            padding: 20px;
            justify-content: center;
            margin: 0 auto;
        }
        input {
            margin-bottom: 5px;
        }
        button {
            margin-top: 15px;
        }
</style>
      <div class="content">
            <h2>Te mostraremos la información más relevante en las redes sociales:</h2>
            
</div>
      </div>
    `;
  }
  
  static get properties() {
    return {
      courseField: String
    };
  }
  
  register() {
    const newClient = {};
    newClient.name = this.$.name.value;
    newClient.modules = this.$.modules.value;
    newClient.phone = this.$.phone.value;
    newClient.email = this.$.email.value;
    
    // Create a new user reference with an auto-generated id
    const newClientRef = clients.push();
    newClientRef.set(newClient);
    
    this.$.name.value = '';
    this.$.modules.value = '';
    this.$.phone.value = '';
    this.$.email.value = '';
    
    this.dispatchEvent(new CustomEvent('info-requested', {
      bubbles: true,
      composed: true
    }));
  }
}

window.customElements.define('form-view', FormView);
