function clearDisplay() {
    displayValue = '';
    document.getElementById('QtdExames').value = displayValue;
    document.getElementById('PorcentoRepasseParceiro').value = displayValue;
    document.getElementById('ValorTotal').value = displayValue;
    document.getElementById('PorcentoRepasseClinica').value = displayValue;
    document.getElementById('RepasseParceiro').value = displayValue;
    document.getElementById('RepasseClinica').value = displayValue;
    document.getElementById('Royalties').value = displayValue;
    document.getElementById('Impostos').value = displayValue;
    document.getElementById('LucroLiquido').value = displayValue;
    document.getElementById('ValorFaltante').value = displayValue;
    document.getElementById('MesesQuitar').value = displayValue;
    document.getElementById("precoExame").textContent = displayValue;
    document.getElementById("valorEquipamento").textContent = displayValue;
  }

  function exportToXLSX() {
    const dados = [
    ["Valor", "Campo"],
    [document.getElementById('QtdExames').value, "Quantidade de Exames"],
    [document.getElementById('PorcentoRepasseParceiro').value, "Porcento Repasse Parceiro"],
    [document.getElementById('ValorTotal').value, "Valor Total"],
    [document.getElementById('PorcentoRepasseClinica').value, "Porcento Repasse Clinica"],
    [document.getElementById('RepasseParceiro').value, "Repasse Parceiro"],
    [document.getElementById('RepasseClinica').value, "Repasse Clinica"],
    [document.getElementById('Royalties').value, "Royalties"],
    [document.getElementById('Impostos').value, "Impostos"],
    [document.getElementById('LucroLiquido').value, "Lucro Liquido"],
    [document.getElementById('ValorFaltante').value, "Valor Faltante"],
    [document.getElementById('MesesQuitar').value, "Meses Quitar"],
    ];

    // Criar uma planilha
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(dados);

    // Adicionar a planilha ao arquivo
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');

    // Salvar o arquivo XLSX
    XLSX.writeFile(workbook, 'dados.xlsx');
}