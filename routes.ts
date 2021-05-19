import {Router} from 'express';
import { AdressControllers } from './src/controllers/AdressControllers';
import { CompanyControllers } from './src/controllers/CompanyControllers';
import { OfficeControllers } from './src/controllers/OfficeControllers';
import { PhotosControllers } from './src/controllers/PhotosControllers';
import { PointControllers } from './src/controllers/PointControllers';
import { SettingsController } from './src/controllers/SettignsControllers';
import { UsersControllers } from './src/controllers/UsersControlllers';


const routes = Router();


// Configurações do sistema (cor)
const settingsControllers = new SettingsController; 
routes.post("/settings", settingsControllers.create);
routes.get("/settings/:color", settingsControllers.create)





const usersControllers = new UsersControllers();
routes.post("/users", usersControllers.create);
routes.delete("/users/:id", usersControllers.deleteUser);

const companyControllers = new CompanyControllers();
routes.post("/company", companyControllers.create);


const officeControllers = new OfficeControllers();
routes.post("/office", officeControllers.create);

const photosControllers = new PhotosControllers();
routes.post("/photos", photosControllers.create);

const pointControllers = new PointControllers();
routes.post("/point", pointControllers.create);

const adressControllers = new AdressControllers();
routes.post("/adress", adressControllers.create);

export {routes}