import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MasterchefComponent } from './masterchef/masterchef.component';
import { QualityfoodComponent } from './single/qualityfood/qualityfood.component';
import { OnlineorderComponent } from './single/onlineorder/onlineorder.component';
import { FullserviceComponent } from './single/fullservice/fullservice.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'services',component:ServicesComponent},
    {path:'Contact',component:ContactsComponent},
    {path:'masterchef',component:MasterchefComponent},
    {path:'qualityfood',component:QualityfoodComponent},
    {path:'onlineorder',component:OnlineorderComponent},
    {path:'fullservice',component:FullserviceComponent}
];
