import './styles.css'
import { useNavigate, useParams } from "react-router-dom"
import productFunctions from "../../services/products"
import { useEffect, useState } from "react"

//Components

export default function Product() {

    const params = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState(Object)
    const [renderAdditionals, setRenderAdditionals] = useState(Array<Object>)

    useEffect(() => {
        setProduct(productFunctions.getProductByName(params.productName))
    }, [])

    useEffect(() => {
        if(product && Object.keys(product).length > 0){
            if(product.additionals.avaible){
                product.additionals.items.forEach((item: any) => {
                    setRenderAdditionals([...renderAdditionals, {
                        additional: item,
                        elementId: item.label + "_quantity"
                    }])
                })
            }

        }
    }, [product])
    
    return (
        <div id="content" className="py-3">

            {product != null && Object.keys(product).length > 0 ? 
            
                <div className="bg-md-light d-flex flex-column gap-2 rounded-4">

                    <div className="d-flex flex-row aligm-items-center">
                        <button className="btn btn-light mx-2" onClick={() => navigate('/Cardapio')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                        </button>
                        <div className="w-100 text-center mt-1">
                            <h3 className="m-0 p-0">{product.name}</h3>
                        </div>
                    </div>

                    <div id="product-img">
                        <img src={product.imgLink} alt="" />
                    </div>

                    <div className='container'>

                        {product.complements.avaible ? 
                            <div>
                                <h5>Complementos</h5>
                            </div>
                            : false
                        }

                        {product.additionals.avaible ? 
                            <div className='d-flex flex-column pt-3'>

                                <h5>Adicionais</h5>

                                {product.additionals.items.map((el: any, index: number) => {
                                    
                                    var item = productFunctions.getAdditionalByName(el)
                                    var item_select = (<div></div>)

                                    if(item.type == 'quantity'){
                                        
                                        function alterItemQuantity(name: string, quantity: number){
                                            var element: any = document.getElementById(name)
                                            if(element != null){
                                                var actQuantity: number = parseInt(element.innerText)
                                                if((quantity == -1 && actQuantity > 0) || quantity == 1){
                                                    element.innerText = actQuantity + quantity
                                                }
                                            }
                                        }

                                        item_select = (
                                            <div className='d-flex flex-row align-items-center justify-content-end gap-2 col'>

                                                <button className='circle-btn' onClick={() => {
                                                    alterItemQuantity(item.label + "_quantity", -1)
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                                                    </svg>
                                                </button>
                                                <b id={item.label + "_quantity"}>0</b>
                                                <button className='circle-btn' onClick={() => {
                                                    alterItemQuantity(item.label + "_quantity", 1)
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                    </svg>
                                                </button>

                                            </div>
                                        )
                                    }else{
                                        item_select = (
                                            <div className='d-flex flex-row align-items-center justify-content-end gap-2 col'>
                                                <div className="form-check form-switch d-flex align-items-center" style={{height: '50px'}}>
                                                    <input className="form-check-input" type="checkbox" role="switch" id={item.label + "_quantity"} />
                                                </div>
                                            </div>
                                            )
                                    }

                                    return(
                                        <div key={index} className='border-bottom border-dark border-opacity-25 d-flex flex-row align-items-cente justify-content-between r gap-2 p-2'>
                                            
                                            <div className='col-8 d-flex align-items-center gap-2 flex-column'>
                                                <div className='w-100 d-flex flex-row justify-content-start'>
                                                    <b>{item.label}</b> - R$ {item.price.toFixed(2)}
                                                </div>
                                                <div className='w-100 d-flex flex-row justify-content-start text-secondary'>
                                                    {item.description}
                                                </div>
                                            </div>

                                            {item_select}

                                        </div>
                                    )
                                })}

                                <hr />
                            </div>
                            : false
                        }

                    </div>

                </div>
                :
                <div className="px-2 d-flex flex-column align-content-center justify-content-center text-center">
                    <h4>Ops... Produto não encontrado</h4>
                    <div>
                        <button className="btn btn-primary" onClick={() => navigate('/Cardapio')}>Voltar</button>
                    </div>
                </div>

            }


        </div>
    )

}