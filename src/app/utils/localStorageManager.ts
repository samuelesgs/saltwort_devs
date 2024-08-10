export class LocalStorageManager {

    public LANGUAGE_SPANISH = "es";
    public LANGUAGE_ENGLISH = "en";

    public setItem(key : string, value : any) : void {
        localStorage.setItem(key, value);
    }

    public getItem(key : string) : any{
        return localStorage.getItem(key);
    }
}