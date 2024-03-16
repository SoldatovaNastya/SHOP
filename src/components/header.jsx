function Header() {
    return <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container container-fluid">
            <a className="navbar-brand d-flex" href="!#">
                <img src="/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top logo"/>
                <p className="text-warning text">React shop</p>
            </a>
            <button className="btn btn-outline-warning" type="submit">Shop</button>
        </div>
    </nav>
}
export { Header };