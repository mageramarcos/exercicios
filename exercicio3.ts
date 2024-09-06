import * as fs from 'fs';

// Carregar os dados do arquivo JSON
const data = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

// Filtrar os dias com faturamento maior que zero
const daysWithRevenue = data.filter((day: { valor: number }) => day.valor > 0);

// Calcular o menor e o maior valor de faturamento
const lowestRevenue = Math.min(...daysWithRevenue.map((day: { valor: number }) => day.valor));
const highestRevenue = Math.max(...daysWithRevenue.map((day: { valor: number }) => day.valor));

// Calcular a média mensal de faturamento
const totalRevenue = daysWithRevenue.reduce((acc: number, day: { valor: number }) => acc + day.valor, 0);
const averageRevenue = totalRevenue / daysWithRevenue.length;

// Contar o número de dias com faturamento superior à média mensal
const daysAboveAverage = daysWithRevenue.filter((day: { valor: number }) => day.valor > averageRevenue).length;

// Exibir os resultados
console.log(`Menor valor de faturamento: ${lowestRevenue}`);
console.log(`Maior valor de faturamento: ${highestRevenue}`);
console.log(`Número de dias com faturamento acima da média: ${daysAboveAverage}`);