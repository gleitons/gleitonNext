import { useState } from "react";
import Image from "next/image";

export function DocumentacaoQRCode({url, ano, mes, nomemes}) {
  return (
    <div className="flex mb-3 flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg  mx-auto w-full">
      <Image
        src={url}// Substitua pelo caminho da sua imagem de QR Code
        alt="QR Code para acessar a documentação"
        width={1000}
        height={1000}
        className="rounded-lg w-full"
      />
      <h2 className="text-2xl font-bold text-green-700 mt-4 text-center">
        Ano: {ano} - Mês: {mes} - {nomemes}
      </h2>
    </div>
  );
}

export default function Index() {
  const [ano2016, setAno2016] = useState([]);
//   const [ano2017, setAno2017] = useState([]);
    
  let i = 3;
  while ( i < 12) {
    const url = `/contra/2016/${i + 1}.png`;
    const data = new Date(2016, (i + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2016, mes: i + 1, nomeMes: nomeMes });
    i += 1;
  }
  
  let i2 = 1;
  while ( i2 < 12) {
    const url = `/contra/2017/${i2 + 1}.png`;
    const data = new Date(2017, (i2 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2017, mes: i2 + 1, nomeMes: nomeMes });
    i2 += 1;
  }
 
  let i3 = 1;
  while ( i3 < 12) {
    const url = `/contra/2018/${i3 + 1}.png`;
    const data = new Date(2018, (i3 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2018, mes: i3 + 1, nomeMes: nomeMes });
    i3 += 1;
  }
  let i4 = 1;
  while ( i4 < 12) {
    const url = `/contra/2019/${i4 + 1}.png`;
    const data = new Date(2019, (i4 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2019, mes: i4 + 1, nomeMes: nomeMes });
    i4 += 1;
  }
  let i5 = 1;
  while ( i5 < 12) {
    const url = `/contra/2019/${i5 + 1}.png`;
    const data = new Date(2019, (i5 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2019, mes: i5 + 1, nomeMes: nomeMes });
    i5 += 1;
  }
  let i6 = 1;
  while ( i6 < 12) {
    const url = `/contra/2020/${i6 + 1}.png`;
    const data = new Date(2020, (i6 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2020, mes: i6 + 1, nomeMes: nomeMes });
    i6 += 1;
  }

  let i7 = 1;
  while ( i7 < 12) {
    const url = `/contra/2021/${i7 + 1}.png`;
    const data = new Date(2021, (i7 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2021, mes: i7 + 1, nomeMes: nomeMes });
    i7 += 1;
  }

  let i8 = 1;
  while ( i8 < 12) {
    const url = `/contra/2022/${i8 + 1}.png`;
    const data = new Date(2022, (i8 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2022, mes: i8 + 1, nomeMes: nomeMes });
    i8 += 1;
  }

  let i9 = 1;
  while ( i9 < 12) {
    const url = `/contra/2023/${i9 + 1}.png`;
    const data = new Date(2023, (i9 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2023, mes: i9 + 1, nomeMes: nomeMes });
    i9 += 1;
  }

  let i10 = 1;
  while ( i10 < 10) {
    const url = `/contra/2024/${i10 + 1}.png`;
    const data = new Date(2024, (i10 + 1) - 1);
    const nomeMes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
    ano2016.push({ url: url, ano: 2024, mes: i10 + 1, nomeMes: nomeMes });
    i10 += 1;
  }
  
  

  return (
    <div className="w-full bg-white text-black">
      <div>
        <h2>Contracheques</h2>
        {ano2016.map((e, index) => (
          <div key={index}>
            <DocumentacaoQRCode url={e.url} ano={e.ano} mes={e.mes} nomemes={e.nomeMes}  />
          </div>
        ))}
      </div>
    </div>
  );
}
