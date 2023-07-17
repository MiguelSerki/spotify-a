import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-seccion-generica',
  templateUrl: './seccion-generica.component.html',
  styleUrls: ['./seccion-generica.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
  }

}