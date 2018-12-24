import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRepositoryService } from './user-repository.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ NavBarComponent, AccountMenuComponent ],
  declarations: [ NavBarComponent, AccountMenuComponent ],
  providers: [ UserRepositoryService ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("CoreModule should be imported ONLY in AppModule.");
    }
  }
 }

//https://www.dotnettips.info/post/2765
