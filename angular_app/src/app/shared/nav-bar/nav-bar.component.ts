import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageManager } from '../../utils/localStorageManager';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nav-bar',
    imports: [RouterModule, TranslateModule, CommonModule],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    currentLang: string = "es";
    menuOpen: boolean = false;
    dropdownOpen: boolean = false;
    LocalStorageManager = new LocalStorageManager();

    constructor(private translateService: TranslateService, private appService: AppService) {
        this.translateService.use(this.LocalStorageManager.getItem("lang"));
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
    }

    // Cierra el dropdown al hacer click fuera
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown')) {
            this.dropdownOpen = false;
        }
    }

    setLang(lang: string) {
        this.LocalStorageManager.setItem("lang", lang);
        this.currentLang = lang;
        this.dropdownOpen = false;
        this.appService.setChangeLang(lang);
    }
}