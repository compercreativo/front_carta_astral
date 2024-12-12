
import { Routes } from '@angular/router';
import { InitComponent } from './questions/init/init.component';
import { HomeComponent } from './home/home.component';
import { Question1Component } from './questions/question-1/question-1.component';
import { Question2Component } from './questions/question-2/question-2.component';
import { Question4Component } from './questions/question-4/question-4.component';
import { Question3Component } from './questions/question-3/question-3.component';
import { Pause1Component } from './questions/pause-1/pause-1.component';
import { Pause2Component } from './questions/pause-2/pause-2.component';
import { Question5Component } from './questions/question-5/question-5.component';
import { Question10Component } from './questions/question-10/question-10.component';
import { Question6Component } from './questions/question-6/question-6.component';
import { Question7Component } from './questions/question-7/question-7.component';
import { Question8Component } from './questions/question-8/question-8.component';
import { Question9Component } from './questions/question-9/question-9.component';
import { Pause3Component } from './questions/pause-3/pause-3.component';
import { Pause4Component } from './questions/pause-4/pause-4.component';
import { Pause5Component } from './questions/pause-5/pause-5.component';
import { Pause6Component } from './questions/pause-6/pause-6.component';
import { PaymentComponent } from './questions/payment/payment.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'questions', component: InitComponent},
    {path: 'questions/1', component: Question1Component},
    {path: 'questions/2', component: Question2Component},
    {path: 'questions/3', component: Question3Component},
    {path: 'questions/4', component: Question4Component},
    {path: 'questions/5', component: Question5Component},
    {path: 'questions/6', component: Question6Component},
    {path: 'questions/7', component: Question7Component},
    {path: 'questions/8', component: Question8Component},
    {path: 'questions/9', component: Question9Component},
    {path: 'questions/10', component: Question10Component},
    {path: 'questions/pause-1', component: Pause1Component},
    {path: 'questions/pause-2', component: Pause2Component},
    {path: 'questions/pause-3', component: Pause3Component},
    {path: 'questions/pause-4', component: Pause4Component},
    {path: 'questions/pause-5', component: Pause5Component},
    {path: 'questions/pause-6', component: Pause6Component},
    {path: 'questions/payment', component: PaymentComponent},
];
