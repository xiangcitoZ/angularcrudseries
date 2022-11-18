import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { ActivatedRoute, Params } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series!: Array<Serie>;
  
  loadSerie() : void{
    this._service.getSeries().subscribe(response =>{
      this.series = response;

    });
  }
  constructor(
    private _service: SeriesService,
    private _activeRoutes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadSerie();
  }

}
