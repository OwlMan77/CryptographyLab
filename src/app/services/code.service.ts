import { Injectable } from '@angular/core';

@Injectable()
export class CodeService {
  alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  constructor() { }

  uniqueArray (array: any[]) {
    const prims = {'boolean': {}, 'number': {}, 'string': {}}, objs = [];

    return array.filter(function(item) {
      const type = typeof item;
      if (type in prims) {
        return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
      } else {
    return objs.indexOf(item) >= 0 ? false : objs.push(item);
  }});
}
}
