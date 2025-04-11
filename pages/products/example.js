function downloadFile() {
    const link = document.createElement('a');
    link.href = 'content/Архив ZIP - WinRAR.zip'; // Путь к файлу
    link.download = ''; // Атрибут download для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}