import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories;
  public imageUrl = "http://rjtmobile.com/grocery/images/"

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategory()
          .subscribe(data => {
            this.categories = data.data;
          });
  }

}
