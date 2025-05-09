import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "../../../../core/models/menu-item";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {MatInput} from "@angular/material/input";
import {AppConst} from "../../../app-const";
import {Router} from "@angular/router";
import {size} from "lodash";

const {appMenu} = AppConst;

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    NgIf,
    MatFormField,
    FormsModule,
    MatInput,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent implements OnInit {
  isShow = false;
  searchedText = '';
  searchTextUpdated = new Subject<string>();
  menuRes: any = [];
  protected readonly size = size;
  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,) {
  }

  ngOnInit() {
    this.searchedText = '';
    this.searchTextUpdated.pipe(
      debounceTime(300),
      )
      .subscribe(value => {
        this.search(value)
      });
  }

  show() {
    this.searchedText = '';
    this.menuRes = [];
    this.isShow = true;
    this.cdr.detectChanges();
    this.searchInput?.nativeElement.focus();
  }

  search(value: string) {
    this.menuRes = appMenu.map(menu => menu.items).flat().filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()));
  }

  onMenuClick(url: string) {
    this.isShow = false;
    this.router.navigate([url]).then();
  }

}
