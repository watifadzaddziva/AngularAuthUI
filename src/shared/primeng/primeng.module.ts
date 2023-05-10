import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';    
import {PasswordModule} from 'primeng/password';
import {MenubarModule} from 'primeng/menubar';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ChipsModule} from 'primeng/chips';
import {DropdownModule} from 'primeng/dropdown';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {FieldsetModule} from 'primeng/fieldset';
import {StepsModule} from 'primeng/steps';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CarouselModule} from 'primeng/carousel';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],

  exports:[
    AccordionModule,
    PasswordModule,
    MenubarModule,
    ImageModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    AutoCompleteModule,
    ChipsModule,
    DropdownModule,
    CascadeSelectModule,
    InputNumberModule,
    RadioButtonModule,
    CheckboxModule,
    InputTextModule,
    FileUploadModule,
    DataViewModule,
    DialogModule,
    ToastModule,
    FieldsetModule,
    StepsModule,
    InputTextareaModule,
    CarouselModule,
    PaginatorModule,
    TableModule
  ],

  imports: [
    CommonModule
  ]
})
export class PrimengModule { }
