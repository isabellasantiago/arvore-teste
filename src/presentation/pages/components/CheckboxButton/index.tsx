import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import * as S from './style';

type Value = {
   text: string;
   value: number | string;
}
interface Props {
   label: string;
   value?: Value;
   setValue?: any;
}

export const CheckboxButton: React.FC<Props> = ({ label, value }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = (e?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>, data?: any) => {
         console.log('ss',data)
         setChecked(!checked);
    }

    const handleInput = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      console.log('value', e.target);
    }

   return (
      <S.CheckboxContainer
        checked={checked}
        onClick={(e) => handleCheck(e)}
      >
         <S.HiddenCheckbox 
            value={value}
            onChange={(e) => handleCheck(e, value)}
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