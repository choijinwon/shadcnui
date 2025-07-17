# 할 일 관리 Todo App

모바일 반응형 할 일 관리 애플리케이션입니다. Vite, React, TypeScript, shadcn/ui, Zustand를 사용하여 구축되었습니다.

## 🚀 주요 기능

- ✅ 할 일 추가, 완료, 삭제
- 🔍 할 일 필터링 (전체, 완료, 미완료)
- 💾 로컬 스토리지에 자동 저장
- 📱 모바일 반응형 디자인
- ♿ 접근성 지원 (ARIA 라벨, 키보드 네비게이션)
- 🎨 shadcn/ui 컴포넌트 사용

## 🛠️ 기술 스택

- **프레임워크**: React 18 + TypeScript
- **빌드 도구**: Vite
- **스타일링**: Tailwind CSS + shadcn/ui
- **상태 관리**: Zustand
- **아이콘**: Lucide React

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 브라우저에서 확인
```
http://localhost:5173
```

## 🏗️ 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── TodoInput.tsx   # 할 일 입력 컴포넌트
│   ├── TodoList.tsx    # 할 일 목록 컴포넌트
│   ├── TodoItem.tsx    # 개별 할 일 아이템
│   ├── TodoFilters.tsx # 필터 컴포넌트
│   └── ErrorBoundary.tsx # 오류 경계
├── store/              # Zustand 스토어
│   └── todoStore.ts    # 할 일 상태 관리
├── lib/                # 유틸리티 함수
│   └── utils.ts        # 유틸리티 함수들
├── App.tsx             # 메인 앱 컴포넌트
└── main.tsx            # 앱 진입점
```

## 🎯 주요 컴포넌트

### TodoInput
- 새로운 할 일을 추가하는 입력 폼
- Enter 키로 할 일 추가
- 빈 입력 방지

### TodoList
- 할 일 목록을 표시
- 완료/미완료 상태 토글
- 할 일 삭제 기능

### TodoFilters
- 전체/완료/미완료 필터링
- 현재 필터 상태 표시

### TodoItem
- 개별 할 일 아이템
- 체크박스로 완료 상태 토글
- 삭제 버튼

## 🔧 상태 관리 (Zustand)

```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoStore {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: FilterType) => void;
}
```

## 🎨 UI/UX 특징

- **반응형 디자인**: 모바일부터 데스크톱까지 최적화
- **접근성**: ARIA 라벨, 키보드 네비게이션 지원
- **모던 UI**: shadcn/ui 컴포넌트 사용
- **부드러운 애니메이션**: Tailwind CSS 트랜지션

## 📱 모바일 최적화

- 터치 친화적인 버튼 크기
- 적절한 간격과 패딩
- 모바일에서 편리한 입력 폼

## 🔒 브라우저 확장 프로그램 오류 해결

브라우저 확장 프로그램으로 인한 콘솔 오류를 방지하기 위한 보안 스크립트가 포함되어 있습니다:

- `browser.i18n` 오류 차단
- `chrome.runtime.lastError` 오류 차단
- 확장 프로그램 관련 콘솔 오류 필터링

## 🚀 빌드

### 프로덕션 빌드
```bash
npm run build
```

### 빌드 결과 미리보기
```bash
npm run preview
```

## 📝 라이선스

MIT License

## 🤝 기여

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 생성해 주세요.
# shadcnui
