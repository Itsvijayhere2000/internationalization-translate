import { Component ,OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Add supported languages
    this.translate.addLangs(['en', 'fr']);

    // Set the default language
    this.translate.setDefaultLang('en');

    // Use the default language
    this.translate.use('en');  
  }
  useLanguage(language: string) {
    // Use the selected language
    this.translate.use(language);
  }

}
