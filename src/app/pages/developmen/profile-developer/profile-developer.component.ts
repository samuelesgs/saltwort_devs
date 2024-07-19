import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-developer',
  standalone: true,
  imports: [],
  templateUrl: './profile-developer.component.html',
  styleUrl: './profile-developer.component.css'
})
export class ProfileDeveloperComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('name'));
      
    });
  }
}
