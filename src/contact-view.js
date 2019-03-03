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
    h1 {
        padding: 0;
        margin: 0 0 20px 0;
    }

    h3 {
        padding: 0;
        margin: 0 0 5px 0;
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
 <div class="content">
            <br>
            <h3><b>BITcap - Data</b>, nos dedicamos a la prestación de servicios de consultoría en Inteligencia de Negocios (BI) y Analítica de Negocios (BA).</h3>
            <h3>Además contamos con expertos en todos los sectores de la economia como salud, retail, servicios profesionales, oil & gas, manufactura, TI, entre otros, agregando valor en el momento de procesar los datos que son objeto de análisis en las consultorías prestadas. <br><br><br></h3>
 </div>
 <div>
            <img align="center" src="https://www.wp101.com/wp-content/uploads/2016/04/analytics.jpg" alt="Smiley face"  height="42" width="42">
            <img align="center" src="http://www.youngmarketing.co/wp-content/uploads/2015/04/google-analytics-tips-illustration.jpg" alt="Smiley face"  height="42" width="42">
            <img align="center" src="http://www.audifarma.es/archivo/imagenes/blog/stockvault-web-analytics-concept---multicolor-version181081.jpg" alt="Smiley face" lign="center" height="42" width="42">
            <img align="center" src="http://foxnet.es/wp-content/uploads/2018/02/Marketing-Analytics.jpg" alt="Smiley face" lign="center" height="42" width="42">
 </div>

    `;
  }
}

window.customElements.define('contact-view', ContactView);
