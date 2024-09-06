// Definindo os valores de faturamento para cada estado
const faturamentoSP: number = 67836.43;
const faturamentoRJ: number = 36678.66;
const faturamentoMG: number = 29229.88;
const faturamentoES: number = 27165.48;
const faturamentoOutros: number = 19849.53;

// Calculando o valor total de faturamento
const faturamentoTotal: number = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Calculando o percentual de representação de cada estado
const percentualSP: number = (faturamentoSP / faturamentoTotal) * 100;
const percentualRJ: number = (faturamentoRJ / faturamentoTotal) * 100;
const percentualMG: number = (faturamentoMG / faturamentoTotal) * 100;
const percentualES: number = (faturamentoES / faturamentoTotal) * 100;
const percentualOutros: number = (faturamentoOutros / faturamentoTotal) * 100;

// Exibindo os percentuais de representação
console.log(`Percentual de representação de SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual de representação de Outros: ${percentualOutros.toFixed(2)}%`);