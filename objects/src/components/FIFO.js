class FIFO {
    constructor() {
        this.arr = [];
    }

    insert (item) {
       this.arr.push(item);
        return this.arr;
    }

    delF() {
        if(this.arr.length > 0) {
            this.arr.shift();
        }
    
        return this.arr;
    }

    delO() {
        if(this.arr.length > 0) {
            this.arr.pop();
        }
        
        return this.arr;
    }
    
}

export default FIFO;