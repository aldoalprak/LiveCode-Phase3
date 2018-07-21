import {observable,action} from 'mobx' 

class mobxStore {
    @observable state = {
        turn:1
    }

}

export default Store = new mobxStore()
