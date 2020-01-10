import Component from '../../../js/sk.component';

class MegaMenu extends Component {
  static options = {

    elements: {
      currentComponent: '.modal',
      closeModal: '.modal__button--close',
      megaMenuOpt: '.modal__nav__item a',
      ulContainer: '.modal__nav__container'
    },
     attributes: {
      dataValue: '[data-megamenu-trigger]',
      dataValue1: '[data-mega-dismiss]'
     },
     modifiers: {
      modalIn: 'modal--in',
      showIt: 'show'
     },
     dataHelpers: {
       isOpen: false
     }

  }

  constructor(options) {
    super(options);
    this.options.dataHelpers.triggerBtnEl = document.querySelectorAll(this.options.attributes.dataValue);
    this.options.dataHelpers.dimissBtnEl = document.querySelectorAll(this.options.attributes.dataValue1);


    //get current component
    this.options.dataHelpers.megaMenuComponentEl = document.querySelectorAll(this.options.elements.currentComponent);
    this.megaMenuListItems = document.querySelectorAll(this.options.elements.ulContainer);
    this.currentMegaMenuShow = this.options.currentMegaMenuInit || this.onOpen
    this.currentMegaMenuHide = this.options.currentMegaMenuHide || this.onClose
    this.exportJsonData = this.options.exportJsonData || function () {}
    this.init();
  }

  init () {
    var dataResponse;

    if (this.options.dataHelpers.megaMenuComponentEl != null) {;
      [...this.options.dataHelpers.megaMenuComponentEl].forEach((comp) => {
        const compId = Math.floor(Math.random() * 9999);
        comp.dataset.megaMenuSingle_id = compId;
      })
    }

    if (this.options.dataHelpers.triggerBtnEl != null) {;
      [...this.options.dataHelpers.triggerBtnEl].forEach((btn) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault()

          // instanciate lightbox when this button is pressed
          this.handleEnabled(event);
        })
      })
    }

    if (this.options.dataHelpers.dimissBtnEl != null) {;
      [...this.options.dataHelpers.dimissBtnEl].forEach((btn) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault()

          // instanciate lightbox when this button is pressed
          this.handleEnabled(event);
        })
      })
    }
    this.componentDataInit();

  }

  componentDataInit() {
    var that = this;
    fetch('https://jswzjk9f.openweb.bbva/experience/megamenu.json').then(function(response) {
      if(response.ok) {
        response.json().then(function(json) {
          that.dataResponse = json;
          that.beforeShowMegaMenu();
          that.exportJsonData(json);
        });
      } else {
        console.log('Network request failed with response ' + response.status + ': ' + response.statusText);
      }
    });
  }

  beforeShowMegaMenu() {
    var that = this;

    for (const item in that.dataResponse) {
        var test = that.dataResponse[item];

        var li = document.createElement('li');
        var anchor = document.createElement('a');
        var img = document.createElement('img');
        var span = document.createElement('span');
        this.megaMenuListItems[0].appendChild(li).className = 'modal__nav__item';
        anchor.className = 'modal__animated-anchor';
        anchor.id = 'modal-'+test.name.replace(/ /g,"-").toLowerCase();
        anchor.href = test.link;

        // add active if test.link matches domain url
        if(window.location) {
          if(window.location.origin.indexOf(test.link) > -1) {
            anchor.classList.add('active');
          }
        }

        anchor.appendChild(img).setAttribute('src', test.img);
        anchor.appendChild(span).innerHTML = test.name;

        li.appendChild(anchor);
       }

    // test if this is a even or odd number
    let isEven = (that.dataResponse.length % 2 === 0) ? true : false;
    const container = document.querySelector('.modal__nav__container');
    if(isEven) {
      container.classList.add('even');
    }else {
      container.classList.add('odd');
    }
  }

  handleEnabled(ele) {
    if (!this.options.dataHelpers.isOpen) {
      this.currentMegaMenuShow(ele);
    } else {
      this.currentMegaMenuHide(ele);
    }
  }

  onOpen(ele){
    this.options.dataHelpers.isOpen = true;
      var menuCount = 0;
      this.modal = document.querySelector(ele.currentTarget.dataset.megamenuTrigger);
      this.listOfMenuOptions = document.querySelectorAll(this.options.elements.megaMenuOpt);
      this.modal.classList.add(this.options.modifiers.modalIn);
      this.listOfMenuOptions.forEach(function(el){
        setTimeout(function(){
          el.classList.add('show');
        },250 * menuCount);
        menuCount++;
      });


      // We hold the current target in memory
      var targetRef = event.currentTarget;
    }

    onClose(ele) {
      this.options.dataHelpers.isOpen = false;
        var menuCount = 0;
        this.modal.classList.remove(this.options.modifiers.modalIn);
        this.listOfMenuOptions.forEach(function(el){
          setTimeout(function(){
            el.classList.remove('show');
          },250 * menuCount);
          menuCount++;
        });
      }
}

export default MegaMenu
