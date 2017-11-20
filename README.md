# DropDownList items with Tooltip for Angular

## Tooltip is displayed for the selected item in DropDown element

By using title attribute with change event handler, you can enable the tooltip support to selected item which is shown in input element. Whenever selection changed, need to update the title attribute value from selected item’s text content. Please refer the below code snippet,

```
 public onChange: any = (args: SelectEventArgs) => {
     let dropDownObj: HTMLElement = document.getElementById('ddlelement');
     dropDownObj.setAttribute('title', args.item.textContent);
  }
```

## Tooptip for all the list items in dropdown popup

We can enable the tooltip option to all the list items by using title attribute with open event.Please refer the below code snippet for enable the tooltip for all the list items in open event handler.

```
public  onOpen: any  = (args:PopupEventArgs) => {
    // get all the list items
    let listItems: any = args.popup.element.querySelectorAll('li');
    let length: number = listItems.length;
    for (let i: number = 0; i < length; i++) {
        // set title attribute to all the list items.
        listItems[i].setAttribute('title', listItems[i].textContent);
    }
}

```

## Installing and Running Application

### Installing

To install all dependent packages, use the below command

```
npm install
```

### Run the application

To compile and run the source files, use the below command

```
npm start
```
