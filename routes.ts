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
routes.get("/settings", settingsControllers.showBySettings)





const usersControllers = new UsersControllers();
routes.post("/users", usersControllers.create);
routes.delete("/users/:id", usersControllers.deleteUser);
routes.get("/users", usersControllers.showByUser)



const companyControllers = new CompanyControllers();
routes.post("/company", companyControllers.create);
routes.get("/company", companyControllers.showByCompany);


const officeControllers = new OfficeControllers();
routes.post("/office", officeControllers.create);
routes.get("/office", officeControllers.showByOffice);


const photosControllers = new PhotosControllers();
routes.post("/photos", photosControllers.create);
routes.delete("/photos/:id", photosControllers.deletePhotos);
routes.get("/photos", photosControllers.showByPhotos);


const pointControllers = new PointControllers();
routes.post("/point", pointControllers.create);
routes.delete("/point/:id", pointControllers.deletePoint);
routes.get("/point", pointControllers.showByPoint);



const adressControllers = new AdressControllers();
routes.post("/adress", adressControllers.create);
routes.get("/adress", adressControllers.showByAdress);

export {routes}