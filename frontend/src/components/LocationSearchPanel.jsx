import React from 'react'

const LocationSearchPanel = ({setPanelOpen,setVehiclePanel}) => {

    const location = [
        "24B, Near Kalarikudy house, Thalakode p.o, Ernakulam",
        "24B, Near Kalarikudy house, Thalakode p.o, Ernakulam",
        "24B, Near Kalarikudy house, Thalakode p.o, Ernakulam",
        "24B, Near Kalarikudy house, Thalakode p.o, Ernakulam",
    ]
  return (
    <div>
        {location.map((loc, index)=>{
            return (
                <div key={index} onClick={()=>{
                    setVehiclePanel(true);
                    setPanelOpen(false);
                }} className='flex items-center justify-start p-2 my-2 gap-4 border-2 rounded-xl border-gray-100  active:border-black'>
                    <h2 className='bg-[#eee] h-12 w-16  flex items-center justify-center rounded-full'><i className="ri-map-pin-3-line"></i></h2>
                    <h4 className='font-normal'> {loc}</h4>
                </div>
            )
        })}
      
    </div>
  )
}

export default LocationSearchPanel
