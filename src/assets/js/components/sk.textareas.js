import Component from '../../../js/sk.component';
import Utils from '../../../js/sk.utils';

class TextAreas extends Component {
  static options = {
    elements: {
      initSelector: '[data-textareas]',
      textarea: 'textarea',
      clearButton: 'clear-btn',
      textareaLabelBG: {
        labelBGElement: 'SPAN',
        className: 'textarea__label-bg',
      },
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
    this.options.textareas = this.element;

    // init all text inputs
    this.initTextarea(this.options.textareas);
  }

  // text inputs init
  initTextarea(textareas) {
    var textareaBackgroundColor = window.getComputedStyle(this.element)['backgroundColor'];

    for (let j = 0; j < this.element.parentNode.children.length; j++) {
      if (this.element.parentNode.children[j].classList.contains(this.options.elements.clearButton)) {
        var textareaClearBTN = this.element.parentNode.children[j];
      }
    }

    // textarea label background setup
    var textareaLabelBG = document.createElement(this.options.elements.textareaLabelBG.labelBGElement);
    textareaLabelBG.setAttribute(this.options.attributes.class, this.options.elements.textareaLabelBG.className);
    textareaLabelBG.style.backgroundColor = textareaBackgroundColor;
    var theFirstChild = this.element.parentNode.firstElementChild;

    if (!textareas.hasAttribute(this.options.attributes.disabled)) {
      textareas.parentNode.insertBefore(textareaLabelBG, theFirstChild);
    }

    this.textInputEvents({ textInput: this.element, clearButton: textareaClearBTN });

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
    textInputs.clearButton.addEventListener('click', event => {
      this.clearValue(textInputs.textInput);
    });
  }

  // text input set value
  setValue(textInput) {
    if (textInput.classList.contains(this.options.elements.textarea)) {
      textInput.innerHTML = textInput.value;
      if (!textInput.value) {
        textInput.blur();
        textInput.focus();
      }
    }
  }

  // text input clear value
  clearValue(textInput) {
    if (textInput.classList.contains(this.options.elements.textarea)) {
      textInput.value = '';
      textInput.innerHTML = '';
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

export default TextAreas;
