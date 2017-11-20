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
      // get all the list items
      let listItems: any = args.popup.element.querySelectorAll('li');
      let length: number = listItems.length;
      for (let i: number = 0; i < length; i++) {
        // set title attribute to all the list items.
        listItems[i].setAttribute('title', listItems[i].textContent);
      }
    }
    public onChange: any = (args: SelectEventArgs) => {
      let dropdown: HTMLElement = document.getElementById('ddlelement');
      // set tooltip to selected item which is shown in input element.
      dropdown.setAttribute('title', args.item.textContent);
    }
}

