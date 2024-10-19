

export const Paciente = ({paciente, setPaciente}) => {

    const {nombre, propietario, telefono, fecha, hora, sintomas} = paciente
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rouded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Teléfono: {''}
        <span className="font-normal normal-case">{telefono}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
        <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Hora: {''}
        <span className="font-normal normal-case">{hora}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
    </p>

    </div>
  )
}
