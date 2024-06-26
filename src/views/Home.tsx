import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import IconArrowRight from '~icons/ri/arrow-right-line';

import ShapeEffect from '../components/ShapeEffect/ShapeEffect';
import ErickImage from '../Photo_Erick.png';
import raImage1 from '../Photo_duan.png';
import raImage2 from '../Photo_mingyuan.png';
import backgroundImage from '../background.jpg';

const Background = tw.div`absolute [z-index:0] top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-50 blur-sm`;

const Foreground = tw.div`absolute [z-index:2] top-0 left-0 w-full h-full [user-select:none] pointer-events-none`;

const Wrapper = tw.main`px-8 py-20 w-full flex-1 flex flex-col justify-center`;

const Center = tw.div`relative [z-index:1] mx-auto max-w-screen-lg text-center`;

// const Title = tw.h2`text-5xl text-white-600 font-bold leading-10`;
const Title = tw.h2`text-5xl text-white font-bold leading-10`;

const Description = tw.p`mt-6 text-3xl text-white`;

const LinkButton = tw.button`
  mt-12 py-3 px-6 inline-flex items-center
  bg-blue-500 active:bg-blue-600 text-blue-50 text-center
  gap-4 hover:gap-8
  rounded-full outline-none transition-all
`;

const avatarContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '16px', // 可以根据需要调整间距
};
const avatarImageStyle = {
  width: '50px', // 头像的宽度
  height: '50px', // 头像的高度
  borderRadius: '50%', // 使图片变成圆形
  marginRight: '8px', // 头像和名字之间的间距
};
const avatarNameStyle = {
  fontSize: '16px', // 名字的字体大小
  fontWeight: 'bold', // 名字的字体粗细
  color: 'white',
};
const avatarDescriptionStyle = {
  fontSize: '12px', // 描述的字体大小
  color: 'white', // 描述的字体颜色
  textIndent: '10px',
};
const pageBackgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover', // 让图片覆盖整个背景
  backgroundPosition: 'center', // 居中背景图片
  backgroundRepeat: 'no-repeat', // 防止背景图片重复
  height: '100vh', // 让背景覆盖整个视口高度
  width: '100%', // 让背景覆盖整个视口宽度
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};


export default function Home() {
  const { t } = useTranslation();

  return (

    <div style={pageBackgroundStyle}>
    <Wrapper>

      {/* 首页动画
      <Background>
        <ShapeEffect count={12} sizes={[30, 60]} />
      </Background>

      首页动画
      <Foreground>
        <ShapeEffect count={12} sizes={[40, 80]} />
      </Foreground> */}
      <Center>
        <Title>{t('intro.title')}</Title>
        <Description>{t('intro.description')}</Description>
        {/* <Link to="/posts">
          <LinkButton>
            <span>{t('intro.link')}</span>
            <IconArrowRight />
          </LinkButton>
        </Link> */}

        <br/>
{/* 加一个按钮，链接到教学大纲 */}
        <Link to="/syllabus">    
          <LinkButton>
            <span>{t('课程大纲')}</span>
            <IconArrowRight />
          </LinkButton>
        </Link>


        <div style={avatarContainerStyle}>
          <img src={ErickImage} alt="Avatar" style={avatarImageStyle} />
          <span style={avatarNameStyle}>{t('陈立科')}</span>
          <span style={avatarDescriptionStyle}>{t('西交利物浦大学智能工程学院讲师')}</span>
        </div>

        <div style={avatarContainerStyle}>
          <img src={raImage1} alt="Avatar" style={avatarImageStyle} />
          <p style={avatarNameStyle}>{t('王端')}</p>
          <p style={avatarDescriptionStyle}>{t('助教')}</p>
        </div>

        <div style={avatarContainerStyle}>
          <img src={raImage2} alt="Avatar" style={avatarImageStyle} />
          <span style={avatarNameStyle}>{t('李明远')}</span>
          <span style={avatarDescriptionStyle}>{t('助教')}</span>
        </div>


      </Center>
    </Wrapper>
    </div>
  );
}
