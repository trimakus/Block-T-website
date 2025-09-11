import ChooseDeepT from '@/components/ChooseDeepT'
import CostOfIrreproducibility from '@/components/CostOfIrreproducibility'
import CtaSection from '@/components/CtaSection'
import DeepTAdvancingResearch from '@/components/DeepTAdvancingResearch'
import DeepTBenefits from '@/components/DeepTBenefits'
import DeepTHero from '@/components/DeepTHero'
import DeepTPreclinicalResearch from '@/components/DeepTPreclinicalResearch'
import DeepTPreclinicalServices from '@/components/DeepTPreclinicalServices'
import DeepTPreclinicalSolution from '@/components/DeepTPreclinicalSolution'
import React from 'react'

function page() {
  return (
    <>
      <DeepTHero/>
      <DeepTPreclinicalResearch/>
      <CostOfIrreproducibility/>
      <DeepTBenefits/>
      <ChooseDeepT/>
      <DeepTPreclinicalSolution/>
      <DeepTAdvancingResearch/>
      <DeepTPreclinicalServices/>
      <CtaSection />
    </>
  )
}

export default page