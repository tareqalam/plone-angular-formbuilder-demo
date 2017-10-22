import { Component, OnInit } from '@angular/core';
import { ViewView } from '@plone/restapi-angular';

@Component({
  selector: 'app-schema-form-folder',
  templateUrl: './schema-form-folder.component.html',
  styleUrls: ['./schema-form-folder.component.scss']
})
export class SchemaFormFolderComponent extends ViewView {
  schema: any;
  model: any;
  actions: any = {};
  path: string;

   onTraverse(target: any) {
    //this.actions = {
    //  save: this.onSave.bind(this),
    //  cancel: this.onCancel.bind(this)
    //};

    this.path = target.contextPath;
    let model = target.context;
    this.services.api.get(target.path + '/@schema').subscribe(schema => {
      schema.buttons = [
        { id: 'save', label: 'Save' },
        { id: 'cancel', label: 'Cancel' }
      ];
      // FIX THE SCHEMA AND THE MODEL
      for (let property in schema.properties) {
        if (property === 'allow_discussion') {
          schema.properties[property].type = 'boolean';
        }
        if (property === 'effective' || property === 'expires') {
          schema.properties[property].widget = 'date';
        }
      }

      this.schema = schema;
      this.model = model;



    });
    this.actions['save'] = (form, options) => {
        let schema_form_data = {'schema_form_data': JSON.stringify(form.value)}
        console.log(schema_form_data);
        this.services.api.post(target.path + '/@schemaformdata', schema_form_data).subscribe(message => {
            console.log(message);
          });

          alert(JSON.stringify(form.value));
        };
  }

   mySchema = {
    "properties": {
      "email": {
        "type": "string",
        "description": "email",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "Password"
      },
      "rememberMe": {
        "type": "boolean",
        "default": false,
        "description": "Remember me"
      }
    },
    "required": ["email","password","rememberMe"]
  }

}
