const btnConverter = document.getElementById("btn-converter");
const campo = document.querySelector(".campo-2");
const campoValorDe = document.querySelector(".valor-de");
const campoValorPara = document.querySelector(".valor-para");

btnConverter.addEventListener("click", (e) => {
    e.preventDefault();

    // Pegando os valores e tipos de moedas para a conversão
    const moedaEscolhida = document.getElementById('escolha-moeda').value;
    const valorEscolhido = parseFloat(document.getElementById('valor-converter').value);
    const moedaConversora = document.getElementById('escolha-moeda-converte').value;

    // Verificar se todos os campos estão preenchidos
    if (!moedaEscolhida || isNaN(valorEscolhido) || !moedaConversora) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Tabela de conversão (exemplo fictício)
    const taxasDeConversao = {
        Real: { Dólar: 0.20, Euro: 0.18, Peso: 36 },
        Dólar: { Real: 5, Euro: 0.91, Peso: 180 },
        Euro: { Real: 5.5, Dólar: 1.1, Peso: 198 },
        Peso: { Real: 0.027, Dólar: 0.0056, Euro: 0.0051 }
    };

    // Calculando a conversão
    let taxa = taxasDeConversao[moedaEscolhida]?.[moedaConversora];
    if (!taxa) {
        alert('Conversão não disponível!');
        return;
    }
    const valorConvertido = valorEscolhido * taxa;

    // Exibindo o resultado
    campoValorDe.textContent = `${valorEscolhido} ${moedaEscolhida}`;
    campoValorPara.textContent = `${valorConvertido.toFixed(2)} ${moedaConversora}`;
    campo.style.display = 'flex'; // Mostrando o campo de resultado
});
