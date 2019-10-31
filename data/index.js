import AuthorOne from '~/assets/image/crypto/author-4.jpg';
import AuthorTwo from '~/assets/image/crypto/author-2.jpg';
import AuthorThree from '~/assets/image/crypto/author-3.jpg';
import AuthorFour from '~/assets/image/crypto/author-1.jpg';
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
import JACKPOTIMG from '~/assets/image/crypto/jackpot.svg';
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
    label: 'Contact Us',
    path: '#contact',
    offset: '0',
  },
];

export const TESTIMONIALS = [
  {
    review:
      'Acquity provides a seamless trading experience. I have stopped worrying about finding suitable traders.',
    name: 'Wei Zhu',
    designation: 'Former CTO at Grab',
    avatar: `${AuthorOne}`,
  },
  {
    review:
      'I enjoyed using this system and managed to acquire a few shares myself effortlessly.',
    name: 'Ben Leong',
    designation: 'Professor at National University of Singapore',
    avatar: `${AuthorTwo}`,
  },
  {
    review:
      'Acquity gives me everything I want - a way to find buyers without any worries.',
    name: 'Arul Kumaravel',
    designation: 'Former Head of Engineering at Grab',
    avatar: `${AuthorThree}`,
  },
  // {
  //   review:
  //     'Impressed with master class support of the team and really look forward for the future.',
  //   name: 'Milly Cristiana',
  //   designation: 'Manager of Hp co.',
  //   avatar: `${AuthorFour}`,
  // },
];
export const TRANSACTIONS_FEATURE = [
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
export const PROOFS_FEATURE = [
  {
    image: PROOF1,
    title: 'Round-based',
    des: 'More time is allowed to ensure volume and successful matches.',
  },
  {
    image: PROOF2,
    title: 'Non-profit',
    des: 'We aim to enhance your trading experience. Our service is absolutely free.',
  },
  {
    image: PROOF3,
    title: 'At least one buyer',
    des: 'Our system ensures that every seller matches with at least one buyer.',
  },
  {
    image: PROOF4,
    title: 'Price matters',
    des: 'The better your price, the better you will fare with our algorithm.',
  },
  {
    image: PROOF5,
    title: 'Transparency',
    des: 'Our system provides users with data to make informed decisions.',
  },
  {
    image: PROOF6,
    title: 'Up-to-date',
    des: 'We keep users informed of any changes in the market or to their matches.',
  },
];
export const SCALABLE_FEATURE = [
  {
    image: JACKPOTIMG,
    title: 'Name 1',
    des: 'Description 1 + LinkedIn Link 1',
  },
  {
    image: JACKPOTIMG,
    title: 'Name 2',
    des: 'Description 2 + LinkedIn Link 2',
  },
  {
    image: JACKPOTIMG,
    title: 'Name 3',
    des: 'Description 3 + LinkedIn Link 3',
  },
  {
    image: JACKPOTIMG,
    title: 'Name 4',
    des: 'Description 4 + LinkedIn Link 4',
  },
];

export const BETA_FEATURE = [
  {
    image: BETA1,
    title: 'SEPA Transfers',
    des: 'Deposit & Withdraw money.',
  },
  {
    image: BETA2,
    title: '24/7 Support',
    des: 'Always here for you.',
  },
  {
    image: BETA3,
    title: 'Secure',
    des: 'Your money is safe.',
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
        url: '#contact',
        text: 'Contact Us',
      },
      {
        id: 4,
        url: '#',
        text: 'Copyright',
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
      {
        id: 3,
        url: '#',
        text: 'Copyright',
      },
    ],
  },
  {
    id: 3,
    title: 'Get Started',
    menuItems: [
      {
        id: 1,
        url: 'https://app.acquity.io',
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
