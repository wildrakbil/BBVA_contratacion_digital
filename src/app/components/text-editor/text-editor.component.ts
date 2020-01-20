import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';


@Component({
	selector: 'app-text-editor',
	templateUrl: './text-editor.component.html',
	styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

	editorForm:FormGroup;
	constructor() { }

	ngOnInit() {
		this.editorForm = new FormGroup({
			'editor':new FormControl(null)
		});
	}

}
