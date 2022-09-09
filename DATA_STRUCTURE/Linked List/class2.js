class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next:null
        };
        this.tail = this.head;
        this.length = 1
    }
    append(number){
        const newNode = {
            value: number,
            // Note the next: here is suppose to be set to null
            next:this.numberTwo.value
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        
    }
    append(numberTwo){
        const newNode = {
            value: numberTwo,
            next:null
        };
        this.tail.next =newNode;
        this.tail = newNode;
        this.length++
    }

    prepend(addAtTheBegining){
        let newNode3 = {
            value:addAtTheBegining,
            next:null
            
        }
        newNode3.next = this.head;
        this.head = newNode3
        this.length++
        return this
    }

    printlist(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !==null){
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value)

        }

    }
}

const mylinkedlist = new LinkedList(10);
console.log(mylinkedlist)
const appendMethod = mylinkedlist.append(20);
const appendMethod2 = mylinkedlist.append(30);
const prepend = mylinkedlist.prepend(5);
mylinkedlist.printlist();
mylinkedlist.insert(200, 88)
// console.log(appendMethod)
// console.log(appendMethod2)
// console.log(prepend)