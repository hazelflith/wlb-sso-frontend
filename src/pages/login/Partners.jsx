import React from 'react'

export default function Partners({data}) {
  return (
    <div className="flex flex-row gap-x-4 gap-y-2 justify-center flex-wrap mb-2">
      {data.map((val, i) => (
        <img key={i} src={val.img} alt={val.alt} className="h-4 md:h-5 lg:h-6 w-auto" />
      ))}
    </div>
  )
}
