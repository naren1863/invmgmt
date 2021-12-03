import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {appRouting} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Validators,FormControl,FormGroup,
        FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { SpinnerModule } from 'primeng/spinner';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { InplaceModule } from 'primeng/inplace';
import { MessagesModule } from 'primeng/messages';
import { OrderListModule } from 'primeng/orderlist';
import { FieldsetModule } from 'primeng/fieldset';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { MessageModule } from 'primeng/message';

//import { SidebarModule } from 'ng-sidebar';
import {AppComponent} from './app.component';
import {studCreateComponent} from '../pages/main-page/main-page';
import { ItemsComponent } from '../pages/items/items.component';
import { VendorsComponent } from '../pages/vendors/vendors.component';

import { LoginService } from '../providers/login-service';
import { ItemService } from '../pages/items/itemservice';

@NgModule({
  declarations: [
    AppComponent,
    studCreateComponent,
    ItemsComponent,
    VendorsComponent
    
  ],

  imports: [
    BrowserModule,ToolbarModule,
    ButtonModule,
    appRouting,
    HttpModule,
    BrowserAnimationsModule, 
    FormsModule,
    // primeng
    AccordionModule,ToastModule,
    AutoCompleteModule,
    BlockUIModule,
    ButtonModule,
    ChipsModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    SelectButtonModule,
    MenubarModule, MenuModule,
    OverlayPanelModule,
    CheckboxModule, SpinnerModule,
    ListboxModule,
    DialogModule, RadioButtonModule,
    CalendarModule,ConfirmDialogModule, TableModule,
    InplaceModule, MessagesModule,OrderListModule, 
    FieldsetModule, MegaMenuModule, SidebarModule,
    PanelMenuModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [HttpClient,
               LoginService, ItemService
              ],

  bootstrap: [AppComponent]
})
export class AppModule {}
