import Component from '../../../js/sk.component';

class LightBox extends Component {
  static options = {
  initSelector: '[data-lightbox]',
    elements: {
      currentComponent: '.light-box',
      currentCancelBtn: '.light-box__cancel-button',
      currentExitBtn: '.close-wrapper'
    },
    attributes: {
      dataValue: '[data-lightbox-trigger]'
    },
    modifiers: {
      lightBoxShow: 'light-box-show',
      lightBoxHide: 'light-box-hide',
      slideOut: 'slide-out',
      slideIn: 'slide-in'
    },
    keys: {
      KEYBOARD_TAB: 9,
      ESCAPE: 27
    },
    dataHelpers: {
      isOpen: false,
    }
  }

  static components = new WeakMap();

  constructor(options) {
    super(options);


    //get the trigger button to show lightbox
    this.options.dataHelpers.triggerBtnEl = document.querySelectorAll(this.options.attributes.dataValue);

    //get modal component
    this.options.dataHelpers.lightboxComponentEl = document.querySelectorAll(this.options.elements.currentComponent);

    // component options
    this.beforeClickHandler = this.options.dataHelpers.beforeClickHandler || this.ltOpen
    this.beforeShowLightBox = this.options.dataHelpers.beforeShowLightBox || function () {}
    this.afterHideLightBox = this.options.dataHelpers.afterHideLightBox || this.pauseVid
    this.currentLightboxShow = this.options.currentLightboxInit || this.onOpen
    this.currentLightboxHide = this.options.currentLightboxHide || this.onClose

    this.lightboxInit();
  }

  lightboxInit() {
    // Id for multiple lightbox in same page Small and Large
    if (this.options.dataHelpers.lightboxComponentEl != null) {;
      [...this.options.dataHelpers.lightboxComponentEl].forEach((comp) => {
        const compId = Math.floor(Math.random() * 9999);
        comp.dataset.lightbox_id = compId;

        //close lb on exit btn, cancel btn
        const cancelLb = comp.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
        const closeLb = comp.firstElementChild.firstElementChild.children[1].children[1].firstElementChild.firstElementChild;

        const actionGrp = []
        actionGrp.push(cancelLb, closeLb, comp)

        actionGrp.forEach((exit) => {
          exit.addEventListener('click', (event) => {
              event.preventDefault();
              this.currentLightboxHide(event);
          })
        })
      })
      //close lightbox on background click
      ;[...this.options.dataHelpers.lightboxComponentEl].forEach((comp2) => {
        comp2.firstElementChild.addEventListener('click', (event) => {
          event.stopPropagation();
        })
      })
    }

    //setup click events based of button if button is passed
    if (this.options.dataHelpers.triggerBtnEl != null) {;
      [...this.options.dataHelpers.triggerBtnEl].forEach((btn) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault()

          // instanciate lightbox when this button is pressed
          //this.beforeClickHandler();
          this.handleEnabled(event);
        })
      })
    }
  }

  handleEnabled(ele) {
    if (!this.options.dataHelpers.isOpen) {
      this.currentLightboxShow(ele);
    } else {
      this.currentLightboxHide(ele);
    }
  }

  // When the user clicks the button, open the light box
  onOpen(ele) {

    this.options.dataHelpers.isOpen = true;

    //lightbox element from trigger button data atttribute
    this.lightboxEl = document.querySelector(ele.currentTarget.dataset.lightboxTrigger);

    if (this.lightboxEl != null) {
      this.toggleLightbox = this.lightboxEl;
      this.toggleContent = this.lightboxEl.firstElementChild;

      this.toggleLightbox.classList.remove(this.options.modifiers.lightBoxHide)
      this.toggleLightbox.classList.add(this.options.modifiers.lightBoxShow)
      this.toggleContent.classList.add(this.options.modifiers.slideIn)
      this.toggleContent.classList.remove(this.options.modifiers.slideOut)
    }

    // //  // Handle Tab and focus function
    this.tabAndFocus();
    this.trapTabKey();

  }

  // When the user clicks on <span> (x), close the light box
  onClose() {
    this.options.dataHelpers.isOpen = false;

    if (this.lightboxEl != null) {
      // this.toggleLightbox = this.lightboxEl;
      // this.toggleContent = this.lightboxEl.firstElementChild;

    this.toggleLightbox.classList.remove(this.options.modifiers.lightBoxShow)
    this.toggleLightbox.classList.add(this.options.modifiers.lightBoxHide)
    this.toggleContent.classList.remove(this.options.modifiers.slideIn)
    this.toggleContent.classList.add(this.options.modifiers.slideOut)
    }

    //remove tab and focus
    this.removeTabAndFocus();
     //After lightbox has been closed function
     this.afterHideLightBox();
  }

  //open method
   ltOpen() {

    this.options.dataHelpers.isOpen = true;

    //lightbox element from trigger button data atttribute
    //this.lightboxEl = document.querySelector(ele.currentTarget.dataset.lightboxTrigger);

    if (this.lightboxEl != null) {
      this.toggleLightbox = this.lightboxEl;
      this.toggleContent = this.lightboxEl.firstElementChild;

      this.toggleLightbox.classList.remove(this.options.modifiers.lightBoxHide)
      this.toggleLightbox.classList.add(this.options.modifiers.lightBoxShow)
      this.toggleContent.classList.add(this.options.modifiers.slideIn)
      this.toggleContent.classList.remove(this.options.modifiers.slideOut)
    }

    // Handle Tab and focus function
    this.tabAndFocus();
    this.trapTabKey();

  }

  //Function that handles tab and focus
  tabAndFocus() {

    if (this.lightboxEl != null) {
      this.toggleLightbox = this.lightboxEl;
      this.toggleContent = this.lightboxEl.firstElementChild;

    //when open focus to the content are
    this.toggleContent.focus();

    // //add and remove tab index
    this.exitTab = this.lightboxEl.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    this.cancelTab = this.lightboxEl.firstElementChild.firstElementChild.children[1].children[1].firstElementChild.firstElementChild;

    this.toggleContent.removeAttribute('tabIndex', '-1');
    this.toggleContent.setAttribute('tabIndex', '0');
    this.exitTab.removeAttribute('tabIndex', '-1');
    this.exitTab.setAttribute('tabIndex', '0');
    this.cancelTab.removeAttribute('tabIndex', '-1');
    this.cancelTab.setAttribute('tabIndex', '0');
    }
  }

  // function that removes tab and focus
  removeTabAndFocus() {

    if (this.lightboxEl != null) {
      this.toggleLightbox = this.lightboxEl;
      this.toggleContent = this.lightboxEl.firstElementChild;


    //when open focus to the content are
    this.toggleContent.blur();

    //add and remove tab index
    this.toggleContent.removeAttribute('tabIndex', '0');
    this.toggleContent.setAttribute('tabIndex', '-1');
    this.exitTab.removeAttribute('tabIndex', '0');
    this.exitTab.setAttribute('tabIndex', '-1');
    this.cancelTab.removeAttribute('tabIndex', '0');
    this.cancelTab.setAttribute('tabIndex', '-1');
    }
  }

  // [TAB key] : Forcing the "focus" to remain within a select group of active elements
  // [ESC key] : Closing the active off-screen content
  trapTabKey() {

    if (this.lightboxEl != null) {
      this.toggleContent = this.lightboxEl.firstElementChild;

    // save the last focused item
    const lastfocus = document.activeElement;

    let arr = [];
    arr.push(this.toggleContent);

    // Add a keydown event to each element inside the content
    arr.forEach((ele) => {

      ele.addEventListener('keydown', (e) => {
        var cancel = false;
        let x = e.which || e.keyCode

        switch (x) {
          case this.options.keys.ESCAPE: // ESC
            this.currentLightboxHide();
            lastfocus.focus();
            cancel = true;
            break;
          case this.options.keys.KEYBOARD_TAB: // TAB
            if (e.shiftKey) {
              if (e.target === arr[0].firstElementChild.firstElementChild.firstElementChild) {
                arr[0].children[0].children[1].children[1].children[0].children[0].focus();
                cancel = true;
              }
            } else
            if (e.target === arr[0].children[0].children[1].children[1].children[0].children[0]) {
              arr[0].children[0].children[1].children[1].children[0].children[0].blur();
              arr[0].firstElementChild.firstElementChild.firstElementChild.focus();
              cancel = true;
            }
            break;
        }
        if (cancel) {
          e.preventDefault();
        }
      })
    })
    }
  }

  pauseVid() {
    let video = null;
    video = this.element.querySelector('video');
    if (!video) {
      return;
    } else {
      video.tagName.toLowerCase() === 'video';
      video.pause();
      return;
    }
  }
}

export default LightBox