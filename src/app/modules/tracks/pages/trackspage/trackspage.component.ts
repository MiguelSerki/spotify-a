import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import dataRaw from "../../../../data/tracks.json";

@Component({
  selector: 'app-trackspage',
  templateUrl: './trackspage.component.html',
  styleUrls: ['./trackspage.component.css']
})
export class TrackspageComponent implements OnInit{
 
  mockTracksList: Array<TrackModel> =[  ]
  constructor(){}

  ngOnInit(): void{
    this.mockTracksList = dataRaw.data
  }
}
