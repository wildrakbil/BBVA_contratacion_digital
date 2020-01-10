import Component from '../../../js/sk.component';

class Dropdowns extends Component {
  static options = {
    name: {
      dropdown: 'dropdown',
    },
    initSelector: '[data-dropdown]',
    dataValObj: [],
    onChange: () => {},
    elements: {
      dropdownInputValue: 'dropdown__value',
      dropdownLabel: 'input__label',
      dropdownSelectedOptionText: 'dropdown__text',
      dropdownIcon: 'dropdown__icon',
      dropdownMenu: 'dropdown__menu',
      dropdownMenuOption: {
        div: 'DIV',
        class: 'item',
      },
    },
    modifiers: {
      open: 'dropdown--open',
      activeLabel: 'input__label--active',
      error: 'input--error',
      disabled: 'input--disabled',
      readonly: 'input--readonly',
      optionSelected: 'selected',
      focus: {
        className: 'dropdown--focus',
        element: 'DIV',
      },
    },
    attributes: {
      dataValue: 'data-dropdown-value',
      value: 'value',
      style: 'style',
      class: 'class',
      aria: {
        hidden: 'aria-hidden',
        live: 'aria-live',
        true: 'true',
        false: 'fasle',
        assertive: 'assertive',
      },
      tabindex: {
        name: 'tabindex',
        zero: 0,
        one: 1,
        negative: -1,
      },
    },
    styles: {
      backgroundColor: 'background-color',
    },
    keys: {
      upArrow: 38,
      downArrow: 40,
      enter: 13,
      escape: 27,
      space: 32,
    },
  };

  static components = new WeakMap();

  constructor(options) {
    super(options);
    this.currentSelectedOpt = null;
    
    if (this.element == undefined) return false;
    if (this.element.hasAttribute('data-dropdown-id')) return true;
    
    this.element.dataset.dropdownId = Math.floor(Math.random() * 9999);
    this.componentId = this.element.dataset.dropdownId;
    this.options.dropdowns = this.options.nonInitDropdowns;

    // init all dropdowns
    this.generatedOptions = this.options.dataValObj || [];
    this.generatedOptionsGroup = [];
    this.menuOptions = [];
    this.dropdownOpenEvent = null;
    this.dropdownMouseDownFocusEventsEvent = null;
    this.dropdownCloseEvent = null;
    this.dropdownLabelFocusinEvent = null;
    this.dropdownLabelFocusoutEvent = null;
    this.dropdownMenuKeyNavigationEvent = null;

    if (this.options.dataValObj.length !== 0) {
      this.generatedDropdownOptions();
    } else {
      this.dropDownInit();
    }
  }

  generatedDropdownOptions() {

    for (let i = 0; i < this.generatedOptions.length; i++) {
      var dropdownOption = document.createElement(this.options.elements.dropdownMenuOption.div);
      dropdownOption.setAttribute(this.options.attributes.class, this.options.elements.dropdownMenuOption.class);
      var dropdownOptionText = document.createTextNode(this.generatedOptions[i].text);
      dropdownOption.appendChild(dropdownOptionText);
      this.generatedOptionsGroup[i] = dropdownOption;
    }
    
    this.dropDownInit();
  }

  // dropdown init
  dropDownInit() {
    this.element.setAttribute(this.options.attributes.tabindex.name, this.options.attributes.tabindex.zero);

    for (let j = 0; j < this.element.children.length; j++) {
      if (this.element.children[j].classList.contains(this.options.elements.dropdownMenu)) {
        var dropdownMenu = this.element.children[j];
        if (this.generatedOptions.length && this.generatedOptionsGroup.length ) {
          for (let d = 0; d < this.generatedOptions.length; d++) {
            dropdownMenu.appendChild(this.generatedOptionsGroup[d]);
          }
        }
        dropdownMenu.setAttribute(this.options.attributes.tabindex.name, this.options.attributes.tabindex.negative);
      }
      if (this.element.children[j].classList.contains(this.options.elements.dropdownSelectedOptionText)) {
        var dropdownSelectedOptionText = this.element.children[j];
        dropdownSelectedOptionText.setAttribute(this.options.attributes.aria.live, this.options.attributes.aria.assertive);
      }
      if (this.element.children[j].classList.contains(this.options.elements.dropdownInputValue)) {
        var dropdownInputValue = this.element.children[j];
      }
      if (this.element.children[j].classList.contains(this.options.elements.dropdownLabel)) {
        var dropdownLabel = this.element.children[j];
      }
      if (this.element.children[j].classList.contains(this.options.elements.dropdownIcon)) {
        var dropdownIcon = this.element.children[j];
        dropdownIcon.setAttribute(this.options.attributes.aria.hidden, this.options.attributes.aria.true);
      }
    }

    this.allDropdowns = {
      dropdown: this.element,
      menu: dropdownMenu,
      text: dropdownSelectedOptionText,
      value: dropdownInputValue,
      label: dropdownLabel,
    };

    this.dropdownEvents();
    this.dropdownMenuOptionsInit();
  }

  // dropdown menu options data-value init
  dropdownMenuOptionsInit() {
    
    for (let i = 0; i < this.allDropdowns.menu.children.length; i++) {
      const valueOfDropdown =
        this.options.dataValObj !== undefined && this.options.dataValObj[i] !== undefined
          ? this.options.dataValObj[i].val
          : this.allDropdowns.menu.children[i].getAttribute(this.options.attributes.dataValue) || i;
      this.allDropdowns.menu.children[i].setAttribute(this.options.attributes.dataValue, valueOfDropdown);
      if (this.allDropdowns.value.value === this.allDropdowns.menu.children[i].getAttribute(this.options.attributes.dataValue)) {
        this.menuOptions.push( this.allDropdowns.menu.children[i] );
        this.dropdownSelectingOptions(this.allDropdowns.menu.children[i]);
      }
      else {
        this.menuOptions.push( this.allDropdowns.menu.children[i] );
        if( i == this.allDropdowns.menu.children.length - 1) {
          this.dropdownMenuOptionsEvents();
        }
      }
    }
  }
  
  // dropdown events
  dropdownEvents() {
    if (this.allDropdowns.dropdown.classList.contains(this.options.modifiers.disabled)) {
      this.allDropdowns.dropdown.setAttribute(this.options.attributes.aria.hidden, this.options.attributes.aria.true);
      this.allDropdowns.dropdown.setAttribute(this.options.attributes.tabindex.name, this.options.attributes.tabindex.negative);
      return false;
    }
    if (this.allDropdowns.dropdown.classList.contains(this.options.modifiers.readonly)) {
      this.allDropdowns.menu.setAttribute(this.options.attributes.aria.hidden, this.options.attributes.aria.true);
      return false;
    } else {
      this.dropdownSetupEvents();
    }
  }
  // used to setup events on each dropdown
  dropdownSetupEvents() {
    this.dropdownOpenEvent = this.dropdownOpen.bind(this); 
    this.allDropdowns.dropdown.addEventListener('focus', this.dropdownOpenEvent, false);
    this.dropdownMouseDownFocusEventsEvent = this.dropdownMouseDownFocusEvents.bind(this);
    this.allDropdowns.dropdown.addEventListener('mousedown', this.dropdownMouseDownFocusEventsEvent, false);
    this.dropdownCloseEvent = this.dropdownClose.bind(this);
    this.allDropdowns.dropdown.addEventListener('blur', this.dropdownCloseEvent, false);
    this.dropdownLabelFocusinEvent = this.dropdownLabelFocusin.bind(this);
    this.allDropdowns.dropdown.addEventListener('focusin', this.dropdownLabelFocusinEvent, false);
    this.dropdownLabelFocusoutEvent = this.dropdownLabelFocusout.bind(this);
    this.allDropdowns.dropdown.addEventListener('focusout', this.dropdownLabelFocusoutEvent, false);
    this.dropdownMenuKeyNavigationEvent = this.dropdownMenuKeyNavigation.bind(this);
    this.allDropdowns.dropdown.addEventListener('keydown', this.dropdownMenuKeyNavigationEvent, false);
  }
  
  dropdownMouseDownFocusEvents() {
    if (!this.allDropdowns.dropdown.classList.contains(this.options.modifiers.open)) {
      this.allDropdowns.dropdown.focus();
    }
  }
  
  // dropdown menu options events
  dropdownMenuOptionsEvents() {
    this.menuOptions.forEach(element => {
      element.addEventListener('mousedown', event => {
        this.dropdownSelectingOptions(element);
      });
    });
  }

  // close dropdown
  dropdownClose() {
    if (this.allDropdowns.dropdown.classList.contains(this.options.modifiers.open)) {
      var focusing = Array.from(this.element.parentNode.querySelectorAll(".dropdown--focus"));
      focusing.forEach(element => {
        element.remove();
      });
      this.allDropdowns.menu.removeAttribute(this.options.attributes.style);
      this.allDropdowns.dropdown.classList.remove(this.options.modifiers.open);
      this.allDropdowns.label.classList.remove(this.options.modifiers.activeLabel);
    }
  }

  // open dropdown
  dropdownOpen() {
    var focusHeight;
    var diplayedChildren = this.allDropdowns.menu.children;
    var visibleChildren = this.dropdownCheckDiplay(diplayedChildren);
    this.allDropdowns.dropdown.classList.add(this.options.modifiers.open);
    var menuHeight = visibleChildren * (this.allDropdowns.dropdown.offsetHeight + 1);
    var diffClientEl =
      document.documentElement.clientHeight -
      (this.menuOffset(this.allDropdowns.menu).top + this.allDropdowns.menu.scrollHeight + (this.allDropdowns.dropdown.offsetHeight + 1) - 1);
    if (diffClientEl >= 0) {
      this.allDropdowns.menu.style.height = menuHeight + 'px';
      focusHeight = menuHeight + this.allDropdowns.dropdown.offsetHeight;
    } else {
      var spaceMultiplier = Math.round(diffClientEl / (this.allDropdowns.dropdown.offsetHeight + 1));
      var botSpace = spaceMultiplier * (this.allDropdowns.dropdown.offsetHeight + 1);
      var generatedHeight = menuHeight + botSpace - 1;
      if (generatedHeight > 112) {
        this.allDropdowns.menu.style.height = generatedHeight + 'px';
        focusHeight = generatedHeight + this.allDropdowns.dropdown.offsetHeight;
      } else if (generatedHeight <= 112) {
        this.allDropdowns.menu.style.height = this.allDropdowns.dropdown.offsetHeight * 2 + 'px';
        focusHeight = this.allDropdowns.dropdown.offsetHeight * 2 + this.allDropdowns.dropdown.offsetHeight;
      }
    }
    this.dropdownFocus(focusHeight);
  }

  // all visible children
  dropdownCheckDiplay(diplayedChildren) {
    var visibleChildrenCount = 0;
    for (let i = 0; i < diplayedChildren.length; i++) {
      if (diplayedChildren[i].style.display !== 'none') {
        visibleChildrenCount++;
      }
    }
    return visibleChildrenCount;
  }

  // open focus dropdown
  dropdownFocus(focusHeight) {
    var menuBGColor = window.getComputedStyle(this.allDropdowns.menu).getPropertyValue(this.options.styles.backgroundColor);
    var focusColorClass = this.dropdownFocusContrast(menuBGColor);
    
    
    var focusing = this.element.parentNode.querySelectorAll(".dropdown--focus");
    if(focusing.length <= 0 ) {
      focusing = document.createElement(this.options.modifiers.focus.element);
      focusing.setAttribute(this.options.attributes.class, this.options.modifiers.focus.className + ' ' + focusColorClass);
      focusing.style.height = focusHeight + 'px';
      var theFirstChild = this.allDropdowns.dropdown.parentNode.firstElementChild;
      this.allDropdowns.dropdown.parentNode.insertBefore(focusing, theFirstChild);
    }
  }

  // dropdown focus color contrast
  dropdownFocusContrast(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var contrast = (rgb[1] * 299 + rgb[2] * 587 + rgb[3] * 114) / 1000;
    return contrast >= 128 ? 'blue' : 'white';
  }

  // calculating position of dropdown menu when opening dropdown
  menuOffset(menu) {
    let rect = menu.getBoundingClientRect();
    return {
      top: rect.top,
    };
  }

  // key navigation dropdown menu options
  dropdownMenuKeyNavigation(event) {
    var keyCode = event.keyCode;

    if (
      keyCode === this.options.keys.upArrow ||
      keyCode === this.options.keys.downArrow ||
      keyCode === this.options.keys.enter ||
      keyCode === this.options.keys.space
    ) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (keyCode === this.options.keys.upArrow || keyCode === this.options.keys.downArrow) {
      if (this.allDropdowns.dropdown.classList.contains(this.options.modifiers.open)) {
        var selectedVal = this.dropdownNavigatingUpDownOptions(keyCode);
        this.dropdownSelectingOptions(this.allDropdowns.menu.children[selectedVal]);
      }
    } else if (keyCode === this.options.keys.enter) {
      if (!this.allDropdowns.dropdown.classList.contains(this.options.modifiers.open)) {
        this.dropdownOpen();
      } else {
        this.dropdownClose();
      }
    } else if (keyCode === this.options.keys.escape) {
      this.dropdownClose();
    }
  }

  // navigating up or down dropdown menu options
  dropdownNavigatingUpDownOptions(keyCode) {
    var selectedVal = 0;
    for (let i = 0; i < this.allDropdowns.menu.children.length; i++) {
      if (!this.allDropdowns.value.getAttribute(this.options.attributes.value)) {
        return selectedVal;
      } else if (
        this.allDropdowns.value.getAttribute(this.options.attributes.value) &&
        this.allDropdowns.menu.children[i].classList.contains(this.options.modifiers.optionSelected)
      ) {
        if (keyCode === this.options.keys.upArrow && i === 0) {
          selectedVal = this.allDropdowns.menu.children.length - 1;
          return selectedVal;
        } else if (keyCode === this.options.keys.upArrow && i > 0) {
          selectedVal = i - 1;
          return selectedVal;
        } else if (keyCode === this.options.keys.downArrow && i >= 0 && i < this.allDropdowns.menu.children.length - 1) {
          selectedVal = i + 1;
          return selectedVal;
        } else if (keyCode === this.options.keys.downArrow && i === this.allDropdowns.menu.children.length - 1) {
          return selectedVal;
        }
      }
    }
  }

  // selecting dropdown menu options
  dropdownSelectingOptions(element) {
    if (!element.classList.contains(this.options.modifiers.optionSelected)) {
      for (let i = 0; i < this.allDropdowns.menu.children.length; i++) {
        this.allDropdowns.menu.children[i].classList.remove(this.options.modifiers.optionSelected);
      }
      element.classList.add(this.options.modifiers.optionSelected);
      let selectedVal = element.getAttribute(this.options.attributes.dataValue);
      let text = element.innerHTML;
      
      this.dropdownSelectedOptionValue(selectedVal, text);
      this.options.onChange(this.currentSelectedOpt);
    }    
  }

  // selected dropdown menu options
  dropdownSelectedOptionValue(selectedVal, text) {
    this.currentSelectedOpt = {
      val: selectedVal,
      text,
    };
    this.allDropdowns.value.setAttribute(this.options.attributes.value, selectedVal);
    this.allDropdowns.text.innerHTML = text;
  }

  // focusin dropdown label
  dropdownLabelFocusin() {
    this.allDropdowns.label.classList.add(this.options.modifiers.activeLabel);
  }

  // focusout dropdown label
  dropdownLabelFocusout() {
    this.allDropdowns.label.classList.remove(this.options.modifiers.activeLabel);
  }
  
  dropdownDataUpdate() {
    this.dropdownResetEvents();
    this.dropDownInit();
  }
  
  dropdownResetEvents() {
    this.allDropdowns.dropdown.removeEventListener('focus', this.dropdownOpenEvent, false);
    this.allDropdowns.dropdown.removeEventListener('mousedown', this.dropdownMouseDownFocusEventsEvent, false);
    this.allDropdowns.dropdown.removeEventListener('blur', this.dropdownCloseEvent, false);
    this.allDropdowns.dropdown.removeEventListener('focusin', this.dropdownLabelFocusinEvent, false);
    this.allDropdowns.dropdown.removeEventListener('focusout', this.dropdownLabelFocusoutEvent, false);
    this.allDropdowns.dropdown.removeEventListener('keydown', this.dropdownMenuKeyNavigationEvent, false);
  }
}

export default Dropdowns;
