import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import datosIniciales from './data.json';

const ReciboGeneral = () => {
  const [config] = useState(datosIniciales.configuracion);
  const [recibo, setRecibo] = useState(datosIniciales.reciboActual);     // Inicializamos los estados basados en la estructura del data.JSON

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecibo({
      ...recibo,
      [name]: value
    });
  };

  const totalRecibo = recibo.items.reduce((acc, item) => acc + (item.unitario * item.cantidad), 0);

  return (
    <div className="min-h-screen bg-[#F0F0F0] p-4 font-sans text-[#333]">
      <div className="mx-auto max-w-[1100px] border border-gray-400 bg-[#E0E0E0] shadow-md">
        
        <header className="bg-white p-2 flex justify-between items-center border-b border-gray-400">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 bg-gray-200 flex items-center justify-center text-[10px] text-center italic border border-gray-300">
              Logo<br/>Ayto.
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900 leading-tight">
                {config.ayuntamiento}
              </h1>
              <p className="text-xs text-gray-600 font-semibold">{config.subdireccion}</p>
            </div>
          </div>
          <div className="h-16 w-32 bg-gray-100 flex items-center justify-center text-[10px] italic border border-gray-200">
            Logo Gobierno
          </div>
        </header>

        <div className="p-2 px-4 flex justify-between text-sm border-b border-gray-400 bg-gray-50 italic text-gray-700">
          <div>
            <span className="block text-xs not-italic text-gray-500 font-bold">Fecha de Emisión:</span>
            <span className="text-lg text-black font-medium">{config.fechaEmision}</span>
            <div className="text-red-600 font-bold text-2xl not-italic mt-1 uppercase tracking-tighter">
              FOLIO {config.folio}
            </div>
          </div>
          <div className="text-xs space-y-1">
            <div className="flex justify-end items-center gap-2">
              <span className="font-bold">Nombre Cajero :</span>
              <span className="bg-[#566573] text-white px-4 py-0.5 min-w-[220px] text-center not-italic shadow-sm">
                {config.cajero}
              </span>
            </div>
            <div className="flex justify-end items-center gap-2">
              <span className="font-bold">Unidad Operativa :</span>
              <span className="bg-[#99A3A4] text-white px-4 py-0.5 min-w-[220px] text-center not-italic uppercase shadow-sm">
                {config.unidadOperativa}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#BDC3C7] p-1 px-4 border-b border-gray-400 shadow-inner">
          <h2 className="text-lg font-bold text-[#2C3E50] uppercase tracking-wider">
            Ingresos - Recibo General
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-1 p-1">
          <div className="flex-grow space-y-1">
            
            <div className="border border-gray-400 bg-white p-3 shadow-sm">
              <div className="grid grid-cols-12 gap-x-3 gap-y-2">
                <div className="col-span-9">
                  <label className="text-[10px] font-bold uppercase text-gray-600 block">Contribuyente :</label>
                  <input 
                    name="contribuyente"
                    value={recibo.contribuyente}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full border border-gray-300 h-7 px-2 text-sm outline-none focus:border-blue-500 focus:bg-yellow-50 transition-colors"
                  />
                </div>
                <div className="col-span-3">
                  <label className="text-[10px] font-bold uppercase text-gray-600 block">R.F.C. :</label>
                  <input 
                    name="rfc"
                    value={recibo.rfc}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full border border-gray-300 h-7 px-2 text-sm outline-none focus:border-blue-500 focus:bg-yellow-50"
                  />
                </div>
                <div className="col-span-8">
                  <label className="text-[10px] font-bold uppercase text-gray-600 block">Domicilio :</label>
                  <input 
                    name="domicilio"
                    value={recibo.domicilio}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full border border-gray-300 h-7 px-2 text-sm outline-none focus:border-blue-500 focus:bg-yellow-50"
                  />
                </div>
                <div className="col-span-4">
                  <label className="text-[10px] font-bold uppercase text-gray-600 block">Colonia :</label>
                  <input 
                    name="colonia"
                    value={recibo.colonia}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full border border-gray-300 h-7 px-2 text-sm outline-none focus:border-blue-500 focus:bg-yellow-50"
                  />
                </div>
                <div className="col-span-4">
                  <label className="text-[10px] font-bold uppercase text-gray-600 block">Población :</label>
                  <input 
                    name="poblacion"
                    value={recibo.poblacion}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full border border-gray-300 h-7 px-2 text-sm outline-none focus:border-blue-500 focus:bg-yellow-50"
                  />
                </div>
                <div className="col-span-4">
                  <label className="text-[10px] font-bold uppercase text-gray-600 block">Estado :</label>
                  <input 
                    name="estado"
                    value={recibo.estado}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full border border-gray-300 h-7 px-2 text-sm outline-none focus:border-blue-500 focus:bg-yellow-50"
                  />
                </div>
                <div className="col-span-4">
                  <label className="text-[10px] font-bold uppercase text-gray-600 block">Código Postal :</label>
                  <input 
                    name="codigoPostal"
                    value={recibo.codigoPostal}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full border border-gray-300 h-7 px-2 text-sm outline-none focus:border-blue-500 focus:bg-yellow-50"
                  />
                </div>
              </div>
            </div>

            <div className="border border-gray-400 bg-white p-3 shadow-sm">
              <div className="border border-gray-400 h-40 overflow-y-auto bg-white">
                <table className="w-full text-[11px] border-collapse">
                  <thead className="bg-gray-200 sticky top-0 border-b border-gray-400 shadow-sm">
                    <tr>
                      <th className="border-r border-gray-300 p-1.5 text-left w-20">CÓDIGO</th>
                      <th className="border-r border-gray-300 p-1.5 text-left">DESCRIPCIÓN</th>
                      <th className="border-r border-gray-300 p-1.5 text-center w-12">CANT.</th>
                      <th className="border-r border-gray-300 p-1.5 text-right w-24">UNITARIO</th>
                      <th className="border-r border-gray-300 p-1.5 text-right w-24">TOTAL</th>
                      <th className="p-1.5 text-left">NOTAS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recibo.items.map((item, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors">
                        <td className="p-1.5 border-r border-gray-200 font-mono">{item.codigo}</td>
                        <td className="p-1.5 border-r border-gray-200 font-medium">{item.descripcion}</td>
                        <td className="p-1.5 border-r border-gray-200 text-center">{item.cantidad}</td>
                        <td className="p-1.5 border-r border-gray-200 text-right font-mono">${item.unitario.toFixed(2)}</td>
                        <td className="p-1.5 border-r border-gray-200 text-right font-mono font-bold">${(item.cantidad * item.unitario).toFixed(2)}</td>
                        <td className="p-1.5 italic text-gray-400">{item.notas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-full md:w-64 border border-gray-400 bg-[#BDC3C7] p-3 flex flex-col gap-4 shadow-inner">
            <div className="bg-white/50 p-2 rounded border border-gray-400">
              <label className="text-[10px] font-bold block uppercase text-gray-700 mb-1">Grupo de Caja :</label>
              <div className="bg-[#5D6D7E] text-white text-center py-2 text-xs font-bold shadow-md rounded-sm">
                {config.grupoCaja}
              </div>
            </div>

            <div className="bg-white p-2 rounded border border-gray-400 shadow-sm">
              <label className="text-[10px] font-bold block uppercase text-blue-900 mb-1">Total del Recibo :</label>
              <div className="relative">
                <span className="absolute left-2 top-1.5 text-gray-500 font-bold">$</span>
                <input 
                  type="text" 
                  className="w-full border border-gray-400 h-10 text-right px-2 text-xl font-bold text-green-700 outline-none bg-gray-50 font-mono" 
                  value={totalRecibo.toFixed(2)} 
                  readOnly 
                />
              </div>
            </div>

            <div className="mt-auto space-y-3 pt-4">
              <button 
                onClick={() => console.log("Enviando a Base de Datos:", recibo)}
                className="w-full bg-[#27ae60] border-b-4 border-[#1e8449] py-3 rounded-md flex items-center justify-center gap-3 hover:bg-[#2ecc71] transition-all active:border-b-0 active:translate-y-1 group"
              >
                <span className="font-bold text-white text-lg uppercase tracking-wider italic">✓ Procesar</span>
              </button>
              
              <button className="w-full bg-[#c0392b] border-b-4 border-[#922b21] py-3 rounded-md flex items-center justify-center gap-3 hover:bg-[#e74c3c] transition-all active:border-b-0 active:translate-y-1">
                <span className="font-bold text-white text-lg uppercase tracking-wider italic">✕ Cancelar</span>
              </button>
            </div>
          </div>
        </div>

        <footer className="bg-gray-200 p-1 text-[9px] text-center text-gray-500 border-t border-gray-400 uppercase tracking-widest font-bold">
          Addcore SAM - version : 4.1.13.1127
        </footer>
      </div>
    </div>
  );
};

export default ReciboGeneral;