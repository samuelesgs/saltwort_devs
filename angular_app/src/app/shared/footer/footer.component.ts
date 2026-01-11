import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-footer',
    imports: [RouterModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {

  email = "salwortdevs@gmail.com";

  
}
