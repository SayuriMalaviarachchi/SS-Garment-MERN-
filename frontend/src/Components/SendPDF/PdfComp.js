import React from 'react'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PdfComp(props) {

    const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState();//(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
        <div>
        {props.pdfFile  ? (
            
         <Document file= {props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null,Array(numPages))
            .map((x,i) => i + 1)
            .map((page) => {
                return (
                    <Page
                    pageNumber={page}
                    renderTextLayer = {false}
                    renderAnnotationLayer = {false}
                    />
                )
            })}
         <Page pageNumber={pageNumber} />
      </Document>
        ) : (
            <p>PDF file not available</p>
        )}
      <p>
        Page {pageNumber} of {numPages}
      </p>
      
    </div>
    </div>
  )
}
