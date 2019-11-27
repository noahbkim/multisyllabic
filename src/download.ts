export const download: (blob: Blob, name: string) => void = (() => {

  // Create a hidden element in the document
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';

  // Set the download
  return (blob: Blob, name: string) => {
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  };
})();
