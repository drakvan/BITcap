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

class CoursesView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
    :host {
        display: block;

        padding: 10px;
    }
    
    li {
        list-style: none;
    }
    
    iron-icon {
        --iron-icon-width: 32px;
        --iron-icon-height: 32px;
    }
    
    .header h2 {
        padding: 0;
        margin: 0;
    }
    
    .row {
        display: flex;
        justify-content: space-between;
    }
    
    .item {
        text-align: center;
    }
</style>

<h2>Cursos</h2>

<template is="dom-repeat" items="[[courses]]" as="courseIterable">
    <div class="card">
         <h2>[[courseIterable.name]]</h2>
        <h3>Objetivo</h3>
        <blackquote>
            <iron-icon icon="icons:assignment"></iron-icon>
            [[courseIterable.goal]]
        </blackquote>
        <div class="row">
            <div class="item">
            <h3>Inversión</h3>
            <blackquote>
                <iron-icon icon="icons:credit-card"></iron-icon>
                 [[courseIterable.price]] MXN
            </blackquote>
            </div>
          <div class="item">
          <h3>Duración total</h3>
                  <blackquote>
                      <iron-icon icon="icons:watch-later"></iron-icon>
                      Curso: [[courseIterable.duration]] horas
                  </blackquote>
                  <blackquote>
                      <iron-icon icon="icons:important-devices"></iron-icon>
                      Mentoría: [[courseIterable.mentoring]] horas
                  </blackquote>
          </div>
          <div class="item">
          <h3>Stack tecnológico</h3>
                  <ul>
                      <template is="dom-repeat" items="[[courseIterable.stack]]" as="label">
                          <span>
                          <iron-icon src="images/[[label.icon]]"></iron-icon>
          </span>
                      </template>
                  </ul>
          </div>
        </div>
        <div class="button" on-click="callToAction">Me interesa este curso</div>
    </div>
</template>
    `;
  }
  
  static get properties() {
    return {
      courses: Array
    };
  }
  
  callToAction(event) {
    this.dispatchEvent(new CustomEvent('call-to-action', {
      bubbles: true,
      composed: true,
      detail: event.model.courseIterable.name
    }));
  }
}

window.customElements.define('courses-view', CoursesView);
