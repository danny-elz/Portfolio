import { Component, Input } from '@angular/core';
import { Personal } from '../classSetups';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  @Input() userData!: Personal;
  @Input() darkMode: boolean = false;
}
