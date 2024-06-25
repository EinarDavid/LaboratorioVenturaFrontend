import React, { useEffect, useState } from "react";
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

//import XLSX from 'xlsx';
import * as XLSX from "xlsx";
import { postGrupoAgregar, postGrupoBuscar } from "../services/grupoService";
import {
  postSubGrupoAgregar,
  postSubGrupoBuscar,
} from "../services/subgrupoService";
import { postAgregarProducto } from "../services/productService";

import { dataGroup } from "./DataProduct";

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
      label: "Nuevos Membros",
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
      label: "Nuevos Membros",
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

  const dataSubG = [
    {
      Nombre: "ACEITE",
      Grupo: "CANCHA",
    },
    {
      Nombre: "AEROCAMARA",
      Grupo: "SAE",
    },
    {
      Nombre: "AEROSOL",
      Grupo: "CRESPAL",
    },
    {
      Nombre: "AGUJAS",
      Grupo: "NIPRO MEDICAL CORPORATION",
    },
    {
      Nombre: "ALGODON",
      Grupo: "DULCIFARMA",
    },
    {
      Nombre: "AMPOLLA",
      Grupo: "ALFA",
    },
    {
      Nombre: "AMPOLLAS",
      Grupo: "BAGO",
    },
    {
      Nombre: "AMPOLLAS BEBIBLES",
      Grupo: "ALCOS",
    },
    {
      Nombre: "ANALGESICO DENTAL",
      Grupo: "VITA",
    },
    {
      Nombre: "ASPIRADOR NASAL",
      Grupo: "ACM",
    },
    {
      Nombre: "ATOMIZADOR",
      Grupo: "ASOFAR",
    },
    {
      Nombre: "BARBIJO",
      Grupo: "FOREST",
    },
    {
      Nombre: "BARRA",
      Grupo: "CONTRA",
    },
    {
      Nombre: "BIBERON",
      Grupo: "ACM",
    },
    {
      Nombre: "BLOQUEADOR SOLAR",
      Grupo: "BAGO",
    },
    {
      Nombre: "BOTIQUIN",
      Grupo: "HELP MEDICAL",
    },
    {
      Nombre: "BRANULA",
      Grupo: "NIPRO MEDICAL CORPORATION",
    },
    {
      Nombre: "CAPSULA",
      Grupo: "ADVANCE",
    },
    {
      Nombre: "CAPSULAS",
      Grupo: "ALCOS",
    },
    {
      Nombre: "CAPSULAS BLANDAS",
      Grupo: "ASOFAR",
    },
    {
      Nombre: "CEPILLO DE SILICONA",
      Grupo: "ACM",
    },
    {
      Nombre: "CEPILLO DENTAL",
      Grupo: "ACM",
    },
    {
      Nombre: "CEPILLO INTERDENTAL",
      Grupo: "DULCIFARMA",
    },
    {
      Nombre: "CHUPON",
      Grupo: "BRIANA",
    },
    {
      Nombre: "CHUPON DE DISTRACCION",
      Grupo: "ACM",
    },
    {
      Nombre: "CHUPON PARA FRUTAS",
      Grupo: "GHIRAFF",
    },
    {
      Nombre: "COLIRIO",
      Grupo: "ABD",
    },
    {
      Nombre: "COMPRESAS",
      Grupo: "RECALCINE",
    },
    {
      Nombre: "COMPRIMIDO",
      Grupo: "ALCOS",
    },
    {
      Nombre: "COMPRIMIDO DE LIBERACION RETARDADA",
      Grupo: "BAGO",
    },
    {
      Nombre: "COMPRIMIDO RECUBIERTO",
      Grupo: "ALCOS",
    },
    {
      Nombre: "COMPRIMIDO SUBLINGUAL",
      Grupo: "ALMAGRAN",
    },
    {
      Nombre: "COMPRIMIDOS",
      Grupo: "ALCOS",
    },
    {
      Nombre: "COMPRIMIDOS BUCODISPERSABLES",
      Grupo: "BAGO",
    },
    {
      Nombre: "COMPRIMIDOS DE LIBERACION PROLONGADA",
      Grupo: "BAGO",
    },
    {
      Nombre: "COMPRIMIDOS DISPERSABLES",
      Grupo: "FARMEDICAL",
    },
    {
      Nombre: "COMPRIMIDOS EFERVESCENTES",
      Grupo: "ABD",
    },
    {
      Nombre: "COMPRIMIDOS MASTICABLES",
      Grupo: "ALCOS",
    },
    {
      Nombre: "COMPRIMIDOS RANURADOS",
      Grupo: "COFAR - BRESKOT PHARMA",
    },
    {
      Nombre: "COMPRIMIDOS RECUBIERTOS",
      Grupo: "ALCOS",
    },
    {
      Nombre: "CONDON",
      Grupo: "INTI - CHINOIN",
    },
    {
      Nombre: "COTONETE",
      Grupo: "DR MEDINAT",
    },
    {
      Nombre: "CREMA",
      Grupo: "ALCOS",
    },
    {
      Nombre: "CREMA DENTAL",
      Grupo: "SAE",
    },
    {
      Nombre: "CREMA DERMICA",
      Grupo: "ALCOS",
    },
    {
      Nombre: "CREMA FACIAL",
      Grupo: "BAGO",
    },
    {
      Nombre: "CREMA VAGINAL",
      Grupo: "CRESPAL",
    },
    {
      Nombre: "DENTRIFICO",
      Grupo: "SAE",
    },
    {
      Nombre: "DESCONGESTIONANTE NASAL",
      Grupo: "INTI ",
    },
    {
      Nombre: "DESODORANTE",
      Grupo: "SANAT",
    },
    {
      Nombre: "EDULCORANTE EN POLVO",
      Grupo: "",
    },
    {
      Nombre: "EDULCORANTE LIQUIDO",
      Grupo: "RECALCINE",
    },
    {
      Nombre: "EFERVESCENTE",
      Grupo: "ALCOS",
    },
    {
      Nombre: "EMULSION",
      Grupo: "IFARBO",
    },
    {
      Nombre: "ENEMA",
      Grupo: "INTI - DR MANN",
    },
    {
      Nombre: "ENJUAGUE BUCAL",
      Grupo: "CAMSA",
    },
    {
      Nombre: "EQUIPO DE SUERO",
      Grupo: "NIPRO MEDICAL CORPORATION",
    },
    {
      Nombre: "EXTRACTOR DE LECHE",
      Grupo: "ACM",
    },
    {
      Nombre: "FAJA DE TOCUYO",
      Grupo: "MAJOVI",
    },
    {
      Nombre: "FORMULA",
      Grupo: "INTI ",
    },
    {
      Nombre: "GEL",
      Grupo: "ALCOS",
    },
    {
      Nombre: "GEL DE CABELLO",
      Grupo: "AYAVIRI",
    },
    {
      Nombre: "GEL DE HIGIENE",
      Grupo: "IFARBO",
    },
    {
      Nombre: "GEL DENTAL",
      Grupo: "MAVER",
    },
    {
      Nombre: "GEL DERMICO",
      Grupo: "COFAR - BRESKOT PHARMA",
    },
    {
      Nombre: "GEL INTIMO",
      Grupo: "SAE",
    },
    {
      Nombre: "GOMITAS",
      Grupo: "TERBOL",
    },
    {
      Nombre: "GOTA ORALES",
      Grupo: "ALFA",
    },
    {
      Nombre: "GOTAS",
      Grupo: "BAGO",
    },
    {
      Nombre: "GOTAS NASALES",
      Grupo: "VITA",
    },
    {
      Nombre: "GOTAS ORALES",
      Grupo: "BAGO",
    },
    {
      Nombre: "GOTAS PEDRIATICAS",
      Grupo: "ALCOS",
    },
    {
      Nombre: "GRAGEAS",
      Grupo: "BAGO - BAYER",
    },
    {
      Nombre: "GRANULADO",
      Grupo: "INDUFAR",
    },
    {
      Nombre: "GRANULOS PARA SUSPENSION",
      Grupo: "IFA",
    },
    {
      Nombre: "HIGIENE INTIMA",
      Grupo: "SANAT",
    },
    {
      Nombre: "HILO DENTAL",
      Grupo: "DULCIFARMA",
    },
    {
      Nombre: "INFUSOR",
      Grupo: "BONAFIX",
    },
    {
      Nombre: "INTERDENTAL",
      Grupo: "SAE",
    },
    {
      Nombre: "INYECTABLE",
      Grupo: "BAGO",
    },
    {
      Nombre: "JABON",
      Grupo: "ARGEBOL",
    },
    {
      Nombre: "JALEA",
      Grupo: "ANA MARIA LA JUSTICIA",
    },
    {
      Nombre: "JARABE",
      Grupo: "ALCOS",
    },
    {
      Nombre: "JARABE ADULTOS",
      Grupo: "ALCOS",
    },
    {
      Nombre: "JARABE INFANTIL",
      Grupo: "ALCOS",
    },
    {
      Nombre: "JERINGA",
      Grupo: "BQS",
    },
    {
      Nombre: "JERINGA PRELLENADA",
      Grupo: "PROMEDICAL - PROCAPS",
    },
    {
      Nombre: "LABELLO",
      Grupo: "INTI ",
    },
    {
      Nombre: "LECHE DE FORMULA",
      Grupo: "BAGO",
    },
    {
      Nombre: "LINTERNA DE DIAGNOSTICO",
      Grupo: "ADEMAR",
    },
    {
      Nombre: "LOCION",
      Grupo: "CRESPAL",
    },
    {
      Nombre: "LUBRICANTE",
      Grupo: "IFA",
    },
    {
      Nombre: "LUBRICANTE OCULAR",
      Grupo: "SAE",
    },
    {
      Nombre: "MAQUILLAJE",
      Grupo: "INTI ",
    },
    {
      Nombre: "MASCARILLA",
      Grupo: "QUIMIZA",
    },
    {
      Nombre: "MASTICABLES",
      Grupo: "ALMAGRAN",
    },
    {
      Nombre: "MORDEDOR",
      Grupo: "ACM",
    },
    {
      Nombre: "OFTALMICO",
      Grupo: "SAE - PACIFIC",
    },
    {
      Nombre: "OVULO VAGINAL",
      Grupo: "ALCOS",
    },
    {
      Nombre: "PAÑAL",
      Grupo: "CANCHA",
    },
    {
      Nombre: "PAÑITOS",
      Grupo: "SAE",
    },
    {
      Nombre: "PARCHE",
      Grupo: "INTI - CHINOIN",
    },
    {
      Nombre: "PARCHE DERMICO",
      Grupo: "SAE",
    },
    {
      Nombre: "PASTA",
      Grupo: "COMPANEX",
    },
    {
      Nombre: "PASTA DENTAL",
      Grupo: "ALFA",
    },
    {
      Nombre: "PASTILLA",
      Grupo: "ALCOS",
    },
    {
      Nombre: "POLVO",
      Grupo: "ALCOS",
    },
    {
      Nombre: "POLVO PARA INYECTABLE",
      Grupo: "BAGO",
    },
    {
      Nombre: "POLVO PARA SUSPENSION",
      Grupo: "BAGO",
    },
    {
      Nombre: "POLVO PARA SUSPENSION ORAL",
      Grupo: "BAGO",
    },
    {
      Nombre: "POMADA",
      Grupo: "ALCOS",
    },
    {
      Nombre: "PRESERVATIVO",
      Grupo: "BRIMEG",
    },
    {
      Nombre: "PROTECTOR DE LACTANCIA",
      Grupo: "JOHNSON & JOHNSON",
    },
    {
      Nombre: "PROTECTOR SOLAR",
      Grupo: "BAGO",
    },
    {
      Nombre: "REPELENTE",
      Grupo: "GALENMARS",
    },
    {
      Nombre: "SACHET",
      Grupo: "ALCOS",
    },
    {
      Nombre: "SAL EFERVESCENTE",
      Grupo: "",
    },
    {
      Nombre: "SERUM",
      Grupo: "SANAT",
    },
    {
      Nombre: "SHAMPOO",
      Grupo: "BAGO",
    },
    {
      Nombre: "SOBRE",
      Grupo: "ALFA",
    },
    {
      Nombre: "SOBRES",
      Grupo: "ALCOS",
    },
    {
      Nombre: "SOBRES GRANULADO",
      Grupo: "COFAR",
    },
    {
      Nombre: "SOLUCION",
      Grupo: "ALMARK",
    },
    {
      Nombre: "SOLUCION DESINFECTANTE",
      Grupo: "IFARBO",
    },
    {
      Nombre: "SOLUCION GOTAS",
      Grupo: "EFARMA - MINTLAB",
    },
    {
      Nombre: "SOLUCION INYECTABLE",
      Grupo: "ABD",
    },
    {
      Nombre: "SOLUCION JABONOSA",
      Grupo: "NEXCORP",
    },
    {
      Nombre: "SOLUCION NASAL",
      Grupo: "SAE - PACIFIC",
    },
    {
      Nombre: "SOLUCION OFTALMICA",
      Grupo: "ABD",
    },
    {
      Nombre: "SOLUCION ORAL",
      Grupo: "ALCOS",
    },
    {
      Nombre: "SOLUCION OTICA",
      Grupo: "CRESPAL",
    },
    {
      Nombre: "SOLUCION PARA NEBULIZAR",
      Grupo: "EFARMA",
    },
    {
      Nombre: "SOLUCION SPRAY",
      Grupo: "ALCOS",
    },
    {
      Nombre: "SOLUCION TOPICA",
      Grupo: "BAGO",
    },
    {
      Nombre: "SONAJERO",
      Grupo: "DISTRIBUDORA ACM",
    },
    {
      Nombre: "SPRAY",
      Grupo: "ALCOS",
    },
    {
      Nombre: "STEVIA ",
      Grupo: "SAE",
    },
    {
      Nombre: "SUERO",
      Grupo: "INTI ",
    },
    {
      Nombre: "SUPLEMENTO ALIMENTICIO",
      Grupo: "SOLQUIFAR",
    },
    {
      Nombre: "SUPOSITORIO",
      Grupo: "ALFA",
    },
    {
      Nombre: "SUSPENSION",
      Grupo: "ALMAGRAN",
    },
    {
      Nombre: "SUSPENSION EN AEROSOL",
      Grupo: "MEGALABS (ROEMMERS, PHARMA INVESTI)",
    },
    {
      Nombre: "SUSPENSION EN GOTAS",
      Grupo: "EFARMA",
    },
    {
      Nombre: "SUSPENSION EN POLVO",
      Grupo: "BRIMEG",
    },
    {
      Nombre: "SUSPENSION EXTEMPORANEA",
      Grupo: "IFARBO",
    },
    {
      Nombre: "SUSPENSION NASAL",
      Grupo: "SAE - PACIFIC",
    },
    {
      Nombre: "SUSPENSION OFTALMICA",
      Grupo: "MEGALABS (ROEMMERS, PHARMA INVESTI)",
    },
    {
      Nombre: "SUSPENSION ORAL",
      Grupo: "ALCOS",
    },
    {
      Nombre: "SUSPENSION PEDIATRICO",
      Grupo: "ALCOS",
    },
    {
      Nombre: "SUSPENSION RECONSTITUIDA",
      Grupo: "PROMEDICAL",
    },
    {
      Nombre: "TABLETA MASTICABLE",
      Grupo: "INTI ",
    },
    {
      Nombre: "TABLETA PARA FRICCION",
      Grupo: "TELCHI",
    },
    {
      Nombre: "TABLETA RECUBIERTA",
      Grupo: "INDUFAR",
    },
    {
      Nombre: "TABLETAS",
      Grupo: "BONAPHARM",
    },
    {
      Nombre: "TABLETAS CONTRA MOSQUITOS",
      Grupo: "CANCHA",
    },
    {
      Nombre: "TABLETAS DE LIBERACION RETARDADA",
      Grupo: "INTI ",
    },
    {
      Nombre: "TABLETAS DISPERSABLES",
      Grupo: "INTI ",
    },
    {
      Nombre: "TABLETAS EFERVECENTES",
      Grupo: "BAGO - BAYER",
    },
    {
      Nombre: "TABLETAS RECUBIERTAS",
      Grupo: "DROGUERIA INTI",
    },
    {
      Nombre: "TALCO",
      Grupo: "CRESPAL",
    },
    {
      Nombre: "TAMPONES",
      Grupo: "",
    },
    {
      Nombre: "TE",
      Grupo: "BONAFIX",
    },
    {
      Nombre: "TERMOMETRO",
      Grupo: "ADEMAR",
    },
    {
      Nombre: "TEST DE EMBARAZO",
      Grupo: "BQS",
    },
    {
      Nombre: "TETINA SILICONADA",
      Grupo: "DÑA FAVIANA",
    },
    {
      Nombre: "TOALLAS FEMENINAS",
      Grupo: "CANCHA",
    },
    {
      Nombre: "TOALLAS HUMEDAS",
      Grupo: "CRESPAL",
    },
    {
      Nombre: "UNGÜENTO",
      Grupo: "CRESPAL",
    },
    {
      Nombre: "UNGUENTO DERMICO",
      Grupo: "LAMOSAN",
    },
    {
      Nombre: "UNGÜENTO OFTALMICO",
      Grupo: "SAVAL",
    },
    {
      Nombre: "UNGUENTO OFTALMOLOGICO",
      Grupo: "SAVAL",
    },
    {
      Nombre: "USO TOPICO",
      Grupo: "PORTUGAL",
    },
    {
      Nombre: "VASO TOMATODO",
      Grupo: "GHIRAFF",
    },
    {
      Nombre: "VENDA DE YESO",
      Grupo: "HELP MEDICAL",
    },
    {
      Nombre: "VENDA ELASTICA",
      Grupo: "CORMESA ",
    },
    {
      Nombre: "VIA TOPICA",
      Grupo: "LAMOSAN",
    },
    {
      Nombre: "VIAL",
      Grupo: "IFA",
    },
  ];
  //const subGruposAgregados = new Set();

  const ReadExcel = () => {
    dataGroup.forEach(async (element, i) => {
      setTimeout(async () => {
        try {
          if (element.GrupoFamilia !== "") {
            const filtroGrupo = {
              Codigo: "",
              Nombre: element.GrupoFamilia,
              PrecioCompra: "",
              PrecioVenta: "",
              InventarioActual: "",
              ord: "",
            };
            var { data } = await postGrupoBuscar(filtroGrupo);
            data = await data.filter((a) => a.Nombre === element.GrupoFamilia);
            console.log("GrupoRes", data, element.GrupoFamilia);
            var idGrupo = await data[0]._id ;

            if (element.SubGrupo !== "") {
              const filtroSubGrupo = {
                Codigo: "",
                Nombre: element.SubGrupo,
                PrecioCompra: "",
                PrecioVenta: "",
                InventarioActual: "",
                ord: "",
              };
              var { data } = await postSubGrupoBuscar(filtroSubGrupo);
              data = await data.filter((a) => a.Nombre === element.SubGrupo && a.Grupo === idGrupo);
              console.log("SubGrupoRes", data, element.SubGrupo);
              var idSubGrupo = await data[0]._id;
            }
          }
          var product = {
            Codigo: element.Codigo,
            Nombre: element.Nombre,
            NombreGenerico: element.NombreGenerico,
            UnidadMedida: element.UnidadMedida,
            RegistroSanitario: element.RegistroSanitario,
            Descripcion: element.Descripcion,
            Proveedor: element.Proveedor,
            CodigoBarras: element.CodigoBarras,
            FechaVencimiento: element.FechaVencimiento,
            GrupoFamilia: idGrupo ?? "",
            SubGrupo: idSubGrupo ?? "",
            Ubicacion: element.Ubicacion,
            PrecioCompra: element.PrecioCompra,
            Utilidad: element.Utilidad,
            PrecioVenta: element.PrecioVenta,
            InventarioMinimo: 5,
            InventarioActual: 0,
          };
          //console.log(product)

          await postAgregarProducto(product).then(({ data }) => {
            console.log(data);
          });
        } catch (error) {
          console.error("Error", error);
          console.log("Codigo", element.Codigo)
        }
      }, i*500);
    });
  };

  /*const ReadExcelSubGrupo = () => {
    const aux = [];
    dataGroup.forEach(async (element, i) => {
      setTimeout(async () => {
        try {
          if (element.GrupoFamilia !== "") {
            const filtroGrupo = {
              Codigo: "",
              Nombre: element.GrupoFamilia,
              PrecioCompra: "",
              PrecioVenta: "",
              InventarioActual: "",
              ord: "",
            };
            var { data } = await postGrupoBuscar(filtroGrupo);
            data = await data.filter((a) => a.Nombre === element.GrupoFamilia);
            //console.log("GrupoRes", data, element.GrupoFamilia);

            var idGrupo = await data[0]._id ;
            if(element.SubGrupo !== ""){
              var product = {
                Nombre: element.SubGrupo,
                Grupo: idGrupo,
              };
              //console.log(product)
              if(!aux.find(a=>a.Nombre==product.Nombre && a.Grupo==product.Grupo)) {
                aux.push(product);
                await postSubGrupoAgregar(product).then(({ data }) => {
                  console.log(data);
                });
              }
            }
            
          }
          
        } catch (error) {
          console.error("Error", error);
          console.log("Codigo", element.Codigo)
        }
      }, i*100);
    });
  };*/

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
                ReadExcel();
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
