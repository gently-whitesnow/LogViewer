import { useEffect, useState } from "react";

import { observer } from "mobx-react-lite";
import { readAllText } from "../../../helpers/IOHelper";
import {
  ErrorWrapper,
  TextPreprocessorWrapper,
} from "./TextPreprocessor.styles";

const TextPreprocessor = (props) => {
  const [fileContent, setFileContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    readAllText(
      props.file,
      (event) => {
        setFileContent(event.target.result);
      },
      (errorArray) => setError(errorArray)
    );
  }, [props.file]);

  const 

  return (
    <TextPreprocessorWrapper>
      <div>{fileContent}</div>
      <ErrorWrapper>{error}</ErrorWrapper>
    </TextPreprocessorWrapper>
  );
};

export default observer(TextPreprocessor);

// запарсить файл
// разбить на компоненты
// 

// компоненты держатели своего уровня логгирования
// компоненты самого логгирования

//компонент отображения

// функция процессинга? 
