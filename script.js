const materials = 
{
  Aluminium: { alpha: 23e-6, ro: 2.82e-8 , k: 237 ,E: 70e9 },
  Bakar: { alpha: 17e-6, ro: 1.68e-8, k: 401, E: 110e9 },
  Zelezo: { alpha: 12e-6, ro: 1.0e-7,  k: 80,  E: 200e9 },
  Celik: { alpha: 12e-6, ro: 1.0e-7, k: 50, E: 200e9 },
  Mesing: { alpha: 19e-6, ro: 6.0e-8, k: 109, E: 100e9 },
  Bronza: { alpha: 18e-6, ro: 7.5e-8, k: 60, E: 110e9 },
  Srebro: { alpha: 19e-6, ro: 1.59e-8, k: 429, E: 83e9 },
  Zlato: { alpha: 14e-6, ro: 2.44e-8, k: 318, E: 79e9 },
  Olovo: { alpha: 29e-6, ro: 2.2e-7, k: 35, E: 16e9 },
  Cink: { alpha: 30e-6, ro: 5.9e-8, k: 116, E: 108e9 },

  Nikel: { alpha: 13e-6, ro: 7.0e-8, k: 91, E: 200e9 },
  Kalaj: { alpha: 22e-6, ro: 1.1e-7, k: 67, E: 50e9 },
  Titanium: { alpha: 9e-6, ro: 4.2e-7, k: 22, E: 116e9 },
  Hrom: { alpha: 6e-6, ro: 1.3e-7, k: 94, E: 279e9 },
  Kobalt: { alpha: 13e-6, ro: 6.2e-8, k: 100, E: 209e9 },

  Staklo: { alpha: 9e-6, ro: 1e12, k: 1.05, E: 70e9 },
  Cement: { alpha: 12e-6, ro: 1e6, k: 1.7, E: 30e9 },
  Tula: { alpha: 5e-6, ro: 1e6, k: 0.72, E: 15e9 },
  Granit: { alpha: 8e-6, ro: 1e6, k: 3.0, E: 50e9 },
  Mermer: { alpha: 5e-6, ro: 1e6, k: 2.5, E: 50e9 },

  Drvo: { alpha: 3e-6, ro: 1e10, k: 0.12, E: 10e9 },
  Guma: { alpha: 70e-6, ro: 1e13, k: 0.16, E: 0.01e9 },
  Plastika: { alpha: 80e-6, ro: 1e12, k: 0.2, E: 2e9 },
  PVC: { alpha: 52e-6, ro: 1e12, k: 0.19, E: 3e9 },
  Najlon: { alpha: 80e-6, ro: 1e12, k: 0.25, E: 2.5e9 },

  Hartija: { alpha: 20e-6, ro: 1e10, k: 0.05, E: 5e9 },
  Silikon: { alpha: 2.6e-6, ro: 6.4e2, k: 149, E: 130e9 },
  Germanium: { alpha: 6e-6, ro: 0.5, k: 60, E: 103e9 },
  Grafit: { alpha: 8e-6, ro: 3.5e-5, k: 119, E: 1000e9 },

  Volfram: { alpha: 4.5e-6, ro: 5.6e-8, k: 173, E: 411e9 },
  Platina: { alpha: 9e-6, ro: 1.06e-7, k: 72, E: 168e9 },
  Magnezium: { alpha: 26e-6, ro: 4.4e-8, k: 156, E: 45e9 },
  Molibden: { alpha: 5e-6, ro: 5.3e-8, k: 138, E: 329e9 }
};
  


function presmetajTE() 
{
 
  const materialName = document.getElementById("material").value;
  const material = materials[materialName];
   
}

  
  if (!material) 
  {
    alert("Одбери материјал! ;)");
    return;
  }

  
  const L0 = parseFloat(document.getElementById("pocetnadolzTE").value);
  const deltaT = parseFloat(document.getElementById("deltaT").value);

 
  if (isNaN(L0) || isNaN(deltaT)) 
  {
    alert("Внеси валидни броеви!");
    return;
  }

   if (L0=== 0||deltaT=== 0) 
  {
    alert("промената во температура или должината не можат да бидат 0!");
    return;
  }

  
  const deltaL = material.alpha * L0 * deltaT;

 
  document.getElementById("TErezultat").innerText =
    "Промена во должина: (ΔL) = " + deltaL.toFixed(12) + " m";



    
function presmetajEO()
{
 
  const materialName = document.getElementById("material").value;
  const material = materials[materialName];

  if (!material) 
  {
    alert("Одбери материјал! ;)");
    return;
  }

 
  const L = parseFloat(document.getElementById("dolzinaotp").value);
 const S= parseFloat (document.getElementById("presek").value);

  if (isNaN(L) || isNaN(S)) 
  {
    alert("Внеси валидни броеви!");
    return;
  }

  if (S=== 0||L=== 0) 
  {
    alert("Напречниот пресек или должината не можат да бидат 0!");
    return;
  }

  
  const R = material.ro * L / S;

  
  document.getElementById("EOrezultat").innerText =
    "Отпор (R) = " + R.toFixed(6) + " Ω";
}



function presmetajTS() 
{
 
  const materialName = document.getElementById("material").value;
  const material = materials[materialName];

 
  if (!material) 
  {
    alert("Одбери материјал! ;)");
    return;
  }


  const P = parseFloat(document.getElementById("P").value);
  const t = parseFloat(document.getElementById("t").value);
  const L = parseFloat(document.getElementById("dolzina").value);
  const deltaT = parseFloat(document.getElementById("tempdif").value);

 
  if (isNaN(L) || isNaN(deltaT)|| isNaN(t)||isNaN(P)) 
  {
    alert("Внеси валидни броеви!");
    return;
  }

  if (P=== 0||L=== 0 || t===0|| deltaT===0) 
  {
    alert("Плоштината,должината,времето или разликата на температура  не можат да бидат 0!");
    return;
  }

  // 3.presmetaj
  const Q =(material.k * P * deltaT*t)/L;

  // 4. Display 
  document.getElementById("TSrezultat").innerText =
    "Вкупна спроведена топлина: (Q) = " + Q.toFixed(6) + "J";
}


function presmetajE() 
{
  
  const materialName = document.getElementById("material").value;
  const material = materials[materialName];


  if (!material) 
  {
    alert("Одбери материјал! ;)");
    return;
  }

  // 2. Get user inputs
  const F = parseFloat(document.getElementById("F").value);
  const L0 = parseFloat(document.getElementById("L0").value);
  const P = parseFloat(document.getElementById("Pe").value);

  // proveri dali se broevi
  if (isNaN(L0) || isNaN(F) || isNaN(P)) 
  {
    alert("Внеси валидни броеви!");
    return;
  }

  if (F=== 0||L0=== 0 || P===0) 
  {
    alert("Плоштината,должината или силата не можат да бидат 0!");
    return;
  }

  // 3.kalkuliraj
  const deltaL =(F*L0)/(P*material.E);
  const L=L0+deltaL;

  // 4.Display 
  document.getElementById("deltaL").innerText =
    "Промена на должина(Елонгација): (ΔL=L+L0)  = " + deltaL.toFixed(12) + "m";
  document.getElementById("Erezultat").innerText =
    " Конечна должина " + L.toFixed(12) + "m";
  
}
