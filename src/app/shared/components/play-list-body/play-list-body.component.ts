import { Component, OnInit } from '@angular/core';
import dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit{
tracks: Array<TrackModel> = []

constructor (){}

ngOnInit(): void {
  
  this.tracks = dataRaw.data;
}
}
