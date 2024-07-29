// TASK 5 and 6
class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(ele){
        return this.items.push(ele);
    }
    dequeue(){
        if(this.isEmpty()){
            console.log(`the queue is empty`);
        }else{
            return this.items.shift();
        }
    }

    front(){
        if(this.isEmpty()){
            console.log('this Q is empty');
            return null;
        }return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }

    display(){
        if(this.isEmpty()){
            console.log('Q is M-T');
            return ;
        } console.log(this.items.join(", "));;
    }
}   

const Qu= new Queue();
Qu.enqueue(10);
Qu.enqueue(30);
Qu.enqueue(20);
console.log("Q after enq elements");
Qu.display();
console.log('Q after deq elements');
Qu.dequeue();
Qu.display();
console.log('front');
Qu.front();


class PrinterQueue{
    constructor(){
        this.queue = []
    }    

    addJob(value){
        this.queue.push(value)
    }

    processJob(){
        let length = this.queue.length 
        while(length > 0 ){
            console.log(this.queue.shift())
            length --
        }
    }
}


const printer = new PrinterQueue()

printer.addJob("Job 1")
printer.addJob("Job 2")
printer.addJob("Job 3")
printer.addJob("Job 4")
printer.processJob()