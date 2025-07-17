import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

/**
 * ErrorBoundary 컴포넌트의 Props 인터페이스
 */
interface Props {
  children: ReactNode // 자식 컴포넌트들
}

/**
 * ErrorBoundary 컴포넌트의 State 인터페이스
 */
interface State {
  hasError: boolean // 오류 발생 여부
  error?: Error // 발생한 오류 객체 (선택적)
}

/**
 * React 오류 경계 컴포넌트
 * 
 * 자식 컴포넌트에서 발생하는 JavaScript 오류를 포착하고,
 * 오류 UI를 표시하여 전체 앱이 중단되는 것을 방지합니다.
 * 
 * 사용법:
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<Props, State> {
  /**
   * 컴포넌트 생성자
   * 초기 상태를 hasError: false로 설정
   */
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  /**
   * 자식 컴포넌트에서 오류가 발생했을 때 호출되는 정적 메서드
   * 
   * @param error - 발생한 오류 객체
   * @returns 새로운 상태 객체
   */
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  /**
   * 오류 정보를 로깅하는 생명주기 메서드
   * 
   * @param error - 발생한 오류 객체
   * @param errorInfo - 오류 정보 (스택 트레이스 등)
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  /**
   * 컴포넌트 렌더링
   * 
   * 오류가 발생한 경우 오류 UI를 표시하고,
   * 정상적인 경우 자식 컴포넌트들을 렌더링합니다.
   */
  render() {
    // 오류가 발생한 경우 오류 UI 표시
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              오류가 발생했습니다
            </h2>
            <p className="text-muted-foreground mb-4">
              페이지를 새로고침하여 다시 시도해주세요.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              새로고침
            </button>
          </div>
        </div>
      )
    }

    // 정상적인 경우 자식 컴포넌트들 렌더링
    return this.props.children
  }
}

export default ErrorBoundary 