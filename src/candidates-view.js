import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './bootstrap-styles.js';

class CandidatesView extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles"></style>
        <style include="bootstrap-styles"></style>
      <div class="card">
      <h2>Lista de candidatos</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Correo</th>
      <th scope="col">Interesado en...</th>
      <th scope="col">Estatus</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
  <template is="dom-repeat" items="[[candidates]]" as="candidate">
      <tr>
      <td>[[candidate.name]]</td>
      <td>[[candidate.phone]]</td>
      <td>[[candidate.email]]</td>
      <td>[[candidate.modules]]</td>
      <td>[[candidate.status]]</td>
      <td>
            <button type="button" class="btn btn-danger" on-click="delete">Borrar</button>
      </td>
    </tr>
</template>
  </tbody>
</table>

</div>
      </div>
    `;
  }
  
  static get properties() {
    return {
      candidates: Array
    };
  }
  
  connectedCallback() {
    super.connectedCallback();
    clients.on('value', snapshot => {
      const candidatesList = [];
      const candidates = snapshot.val();
      for (const key in candidates) {
        const candidate = candidates[ key ];
        candidate.uid = key;
        candidatesList.push(candidate);
      }
      pushNotification('Nuevo registro', 'Hay una nueva persona interesada en cursos.');
      this.set('candidates', candidatesList);
    });
  }
  
  delete(event) {
    const candidate = event.model.candidate;
    database.ref('clients/' + candidate.uid).set(null);
    this.dispatchEvent(new CustomEvent('toastr-message', {
      bubbles: true,
      composed: true,
      detail: {
        type: "info",
        header: 'Eliminar cliente',
        body: 'El usuario se ha dado de baja'
      }
    }));
  }
}

window.customElements.define('candidates-view', CandidatesView);
