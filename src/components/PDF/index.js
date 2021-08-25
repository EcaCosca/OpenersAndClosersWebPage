import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { DocumentContainer, PDFContainer, PDFH1, PDFNavigation, PDFp, NavButton } from './PDFElements'
import sample from '../../Files/CAT.pdf'
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';

function PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
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
      
      <PDFNavigation>
      <NavButton
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          <FaArrowCircleLeft />
        </NavButton>
      <PDFp>{pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}</PDFp>
        <NavButton
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <FaArrowCircleRight />
        </NavButton>
      </PDFNavigation>

    </PDFContainer>
  );
}

export default PDF;