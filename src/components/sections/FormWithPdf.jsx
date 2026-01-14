import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import FormPdf from '../interactives/FormPdf'
import SectionHeader from '../sectionElements/SectionHeader'

function FormWithPdf() {
  return (
    <div>
      <SectionArea paddingtop={false} className="bg-bgSectionDark">
        <SectionWrapper>
          <div>
            <SectionHeader
              miniTitle="Contato"
              sectionHeaderTitle="Receba gratuitamente o checklist ideal para o seu caso"
              sectionHeaderSubtitle="Preencha seus dados abaixo e receba gratuitamente o checklist em PDF."
              className=" text-center"
            />
          </div>
          <FormPdf />
          <p className="font-secondFont text-paragraph3 mt-6 text-white text-center desktop1:w-[60%] desktop3:w-[45%]">
            O material tem caráter exclusivamente informativo, não substitui
            consulta jurídica e não garante resultados.
          </p>
        </SectionWrapper>
      </SectionArea>
    </div>
  )
}

export default FormWithPdf
