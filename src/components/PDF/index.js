import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { DocumentContainer, PDFContainer, PDFH1 } from './PDFElements'
import sample from '../../Files/CAT.pdf'

function PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <PDFContainer>
      <PDFH1>Catalogo {new Date().getFullYear()}</PDFH1>
      
      <DocumentContainer>
        <Document
          // file= 'https://drive.google.com/file/d/1GB8VPBawFyKM7X6LbY_vwgjLMYTX4J5S/view?usp=sharing'
          file= {sample}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </DocumentContainer>
      <p>Page {pageNumber} of {numPages}</p>

    </PDFContainer>
  );
}

export default PDF;