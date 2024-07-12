import { useNavigate } from "react-router-dom"

export default function ErrorPage() {

    const navigate = useNavigate()

    return (
        <div 
            className="bg-secondary d-flex flex-column aligm-items-center justify-content-center text-center"
            style={{width: '100vw', height: '100vh'}}
        >
            <div className="box-shadow-1 modal-branca mx-1 mx-md-4">
                <h4>Houve um erro inesperado. Tente novamente!</h4>
                <button className="btn btn-primary mt-2" onClick={() => navigate('/')}>Voltar para o ínicio</button>
            </div>
        </div>
    )
}