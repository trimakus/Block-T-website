import CtaSection from '@/components/CtaSection'
import EmpoweringReliableResearch from '@/components/EmpoweringReliableResearch'
import FutureVision from '@/components/FutureVision'
import LeadershipTitle from '@/components/LeadershipTitle'
import OurTeamMembers from '@/components/OurTeamMembers'
import React from 'react'

function page() {
  return (
    <>
    <div className='background-top-blue-gradient'>
      <LeadershipTitle/>
        <EmpoweringReliableResearch/>
        <FutureVision/>
        <OurTeamMembers/>
        <CtaSection/>
        </div>
    </>
  )
}

export default page