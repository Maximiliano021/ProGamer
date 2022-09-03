import ItemCount from './ItemCount'

export const Item = ({ key, title, thumbnail, short_description, game_url }) => {
    const price = Math.floor(Math.random() * (8000 - 1000) + 1000)
    return (
        <div id={key} className="max-w-lg m-auto card">
            <div className="bg-zinc-700 rounded-lg max-w-sm p-4">
                <a href={game_url} className="w-full h-40 flex mx-auto">
                    <img className="rounded mx-auto" src={thumbnail} alt={title} />
                </a>
                <div className="p-2 text-slate-300">
                    <h5 className="font-bold text-2xl text-white tracking-tight mb-2">{title}</h5>
                    <p className="">{short_description}</p>
                    <h3 className="font-bold my-4 text-xl text-white">$ {price}</h3>
                    <div className="w-full flex justify-between">
                        <a className="text-white bg-blue-700 hover:opacity-75 hover:text-white font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                            Agregar
                        </a>
                        <ItemCount stock="4" initial="1" />
                    </div>
                </div>
            </div>
        </div>
    )
}