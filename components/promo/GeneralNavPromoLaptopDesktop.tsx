import stls from '@/styles/components/promo/GeneralNavPromoLaptopDesktop.module.sass'
import { TypeClassNames, TypeLinksHeaderPromo } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'

type TypeGeneralNavPromoLaptopDesktopProps = TypeClassNames & {
  links: TypeLinksHeaderPromo
}

const GeneralNavPromoLaptopDesktop = ({
  classNames,
  links
}: TypeGeneralNavPromoLaptopDesktopProps) => {
  const { setCategories } = useContext(ContextCategoriesContext)

  return (
    <nav
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <ul className={stls.links}>
        {links?.map(({ href, val, payload }, idx) => (
          <li key={val || '' + idx} className={stls.linkItem}>
            <a
              href={href || '#'}
              className={stls.link}
              onClick={() => setCategories({ payload })}>
              {val}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GeneralNavPromoLaptopDesktop
