import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from '../ComponentToPrint';

export const Print = () => {
  const ref = useRef(null);

  return (
    <>
      <DialogTitle id="alert-dialog-title">testのプロフィールを印刷しますか？</DialogTitle>
      <DialogContent>
        <ComponentToPrint ref={ref} />
      </DialogContent>
      <DialogActions>
        <Button color="primary">キャンセル</Button>
        <ReactToPrint
          trigger={() => (
            <Button size="small" color="primary">
              印刷
            </Button>
          )}
          content={() => ref.current}
        />
      </DialogActions>
    </>
  );
};
