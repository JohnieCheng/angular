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
import {
  ShadowDomEncapsulationComponent
} from './(B).view-encapsulation/3.shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import {InteractionParentComponent} from "./(C).component-interaction/interaction-parent.component";
import {InteractionChildComponent} from "./(C).component-interaction/interaction-child/interaction-child.component";
import { NameChildComponent } from './(C).component-interaction/name-child/name-child.component';
import { VersionChildComponent } from './(C).component-interaction/version-child/version-child.component';
import { VoterChildComponent } from './(C).component-interaction/voter-child/voter-child.component';
import { CountdownTimerComponent } from './(C).component-interaction/countdown-timer/countdown-timer.component';
import { AstronautComponent } from './(C).component-interaction/astronaut/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    ParentComponent,
    ChildComponent,
    ChildContentComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    InteractionParentComponent,
    InteractionChildComponent,
    NameChildComponent,
    VersionChildComponent,
    VoterChildComponent,
    CountdownTimerComponent,
    AstronautComponent
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
