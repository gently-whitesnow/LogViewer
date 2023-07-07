import styled from "styled-components";

export const RootPageWrapper = styled.div`
min-height:100%;
`;

export const FileUploaderWrapper = styled.div`
padding: 30px;

.file-uploader{
      max-width: unset;
      min-height: 600px;
      span{
        font-size: 45px;
      }
      div{
        justify-content: center;
      }
      span{
        margin-inline: 10px;
      }
      svg{
        display: none;;
      }
}
`;
