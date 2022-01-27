import stls from '@/styles/components/sections/SectionProgramForWhom.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { IconWave } from '@/components/icons'
import { ImgForWhom } from '@/components/imgs'

type TypeSectionProgramForWhomProps = TypeClassNames

const SectionProgramForWhom = ({
  classNames
}: TypeSectionProgramForWhomProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.forWhom) return <></>

  console.log(program?.forWhom)
  console.log(program?.forWhomPicture)

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Для кого эта программа?</GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.left}>
            <p className={stls.desc}>
              Образовательные программы института сертифицированы и имеют
              аккуредитацию. По окончании обучения выдается диплом о высшем
              образовании государственного образца
            </p>
            <IconWave classNames={[stls.icon]} />
            <ImgForWhom
              classNames={[stls.img, stls.laptopDesktop]}
              src={program.forWhomPicture?.url}
              width={592}
              height={getImageHeight({
                width: 592,
                widthInitial: program.forWhomPicture?.width,
                heightInitial: program.forWhomPicture?.height
              })}
              filter
            />
          </div>
          <div className={stls.right}>
            <ul className={stls.forWhom}>
              {program.forWhom
                .filter(item => item.title)
                .map((item, idx) => (
                  <li
                    key={item.desc || 'SectionProgramForWhom_item' + idx}
                    className={stls.forWhomItem}>
                    <h3 className={stls.itemTitle}>
                      {item.title?.map(part =>
                        part.highlight ? (
                          <GeneralTextHighlight>
                            {part.titlePart}
                          </GeneralTextHighlight>
                        ) : (
                          part.titlePart + ' '
                        )
                      )}
                    </h3>
                    <p className={stls.itemDesc}>{item.desc}</p>
                  </li>
                ))}
            </ul>
            <ImgForWhom
              classNames={[stls.img, stls.phoneTablet]}
              src={program.forWhomPicture?.url}
              width={640}
              height={getImageHeight({
                width: 640,
                widthInitial: program.forWhomPicture?.width,
                heightInitial: program.forWhomPicture?.height
              })}
              filter
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramForWhom
