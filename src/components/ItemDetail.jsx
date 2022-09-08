import ItemCount from './ItemCount'

export const ItemDetail = ({ id, title, thumbnail, short_description, release_date }) => {
    const style = {
        'opacity': '0.08',
        'position': 'absolute',
        'margin-left': '6rem',
        'z-index': '-2'
    }
    let urlVideo = `https://www.freetogame.com/g/${id}/videoplayback.webm`;
    const price = Math.floor(Math.random() * (8000 - 1000) + 1000)

    return (
        <div className="w-full">
            <img className="w-4/6 shadow" src={thumbnail} style={style} />
            <div id="detail" className="w-5/6 mx-auto items-start grid gap-8 text-white p-6" >
                <div className="w-full flex gap-10">
                    <div className="w-7/12 text-start grid gap-8">
                        <div className="flex gap-8">
                            <span className="bg-white text-black w-40 rounded text-center">{release_date}</span>
                            <p>Tiempo promedio de: 72 horas</p>
                        </div>
                        <h1 className="text-7xl">{title}</h1>
                        <div className="flex gap-6 items-center">
                            <button type="button" className="border-gray-500 cursor-pointer bg-transparent text-white py-4">Agregar a deseados</button>
                            <label htmlFor="my-modal-6" className="btn py-4 btn-primary">Comprar</label>
                            <div className="">
                                <label className="block">Precio:</label>
                                <span className="text-white block text-2xl text-center align-center my-auto">${price}</span>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <label className="text-3xl">Excepcional</label>
                            <div className="block text-center">
                                <label className="block text-3xl">#1</label>
                                <label className="block text-gray-200">Action</label>
                            </div>
                            <div className="block text-center">
                                <label className="block text-3xl">#1</label>
                                <label className="block text-gray-200">Top 2013</label>
                            </div>
                        </div>
                        <div>
                            <label className="text-2xl">About</label>
                            <p>{short_description}</p>
                        </div>
                    </div>
                    <div className="w-5/12 items-center align-center">
                        <video width="400" className="mx-auto mb-6" src={urlVideo} controls autoPlay />
                        <div className="text-center items-center align-center flex">
                            <div className="flex mx-auto gap-8">
                                <img className="w-40 rounded" src={thumbnail} />
                                <img className="w-40 rounded" src={thumbnail} />
                            </div>
                        </div>
                    </div>
                    {/* <ItemList items={item}/> */}
                    {/* {item.length? item.map(i=><li>{i.title}</li>) : <Loading/>} */}
                </div>
                <div className="text-start items-start">
                    <div className="">
                        <label className="text-gray-500">Plataforms</label>
                        <p>PC</p>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom p-0 sm:modal-middle">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={thumbnail} alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Excente eleccion!</h2>
                            <p>Desea agregar el juego al carrito de compras?</p>
                            <div className='text-start border-t-2'>
                                <label>PRECIO TOTAL: $ {price}</label>
                                <div className="card-actions justify-between items-center">
                                    <ItemCount stock="6" initial="1"/>
                                    <label htmlFor="my-modal-6" className="btn btn-primary">Si agregar</label>
                                </div>
                            </div>
                        </div>
                        <label htmlFor="my-modal-6" className="btn">Salir!</label>
                    </div>
            </div>
        </div>
    )
}