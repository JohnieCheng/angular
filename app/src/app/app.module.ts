import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SingleComponent} from './(A).lifecycle-hooks/1.single-component/single.component';
import {FormsModule} from "@angular/forms";
import {ParentComponent} from './(A).lifecycle-hooks/2.parent-child-component/parent/parent.component';
import {ChildComponent} from './(A).lifecycle-hooks/2.parent-child-component/child/child.component';
import {
  ChildContentComponent
} from './(A).lifecycle-hooks/2.parent-child-component/child-content/child-content.component';
import {NoEncapsulationComponent} from './(B).view-encapsulation/1.no-encapsulation/no-encapsulation.component';
import {
  EmulatedEncapsulationComponent
} from './(B).view-encapsulation/2.emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './(B).view-encapsulation/3.shadow-dom-encapsulation/shadow-dom-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    ParentComponent,
    ChildComponent,
    ChildContentComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
