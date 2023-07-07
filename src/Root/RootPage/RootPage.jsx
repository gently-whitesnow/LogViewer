import { FileUploaderWrapper, RootPageWrapper } from "./RootPage.styles";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import TextPreprocessor from "./TextPreprocessor/TextPreprocessor";

const RootPage = (props) => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    console.log(file)
  };
  return (
    <RootPageWrapper color={props.color}>
      <div>
        {file === null?<FileUploaderWrapper>
          <FileUploader
            classes="file-uploader"
            multiple={true}
            handleChange={handleChange}
            name="file"
            label="Upload .log file here"
          />{" "}
        </FileUploaderWrapper>:<TextPreprocessor file={file}/>}
        
      </div>
    </RootPageWrapper>
  );
};

export default observer(RootPage);
