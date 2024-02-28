import React from "react";
import { EmptySearch } from "../components/Empty/EmptySearch";
import Images from "../config/Images";
import { MainNavigator } from "../navigation/MainNavigator";
import { getLaboratorioCant } from "../services/laboratorioService";
import { KPI } from "../components/Cards/KPI";
import { CardData } from "../components/Cards/CardData";
import { CardProduct } from "../components/Cards/CardProduct";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { getUser } from "../services/usuarioService";
import { Collapse } from "bootstrap";

export const Dashboard = () => {
  const data = [
    {
      label: "Membros Ativos",
      data: 12,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Membros Inativos",
      data: 2,
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Novos Membros",
      data: 5,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Membros Ativos",
      data: 12,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Membros Inativos",
      data: 2,
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Novos Membros",
      data: 5,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Membros Ativos",
      data: 12,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Membros Inativos",
      data: 2,
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Novos Membros",
      data: 5,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Membros Ativos",
      data: 12,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Membros Inativos",
      data: 2,
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderWidth: 1,
    },
    {
      label: "Novos Membros",
      data: 5,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderWidth: 1,
    },
  ];

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="App">
        <div className="mainNav">
          <MainNavigator />
        </div>
        <div className="containerPadre">
          <div className="containerHijo">
            <h1 className="titleStyle">Dashboard</h1>
            <button
              onClick={() => {
                getUser().then(({data})=>{
                  console.log(data)
                });
              }}
            >
              Cantidad
            </button>
            <div className="spaceVer20" />
            <div className="DashboardContent">
              <div className="Container_KPI">
                <KPI
                  Icon={Images.ADDBLUE}
                  Width={45}
                  Number={50}
                  Description={"Total ventas del día"}
                />

                <KPI
                  Icon={Images.ADDBLUE}
                  Width={45}
                  Number={50}
                  Unidad={"Bs."}
                  Description={"Total Ingresos del día"}
                />
                <KPI
                  Icon={Images.ADDBLUE}
                  Width={45}
                  Number={50}
                  Description={"Total productos registrados"}
                />
                <KPI
                  Icon={Images.ADDBLUE}
                  Width={45}
                  Number={50}
                  Description={"Total ventas del día"}
                />
              </div>
              {/* <div className='containerEmptySection'>
                            <EmptySearch Image={Images.CONTRUCTION} Text={'Sección en construcción'} Width={100} />
                        </div> */}
              <div className="ContainerSectionOne">
                <div className="Card_25">
                  <h2 className="titleStyleH2">Ventas recientes</h2>
                  <div className="ContainerCardData">
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                  </div>
                </div>

                <div className="Card_50">
                  <h2 className="titleStyleH2">Ventas</h2>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                      data={data}
                      //margin={{ top: 10, right: 30, bottom: 10, left: 0 }}
                      //width={500} height={300}
                      margin={{ top: 0, right: 0, bottom: 0, left: -30 }}
                    >
                      <CartesianGrid stroke="#E1F1FF" strokeDasharray="3 3" />
                      <XAxis dataKey="label" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="data" fill="#5C34EC" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="Card_25">
                  <h2 className="titleStyleH2">Clientes frecuentes</h2>
                  <div className="ContainerCardData">
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                    <CardData
                      Number={"1"}
                      Name={"Erick Aranibar Arias"}
                      Description1={"Fecha: " + {} + "12/12/2023"}
                      Description2={"Total: Bs. " + {} + "100"}
                    />
                  </div>
                </div>
              </div>
              <div className="ContainerSectionTwo">
                <div className="CardResposive">
                  <h2 className="titleStyleH2">Productos más vendidos</h2>
                  <div className="ContainerCardData">
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                    />
                  </div>
                </div>
                <div className="CardResposive">
                  <h2 className="titleStyleH2">
                    Productos con inventario mínimo
                  </h2>
                  <div className="ContainerCardData">
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                    />
                  </div>
                </div>
                <div className="CardResposive">
                  <h2 className="titleStyleH2">Productos prontos a vencer</h2>
                  <div className="ContainerCardData">
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                      Description2={"12/12/2023"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                      Description2={"12/12/2023"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                      Description2={"12/12/2023"}
                    />
                    <CardProduct
                      Number={"1"}
                      Name={"Paracetamol"}
                      Description1={"Iventario: 10"}
                      Description2={"12/12/2023"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
