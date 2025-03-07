document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links and content sections
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Get the content section to show
            const contentId = link.getAttribute('data-content');

            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));

            // Show the selected content section
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.classList.add('active');
            }
        });
    });

    // Initialize Charts for Statistics section
    const ventasCtx = document.getElementById('ventasChart');
    if (ventasCtx) {
        new Chart(ventasCtx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: 'Ventas',
                    data: [65, 59, 80, 81, 56, 55],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    const librosVendidosCtx = document.getElementById('librosVendidosChart');
    if (librosVendidosCtx) {
        new Chart(librosVendidosCtx, {
            type: 'doughnut',
            data: {
                labels: ['El Señor de los Anillos', 'Cien años de soledad', 'Don Quijote'],
                datasets: [{
                    data: [30, 25, 20],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ]
                }]
            }
        });
    }

    const ingresosCtx = document.getElementById('ingresosChart');
    if (ingresosCtx) {
        new Chart(ingresosCtx, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: 'Ingresos',
                    data: [1200, 1900, 1500, 2100, 1800, 2300],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    }
                }
            }
        });
    }
});

// Functions for handling period changes in Statistics and History sections
function cambiarPeriodoVentas(periodo) {
    // Remove active class from all period buttons
    document.querySelectorAll('#estadisticas .btn-group .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to clicked button
    event.target.classList.add('active');
    // Here you would typically update the charts with new data based on the period
}

function cambiarPeriodoHistorial(periodo) {
    // Remove active class from all period buttons
    document.querySelectorAll('#historial .btn-group .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Update period text
    const periodoText = {
        'diario': 'Mostrando ventas de hoy',
        'semanal': 'Mostrando ventas de esta semana',
        'mensual': 'Mostrando ventas de este mes'
    };
    document.getElementById('periodoSeleccionado').textContent = periodoText[periodo];
    // Here you would typically load new data based on the selected period
}