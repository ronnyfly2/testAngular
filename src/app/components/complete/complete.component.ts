import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.styl']
})
export class CompleteComponent implements OnInit {

	constructor(private router: Router) { }

	getLink(){
		this.router.navigate(['/questions']);
	}
  ngOnInit() {
  }

}
