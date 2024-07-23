

export const handleDownload = () => {
    // Create an anchor element and set the href attribute to the PDF file path
    const link = document.createElement('a');
    link.href = '/resumeA.pdf'; // Path to your PDF file in the public directory
    link.download = 'BestResumeEver.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };