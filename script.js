document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;

    if (isNaN(weight) || isNaN(height)) {
        alert('Masukkan berat badan dan tinggi badan dengan benar.');
        return;
    }

    const bmi = calculateBMI(weight, height);
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    document.getElementById('bmiValue').innerText = `BMI Anda: ${bmi.toFixed(2)}`;
    document.getElementById('bmiCategory').innerText = `Kategori BMI: ${getBMICategory(bmi, gender)}`;
    document.getElementById('bmiExplanation').innerText = getBMIExplanation(bmi, gender);
});

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(bmi, gender) {
    if (gender === 'male') {
        if (bmi < 16) return 'Kurus sangat berat';
        else if (bmi >= 16 && bmi < 17) return 'Kurus berat';
        else if (bmi >= 17 && bmi < 18.5) return 'Kurus';
        else if (bmi >= 18.5 && bmi < 25) return 'Normal';
        else if (bmi >= 25 && bmi < 27) return 'Gemuk';
        else if (bmi >= 27 && bmi < 30) return 'Obesitas Kelas I';
        else if (bmi >= 30 && bmi < 35) return 'Obesitas Kelas II';
        else return 'Obesitas Kelas III';
    } else if (gender === 'female') {
        if (bmi < 16) return 'Kurus sangat berat';
        else if (bmi >= 16 && bmi < 17) return 'Kurus berat';
        else if (bmi >= 17 && bmi < 18.5) return 'Kurus';
        else if (bmi >= 18.5 && bmi < 24) return 'Normal';
        else if (bmi >= 24 && bmi < 27) return 'Gemuk';
        else if (bmi >= 27 && bmi < 30) return 'Obesitas Kelas I';
        else if (bmi >= 30 && bmi < 35) return 'Obesitas Kelas II';
        else return 'Obesitas Kelas III';
    }
}

function getBMIExplanation(bmi, gender) {
    // Keterangan BMI berdasarkan standar BMI WHO
    if (gender === 'male') {
        if (bmi < 16) return 'Anda berada pada kategori kurus sangat berat, segera konsultasikan dengan dokter.';
        else if (bmi >= 16 && bmi < 17) return 'Anda berada pada kategori kurus berat, segera konsultasikan dengan dokter.';
        else if (bmi >= 17 && bmi < 18.5) return 'Anda berada pada kategori kurus, sebaiknya pertahankan pola makan sehat.';
        else if (bmi >= 18.5 && bmi < 25) return 'Anda berada pada kategori normal, pertahankan pola makan sehat dan olahraga.';
        else if (bmi >= 25 && bmi < 27) return 'Anda berada pada kategori gemuk, sebaiknya kurangi asupan lemak dan gula.';
        else if (bmi >= 27 && bmi < 30) return 'Anda berada pada kategori obesitas kelas I, segera konsultasikan dengan dokter.';
        else if (bmi >= 30 && bmi < 35) return 'Anda berada pada kategori obesitas kelas II, segera konsultasikan dengan dokter.';
        else return 'Anda berada pada kategori obesitas kelas III, segera konsultasikan dengan dokter.';
    } else if (gender === 'female') {
        if (bmi < 16) return 'Anda berada pada kategori kurus sangat berat, segera konsultasikan dengan dokter.';
        else if (bmi >= 16 && bmi < 17) return 'Anda berada pada kategori kurus berat, segera konsultasikan dengan dokter.';
        else if (bmi >= 17 && bmi < 18.5) return 'Anda berada pada kategori kurus, sebaiknya pertahankan pola makan sehat.';
        else if (bmi >= 18.5 && bmi < 24) return 'Anda berada pada kategori normal, pertahankan pola makan sehat dan olahraga.';
        else if (bmi >= 24 && bmi < 27) return 'Anda berada pada kategori gemuk, sebaiknya kurangi asupan lemak dan gula.';
        else if (bmi >= 27 && bmi < 30) return 'Anda berada pada kategori obesitas kelas I, segera konsultasikan dengan dokter.';
        else if (bmi >= 30 && bmi < 35) return 'Anda berada pada kategori obesitas kelas II, segera konsultasikan dengan dokter.';
        else return 'Anda berada pada kategori obesitas kelas III, segera konsultasikan dengan dokter.';
    }
}
