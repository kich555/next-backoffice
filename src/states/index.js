import { atom } from 'recoil';

/**
 * loginState
 * @param {string} key 해당 상태에 대해 조회하는 키, 로그인 여부
 * @param {boolean} default 해당 상태의 값
 */
export const loginState = atom({
  key: 'loginState',
  default: false,
});
