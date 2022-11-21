import { Button, Modal } from '@mui/material';
import { useRouter } from 'pages/routing';

export default function DefaultErrorFallback({ ...fallbackProps }) {
  const { resetErrorBoundary } = fallbackProps;
  const router = useRouter();

  const handleClick = () => {
    resetErrorBoundary();
    router.push('/property-type');
  };

  /**
   * @author 김경현
   * sentry 등 에러 로깅 서비스 호출하기
   */
  return (
    <Modal opened={true} onClose={resetErrorBoundary}>
      {/* {error.message} */}
      예상치 못한 문제가 발생했어요. 아래 버튼을 클릭하셔서 다시 시작하실 수 있어요
      <Button mt={24} onClick={handleClick}>
        다시 시작하기
      </Button>
    </Modal>
  );
}
