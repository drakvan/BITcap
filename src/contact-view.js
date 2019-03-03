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
import '@polymer/iron-icon/iron-icon.js';
import './shared-styles.js';

class ContactView extends PolymerElement {
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

    h2 {
        padding: 0;
        margin: 0 0 20px 0;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 18px;
        font-style: oblique;
    }

    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid white;
    }

    .profile {
        display: flex;
        flex-direction: row;
    }

    .content {
        padding: 20px;
    }

    .header {
        width: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #EC6C2D;
        color: white;
    }

    @media only screen and (max-width: 900px) {
        .profile {
            display: flex;
            flex-direction: column;
        }
    }
</style>


    `;
  }
}

window.customElements.define('contact-view', ContactView);
