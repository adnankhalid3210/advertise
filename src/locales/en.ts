/* eslint-disable prettier/prettier */
import { LocaleMessageObject, MessageContext } from "vue-i18n"

const en: LocaleMessageObject = {
  barcode: {
    messages: {
      show: "이 바코드를 보여주세요",
    },
  },
  "question-board": {
    name: "Question Board",
    placeholders: {
      "question-max-size": (ctx: MessageContext) =>
        `Please leave your question here. (Up to ${ctx.named("maxSize")} characters )`,
      "answer-max-size": (ctx: MessageContext) =>
        `Please leave your answer here. (Up to ${ctx.named("maxSize")} characters )`,
    },
    "order-types": {
      like: "Like",
      time: "Time",
    },
    labels: {
      default_state: "질문 기본 상태",
      default_allow_state: "질문 기본 허가 상태",
      default_owner_name: "전체 질문자 이름을 다음으로 표시",
      order_type: "정렬 순서",
    },
    "question-states": {
      "before-check": "관리자 체크 전, 관리자 체크가 끝나면 지정 상태로 변경된다",
      normal: "Normal",
      pinned: "Pinned",
      hidden: "Hidden",
      deleted: "Deleted - Only seen by Organizer",
    },
    "allow-states": {
      "before-check": "Before check",
      allowed: "Allowed ",
      disallowed: "Disallowed",
    },
    buttons: {
      question: "Enter",
      submit: "등록",
      cancel: "취소",
    },
    Index: {
      edit: "수정",
      download: "다운로드",
      operation: "오퍼레이션",
      presentation: "프리젠테이션 뷰 ",
      manage_contents: "내용 관리 ",
      manage_speakers: "연자 관리 ",
    },
  },
  "question-set": {
    name: "퀴즈 질문",
    labels: {
      name: "퀴즈 질문 이름",
      code: "퀴즈 질문 관리 코드",
      "full-text": "전체 질문",
      "overwrite-full-text": "전체 질문 덮어쓰기",
    },
  },
  attendee: {
    labels: {
      first_name: "성",
      last_name: "이름",
      full_name: "성명",
      title: "호칭",
      gender: "성별",
      email: "이메일",
      mobile_number_country_code: "핸드폰 국제 코드",
      mobile_number: "핸드폰",
      phone_number: "유선번호",
      phone_number_country_code: "유선번호 국제코드",
      country: "국가",
      city: "도시",
      province: "도(Province)",
      zipcode: "우편번호(Zipcode)",
      street_address: "주소",
      detailed_address: "상세주소",
      membership_name: "소속",
      membership_division: "부서",
      membership_position: "직책",
      membership_level: "직위",
      membership_title: "직책 호칭(Dr. 등 추가로 필요한 경우)",
      membership_role: "소속 내 역할",
      membership_type: "소속 내 구분",
      membership_code: "소속 식별코드(사번, 면허번호)",
      event_role_group_type: "행사 역할 그룹",
      event_role_type: "행사 역할 세부 타입",
      organic_source: "가입 경로 - 가입 링크를 가져온 사이트 등",
      register_type: "가입 형태(관리자 추가, 직접가입 등)",
      register_phase: "사전/현장 등록",
      register_group: "유료/무료나 국내, 해외 그룹 등 - 실제로 관리를 위해 사용되는 그룹",
    },
  },
  messages: {
    searching: "검색중입니다... 잠시 기다려 주세요",
    code_send_notification: "입장코드는 세미나 참석 신청시 사용하신 이메일로 발송되었습니다.",
  },
  "register-now": {
    labels: {
      country: "Country",
      email: "E-mail Address",
      "email--id": "E-mail Address (ID)",
      "first-name": "First Name",
      "last-name": "Last Name",
      "full-name": "성명(국문)",
      title: "Title",
      degree: "Degree",
      city: "City",
      affiliation: "Affiliation",
      department: "Department",
      mobile: "Mobile Phone",
      "license-number": "면허 번호",
    },
  },
  playcard: {
    states: {
      normal: "일반 상태",
      disabled: "비활성 상태",
      hidden: "숨기기",
    },
    labels: {
      state: "플레이카드 상태",
      name: "플레이카드 이름",
      title: "표시될 플레이카드 이름",
      "title-type": "플레이카드 이름 표시 형태",
      "border-type": "플레이카드 외곽선 표시 형태",
    },
  },
  "playcard-container": {
    labels: {
      name: "컨테이너 이름",
      type: "컨테이너 레이아웃 종류",
    },
    types: {
      normal: "일반",
      "tablet-landscape-3column": "타블렛 가로형 3열",
      "tablet-landscape-4column": "타블렛 가로형 4열",
    },
  },
  agreement: {
    messages: {
      "default-text": "Do you agree with our policy?",
      "default-confirm-text": "Yes, I Agree",
    },
  },
  "sponsor-information": {
    titles: {
      "sponsor-description": "Company/Product description",
      "product-description": "Product description",
      "sponsor-name": "Company name",
      "sponsor-contact": "Company contact",
      "sponsor-homepage": "Website",
    },
  },
  "sponsor-booth": {
    labels: {
      "company-information-title": "Company/Product Description",
    },
    Index: {
      failed: "실패",
    },
  },
  stibee: {
    labels: {
      api: "API 트리거 주소",
    },
  },
  "nline-board": {
    name: "N행시 게시판",
    labels: {
      submit: "등록하기",
    },
  },
  TaskState: {
    Requested: "요청됨",
    Waiting: "실행 대기중",
    Running: "실행 중",
    Canceled: "취소",
    Failed: "실패",
    Finished: "완료",
  },
  "scheduled-task": {
    name: "예약 작업",
    labels: {
      "scheduled-date": "예약 날짜",
      "scheduled-time": "예약 시간",
      scheduled_at: "예약 시간",
      scheduled_by_name: "예약한 사용자",
    },
  },
  "check-in-out": {
    labels: {
      "cancel-confirm": "취소",
      "cancel-confirm-negative": "기록 유지",
      "check-in-confirm-button": "체크인",
      "check-in-confirm-negative-button": "체크인 하지 않음",
      "check-out-confirm-button": "체크아웃",
      "check-out-confirm-negative-button": "체크아웃 하지 않음",
      "check-in-confirm": "체크인 하시겠습니까?",
      "check-out-confirm": "체크아웃 하시겠습니까?",
      "check-in-cancel-confirm": "체크인을 취소하시겠습니까?",
      "check-in-cancel-alert": "체크아웃도 함께 취소됩니다.",
      "check-out-cancel-confirm": "체크아웃을 취소하시겠습니까?",
      "check-in-complete": "체크인 하셨습니다",
      "check-out-complete": "체크아웃 하셨습니다",
      "check-in-cancel-complete": "체크인 취소 하셨습니다",
      "check-out-cancel-complete": "체크아웃 취소 하셨습니다",
    },
  },
  "attend-record": {
    name: "출결 기록",
    labels: {
      cancel: "취소하기",
      watching: "시청중",
      popup: "출결 기록 보기 팝업",
      none: "기록 없음",
      prepare: "출결 기록 준비",
      attend: "체크인",
      exit: "체크아웃",
      "show-attend-records": "입퇴실 체크",
      "check-in-post-name": "세션 이름",
      "attend-time": "세션 입실",
      "exit-time": "세션 퇴장",
      "duration-in-hour": "체류시간",
      point: "평점",
    },
  },
  "stream-video": {
    types: {
      youtube: "유튜브",
      vimeo: "비메오",
      kollus: "콜루스",
    },
    labels: {
      watermark: "워터마크 추가",
      "one-time-ulr": "일회용 URL",
    },
  },
  wordcloud: {
    complete: "등록되었습니다",
    menus: {
      "update-form": "워드 클라우드 수정",
    },
    labels: {
      color: "색 패턴",
      font_family: "폰트",
      rotation: "회전 패턴",
      spacing: "글자 간격(%)",
      enter_leave_animation: "글자 애니메이션 종류",
      animation_easing: "글자 애니메이션 움직임",
      animation_duration: "글자 애니메이션 시간(밀리초)",
      animation_overlap: "글자 애니메이션 겹치기(%)",
      font_size_ratio: "폰트 크기 비율(%)",
      placeholder: "단어를 올려주세요. (최대 20자)",
      word: "단어",
      word_count: "갯수",
      blocked: "숨기기",
      create_word: "단어 추가",
    },
  },
  "survey-reaction": {
    type: {
      register: "등록",
      message: "메세지 전송",
    },
  },
  scan: {
    mode: {
      camera: "카메라",
      scanner: "스캐너",
    },
  },
  "check-in": {
    action: {
      attend: "출석",
      exit: "퇴장",
      check: "체크",
    },
  },
  "check-in-post": {
    type: {
      "attend-exit": "출결 확인",
      stamp: "스탬프 투어",
      receive: "경품 수령",
      check: "단순 확인",
    },
  },
  "check-in-post-condition": {
    type: {
      log: "이전 체크인 기록 필요",
      point: "점수 필요",
    },
  },
  account: {
    type: {
      Admin: "관리자",
      SuperAdmin: "최고관리자",
      Staff: "스탭",
      Operator: "오퍼레이터",
    },
    state: {
      confirmWaiting: "승인대기중",
      normal: "정상",
      inactive: "비활성",
      active: "활성",
    },
  },
  states: {
    confirmWaiting: "승인대기중",
    normal: "정상",
    inactive: "비활성",
    live: "활성",
    event: {
      state: {
        draft: "작성중",
      },
    },
    webinar: {
      Slide: "슬라이드 모드",
      Video: "비디오 모드",
    },
  },
  triggers: {
    Global: {
      email: {
        OrganizerCreation: "오거나이저 생성",
        OrganizerRequestConfirm: "오거나이저 메일 주소 확인",
        OrganizerActivation: "오거나이저 활성화",
        OrganizerDeactivation: "오거나이저 비활성화",
      },
    },
  },
  submit: {
    cancel: "Cancel",
    "add-condition": "조건 추가",
    clear: "화면 지우기",
    signature: "서명하기",
    default: "보내기",
    create: "생성",
    modify: "수정",
    delete: "삭제",
    activate: "활성화",
    deactivate: "비활성화",
    login: "로그인",
    find: "찾기",
    register: "Register",
    "register-now": "Register Now",
    "register-completed": "Registered.",
    account_register: "회원가입",
    enter: "Enter",
    survey: "설문조사",
    link: "링크",
    long_survey: "설문 참여하기",
    long_modify_cancel: "Cancel modification",
    long_question: "Send",
    long_question_modify: "Modify",
    long_answer: "Reply",
    long_answer_modify: "Modify reply",
    like: "likes",
    close_answer: "Close Reply",
    new_answer: "Reply",
    "quiz-ground-create-session": "퀴즈 세션 생성",
    show_result: "결과 보기",
    create_header_token: "엑세스 토큰 생성",
    download: "다운로드",
    change_to_default_image: "기본 이미지로 교체",
    change_to_alter_image: "대체 이미지로 교체",
    ready: "진행 대기",
    confirm: "확인",
  },
  navigations: {
    next_page: "다음 페이지",
    prev_page: "이전 페이지",
  },
  placeholders: {
    account_name: "ID를 입력하세요",
    name: "Attendee Name",
    code: "Access Code",
    password: "비밀번호를 입력하세요",
    question: "Please leave your questions here. (up to 200 characters)",
    answer: "Please leave your answer here. (up to 200 characters)",
    "membership-code": "질문을 입력해주세요. (최대 200자)",
  },
  labels: {
    full_name: "이름",
    email_address: "이메일",
    register_group: "등록 그룹",
    scheduled_at: "예약 시간",
    scheduled_by_name: "예약자",
    "time-order": '<i class="fal fa-history"></i>최신순',
    "like-order": '<i class="fal fa-thumbs-up"></i>좋아요순',
    download_report: "엑셀파일 다운로드",
    likes: "좋아요",
    "before-just": "방금 전",
    "before-seconds": "초 전",
    "before-minutes": "분 전",
    "before-hours": "시간 전",
    "before-days": "일 전",
    "scan-mode": "스캔 방법",
    attend_time: "출석시각",
    exit_time: "퇴장시각",
    group_name: "그룹 이름",
    point: "점수",
    "download-attend-records": "입퇴장 기록 다운로드",
    "check-in-action": "체크인 방식",
    "prepare-record-on-register": "등록시 출결 설정",
    "check-in-post-name": "체크인 포스트",
    "start-time": "시작시각",
    "end-time": "종료시각",
    condition: "조건",
    number: "갯수",
    "bulk-creation": "여러 건 생성",
    "create-receive-stamp": "경품 받기 스탬프 생성",
    subscribe: "연락 요청",
    make_new: "신규생성",
    stream_video_name: "동영상",
    subscribe_button_title: "연락 요청 버튼 이름",
    subscribe_message: "연락 요청 안내",
    company_description: "회사 설명",
    product_description: "상품 설명",
    contact: "연락처",
    homepage_url: "홈페이지 주소",
    brochure: "브로셔",
    flip_interval: "자동넘김 간격",
    board_name: "게시판 이름",
    slide_name: "슬라이드 이름",
    menu_name: "메뉴 이름",
    survey_name: "설문조사 이름",
    video_name: "동영상 이름",
    group: "그룹 이름",
    default_block: "관리자 허가 후 보이기",
    show_owner: "게시자 익명으로 보이기",
    board_key: "게사판 검색용 키",
    current_mode: "현재 모드",
    org_code: "관리 코드",
    help: "도움말",
    active: "활성",
    type: "종류",
    blank: "없음",
    login_link: "로그인 링크",
    http_method: "http 메소드",
    id: "ID",
    account_name: "ID",
    account_type: "계정 종류",
    account_state: "계정 상태",
    password: "비밀번호",
    mobile_number: "휴대전화 번호",
    email: "E-mail",
    name: "이름",
    profile_name: "사용자 이름",
    attendee_name: "Full Name",
    attendee_list: "참가자 목록",
    organization_name: "조직 이름",
    organizer_name: "오거나이저 이름",
    search: "검색",
    code: "입장코드",
    answer: "Reply",
    top_desc: "상단 설명",
    bottom_desc: "하단 설명",
    event_name: "이벤트 이름",
    event_description: "이벤트 설명",
    event_page_slug: "이벤트 경로",
    event_domain: "이벤트 독립 도메인",
    quiz_ground_template: "퀴즈 문제와 답",
    winner_count: "최종 승자 수",
    countdown_time: "카운트다운 시간",
    contents: "내용",
    sender: "발신자",
    title: "제목",
    message_type: "메세지 종류",
    playcard_name: "플레이카드 이름",
    playcard_path: "플레이카드 경로",
    add_email_trigger: "등록시 추가할 주소록 트리거",
    email_trigger: "메일 전송 API 트리거",
    add_email_trigger_url: "등록시 추가할 주소록 주소",
    email_trigger_url: "메일 전송 API 주소",
    playcard_component: "플레이카드 컴포넌트",
    playcard_contents: "플레이카드 내용",
    playcard_flags: "플레이카드 설정",
    button_image: "버튼 이미지",
    show: "보이기",
    feature: "기능",
    feature_key: "기능 탐색 키",
    state: "상태",
    trigger: "트리거",
    trigger_order: "트리거 순서",
    trigger_type: "트리거 타입",
    webhook_url: "웹훅 url",
    actions: "기능",
    exclusive_access: "한 페이지만 열리도록 강제",
    anonymous_access: "익명 연결 가능",
    invitation_code: "초대 코드",
    invitation_group: "초대 코드 그룹",
    invitation_size: "초대 코드 생성 수",
    created_at: "생성 날짜",
    all: "전체",
    survey: "설문조사",
    parser: "설문조사 종류",
    is_multiple_response_allowed: "중복 응답 가능",
    is_register_survey: "register.congkong.net에 노출",
    survey_key: "register.congkong.net에 노출될 경로",
    survey_reaction: "설문 응답시 반응",
    link: "링크",
    create_barcode_on_register: "등록시 바코드 생성할지 여부",
    create_login_link_on_register: "등록시 로그인 링크 생성 여부",
    invitation_code_on_register: "등록시 초대 코드 생성 여부",
    default_exit_message_id: "기본 퇴장문자",
    default_attend_message_id: "기본 입장문자",
    registration_message_id: "등록 안내문자",
    width: "너비",
    height: "높이",
    vertical_items: "세로 갯수",
    horizontal_items: "가로 갯수",
    size: "크기",
    background_image: "배경 이미지",
    top_image: "상단 이미지",
    bottom_image: "하단 이미지",
    default_image: "기본 이미지",
    alter_image: "대체 이미지",
    image_tab: "이미지",
    info_tab: "기본 정보",
    preview_tab: "미리보기",
    path: "경로",
    author: "작성자",
    slide_group_id: "슬라이드 그룹 ID",
    event_id: "이벤트 ID",
    max_rating: "최고 별점",
    scheduled_by: "예약자",
    result: "결과",
    target_register_group: "등록그룹",
    access_path: "접근경로",
    feature_type: "기능종류",
    action: "체크인 내용",
    check_time: "체크시간",
    session_role: "세션 내 역할",
    to: "수신번호",
    from: "송신번호",
    message: "메세지",
    response_err_code: "에러코드",
    language: "언어",
  },
  errors: {
    "cookie_inactive-title": "쿠키가 비활성화 되어 있습니다",
    "cookie_inactive-message": "정상적인 사용을 위해서는 쿠키가 활성화 되어 있어야 합니다.",
    number_required: "갯수는 0개 이상이어야 합니다.",
    time_invalid: "시간 형식이 맞지 않습니다. 13:30 형식으로 입력해주세요.",
    date_invalid: "날짜 형식이 맞지 않습니다. 2020-01-21 형식으로 입력해주세요.",
    forgot_grants_email: "입력하신 이메엘로 로그인 정보가 전송됩니다",
    email_required: "이메일을 입력해 주세요",
    name_required: "이름을 입력해 주세요",
    organization_name_required: "조직 이름을 입력해 주세요",
    event_name_required: "이벤트 이름을 입력해 주세요",
    type_required: "타입을 지정해 주세요",
    valid_email_required: "이메일 형식을 맞춰서 입력해 주세요",
    forgot_grants_mobile: "입력하신 휴대전화번호로 로그인 정보가 전송됩니다",
    mobile_required: "휴대전화번호를 입력해 주세요",
    valid_mobile_required: "숫자만 입력해 주세요",
    account_name_required: "계정 ID를 입력해주세요",
    account_password_required: "계정 비밀번호를 입력해주세요",
    account_name_duplicated: "계정 ID가 중복되어 있습니다.",
    email_duplicated: "email이 중복되어 있습니다.",
    code_required: "Code required.",
    code_invalid: "The code you entered is incorrect. Please try again.",
    login_invalid: "로그인 정보가 맞지 않습니다.",
    not_found: "찾을 수 없습니다.",
    duplicate: "중복되었습니다.",
    bad_request: "잘못된 요청입니다.",
    "membership-code-required": "G-portal ID를 입력해 주세요",
  },
  menus: {
    EventSetting: "이벤트 설정",
    ScheduledTaskMain: "예약 전송 관리",
    WordcloudManagementMain: "워드클라우드 관리",
    WordcloudManagementOperation: "워드클라우드 오퍼레이션",
    WordcloudManagementPresentation: "워드클라우드 프리젠테이션",
    BoardManagementPresentation: "질문답변 프리젠테이션",
    BoardManagementOperation: "질문답변 오퍼레이션",
    CheckInPostManagementMain: "체크인 포스트 관리",
    CheckInLogManagementMain: "체크인 로그 보기",
    CheckInRecordManagementMain: "참가자 출결 기록 관리",
    MenuManagementMain: "메뉴 관리",
    AccessPathManagementMain: "연결 경로 관리",
    CheckInBarcodeScan: "체크인 바코드 스캔",
    NotificationMessageManagementMain: "안내문자 관리",
    EventManagementMain: "이벤트 관리",
    OrganizerManagementMain: "오거나이저 관리",
    OrganizationManagementMain: "조직 관리",
    AttendeeManagementMain: "참가자 관리",
    LoginSessionMonitor: "로그인 기록 보기",
    QuizGroundTemplateManagementMain: "퀴즈 그라운드 문제 관리",
    QuizGroundSessionManagementMain: "퀴즈 그라운드 세션 관리",
    PlaycardManagementMain: "플레이카드 관리",
    WebhookTriggerManagementMain: "웹훅 트리거 관리",
    AutoemailSendLogManagementMain: "자동 전송 메일 전송기록",
    InvitationManagementMain: "초대 코드 관리",
    SurveyManagementMain: "설문 관리",
    SurveyReactionManagementMain: "설문 응답 자동화 처리 관리",
    CheckInManagementMain: "체크인 관리",
    LiveMosaicManagementMain: "Live Mosaic 관리",
    LiveMosaicManagementOperation: "Live Mosaic 오퍼레이션",
    LiveMosaicManagementPresentation: "Live Mosaic 프리젠테이션 뷰",
    BoardManagementMain: "게시판 관리",
    WebinarManagementMain: "웨비나 관리",
    StreamVideoManagementMain: "비디오 관리",
    SponsorBoothManagementMain: "스폰서 부스 관리",
    RegHookManagementMain: "등록시 처리",
    AddEmailTriggerForm: "이메일 추가 트리거 수정",
    EmailTriggerForm: "이메일 전송 트리거 수정",
    BoardForm: "게시판 수정",
    SlideForm: "슬라이드 수정",
    MenuForm: "메뉴 수정",
    StreamVideoForm: "동영상 수정",
    SurveyForm: "설문조사 수정",
    PostForm: "체크인 포스트 수정",
    MenuManagementOperation: "메뉴 항목 수정",
    EventManagementNewForm: "새 이벤트",
    EventManagementUpdateForm: "이벤트 수정",
    AttendeeManagementNewForm: "새 참가자",
    AttendeeManagementUpdateForm: "참가자 수정",
    NotificationMessageManagementNewForm: "새 안내문자",
    NotificationMessageManagementUpdateForm: "안내문자 수정",
    PageBlockMain: "페이지 관리",
    PageBlockNewForm: "새 페이지",
    PageBlockUpdateForm: "페이지 수정",
    PlaycardContainerNewForm: "플레이카드 컨테이너 수정",
    PlaycardContainerUpdateForm: "플레이카드 컨테이너 수정",
    WebinarManagementNewForm: "새 웨비나",
    WebinarManagementUpdateForm: "웨비나 수정",
    PosterSlideMain: "슬라이드 관리",
    PosterSlideNewForm: "새 슬라이드",
    PosterSlideUpdateForm: "슬라이드 수정",
    QuestionBoardMain: "질문답변 게시판 관리",
    QuestionBoardNewForm: "새 질문답변 게시판",
    QuestionBoardUpdateForm: "질문답변 게시판 수정",
    BoardManagementNewForm: "새 게시판",
    BoardManagementUpdateForm: "게시판 수정",
    RatingBoardMainMain: "별점 게시판 관리",
    RatingBoardMainNewForm: "새 별점 게시판",
    RatingBoardMainUpdateForm: "별점 게시판 수정",
    InvitationManagementNewForm: "새 초대코드",
    InvitationManagementUpdateForm: "초대코드 수정",
    SurveyManagementNewForm: "새 설문",
    SurveyManagementUpdateForm: "설문 수정",
    RegHookManagementNewForm: "새 등록시 처리",
    RegHookManagementUpdateForm: "등록시 처리 수정",
    LiveMosaicManagementNewForm: "새 라이브 모자이크",
    LiveMosaicManagementUpdateForm: "라이브 모자이크 수정",
    StreamVideoManagementNewForm: "새 비디오",
    StreamVideoManagementUpdateForm: "비디오 수정",
    MenuManagementNewForm: "새 메뉴",
    MenuManagementUpdateForm: "메뉴 수정",
    AccessPathManagementNewForm: "새 연결경로",
    AccessPathManagementUpdateForm: "연결경로 수정",
    SponsorBoothManagementNewForm: "새 스폰서부스",
    SponsorBoothManagementUpdateForm: "스폰서부스 수정",
    CheckInPostManagementNewForm: "새 체크인 포스트",
    CheckInPostManagementUpdateForm: "체크인 포스트 수정",
    CheckInRecordManagementNewForm: "새 참가자 출결기록",
    CheckInRecordManagementUpdateForm: "참가자 출결기록 수정",
    StampTourNewForm: "새 스탬프 투어",
    StampTourUpdateForm: "스탬프 투어 수정",
    WordcloudManagementNewForm: "새 워드클라우드",
    WordcloudManagementUpdateForm: "워드클라우드 수정",
    EventSessionListNewForm: "새 이벤트 세션목록",
    EventSessionListUpdateForm: "이벤트 세션목록 수정",
    EventSessionListGroupNewForm: "새 프로그램",
    EventSessionListGroupUpdateForm: "프로그램 수정",
    AgreementNewForm: "새 개인정보 보호방침 동의기록",
    AgreementUpdateForm: "개인정보 보호방침 동의기록 수정",
    EventSessionSpeakerNewForm: "새 세션연자",
    EventSessionSpeakerUpdateForm: "세션연자 수정",
    SubscribeNewForm: "새 연락요청",
    SubscribeUpdateForm: "연락요청 수정",
    QuestionSetNewForm: "새 퀴즈질문",
    QuestionSetUpdateForm: "퀴즈질문 수정",
    QuizGroundNewForm: "새 퀴즈그라운드",
    QuizGroundUpdateForm: "퀴즈그라운드 수정",
    OrganizationManagementNewForm: "새 조직",
    OrganizationManagementUpdateForm: "조직 수정",
    OrganizerManagementNewForm: "새 오거나이저",
    OrganizerManagementUpdateForm: "오거나이저 수정",
    WebhookTriggerManagementNewForm: "새 웹훅 트리거",
    WebhookTriggerManagementUpdateForm: "웹훅 트리거 수정",
  },
  features: {
    live_mosaic: "Live Mosaic",
    webinar: "웨비나",
  },
  title: {
    login: "로그인",
    register: "회원가입",
    forgot_grants: "ID/비밀번호 찾기",
    accounts: {
      new: "새 계정 만들기",
      modify: "계정 수정",
      me: "내 계정 수정",
      list: "계정관리",
    },
    organizers: {
      new: "새 오거나이저 만들기",
      modify: "오거나이저 정보 수정",
      me: "내 오거나이저 정보 수정",
      list: "오거나이저 관리",
    },
    organizations: {
      new: "새 조직 만들기",
      modify: "조직 정보 수정",
      me: "내 조직 정보 수정",
    },
    events: {
      new: "이벤트 생성",
      modify: "이벤트 수정",
      list: "이벤트 관리",
      draft: "Create & Draft Events",
      live: "Live Events",
      past: "Past Events",
    },
    dashboard: "Dashboard",
    "session-monitor": "30 분 이내 로그인 인원",
    "session-monitor-1h": "한시간 이내 로그인 인원",
    "session-monitor-2h": "두시간 이내 로그인 인원",
    "session-monitor-total": "전체 로그인 인원",
  },
  "quiz-ground": {
    inactive: "열려 있는 퀴즈가 없습니다.",
    "wait-start": "잠시 후 시작합니다!",
    starting: "퀴즈 그라운드가 시작합니다.",
    "wait-question-result-0": "진행 대기 중입니다.",
    "wait-question-result-1": "잠시 기다려 주세요.",
    session: {
      Index: {
        operator: "오퍼레이터",
        presentation: "프리젠테이션",
        user: "사용자",
      },
    },
  },
  nav: {
    home: "홈",
    events: {
      main: "이벤트 관리",
      my_events: "나의 이벤트",
      new_event: "이벤트 생성",
      participants: "참가자 관리",
      checkin: "체크인(출결관리)",
      checkin_settings: "체크인 자료 등록",
      message: "메시지 전송/관리",
    },
    directory: {
      folders: "폴더 관리",
      playcards: "플레이카드 관리",
      playcard_demo: "플라이카드별 데모 보기",
    },
    organizations: "조직관리",
    organizers: "오거나이저 관리",
  },
  layout: {
    logout: "로그아웃",
  },
  "custom-page": {
    name: "커스텀 페이지",
  },
  "page-block": {
    submit: {
      "feature-new": "Create new {feature}",
      "feature-update": "Update {feature}",
    },
    name: "플레이카드(페이지) 관리",
  },
}

export default en
