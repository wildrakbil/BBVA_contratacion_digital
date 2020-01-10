// export default Tables
import Component from '../../../js/sk.component';

class Tables extends Component {

  static options = {
    elements: {
      linksTable: '.comparison-table__links'
    },
    attributes: {
      dataValue: '[data-trigger-btn]'
    },
    modifiers: {
      hideRows: 'hide-rows',
      showRows: 'show-rows',
      simpleDown: 'ui-unfold',
      simpleUp: 'ui-fold'
    },
    dataHelpers: {
      onOpen: false
    }
  }

  constructor(options) {
    super(options);

    this.options.dataHelpers.triggerBtnEl = document.querySelectorAll(this.options.attributes.dataValue);
    this.options.dataHelpers.linksTableEl = document.querySelectorAll(this.options.elements.linksTable)
    this.linksTableBtn = this.options.elements.linksTableBtn || this.showMoreToggle
    this.beforeShowTableData = this.options.dataHelpers.beforeShowTableData || function () {}
    this.afterShowTableData = this.options.dataHelpers.afterShowTableData || function () {}

    this.init();

  }

  init() {

    //Add dynamic id to tbody
    if (this.options.dataHelpers.linksTableEl != null) {;
      [...this.options.dataHelpers.linksTableEl].forEach((sec) => {
        const secId = Math.floor(Math.random() * 9999);
        sec.dataset.linksTable_id = secId;
      })
    }


    //Add events
    if (this.options.dataHelpers.triggerBtnEl != null) {;
      [...this.options.dataHelpers.triggerBtnEl].forEach(showBtn => {
        showBtn.addEventListener('click', (event) => {
          event.preventDefault();
          this.tableIsLoaded(event)
        })
      })
    }


  }

  tableIsLoaded(ele) {
    if (!this.options.dataHelpers.onOpen) {
      this.linksTableBtn(ele)
    }
  }

  // toggle event for the show more button and Icon toggle.
  showMoreToggle(ele) {

    //table element from trigger button data atttribute
    this.tableEl = document.querySelector(ele.currentTarget.dataset.triggerBtn)

    //before show data function
    this.beforeShowTableData()


    if (this.tableEl != null) {
      const toggleRows = this.tableEl.firstElementChild.children[1];
      const showToggle = this.tableEl.children[1].firstElementChild.firstElementChild;


      // Toggle more rows after the 4th row
      toggleRows.classList.toggle(this.options.modifiers.showRows)
      toggleRows.classList.toggle(this.options.modifiers.hideRows)


      // trigger button icon and text manipulation
      if (showToggle.innerHTML === 'Show More') {
        showToggle.innerHTML = 'Show Less';
        showToggle.classList.remove(this.options.modifiers.simpleDown);
        showToggle.classList.add(this.options.modifiers.simpleUp);

      } else {
        showToggle.innerHTML = 'Show More';
        showToggle.classList.remove(this.options.modifiers.simpleUp);
        showToggle.classList.add(this.options.modifiers.simpleDown);
      }

    } else {
      null;
    }

    //after show data function
    this.afterShowTableData()
  }

}


export default Tables