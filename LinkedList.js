class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key){
    const prevNode = this.getPrevious(key);
    if(prevNode === null){
      if(this.head.value !== key){
        console.log('Could not find that item');
        return;
      }
      else{
        item = new _Node(item, this.head);
        this.head = item;
        return;
      }
    }
    item = new _Node(item, prevNode);
    prevNode.next = item;
  }

  insertAfter(item, key){
    const found = this.find(key);
    if(found === null){
      console.log(`Could not find '${key}'`);
      return;
    }
    item = new _Node(item, found.next);
    found.next = item;
  }

  insertAt(item, index){
    let currNode = this.head;
    let currIndex = 1;
    if(!this.head){
      console.log('There are not enough items in the list... adding to the end instead');
      this.head = new _Node(item, null);
    }
    while(currIndex < index){
      if(!currNode.next && currIndex !== index-1){
        console.log('There are not enough items in the list... adding to the end instead');
        currNode.next = new _Node(item, null);
        return;
      }
      currIndex++;
      if(currIndex !== index)
        currNode = currNode.next;
    }
    item = new _Node(item, currNode.next);
    currNode.next = item;

  }

  getPrevious(item){
    let currNode = this.head;
    if (!this.head || this.head.value === item) {
      return null;
    }
    while (currNode.next !== null && currNode.next.value !== item) {
      currNode = currNode.next;
    }
    if (currNode.next === null) {
      return null;
    }

    return currNode;
  }
  find(item) { 
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){ 
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`Could not find '${item}'`);
      return;
    }
    previousNode.next = currNode.next;
  }

  

  

}

function findPrevious(item, list){
  let currNode = list.head;
  if (!list.head || list.head.value === item) {
    return null;
  }
  while (currNode.next !== null && currNode.next.value !== item) {
    currNode = currNode.next;
  }
  if (currNode.next === null) {
    return null;
  }
  return currNode;
}

function display(list){
  let currNode = list.head;
  if(!list.head)
    return;
  while(currNode !== null){
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list){
  
  let currNode = list.head;
  if(!list.head)
    return 0;
  let count = 0;
  while(currNode !== null){
    currNode = currNode.next;
    count++;
  }
  return count;
}

function isEmpty(list){
  return !list.head;
}

function findLast(list){
  let currNode = list.head;
  if(!list.head)
    return console.log('Empty List');
  while(currNode.next !== null){
    currNode = currNode.next;
  }
  return currNode.value;
}

function thirdFromEnd(list){
  let length = size(list);
  if(length < 3)
    return 'List is too small';
  if(length === 3)
    return list.head;
  let count = 0;
  let node = list.head;
  while(count < length - 3){
    node = node.next;
    count++;
  }
  return node.value;
}

function reverse(list, node = list.head, prevNode = null){
  if(!node){
    return;
  }
  if(!node.next){
    list.head = node;
    node.next = prevNode;
    return;
  }
  
  reverse(list, node.next, node);
  node.next = prevNode;
}

function getMiddle(list){
  let middle = Math.round(size(list)/2);
  let count = 0;
  let currNode = list.head;
  while(count < middle-1){
    currNode = currNode.next;
    count++;
  }
  return currNode.value;
}

function main(){
  const SSL = new LinkedList;
  SSL.insertLast('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  SSL.remove('squirrel');
  SSL.insertBefore('Athena', 'Apollo');
  SSL.insertAfter('Hotdog', 'Helo');
  SSL.insertAt('Kat', 3);
  SSL.remove('Tauhida');
 // display(SSL);
 // console.log(size(SSL));
  //console.log(isEmpty(SSL));
  //console.log(findLast(SSL));
  reverse(SSL);
  display(SSL);
  //console.log(thirdFromEnd(SSL));
  console.log(getMiddle(SSL));
}

main();


/*
  4. It is removing duplicate items in the list. O(n^2)




*/ 
