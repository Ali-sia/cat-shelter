import styled from 'styled-components';

export const LoaderDiv = styled.div`
  .loader {
    display: block;

    width: 130px;
    height: 4px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .loader::before {
    content: '';
    position: absolute;
    background: #ff3629;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
`;
