import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  public optActive = false;
  public optionSelect: string;
  public options: string[];

  constructor() {
    this.optionSelect = 'Filter by Region';
    this.options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  }

  ngOnInit(): void {
  }

  agregarOpcion( opcion: string): void {
    this.optionSelect = opcion;
    this.optActive = false;
}

}
