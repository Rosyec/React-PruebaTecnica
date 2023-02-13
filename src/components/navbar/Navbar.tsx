import { NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={ '/app/home' } className={ ({isActive}) => isActive ? 'nav-link active fw-semibold' : 'nav-link' }>
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={ '/app/create' } className={ ({isActive}) => isActive ? 'nav-link active fw-semibold' : 'nav-link' }>
                                    <a className="nav-link" aria-current="page" href="#">Create</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={ '/app/edit' } className={ ({isActive}) => isActive ? 'nav-link active fw-semibold' : 'nav-link' }>
                                    <a className="nav-link" aria-current="page" href="#">Edit</a>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
