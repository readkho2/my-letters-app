import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { EditReceiverComponent } from './edit-receiver/edit-receiver.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'edit-receiver', component: EditReceiverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
