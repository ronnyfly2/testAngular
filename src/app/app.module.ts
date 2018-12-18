import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/layouts/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CompleteComponent } from './components/complete/complete.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		WelcomeComponent,
		CompleteComponent,
		QuestionsComponent,
		ReportsComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
