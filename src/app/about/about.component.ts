import { Component, Input} from '@angular/core';
import { Personal } from '../classSetups';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() userData!: Personal;
  @Input() darkMode: boolean = false;
}
