import WindowWrapper from '@hoc/WindowWrapper.jsx'
import { WindowControlls } from '@components/index.js'
import { Download } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

const Resume = () => {
  const isMobile = window.innerWidth < 640

  return (
    <>
      <div id="window-header">
        <WindowControlls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <Document file="files/resume.pdf">
        <Page
          pageNumber={1}
          width={isMobile ? window.innerWidth : undefined}
          renderTextLayer
          rederAnnotationLayer
        />
      </Document>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')
export default ResumeWindow
