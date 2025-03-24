# Git 브랜치 완벽 가이드

## 브랜치란?
브랜치(branch)는 독립적인 작업 공간을 제공하는 Git의 핵심 기능입니다. 브랜치를 사용하면 메인 코드베이스에 영향을 주지 않고 새로운 기능 개발, 버그 수정, 실험적 변경 등을 수행할 수 있습니다.

## 브랜치의 중요성
- **병렬 개발**: 여러 기능을 동시에 독립적으로 개발할 수 있습니다.
- **안전한 작업 환경**: 메인 코드에 영향을 주지 않고 실험적인 변경을 시도할 수 있습니다.
- **팀 협업**: 각 팀원이 독립적인 브랜치에서 작업하고 완료된 작업만 메인 코드로 병합할 수 있습니다.
- **릴리스 관리**: 안정된 버전을 유지하면서 새 기능을 개발할 수 있습니다.

## 기본 브랜치 명령어

### 브랜치 생성
```bash
git branch <branch-name>  # 새 브랜치 생성
git checkout -b <branch-name>  # 새 브랜치 생성 및 전환
```

### 브랜치 전환
```bash
git checkout <branch-name>  # 기존 브랜치로 전환
git switch <branch-name>  # Git 2.23 이상에서 사용 가능한 명령어
```

### 브랜치 목록 확인
```bash
git branch  # 로컬 브랜치 목록
git branch -r  # 원격 브랜치 목록
git branch -a  # 모든 브랜치 목록
```

### 브랜치 병합
```bash
git checkout main  # 병합 대상 브랜치로 전환
git merge <branch-name>  # 지정한 브랜치를 현재 브랜치로 병합
```

### 브랜치 삭제
```bash
git branch -d <branch-name>  # 병합이 완료된 브랜치 삭제
git branch -D <branch-name>  # 강제 삭제 (병합되지 않은 브랜치도 삭제)
```

## 효과적인 브랜치 전략

### Git Flow
Git Flow는 Vincent Driessen이 제안한 브랜치 전략으로, 다음과 같은 브랜치 구조를 갖습니다:

- **main/master**: 공식 릴리스 이력을 담는 브랜치
- **develop**: 개발 중인 코드의 통합 브랜치
- **feature/***: 새로운 기능 개발 브랜치
- **release/***: 릴리스 준비 브랜치
- **hotfix/***: 긴급 버그 수정 브랜치

### GitHub Flow
GitHub Flow는 더 단순한 브랜치 전략으로, 다음과 같이 작동합니다:

1. **main**: 항상 배포 가능한 상태 유지
2. 새 작업을 위한 브랜치 생성 및 작업
3. 풀 리퀘스트 생성
4. 코드 리뷰 및 논의
5. main에 병합 및 배포

## 실전 예시: 기능 개발 워크플로우

1. 이슈 생성 또는 확인
2. 기능 브랜치 생성
   ```bash
   git checkout -b feature/new-login-page
   ```
3. 코드 작성 및 커밋
   ```bash
   git add .
   git commit -m "Add new login form components"
   ```
4. 원격 저장소에 푸시
   ```bash
   git push -u origin feature/new-login-page
   ```
5. Pull Request 생성
6. 코드 리뷰 및 필요한 변경 수행
7. main 브랜치에 병합
8. 기능 브랜치 삭제
   ```bash
   git branch -d feature/new-login-page
   ```

## 주의사항 및 팁
- 브랜치 이름은 작업 내용을 명확히 나타내도록 지정하세요.
- 브랜치는 가능한 한 작고 집중된 변경사항만 포함하도록 유지하세요.
- 정기적으로 메인 브랜치의 변경사항을 기능 브랜치로 병합하여 충돌을 최소화하세요.
- 병합 전에 항상 코드 리뷰를 수행하세요.
- 완료된 브랜치는 정리하여 저장소를 깔끔하게 유지하세요.
