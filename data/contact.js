import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faStackOverflow from '@fortawesome/fontawesome-free-brands/faStackOverflow';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const socialIcons = [
  {
    link: 'https://github.com/shmulvad',
    label: 'GitHub',
    icon: faGithub
  },
  {
    link: 'https://stackoverflow.com/users/9248793/shmulvad',
    label: 'StackOverflow',
    icon: faStackOverflow
  },
  {
    link: 'https://www.linkedin.com/in/shmulvad/',
    label: 'LinkedIn',
    icon: faLinkedinIn
  },
  {
    link: 'https://facebook.com/shmulvad',
    label: 'Facebook',
    icon: faFacebook
  },
  {
    link: 'https://www.instagram.com/shmulvad/',
    label: 'Instagram',
    icon: faInstagram
  },
  {
    link: 'mailto:shmulvad@gmail.com',
    label: 'Email',
    icon: faEnvelope
  }
];

const githubUsername = 'shmulvad';
const email = 'shmulvad@gmail.com';
const countryCode = '+65';
const phone = '83410245';
const fullName = 'Søren Mulvad';
const firstName = fullName.split(" ")[0];
const websiteShort = "shmulvad.com"
const websiteLong = `https://${websiteShort}`;

export {
  socialIcons,
  email,
  countryCode,
  phone,
  fullName,
  firstName,
  githubUsername,
  websiteShort,
  websiteLong
};
