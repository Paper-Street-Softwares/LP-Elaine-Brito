import React from 'react'
import content from '../../../content/content'

function CopyrightFooter() {
  return (
    <div className="text-center w-full phone2:w-[90%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-[27px]">
      <p className="w-full text-paragraph2 desktop2:text-paragraph3 opacity-60">
        {content.texts.footer.copyrightLine}
      </p>
      <p className="text-paragraph2 desktop2:text-paragraph3 opacity-60">
        <a
          className="transition hover:underline"
          target="_blank"
          href="https://www.paperstreet.com.br"
        >
          {' '}
          {content.texts.infos.footerDivulgacaoText}
        </a>
      </p>
      <p className="mt-4 text-paragraph2 desktop2:text-paragraph3 opacity-60">
        O Diagnóstico Jurídico possui finalidade exclusivamente informativa e
        técnica, não configurando promessa de resultado, consulta gratuita ou
        contratação automática de serviços jurídicos, conforme o Código de Ética
        e Disciplina da OAB.
      </p>
    </div>
  )
}

export default CopyrightFooter
