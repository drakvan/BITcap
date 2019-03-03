/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import './shared-styles.js';

class ModulesView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
    :host {
        display: block;

        padding: 10px;
    }
    
    .item {
        text-align: center;
    }
    
    li {
        list-style: none;
    }
    
    iron-icon {
        --iron-icon-width: 32px;
        --iron-icon-height: 32px;
        margin-right: 10px;
    }
    
    .modules-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .header {
        background-color: #EC6C2D;
        color: white;
        margin: -16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .header h2 {
        padding: 0;
        margin: 0;
    }

    .body {
        display: flex;
        justify-content: space-between;
        width: 300px;
    }
    
    .footer {
        display: flex;
        width: 300px;
    }
    
    .button {
        background-color: #0f9d58;
        margin-bottom: 5px;
    }
</style>
<h2>Módulos</h2>

<div class="modules-container">
    <template is="dom-repeat" items="[[modules]]" as="module">
        <div class="card">
            <div class="header">
                <h2>[[module.name]]</h2>
            </div>
            <div class="body">
                <div class="info item">
                    <h3>Inversión</h3>
                    <blackquote>
                    <iron-icon icon="icons:credit-card"></iron-icon>
                        $[[module.price]] MXN
                    </blackquote>
                    <h3>Duración</h3>
                    <blackquote>
                    <iron-icon icon="icons:watch-later"></iron-icon>
                        [[module.duration]] horas
                    </blackquote>
                    <h3>Cursos</h3>
                    <ul>
                        <template is="dom-repeat" items="[[module.courses]]" as="course">
                            <li>[[course]]</li>
                        </template>
                    </ul>
                </div>
                <div class="summary item">
                    <h3>Temario</h3>
                    <ul>
                        <template is="dom-repeat" items="[[module.summary]]" as="topic">
                            <li>[[topic]]</li>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="footer">
                <div class="button" on-click="callToAction">Me interesa este módulo</div>
            </div>
        </div>
    </template>
</div>
</div>
    `;
  }
  
  static get properties() {
    return {
      modules: Array
    };
  }
  
  callToAction(event) {
    this.dispatchEvent(new CustomEvent('call-to-action', {
      bubbles: true,
      composed: true,
      detail: event.model.module.name
    }));
  }
}

window.customElements.define('modules-view', ModulesView);
