import React from "react";
import { View, Text, FlatList, ListRenderItem } from "react-native";
import ProductComponent, { IProduct } from "../Components/ProductComponent";

const ListScreen = () =>{
    const products:IProduct[] = [
        {
            name: "Tide Powder",
            category: 'Washing Power',
            weight: '80 gm',
            id: 1
        },
        {
            name: "Onion",
            category: 'Daily Needs',
            weight: '1 kg',
            id: 2
        },
        {
            name: "Milk Vita",
            category: 'Daily Products',
            weight: '1 Litre',
            id: 3
        },
        {
            name: "Amul Butter",
            category: 'Daily Products',
            weight: '500 gm',
            id: 4
        }
    ]
    // const handleRenderItem : ListRenderItem<IProduct> = ({item}) =>
    //     <Product name={item.name} id={item.id}/>;
    
    return(
        <View>
            <Text style={{fontSize: 25, textAlign: 'center'}}>Ecommerce</Text>
            {products.map((product)=> (
                <ProductComponent name={product.name} category={product.category} weight={product.weight} id={product.id} key={product.id}/>
            ))}
        </View>
    )
}

export default ListScreen;