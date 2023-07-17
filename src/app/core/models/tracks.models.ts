import {ArtistModel} from "./artist.model";
import { DurationModel } from "./duration.model";

export interface TrackModel{

    name: string;
    album: string;
    cover: string;
    url: string;
    _id: number;
    artist? : ArtistModel;
    duration? : DurationModel;
}