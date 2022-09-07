function CartWidget() {
    return (
        <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <i className='bx bxs-cart bx-sm text-white'></i>
                    <span className="badge badge-sm bg-dark indicator-item">2</span>
                </div>
            </label>
            <div className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg"> Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">Ver Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartWidget