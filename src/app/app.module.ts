import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RESTAPIModule } from '@plone/restapi-angular';
import { AppComponent } from './app.component';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';
import { SchemaFormFolderComponent } from './schema-form-folder/schema-form-folder.component';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "angular2-schema-form";

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavigationComponent,
    SchemaFormFolderComponent
  ],
  entryComponents: [
    SchemaFormFolderComponent
  ],
  imports: [
    BrowserModule,
    RESTAPIModule,
    SchemaFormModule
  ],
  providers: [
    {
      provide: 'CONFIGURATION', useValue: {
        BACKEND_URL: 'http://localhost:8080/Plone',
      }
    },
    {
      provide: WidgetRegistry,
      useClass: DefaultWidgetRegistry
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
