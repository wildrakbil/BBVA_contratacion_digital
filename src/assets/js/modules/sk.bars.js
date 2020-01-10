import Component from '../../../js/sk.component';
import CustomAnimateTo from '../../../js/animateTop';

class Bars extends Component {
    static options = {
        type: 'static',

        //reveal sticky bar value
        revealValue: 100,

        targetSelector: null,
        isEnabled: false,
        dataTarget: '[data-bars-target]',
        currentEventHandler: null

    }

    constructor(options) {
        super(options);

        this.currentBarTypeInit = null;
        this.targetButton = document.querySelector(this.options.dataTarget)

        if(this.targetButton == null) {
            // could not find bars
            return false;
        }

        this.afterInit = this.options.afterInit || function(){};
        this.afterDisable = this.options.afterDisable || function(){};
        this.beforeHandler = this.options.beforeHandler || function(){};

        switch(this.options.type) {
            case 'static':
                    //Select Bar and Reveal Value
                    this.options.revealSimpleSelected = document.getElementById(this.targetButton.dataset.barsTarget)
                    this.options.revealValueSelected = this.options.revealValue

                    //Instantiate/Disable functoins
                    this.currentBarTypeInit = this.enableReveal;
                    this.currentBarTypeDisable = this.disableReveal;

                    //Add/Remove Event
                    this.options.currentEventHandler = this.scrollEvent.bind(this);
                break;
            case 'progress':
                    //Select Bar and Bar Height
                    this.options.simpleProgressSelected = document.getElementById(this.targetButton.dataset.barsTarget)
                    this.options.progressBarHeight = this.options.simpleProgressSelected.offsetTop

                    //Instantiate/Disable Functions
                    this.currentBarTypeInit = this.enableProgress;
                    this.currentBarTypeDisable = this.disableProgress;

                    //Add/Remove Event
                    this.options.currentEventHandler = this.progressScrollEvent.bind(this)

                break;
            case 'return':
                    //return bar
                    this.options.returnBarSelected = document.getElementById(this.options.returnBar)

                    this.currentBarTypeInit = this.enableReturn;
                    this.currentBarTypeDisable = this.disableReturn;
                break;
        }

    //setup click events based off button if button is passed
       if (this.targetButton != null) {
           this.targetButton.addEventListener('click', function (event) {
               // instanciate bar when this button is pressed
               this.beforeHandler(event);
               this.handleEnabled();
               window.isDemoBarActive = false;
           }.bind(this))
       }
    }

    handleEnabled(){
        if (this.options.isEnabled == false) {
           this.currentBarTypeInit();
        } else {
           this.currentBarTypeDisable();
        }
    }

    setSticky(value){
        return this.options.isEnabled = value;
    }

    enableReveal() {
        window.addEventListener('scroll', this.options.currentEventHandler)
        this.options.revealSimpleSelected.classList.add('sticky')
        this.options.isEnabled = true;

        this.afterInit();
    }

    disableReveal() {
        this.options.revealSimpleSelected.classList.remove('sticky')
        this.options.revealSimpleSelected.style.top = null;
        this.options.revealSimpleSelected.style.position = 'static';
        window.removeEventListener('scroll', this.options.currentEventHandler);
        this.options.isEnabled = false;

        this.afterDisable();
    }

    scrollEvent() {
        if (document.body.scrollTop > this.options.revealValue || document.documentElement.scrollTop > this.options.revealValue) {
            this.options.revealSimpleSelected.style.top = "0"
            this.options.revealSimpleSelected.style.position = "fixed"
        } else {
            this.options.revealSimpleSelected.style.top = "-100px"
        }
    }

    enableProgress () {
        window.addEventListener('scroll', this.options.currentEventHandler)
        this.options.isEnabled = true;
        this.afterInit();
    }

    disableProgress () {
        window.removeEventListener('scroll', this.options.currentEventHandler)
        this.options.isEnabled = false
        this.options.simpleProgressSelected.children[1].firstElementChild.style.width = null
    }

    progressScrollEvent () {
        let innerHeight = window.innerHeight,
            maxHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight),
            windowHeight = (maxHeight - innerHeight),
            scrollPosition = window.pageYOffset,
            percentScrolled = Math.floor((scrollPosition/windowHeight) * 100)

        this.options.simpleProgressSelected.children[1].firstElementChild.style.width = (percentScrolled + 5) + '%'

        if( (scrollPosition + 50) >= this.options.progressBarHeight) {
            this.options.simpleProgressSelected.classList.add('sticky')
        } else {
            this.options.simpleProgressSelected.classList.remove('sticky')
        }
    }

    enableReturn () {
        this.options.isEnabled = true;

        this.scrollTop();
    }
    scrollTop(e) {

      this.returnBar = Array.from(document.querySelectorAll('#return-top-bar'))
      this.returnBar.forEach(function (e) {

          e.addEventListener('click', () => {
              //swap element ID to top of respected page
              var targetEl = document.getElementById('topofDemoBars');
              var animateNAO = new CustomAnimateTo(targetEl)
          })
      })

        this.afterInit();
    }

    disableReturn () {
        this.options.isEnabled = false;
    }
}



export default Bars;
