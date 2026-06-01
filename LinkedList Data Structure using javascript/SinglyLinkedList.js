class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        }else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;

    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAt(data,index) {
        if(index <0 || index >this.size) {
            console.error('Invalid index..')
            return false;
        }

        if(index === 0) {
            this.prepend(data);
            return true;
        }

        const newNode = new Node(data);
        let current  = this.head;
        let previous = null;
        let count = 0;

        while(count<index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
        return true;
    }

    removeAt(index) {
        if(index < 0 || index >= this.size) {
            console.error('Invalid index');
            return null;
        }
        let removeData;
        if(index === 0) {
            remmoveData = this.head.data;
            this.head = this.head.next;
        }else {
            let current = this.head;
            let previous = null;
            let count = 0;

            while(count<index) {
                previous = current;
                current = current.next;
                count++;
            }
            
            removeData = current.data;
            previous.next = current.next;
        }

        this.size--;
        return removeData;
    }

    isEmpty() {
        return this.size ===0;
    }
    getSize() {
        return this.size;
    }

    printList() {
        
    }
}