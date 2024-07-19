import './styles.css'
import db from '../../config/db'

//Components
import Card from '../Card'
import { useEffect, useState } from 'react'

interface Props {
    products: Array<Object>,
    itemsNumber: number
}

export default function ProductCarousel(props: Props) {

    const [numberCards, setNumberCards] = useState(props.itemsNumber)
    const [index, setIndex] = useState(0)
    const [productKeys, setProductKeys] = useState(Array<String>)

    useEffect(() => {

        setProductKeys(Object.keys(props.products))

    }, [props.products])

    useEffect(() => {

        if(props.itemsNumber <= 0){
            setNumberCards(db.products_keys.length)
        }

    }, [props.itemsNumber])

    return (
        <div id="cardCaroucel" className="py-2 d-flex flex-row gap-2" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
            {productKeys.slice(index, index + numberCards).map((el: any, index: number) => {
                const item = db.products[el]
                return (
                    <Card key={index} product={item} />
                )
            })}
        </div>
    )
}