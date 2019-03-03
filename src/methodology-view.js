import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MethodologyView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        
        .row {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .branding {
            padding: 15px;
            width: 400px;
        }
        
      </style>
      <h2>Las clases</h2>
      <div class="card">
      <blackquote>
          Las clases no son estrictamente presenciales o remotas; las sesiones cuentan con la flexibilidad para acoplarse a tus necesidades.
        </blackquote>
</div>
      <div class="row">
      <div class="card">
      <h3>Presenciales</h3>
      <blackquote>
          <img src="../images/Clase.png" alt="presencial" class="branding">
        </blackquote>
</div>
      <div class="card">
      <h3>Remotas</h3>
      <blackquote>
          <img src="../images/hangouts-meet-intro.png" alt="presencial" class="branding">
        </blackquote>
</div>
</div>
     
      <div class="card">
      <h2>Evaluación</h2>
      <h3>Formas de evaluación</h3>
        <blackquote>
            <ul>
                <li>Examen. Consiste en un ejercicio práctico de 2 horas por módulo o de 4 horas para evaluar un curso completo.</li>
                <li>La aplicación de dicho examen es 100% remoto. Y es teórico/práctico.</li>
            </ul>
        </blackquote>
      <h3>Métricas de evaluación</h3>
        <blackquote>
            <ul>
                <li><b>Extraordinaria: </b> El alumno domina completamente el tema, sin necesidad de recurrir a prácticas o tareas puede realizar desarrollos complejos implementando lo aprendido.</li>
                <li><b>Supera las expectativas:</b> El alumno puede desarrollar soluciones creativas con recursos que encuentra por su cuenta y agregan valor.</li>
                <li><b>Aceptable:</b> El alumno tiene el entendimiento necesario para realizar una implementación básica y con ayuda de documentación puede realizar actividades más complejas.</li>
                <li><b>Insatisfactorio:</b> Implica que el alumno ni por sí mismo, ni con ayuda de documentación puede implementar el conocimiento adquirido.</li>
            </ul>
        </blackquote>
</div>
 <div class="card">
      <h2>Pagos</h2>
        <blackquote>
            <ul>
                <li>Los pagos pueden ser en efectivo, transferencia interbancaria, o depósito a cuenta Bancomer.</li>
                <li>Hay dos modalidades; la primera es por <b>curso completo</b> y la segunda es por <b>módulo de conocimientos</b></li>
            </ul>
        </blackquote>
        <h3>Curso completo</h3>
        <blackquote>
            <ul>
                <li>Se paga en 6 quincenas</li>
                <li>El primer pago se da, antes de que comience el primer módulo para inscribirlo.</li>
                <li>Si el alumno logra obtener una evaluación que supere las expectativas o extraordinaria (Consultar apartado Evaluación) en promedio al finalizar el curso se le da una bonificación de $1,000 para un curso o módulo posterior.</li>
            </ul>
        </blackquote>
        <h3>Módulos de conocimientos</h3>
        <blackquote>
            <ul>
                <li>Podrás seleccionar el o los módulos que desees cursar en los horarios y fechas disponibles. (Consultar apartado de <a href="/calendar">calendario</a>).</li>
                <li>El pago de un módulo se realiza en dos pagos quincenales, uno antes de la fecha de la clase.</li>
            </ul>
        </blackquote>
</div>
    `;
  }
}

window.customElements.define('methodology-view', MethodologyView);
