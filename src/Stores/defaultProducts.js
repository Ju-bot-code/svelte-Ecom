import { writable ,derived} from "svelte/store";
import Products from '../localProducts';

const store =writable(flatten([...Products]));

function flatten(data)
{
   
   return data.map(items=>{

    let image=items.image.url;
    return {...items,image};
    });
}


export const FeaturedStore=derived( store , $featured =>
            { return $featured = $featured.filter(items => items.featured === true )
            }
     );

   
export default store;
