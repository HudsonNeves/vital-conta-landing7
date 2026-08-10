import '../styles/sections.css'

function Servicos() {
  const categorias = [
    {
      titulo: 'Quero formalizar meu negócio e não sei por onde começar.',
      descricao: 'Acompanhamento prático para abrir ou regularizar sua empresa sem burocracia.',
      itens: [
        'Abertura e regularização do CNPJ sem erros',
        'Adequação fiscal e emissão de notas simplificada',
        'Apoio contábil para suas decisões diárias'
      ]
    },
    {
      titulo: 'Quero migrar de MEI para LTDA e preciso de orientação.',
      descricao: 'Suporte completo e seguro para mudar a razão social da sua empresa com total tranquilidade.',
      itens: [
        'Orientação especializada na alteração contratual e junta comercial',
        'Análise estratégica para a melhor transição de enquadramento tributário',
        'Adequação do novo CNPJ para emissão de notas e obrigações fiscais'
      ]
    },
    {
      titulo: 'Eu quero crescer sem perder o controle',
      descricao: 'Estratégia e estrutura para que seu negócio se organize e cresça no ritmo certo.',
      itens: [
        'Ajuda com equipe e rotina de trabalho',
        'Emissão de Certificado Digital para assinar e delegar com segurança',
        'Treinamentos práticos para seu time'
      ]
    }
  ]

  return (
    <section className="services" id="servicos">
      <div className="container">
        <h2>Serviços para sua empresa ficar mais simples e segura</h2>

        <p className="services-subtitle">
          Fazemos o básico funcionar bem e mostramos caminhos claros para melhorar sem complicação.
        </p>

        <div className="services-grid">
          {categorias.map((categoria, index) => (
            <div key={index} className="service-card">
              <h3>{categoria.titulo}</h3>

              <p className="service-description">
                {categoria.descricao}
              </p>

              <ul>
                {categoria.itens.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos
