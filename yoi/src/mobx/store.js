import {observable,action} from 'mobx' 

class mobxStore {
    @observable state = {
        print:"hello"
    }

    @action
    tes() {
        console.log("this.state=",this)

        this.state.print = "hoa"
    }
}

export default Store = new mobxStore()
