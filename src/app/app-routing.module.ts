import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { CompleteComponent } from './components/complete/complete.component';
import { QuestionsComponent } from './components/questions/questions.component';


const routes: Routes = [
	{path:'welcome', component:WelcomeComponent},
	{path:'form', component:CompleteComponent},
	{path:'questions', component:QuestionsComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
