import stls from '@/styles/components/sections/SectionProgramForWhom.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import { IconWave } from '@/components/icons'
import { ImgApplause } from '@/components/imgs'

type TypeSectionProgramForWhomProps = TypeClassNames

const SectionProgramForWhom = ({
  classNames
}: TypeSectionProgramForWhomProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Для кого эта программа?</GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.description}>
            <p className={stls.text}>
              Образовательные программы института сертифицированы и имеют
              аккредитацию. По окончании обучения выдается диплом о высшем
              образовании государственного образца.
            </p>
            <IconWave classNames={[stls.icon]} />
          </div>
          <ul className={stls.list}>
            <li className={stls.item}>
              <p className={stls.subtitle}>
                Для тех, кто окончил{' '}
                <span className={stls.colored}>11 классов</span>
              </p>
              <p className={stls.paragraph}>
                Вы изучите опыт других компаний, попробуете себя в
                играх-симуляциях, получите знания, которые помогут вам стать
                эффективным руководителем. Сможете запустить стартап или развить
                и масштабировать текущий бизнес.
              </p>
            </li>
            <li className={stls.item}>
              <p className={stls.subtitle}>
                Для выпускников <span className={stls.colored}>колледжей</span>
              </p>
              <p className={stls.paragraph}>
                Вы изучите опыт других компаний, попробуете себя в
                играх-симуляциях, получите знания, которые помогут вам стать
                эффективным руководителем. Сможете запустить стартап или развить
                и масштабировать текущий бизнес.
              </p>
            </li>
            <li className={stls.item}>
              <p className={stls.subtitle}>
                Для тех, кто хочет{' '}
                <span className={stls.colored}>
                  перевестись из другого ВУЗа
                </span>
              </p>
              <p className={stls.paragraph}>
                Вы изучите опыт других компаний, попробуете себя в
                играх-симуляциях, получите знания, которые помогут вам стать
                эффективным руководителем. Сможете запустить стартап или развить
                и масштабировать текущий бизнес.
              </p>
            </li>
          </ul>
          <ImgApplause classNames={[stls.img]} />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramForWhom
