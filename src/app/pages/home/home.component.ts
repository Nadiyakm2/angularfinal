import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';  // Adjust the path according to your project structure
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 // Declare the 'recipes' property

  constructor(private api: ApiService) {}
  recipes: any[] = [];  
  ngOnInit(): void {
    this.api.getRecipes().subscribe(data => {
      console.log('Fetched Recipes:', data);  // Log the data to check if it's being fetched properly
      this.recipes = data;  // Assign fetched recipes to the `recipes` property
    }, error => {
      console.error('Error fetching recipes:', error);  // Log any errors
    });
  }
  
  
  trackById(index: number, item: any): number {
    return item.id;  // Assuming `id` is unique for each item
  }
  
}
