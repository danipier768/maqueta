const HeaderCompont = () =>{
        return(
            <header className="container-fluid mb-4">
                <div className="container">
                    <div className="row">
                         <div className="col-12 conteiner-image"> 
                                <div className="row pt-5">
                                    <div className="col-1 text-white pag-of d-flex mb-5">
                                        <img src="https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg" alt="" className="w-25"/>
                                        <strong>PaginaOficial</strong>
                                    </div>
                                </div>  
                            </div>
                            <div className="col-12 text-white mb-2">
                                <h1>Quieres programar?</h1>
                            </div>
                            <div className="col-12 text-white my-2">
                                <p>Dale click al boton y aprende a programar, es muy facil y sencillo, no te pierdas.</p>
                            </div>
                            <div className="col-12 pb-4">
                                <a type="button" className="btn btn-danger w-25" href="#"><strong>Ingresa aqui</strong></a>
                            </div>
                    </div>
                </div>
            
            </header>
        
        
        )
    
}
 export default HeaderCompont