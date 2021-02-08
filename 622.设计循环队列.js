//题号622

export default class MyCircularQueue {
  constructor (k) {
    //用来保存数据长度为k的数据结构
    this.list = Array(k)
    //队首指针
    this.front = 0
    //队尾指针
    this.rear = 0
    //队列长度
    this.max = k
  }

  enQueue(value) {
    if(this.isFull()){
      return false
    }else{
      //头指针和尾指针指向同一个数据时，证明满了
      this.list[this.rear] = value
      this.rear = (this.rear + 1) % this.max
      return true
    }
  }

  deQueue(){
    if(this.isEmpty()){
      return false
    }else{
      let v = this.list[this.front]
      this.list[this.front] = ''
      this.front = (this.front + 1) % this.max
      return true
    }
  }

  isEmpty(){
    return this.front === this.rear && !this.list[this.front]
  }

  isFull(){
    return this.front === this.rear && !!this.list[this.front]
  }

  Front(){
    if(this.isEmpty()){
        return -1
    }else{
      return this.list[this.front]
    }
  }

  Rear(){
    if(this.isEmpty()){
        return -1
    }else{
      let rear = this.rear - 1
      return this.list[rear < 0 ? this.max - 1 : rear]
    }
  }
}