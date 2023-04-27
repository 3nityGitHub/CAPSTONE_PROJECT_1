// Hamburger menu for mobile
const hamburgerMenu = document.querySelector('.hamburger_menu');
const mobileNavLink = document.querySelector('.mobile_nav_link');
const navContainer = document.querySelector('.nav_bar_container');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  mobileNavLink.classList.toggle('active');
  navContainer.classList.toggle('active');
});

document.querySelectorAll('.mobile_link').forEach(() => navContainer.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  mobileNavLink.classList.remove('active');
  navContainer.classList.remove('active');
}));

// Guest speaker list

const guestSpeaker = [
  {
    id: '1',
    guestName: 'Chimamanda Ngozi Adichie',
    guestProfile: 'Africa Nobel laureate and writer',
    Description:
      'She is the author of the highly-praised Purple Hibiscus (2003) and half of a yellow sun (2006). Her success has been celebrated by the literary establishment and she has carcved a niche for herself in that area. She is the winner of Best of the Best Baileys prize award.',
    guestPortrait: './capstone-image/Chimamanda-Ngozi-Adichie.jpg',
    imageDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '2',
    guestName: 'Emmy Tandoh',
    guestProfile: 'Chief Digital Officer Decagon',
    Description:
      'Global technology leader Emmy Tandoh has made a broad impact in business transformation and on social issues during two decades of technology leadership for companies including GE, BP and Microsoft, as well as the UK Government.',
    guestPortrait: './capstone-image/Emma-Tandoh.JPEG',
    imageDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '3',
    guestName: 'Tony Elumelu',
    guestProfile: 'CEO UBA Group',
    Description:
      'Tony Elumelu has been fully immersed in the world of banking using high-level technology. With a background in cybersecurity and over 8 years of experience in the field, Tony has a deep understanding of the latest threats and trends in cybersecurity.',
    guestPortrait: './capstone-image/Tony-Elumelu.jpeg',
    imageDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '4',
    guestName: 'Ivan Hutuwatta',
    guestProfile: 'COO Green Africa',
    Description:
      'Arguably one of the most famous faces in the world of tech, he has held the position of Chief Operating Officer at Green Africa for the last 14 years, where he has helped to dramatically increase the Company’s revenue.',
    guestPortrait: './capstone-image/Ivan-Hutuwatta.jpg',
    imageDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '5',
    guestName: 'Mary Ville',
    guestProfile: 'EVP & CIO Salesforce',
    Description:
      'As EVP and chief information officer at Salesforce since 2018, Mary Ville leads the global IT function for Salesforce core, Mulesoft, Tableau and Slack, including technology strategy, architecture, applications, engineering, M&A systems integrations, data/analytics, network infrastructure',
    guestPortrait: './capstone-image/Mary-Ville.jpg',
    imageDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '6',
    guestName: 'Natto Mbeki',
    guestProfile: 'President and Founder AXA',
    Description:
      'As President and founder of AXA, Natto Mbeki is responsible for the day-to-day oversight operations of AXA company, as well as managing management and strategic relations to support company growth.',
    guestPortrait: './capstone-image/Natto-Mbeki.jpg',
    imageDesign: './images/backgroundpattern4.jpg',
  },

  {
    id: '7',
    guestName: 'Seoul Kim',
    guestProfile: 'CEO Mecsands Industries',
    Description:
      'As President Mecsands, Seoul is responsible for leading the company software development team and ensuring that the company products are of the highest quality. With over a decade of experience in software engineering, Seoul has a deep understanding of software architecture and development methodologies. She is committed to delivering innovative and reliable software solutions.',
    guestPortrait: './capstone-image/Seoul-Kim.jpg',
    imageDesign: './images/backgroundpattern4.jpg',
  },

  {
    id: '8',
    guestName: 'Tunji Andrews',
    guestProfile: 'President and Founder COPILOT',
    Description:
      'As President and founder of COPILOT, Tunji is responsible for the day-to-day operations of the space exploration company, as well as managing customer and strategic relations to support company growth.',
    guestPortrait: './capstone-image/Tunji-Andres.jpg',
    imageDesign: './images/backgroundpattern4.jpg',
  },
];

const speakerContainer = document.querySelector('.guest_speaker_card');

guestSpeaker.forEach((card) => {
  const speakerCard = `
    <div class="speakerId ${card.id}">
      <img src="${card.guestPortrait}" alt="" class="guest_image">
      <div class="guest_info_container">
          <h3 class="guest_name">${card.guestName}</h3>
          <p class="guest_profile">${card.guestProfile}</p>
          <hr></hr>
          <p class="guest_details">${card.Description}</p>
      </div>
    </div>`;
  speakerContainer.innerHTML += speakerCard;
});

const showMoreLess = document.getElementById('show_more_bttn');

showMoreLess.addEventListener('click', () => {
  speakerContainer.classList.toggle('show_more_bttn');
  if (showMoreLess.innerHTML === 'SHOW MORE') {
    showMoreLess.innerHTML = 'SHOW LESS';
  } else if (showMoreLess.innerHTML === 'SHOW LESS') {
    showMoreLess.innerHTML = 'SHOW MORE';
  }
});