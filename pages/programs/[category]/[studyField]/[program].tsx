import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramContext
} from '@/context/index'
import {
  SectionProgramHero,
  SectionProgramForWhom,
  SectionProgramWhatWillYouLearn,
  SectionProgramHowProcessGoes,
  SectionProgramContents,
  SectionYourFutureDiploma,
  SectionProgramJobTitles,
  SectionUIFormAlpha,
  SectionProgramTeachers,
  SectionStartWithDiscount,
  SectionProgramStudyCost,
  SectionProgramQna
} from '@/components/sections'

const PageProgramsCategoryStudyFieldProgram: NextPage<TypePageProgramProps> = ({
  categories,
  program,
  gspContextParamsCategory,
  gspContextParamsStudyField,
  gspContextParamsProgram
}) => {
  const { setCategories, curCategory } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { program: programContext, setProgram } = useContext(
    ContextProgramContext
  )

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: gspContextParamsCategory }
    })
    setStudyField({ payload: gspContextParamsStudyField })
    setProgram({ payload: program || null })
  }, [gspContextParamsCategory, gspContextParamsStudyField, program])

  return (
    <>
      {programContext && (
        <>
          <SectionProgramHero />
          <SectionProgramForWhom />
          <SectionProgramWhatWillYouLearn />
          {/* <SectionProgramHowProcessGoes /> */}
          <SectionProgramContents />
          <SectionYourFutureDiploma atPageProgram />
          <SectionProgramJobTitles />
          {routesFront.root === routesFront.defaultRoot &&
            curCategory?.type !== 'bachelor' &&
            curCategory?.type !== 'master' && (
              <>
                <SectionUIFormAlpha title='Получить бесплатную консультацию' />
                <SectionProgramTeachers />
              </>
            )}
          <SectionStartWithDiscount />
          <SectionProgramStudyCost />
          <SectionProgramQna />
        </>
      )}
    </>
  )
}

export default PageProgramsCategoryStudyFieldProgram

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.programsCategoryStudyFieldProgram
  })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.programsCategoryStudyFieldProgram,
    context
  })
