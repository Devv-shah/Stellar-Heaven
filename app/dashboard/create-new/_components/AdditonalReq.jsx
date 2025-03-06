import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditonalReq({additionalRequirementInput}) {
  return (
    <div className='mt-5'>
      <label className='text-gray-700'>Enter Additional Requirements (Optional)</label>  
      <Textarea className="mt-2" onChange={(e)=>additionalRequirementInput(e.target.value)}/>
    </div>
  )
}

export default AdditonalReq
