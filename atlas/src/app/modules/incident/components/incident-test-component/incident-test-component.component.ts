import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-test-component',
  templateUrl: './incident-test-component.component.html',
  styleUrls: ['./incident-test-component.component.css']
})
export class IncidentTestComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var a = 1;
  }
}
