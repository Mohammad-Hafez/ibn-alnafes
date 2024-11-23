import '@/styles/globals.css'
import { useTranslation } from '../i18n'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <>
      <div className='b-gray-100 py-6'>
        <div className='flex items-center justify-between w-5/6 mx-auto'>
          <h5 className='blueGradiant font-semibold text-3xl'>homeeeeeeeeeeeeeee IBN EL-NAFEES</h5>
        </div>
      </div>
    </>
  )
}