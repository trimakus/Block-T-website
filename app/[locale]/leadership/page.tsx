import CtaSection from '@/components/CtaSection'
import EmpoweringReliableResearch from '@/components/EmpoweringReliableResearch'
import FutureVision from '@/components/FutureVision'
import OurTeamMembers from '@/components/OurTeamMembers'
import React from 'react'

function page() {
  return (
    <>
    <div className='background-top-blue-gradient'>
    <div className='container text-center pb-2'>
        <h1 className='big-title text-dark-blue-gradient p-2 m-0'>How we are ?</h1>
        </div>
        <EmpoweringReliableResearch/>
        <FutureVision/>
        <OurTeamMembers/>
        <CtaSection/>
        </div>
    </>
  )
}

export default page