import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {setPassiveTouchGestures, setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
        
        app-toolbar {
            height: 100px;
            display: flex;
            justify-content: center;
        }
        
        app-toolbar img {
            height: 100px;
        }
      </style>
      
      <iron-ajax
      id="dp"
      on-response="_responseAjax"
      on-error="_responseError"
      on-loading="_monitoringAsyncAjax"
      content-type="application/json"
      handle-as="json"
      debounce-duration="300"></iron-ajax>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bit-logo.jpg" alt="Bitcap">
          </app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <!-- <a name="courses" href="[[rootPath]]courses">C</a>-->
            <a name="modules" href="[[rootPath]]modules">Análitica Redes sociales</a>
            <a name="calendar" href="[[rootPath]]calendar">Tendencias y ubicación</a>
            <a name="form" href="[[rootPath]]form">Inscribirse</a>
            <a name="contact" href="[[rootPath]]contact">¿Quiénes somos?</a>
            <template is="dom-if" if="[[!isLogged]]">
            <a name="login" href="[[rootPath]]login">Iniciar sesión</a>
</template>
            <hr>
             <template is="dom-if" if="[[isLogged]]">
            <a name="candidates" href="[[rootPath]]candidates">Lista de candidatos</a>
            <a name="logout" href="[[rootPath]]logout">Cerrar sesión</a>
</template>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses reveals fixed effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title=""><h2><b>BITcap - Data</b></h2></div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <courses-view name="courses" courses="[[courses]]" on-call-to-action="callToAction"></courses-view>
            <modules-view name="modules" modules="[[modules]]" on-call-to-action="callToAction"></modules-view>
            <methodology-view name="method"></methodology-view>
            <contact-view name="contact"></contact-view>
            <form-view name="form" on-info-requested="infoRequested" course-field="[[infoTemp]]"></form-view>
            <calendar-view name="calendar" calendar="[[calendar]]" on-call-to-action="callToAction"></calendar-view>
            <candidates-view name="candidates"></candidates-view>
            <login-view name="login"></login-view>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }
  
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      courses: Array,
      modules: Array,
      calendar: Array,
      infoTemp: String,
      user: {
        type: Object,
        value: null
      },
      isLogged: {
        type: Boolean,
        value: false
      }
    };
  }
  
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.__oAuthMiddelware();
    this.getCourses();
    setTimeout(() => {
      this.getModules();
      setTimeout(() => {
        this.getCalendar();
      }, 500);
    }, 500);
  }
  
  logout() {
    firebase.auth().signOut().then(() => {
      this.set('user', null);
      this.set('routeData.page', 'login');
    }, error => {
      this.dispatchEvent(new CustomEvent('toastr-message', {
        bubbles: true,
        composed: true,
        detail: {
          type: "error",
          header: 'Logout',
          body: error
        }
      }));
    });
  }
  
  getCourses() {
    this._generateRequest('data/courses.json');
  }
  
  getModules() {
    this._generateRequest('data/modules.json');
  }
  
  getCalendar() {
    this._generateRequest('data/calendar.json');
  }
  
  infoRequested() {
    this.dispatchEvent(new CustomEvent('toastr-message', {
      bubbles: true,
      composed: true,
      detail: {
        type: "success",
        header: 'Solicitar información',
        body: 'Un asesor te contactará pronto para brindarte información.'
      }
    }));
    this.set('routeData.page', 'courses');
  }
  
  callToAction(event) {
    this.set('infoTemp', event.detail);
    this.set('routeData.page', 'form');
  }
  
  _generateRequest(url, method = 'GET', body = '') {
    this.$.dp.body = body;
    this.$.dp.method = method;
    this.$.dp.url = url;
    this.$.dp.generateRequest();
  }
  
  _responseAjax() {
    const payload = this.$.dp.lastResponse;
    switch (payload.info.data) {
      case 'courses':
        this.set('courses', null);
        this.set('courses', payload.response);
        break;
      case 'modules':
        this.set('modules', null);
        this.set('modules', payload.response);
        break;
      case 'calendar':
        this.set('calendar', null);
        this.set('calendar', payload.response);
        break;
    }
  }
  
  _responseError() {
    const error = this.$.dp.lastError;
  }
  
  _monitoringAsyncAjax(event) {
    const ajaxProcessing = event.detail;
    this.set('loadingAjax', ajaxProcessing);
  }
  
  _routePageChanged(page) {
    if (!page) {
      this.page = 'courses';
    } else if (page === 'logout') {
      this.logout();
    } else if (page === 'candidates') {
      if (this.isLogged === true) {
        this.page = page;
      } else {
        this.page = 'login';
      }
    } else if ([ 'courses', 'contact', 'method', 'calendar', 'modules', 'form', 'login' ].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
    
    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }
  
  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'courses':
        import('./courses-view.js');
        break;
      case 'modules':
        import('./modules-view.js');
        break;
      case 'contact':
        import('./contact-view.js');
        break;
      case 'method':
        import('./methodology-view.js');
        break;
      case 'calendar':
        import('./calendar-view.js');
        break;
      case 'form':
        import('./form-view.js');
        break;
      case 'candidates':
        import('./candidates-view.js');
        break;
      case 'login':
        import('./login-view.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
  
  __oAuthMiddelware() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.set('user', {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          providerData: user.providerData
        });
        this.set('isLogged', true);
        this.set('routeData.page', 'candidates');
      } else {
        this.set('user', null);
        this.set('isLogged', false);
      }
    });
  }
}

window.customElements.define('my-app', MyApp);
