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
import {NameChildComponent} from './(C).component-interaction/name-child/name-child.component';
import {VersionChildComponent} from './(C).component-interaction/version-child/version-child.component';
import {VoterChildComponent} from './(C).component-interaction/voter-child/voter-child.component';
import {CountdownTimerComponent} from './(C).component-interaction/countdown-timer/countdown-timer.component';
import {AstronautComponent} from './(C).component-interaction/astronaut/astronaut.component';
import {HeroMainComponent} from './(D).component-styles/hero-main/hero-main.component';
import {HeroAppComponent} from './(D).component-styles/hero-app/hero-app.component';
import {HeroDetailComponent} from './(D).component-styles/hero-detail/hero-detail.component';
import {HeroControlsComponent} from './(D).component-styles/hero-controls/hero-controls.component';
import {HeroTeamComponent} from './(D).component-styles/hero-team/hero-team.component';
import {QuestSummaryComponent} from './(D).component-styles/quest-summary/quest-summary.component';
import {
  ShardingDataParentComponent
} from './(E).sharing-data-between-child-and-parent/sharding-data-parent/sharding-data-parent.component';
import {
  ShardingDataChildComponent
} from './(E).sharing-data-between-child-and-parent/sharding-data-child/sharding-data-child.component';
import {ZippyBasicComponent} from './(F).content-projection/zippy-basic/zippy-basic.component';
import {ZippyParentComponent} from './(F).content-projection/zippy-parent/zippy-parent.component';
import {ZippyMultislotComponent} from './(F).content-projection/zippy-multislot/zippy-multislot.component';
import {ExampleZippyComponent} from './(F).content-projection/example-zippy/example-zippy.component';
import {ZippyToggleDirective} from './(F).content-projection/example-zippy/zippy-toggle.directive';
import {ZippyContentDirective} from './(F).content-projection/example-zippy/zippy-content.directive';
import { ZippyNgprojectasComponent } from './(F).content-projection/zippy-ngprojectas/zippy-ngprojectas.component';
import { AdBannerComponent } from './(G).dynamic-component-loader/ad-banner/ad-banner.component';
import { AdDirective } from './(G).dynamic-component-loader/ad.directive';
import { HeroProfileComponent } from './(G).dynamic-component-loader/hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './(G).dynamic-component-loader/hero-job-ad/hero-job-ad.component';
import { AdComponent } from './(G).dynamic-component-loader/ad/ad.component';

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
    AstronautComponent,
    HeroMainComponent,
    HeroAppComponent,
    HeroDetailComponent,
    HeroControlsComponent,
    HeroTeamComponent,
    QuestSummaryComponent,
    ShardingDataParentComponent,
    ShardingDataChildComponent,
    ZippyBasicComponent,
    ZippyParentComponent,
    ZippyMultislotComponent,
    ExampleZippyComponent,
    ZippyToggleDirective,
    ZippyContentDirective,
    ZippyNgprojectasComponent,
    AdBannerComponent,
    AdDirective,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdComponent
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
