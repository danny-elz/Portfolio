import { Component, Input } from '@angular/core';
import { Personal } from '../classSetups'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() userData!: Personal;
  @Input() darkMode: boolean = false;
}
