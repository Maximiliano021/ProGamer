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
        <div className="flex flex-row h-10 w-28 rounded-lg relative bg-gray-300">
            <button data-action="decrement" className="my-auto p-2 border bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-5 rounded cursor-pointer outline-none" onClick={onRemove}>
                <span className="m-auto  text-sm font-thin">-</span>
            </button>
            <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={value} />
            <button data-action="decrement" className="my-auto p-2 border bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-5 rounded cursor-pointer outline-none" onClick={onAdd}>
                <span className="m-auto text-sm font-thin">+</span>
            </button>
        </div>
    )
}

export default ItemCount