import { analyzeFileForInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoyService } from 'src/app/services/categoy.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
   categories: any = [];
   isCategorie = false;
  constructor(private categorieService: CategoyService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(){
    this.categorieService.getCategories().subscribe(
    (data: object)=>{
      this.categories = data;
      this.isCategorie = true;
     }, error =>{

     }
    );
  }
}
