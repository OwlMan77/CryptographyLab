import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { KeywordEncodeComponent } from './keywordCipher/keyword-encode/keyword-encode.component';
import { KeywordDecodeComponent } from './keywordCipher/keyword-decode/keyword-decode.component';
import { CodeService } from './services/code.service';


@NgModule({
  declarations: [
    AppComponent,
    KeywordEncodeComponent,
    KeywordDecodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CodeService],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
