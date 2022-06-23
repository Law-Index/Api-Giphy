import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient){ }

  obtenerGifstendencia() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.ApigiphyKey}&limit=25`);
  }

}

