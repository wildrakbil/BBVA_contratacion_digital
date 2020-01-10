
import Component from '../../../js/sk.component';

class Cards extends Component {

  static options = {

  }

  constructor(videos) {
    super();
    this.videos = Array.from(document.querySelectorAll('.card__video'));
    //this.videoControls(this.videos);
  }

  videoControls(videoArr,two){
    // videoArr.forEach((e)=>{
    //   // Hide controls
    //   e.children[0].children[0].controls = false;
    //   // Call Click events
    //   this.videoEvents(e);
    // });
  }

  videoEvents(video){
    // video.addEventListener('click', ()=>{
    //   // Prevent from going up
    //   event.preventDefault();
    //   // Get the video HTML Element
    //   let CurrentVideo = video.children[0].children[0];
    //   //Get the Icon and toggle everytime clicked
    //   let playIcon = video.children[0];
    //   playIcon.classList.toggle('hide-play');
    //   // Toggle Video to play
    //   if(CurrentVideo.paused === true){
    //     CurrentVideo.play()
    //   } else {
    //     CurrentVideo.pause()
    //   }
    // });
  }

}

export default Cards
