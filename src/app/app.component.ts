  import { Component, ChangeDetectorRef } from '@angular/core';
  import { Personal, Project } from './classSetups';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

  export class AppComponent {
    title = 'portfolio';
    darkMode: boolean = false;
  
    constructor(private cd: ChangeDetectorRef) {}
  
    toggleDarkMode(): void {
      this.darkMode = !this.darkMode;
      this.cd.detectChanges(); 
    }

    mydata: Personal = {
      first: "Danny", 
      last: "Elzein",
      role: "Software Engineer", 
      email: "elzeind@sheridancollege.ca", 
      linkedin: "https://www.linkedin.com/in/danny-elzein", 
      phone: "6475682063",
      about: "I am a solution oriented Software Developer, lifelong learner, and fitness enthusiast with a background in software development and network engineering. I enjoy development because of the satisfaction I get by overcoming challenges. I am motivated by the opportunity that software provides to positively impact the life of an individual, and the world as a whole.",
      technology: "Angular, HTML, CSS, TS"
    }

  projects: Project[] = [
      {
          id: 1,
          name: 'MAGIC GAMMA TELESCOPE DATA ANALYSIS WITH TPOT',
          image: 'assets/images/dataset-card.jpg',
          subtitle: 'This project aims to automate the process of applying machine learning to the MAGIC Gamma Telescope dataset using TPOT (Tree-based Pipeline Optimization Tool). TPOT is an AutoML tool that simplifies the selection and application of machine learning models.'
      },
      {
          id: 2,
          name: 'MEDIA STORE',
          image: 'assets/images/media.jpeg',
          subtitle: 'This Project was built utilizing the Spring framework and offers an intuitive solution for all your media needs.'
      },
      {
          id: 3,
          name: 'OCR RECEIPT AND INVOICE PARSING',
          image: 'assets/images/receipt.jpeg',
          subtitle: 'This Python project demonstrates how to parse receipts using Optical Character Recognition (OCR) to extract financial data automatically. Utilizing an OCR API, the script processes receipt images and converts them into structured data, including store names, addresses, itemized purchases, and totals.'
      },
      {
          id: 4,
          name: 'SUDOKU SOLVER',
          image: 'assets/images/sudoku.png',
          subtitle: 'This project utilizes the Backtracking Algorithm to solve Sudoku puzzles. The Backtracking Algorithm is a systematic method for exploring possible solutions to Sudoku grids while ensuring adherence to the Sudoku rules. It efficiently fills each cell, backtracking when necessary, until a solution is found or its determined that no solution exists.'
      },
      {
          id: 5,
          name: 'PAC-MAN',
          image: 'assets/images/pacman.webp',
          subtitle: 'This project was built off the pygame library, recreating the classic arcade experience.'
      }
  ];
  

  }

