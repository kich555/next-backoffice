import * as yup from 'yup';
const schema = yup.object().shape({
  // schema 사용법
  // input-name : yup.dataType.method
  firstName: yup.string().required('필수 입력값입니다'),
  lastName: yup.string().required('필수 입력값입니다'),
  age: yup.string().test('age', '19세 미만은 가입 금지입니다.', (value) => {
    return moment().diff(moment(value), 'years') >= 19;
  }),
});

export default schema;
