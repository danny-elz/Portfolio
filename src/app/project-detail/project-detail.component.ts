import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Project } from '../classSetups';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailsComponent extends Project implements OnInit {
  project: Project | undefined; /* Here I'm using the undefined keyword in the case project doesn't have a value yet. 
                                  This indicates that it will be assigned a value later on such as after a http request is made
                                 */

  constructor (
    private route: ActivatedRoute, //
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('projectId'); /* retriving the project id from the current routes snapshot.
                                                                        A snapshot is a static representation of the routes information at a given point in time
                                                                        In this case the snapshot holds the parameter projectId which is defined in the route placed 
                                                                        in app-routing.module.ts.
                                                                        paramMap (maps the route parameters) and GET are used together to retrieve the routes 
                                                                        parameters which in this case is the :projectId
                                                                     */
    if (projectId) {
      this.getProjectDetails(+projectId);  /* if projectId is present its value is returned. 
                                              since the id is retuned as a string use the '+' operator to convert
                                              to a number */
    }
  }

  getProjectDetails(projectId: number) {
    const url = 'assets/data/projects.json';

    this.http.get<{ ProjectData: Project[] }>(url).subscribe((res) => { //Sends an HTTP GET request to the specified URL and expects a response with a structure containing a ProjectData[] of project objects.
      this.project = res.ProjectData.find(p => p.id === projectId); //Finds the project in the ProjectData array that matches the given projectId and assigns it to project variable .
    }, error => {
      console.error("Failed to load project details:", error);
    });
  }
}
