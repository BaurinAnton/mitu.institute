declare global {
  interface Window {
    dataLayer?: Record<string, any>[]
  }
}

//btn
export type { default as TypeBtn } from '@/types/btn/TypeBtn'
export type { default as TypeBtnAlphaVariant } from '@/types/btn/TypeBtnAlphaVariant'
export type { default as TypeBtnBeta } from '@/types/btn/TypeBtnBeta'
export type { default as TypeBtnBetaVariant } from '@/types/btn/TypeBtnBetaVariant'
export type { default as TypeBtnDisabled } from '@/types/btn/TypeBtnDisabled'
export type { default as TypeBtnHref } from '@/types/btn/TypeBtnHref'
export type { default as TypeBtnTag } from '@/types/btn/TypeBtnTag'
export type { default as TypeBtnTagWithLink } from '@/types/btn/TypeBtnTagWithLink'
export type { default as TypeBtnType } from '@/types/btn/TypeBtnType'

// context
export type { default as TypeContextAccessibility } from '@/types/context/TypeContextAccessibility'
export type { default as TypeContextCategories } from '@/types/context/TypeContextCategories'
export type { default as TypeContextGeneralPopup } from '@/types/context/TypeContextGeneralPopup'
export type { default as TypeContextProgram } from '@/types/context/TypeContextProgram'
export type { default as TypeContextPrograms } from '@/types/context/TypeContextPrograms'
export type { default as TypeContextQuestions } from '@/types/context/TypeContextQuestions'

// general
export type { default as TypeAnchor } from '@/types/general/TypeAnchor'
export type { default as TypeAriaLabel } from '@/types/general/TypeAriaLabel'
export type { default as TypeChildren } from '@/types/general/TypeChildren'
export type { default as TypeClassNames } from '@/types/general/TypeClassNames'
export type { default as TypeClose } from '@/types/general/TypeClose'
export type { default as TypeColor } from '@/types/general/TypeColor'
export type { default as TypeColorsKeys } from '@/types/general/TypeColorsKeys'
export type { default as TypeFormAlphaValues } from '@/types/general/TypeFormAlphaValues'
export type { default as TypeGetStaticPropsContext } from '@/types/general/TypeGetStaticPropsContext'
export type { default as TypeImg } from '@/types/general/TypeImg'
export type { default as TypeImgExtended } from '@/types/general/TypeImgExtended'
export type { default as TypeInput } from '@/types/general/TypeInput'
export type { default as TypeIsPopup } from '@/types/general/TypeIsPopup'
export type { default as TypeLeadClientValues } from '@/types/general/TypeLeadClientValues'
export type { default as TypeLinks } from '@/types/general/TypeLinks'
export type { default as TypeLinksHeaderPromo } from '@/types/general/TypeLinksHeaderPromo'
export type { default as TypeNextApiResponseLeadData } from '@/types/general/TypeNextApiResponseLeadData'
export type { default as TypeOnClick } from '@/types/general/TypeOnClick'
export type { default as TypePageData } from '@/types/general/TypePageData'
export type { default as TypeReferer } from '@/types/general/TypeReferer'
export type { default as TypeRoute } from '@/types/general/TypeRoute'
export type { default as TypeRoutesFront } from '@/types/general/TypeRoutesFront'
export type { default as TypeStyle } from '@/types/general/TypeStyle'
export type { default as TypeUrl } from '@/types/general/TypeUrl'
export type { default as TypeUtms } from '@/types/general/TypeUtms'
export type { default as TypeVariantForm } from '@/types/general/TypeVariantForm'

// lib/general
export type { default as TypeLibGeneralPicture } from '@/types/lib/general/TypeLibGeneralPicture'
export type { default as TypeLibGeneralPictureHeight } from '@/types/lib/general/TypeLibGeneralPictureHeight'
export type { default as TypeLibGeneralPictureUrl } from '@/types/lib/general/TypeLibGeneralPictureUrl'
export type { default as TypeLibGeneralPictureWidth } from '@/types/lib/general/TypeLibGeneralPictureWidth'
export type { default as TypeLibGeneralTitle } from '@/types/lib/general/TypeLibGeneralTitle'
export type { default as TypeLibGeneralTitleHighlight } from '@/types/lib/general/TypeLibGeneralTitleHighlight'
export type { default as TypeLibGeneralTitleTitlePart } from '@/types/lib/general/TypeLibGeneralTitleTitlePart'

// lib/legal
export type { default as TypeLibLegalDocumentCategories } from '@/types/lib/legal/TypeLibLegalDocumentCategories'
export type { default as TypeLibLegalDocumentDocuments } from '@/types/lib/legal/TypeLibLegalDocumentDocuments'
export type { default as TypeLibLegalDocumentSubcategories } from '@/types/lib/legal/TypeLibLegalDocumentSubcategories'

// lib/program
export type { default as TypeLibProgram } from '@/types/lib/program/TypeLibProgram'
export type { default as TypeLibProgramCategory } from '@/types/lib/program/TypeLibProgramCategory'
export type { default as TypeLibProgramCategoryLabel } from '@/types/lib/program/TypeLibProgramCategoryLabel'
export type { default as TypeLibProgramCategorySlug } from '@/types/lib/program/TypeLibProgramCategorySlug'
export type { default as TypeLibProgramCategoryType } from '@/types/lib/program/TypeLibProgramCategoryType'
export type { default as TypeLibProgramDescription } from '@/types/lib/program/TypeLibProgramDescription'
export type { default as TypeLibProgramForWhom } from '@/types/lib/program/TypeLibProgramForWhom'
export type { default as TypeLibProgramForWhomDesc } from '@/types/lib/program/TypeLibProgramForWhomDesc'
export type { default as TypeLibProgramHowProcessGoes } from '@/types/lib/program/TypeLibProgramHowProcessGoes'
export type { default as TypeLibProgramHowProcessGoesCourseContainsOf } from '@/types/lib/program/TypeLibProgramHowProcessGoesCourseContainsOf'
export type { default as TypeLibProgramHowProcessGoesCourseContainsOfPercent } from '@/types/lib/program/TypeLibProgramHowProcessGoesCourseContainsOfPercent'
export type { default as TypeLibProgramHowProcessGoesCourseContainsOfTitle } from '@/types/lib/program/TypeLibProgramHowProcessGoesCourseContainsOfTitle'
export type { default as TypeLibProgramHowProcessGoesDescription } from '@/types/lib/program/TypeLibProgramHowProcessGoesDescription'
export type { default as TypeLibProgramHowProcessGoesTitle } from '@/types/lib/program/TypeLibProgramHowProcessGoesTitle'
export type { default as TypeLibProgramJobTitles } from '@/types/lib/program/TypeLibProgramJobTitles'
export type { default as TypeLibProgramJobTitlesPosition } from '@/types/lib/program/TypeLibProgramJobTitlesPosition'
export type { default as TypeLibProgramJobTitlesSalary } from '@/types/lib/program/TypeLibProgramJobTitlesSalary'
export type { default as TypeLibProgramQualification } from '@/types/lib/program/TypeLibProgramQualification'
export type { default as TypeLibProgramShortContents } from '@/types/lib/program/TypeLibProgramShortContents'
export type { default as TypeLibProgramShortContentsTitle } from '@/types/lib/program/TypeLibProgramShortContentsTitle'
export type { default as TypeLibProgramSlug } from '@/types/lib/program/TypeLibProgramSlug'
export type { default as TypeLibProgramStudyField } from '@/types/lib/program/TypeLibProgramStudyField'
export type { default as TypeLibProgramStudyFieldSlug } from '@/types/lib/program/TypeLibProgramStudyFieldSlug'
export type { default as TypeLibProgramStudyFieldType } from '@/types/lib/program/TypeLibProgramStudyFieldType'
export type { default as TypeLibProgramStudyForm } from '@/types/lib/program/TypeLibProgramStudyForm'
export type { default as TypeLibProgramStudyFormLabel } from '@/types/lib/program/TypeLibProgramStudyFormLabel'
export type { default as TypeLibProgramTeachers } from '@/types/lib/program/TypeLibProgramTeachers'
export type { default as TypeLibProgramTeachersAchievements } from '@/types/lib/program/TypeLibProgramTeachersAchievements'
export type { default as TypeLibProgramTeachersName } from '@/types/lib/program/TypeLibProgramTeachersName'
export type { default as TypeLibProgramTimenprice } from '@/types/lib/program/TypeLibProgramTimenprice'
export type { default as TypeLibProgramTimenpriceDiscount } from '@/types/lib/program/TypeLibProgramTimenpriceDiscount'
export type { default as TypeLibProgramTimenpricePrice } from '@/types/lib/program/TypeLibProgramTimenpricePrice'
export type { default as TypeLibProgramTimenpriceStudyHours } from '@/types/lib/program/TypeLibProgramTimenpriceStudyHours'
export type { default as TypeLibProgramTimenpriceStudyMonthsDuration } from '@/types/lib/program/TypeLibProgramTimenpriceStudyMonthsDuration'
export type { default as TypeLibProgramTitle } from '@/types/lib/program/TypeLibProgramTitle'
export type { default as TypeLibProgramWhatYouWillLearn } from '@/types/lib/program/TypeLibProgramWhatYouWillLearn'
export type { default as TypeLibProgramWhatYouWillLearnItem } from '@/types/lib/program/TypeLibProgramWhatYouWillLearnItem'
export type { default as TypeLibProgramQuestion } from '@/types/lib/program/TypeLibProgramQuestion'
export type { default as TypeLibProgramQuestionAnswer } from '@/types/lib/program/TypeLibProgramQuestionAnswer'
export type { default as TypeLibProgramQuestionQuestion } from '@/types/lib/program/TypeLibProgramQuestionQuestion'
export type { default as TypeLibProgramQuestions } from '@/types/lib/program/TypeLibProgramQuestions'

// lib/programs
export type { default as TypeLibPrograms } from '@/types/lib/programs/TypeLibPrograms'
export type { default as TypeLibProgramsCategories } from '@/types/lib/programs/TypeLibProgramsCategories'
export type { default as TypeLibProgramsCategoriesLabel } from '@/types/lib/programs/TypeLibProgramsCategoriesLabel'
export type { default as TypeLibProgramsCategoriesSlug } from '@/types/lib/programs/TypeLibProgramsCategoriesSlug'
export type { default as TypeLibProgramsCategoriesType } from '@/types/lib/programs/TypeLibProgramsCategoriesType'
export type { default as TypeLibProgramsStudyFields } from '@/types/lib/programs/TypeLibProgramsStudyFields'
export type { default as TypeLibProgramsStudyFieldsSlug } from '@/types/lib/programs/TypeLibProgramsStudyFieldsSlug'
export type { default as TypeLibProgramsStudyFieldsTitle } from '@/types/lib/programs/TypeLibProgramsStudyFieldsTitle'
export type { default as TypeLibProgramsStudyFieldsType } from '@/types/lib/programs/TypeLibProgramsStudyFieldsType'

// page
export type { default as TypePageHomeProps } from '@/types/page/TypePageHomeProps'
export type { default as TypePageHomePropsQuery } from '@/types/page/TypePageHomePropsQuery'
export type { default as TypePageLegalProps } from '@/types/page/TypePageLegalProps'
export type { default as TypePageLegalPropsQuery } from '@/types/page/TypePageLegalPropsQuery'
export type { default as TypePageProgramPaths } from '@/types/page/TypePageProgramPaths'
export type { default as TypePageProgramPathsQuery } from '@/types/page/TypePageProgramPathsQuery'
export type { default as TypePageProgramProps } from '@/types/page/TypePageProgramProps'
export type { default as TypePageProgramPropsQuery } from '@/types/page/TypePageProgramPropsQuery'
export type { default as TypePageProgramsPaths } from '@/types/page/TypePageProgramsPaths'
export type { default as TypePageProgramsPathsQuery } from '@/types/page/TypePageProgramsPathsQuery'
export type { default as TypePageProgramsProps } from '@/types/page/TypePageProgramsProps'
export type { default as TypePageProgramsPropsQuery } from '@/types/page/TypePageProgramsPropsQuery'
export type { default as TypePagePromoProps } from '@/types/page/TypePagePromoProps'
export type { default as TypePagePromoPropsQuery } from '@/types/page/TypePagePromoPropsQuery'
export type { default as TypePageStudyFieldPaths } from '@/types/page/TypePageStudyFieldPaths'
export type { default as TypePageStudyFieldPathsQuery } from '@/types/page/TypePageStudyFieldPathsQuery'
