import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ RouterModule, SharedModule ],
  declarations: [ UsersListComponent ],
  exports: [  ],
  providers: [ ]
})
export class UsersModule { }
