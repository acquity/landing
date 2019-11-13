import AuthorOne from '~/assets/image/crypto/author1.png';
import AuthorTwo from '~/assets/image/crypto/author2.png';
import AuthorThree from '~/assets/image/crypto/author3.png';
import FEATURE1 from '~/assets/image/crypto/tf1.svg';
import FEATURE2 from '~/assets/image/crypto/tf2.svg';
import FEATURE3 from '~/assets/image/crypto/tf3.svg';
import FEATURE4 from '~/assets/image/crypto/tf4.svg';
import PROOF1 from '~/assets/image/crypto/proof1.svg';
import PROOF2 from '~/assets/image/crypto/proof2.svg';
import PROOF3 from '~/assets/image/crypto/proof3.svg';
import PROOF4 from '~/assets/image/crypto/proof4.svg';
import PROOF5 from '~/assets/image/crypto/proof5.svg';
import PROOF6 from '~/assets/image/crypto/proof6.svg';
import TEAM1 from '~/assets/image/crypto/testi1.png';
import TEAM2 from '~/assets/image/crypto/testi2.png';
import TEAM3 from '~/assets/image/crypto/testi3.png';
import BETA1 from '~/assets/image/crypto/beta-1.svg';
import BETA2 from '~/assets/image/crypto/beta-2.svg';
import BETA3 from '~/assets/image/crypto/beta-3.svg';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'How It Works',
    path: '#about',
    offset: '-40',
  },
  {
    label: 'Our Team',
    path: '#team',
    offset: '40',
  },

  {
    label: 'Product',
    path: '#product',
    offset: '0',
  },
];

export const TESTIMONIALS = [
  {
    review:
      'Endorsed by',
    name: 'Wei Zhu',
    designation: 'Former CTO at Grab',
    avatar: `${AuthorOne}`,
  },
  // {
  //   review:
  //     'Endorsed by',
  //   name: 'Ben Leong',
  //   designation: 'Professor at National University of Singapore',
  //   avatar: `${AuthorTwo}`,
  // },
  {
    review:
      'Endorsed by',
    name: 'Arul Kumaravel',
    designation: 'Former VP of Engineering at Grab',
    avatar: `${AuthorThree}`,
  },
  {
    review:
      'Endorsed by',
    name: 'Ke Liang',
    designation: 'Former Head of Engineering at Grab',
    avatar: `${TEAM3}`,
  },
  // {
  //   review:
  //     'Impressed with master class support of the team and really look forward for the future.',
  //   name: 'Milly Cristiana',
  //   designation: 'Manager of Hp co.',
  //   avatar: `${AuthorFour}`,
  // },
];
export const ABOUT_FEATURES = [
  {
    image: FEATURE1,
    title: 'Create Account.',
    des: 'Get started on your journey with Acquity in one click using LinkedIn login.',
  },
  {
    image: FEATURE2,
    title: 'Submit Bid or Ask.',
    des: "Indicate your interest to buy or sell in Acquity's weekly rounds.",
  },
  {
    image: FEATURE3,
    title: 'Get Chatting.',
    des: 'Get matched with an interested trader and discuss prices via our chat system.',
  },
  {
    image: FEATURE4,
    title: 'Trade Successfully.',
    des:
      'Take the exchange offline and submit your transaction request to the company for approval.',
  },
];
export const PRINCIPLES = [
  {
    image: PROOF1,
    title: 'Round-based',
    des: 'More time is allowed to ensure volume and success of matches.',
  },
  {
    image: PROOF2,
    title: 'Non-profit',
    des: 'Our open-source service aims to enhance your trading, free of charge.',
  },
  {
    image: PROOF3,
    title: 'At least one buyer',
    des: 'Our system does our best to match every seller with at least one buyer.',
  },
  {
    image: PROOF4,
    title: 'Price matters',
    des: 'The better your price, the better you will fare with our algorithm.',
  },
  {
    image: PROOF5,
    title: 'Privacy',
    des: 'Your identity is protected until the transaction details are confirmed.',
  },
  {
    image: PROOF6,
    title: 'Up-to-date',
    des: 'We keep users informed of any changes in the market or to their matches.',
  },
];
export const TEAM_MEMBERS = [
  {
    image: TEAM1,
    title: 'Wei Zhu',
    des: 'Former CTO at Grab',
    company: 'grab',
    linkedin: "https://www.linkedin.com/in/wei-zhu/",
  },
  {
    image: TEAM2,
    title: 'Arul Kumaravel',
    des: 'Former VP of Engineering at Grab',
    company: 'grab',
    linkedin: "https://www.linkedin.com/in/arulk/",
  },
  {
    image: TEAM3,
    title: 'Ke Liang',
    des: 'Former Head of Engineering at Grab',
    company: 'grab',
    linkedin: "https://www.linkedin.com/in/ke-liang-93952812/",
  },
];

export const BETA_FEATURE = [
  {
    image: BETA1,
    title: 'Effortless',
    des: 'Get started in less than 5 clicks.',
  },
  {
    image: BETA2,
    title: 'Fast',
    des: 'Get matched within the week.',
  },
  {
    image: BETA3,
    title: 'Secure',
    des: 'Your information is in safe hands.',
  },
];

export const menuWidget = [
  {
    id: 1,
    title: 'About Us',
    menuItems: [
      {
        id: 1,
        url: '#about',
        text: 'How It Works',
      },
      {
        id: 2,
        url: '#team',
        text: 'Our Team',
      },
      {
        id: 3,
        url: '#product',
        text: 'Product',
      },
    ],
  },
  {
    id: 2,
    title: 'Our Information',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Privacy Policy',
      },
      {
        id: 2,
        url: '#',
        text: 'Terms & Conditions',
      },
    ],
  },
  {
    id: 3,
    title: 'Get Started',
    menuItems: [
      {
        id: 1,
        url: 'https://staging.app.acquity.io',
        text: 'Login Now',
      },
    ],
  },
];
export const Language_NAMES = [
  {
    label: 'English',
    value: 'eng',
  },
  {
    label: 'Chinese',
    value: 'chinese',
  },
  {
    label: 'Indian',
    value: 'indian',
  },
];
