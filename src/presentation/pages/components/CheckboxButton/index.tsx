import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import * as S from './style';
import { useFilter } from '../../../../helpers';

interface Props {
   label: string;
   value: any;
   checked?: boolean;
   onChange: () => void;
}

export const CheckboxButton: React.FC<Props> = ({ label, value, onChange }) => {
    const [checked, setChecked] = useState(false);

    console.log('ch', checked)

   return (
      <S.CheckboxContainer
        checked={checked}
      >
         <S.HiddenCheckbox
            onChange={onChange}
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