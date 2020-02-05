import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-poup-course',
  templateUrl: './poup-course.component.html',
  styleUrls: ['./poup-course.component.scss']
})
export class PoupCourseComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<PoupCourseComponent>) { }

  ngOnInit() {
  }

  onClose(){
		this.dialogRef.close();
	}
}
