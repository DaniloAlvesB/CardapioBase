import additionalsAndComplements from "../config/additionalsAndComplements"
import db from "../config/db"

const productFunctions = {

    getProductByName: (name: any) => {

        var products = db.products
        
        if(products.hasOwnProperty(name)){
            return products[name]
        }else{
            return null
        }

    },

    getAdditionalByName: (name: any) => {

        var items = additionalsAndComplements.additionals

        if(items.hasOwnProperty(name)){
            return items[name]
        }else{
            return null
        }

    },

    getComplementByName: (name: any) => {

        var items = additionalsAndComplements.complements

        if(items.hasOwnProperty(name)){
            return items[name]
        }else{
            return null
        }

    },

}

export default productFunctions