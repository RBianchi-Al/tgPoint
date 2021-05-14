import {Router} from 'express';
import { CompanyControllers } from './src/controllers/CompanyControllers';
import { OfficeControllers } from './src/controllers/OfficeControllers';
import { SettingsController } from './src/controllers/SettignsControllers';
import { UsersControllers } from './src/controllers/UsersControlllers';


const routes = Router();


// Configurações do sistema (cor)
const settingsControllers = new SettingsController; 
routes.post("/settings", settingsControllers.create);


const usersControllers = new UsersControllers();
routes.post("/users", usersControllers.create);

const companyControllers = new CompanyControllers();
routes.post("/company", companyControllers.create);


const officeControllers = new OfficeControllers();
routes.post("/office", officeControllers.create);
export {routes}