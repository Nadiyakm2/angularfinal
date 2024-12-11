import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';  // Adjust the path to the correct location of ApiService

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
  recipe: any;  // Declare the 'recipe' property

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // Assuming the recipe id is passed in the URL
    if (id) {
      this.api.getRecipe(id).subscribe((data: any) => {  // Specify the type of 'data'
        this.recipe = data;  // Assign the fetched recipe to the 'recipe' property
      });
    }
  }
}
