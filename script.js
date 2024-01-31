document.getElementById("printButton").addEventListener("click", function() {
    // Create a dummy PDF content (you can replace this with your actual PDF content)
    const pdfContent = '<!DOCTYPE html><html><head><title>Dummy PDF</title></head><body><h1>Hello, this is a dummy PDF!</h1></body></html>';

    // Convert the HTML content to a Blob
    const blob = new Blob([pdfContent], { type: 'application/pdf' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute and filename
    link.download = 'PowerReport.pdf';

    // Create a URL for the Blob and set it as the href attribute
    link.href = URL.createObjectURL(blob);

    // Append the link to the document
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});
