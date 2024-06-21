document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleId = urlParams.get('vehicle');

    const vehicleDetails = {
        r34: {
            title: 'Nissan Skyline R34 GT-R',
            description: 'Detail lengkap untuk Nissan Skyline R34 GT-R.',
            image: 'r34.png'
        },
        supra: {
            title: 'Toyota Supra MK5',
            description: 'Detail lengkap untuk Toyota Supra MK5.',
            image: 'supramk5.png'
        },
        eclipse: {
            title: 'Mitsubishi Eclipse GSX 1992',
            description: 'Detail lengkap untuk Mitsubishi Eclipse GSX 1992.',
            image: 'eclipse.png'
        },
        mclaren720: {
            title: 'MCLaren 720 LT',
            description: 'Detail lengkap untuk MCLaren 720 LT.',
            image: 'mclaren720.png'
        },
        r35: {
            title: 'Nissan R-35 GT-R LBWK',
            description: 'Detail lengkap untuk Nissan R-35 GT-R LBWK.',
            image: 'r35.png'
        },
        rx7veilside: {
            title: 'Madza RX-7 Veilside',
            description: 'Detail lengkap untuk Madza RX-7 Veilside.',
            image: 'rx7veilside.png'
        },
        cayman: {
            title: 'Porche Cayman 2018',
            description: 'Detail lengkap untuk Porche Cayman 2018.',
            image: 'cayman.png'
        },
        evo9: {
            title: 'Mitsubishi Evolution IX Voltex',
            description: 'Detail lengkap untuk Mitsubishi Evolution IX Voltex.',
            image: 'evo9.jpg'
        }
    };

    const vehicle = vehicleDetails[vehicleId];
    if (vehicle) {
        const carImageElement = document.getElementById('car-image');
        const carTitleElement = document.getElementById('car-title');
        const carDescriptionElement = document.getElementById('car-description');

        carImageElement.src = vehicle.image;
        carImageElement.alt = vehicle.title;
        carTitleElement.textContent = vehicle.title;
        carDescriptionElement.textContent = vehicle.description;
    }
});
