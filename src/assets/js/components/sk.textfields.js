import Component from '../../../js/sk.component';
import Utils from '../../../js/sk.utils';

class Textfields extends Component {
  static options = {
    elements: {
      initSelector: '[data-textfield]',
      textfield: 'textfield',
      clearButton: 'clear-btn',
    },
    modifiers: {
      readOnly: 'input--readonly',
      backgroundBlueMedium: 'input--bg-blue-medium',
      backgroundBlueCore: 'input--bg-blue-core',
      error: 'input--error',
    },
    attributes: {
      value: 'value',
      disabled: 'disabled',
      placeholder: 'placeholder',
      id: 'id',
      class: 'class',
      ariaDescribeBy: 'aria-describedby',
    },
    IEPlaceholderFixOptions: {
      placeholderElement: 'SPAN',
      className: 'input__ie-placeholder',
      modifiers: {
        IEPlaceholderActive: 'input__ie-placeholder--active',
        IEPlaceholderBGBlue: 'input__ie-placeholder--bg-blue',
      },
    },
  };

  static components = new WeakMap();

  constructor(options) {
    super(options);

    // get all text inputs
    this.options.textfields = this.element;

    // init all text inputs
    this.initTextfield();
  }

  // text inputs init
  initTextfield() {
    for (let j = 0; j < this.element.parentNode.children.length; j++) {
      if (this.element.parentNode.children[j].classList.contains(this.options.elements.clearButton)) {
        var textfieldClearBTN = this.element.parentNode.children[j];
      }
    }

    this.textInputEvents({ textInput: this.element, clearButton: textfieldClearBTN });

    if (Utils.ifIE11()) {
      this.IEPlaceholderFix(this.element);
    }
  }

  // text input events
  textInputEvents(textInputs) {
    textInputs.textInput.addEventListener('keyup', event => {
      this.setValue(textInputs.textInput);
    });
    textInputs.textInput.addEventListener('keydown', event => {
      this.setValue(textInputs.textInput);
    });
    if (textInputs.clearButton) {
      textInputs.clearButton.addEventListener('click', event => {
        this.clearValue(textInputs.textInput);
      });
    }
  }

  // text input set value
  setValue(textInput) {
    if (textInput.classList.contains(this.options.elements.textfield)) {
      textInput.setAttribute(this.options.attributes.value, textInput.value);
    }
  }

  // text input clear value
  clearValue(textInput) {
    if (textInput.classList.contains(this.options.elements.textfield)) {
      textInput.value = '';
      textInput.setAttribute(this.options.attributes.value, '');
    }
  }

  // IE workaround for placeholders
  IEPlaceholderFix(textInput) {
    // getting the placeholder text and removing placehoder attribute
    var placeholderVal = textInput.placeholder;
    textInput.removeAttribute(this.options.attributes.placeholder);

    // creating new placeholder with attributes and adding it to span
    var spanID = Math.floor(Math.random() * 9999);
    var newPlaceholder = document.createElement(this.options.IEPlaceholderFixOptions.placeholderElement);

    newPlaceholder.setAttribute(this.options.attributes.id, spanID);
    newPlaceholder.setAttribute(this.options.attributes.class, this.options.IEPlaceholderFixOptions.className);
    newPlaceholder.appendChild(document.createTextNode(placeholderVal));

    // aria-tag for screen readers
    textInput.setAttribute(this.options.attributes.ariaDescribeBy, spanID);

    // appending new placeholder
    if (
      !textInput.classList.contains(this.options.modifiers.readOnly) &&
      !textInput.hasAttribute(this.options.attributes.disabled)
    ) {
      textInput.parentNode.appendChild(newPlaceholder);

      // events for new placeholder
      textInput.addEventListener('keyup', event => {
        this.IEPlaceholderFixBehavior(textInput, newPlaceholder);
      });

      textInput.addEventListener('focus', event => {
        this.IEPlaceholderFixBehavior(textInput, newPlaceholder);
      });

      textInput.addEventListener('focusout', event => {
        this.IEPlaceholderFixBehavior(textInput, newPlaceholder);
      });

      // adding the correct color for placeholder to blue backgrounds
      if (
        (textInput.classList.contains(this.options.modifiers.backgroundBlueMedium) &&
          !textInput.classList.contains(this.options.modifiers.error)) ||
        (textInput.classList.contains(this.options.modifiers.backgroundBlueCore) &&
          !textInput.classList.contains(this.options.modifiers.error))
      ) {
        newPlaceholder.classList.add(this.options.IEPlaceholderFixOptions.modifiers.IEPlaceholderBGBlue);
      }
    }
  }

  // IE workaround for placeholders behavior
  IEPlaceholderFixBehavior(textInput, newPlaceholder) {
    if (!textInput.value && document.activeElement === textInput) {
      newPlaceholder.classList.add(this.options.IEPlaceholderFixOptions.modifiers.IEPlaceholderActive);
    } else if (
      (textInput.value && document.activeElement === textInput) ||
      (!textInput.value && document.activeElement != textInput)
    ) {
      newPlaceholder.classList.remove(this.options.IEPlaceholderFixOptions.modifiers.IEPlaceholderActive);
    }
  }
}

export default Textfields;
