import { writable ,derived} from "svelte/store";
// import Products from '../localProducts';
import url from '../Strapi/URL';
import getProducts from "../Strapi/getProducts";

const store =writable([],()=>{
    setProducts();
    return ()=>{}
});

async function setProducts(){
    let products= await getProducts();
    if(products){
       products= flatten(products);
       store.set(products);
    }
}

function flatten(data)
{
   
   return data.map(items=>{

    // let image=items.image.url;
    let image=`${url}${items.image.url}`;
    return {...items,image};
    });
}


export const FeaturedStore=derived( store , $featured =>
            { return $featured = $featured.filter(items => items.featured === true )
            }
     );

   
export default store;
