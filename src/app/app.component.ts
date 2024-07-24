import { Component, ChangeDetectorRef } from '@angular/core';
import { Personal, Project } from './classSetups';
import contentData from '../assets/data/content.json';   
import projectData from '../assets/data/projects.json'; 
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
  export class AppComponent {
    title = 'portfolio';
    darkMode: boolean = false;
    contentData: Personal = contentData.ContentData;
    projectData: Project[] = projectData. ProjectData;

    constructor(private cd: ChangeDetectorRef) {}
    
    toggleDarkMode(): void {
      this.darkMode = !this.darkMode;
      this.cd.detectChanges(); 
    }

  }

