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

<div class="card">
    <h2>Nuestra ubicación </h2>
    <blackquote>
      Tepeji 21; Colonia Roma Sur 06760 Ciudad de México, CDMX
    </blackquote>
    <div class="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.1021060608355!2d-99.16101429999999!3d19.407993799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1618f905c3%3A0xa9b85ede02240242!2sTepeji+21%2C+Roma+Sur%2C+06760+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses!2smx!4v1551631234437
"
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
