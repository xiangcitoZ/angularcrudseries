import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public serie!: any;
  public idSerie!: number;

  constructor(private _service: SeriesService,
    private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      if(parametros['idseries'] != null){
        this.idSerie = parseInt(parametros['idseries']);
      }
      console.log(this.idSerie);
      this._service.getSerieID(this.idSerie).subscribe(response => {
        this.serie = response;
      })
    });
  }

}
