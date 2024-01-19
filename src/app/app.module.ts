// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { EditReceiverComponent } from './edit-receiver/edit-receiver.component';
import { LetterService } from './letter.service';

@NgModule({
  declarations: [

    HomeComponent,
    EditorComponent,
    EditReceiverComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [LetterService],
  bootstrap: []
})
export class AppModule { }
