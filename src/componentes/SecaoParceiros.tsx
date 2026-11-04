
const ClientesParceiros = () => {
  // Lista de clientes baseada na imagem fornecida
  const clientes = [
    "FARMACE",
    "Atos Medicina",
    "Autodesk",
  ];

  return (
    <section className="flex flex-col gap-6 py-6 bg-white overflow-hidden border-b border-gray-100">
      {/* Título */}
      <h2 className="text-2xl text-gray-500 text-center md:mt-14">
        CLIENTES E PARCEIROS
      </h2>

      <div className="flex w-full justify-center">
        {clientes.map((cliente, index) => (
          <div key={index} className="flex items-center mx-6 whitespace-nowrap">
            {/* Pontinho separador */}
            <span className="w-1 h-1 rounded-full bg-gray-300 mr-4"></span>
            {/* Nome do Cliente */}
            <span className="text-gray-400 font-medium text-sm">{cliente}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientesParceiros;
