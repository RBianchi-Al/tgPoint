import {Router} from 'express';
import { SettingsController } from './src/controllers/SettinsControllers';


const routes = Router();


// Configurações do sistema (cor)
const settingsControllers = new SettingsController; 
routes.post("/settings", settingsControllers.create);


export {routes}