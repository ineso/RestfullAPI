import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  //add a provider to display our component
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit {
  shoppingItemList: Item[]=[];
  selectedItem: Item;
  toggleForm:boolean=false;


  constructor(private dataservice: DataService) { 
    

  }

  addItem(form){

    //console.log(form.value);
    let newItem:Item ={
      itemName: form.value.itemName,
      itemDesc: form.value.itemDesc,
      itemPrice: form.value.itemPrice,
      itemPic:form.value.itemPic,
      itemCat: form.value.itemCat

    }
    this.dataservice.addShoppingItem(newItem)
    .subscribe(item=>{
      console.log(item );
      //refresh this method
      this.getItems();
    });
  }

  getItems(){
    //returns an observable that u should subscribe in  
    this.dataservice.getshoppingItems()
    .subscribe(items => {
      //get access to the data in the observable
      this.shoppingItemList= items ;
      console.log('data from dataservices: '+ this.shoppingItemList[0].itemName);
    });
    

  }
  deleteItem(id){

    this.dataservice.deleteShoppingItem(id)
    .subscribe(data =>{
      console.log(data);
      //data.n data that was been removed
      if (data.n == 1){
        for(var i=0;i<this.shoppingItemList.length; i++){
          if (id==this.shoppingItemList[i]._id){
            //one item has been removed 
            this.shoppingItemList.splice(i,1);
          }
        }
      }
    })
  }

  editItem(form){
    let newItem: Item ={
      _id: this.selectedItem._id,
      itemName: form.value.itemName,
      itemDesc: form.value.itemDesc,
      itemPrice: form.value.itemmPrice,
      itemPic: form.value.itemPic,
      itemCat: form.value.itemCat
    }
    this.dataservice.updateShoppingItem(newItem)
    .subscribe( result =>{
      console.log('original item to be uploaded with old values:'+result);
      this.getItems();

    });
    //once update finish what interface to appear
    this.toggleForm= !this.toggleForm;


  }


  showEditForm(item){
    this.selectedItem= item; 
    this.toggleForm=!this.toggleForm;
    
  }
  ngOnInit() {
    this.getItems(); 
  }

}
