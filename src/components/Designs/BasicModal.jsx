import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoadingButton from '@mui/lab/LoadingButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
};

export default function BasicModal({}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box p={3} sx={style}>
          <Typography textAlign="center" id="modal-modal-title" variant="h6" component="h2">
            예상치 못한 문제가 발생했어요.
          </Typography>
          <Typography textAlign="center" id="modal-modal-description" sx={{ mt: 2 }}>
            아래 버튼을 클릭하셔서 다시 시작하실 수 있어요
          </Typography>
          <Box mt={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <LoadingButton loading={false} variant="contained" onClick={() => console.log('test')}>
              다시 시작하기
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
