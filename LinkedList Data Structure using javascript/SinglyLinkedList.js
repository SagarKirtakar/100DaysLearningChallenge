function Node(value, next = null) {
    this.value = value;
    this.next = next;
}

const node = new Node(2);
console.log(node);