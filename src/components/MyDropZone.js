import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import YAML from 'yamljs';

const whitebox = {
    "padding": "16px",
    "border": "1px",
    "borderStyle": "Solid",
    "borderColor": "#eeeeee",
    "border-radius": "3px",
    "width": "90%",
    "display": "inline-block"
}
const box = {
    "flex": "1",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "padding": "20px",
    "borderWidth": "2px",
    "borderRadius": "2px",
    "borderStyle": "dashed",
    "borderColor": "#eeeeee",
    "background-color": "#fafafa",
    "color": "#bdbdbd",
    "outline": "none",
    "transition": "border .24s ease-in-out"
}
const activeStyle = {
    borderColor: '#ff1744'
}
const MyDropzone = ({ swaggerInfo,swaggerRead }) => {

    const {
        open,
        getRootProps,
        getInputProps,
        acceptedFiles,
        isDragActive
    } = useDropzone({
        noClick: true
    });
    const boxstyle = useMemo(() => ({
        ...box,
        ...(isDragActive ? activeStyle : {})
    }), [
        isDragActive
    ]);
    // const files = acceptedFiles.map(file => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //     </li>
    // ));

    return (
        <section className="container" style={whitebox}>
            <div style={boxstyle} {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} onChange={swaggerRead} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <button type="button" onClick={open}>
                    Open File Dialog
        </button>
            </div>
            <aside>
                {/* <ul>{file!==null ? file.path + file.size : ''}</ul> */}
            </aside>
        </section>
    );
}

export default MyDropzone;