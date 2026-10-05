function loadPDF(path) {
  const container = document.getElementById("pdf-window");

  pdfjsLib.getDocument(path).promise.then(pdf => {
    pdf.getPage(1).then(page => {
      const canvas = document.createElement("canvas");
      container.innerHTML = "";
      container.appendChild(canvas);

      const context = canvas.getContext("2d");
      const viewport = page.getViewport({ scale: 1.5 });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({ canvasContext: context, viewport: viewport });
    });
  });
}
