import React, { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core'; // PDF Worker
import { pdfjs, Document, Page } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfModal = ({ pdfFile }) => {
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open PDF</button>
      
      {showModal && (
        <div className="modal">
          <span className="close" onClick={toggleModal}>&times;</span>
          <div className="modal-content">
            <Worker>
              <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfModal;
