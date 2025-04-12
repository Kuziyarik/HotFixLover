function downloadFile() {
    const link = document.createElement('a');
    link.href = 'content/CrosshairV1nx.exe'; // Путь к файлу
    link.download = ''; // Атрибут download для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}