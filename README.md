# 🏖 포트폴리오 사이트 프로젝트
![포트폴리오메인](https://firebasestorage.googleapis.com/v0/b/portfolio-49c62.appspot.com/o/May-28-2023%2000-26-51.gif?alt=media&token=884c11e3-969a-40f6-92fc-c18e5ed04c2c)

![피그마시안](https://cdn.discordapp.com/attachments/619875492820025356/1122880073037516880/image.png)

개인 포트폴리오 웹 구현 프로젝트입니다.

<br/>

## 🪧 목차
- [📝 프로젝트 정보](#-프로젝트-정보)
  - [프로젝트 기간](#프로젝트-기간)
  - [주요 기능](#주요-기능)
- [🚀 배포 링크](#-배포-링크)
- [🛠 사용 기술 및 도구](#-사용-기술-및-도구)
- [🔨 업데이트](#-업데이트)
- [🎨 기능 구현](#-기능-구현)
- [🩹 트러블슈팅](#-트러블슈팅)
- [🎨 성능 개선 작업](#-성능-개선-작업)
- [💡 추후 업데이트 할(원하는) 기능](#-추후-업데이트-할원하는-기능)

<br/>

## 📝 프로젝트 정보
> <br/>
>
> **프로젝트:** 개인 포트폴리오 웹사이트
>
> **기획, 디자인, 제작:** 채하은
>
> **분류:** 개인 프로젝트
>
> **제작 기간:** ![project_start](https://img.shields.io/badge/Project%20start-2023--05--23-green) ![project_end](https://img.shields.io/badge/Project%20end-2023--05--28-orange)
>
> **배포일:** 2023.06.01
>
> **주요 기능:** 
> - 다크모드
> - 반응형 웹
> - About / Project 데이터 동적 생성
> <br/>
>

<br/>

## 🚀 배포 링크
https://portfolio-49c62.web.app/

## 🛠 사용 기술 및 도구

<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"/> <img src="https://img.shields.io/badge/StoryBook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/> <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"/>

<br/>

## 🔨 업데이트
[2023.06.01] 사이트 배포
[2023.08.23] 사이트 성능 개선

<br/>

## 🎨 기능 구현
### 1. 다크 모드
![다크모드](https://firebasestorage.googleapis.com/v0/b/portfolio-49c62.appspot.com/o/May-28-2023%2022-48-27.gif?alt=media&token=427d2e6c-8eeb-4eb0-ba51-ea8c2cc753c2)
```tsx
const [toggle, setToggle] = useState('Dark')

  const toggleDarkMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
      setToggle('Light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setToggle('Dark')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      setToggle('Dark')
    } else {
      setToggle('Light')
    }
  }, [])
```

### 2. 반응형 웹
![반응형 웹](https://firebasestorage.googleapis.com/v0/b/portfolio-49c62.appspot.com/o/May-28-2023%2022-50-18.gif?alt=media&token=a8605fd3-68da-4786-8a44-a924bb7463eb)

tailwind css 기능을 사용해 `sm(640px)` `md(768px)` `lg(1024px)` `xl(1280px)` 을 기준으로 브레이크포인트를 잡았다.

### 3. About / Project 데이터 동적 생성
![파이어스토어](https://firebasestorage.googleapis.com/v0/b/portfolio-49c62.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-05-28%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.54.40.png?alt=media&token=7c97ebb9-571c-4cbb-833b-05364f91c0d8)

[List.tsx 컴포넌트](https://github.com/chaehaeun/my-portfolio/blob/main/src/components/UI/List/List.tsx) 👉

[projects.tsx 컴포넌트](https://github.com/chaehaeun/my-portfolio/blob/main/src/components/UI/Project/Project.tsx)👉

컴포넌트 재사용이라는 리액트의 특징을 살리기 위해 firestore에 데이터를 저장한 뒤 동적으로 컴포넌트를 생성. firestore에 데이터 값을 입력해 넣으면 동적으로 데이터가 뿌려지게 된다.

같은 컴포넌트를 사용하면서도 데이터들의 타입에 따라 li 스타일에 차이를 둘 수 있도록 코드를 작성했다.

<br/>

## 🩹 트러블슈팅
<details>
<summary> 1. 타입에러 </summary>
- 임시로 지정해놓은 데이터 타입 any를 수정하는 과정에서 무한 타입에러와 마주함.

```tsx
const [aboutData, setAboutData] = useState<any>([])
```
를
```tsx
const [projectData, setProjectData] = useState<DocumentData[]>([]); // DocumentData[]는 firestore 자체에서 지원하는 타입
```
로 수정했으나, 

> '(data: DataType, index: number) => JSX.Element' 형식의 인수는 '(value: DocumentData, index: number, array: DocumentData[]) => Element' 형식의 매개 변수에 할당될 수 없습니다.
  'data' 및 'value' 매개 변수의 형식이 호환되지 않습니다.
    'DocumentData' 형식에 'DataType' 형식의 projects, date, description, techStack 외 2개 속성이 없습니다.ts(2345)
(parameter) data: DataType

라는 에러와 함께 여전히 문제가 해결되지 않았다.

원인을 찾아본 결과 DocumentData 형식은 DataType의 필수 속성인 projects, date, description, techStack 외에 다른 속성을 갖지 않기 때문이었다.

```tsx
interface DataType extends DocumentData {
  projects: string
  date: string
  description: string
  techStack: string[]
  tag: string[]
  github?: string
  notion?: string
  imgURL: string
  deploy?: string
} // 
```
DataType를 DocumentData를 상속하도록 확장하여 DataType이 DocumentData의 모든 속성을 포함하면서 추가적인 속성을 정의할 수 있게 변경했다.

```tsx
const querySnapshot = await getDocs(projectQuery)
const dataQuery = querySnapshot.docs.map(doc => doc.data() as DataType)
```

또, dataQuery에서 doc.data()를 as DataType로 형변환하여 타입을 맞추어 data prop으로 사용되는 데이터의 타입을 DataType로 일치시켰다.

</details>

<br/>

## ⚡️ 성능 개선 작업
![개선 전](https://cdn.discordapp.com/attachments/619875492820025356/1143738820387405884/image.png)

성능 개선 전

![개선 후](https://cdn.discordapp.com/attachments/619875492820025356/1143749728241188894/image.png)

Vite는 프로덕션 빌드를 위해 기본적으로 특정 형태의 번들링을 하지 않기 때문에 별도로 이미지 최적화와 텍스트 압축을 통해 성능 개선 작업이 필요함을 깨달았다.

### 텍스트 압축 / 이미지 최적화

```ts
  plugins: [
    //...
    compression(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngQuant(),
        gif: imageminGifSicle(),
        svg: imageminSvgo(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
  ],
```
- `vite-plugin-compression2` : Gzip 및 Brotli 압축 알고리즘을 지원하는 Vite 플러그인
- `viteImagemin` : 이미지 최적화 플러그인

이 두 플러그인을 사용해 텍스트 압축과 이미지 최적화를 진행했다.


<br/>

## 💡 추후 업데이트 할(원하는) 기능
- 로딩스피너(스켈레톤)
- 프로젝트 sort 기능 (팀 프로젝트 / 개인 프로젝트 / 클론)
- 프로젝트 더보기 기능
- 이력서 / 프로젝트 상세페이지 동적 라우팅
- seo 최적화
- 에러 메세지 출력 스타일링