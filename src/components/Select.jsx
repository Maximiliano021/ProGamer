import { useState } from 'react'
import { Link } from "react-router-dom"
import productsJSON from '../productos'

export const Select = () => {
	const [filter, setFilter] = useState('')
    let generos = []
    const handlerClick = (e) => {
		setFilter(e.target.value)
	}

    productsJSON.map((item, index) => generos[index] = (item.genre))
	generos = [...new Set(generos)]
	
	return(
		<div className="flex justify-end">
		  <div className="mb-3 xl:w-80 flex gap-4">
            {
                filter != '' && <Link to={`/ProGamer/categ/${filter}`} className="btn btn-primary">Filtrar</Link>
            }
		    {/* <select className="form-select cursor-pointer appearance-none text-center block w-full px-3 py-1.5 text-base font-normal
		      text-gray-700
		      bg-white bg-clip-padding bg-no-repeat
		      border border-solid border-gray-300
		      rounded
		      transition
		      ease-in-out
		      m-0
		      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
		        <option selected className="hidden">Categorias</option>
				{
					generos.map(gen => <option value={gen} className="cursor-pointer" onClick={handlerClick}>{gen}</option>)
				}
		    </select> */}
		  </div>
		</div>
	)
}