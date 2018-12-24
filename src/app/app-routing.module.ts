import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { CompleteComponent } from './components/complete/complete.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReportsComponent } from './components/reports/reports.component';


const routes: Routes = [
	{path:'', component:WelcomeComponent},
	{path:'form', component:CompleteComponent},
	{path:'questions', component:QuestionsComponent},
	{path:'reports', component:ReportsComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
