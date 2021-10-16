import React from 'react'

function Buttons({title, onPress}) {
    return (
        <button onPress={onPress} className="block bg-blue-500 items-center w-auto rounded-full px-8 py-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            <span className="text-white text-lg">{title}</span>
        </button>
    )
}

export default Buttons
