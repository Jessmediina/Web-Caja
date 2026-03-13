import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'


const ReciboGeneral = () => {
  return (
    <div className="min-h-screen bg-[#F0F0F0] p-2 font-sans text-[#333]">
      <div className="mx-auto max-w-[1200px] border border-gray-400 bg-[#E0E0E0] shadow-sm">
        
        <header className="bg-white p-2 flex justify-between items-center border-b border-gray-400">
          <div className="flex items-center gap-4">
            <img src="/logo-ayuntamiento.png" alt="Escudo" className="h-14" />
            <h1 className="text-2xl font-bold text-[#003366]">
              H. XXIV Ayuntamiento de Tecate, B.C.
            </h1>
          </div>
          <img src="/logo-gobierno.png" alt="Gobierno" className="h-14" />
        </header>

        <div className="p-1 px-3 flex justify-between text-sm border-b border-gray-400 italic text-gray-700">
          <div>
            <span>Miércoles, 11 de Marzo de 2026</span>
            <div className="text-red-600 font-bold text-xl not-italic">FOLIO G-1</div>
          </div>
          <div className="text-xs space-y-1">
            <div className="flex justify-end gap-2">
              <span>Nombre Cajero :</span>
              <span className="bg-[#566573] text-white px-8 min-w-[200px] text-center not-italic">Administrador del Sistema</span>
            </div>
            <div className="flex justify-end gap-2">
              <span>Unidad Operativa :</span>
              <span className="bg-[#99A3A4] text-white px-8 min-w-[200px] text-center not-italic uppercase">U. Op. Recaudación de Rentas</span>
            </div>
          </div>
        </div>

        <div className="bg-[#BDC3C7] p-1 px-3">
          <h2 className="text-xl font-bold text-[#5D6D7E]">Ingresos - Recibo General</h2>
        </div>

        <div className="flex gap-1 p-1">
          <div className="flex-grow space-y-1">
            <div className="border border-gray-400 bg-white p-2">
              <div className="grid grid-cols-12 gap-x-2 gap-y-1">
                <div className="col-span-9">
                  <label className="text-xs">Contribuyente (Nombre / Razón Social) :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 px-1 text-sm outline-none focus:bg-yellow-50" />
                </div>
                <div className="col-span-3">
                  <label className="text-xs">R.F.C. :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 px-1 text-sm outline-none focus:bg-yellow-50" />
                </div>
                <div className="col-span-8">
                  <label className="text-xs">Domicilio (Calle, No. Exterior, No. Interior) :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 px-1 text-sm outline-none" />
                </div>
                <div className="col-span-4">
                  <label className="text-xs">Colonia :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 px-1 text-sm outline-none" />
                </div>
                <div className="col-span-6">
                  <label className="text-xs">Población :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 px-1 text-sm outline-none" />
                </div>
                <div className="col-span-4">
                  <label className="text-xs">Estado :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 px-1 text-sm outline-none" />
                </div>
                <div className="col-span-2">
                  <label className="text-xs">C. P. :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 px-1 text-sm outline-none" />
                </div>
              </div>
            </div>

            <div className="border border-gray-400 bg-white p-2">
              <div className="flex items-end gap-1 mb-2">
                <div className="flex-grow">
                  <label className="text-xs block">Buscar Concepto : </label>
                  <div className="flex">
                    <input type="text" className="w-full border border-gray-400 h-6 px-1 text-sm outline-none" />
                    <button className="bg-[#E0E0E0] border border-l-0 border-gray-400 px-2 h-6 hover:bg-gray-300">🔍</button>
                  </div>
                </div>
                <div className="w-16">
                  <label className="text-xs block">Cant.:</label>
                  <input type="text" className="w-full border border-gray-400 h-6 text-center text-sm outline-none" />
                </div>
                <div className="w-24">
                  <label className="text-xs block">Imp. Unitario :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 text-right px-1 text-sm outline-none" />
                </div>
                <div className="w-24">
                  <label className="text-xs block">Imp. Total :</label>
                  <input type="text" className="w-full border border-gray-400 h-6 text-right px-1 text-sm outline-none bg-yellow-100" defaultValue="0" />
                </div>
                <div className="flex flex-col items-center bg-[#2C3E50] text-white p-1 rounded-sm">
                   <span className="text-[10px] font-bold">Mult.:</span>
                   <input type="checkbox" className="h-4 w-4" />
                </div>
              </div>
              
              <div className="border border-gray-400 h-24 overflow-y-scroll bg-white">
                <table className="w-full text-xs border-collapse">
                  <thead className="bg-[#F2F2F2] sticky top-0 border-b border-gray-400">
                    <tr>
                      <th className="border-r border-gray-300 px-1 text-left w-20 uppercase">Código</th>
                      <th className="border-r border-gray-300 px-1 text-left uppercase">Descripción</th>
                      <th className="border-r border-gray-300 px-1 text-center w-12 uppercase">Cant.</th>
                      <th className="border-r border-gray-300 px-1 text-right w-20 uppercase">Unitario</th>
                      <th className="border-r border-gray-300 px-1 text-right w-20 uppercase">TOTAL</th>
                      <th className="px-1 text-left uppercase">Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-end gap-1 mt-1">
                <button className="bg-[#BDC3C7] border border-gray-500 rounded p-1 hover:bg-gray-400">
                  <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-blue-800 font-bold shadow-inner">+</div>
                </button>
                <button className="bg-[#BDC3C7] border border-gray-500 rounded p-1 hover:bg-gray-400">
                  <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-red-800 font-bold shadow-inner">×</div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-64 border border-gray-400 bg-[#BDC3C7] p-2 flex flex-col gap-4">
            <div>
              <label className="text-xs font-bold block uppercase">Grupo de Caja :</label>
              <div className="bg-[#5D6D7E] text-white text-center py-1 text-sm shadow-inner">
                Recaudación de Rentas
              </div>
            </div>

            <div>
              <label className="text-xs font-bold block uppercase">Total Recibo :</label>
              <input type="text" className="w-full border border-gray-500 h-8 text-right px-2 text-lg font-bold outline-none" readOnly />
            </div>

            <div className="mt-auto space-y-2">
              <button className="w-full bg-[#A3D9A5] border border-green-700 py-2 rounded flex items-center justify-center gap-2 hover:bg-[#8ec790] shadow-sm active:shadow-inner">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">✔</div>
                <span className="font-bold text-white drop-shadow-md text-lg italic">Procesar</span>
              </button>
              <button className="w-full bg-[#D9A3A3] border border-red-700 py-2 rounded flex items-center justify-center gap-2 hover:bg-[#c78e8e] shadow-sm active:shadow-inner">
                <div className="bg-red-700 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">✘</div>
                <span className="font-bold text-white drop-shadow-md text-lg italic">Cancelar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReciboGeneral;
