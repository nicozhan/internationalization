import { ILocale } from './type';

const ko: ILocale = {
  instruction: '설명',
  newTabOpen: '새 창에서 보기',
  actions: '작업',
  editCuboid: '편집',
  display: '디스플레이',

  attachment: '첨부파일',
  actionF: '객체/코멘트 생성',
  actionF_S: '세그먼트/코멘트 생성',
  actionCtrlC: '복사',
  actionCtrlV: '붙여넣기',
  actionCtrlDrag: '드래그로 객체 복사하기',
  actionDel: '객체 삭제',
  actionCtrlZ: '실행 취소',
  actionCtrlShiftZ: '다시 실행',
  actionU: '수동/AI 보조로 전환',

  actionAlt1: '인스턴스 결과 보기/편집 모드로 전환되었습니다',
  actionAlt2: '세그멘테이션 결과 보기/편집 모드로 전환되었습니다',
  actionWS: '큐보이드를 위/아래로 이동',
  actionW_S: '추가 모드를 커버/커버 안 함으로 전환',
  actionAD_S: '포인트 추가/삭제',
  actionCtrlAD_S: '포임트 연속 추가/삭제',
  actionTab_S: '코멘트 완료',
  actionC_S: '등고선 보이기/숨기기',
  actionX_S: '스위치 브러시 유형',
  actionAD: '큐보이드를 뒤로/앞으로 이동',
  actionQE: '큐보이드를 왼쪽/오른쪽으로 이동',
  actionZX: '큐보이드를 왼쪽/오른쪽 회전',
  actionT: '클래스 및 속성 패드 보이기/숨기기',
  actionM: '태그 속성 보이기/숨기기',
  actionC: '90° 회전',
  actionV: '180° 회전',
  actionY: '다시 위치 잡기',
  actionG: '좌표축 보이기/숨기기',
  actionB: '2d 시각에서 다른 객체 필터링하기',
  actionN: '보조 선 보이기/숨기기',
  actionR: '심사 패널 열기/닫기',
  actionL: '공유 엣지 전환',
  actionK: '포인트별로 에지 공유',
  actionLink: '매핑 보조 포인트 보이기/숨기기',
  actionShiftH: '코멘트 보이기/숨기기',
  actionO: '별명/클래스 이름 보이기',
  actionP: 'Show Trajectory',
  actionEnd: '완료',

  titleTaskId: '다스크 ID',
  titleTaskName: '다스크 이름',
  titleDataID: '데이터 ID',
  titleDataName: '데이터 이름',
  titleDataSize: '데이터 크기',
  btnCopyDataDetail: '데이터 세부 정보 복사하기',
  canNotCopy: '브라우저가 복사를 지원하지 않습니다.',
  // Button
  btnOk: '확인',
  btnSave: '저장',
  btnConfirm: '확인',
  btnCancel: '취소',
  btnDelete: '삭제',
  btnDiscard: '포기',
  btnRelease: '릴리스',
  btnRefresh: '새로 고침',
  // Annotation.ts
  titleComment: '코멘트',
  titleReplyComment: '코멘트 답장하기',
  titleUnresolved: '해결되지 않음',
  titleResolved: '해결',
  titleType: '유형',
  msgDelete: '삭제하시겠습니까?',
  msgType: '유형을 선택하세요',
  msgChar: '입력은 500자 미만이어야 합니다',
  holderComment: '설명을 입력하십시오.',
  holderReply: '새 응답을 추가합니다.',
  // ModalFlow.ts
  titleReject: '반려 정보',
  titleNoInfo: '정보 없음',
  // Reject.vue
  titleStage: '목표 단계',
  titleWorker: '작업자',
  titleNew: 'New',
  titleResult: '결과',
  titleKeep: '결과 유지',
  titleClear: '결과 지우기',
  titleReason: '반려 이유',
  msgWorker: '제출한 사람',
  msgNew: '해당 단계의 다른 작업자에게 할당',
  msgKeep: '모든 결과 및 성과 유지',
  msgClear: '모든 ground truth 결과 지우기',
};

export { ko };
