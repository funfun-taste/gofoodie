/**
 * 요청 시간 체크
 */
export function createTransactionId() {
  const date = new Date();
  return date.getTime().toString();
}
