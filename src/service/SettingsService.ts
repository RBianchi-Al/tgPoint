import { request } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
    color: boolean;
    username: string;
}

class SettingsService {

    async create({color, username}: ISettingsCreate){
        const settingsRepository = getCustomRepository(SettingsRepository);

        // Select * from settings where username = 'username' limit 1
        const userAlreadyExists = await settingsRepository.findOne({
            username
        })

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }
        const settings = settingsRepository.create({
            color,
            username,
        });

        
        await settingsRepository.save(settings)
        
        return settings;
    }
    
}






export {SettingsService}