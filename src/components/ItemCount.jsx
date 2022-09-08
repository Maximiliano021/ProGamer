import { useState } from 'react'

const ItemCount = ({ stock, initial }) => {
    let [value, setValue] = useState(Number(initial))

    const onRemove = () => {
        value != 1 ? setValue(value -= 1) : '';
    }
    const onAdd = () => {
        value != Number(stock) ? setValue(value += 1) : console.log('sin stock')
    }

    return (
        <div className="flex flex-row h-6 w-28 rounded-lg relative bg-gray-300">
            <button disabled={value<=1} data-action="decrement" className="my-auto flex items-center p-1 border bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-5 rounded outline-none" onClick={onRemove}>
                -
            </button>
            <span className="outline-none focus:outline-none justify-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700">{value}</span>
            <button data-action="increment" className="my-auto items-center flex p-1 border bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-5 rounded cursor-pointer outline-none" onClick={onAdd}>
                +
            </button>
        </div>
    )
}

export default ItemCount