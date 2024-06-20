import { Component, Input } from '@angular/core';
import { Personal } from '../classSetups'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() userData!: Personal;
  @Input() darkMode: boolean = false;

}
