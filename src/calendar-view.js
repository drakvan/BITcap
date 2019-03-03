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
        border: 2px solid #cdeaf7;
        margin: 5px;
    }

    .header {
        padding-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        background-color: #2d76ec;
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="card">
    <div class="calendar">
        <template is="dom-repeat" items="[[calendar]]" as="element">
              <div class="module">
                  <div class="header">
                      <h3>[[element.title]]</h3>
                  </div>
                  <div class="info">
                    <div class="row">
                    <iron-icon icon="icons:date-range"></iron-icon>
                      [[element.date]]
                    </div>
                    <div class="row">
                      <iron-icon icon="icons:face"></iron-icon>
                      [[element.number]] personas twittearon 
                    </div>
                    <div class="row">
                      <iron-icon icon="icons:timeline"></iron-icon>
                      [[element.begin]] de alcance total

                    </div>
                    <div class="row">
                      <iron-icon icon="icons:thumbs-up-down"></iron-icon>
                      [[element.end]]  de impresiones

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


    `;
  }
  
  static get properties() {
    return {
      calendar: Array
    };
  }
}

window.customElements.define('calendar-view', CalendarView);
