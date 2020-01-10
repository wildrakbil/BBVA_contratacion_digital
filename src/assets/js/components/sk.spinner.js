import Component from '../../../js/sk.component';
// import anime from "animejs";

class Spinner extends Component {
  static options = {
    elements: {
      spinner_top: '.spinner__top',
      spinner_center: '.spinner__center',
      spinner_bottom: '.spinner__bottom',
      spinner_hidden: '.spinner__hidden'
    },
    type: 'spinner',
    spinner: {
      height: 400,
      width: 250,
      smBoxSize: 48,
      padding: 8
    },
    camino: {
      height: 400,
      width: 300,
      smBoxSize: 48,
    },

  }

  constructor(options) {
    super(options);
    this.init();
  }

  // spinner init
  init() {

    // setup default position of spinner based on spinner type
    if (this.options.type === 'camino') {
      this.caminoInit();
    } else {
      this.spinnerInit();
    }

  }

  spinnerInit() {

    // var myTimeline = anime.timeline({
    //   direction: 'alternate',
    //   loop: 3,
    //   autoplay: false
    // });


    // anime({
    //   targets: this.options.elements.spinner_top,
    //   width: this.options.spinner.width,
    //   translateY: [{
    //       value: this.options.spinner.smBoxSize + this.options.spinner.padding
    //     },
    //     {
    //       value: (this.options.spinner.smBoxSize + this.options.spinner.padding) * 2
    //     }
    //   ]
    // });


    // this.spinnerStep(1);

    // setTimeout(() => {
    //   this.spinnerStep(2);
    // }, 200);

    // setTimeout(() => {
    //   this.spinnerStep(3);
    // }, 700);

    // setTimeout(() => {
    //   this.spinnerStep(2);
    // }, 1200);

    // setTimeout(() => {
    //   this.spinnerStep(1);
    // }, 1700);

    // setTimeout(() => {
    //   this.spinnerStep(2);
    // }, 2200);

    // setTimeout(() => {
    //   this.spinnerStep(4);
    // }, 2700);

    // setTimeout(() => {
    //   this.spinnerStep(2);
    // }, 3200);

    // setTimeout(() => {
    //   this.spinnerInit(1);
    // }, 3700);

    // setTimeout(() => {
    //   this.spinnerStep(2);
    // }, 4000);

  }

  spinnerStep(step) {
    switch (step) {
      case 1:
        anime({
          targets: this.options.elements.spinner_top,
          width: this.options.spinner.width,
          translateY: this.options.spinner.smBoxSize + this.options.spinner.padding
        });
        anime({
          targets: this.options.elements.spinner_center,
          width: this.options.spinner.width,
          translateY: (this.options.spinner.smBoxSize + this.options.spinner.padding) * 2
        });
        anime({
          targets: this.options.elements.spinner_bottom,
          width: this.options.spinner.width,
          translateY: (this.options.spinner.smBoxSize + this.options.spinner.padding) * 3
        });
        break;
      case 2:

        anime({
          targets: this.options.elements.spinner_top,
          width: this.options.spinner.width,
          height: this.options.spinner.smBoxSize,
          translateY: (this.options.spinner.smBoxSize + this.options.spinner.padding) * 2,
          zIndex: 3
        });
        anime({
          targets: this.options.elements.spinner_center,
          width: this.options.spinner.width,
          height: this.options.spinner.smBoxSize,
          translateY: (this.options.spinner.smBoxSize + this.options.spinner.padding) * 2,
          zIndex: 2
        });
        anime({
          targets: this.options.elements.spinner_bottom,
          width: this.options.spinner.width,
          height: this.options.spinner.smBoxSize,
          translateY: (this.options.spinner.smBoxSize + this.options.spinner.padding) * 2,
          zIndex: 1
        });

        break;

      case 3:
        anime({
          targets: this.options.elements.spinner_top,
          width: this.options.spinner.width,
          translateY: this.options.spinner.smBoxSize + this.options.spinner.padding
        });
        anime({
          targets: this.options.elements.spinner_bottom,
          width: this.options.spinner.width,
          height: this.options.spinner.smBoxSize * 3,
          translateY: (this.options.spinner.smBoxSize + this.options.spinner.padding) * 2
        });
        break;
      case 4:
        anime({
          targets: this.options.elements.spinner_top,
          width: this.options.spinner.width,
          height: this.options.spinner.smBoxSize * 3,
          translateY: this.options.spinner.smBoxSize + this.options.spinner.padding
        });

        anime({
          targets: this.options.elements.spinner_center,
          zIndex: -1
        });

        anime({
          targets: this.options.elements.spinner_bottom,
          width: this.options.spinner.width,
          height: this.options.spinner.smBoxSize,
          translateY: (this.options.spinner.smBoxSize + this.options.spinner.padding) * 3
        });
        break;

      default:
        break;
    }
  }


  // caminoInit() {

  //   // First Setup

  //   // top small box
  //   anime({
  //     targets: this.options.elements.spinner_top,
  //     translateX: this.options.camino.width - this.options.camino.smBoxSize
  //   });

  //   // middle large box
  //   anime({
  //     targets: this.options.elements.spinner_center,
  //     translateY: this.options.camino.smBoxSize,
  //     width: this.options.camino.width,
  //     height: this.options.camino.height * (1 / 2)
  //   });

  //   // small box
  //   anime({
  //     targets: this.options.elements.spinner_bottom,
  //     translateY: this.options.camino.height * (1 / 2) + this.options.camino.smBoxSize
  //   });

  //   // hidden box
  //   anime({
  //     targets: this.options.elements.spinner_hidden,
  //     translateY: this.options.camino.height * (1 / 2) + this.options.camino.smBoxSize,
  //     scale: 0
  //   });


  //   setTimeout(() => {
  //     this.caminoTimeLine();
  //   }, 2000);
  // }

  // caminoTimeLine() {
  //   anime({
  //     targets: this.options.elements.spinner_top,
  //     transformOrigin: 'top right 0',
  //     translateX: this.options.camino.width - this.options.camino.smBoxSize,
  //     scale: 0,
  //     opacity: 0
  //   });

  //   anime({
  //     targets: this.options.elements.spinner_center,
  //     transformOrigin: 'top right 0',
  //     width: this.options.camino.smBoxSize,
  //     height: this.options.camino.smBoxSize,
  //     translateY: 0,
  //     translateX: this.options.camino.width - this.options.camino.smBoxSize
  //   });

  //   anime({
  //     targets: this.options.elements.spinner_bottom,
  //     translateY: this.options.camino.smBoxSize,
  //     width: this.options.camino.width,
  //     height: this.options.camino.height * (1 / 2)
  //   });

  //   anime({
  //     targets: this.options.elements.spinner_hidden,
  //     translateY: this.options.camino.height * (1 / 2) + this.options.camino.smBoxSize,
  //     scale: 1
  //   });
  // }
}

export default Spinner;