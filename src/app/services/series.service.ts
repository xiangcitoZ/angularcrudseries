import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Personaje } from "../models/personaje";
import { Serie } from "../models/serie";

@Injectable()
export class SeriesService{
    constructor(private _http: HttpClient){}
    
    getSeries(): Observable<any>{
        var request = "/api/Series"
        var url = environment.urlApiSeries + request;
        return this._http.get(url);

    }

    getSerieID(id: number): Observable<any>{
        var request = "/api/Series" + id;
        var url = environment.urlApiSeries + request;
        return this._http.get(url);

    }
}