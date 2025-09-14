import { useTranslations } from 'next-intl'
import React from 'react'

function LeadershipTitle() {
    const t = useTranslations()

  return (
    <div className='container text-center pb-2'>
            <h1 className='big-title text-dark-blue-gradient p-2 m-0'>{t('How_we_are')}</h1>
            </div>
  )
}

export default LeadershipTitle