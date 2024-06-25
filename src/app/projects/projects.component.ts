import { Component, Input} from '@angular/core';
import { Project } from '../classSetups';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
  @Input() darkMode: boolean = false;
  
  filterQuery: string = '';
  filteredData: Project[] = [];

  ngOnInit() {
    this.filterSearch();
  }

  filterSearch() {
    if(!this.filterQuery) {
      this.filteredData = this.projects;
    } else {
      this.filteredData = this.projects.filter(project=>
        project.name.toLowerCase().includes(this.filterQuery.toLowerCase())
      );
    }
  }
}
