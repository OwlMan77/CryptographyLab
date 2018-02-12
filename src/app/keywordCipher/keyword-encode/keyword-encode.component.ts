import { Component, OnInit } from '@angular/core';
import { CodeService} from '../../services/code.service';

@Component({
  selector: 'app-keyword-encode',
  templateUrl: './keyword-encode.component.html',
  styleUrls: ['./keyword-encode.component.css']
})
export class KeywordEncodeComponent implements OnInit {
  alphabet: string[];
  inputEncodeMessage: string;
  encryptedAlphabet: string[] = [];
  answerIndexArray: any[] = [];
  encodeAnswerArray: string[] = [];
  encodeCipher: string;
  encryptedAnswer: string;

  constructor( private codeService: CodeService) {
  }

  ngOnInit() {
    this.alphabet = this.codeService.alphabet;
  }

  keywordEncode() {
    if (!this.encodeCipher) {
        alert('Please input a cipher');
    } else if (!this.inputEncodeMessage) {
        alert('Please input a message');
    } else {

        this.encodeCipher = this.encodeCipher.toLowerCase();

        // clears previous input
        this.clear();

        // split our word up into letters
        const cipherArray = this.encodeCipher.split('');

        // set new alphabet to use cipher
      this.encryptedAlphabet = this.alphabet.filter((letter) => {
        return cipherArray.indexOf(letter) < 0;
      });

        // adds our cipher to beginning of array
      cipherArray.push.apply(cipherArray, this.encryptedAlphabet);

        // spilts our message into an array
      const messageArray = this.inputEncodeMessage.split('');


        // finds the index of each letter in the alphabet
      messageArray.forEach((letter) => {
        if (letter !== ' ') {
         this.answerIndexArray.push(this.alphabet.indexOf(letter));
       } else {
          this.answerIndexArray.push(' ');
       }
      });

      console.log(this.answerIndexArray);

        // pushes each new letter into a final message array
      this.answerIndexArray.forEach((index) => {
        if (index !== ' ') {
          this.encodeAnswerArray.push(cipherArray[index]);
        } else {
          this.encodeAnswerArray.push(' ');
        }
      });


      // take message array and joins it into a coded message
      this.encryptedAnswer = this.encodeAnswerArray.join('');
    }
  }

  clear() {
      this.encryptedAlphabet = [];
      this.answerIndexArray = [];
      this.encodeAnswerArray = [];
      this.encryptedAnswer = null;
  }

}
