
import { useState } from "react";
import { Document, Page, pdfjs, } from 'react-pdf';
import useMeasure from 'react-use-measure'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDF() {
    const [file, setFile] = useState(null)
    const [numPage, setNumPage] = useState(0)

    const [ref, { width }] = useMeasure()

    const onLoadSuccess = ({ numPages }) => {
        setNumPage(numPages)
    }

    const onChange = (event) => {
        setFile(event.target.files[0])
    }

    return (
        <div ref={ref}>
            <input type="file" accept="application/pdf" onChange={onChange} />
            <Document
                file={file}
                onLoadSuccess={onLoadSuccess}
                noData={<h4>Please select a file</h4>}
            >
                <Page pageNumber={numPage} width={width} />
            </Document>
        </div>
    )
}