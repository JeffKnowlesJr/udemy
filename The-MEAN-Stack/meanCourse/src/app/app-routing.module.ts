import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

// Well routes are simply javascript objects here where we define for which url,
// which part of our app should be presented.

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent }
];

// Now we just need to inform the angular route here module about our routes and we do that by first of all
// importing with the imports statement in the module, by importing the router module into this angular module.
// So we add imports router module and now here we have to call a method this module provides for root.
// This takes our root route config, so the routes constant we define here here.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Now this will become an angular module
// and in case you don't know, angular modules are basically building blocks angular analyzes to find out
// which features your app uses
// and we could absolutely define our routes in the normal app module.
// It's just a good practice to not put everything into this file but to split our logic across multiple
// files


// ** cannot double name in angular routing / server side routing
