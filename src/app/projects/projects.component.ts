import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { Project } from '../classSetups';
import { LikebuttonService } from '../likebutton.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() darkMode: boolean = false;

  projects: Project[] = [];
  query: string = '';
  filteredData: Project[] = [];

  constructor (
    private http: HttpClient,
    private router: Router,
    private likeService: LikebuttonService
  ) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
      const url = 'assets/data/projects.json'; 
      this.http.get<{ ProjectData: Project[] }>(url).subscribe((res) => { // Make an http get request to fetch the project data and expects a response with a structure containing a ProjectData[] of project objects
        this.projects = res.ProjectData;   // if the response is succesful, assign the project data to the projects property
        this.filterSearch();
      }, error => {
        console.error("Failed to load project:", error);
      });
  }

  filterSearch() {
    if (!this.query) {
      this.filteredData = this.projects;
    } else {
      this.filteredData = this.projects.filter(project =>
        project.name.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }

  like(elem: any) {
    this.likeService.likeproject(elem);
  }

  goToDetails(projectId: number) {
    this.router.navigate(['/project', projectId]);
    // Here im using the router to navigate to the projects detail page
    /* The navigate method will makke the url with the 
      path /project/':id'  
     */
  }
}
