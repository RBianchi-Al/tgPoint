import { request } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
    color: boolean;
    username: string;
    id: string;
}

class SettingsService {
    private settingsRepository : SettingsRepository;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);

    }

    async create({color, username, id}: ISettingsCreate){
       
        // Select * from settings where username = 'username' limit 1
        const userAlreadyExists = await this.settingsRepository.findOne({
            username,
            id
        })

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }
        const settings = this.settingsRepository.create({
            color,
            username,
            id
        });

        
        await this.settingsRepository.save(settings)
        
        return settings;
    }
    async listBySettings(){
        const colors = await this.settingsRepository.find({})
        return colors;
    }
    
}

export {SettingsService}