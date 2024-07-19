import { useNavigate } from 'react-router-dom'
import './styles.css'

interface Props {
    product: any
}

export default function Card(props: Props) {

    const navigate = useNavigate()

    var basePrice = props.product.basePrice
    var actPrice = props.product.actPrice
    var descount = false

    if(actPrice < basePrice && actPrice != 0){
        descount = true
    }

    console.log(props.product)

    return (
        <div className="card" style={{width: '18rem'}} onClick={() => navigate('/Cardapio/product/' + props.product.name)}>
            <div className='card-image-div'>
                <img src={props.product.imgLink} className="card-img-top" alt={props.product.name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-description text-secondary m-0">{props.product.description}</p>
            </div>
            <div>
                {descount ? 
                    <div className='d-flex flex-row p-2 justify-content-center align-items-end gap-2'>
                        <s className='text-danger'>{basePrice}</s>
                        <b className='text-success'>R$ {actPrice}</b>
                    </div>
                    : 
                    <div className='d-flex flex-row p-2 justify-content-center'>
                        <b className='text-success'>R$ {basePrice}</b>
                    </div>}
            </div>
        </div>
    )

}