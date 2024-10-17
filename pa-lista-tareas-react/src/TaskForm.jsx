import { useState } from 'react';

function TaskForm() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    proyecto: '',
    tipoTarea: '',
    personaAsignada: '',
    storyPoints: '',
    prioridad: '',
    fechaCreacion: '',
    resumen: ''
  });

  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Manejar el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Agregar la nueva tarea a la lista de tareas
    setTasks([...tasks, formData]);

    // Limpiar el formulario
    setFormData({
      proyecto: '',
      tipoTarea: '',
      personaAsignada: '',
      storyPoints: '',
      prioridad: '',
      fechaCreacion: '',
      resumen: ''
    });
  };

  // Eliminar una tarea de la lista
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Formulario de Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Proyecto:</label>
          <input
            type="text"
            name="proyecto"
            value={formData.proyecto}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Tipo de tarea:</label>
          <select
            name="tipoTarea"
            value={formData.tipoTarea}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="desarrollo">Desarrollo</option>
            <option value="bug">Bug</option>
            <option value="documentación">Documentación</option>
          </select>
        </div>

        <div>
          <label>Persona asignada (Nombre del Desarrollador):</label>
          <input
            type="text"
            name="personaAsignada"
            value={formData.personaAsignada}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Story Points:</label>
          <input
            type="number"
            name="storyPoints"
            value={formData.storyPoints}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div>
          <label>Prioridad:</label>
          <select
            name="prioridad"
            value={formData.prioridad}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <div>
          <label>Fecha de creación:</label>
          <input
            type="date"
            name="fechaCreacion"
            value={formData.fechaCreacion}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Resumen:</label>
          <textarea
            name="resumen"
            value={formData.resumen}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Agregar Tarea</button>
      </form>

      {/* Mostrar la lista de tareas */}
      <h3>Lista de Tareas</h3>
      {tasks.length === 0 ? (
        <p>No hay tareas creadas aún.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Proyecto</th>
              <th>Tipo de tarea</th>
              <th>Persona asignada</th>
              <th>Story Points</th>
              <th>Prioridad</th>
              <th>Fecha de creación</th>
              <th>Resumen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.proyecto}</td>
                <td>{task.tipoTarea}</td>
                <td>{task.personaAsignada}</td>
                <td>{task.storyPoints}</td>
                <td>{task.prioridad}</td>
                <td>{task.fechaCreacion}</td>
                <td>{task.resumen}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskForm;
