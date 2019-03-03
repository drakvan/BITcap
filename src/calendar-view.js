import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import './shared-styles.js';

class CalendarView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
    :host {
        display: block;
        padding: 10px;
    }
    
    h1, h2, h3 {
        margin: 0;
        padding: 0;
    }

    .calendar {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .module {
        width: 250px;
        text-align: center;
        border: 2px solid #EC6C2D;
        margin: 5px;
    }

    .header {
        padding-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        background-color: #EC6C2D;
        height: 80px;
        color: white;
        vertical-align: middle;
    }
    
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
  justify-content: center;
  padding: 5px;
    }
    
    .row {
      margin-top: 15px;
    }
</style>
<div class="card">
    <div class="calendar">
        <template is="dom-repeat" items="[[calendar]]" as="element">
              <div class="module">
                  <div class="header">
                      <h3>[[element.title]]</h3>
                  </div>
                  <div class="info">
                    <div class="row">
                      <iron-icon icon="icons:event"></iron-icon>
                      [[element.date]]
                    </div>
                    <div class="row">
                      <iron-icon icon="icons:home"></iron-icon>
                      Cupo: [[element.number]] personas
                    </div>
                    <div class="row">
                      <iron-icon icon="icons:watch-later"></iron-icon>
                      [[element.begin]] - [[element.end]]
                    </div>
                    <div class="row">
                      <template is="dom-repeat" items="[[element.courses]]" as="course">
                        [[course]]
</template>
                    </div>
                  </div>
              </div>
      </template>
    </div>
</div>

<div class="card">
    <h2>Sede Postal</h2>
    <blackquote>
        Reembolsos 48 BIS. Col Postal, CP. 03410, Ciudad de México, México. Planta Baja
    </blackquote>
    <div class="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.506482127646!2d-99.14304424995494!3d19.390510546986537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fefeb9cae4df%3A0xb807ff7a9d512ede!2sReembolsos+48BIS%2C+Postal%2C+03410+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses!2smx!4v1531864925610"
                width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
</div>
    `;
  }
  
  static get properties() {
    return {
      calendar: Array
    };
  }
}

window.customElements.define('calendar-view', CalendarView);
