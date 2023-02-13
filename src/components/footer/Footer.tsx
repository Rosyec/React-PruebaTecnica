import Logo from '../../assets/react.svg'
export const Footer = () => {
  return (
    <>
        <footer className="container-fluid">
                <div className="row align-items-center">
                    <div className="col text-center">
                        <div className="row">
                            <div>
                                <img id="logo-java" src={ Logo } alt="" />
                            </div>
                            <div className="col align-self-center">
                                <div>
                                    <strong>Hecho con &#9829; por Rosyec</strong>
                                    <div>
                                        <small>© 2023 - Todos los derechos reservados </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  )
}
