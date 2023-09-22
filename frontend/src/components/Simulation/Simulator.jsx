import React from 'react'

const Simulator = () => {
  const [values, setValues] = React.useState({
    product_price: 0,
    production_cost: 0,
  })

  const handleSliderChange = (event, sliderName) => {
    setValues({
      ...values,
      [sliderName]: event.target.value,
    });
    console.log(values)
  };

  return (
    <div className='md:col-span-3 px-10 py-10'>
      <div className='grid grid-cols-1 my-10'>
        <div className='flex my-5 items-center'>
          <label className="text-white text-xl font-semibold">Product Price</label>
          <input onChange={(e) => handleSliderChange(e, 'product_price')} type="range" min="450" max="1000" class="slider" id="myRange" />
          {values && <label className='ml-3 text-white text-xl font-bold'>{values.product_price}</label>}
        </div>
        <div className='flex my-5 items-center'>
          <label className="text-white text-xl font-semibold">Production Cost</label>
          <input onChange={(e) => handleSliderChange(e, 'production_cost')} type="range" min="1" max="450" class="slider" id="myRange" />
          {values && <label className='ml-3 text-white text-xl font-bold'>{values.production_cost}</label>}
        </div>
        <div className='flex my-5 items-center'>
          <label className="text-white text-xl font-semibold">Production Cost</label>
          <input onChange={(e) => handleSliderChange(e, 'production_cost')} type="range" min="1" max="450" class="slider" id="myRange" />
          {values && <label className='ml-3 text-white text-xl font-bold'>{values.production_cost}</label>}
        </div>
        <div className='flex my-5 items-center'>
          <label className="text-white text-xl font-semibold">Production Cost</label>
          <input onChange={(e) => handleSliderChange(e, 'production_cost')} type="range" min="1" max="450" class="slider" id="myRange" />
          {values && <label className='ml-3 text-white text-xl font-bold'>{values.production_cost}</label>}
        </div>
        <div className='flex my-5 items-center'>
          <label className="text-white text-xl font-semibold">Production Cost</label>
          <input onChange={(e) => handleSliderChange(e, 'production_cost')} type="range" min="1" max="450" class="slider" id="myRange" />
          {values && <label className='ml-3 text-white text-xl font-bold'>{values.production_cost}</label>}
        </div>
      </div>
    </div>

  )
}

export default Simulator