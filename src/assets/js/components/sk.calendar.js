import Component from '../../../js/sk.component';

class Calendar extends Component {
  static options = {

    // label text for days and buttons
    labels: {
      previousMonth : 'Previous Month',
      nextMonth     : 'Next Month',
      clearDateBTN  : 'Clear Date Selection',
      selecDateBTN  : 'Select',
      startDate     : 'Start Date',
      endDate       : 'End Date',
      singleDate    : 'Single Date',
      selectDates   : 'Select your dates',
      chooseADate   : 'Choose a date',
      from          : 'from',
      to            : 'to',
      ariaLabel     : 'Use the arrow keys to pick a date', // data-attribute on the input field with an aria assistance tekst (only applied when `bound` is set)
      months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
      days          : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      days3Letters  : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      daysShort     : ['S','M','T','W','T','F','S' ],
    },

    // bind the picker to a form field
    field: null,

    // bind the picker to a form field with select button
    fieldSelectButton: null,

    // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
    bound: undefined,

    // position of the datepicker, relative to the field (default to bottom & left 'bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
    position: 'bottom left',

    // automatically fit in the viewport even if it means repositioning from the position option
    reposition: true,

    // the default output format for `.toString()` and `field` value
    formatSlashes: false, // mm/dd/yy
    formatShortMonthName: false, // MM DD, YYYY

    // the toString function which gets passed a current date object and format and returns a string
    toString: null,

    // used to create date object from current input string
    parse: null,

    // the initial date to view when first opened
    defaultDate: null,

    // make the `defaultDate` the initial selected value
    setDefaultDate: false,

    // first day of week (0: Sunday, 1: Monday etc)
    firstDay: 0,

    // the minimum/earliest date that can be selected
    minDate: null,

    // the maximum/latest date that can be selected
    maxDate: null,

    // number of years either side, or array of upper/lower range
    yearRange: 10,

    // show week numbers at head of row
    showWeekNumber: false,

    // Week picker mode
    pickWholeWeek: false,

    // used internally (don't config outside)
    minYear: 0,
    maxYear: 9999,
    minMonth: undefined,
    maxMonth: undefined,
    startRange: null,
    endRange: null,
    isRTL: false,

    // Additional text to append to the year in the calendar title
    yearSuffix: '',

    // Render the month after year in the calendar title
    showMonthAfterYear: false,

    // Render days of the calendar grid that fall in the next or previous month
    showDaysInNextAndPreviousMonths: false,

    // Allows user to select days that fall in the next or previous month
    enableSelectionDaysInNextAndPreviousMonths: false,

    // how many months are visible
    numberOfMonths: 1,

    // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`), only used for the first display or when a selected date is not visible
    mainCalendar: 'left',

    // Specify a DOM element to render the calendar in
    container: undefined,

    // Blur field when date is selected
    blurFieldOnSelect : true,

    // callback function
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null,

    // Enable keyboard input
    keyboardInput: true
  };
  
  constructor(options) {
    super(options);
  }
}

export default Calendar;
