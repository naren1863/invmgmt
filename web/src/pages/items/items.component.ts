import { Component, OnInit } from '@angular/core';
import {Item} from '../items/item';
import {ItemService} from '../items/itemservice';
import {Message, ConfirmationService, MessageService} from 'primeng/api';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

//import {Globals}  from 'app/global';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  providers: [MessageService,ConfirmationService]
})

export class ItemsComponent implements OnInit {
      
    itemDialog: boolean;
    
        items: Item[];
    
        item: Item;
    
        selectedItems: Item[];
    
        submitted: boolean;
    
        statuses: any[];
    
        constructor(private itemService: ItemService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
    
        ngOnInit() {
          console.log("ItemsComponent.ngOnInit Enter");
            //this.itemService.getItems().(data => this.items = data);
            this.items = this.itemService.getItems();
            
            console.log("Items -->" + this.items[0].itemId);
    
            this.statuses = [
                {label: 'INSTOCK', value: 'instock'},
                {label: 'LOWSTOCK', value: 'lowstock'},
                {label: 'OUTOFSTOCK', value: 'outofstock'}
            ];
            console.log("ItemsComponent.ngOnInit Exit");
        }
    
        openNew() {
            this.item = {};
            this.submitted = false;
            this.itemDialog = true;
        }
    
        deleteSelectedItems() {
            this.confirmationService.confirm({
                message: 'Are you sure you want to delete the selected items?',
                header: 'Confirm',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.items = this.items.filter(val => !this.selectedItems.includes(val));
                    this.selectedItems = null;
                    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Items Deleted', life: 3000});
                }
            });
        }
    
        editItem(item: Item) {
            this.item = {...item};
            this.itemDialog = true;
        }
    
        deleteItem(item: Item) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to delete ' + item.itemName + '?',
                header: 'Confirm',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.items = this.items.filter(val => val.itemId !== item.itemId);
                    this.item = {};
                    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Item Deleted', life: 3000});
                }
            });
        }
    
        hideDialog() {
            this.itemDialog = false;
            this.submitted = false;
        }
    
        saveItem() {
            this.submitted = true;
    
            if (this.item.itemName.trim()) {
                if (this.item.itemId) {
                    this.items[this.findIndexById(this.item.itemId)] = this.item;
                    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Item Updated', life: 3000});
                }
                else {
                    this.item.itemId = this.createId();
                    //this.item.image = 'item-placeholder.svg';
                    this.items.push(this.item);
                    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Item Created', life: 3000});
                }
    
                this.items = [...this.items];
                this.itemDialog = false;
                this.item = {};
            }
        }
    
        findIndexById(id: string): number {
            let index = -1;
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].itemId === id) {
                    index = i;
                    break;
                }
            }
    
            return index;
        }
    
        createId(): string {
            let id = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( var i = 0; i < 5; i++ ) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        }
      
 }
