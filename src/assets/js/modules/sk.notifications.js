import Component from '../../../js/sk.component';

class Notifications extends Component {
  static options = {
    elements: {
      currentComponent: '.notifications'
    },
    attributes: {
      dataValue: '[data-dismiss]',
      dataValue2: '[data-notifications-trigger]'
    },
    modifiers: {
      showNot: 'show-notification',
      hideNot: 'hide-notification'
    },
    keys: {
      KEYBOARD_TAB: 9
    },
    dataHelpers: {
      onOpen: false,
    }
  }
  constructor(options) {
    super(options);

    //Get the close action button
    this.options.dataHelpers.dismissBtnEl = document.querySelectorAll(this.options.attributes.dataValue);

    //Get the open action button
    this.options.dataHelpers.triggerBtnEl = document.querySelectorAll(this.options.attributes.dataValue2);

    //Get the notification component
    this.options.dataHelpers.notificationComponent = document.querySelectorAll(this.options.elements.currentComponent);

    // component options
    this.beforeClickHandler = this.options.beforeClickHandler || function () {}
    this.afterShowNotification = this.options.afterShowLightBox || function () {}
    this.afterHideNotification = this.options.afterHideLightBox || function () {}
    this.currentNotificationShow = this.options.currentLightboxInit || this.onOpen
    this.currentNotificationHide = this.options.currentLightboxHide || this.onClose

    this.init();
  }

  init() {

    //Add an id to each notification
    if (this.options.dataHelpers.notificationComponent != null) {;
      [...this.options.dataHelpers.notificationComponent].forEach((not) => {
        const compId = Math.floor(Math.random() * 9999);
        not.dataset.notification_id = compId;
      })
    }

    //setup click events based of button if button is passed
    if (this.options.dataHelpers.triggerBtnEl != null) {

      ;
      [...this.options.dataHelpers.triggerBtnEl].forEach((triggerBtn) => {
        triggerBtn.addEventListener('click', (event) => {
          event.preventDefault()

          // instanciate bar when this button is pressed
          this.beforeClickHandler(event);
          this.handleEnabled(event);
        })
      })

    }

    // Exit button (x) click 
    if (this.options.dataHelpers.dismissBtnEl !== null) {
      ;
      [...this.options.dataHelpers.dismissBtnEl].forEach((closeBtn) => {
        closeBtn.addEventListener('click', (event) => {
          event.preventDefault()
          this.currentNotificationHide(event);
        })
      })

    }
  }

  handleEnabled(ele) {
    if (!this.options.dataHelpers.onOpen) {
      this.currentNotificationShow(ele);
    } else {
      this.currentNotificationHide(ele);
    }
  }

  // Open Notification
  onOpen(ele) {
    this.options.dataHelpers.onOpen = true;

    this.notificationEl = document.querySelector(ele.currentTarget.dataset.notificationsTrigger)

    this.toggleNotification = this.notificationEl.firstElementChild;

    this.toggleNotification.classList.remove(this.options.modifiers.hideNot)
    this.toggleNotification.classList.add(this.options.modifiers.showNot)

    //focus and tab
    this.tabAndFocus();
    this.trapTabKey(e);

    this.afterShowNotification()
  }

  //Close Notification
  onClose(ele) {
    this.options.dataHelpers.onOpen = false;

    //targets the data-dismiss attr in order to close the notification
    this.dismissBtn = document.querySelector(ele.currentTarget.dataset.dismiss)

    this.dismissBtn.firstElementChild.classList.remove(this.options.modifiers.showNot)
    this.dismissBtn.firstElementChild.classList.add(this.options.modifiers.hideNot)

    //remove focus and tab 
    //Remove this method when notification its used without a trigger button
    this.removeTabAndFocus()
  }

  //unction that handles tab and focus
  tabAndFocus() {
    //blur on trigger btn
    this.targetRef = event.currentTarget;
    
    //when open focus to the notification 
    this.toggleNotification.focus();

    this.closeTabEl = this.toggleNotification.firstElementChild.firstElementChild.children[2].firstElementChild;
    this.linkTabEl = this.toggleNotification.firstElementChild.firstElementChild.children[3].firstElementChild;

    

    //add and remove tabIndex
    this.toggleNotification.removeAttribute('tabIndex', '-1')
    this.toggleNotification.setAttribute('tabIndex', '0')
    this.closeTabEl.removeAttribute('tabIndex', '-1')
    this.closeTabEl.setAttribute('tabIndex', '0')
    this.linkTabEl.removeAttribute('tabIndex', '-1')
    this.linkTabEl.setAttribute('tabIndex', '0')
  }

  //function that removes tab and focus
  removeTabAndFocus() {

    //when open focus to the notification 
    this.toggleNotification.blur()

    //focus on trigger btn
    this.targetRef.focus();


    //add and remove tabIndex
    this.toggleNotification.removeAttribute('tabIndex', '0')
    this.toggleNotification.setAttribute('tabIndex', '-1')
    this.closeTabEl.removeAttribute('tabIndex', '0')
    this.closeTabEl.setAttribute('tabIndex', '-1')
    this.linkTabEl.removeAttribute('tabIndex', '0')
    this.linkTabEl.setAttribute('tabIndex', '-1')
  }

  //[TAB key] : Forcing the "focus" to remain within a select group of active elements  
  //[ESC key] : Closing the active off-screen content
  trapTabKey(e) {
    const lastfocus = document.activeElement;
    let arr = []
    arr.push(this.notificationEl)

    // Add a keydown event to each element inside the content
    arr.forEach((ele) => {
      ele.addEventListener('keydown', (e) => {
        var cancel = false;
        let x = e.which || e.keyCode

        switch (x) {
          case this.options.keys.KEYBOARD_TAB: // TAB
            if (e.shiftKey) {
              if (e.target === arr[0].firstElementChild.firstElementChild.firstElementChild.children[2].firstElementChild) {
                arr[0].firstElementChild.firstElementChild.firstElementChild.children[3].firstElementChild.focus();
                cancel = true;
              }
            } else
            if (e.target === arr[0].firstElementChild.firstElementChild.firstElementChild.children[3].firstElementChild) {
              arr[0].firstElementChild.firstElementChild.firstElementChild.children[3].firstElementChild.blur();
              arr[0].firstElementChild.firstElementChild.firstElementChild.children[2].firstElementChild.focus();
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

export default Notifications