
class Heart extends HTMLElement {
  static observedAttributes = ['text'];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    console.log(`Attribute "${attributeName}" Changed`);
    this.#render();
  }
  
  get text() {
    return this.getAttribute('text') || '';
  }
  
  set text(val) {
    this.setAttribute('text', val);
  }
  
  #render() {
    this.shadowRoot.innerHTML = `
      <h1>${this.text}</h1>
    `;
  }
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  
  connectedCallback() {
    this.#render();
  }
}

customElements.define('my-heart', Heart);

(function setupTests() {
  function getTestsTemplate() {
    return `
    <div id="jasmine-content">
  <!-- Jasmine Reporter Container -->
    <div class="jasmine_html-reporter">
      <!-- Symbol summary: indicates test results (e.g., passed/failed) -->
      <div class="jasmine-symbol-summary"></div>

      <!-- Test results section -->
      <div class="jasmine-results">
        <div class="jasmine-summary"></div>
        <div class="jasmine-execution-time"></div>
        <div class="jasmine-failure-summary"></div>
        <div class="jasmine-passed-summary"></div>
        <div class="jasmine-queued-summary"></div>
      </div>

      <!-- Alert section for displaying any critical messages -->
      <div class="jasmine-alert"></div>
      <div class="jasmine-banner"></div>

      <!-- Additional sections for test descriptions and individual results -->
      <div class="jasmine-description"></div>
      <div class="jasmine-symbol-results"></div>
      <div class="jasmine-test-results"></div>

      <!-- Footer for any additional information -->
      <div class="jasmine-footer"></div>
    </div>
  </div>
  `;
  }

  class Tests extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = getTestsTemplate();
    }

    runTests(testsCall) {
      const jasmineEnv = jasmine.getEnv();
      jasmineEnv.clearReporters();
      const htmlReporter = new jasmine.HtmlReporter({
        env: jasmineEnv,
        onRaiseExceptionsClick: function () {},
        getContainer: function () {
          return document.getElementById('jasmine-content');
        },
        createElement: function () {
          return document.createElement(...arguments);
        },
        createTextNode: function () {
          return document.createTextNode(...arguments);
        }
      });

      jasmineEnv.addReporter(htmlReporter);  

      testsCall();

      jasmineEnv.execute();
      }
  }

  customElements.define('my-tests', Tests);

  const testsWrapper = document.querySelector('my-tests');

  testsWrapper?.runTests(tests);
})();

function tests() {
  // Your Jasmine tests go here
  describe('MyHeart', function () {
    let element;
    
    beforeEach(()=> {
      element = document.createElement('my-heart');
    });
    
    it('should define a Heart element', function () {
      expect(element instanceof Heart).toBe(true);
    });
    
    describe('text',  () => {
      it('should init as empty string', () => {
        expect(element.text).toBe('');
      });
      
      it('should reflect property in attribute', () => {
        element.text = 'text';
        expect(element.getAttribute('text')).toBe('text');
      });
      
      it('should reflect the attribute in property', () => {
        element.setAttribute('text', 'some text');
        expect(element.text).toBe('some text');
      });
      
      it('should render the text inside h1', () => {
        element.text = 'other text';
        const h1 = element.shadowRoot.querySelector('h1');
        expect(h1.textContent).toBe('other text');
      })
    });
  });
}
