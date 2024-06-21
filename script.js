function showDetail(vehicleId) {
    const modal = document.getElementById('vehicle-modal');
    const modalBody = document.getElementById('modal-body');
    
    const vehicleDetails = {
        r34: {
            title: 'Nissan Skyline R34 GT-R',
            description: 'This Is Catalog Agust 2024',
            image: 'r34.png'
        },
        supra: {
            title: 'Toyota Supra MK5',
            description: 'This Is Catalog Agust 2024',
            image: 'supramk5.png'
        },
        eclipse: {
            title: 'Mitsubishi Eclipse GSX 1992',
            description: 'This Is Catalog Agust 2024',
            image: 'eclipse.png'
        },
        mclaren720: {
            title: 'MCLaren 720 LT',
            description: 'This Is Catalog Agust 2024',
            image: 'mclaren720.png'
        },
        r35: {
            title: 'Nissan R-35 GT-R LBWK',
            description: 'This Is Catalog Agust 2024',
            image: 'r35.png'
        },
        rx7veilside: {
            title: 'Madza RX-7 Veilside',
            description: 'This Is Catalog Agust 2024',
            image: 'rx7veilside.png'
        },
        cayman: {
            title: 'Porche Cayman 2018',
            description: 'This Is Catalog Agust 2024',
            image: 'cayman.png'
        },
        evo9: {
            title: 'Mitsubishi Evolution IX Voltex',
            description: 'This Is Catalog Agust 2024',
            image: 'evo9.jpg'
        }
    };

    const vehicle = vehicleDetails[vehicleId];
    
    modalBody.innerHTML = `
        <h2>${vehicle.title}</h2>
        <img src="${vehicle.image}" alt="Car Image">
        <p>${vehicle.description}</p>
    `;
    
    modal.style.display = 'block';
}

function closeDetail() {
    const modal = document.getElementById('vehicle-modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('vehicle-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
