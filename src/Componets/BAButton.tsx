import React from 'react'

type propstype = {
    label: string;
    onClick?: any;
}

const BAButton = (props: propstype) => {
  const {label, onClick} = props;
    return (
    <button onClick={onClick} className="rounded-full bg-teal-700 p-2 text-white px-8">
        {label}
    </button>
  )
}

export default BAButton