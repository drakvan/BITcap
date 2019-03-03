import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './bootstrap-styles.js';

class LoginView extends PolymerElement {
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
            <h2>Iniciar sesión</h2>
            <input type="text" class="form-control" placeholder="Usuario" id="username">
            <input type="password" class="form-control" placeholder="Contraseña" id="password">
            <button type="button" class="btn btn-success" on-click="login">Entrar</button>
</div>
      </div>
    `;
  }
  
  login() {
    const username = this.$.username.value;
    const password = this.$.password.value;
    
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch(error => {
        const errorMessage = error.message;
        this.dispatchEvent(new CustomEvent('toastr-message', {
          bubbles: true,
          composed: true,
          detail: {
            type: "warning",
            header: 'Login error',
            body: errorMessage
          }
        }));
      });
    
    this.$.username.value = '';
    this.$.password.value = '';
  }
}

window.customElements.define('login-view', LoginView);
