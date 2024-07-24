import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LikebuttonService {
  constructor() { }
  likeproject(project: any){
    const projectElement = document.getElementById(`project-${project.id}`);
    if (projectElement) {
      projectElement.style.color = "Green";
    } else {
      console.log('Project not found');
    }
  }
}
