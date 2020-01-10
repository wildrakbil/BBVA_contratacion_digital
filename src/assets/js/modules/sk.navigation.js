
import Component from '../sk.component';

class Navigation extends Component {
  static options = {
    selector: '[data-navigation]',
  };

  static components = new WeakMap();

  constructor(options) {
    super(options);
    this.mobileNav = Array.from(this.element.querySelectorAll('[data-mobile-menu]'));
    this.toggleBtn = Array.from(this.element.querySelectorAll('[data-toggle-menu]'));
    this.eventListeners();
  }

  toggleMenu(element) {
    element.classList.toggle('active');
  }

  eventListeners() {
    this.toggleBtn.forEach(el => {
      el.addEventListener('click', () => {
        event.preventDefault();
        let toggleBtnData = el.dataset.toggleMenu;
        this.findParent('navigation', el);
        for (let i = 0; i < this.mobileNav.length; i++) {
          let mobileNavData = this.mobileNav[i].dataset.mobileMenu;
          if (mobileNavData === toggleBtnData) {
            this.toggleMenu(this.mobileNav[i]);
          }
        }
      });
    });
  }

  findParent(parentName, childObj) {
    var lookUpParentEl = childObj.parentNode;
    while (!lookUpParentEl.classList.contains(parentName)) {
      lookUpParentEl = lookUpParentEl.parentNode;
    }
    lookUpParentEl.classList.toggle('active');
  }
}

export default Navigation;
