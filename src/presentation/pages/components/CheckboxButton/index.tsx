import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import * as S from './style';

interface Props {
    label: string;
    value?: any;
}

export const CheckboxButton: React.FC<Props> = ({ label }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    }

   return (
      <S.CheckboxContainer
        checked={checked}
        onClick={handleCheck}
      >
         <S.HiddenCheckbox 
            onChange={handleCheck}
            checked={checked}
         />
         <S.StyledCheckbox
            checked={checked}
         >
            {checked && <CheckIcon style={{ fontSize:'15px' }}/>}
         </S.StyledCheckbox>
         <S.Text> {label} </S.Text>
      </S.CheckboxContainer>
   );
}