function changeMessage() {
    const messages = [
        "Keisyana, setiap langkahmu adalah langkah menuju impian yang lebih besar! Terus berjuang, kamu pasti bisa!",
        "Jangan pernah ragu, Keisyana! Dunia ini penuh dengan peluang yang menantimu. Terus berusaha, terus bermimpi!",
        "Keisyana, tidak ada yang mustahil selama kamu percaya dan berusaha. Terus semangat, kamu pasti hebat!",
        "Keisyana, jangan pernah berhenti belajar, karena hidup ini adalah proses. Kamu sudah hebat, jangan menyerah!",
        "Semangat terus, Keisyana! Ingat, setiap kegagalan adalah langkah menuju kesuksesan.",
        "Keisyana, tak ada batasan untuk kamu! Setiap tantangan adalah kesempatan untuk menjadi lebih kuat!",
        "Keisyana, percayalah pada proses! Semua kerja kerasmu akan terbayar. Kamu luar biasa!",
        "Keisyana, meski perjalananmu penuh rintangan, ingatlah bahwa kamu lebih kuat dari apapun!",
        "Keisyana, perjalanan panjangmu ini akan membawamu ke tempat yang luar biasa. Terus berjalan, jangan berhenti!",
        "Keisyana, semangatmu adalah kekuatan yang tak terlihat. Kamu bisa mencapai lebih dari yang kamu bayangkan!",
        "Keisyana, jangan takut gagal, karena setiap kegagalan adalah pelajaran untuk mencapai sukses yang lebih besar.",
        "Keisyana, kamu adalah orang yang penuh potensi. Jadikan setiap hari kesempatan untuk menjadi lebih baik!",
        "Keisyana, teruslah berlari, karena masa depan yang indah menantimu di ujung sana!",
        "Keisyana, dengan hati yang penuh semangat, tidak ada yang tak bisa kamu capai. Percayalah pada dirimu!",
        "Keisyana, tak ada yang lebih indah daripada melihatmu mengejar impian dengan sepenuh hati. Terus semangat!"
    ];

    const messageElement = document.getElementById("message");
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];

    // Efek perubahan pesan
    messageElement.style.opacity = 0;
    setTimeout(() => {
        messageElement.style.transition = "opacity 1s";
        messageElement.style.opacity = 1;
    }, 100);
}
