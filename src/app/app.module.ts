import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SampleComponent } from './sample/sample.component';
import { AppRoutingModule, routingComponents } from './app-rounting.module';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReactiveComponent } from './reactive/reactive.component';
import { TostrComponent } from './tostr/tostr.component';
import { TempComponent } from './temp/temp.component';
import { FormrComponent } from './formr/formr.component';
import { AboutComponent } from './about/about.component';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    ParentComponent,
    ChildComponent,
    SampleComponent,
    routingComponents,
    UsdInrPipe,
    ReactiveComponent,
    TostrComponent,
    TempComponent,
    FormrComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'decreasing',
        positionClass: 'toast-top-right'
      }
    )
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})
export class AppModule { }
