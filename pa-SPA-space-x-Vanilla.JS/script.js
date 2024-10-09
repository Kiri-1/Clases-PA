// Elemento principal donde cargaremos el contenido dinámicamente
const appElement = document.getElementById('app');

// Definir rutas de la SPA
const routes = {
    '#home': homePage,
    '#launch-details': launchDetailsPage // Quitamos la ruta 'launches'
};

// Función para cargar la ruta actual
function router() {
    const currentHash = window.location.hash.split('?')[0] || '#home'; // Capturar hash base
    const routeFunction = routes[currentHash] || notFoundPage; // Ruta no encontrada
    routeFunction();
}

// Página de inicio (Home): mostrar una grilla de tarjetas con los lanzamientos
async function homePage() {
    appElement.innerHTML = `<h2>Loading launches...</h2>`; // Mostrar mensaje de carga
    try {
        const response = await fetch('https://api.spacexdata.com/v5/launches');
        const launches = await response.json();

        // Generar el contenido dinámico basado en los lanzamientos
        const launchesHTML = launches.slice(0, 12).map(launch => `
            <div class="card">
                <img src="${launch.links.patch.small}" alt="${launch.name}" class="launch-img" data-id="${launch.id}">
                <h3>${launch.name}</h3>
            </div>
        `).join('');

        // Cargar el contenido al DOM
        appElement.innerHTML = `
            <section class="launch-grid">
                ${launchesHTML}
            </section>
        `;

        // Añadir eventos a las imágenes clickeables
        document.querySelectorAll('.launch-img').forEach(img => {
            img.addEventListener('click', (event) => {
                const launchId = event.target.getAttribute('data-id');
                window.location.hash = `#launch-details?id=${launchId}`;
            });
        });

    } catch (error) {
        appElement.innerHTML = `<p>Error loading launches. Please try again later.</p>`;
    }
}

// Página de detalles del lanzamiento
async function launchDetailsPage() {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const launchId = params.get('id');

    if (!launchId) {
        appElement.innerHTML = `<p>No launch ID provided</p>`;
        return;
    }

    appElement.innerHTML = `<h2>Loading launch details...</h2>`; // Mostrar mensaje de carga

    try {
        const response = await fetch(`https://api.spacexdata.com/v5/launches/${launchId}`);
        const launch = await response.json();

        // Mostrar detalles del lanzamiento
        appElement.innerHTML = `
            <section class="launch-details">
                <img src="${launch.links.patch.small}" alt="${launch.name}" class="detail-img">
                <h2>${launch.name}</h2>
                <p><strong>Date and Time:</strong> ${new Date(launch.date_utc).toLocaleString()}</p>
                <p><strong>Flight Number:</strong> ${launch.flight_number}</p>
                <p><strong>Rocket:</strong> ${launch.rocket}</p>
                <p><strong>Details:</strong> ${launch.details ? launch.details : 'No details available'}</p>
                <p><strong>Failures:</strong> ${launch.failures.length > 0 ? launch.failures.map(failure => failure.reason).join(', ') : 'No failures'}</p>
            </section>
        `;
    } catch (error) {
        appElement.innerHTML = `<p>Error loading launch details. Please try again later.</p>`;
    }
}

// Página no encontrada
function notFoundPage() {
    appElement.innerHTML = `
        <section>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </section>
    `;
}

// Escuchar los cambios en el hash para cargar la página correcta
window.addEventListener('hashchange', router);

// Cargar la ruta actual cuando se carga la página
window.addEventListener('load', router);
