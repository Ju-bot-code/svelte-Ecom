import { writable  } from "svelte/store";

const gloablStore = writable({
    sidebar:false,
    cart:false,
    alert:false
});

const store={
    subscribe : gloablStore.subscribe ,
    ToggleItem:(item,value)=>{
        gloablStore.update(storeValues=>{
            return {...storeValues,[item]:value};
        })
    }
};

export default  store;
// export default  gloablStore;