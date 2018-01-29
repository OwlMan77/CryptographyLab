import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputMessage: string;
  alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  encryptedAlphabet: string[] = [];
  answerArray = [];
  cipher: string;
  encryptedAnswer: string;

  encode() {
    if (!this.cipher) {
        alert('Please input a cipher');
    } else if (!this.inputMessage) {
        alert('Please input a message');
    } else {
        // split our word up into letters
        const cipherSplit = this.cipher.split('');

        console.log(cipherSplit);

        // set new alphabet to use cipher
      this.encryptedAlphabet = this.alphabet.filter((letter) => {
        return cipherSplit.indexOf(letter) < 0;
      })
      ;

      // send encrypted
      cipherSplit.forEach((letter) => {
        if (letter !== ' ') {
          this.answerArray.push(this.encryptedAlphabet.indexOf(letter));
        } else {
          this.answerArray.push(' ');
        }
      });

      // take message and encrypts it
      this.encryptedAnswer = this.answerArray.join();
    }
  }
}
