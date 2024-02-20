import React from "react";
import { EmptySearch } from "../components/Empty/EmptySearch";
import Images from "../config/Images";
import { MainNavigator } from "../navigation/MainNavigator";
import { getLaboratorioCant } from "../services/laboratorioService";
import { KPI } from "../components/Cards/KPI";
import { CardData } from "../components/Cards/CardData";
import { CardProduct } from "../components/Cards/CardProduct";

export const Dashboard = () => {
  return (
    <>
      <div className="App">
        <div className="mainNav">
          <MainNavigator />
        </div>
        <div className="containerPadre">
          <div className="containerHijo">
            <h1 className="titleStyle">Dashboard</h1>
            {/* <button
              onClick={() => {
                getLaboratorioCant();
              }}
            >
              Cantidad
            </button> */}
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
                  <h2 class="titleStyleH2">Ventas recientes</h2>
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
                  <h2 class="titleStyleH2">Ventas</h2>
                </div>
                <div className="Card_25">
                  <h2 class="titleStyleH2">Clientes frecuentes</h2>
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
                  <h2 class="titleStyleH2">Productos más vendidos</h2>
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
                  <h2 class="titleStyleH2">Productos con inventario mínimo</h2>
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
                  <h2 class="titleStyleH2">Productos prontos a vencer</h2>
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
