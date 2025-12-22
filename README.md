# 요구사항  

## 프로젝트 목표  

Chat GPT와 유사한 채팅 AI Application 구현하는 것입니다.  

## 사용하는 기술 스택  

- UI라이브러리  
  - TailwindCSS : https://tailwindcss.com/
  - shadcn/ui : https://ui.shadcn.com/
- AI SDK 
  - AI SDK : https://sdk.vercel.ai/docs/introduction

## 구현 단계  

1. **프로젝트 초기 설치 및 필요한 라이브러리 설정**  
   - **목표**: 프로젝트를 시작하기 위한 기본 환경을 설정합니다.  
   - **작업**: 
     - Node.js 및 npm이 설치되어 있는지 확인합니다.
     - 새로운 프로젝트 디렉토리를 생성하고 초기화합니다.
     - TailwindCSS와 shadcn/ui 라이브러리를 설치합니다.
     - AI SDK를 설치하여 AI 기능을 사용할 수 있도록 설정합니다.

2. **App Router의 API Router 핸들러 구현**
   - **목표**: 클라이언트 요청을 처리하고 AI와의 상호작용을 관리하는 백엔드 로직을 작성합니다.
   - **작업**: 
     - AI SDK를 사용하여 AI와의 통신을 위한 엔드포인트를 구현합니다.
     - 클라이언트로부터의 요청을 처리하고, AI의 응답을 클라이언트에 반환하는 로직을 작성합니다.

3. **프론트엔드와 API 연동**  
   - **목표**: 프론트엔드에서 백엔드 API를 호출하여 데이터를 주고받습니다.
   - **작업**: 
     - AI SDK 4버전 : https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot
     - Axios 또는 Fetch API를 사용하여 백엔드 API와 통신하는 함수를 작성합니다.
     - 사용자 입력을 받아 API에 요청을 보내고, AI의 응답을 화면에 표시하는 로직을 구현합니다.

4. **UI 컴포넌트 구현**  
   - **목표**: 사용자 인터페이스를 구성하는 다양한 컴포넌트를 구현합니다.
   - **작업**: 
     - TailwindCSS를 사용하여 스타일링된 UI 컴포넌트를 작성합니다.
     - shadcn/ui 라이브러리의 컴포넌트를 활용하여 일관된 디자인을 유지합니다.
     - 사용자 경험을 고려하여 인터랙티브한 요소를 추가합니다.
     - UI Reference : https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/bdc298cba567b32cd62f8f13378a4401d3ba50d7

5. **Vercel 배포**  
   - **목표**: 완성된 애플리케이션을 Vercel 플랫폼에 배포하여 사용자에게 제공할 수 있도록 합니다.
   - **작업**: 
     - Vercel 계정을 생성하고 프로젝트를 연결합니다.
     - 배포 설정을 구성하고, 필요한 환경 변수를 설정합니다.
     - 최종적으로 애플리케이션을 배포하고, 배포된 URL을 확인합니다.
