import Component from '../../../js/sk.component';
import Utils from '../../../js/sk.utils';

class PredictiveText extends Component {
  static options = {
    elements: {
      initSelector: '[data-searchfield]',
      searchFunc: '',
      textfield: 'predictiveText__searchfield',
      label: 'input__label',
      searchButton: 'search-btn',
      clearButton: 'clear-btn',
      resultsMenu: 'predictiveText__menu',
      resultItemOption: {
        div: 'DIV',
        class: 'item',
      },
      lastItem: {
        div: 'DIV',
        class: 'item item__more',
        link: '/search/?s=',
        text: 'More results'
      }
    },
    modifiers: {
      readOnly: 'input--readonly',
      backgroundBlueMedium: 'input--bg-blue-medium',
      backgroundBlueCore: 'input--bg-blue-core',
      error: 'input--error',
      open: 'predictiveText--open'
    },
    attributes: {
      value: 'value',
      disabled: 'disabled',
      placeholder: 'placeholder',
      style: 'style',
      id: 'id',
      class: 'class',
      ariaDescribeBy: 'aria-describedby',
      dataMinChars: 'data-min-chars',
      dataMaxResults: 'data-max-results',
      maxDisplay: 5,
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
    IEPlaceholderFixOptions: {
      placeholderElement: 'SPAN',
      className: 'input__ie-placeholder',
      modifiers: {
        IEPlaceholderActive: 'input__ie-placeholder--active',
        IEPlaceholderBGBlue: 'input__ie-placeholder--bg-blue',
      },
    },
    searchParams: {
      url: window.location,
      searchParamName: 's',
      callback: ''
    }
  };

  static components = new WeakMap();

  constructor(options) {
    super(options);
    this.options.searchfields = this.element;

    if (options.lastItem != undefined) {
      this.options.elements.lastItem = options.lastItem;
    }

    // init all text inputs
    this.generatedResults = [];
    this.generatedResultsGroup = [];
    this.initPredictiveTextfield();
  }

  // predictive text init
  initPredictiveTextfield() {
    for (let j = 0; j < this.element.children.length; j++) {
      if (this.element.children[j].classList.contains(this.options.elements.clearButton)) {
        var textfieldClearBTN = this.element.children[j];
      }
    }

    this.predictiveTextEvents({ searchTextInput: this.element.getElementsByClassName(this.options.elements.textfield)[0], clearButton: textfieldClearBTN });

    if (Utils.ifIE11()) {
      this.IEPlaceholderFix(this.element);
    }

  }

  // search input events
  predictiveTextEvents(textInputs) {
    textInputs.searchTextInput.addEventListener('input', event => {
      this.setValue(textInputs.searchTextInput);
    });
    textInputs.searchTextInput.addEventListener('keydown', event => {
      let code = (event.keyCode ? event.keyCode : event.which);
      //Enter keyCode
      if (code == 13 && this.allSearchBox.value.getAttribute('value') != "") {
        this.allSearchBox.menu.querySelector('.item__more a').click();
      }

      //Backspace or Delete
      if ((code == 8 || code == 46) &&
        this.allSearchBox.value.getAttribute('value').length <= 0 + this.element.getAttribute(this.options.attributes.dataMinChars)) {
        this.clearValue(textInputs.searchTextInput);
      }

      //Esc
      if (code == 27) {
        textInputs.searchTextInput.blur();
      }
    });

    textInputs.searchTextInput.addEventListener('focus', event => {
      this.setValue(textInputs.searchTextInput);
    });

    if (textInputs.clearButton) {
      textInputs.clearButton.addEventListener('click', event => {
        this.clearValue(textInputs.searchTextInput);
      });
    }

    this.element.querySelector('.' + this.options.elements.textfield).addEventListener('blur', this.resultsClose.bind(this), false);
  }

  // predictive text input set value
  setValue(predictiveTextInput) {
    if (predictiveTextInput.classList.contains(this.options.elements.textfield)) {
      predictiveTextInput.setAttribute(this.options.attributes.value, predictiveTextInput.value);
      this.getResults(predictiveTextInput.value);
    }
  }

  // text input clear value
  clearValue(predictiveTextInput) {
    if (predictiveTextInput.classList.contains(this.options.elements.textfield)) {
      predictiveTextInput.value = '';
      predictiveTextInput.setAttribute(this.options.attributes.value, '');
      this.clearResults();
    }
  }

  getResults(word) {
    let min = this.element.getAttribute(this.options.attributes.dataMinChars);
    if (word.length >= min) {
      this.clearResults();
      this.queryResults(word);
      this.generateResults();
      this.renderResults();
    }
  }

  clearResults() {

    this.element.querySelector('.' + this.options.elements.resultsMenu).innerHTML = '';
    this.generatedResults = [];
    this.generatedResultsGroup = [];

    //this.resultsClose();
  }

  queryResults(word) {
    const callbackSearchFunction = (fn) => {
      return fn(word);
    }

    let all_results = callbackSearchFunction(this.options.searchFunc);

    this.generatedResults = all_results.slice(0, this.element.getAttribute(this.options.attributes.dataMaxResults));
  }

  generateResults() {
    for (let i = 0; i < this.generatedResults.length; i++) {
      var resultItem = document.createElement(this.options.elements.resultItemOption.div);
      resultItem.setAttribute(this.options.attributes.class, this.options.elements.resultItemOption.class);
      var resultItemLink = document.createElement('A');
      resultItemLink.setAttribute('href', this.generatedResults[i].link);
      var resultItemText = this.highLightResults(this.generatedResults[i].text);
      resultItemLink.innerHTML = resultItemText;
      resultItem.appendChild(resultItemLink);
      this.generatedResultsGroup[i] = resultItem;
    }

    //Add View more element
    var lastItem = document.createElement(this.options.elements.lastItem.div);
    lastItem.setAttribute(this.options.attributes.class, this.options.elements.lastItem.class);
    var viewMoreLink = document.createElement('A');
    viewMoreLink.setAttribute('href', this.options.elements.lastItem.link + this.element.getElementsByClassName(this.options.elements.textfield)[0].getAttribute("value"));
    var viewMoreText = document.createTextNode(this.options.elements.lastItem.text);
    viewMoreLink.appendChild(viewMoreText);
    lastItem.appendChild(viewMoreLink);
    this.generatedResultsGroup.push(lastItem);
  }


  highLightResults(resultText) {
    var re = new RegExp(this.element.getElementsByClassName(this.options.elements.textfield)[0].getAttribute("value"), "gi");
    return resultText.replace(re, '<b>$&</b>');
  }

  renderResults() {
    this.element.setAttribute(this.options.attributes.tabindex.name, this.options.attributes.tabindex.zero);

    for (let j = 0; j < this.element.children.length; j++) {
      if (this.element.children[j].classList.contains(this.options.elements.resultsMenu)) {
        var resultsMenu = this.element.children[j];
        if (this.generatedResults.length && this.generatedResultsGroup.length) {
          for (let d = 0; d < this.generatedResultsGroup.length; d++) {
            resultsMenu.appendChild(this.generatedResultsGroup[d]);
          }
        }
        resultsMenu.setAttribute(this.options.attributes.tabindex.name, this.options.attributes.tabindex.negative);
      }

      if (this.element.children[j].classList.contains(this.options.elements.textfield)) {
        var predictiveTextValue = this.element.children[j];
      }

      if (this.element.children[j].classList.contains(this.options.elements.label)) {
        var predictiveTextLabel = this.element.children[j];
      }
    }

    this.allSearchBox = {
      predictiveText: this.element,
      menu: resultsMenu,
      value: predictiveTextValue,
      label: predictiveTextLabel,
    }

    this.resultsOpen();
  }

  resultsOpen() {
    //var focusHeight;
    var displayedChildren = this.allSearchBox.menu.children;
    var visibleChildren = this.predictiveTextCheckDisplay(displayedChildren);
    this.allSearchBox.predictiveText.classList.add(this.options.modifiers.open);
    var menuHeight = visibleChildren * (this.allSearchBox.predictiveText.offsetHeight + 1);
    var diffClientEl =
      document.documentElement.clientHeight -
      (this.menuOffset(this.allSearchBox.menu).top + this.allSearchBox.menu.scrollHeight + (this.allSearchBox.predictiveText.offsetHeight + 1) - 1);
      this.allSearchBox.menu.style.height = 'auto';//menuHeight + 'px';
    /*if (diffClientEl >= 0) {
      this.allSearchBox.menu.style.height = 'auto';//menuHeight + 'px';
      //focusHeight = menuHeight + this.allSearchBox.predictiveText.offsetHeight;
    } else {
      var spaceMultiplier = Math.round(diffClientEl / (this.allSearchBox.predictiveText.offsetHeight + 1));
      var botSpace = spaceMultiplier * (this.allSearchBox.predictiveText.offsetHeight + 1);
      var generatedHeight = menuHeight + botSpace - 1;
      if (generatedHeight > 112) {
        this.allSearchBox.menu.style.height = generatedHeight + 'px';
        //focusHeight = generatedHeight + this.allSearchBox.predictiveText.offsetHeight;
      } else if (generatedHeight <= 112) {
        this.allSearchBox.menu.style.height = this.allSearchBox.predictiveText.offsetHeight * 2 + 'px';
        //focusHeight = this.allSearchBox.predictiveText.offsetHeight * 2 + this.allSearchBox.predictiveText.offsetHeight;
      }
    }*/
  }

  // all visible children
  predictiveTextCheckDisplay(displayedChildren) {
    var visibleChildrenCount = 0;
    for (let i = 0; i < displayedChildren.length; i++) {
      if (displayedChildren[i].style.display !== 'none') {
        visibleChildrenCount++;
      }
    }
    return visibleChildrenCount;
  }

  resultsClose() {
    /**
     * cmendoza:
     * For some reason, the blur event in the input field triggers before the click event on item__more.
     * It doesn't happen with the item links, only with the item__more link. 
     * Tested by adding a new "last item" and the result was the same.
     */
    setTimeout(() => {
      if (this.allSearchBox != null && this.allSearchBox.predictiveText.classList.contains(this.options.modifiers.open)) {
        this.allSearchBox.menu.removeAttribute(this.options.attributes.style);
        this.allSearchBox.predictiveText.classList.remove(this.options.modifiers.open);
        this.generatedResults = [];
        this.generatedResultsGroup = [];
      }
    }, 500);
    
  }

  // calculating position of predictiveText menu when opening predictiveText
  menuOffset(menu) {
    let rect = menu.getBoundingClientRect();
    return {
      top: rect.top,
    };
  }
}

export default PredictiveText;
