class LinkedList {
    constructor() {
        this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = newNode;
      }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
      }

    size() {
        let count = 0;
        let current = this.head;
    
        while (current) {
          count++;
          current = current.nextNode;
        }
        
        return count;
    }

    getHead() {
        return this.head;
    }

    tail() {
        if (!this.head) {
          return null;
        }
    
        let current = this.head;
        while (current.nextNode) {
          current = current.nextNode;
        }
    
        return current;
      }

    at(index) {
        if (index < 0) {
            return null;
        }
    
        let current = this.head;
        let currentIndex = 0;
    
        while (current && currentIndex < index) {
          current = current.nextNode;
          currentIndex++;
        }
    
        return current;
    }  
  
    pop() {
        if (!this.head) {
          return null;
        }
    
        if (!this.head.nextNode) {
          const removedNode = this.head;
          this.head = null;
          return removedNode;
        }
    
        let current = this.head;
        let previous = null;
    
        while (current.nextNode) {
          previous = current;
          current = current.nextNode;
        }
    
        previous.nextNode = null;
        return current;
    }   

    contains(value) {
        let current = this.head;
    
        while (current) {
          if (current.value === value) {
            return true;
          }
          current = current.nextNode;
        }
    
        return false;
    }    

    find(value) {
        let current = this.head;
        let index = 0;
    
        while (current) {
          if (current.value === value) {
            return index;
          }
          current = current.nextNode;
          index++;
        }
    
        return null;
      }    

    toString() {
        let result = '';
        let current = this.head;
    
        while (current) {
          result += `(${current.value}) -> `;
          current = current.nextNode;
        }
    
        result += 'null';
        console.log(result);
        return result;
    }   
    
    insertAt(value, index) {
        if (index < 0 || index > this.size()) {
          console.error('Invalid index');
          return;
        }
    
        const newNode = new Node(value);
    
        if (index === 0) {
          newNode.nextNode = this.head;
          this.head = newNode;
        } else {
          let current = this.head;
          let previous = null;
          let currentIndex = 0;
    
          while (currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
          }
    
          previous.nextNode = newNode;
          newNode.nextNode = current;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) {
          console.error('Invalid index');
          return;
        }
    
        if (index === 0) {
          this.head = this.head.nextNode;
        } else {
          let current = this.head;
          let previous = null;
          let currentIndex = 0;
    
          while (currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
          }
    
          previous.nextNode = current.nextNode;
        }
      }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}
  
  
  
  
  