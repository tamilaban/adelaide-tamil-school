/*
 * Single source of truth for all Adelaide Tamil School content.
 *
 * Structure mirrors brisbanetamilschool.org (Home / Resources / News /
 * Lesson Plan / Assessment / Achievements / About) but every detail is
 * Adelaide's: Paradise campus, South Australian curriculum links, 1988 founding.
 */

import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.png';
import aboutImg from '../assets/about.png';
import poster from '../assets/poster.png';
import magazine39 from '../assets/magazine-39.png';
import magazine38 from '../assets/magazine-38.png';
import magazine37 from '../assets/magazine-37.png';
import gallery1 from '../assets/gallery-1.png';
import gallery2 from '../assets/gallery-2.png';
import gallery3 from '../assets/gallery-3.png';
import gallery4 from '../assets/gallery-4.png';
import gallery5 from '../assets/gallery-5.png';
import gallery6 from '../assets/gallery-6.png';

export const school = {
  name: 'Adelaide Tamil School',
  nameTa: 'அடிலெயிட் தமிழ்ப் பள்ளி',
  legalName: 'Adelaide Tamil Language School Inc.',
  founded: 1988,
  tagline: 'Learn Tamil Language & Culture',
  taglineTa: 'தமிழ் மொழியையும் பண்பாட்டையும் கற்போம்',
  enrolUrl: 'https://enrolments.clssa.sa.edu.au/?schoolid=e12',
  address: {
    line1: '3 Campbell Rd',
    suburb: 'Paradise',
    state: 'South Australia',
    postcode: '5075',
    country: 'Australia',
  },
  phone: '0432 973 791',
  phoneIntl: '+61432973791',
  email: 'info@adelaidetamilschool.org',
  adminEmail: 'admin@adelaidetamilschool.org',
  classTime: 'Saturdays 2:00 – 5:00 pm',
  classTimeTa: 'சனிக்கிழமைகள் மாலை 2:00 – 5:00',
  social: {
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
    instagram: 'https://www.instagram.com/',
  },
};

export const nav = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      { name: 'About Us', href: '/about#about-us' },
      { name: 'Our Teachers', href: '/about#teachers' },
      { name: 'Current Committee', href: '/about#committee' },
      { name: 'FAQ', href: '/about#faq' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    name: 'Lesson Plan',
    href: '/programs',
    dropdown: [
      { name: 'Levels & Curriculum', href: '/programs#levels' },
      { name: 'Learning Approach', href: '/programs#approach' },
      { name: 'Assessment & Rules', href: '/programs#assessment' },
    ],
  },
  {
    name: 'News',
    href: '/news',
    dropdown: [
      { name: 'Events', href: '/news#events' },
      { name: 'Announcements', href: '/news#announcements' },
      { name: 'Calendar', href: '/news#calendar' },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    dropdown: [
      { name: 'Cultural Event Magazine', href: '/resources#magazines' },
      { name: 'Anthem & Song', href: '/resources#anthem' },
      { name: 'Downloads', href: '/resources#downloads' },
    ],
  },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
];

export const heroSlides = [
  {
    id: 1,
    eyebrow: 'Community · Language · Culture',
    eyebrowTa: 'சமூகம் | மொழி | பண்பாடு',
    title: 'Learn Tamil Language & Culture',
    titleTa: 'தமிழ் மொழி மற்றும் பண்பாட்டை கற்போம்',
    body: 'Building confident bilingual learners through a complete Tamil language program and rich cultural experiences, right here in Adelaide.',
    ctaText: 'Enrol Now',
    ctaHref: school.enrolUrl,
    image: hero1,
  },
  {
    id: 2,
    eyebrow: 'South Australia',
    eyebrowTa: 'தெற்கு ஆஸ்திரேலியா',
    title: 'Saturday Tamil Classes for Every Age',
    titleTa: 'சனிக்கிழமை தமிழ் வகுப்புகள்',
    body: 'Weekly classes for children, teenagers and adults, guided by trained teachers following a graded Tamil curriculum aligned with South Australian community languages guidelines.',
    ctaText: 'Explore the Program',
    ctaHref: '/programs',
    image: hero2,
  },
  {
    id: 3,
    eyebrow: 'Events · Stage · Competitions',
    eyebrowTa: 'நிகழ்வுகள் • மேடை நிகழ்ச்சிகள் • போட்டிகள்',
    title: 'Celebrating Tamil Heritage Together',
    titleTa: 'தமிழ் பாரம்பரியத்தை கொண்டாடல்',
    body: 'From cultural concerts to academic competitions, every year our school community showcases its talent and pride.',
    ctaText: 'See Our Events',
    ctaHref: '/news#events',
    image: hero3,
  },
];

export const stats = [
  { id: 1, value: 35, suffix: '+', label: 'Years', labelTa: 'ஆண்டுகள்', description: 'Serving the Tamil community since 1988' },
  { id: 2, value: 10, suffix: '+', label: 'Teachers', labelTa: 'ஆசிரியர்கள்', description: 'Trained in the graded Tamil curriculum' },
  { id: 3, value: 70, suffix: '+', label: 'Students', labelTa: 'மாணவர்கள்', description: 'Learning actively across all levels' },
  { id: 4, value: 6, suffix: '', label: 'Levels', labelTa: 'நிலைகள்', description: 'Structured pathway from beginner to senior' },
];

export const aboutIntro = {
  eyebrow: 'About Us',
  eyebrowTa: 'எங்களை பற்றி',
  heading: 'Committed to the highest standard of Tamil education',
  headingTa: 'உயர்ந்த தரத்திலான தமிழ் கல்வியை வழங்க உறுதிபூண்டு செயல்படுகிறோம்',
  image: aboutImg,
  paragraphs: [
    'Established in 1988, Adelaide Tamil School has grown into a vibrant community school dedicated to preserving Tamil language, arts and cultural values for families across South Australia.',
    'Our curriculum is aligned with South Australian community languages guidelines and delivered by trained teachers. Classes welcome students of Indian, Sri Lankan, Malaysian and Singaporean Tamil heritage, and anyone keen to learn the language.',
  ],
  paragraphsTa: [
    '1988 ஆம் ஆண்டில் தொடங்கப்பட்ட அடிலெயிட் தமிழ்ப் பள்ளி, தெற்கு ஆஸ்திரேலியா முழுவதும் வாழும் குடும்பங்களுக்கு தமிழ் மொழி, கலை மற்றும் பண்பாட்டு மதிப்புகளைப் பேணுவதற்கு அர்ப்பணிக்கப்பட்ட, உயிர்த்துடிப்பு மிகுந்த சமூகப் பள்ளியாக வளர்ந்துள்ளது.',
  ],
  points: [
    { en: 'Separate levels for children, teenagers and adults', ta: 'குழந்தைகள், இளைஞர்கள், பெரியவர்களுக்கான தனித்த நிலைகள்' },
    { en: 'Weekly Saturday classes (2:00 – 5:00 pm) with blended learning support', ta: 'வாராந்திர சனிக்கிழமை வகுப்புகள் (2:00 – 5:00 மாலை)' },
    { en: 'Annual events celebrating language skill and cultural heritage', ta: 'மொழித் திறனையும் பண்பாட்டையும் கொண்டாடும் ஆண்டு நிகழ்வுகள்' },
  ],
};

export const levels = [
  { code: '02', name: 'Level 2 · Foundation', focus: 'Tamil alphabet (uyir & mei), sounds, tracing, first words and greetings.' },
  { code: '03', name: 'Level 3 · Early Reading', focus: 'Uyirmei letters, simple two- and three-letter words, guided reading aloud.' },
  { code: '04', name: 'Level 4 · Sentences', focus: 'Sentence building, everyday vocabulary, short dictation and picture description.' },
  { code: '05', name: 'Level 5 · Comprehension', focus: 'Reading passages, question answering, verbs and tenses, paragraph writing.' },
  { code: '06', name: 'Level 6 · Grammar', focus: 'Grammar (ilakkanam), letter writing, essays, spoken presentation practice.' },
  { code: '07', name: 'Level 7 · Literature', focus: 'Classical and modern poetry, prose, proverbs, structured composition.' },
  { code: '08', name: 'Level 8 · Senior', focus: 'Exam preparation, literary analysis, formal writing and public speaking.' },
];

export const approach = [
  { title: 'Graded curriculum', body: 'A structured pathway from the alphabet through to senior literature, so every student has a clear next step.' },
  { title: 'Trained teachers', body: 'Volunteer teachers trained in the graded Tamil curriculum and community languages teaching practice.' },
  { title: 'Blended learning', body: 'Classroom teaching supported by take-home worksheets and online practice material between Saturdays.' },
  { title: 'Culture alongside language', body: 'Songs, drama, speech and art woven through the year and staged at the annual cultural concert.' },
];

export const assessmentInfo = {
  intro: 'Students are assessed each term through classwork, reading, dictation and an end-of-year assessment. Senior students may sit the SACE Tamil (Continuers) examination through the School of Languages.',
  rules: [
    'Enrolment is completed online through the Community Languages Schools SA portal before term begins.',
    'Regular attendance is expected — please notify the class teacher of any absence.',
    'Children must be signed in and collected by a parent or nominated adult each week.',
    'Homework is set weekly and reviewed at the start of the next class.',
  ],
};

export const announcements = [
  {
    id: 1,
    title: 'Kalai Vizha — 29 November 2025',
    titleTa: '🎉 கலை விழா — 29 நவம்பர் 2025 🎉',
    body: 'Our annual cultural concert and prize-giving evening. All families welcome — details to follow by email.',
    date: '2025-10-10',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Mid-year break',
    titleTa: '📢 அரையாண்டு விடுமுறை அறிவிப்பு',
    body: 'No classes from 29 September to 10 October. School resumes Saturday 11 October.',
    date: '2025-09-20',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Enrolments open for 2026',
    titleTa: '2026 ஆம் ஆண்டு பதிவு தொடங்கியது',
    body: 'New and returning student enrolments for the 2026 school year are now open through the CLSSA portal.',
    date: '2025-11-15',
    priority: 'medium',
  },
];

export const events = [
  {
    id: 1,
    title: 'Kalai Vizha 2025 (Annual Cultural Concert)',
    date: '2025-11-29',
    time: '2:00 pm – 5:00 pm',
    location: 'To be confirmed',
    description: 'Stage performances, traditional dance and music by students of every level, followed by academic prize-giving.',
  },
  {
    id: 2,
    title: 'Annual Sports Meet',
    date: '2025-10-25',
    time: '9:30 am – 1:00 pm',
    location: 'Paradise campus grounds',
    description: 'Track and team events for all age groups, with a family picnic to close the morning.',
  },
  {
    id: 3,
    title: "Teachers' Appreciation Evening",
    date: '2025-12-06',
    time: '6:30 pm',
    location: 'Paradise campus hall',
    description: 'A community dinner honouring the volunteer teachers who make the school possible.',
  },
  {
    id: 4,
    title: 'Annual General Meeting 2026',
    date: '2026-02-14',
    time: '4:00 pm',
    location: 'Paradise campus',
    description: 'Reports from the committee, election of office bearers, and planning for the year ahead.',
  },
];

export const magazines = [
  { id: 1, title: '39th Annual Concert Malar', year: '2024', image: magazine39, link: '#' },
  { id: 2, title: '38th Annual Concert Malar', year: '2023', image: magazine38, link: '#' },
  { id: 3, title: '37th Annual Concert Malar', year: '2022', image: magazine37, link: '#' },
];

export const video = {
  title: 'Highlights from the Annual Cultural Concert',
  youtube: 'https://www.youtube.com/embed/2aPOxEPbnmU',
};

export const gallery = [
  { id: 1, image: gallery1, caption: 'Cultural concert — group performance' },
  { id: 2, image: gallery2, caption: 'Classroom reading session' },
  { id: 3, image: gallery3, caption: 'Speech competition finalists' },
  { id: 4, image: gallery4, caption: 'Traditional dance on stage' },
  { id: 5, image: gallery5, caption: 'Sports meet — team events' },
  { id: 6, image: gallery6, caption: 'Prize-giving evening' },
];

export const posterImage = poster;

export const achievements = [
  {
    title: 'Abdul Kalam Award',
    body: 'Recognising the student who best combines academic excellence in Tamil with service to the school community.',
  },
  {
    title: 'Academic Award',
    body: 'Top achievers in each level are recognised at the annual prize-giving for consistent effort and results.',
  },
  {
    title: 'SACE Tamil (Continuers)',
    body: 'Senior students are supported to sit the SACE Stage 2 Tamil examination, with several strong results each year.',
  },
  {
    title: "Teachers' Service Recognition",
    body: 'Long-serving volunteer teachers are honoured for 5, 10 and 20 years of service to Tamil education in Adelaide.',
  },
];

export const teachers = [
  { name: 'Head Teacher', role: 'Curriculum & senior levels' },
  { name: 'Level 2–3 Team', role: 'Foundation & early reading' },
  { name: 'Level 4–5 Team', role: 'Sentences & comprehension' },
  { name: 'Level 6–8 Team', role: 'Grammar, literature & exams' },
  { name: 'Cultural Coordinator', role: 'Music, dance & drama' },
  { name: 'Sports Coordinator', role: 'Annual sports meet' },
];

export const committee = [
  { name: 'President', role: 'Chairs the committee and represents the school' },
  { name: 'Secretary', role: 'Correspondence, enrolments and records' },
  { name: 'Treasurer', role: 'Finances, fees and grants' },
  { name: 'Coordinator', role: 'Day-to-day running of Saturday classes' },
  { name: 'Events Officer', role: 'Concert, sports meet and community events' },
  { name: 'Parent Representatives', role: 'Voice of families on the committee' },
];

export const faq = [
  {
    q: 'Who can enrol?',
    a: 'Any child from around 5 years of age, plus teenagers and adults. No prior Tamil is needed — beginners start at Level 2.',
  },
  {
    q: 'When and where are classes?',
    a: 'Saturdays 2:00 – 5:00 pm during South Australian school terms, at 3 Campbell Rd, Paradise SA 5075.',
  },
  {
    q: 'How do I enrol?',
    a: 'Enrolment is completed online through the Community Languages Schools SA portal. Use the Enrol Now button anywhere on this site.',
  },
  {
    q: 'Is there a fee?',
    a: 'A small annual family contribution covers materials. Community languages schooling in SA is heavily subsidised — contact us for the current amount.',
  },
  {
    q: 'Can my child sit a formal Tamil exam?',
    a: 'Yes. Senior students are prepared for the SACE Stage 2 Tamil (Continuers) examination through the School of Languages.',
  },
];

export const downloads = [
  { name: 'Enrolment guide (PDF)', note: 'Step-by-step CLSSA portal walkthrough' },
  { name: 'School term calendar', note: 'Class dates and public holidays' },
  { name: 'Level 2 practice worksheets', note: 'Alphabet tracing and first words' },
  { name: 'Tamil anthem & school song lyrics', note: 'Words and transliteration' },
];
