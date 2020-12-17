import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit {
  @Input()
  public name: string;

  constructor() {}

  ngOnInit() {}
}
