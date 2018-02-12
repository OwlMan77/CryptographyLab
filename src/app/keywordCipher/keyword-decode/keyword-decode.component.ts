import { Component, OnInit } from '@angular/core';
import {CodeService} from '../../services/code.service';

@Component({
  selector: 'app-keyword-decode',
  templateUrl: './keyword-decode.component.html',
  styleUrls: ['./keyword-decode.component.css']
})
export class KeywordDecodeComponent implements OnInit {
  inputDecodeMessage: string;
  alphabet: string[];
  encryptedAlphabet: string[] = [];
  answerIndexArray: any[] = [];
  decodeAnswerArray: string[] = [];
  decodeCipher: string;
  decryptedAnswer: string;

  constructor(
    private codeService: CodeService
  ) { }

  ngOnInit() {
    this.alphabet = this.codeService.alphabet;
  }

  keywordDecode() {
    if (!this.decodeCipher) {
        alert('Please input a cipher');
    } else if (!this.inputDecodeMessage) {
        alert('Please input the code');
    } else {

        this.decodeCipher = this.decodeCipher.toLowerCase();

        // clears previous input
        this.clear();

        // split our word up into letters
        const cipherArray = this.decodeCipher.split('');

        // set new alphabet to use cipher
      this.encryptedAlphabet = this.alphabet.filter((letter) => {
        return cipherArray.indexOf(letter) < 0;
      });

        // adds our cipher to beginning of array
      cipherArray.push.apply(cipherArray, this.encryptedAlphabet);

        // spilts our message into an array
      const messageArray = this.inputDecodeMessage.split('');


        // finds the index of each letter in the cipher alphabet
      messageArray.forEach((letter) => {
        if (letter !== ' ') {
         this.answerIndexArray.push(cipherArray.indexOf(letter));
       } else {
          this.answerIndexArray.push(' ');
       }
      });

        // pushes each new letter into a final message array
      this.answerIndexArray.forEach((index) => {
        if (index !== ' ') {
          this.decodeAnswerArray.push(this.alphabet[index]);
        } else {
          this.decodeAnswerArray.push(' ');
        }
      });


      // take message array and joins it into a decoded message
      this.decryptedAnswer = this.decodeAnswerArray.join('');
    }
  }

  clear() {
    this.encryptedAlphabet = [];
    this.answerIndexArray = [];
    this.decodeAnswerArray = [];
    this.decryptedAnswer = null;
}
}
