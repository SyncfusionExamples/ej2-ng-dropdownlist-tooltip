import { Component } from '@angular/core';
import { DropDownListComponent, PopupEventArgs, SelectEventArgs  } from '@syncfusion/ej2-ng-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'my-app',
    // specifies the template string for the DropDownList component with change event
    template: `<ej-dropdownlist id='ddlelement' #samples (open)='onOpen($event)' (change)='onChange($event)' [dataSource]='data' [fields]='fields' [placeholder]='text'></ej-dropdownlist>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: { [key: string]: Object }[] = [
      { Id: 'game1', Game: 'Badminton' },
       { Id: 'game2', Game: 'Tennis' },
       { Id: 'game3', Game: 'American Football' },
       { Id: 'game4', Game: 'Cricket' },
       { Id: 'game5', Game: 'Volleyball' }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Game', value: 'Id' };
    //set the placeholder to DropDownList input
    public text: string = "Select game";
    public  onOpen: any  = (args:PopupEventArgs) => {
        // set title to overflow text list
        if (this.isTooltip) {
          setTimeout(() => {
            // get all the list items
            let listItems: HTMLElement[] = <any>args.popup.element.querySelectorAll('li');
            listItems.forEach(element => {
              if (element.offsetWidth < element.scrollWidth) {
                element.setAttribute('title', element.textContent);
              }
            });
            this.isTooltip = false;
          }, 100);
        }
    }
    public onChange: any = (args: SelectEventArgs) => {
      let dropdown: HTMLElement = document.getElementById('ddlelement');
      let input: HTMLInputElement = dropdown.querySelector('input');
      // set tooltip to selected item which is shown in input element.
      if (input.offsetWidth < input.scrollWidth) {
         dropdown.setAttribute('title', args.item.textContent);
      } else {
         dropdown.removeAttribute('title');
      }
   }
}

