import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  Gifs:any=[]

  constructor(private Servicios:ServiciosService) { }

  ngOnInit(): void {
    this.Servicios.obtenerGifstendencia().subscribe((data:any)=>{
      this.Gifs=data.data
      console.log(data)
    })
  }

}
