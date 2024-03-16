function Preloader() {
    return(
    <div className="text-center">
        <div className="spinner-border text-warning m-5" role="status">
            <span className="visually-hidden">Загрузка...</span>
        </div>
    </div>
    )
}
export { Preloader };