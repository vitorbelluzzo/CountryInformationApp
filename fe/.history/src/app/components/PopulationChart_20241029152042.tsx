import React from "react";
import { Line } from "chart.js";
import {
  Chart as ChartJS,
  Line,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Interface para tipagem
interface CountryInfo {
  borders: string[];
  populationData: { year: number; value: number }[];
  flagURL: string;
}

// Componente PopulationChart
const PopulationChart: React.FC<{ countryInfo: CountryInfo }> = ({
  countryInfo,
}) => {
  // Extrai anos e população da prop `countryInfo.populationData`
  const years = countryInfo.populationData.map((item) => item.year);
  const populations = countryInfo.populationData.map((item) => item.value);

  // Dados para o gráfico
  const data = {
    labels: years, // Eixo X
    datasets: [
      {
        label: "População",
        data: populations, // Eixo Y
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: true,
        text: `População ao longo dos anos em ${countryInfo.flagURL}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ano",
        },
      },
      y: {
        title: {
          display: true,
          text: "População",
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div>
      <h2>Gráfico de População de {countryInfo.flagURL}</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PopulationChart;
