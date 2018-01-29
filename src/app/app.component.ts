import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputEncodeMessage: string;
  inputDecodeMessage: string;
  alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  encryptedAlphabet: string[] = [];
  answerIndexArray: any[] = [];
  encodeAnswerArray = [];
  decodeAnswerArray = [];
  encodeCipher: string;
  decodeCipher: string;
  encryptedAnswer: string;
  decryptedAnswer: string;

  keywordEncode() {
    if (!this.encodeCipher) {
        alert('Please input a cipher');
    } else if (!this.inputEncodeMessage) {
        alert('Please input a message');
    } else {

        // clears previous input
        this.clear('encode');
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
        // pushes each new letter into a final message array
      this.answerIndexArray.forEach((index) => {
        if (index !== ' ') {
          this.encodeAnswerArray.push(cipherArray[index]);
        } else {
          this.encodeAnswerArray.push(cipherArray[index]);
        }
      });


      // take message array and joins it into a coded message
      this.encryptedAnswer = this.encodeAnswerArray.join('');
    }
  }


  clear(params: string) {
      this.encryptedAlphabet = [];
      this.answerIndexArray = [];
    if (params === 'encode') {
      this.encodeAnswerArray = [];
      this.encryptedAnswer = null;
    } else if (params === 'decode') {
      this.decodeAnswerArray = [];
      this.decryptedAnswer = null;
    }

  }
}
