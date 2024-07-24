import { Component, Input} from '@angular/core';
import { Project } from '../classSetups';
import { LikebuttonService } from '../likebutton.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
  @Input() darkMode: boolean = false;
  
  query: string = '';
  filteredData: Project[] = [];

  ngOnInit() {
    this.filterSearch(); //My webpage was not loading my projects on initial launch so added this function to initialize data
                         //Im just confused how I was able to get this to work without importing OnInit?
  }

  filterSearch() {
    if(!this.query) { 
      this.filteredData = this.projects;  //if query is empty assign all the projects to filteredData
    } else {
      this.filteredData = this.projects.filter(project=>
        project.name.toLowerCase().includes(this.query.toLowerCase()) //if query is not empty then display the project whose name matches the query
      );
    }
  }

  constructor (private likeservice: LikebuttonService){}

  like(elem: any) {this.likeservice.likeproject(elem)}


}
