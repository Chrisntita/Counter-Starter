    //bind this to all function
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)
    
    this.increaseBtn.addEventListener('click', this.increase)
    this.decreaseBtn.addEventListener('click', this.decrease)
    this.resetBtn.addEventListener('click', this.reset) 