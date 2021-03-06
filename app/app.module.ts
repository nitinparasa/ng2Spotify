import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import {AboutComponent} from "./components/about/about.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {SearchComponent} from "./components/search/search.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";

import {SpotifyService} from "./services/spotify.service";
import {CatalogService} from "./services/catalog.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule],
  declarations: [ AppComponent, AboutComponent, CatalogComponent, SearchComponent, NavbarComponent, ArtistComponent, AlbumComponent ],
  providers:    [ SpotifyService, CatalogService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
