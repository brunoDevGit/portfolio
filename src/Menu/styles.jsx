import styled from 'styled-components';

export const Container = styled.div`
        background: linear-gradient(150deg, #E50914 25%, #181616);
>ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 21px;
}
`;
export const DropdownStyles = styled.div`
    .dropdown-option {
        padding: 20px 25px;
        outline: 0;
        color: #fff;
        font-size: 18px;

        transition: opacity 0.2s;

        &:hover,
        &:focus {
            opacity: 0.55;
        }
    }
    .dropdown-root {
        z-index: 10;
        position: absolute;
    }
    .dropdown-arrow {
        position: relative;
       
        &::before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background: #181414;

            top: -6.5px;
            left: -8px;
            border-radius: 4px 0 0 0;
            transform: rotate(45deg);
            
        }
    }

    .dropdown-container {
        position: absolute;
        overflow: hidden;
        background-color:#181414;
        box-shadow: 4px -1px 10px -1px #838383;
        border-radius: 4px;
      
        
    }
    .dropdown-section {
        position: absolute;
        

    }
    .dropdown-background {
        position: absolute;
        bottom: 0;
        background: #181414;
        width: 100%;
        

    }

`;


