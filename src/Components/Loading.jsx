import React from 'react';
import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor='#cfebfd'
        color='purple'
      />
    </div>
  )
}

export default Loading