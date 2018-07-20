import {observable,action} from 'mobx' 

class mobxStore {
    @observable state = {
        print:"llllpp"
    }

    @action
    tes() {
        console.log("this.state=",this)

        this.state.print = "hoa"
    }
}

export default Store = new mobxStore()
