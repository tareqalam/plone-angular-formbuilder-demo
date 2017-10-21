import { Component } from '@angular/core';
import { PloneViews } from '@plone/restapi-angular';
import { Services } from '@plone/restapi-angular';
import { SchemaFormFolderComponent } from './schema-form-folder/schema-form-folder.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 logged = false;
 constructor(
  public views:PloneViews,
   public services: Services,
 ) {
   this.views.initialize();
   this.services.traverser.addView('view', 'SchemaFormFolder', SchemaFormFolderComponent);
   this.services.authentication.isAuthenticated.subscribe(auth => {
      this.logged = auth.state;
    });
 }
}
