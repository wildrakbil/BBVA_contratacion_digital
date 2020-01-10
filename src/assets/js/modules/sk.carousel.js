import Component from '../../../js/sk.component';

class Carousel extends Component {

  static options = {
    carousel: null,
    height: 500,
    slides: null,
    index: null,
    slidenav: true,
    timer: null,
    setFocus: null,
    animationSuspended: null,
    startAnimated: false,
    isAnimating: false,
    dataTarget: '[data-carousel-target]',
    autoInstantiate: true,
    animate:false,
    nextButtonClass: '.btn-next',
    prevButtonClass: '.btn-prev'
  }

  constructor(options) {
    super(options);

    if(this.options.autoInstantiate) this.init()
  }

  init() {

    // select carousel
    this.carousel = document.querySelectorAll(this.options.dataTarget)[0];

    if(this.carousel == undefined || this.carousel.length == 0) {
      // throw new Error('No Carousel of selector '+ this.options.dataTarget +' was found on page')
      return false
    }

    // Set the height for the Carousel
    this.carousel.children[0].style.height = this.options.height + 'px';

    // find children to create slides
    this.slides = this.carousel.querySelectorAll('.slide');
    this.carousel.className = 'active carousel';

    // create controls for buttons
    const ctrls = document.createElement('ul');
    ctrls.className = 'controls';

    // buttons for next and prev
    const buttonRight = document.createElement('button');
          buttonRight.className = this.options.nextButtonClass.replace('.', '');
    const buttonLeft = document.createElement('button');
          buttonLeft.className = this.options.prevButtonClass.replace('.', '');

    // create and add buttons to ctrl list
    var li = document.createElement('li');
    li.appendChild(buttonLeft)
    ctrls.appendChild(li)

    var li = document.createElement('li');
    li.appendChild(buttonRight)
    ctrls.appendChild(li)

    // add events to buttons of next and prev
    ctrls.querySelector(this.options.prevButtonClass).addEventListener('click', () => {

      // On click go to the prev slide
      this.prevSlide(true);
    });

    ctrls.querySelector(this.options.nextButtonClass).addEventListener('click', () => {

      // On click go to the next slide
      this.nextSlide(true);

    });

    ///////////////////////
    // Swipe Functionality
    /////////////////////
     let startX;

    document.querySelector('.slide').addEventListener('touchstart',()=>{
        startX = event.touches[0].clientX;
        console.log(startX);
    });

    document.querySelector('.slide').addEventListener('touchmove', function(event){

        var touch = event.touches[0];
        console.log('touch '+ touch.clientX);

        // Get the difference in a negative value;
        var change = startX - touch.clientX;
        console.log('change '+ change);
        console.log('startX ' + startX);

        //we get the negative
        this.style.transition = 'all 0.2s';
        this.style.left = '-' + change + 'px';
        // p2.style.display = 'block';
        //p2.style.left = (window.innerWidth - change) + 'px';
         event.preventDefault();
      });








    // We add the ctrl ul to the carousel
    document.querySelector('.carousel').appendChild(ctrls);

    // if we want the slidenav or for the carousel to start animation automatically,
    // we create the slidenav
    if (this.options.slidenav || this.options.animate) {

      this.slidenav = document.createElement('ul');
      this.slidenav.className = 'slidenav';

      // If the carousel is automatically animating, we create the play/pause button
      if (this.options.animate) {
        var li = document.createElement('li');
        if (this.options.startAnimated) {
          li.innerHTML = '<button data-action="stop"><span class="visuallyhidden"> </span></button>';
        } else {
          li.innerHTML = '<button data-action="start"><span class="visuallyhidden"> </span></button>';
        }
        this.slidenav.appendChild(li);
      }

      // if we chose the slidenav, we add a button control for each slide as a circle in our carousel
      if (this.options.slidenav) {

        this.slides.forEach((el, i)=>{
          var li = document.createElement('li');
          var klass = (i===0) ? 'class="current" ' : '';
          var kurrent = (i===0) ? ' <span class="visuallyhidden">(Current Item)</span>' : '';

          // we add each cirlce to our list
          li.innerHTML = '<button '+ klass +'data-slide="' + i + '"><span class="visuallyhidden"></span> ' + (i+1) + kurrent + '</button>';
          this.slidenav.appendChild(li);

        });

      }

      // we add the slidenav to the carousel
      this.carousel.className = 'active carousel--basic with-slidenav';
      document.querySelector('.carousel').appendChild(this.slidenav);
    }

    // We select all the buttons from the slidenav
    let buttons = document.querySelectorAll('.slidenav button');

    buttons.forEach((button)=>{
      button.addEventListener('click', ()=>{

        // every button we click with [data-slide] will stop the animation
        if (button.getAttribute('data-slide')) {
          this.stopAnimation();

          // we set the slides
          this.setSlides(button.getAttribute('data-slide'), true);

        } else if (button.getAttribute('data-action') == "stop") {

          this.stopAnimation();

        } else if (button.getAttribute('data-action') == "start") {

          this.startAnimation();
        }

      });
    });

    var liveregion = document.createElement('div');
    liveregion.setAttribute('aria-live', 'polite');
    liveregion.setAttribute('aria-atomic', 'true');
    liveregion.setAttribute('class', 'liveregion visuallyhidden');
    this.carousel.appendChild(liveregion);

      this.slides[0].parentNode.addEventListener('transitionend', function (event) {
        var slide = event.target;
        slide.classList.remove('in-transition');
        if (slide.classList.contains('current') )  {
          if(this.setFocus) {
            slide.setAttribute('tabindex', '-1');
            slide.focus();
            setFocus = false;
          }
        }
      });

      this.carousel.addEventListener('mouseenter', this.suspendAnimation);
      this.carousel.addEventListener('mouseleave', (event)=> {
        if (this.animationSuspended) {
          this.startAnimation();
        }
      });

      this.carousel.addEventListener('focusin', (event)=> {
        if (!event.target.classList.contains('slide')) {
          this.suspendAnimation();
        }
      });
      this.carousel.addEventListener('focusout', (event)=> {
        if (!event.target.classList.contains('slide') && this.animationSuspended) {
          this.startAnimation();
        }
      });

    this.index = 0;
    this.setSlides(this.index);

    if (this.options.startAnimated) {
      this.timer = setTimeout(this.nextSlide.bind(this), 5000);
    }

  }

  setSlides(new_current, setFocusHere, transition, announceItemHere) {
    this.setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;
    this.announceItem = typeof announceItemHere !== 'undefined' ? announceItemHere : false;
    transition = typeof transition !== 'undefined' ? transition : 'none';

    new_current = parseFloat(new_current);

    var length = this.slides.length;
    var new_next = new_current+1;
    var new_prev = new_current-1;

    if(new_next === length) {
      new_next = 0;
    } else if(new_prev < 0) {
      new_prev = length-1;
    }

    for (var i = this.slides.length - 1; i >= 0; i--) {
      this.slides[i].className = "slide";
    }

    this.slides[new_next].className = 'next slide' + ((transition == 'next') ? ' in-transition' : '');
    this.slides[new_next].setAttribute('aria-hidden', 'true');

    this.slides[new_prev].className = 'prev slide' + ((transition == 'prev') ? ' in-transition' : '');
    this.slides[new_prev].setAttribute('aria-hidden', 'true');


    this.slides[new_current].className = 'current slide';
    this.slides[new_current].removeAttribute('aria-hidden');


    if (this.announceItem) {
      //this.carousel.querySelector('.liveregion').textContent = 'Item ' + (new_current + 1) + ' of ' +   this.slides.length;
    }

    if(this.options.slidenav) {
      var buttons = document.querySelectorAll('.slidenav button[data-slide]');
      for (var j = buttons.length - 1; j >= 0; j--) {
        buttons[j].className = '';
        buttons[j].innerHTML = '<span class="visuallyhidden"></span> ';
      }
      buttons[new_current].className = "current";
      buttons[new_current].innerHTML = '<span class="visuallyhidden"></span> ' + ' <span class="visuallyhidden"></span>';
    }

    this.index = new_current;
    setTimeout(() => {
      this.options.isAnimating = false;
    }, 1000)
  }

  nextSlide(announceItem) {
    //console.log('Next Slide');
    announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

    if(this.options.isAnimating) return false;

    var length = this.slides.length,
    new_current = this.index + 1;
    if(new_current === length) {
      new_current = 0;
    }
    this.options.isAnimating = true;
    this.setSlides(new_current, false, 'prev', announceItem);

    if (this.options.animate) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {this.nextSlide()}, 5000);
    }

  }

  prevSlide(announceItem) {
    //console.log('Prev Slide');
      announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

      if(this.options.isAnimating) return false;

      var length = this.slides.length,
      new_current = this.index - 1;

      if(new_current < 0) {
        new_current = length-1;
      }
      this.options.isAnimating = true;
      this.setSlides(new_current, false, 'next', announceItem);
      clearTimeout(this.timer);
      //this.timer = setTimeout(() => { this.nextSlide() }, 5000);
  }

  stopAnimation() {
    clearTimeout(this.timer);
    this.options.animate = false;
    this.animationSuspended = false;
    if (this.options.animate) {
      var caro = document.querySelector('[data-action]');
      console.log(caro);
      caro.innerHTML = '<span class="visuallyhidden"> </span>';
      caro.setAttribute('data-action', 'start');
    }
  }

  startAnimation() {
    this.options.animate = true;
    this.animationSuspended = false;
    this.timer = setTimeout(this.nextSlide.bind(this), 5000);
    if (this.options.animate) {
      var caro = document.querySelector('[data-action]');
      caro.innerHTML = '<span class="visuallyhidden"> </span>';
      caro.setAttribute('data-action', 'stop');
    }
  }

  suspendAnimation() {
    if(this.animate) {
      clearTimeout(this.timer);
      this.animate = false;
      this.animationSuspended = true;
    }
  }


}



export default Carousel
