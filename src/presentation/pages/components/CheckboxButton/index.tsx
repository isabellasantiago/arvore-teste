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

export const CheckboxButton: React.FC<Props> = ({ label, value, onChange, checked }) => {
    const [checkedState, setCheckedState] = useState(checked || false);

    const toggleChecked = () => {
      setCheckedState(!checkedState)
      onChange()
    }

   return (
      <S.CheckboxContainer
        checked={checkedState}
      >
         <S.HiddenCheckbox
            onChange={toggleChecked}
            checked={checkedState}
         />
         <S.StyledCheckbox
            checked={checkedState}
         >
            {checkedState && <CheckIcon style={{ fontSize:'15px' }}/>}
         </S.StyledCheckbox>
         <S.Text> {label} </S.Text>
      </S.CheckboxContainer>
   );
}