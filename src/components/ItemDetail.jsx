export const ItemDetail = ({ id, title, thumbnail, short_description,release_date }) => {
    const style = {
        'opacity':'0.08',
        'position':'absolute',
        'margin-left':'6rem',
        'z-index':'-2'
    }
    let urlVideo = `https://www.freetogame.com/g/${id}/videoplayback.webm`;

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
                        <div className="flex gap-6">
                            <button type="button" className="border-gray-500 cursor-pointer bg-transparent text-white py-4">Agregar a favoritos</button>
                            <button type="button" className="text-black cursor-pointer bg-white py-4">Comprar</button>
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
                        <video width="400" className="mx-auto mb-6" src={urlVideo} controls autoPlay/>    
                        <div className="text-center items-center align-center flex">
                            <div className="flex mx-auto gap-8">
                                <img className="w-40 rounded" src={thumbnail}/>
                                <img className="w-40 rounded" src={thumbnail}/>
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
        </div>
    )
}