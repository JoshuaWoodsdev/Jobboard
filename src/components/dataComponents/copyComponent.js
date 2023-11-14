
import React from 'react';
import styled from 'styled-components';

const CopyComponentDisplay = styled.div`

`;

const Copy = styled.div`

`;

const CopyComponent = ({copy}) => {
    return (
    <CopyComponentDisplay>
        <Copy>{copy}</Copy>
    </CopyComponentDisplay>
    );
};


export default CopyComponent;