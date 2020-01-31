import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {

    @Input() id : number=0;
	@Input() checkboxConfig : string ="";
	@Input() controltext : string ="";
	@Input() error : string ="";

  constructor() { }

  ngOnInit() {
  }

}
