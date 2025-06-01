import { ProfileData } from "./general.interface";
import { InformationAksel } from "./informationAksel";
import { InformationLuis } from "./informationLuis";
import { InformationSamuel } from "./informationSamuel";

export class Develoments {

    constructor() { }

    informationDev(name: string): ProfileData {
        switch (name.toLocaleLowerCase()) {
            //MARK: LUIS PAULO CALDERON NAVA
            case 'luis':
                const informationLuis = new InformationLuis();
                return informationLuis.getInformation;
            //MARK: AKSEL AKEMI HERRERA GONZALEZ
            case 'aksel':
                const informationAksel = new InformationAksel();
                return informationAksel.getInformation;
            //MARK: EDGAR SAMUEL GUERRERO SANDOVAL
            default:
                const informationSamuel = new InformationSamuel();
                return informationSamuel.getInformation
        }
    }
}