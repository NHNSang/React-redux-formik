import React from 'react'

const DemoProps = ({number,setNumber}) => {
    // console.log(props)
  return (
    <div>
        <p>{number}</p>
      <button
        onClick={() => {
          setNumber(number + 10);
        }}
        className="py-2 px-5 bg-green-500 text-white rounded-lg"
      >
        Tăng giá trị
      </button>
    </div>
  )
}

export default DemoProps