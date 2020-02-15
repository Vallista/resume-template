export const Tech = {
  title: '기술',
  contents: [
    {
      title: '타이틀 1',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1' ]
        },
        {
          subTitle: '서브 타이틀 2',
          subContents: [ '서브 컨텐츠 2' ]
        }
      ]
    },
    {
      title: '타이틀 2',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1', '서브 컨텐츠 2' ]
        }
      ]
    }
  ]
}

export const Career = {
  title: '경력',
  contents: [
    {
      title: '회사 1',
      contents: [
        {
          subTitle: '프로젝트 1',
          subContents: [ '뭘 만듬1', '뭘 만듬2' ]
        }
      ]
    }
  ]
}

export const Interest = {
  title: '관심사',
  contents: [
    {
      title: 'React',
      contents: [
        {
          subTitle: '리액트로 만듬 1',
          subContents: [ '뭘 만듬1', '뭘 만듬1' ]
        }
      ]
    }
  ]
}

export const Sidebar = {
  profile:
    'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-1/p160x160/75534734_2415865711859256_6241102769789337600_n.jpg?_nc_cat=110&_nc_ohc=aXuKJkTMDwQAX_eUGyx&_nc_ht=scontent-ssn1-1.xx&_nc_tp=6&oh=8eb4ab4118dd8b3fd0d4106bfdbe8564&oe=5EFCAC2A',
  name: '마광휘',
  description: '웹 프론트엔드 프로그래머',
  contents: [
    {
      title: '소개',
      path: '/'
    },
    {
      title: '경력',
      path: '/career'
    },
    {
      title: '기술',
      path: '/tech'
    }
  ]
}
