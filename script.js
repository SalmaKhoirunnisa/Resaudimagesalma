function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const preview = document.getElementById('preview');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas dimensions same as image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw image onto canvas
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // Compress image
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.5); // Example compression quality 0.5

            // Display compressed image
            const compressedImg = new Image();
            compressedImg.src = compressedDataUrl;
            preview.innerHTML = '';
            preview.appendChild(compressedImg);

            // Enable download button
            document.getElementById('downloadImageBtn').disabled = false;
        }
    }

    reader.readAsDataURL(file);
}

function uploadAudio() {
    const fileInput = document.getElementById('audioInput');
    const audio = document.getElementById('audio');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        audio.src = e.target.result;

        // Enable download button
        document.getElementById('downloadAudioBtn').disabled = false;
    }

    reader.readAsDataURL(file);
}

function downloadImage() {
    const preview = document.getElementById('preview');
    const img = preview.querySelector('img');

    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'compressed_image.jpg';
    link.click();
}

function downloadAudio() {
    const audio = document.getElementById('audio');

    const link = document.createElement('a');
    link.href = audio.src;
    link.download = 'uploaded_audio.mp3';
    link.click();
}

function grayscaleImage() {
    const fileInput = document.getElementById('imageInput');
    const preview = document.getElementById('preview');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas dimensions same as image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw image onto canvas
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // Convert to grayscale
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                data[i] = avg; // Red
                data[i + 1] = avg; // Green
                data[i + 2] = avg; // Blue
            }
            ctx.putImageData(imageData, 0, 0);

            // Convert canvas to data URL and display compressed image
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.5); // Example compression quality 0.5
            const compressedImg = new Image();
            compressedImg.src = compressedDataUrl;
            preview.innerHTML = '';
            preview.appendChild(compressedImg);

            // Enable download button
            document.getElementById('downloadImageBtn').disabled = false;
        }
    }

    reader.readAsDataURL(file);
}

// HTML nya


