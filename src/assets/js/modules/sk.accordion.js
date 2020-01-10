import Component from '../../../js/sk.component';

class Accordion extends Component {
  static options = {
    initSelector: '[data-accordion]',
  };

  static components = new WeakMap();

  constructor(options) {
    super(options);

    // check toggle state
    this.isOpened = false;
    this.currentlyOpen = null;
    this.toggleAll = true;

    // setup events
    this.setupMouseEvents();
  }

  toggle(element) {
    // option used to toggle all open options within each accordion instance
    if (this.toggleAll) {
      const accordionContentToToggle = Array.from(this.element.querySelectorAll('.accordion__content'));

      if (accordionContentToToggle.length > 0) {
        accordionContentToToggle.forEach(el => {
          if (el === element.nextElementSibling) return false;
          el.classList.remove('accordion__content--active');
          el.previousElementSibling.classList.remove('accordion__header--active');
        });
      }
    }

    // Open accordion or toggle
    element.classList.toggle('accordion__header--active');
    element.nextElementSibling.classList.toggle('accordion__content--active');
  }

  setupMouseEvents() {
    this.element.dataset.accordionId = Math.floor(Math.random() * 9999);
    const button = Array.from(this.element.querySelectorAll('.accordion__header'));
    button.forEach(el => {
      el.addEventListener('click', event => {
        event.preventDefault();
        this.toggle(event.currentTarget);
      });
    });

    if (button.length > 0) {
      this.setupKeyboardEvents(button);
    }
  }

  setupKeyboardEvents(accordion) {
    // Key Board events
    accordion.forEach(ele => {
      ele.addEventListener('keydown', event => {
        const target = event.currentTarget;
        const key = event.which.toString();
        const ctrlModifier = event.ctrlKey && key.match(/33|34/);

        if (key.match(/38|40/) || ctrlModifier) {
          const index = accordion.indexOf(target);
          const direction = key.match(/34|40/) ? 1 : -1;
          const length = accordion.length;
          const newIndex = (index + length + direction) % length;

          accordion[newIndex].focus();
          event.preventDefault();
        } else if (key.match(/35|36/)) {
          // 35 = End, 36 = Home keyboard operations
          switch (key) {
            // Go to first accordion
            case '36':
              accordion[0].focus();
              break;
            // Go to last accordion
            case '35':
              accordion[accordion.length - 1].focus();
              break;
          }
          event.preventDefault();
        } else if (ctrlModifier) {
          panels.forEach((panel, index) => {
            if (panel.contains(target)) {
              accordion[index].focus();
              event.preventDefault();
            }
          });
        }
      });
    });
  }
}

export default Accordion;
