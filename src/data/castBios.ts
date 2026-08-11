export type SocialLink = {
  label: string;
  href: string;
};

export type CastMember = {
  stageName: string;
  pronouns: string;
  castRole: string;
  usualRole: string;
  image: string;
  alt: string;
  photoCredit?: string;
  photoCreditUrl?: string;
  socialLinks?: SocialLink[];
  questions: [string, string][];
};

export const castMembers: CastMember[] = [
  {
    stageName: 'Emma Stoner',
    pronouns: 'She/her',
    castRole: 'Co-director, resident feral goblin',
    usualRole: 'Frank, all roles',
    image: '/images/cast/bios/emma_cast.jpg',
    alt: 'Emma Stoner, Golden Atlas Players cast member',
    photoCredit: 'Self portrait',
    socialLinks: [
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/EmmaStoner234',
      },
    ],
    questions: [
      ['How long have you been doing Rocky?', '1997 to 1999, then 2018 to present.'],
      ['How did you get into Rocky?', 'I saw it once on TV as a kid and became obsessed with Frank-N-Furter.'],
      ['Favorite character', 'Frank-N-Furter'],
      ['Favorite song', 'Sweet Transvestite'],
      ['Favorite callback', 'FE Fi fo fum first I jerk off then I... Come, we are ready for the floorshow.'],
      ['Most memorable Rocky moment', 'Performing for Barry Bostwick and Pat Quinn.'],
      ['Fun fact', "I'm weird."],
    ],
  },
  {
    stageName: 'Jade',
    pronouns: 'She/they',
    castRole: 'Cast member and stage crew',
    usualRole: 'Criminologist',
    image: '/images/cast/bios/jade_cast.jpg',
    alt: 'Jade, Golden Atlas Players cast member',
    photoCredit: 'Photo by Xen',
    questions: [
      ['How long have you been doing Rocky?', 'One year.'],
      ['How did you get into Rocky?', 'My partner Xen got me into it when I moved in.'],
      ['Favorite character', 'Riff Raff'],
      ['Favorite song', 'Time Warp'],
      ['Most memorable Rocky moment', 'Getting to play a part on stage for the first time.'],
      ['Fun fact', 'I play music.'],
      ['Outside of Rocky', 'We have many cats.'],
    ],
  },
  {
    stageName: 'Jellybean',
    pronouns: 'She/her',
    castRole: 'Cast member',
    usualRole: 'Columbia, Magenta, Rocky',
    image: '/images/cast/bios/jellybean_cast.jpeg',
    alt: 'Jellybean, Golden Atlas Players cast member',
    photoCredit: '@jacob.lens.photography',
    photoCreditUrl: 'https://www.instagram.com/jacob.lens.photography/',
    questions: [
      ['How long have you been doing Rocky?', 'Since November 2023.'],
      ['How did you get into Rocky?', 'I tore my ACL playing rugby, needed a new hobby, and found Rocky through a teammate.'],
      ['Favorite song', "Eddie's Teddy"],
      ['Favorite callback', 'Crucify the lips'],
      ['Most memorable Rocky moment', "Lying at a virgin popping and popping a castmate's nephew."],
      ['Fun fact', 'I have two cadaver ligaments.'],
      ['Outside of Rocky', 'Renovating my house, reading books, hiking, camping, and taking care of my three cats, dog, turtle, and snake.'],
    ],
  },
  {
    stageName: 'Luna',
    pronouns: 'She/her',
    castRole: 'Cast member',
    usualRole: 'My role varies, but my favorite is playing Magenta.',
    image: '/images/cast/bios/luna_cast.jpg',
    alt: 'Luna, Golden Atlas Players cast member',
    photoCredit: '@jacob.lens.photography',
    photoCreditUrl: 'https://www.instagram.com/jacob.lens.photography/',
    socialLinks: [
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/hbobynskyj',
      },
    ],
    questions: [
      ['How long have you been doing Rocky?', 'Since 2024.'],
      ['How did you get into Rocky?', "Rocky Horror is one of my mom's favorite movies, so I've been watching it since I was a kid. As a mother, it's a joy seeing how much my eight-year-old loves the movie too!"],
      ['Favorite character', 'Magenta'],
      ['Favorite song', 'Science Fiction/Double Feature'],
      ['Favorite callback', 'Asshole! Slut!'],
      ['Most memorable Rocky moment', 'The first role I ever performed at Rocky was Trixie. I was so nervous being on stage for the first time, but hearing my cast members cheer for me was really special.'],
      ['Fun fact', "I will be graduating from ESU in December 2026 with my bachelor's degree in special education!"],
      ['Outside of Rocky', 'Two seems to be my favorite number. I have two kids, two chickens, and two kittens! In my limited spare time, I enjoy writing werewolf novels for the reading app Dreame. Look me up there as Gen17. I also enjoy being out in nature despite my allergies to everything outside. Autumn is my favorite season, and I wish it could stay that way year-round.'],
    ],
  },
  {
    stageName: 'Xenobia',
    pronouns: 'She/they/them/never late for dinner',
    castRole: 'Cast member',
    usualRole: 'Dr. Scott, Criminologist, Eddie, Janet, Magenta, Riff Raff',
    image: '/images/cast/bios/xenobia_cast.JPG',
    alt: 'Xenobia, Golden Atlas Players cast member',
    photoCredit: '@jacob.lens.photography',
    photoCreditUrl: 'https://www.instagram.com/jacob.lens.photography/',
    questions: [
      ['How long have you been doing Rocky?', 'Since July 2022.'],
      ['How did you get into Rocky?', "I wanted to be in a shadow cast since I was a kid. I finally joined a cast in July 2022 and met good people there. I'm now in my forever home with the Golden Atlas Players at the GAP Theatre."],
      ['Favorite character', 'Magenta'],
      ['Favorite song', 'Science Fiction/Double Feature'],
      ['Favorite callback', '86 the Meatloaf'],
      ['Most memorable Rocky moment', 'The rubber part of the wheelchair wheels came off just in time for me to say, "I can\'t move my wheels!"'],
      ['Fun fact', "I'm also an amateur drag performer named Little Sunshine."],
      ['Outside of Rocky', "I'm an amateur drag performer named Little Sunshine. I like making TikToks. I'm a member of a horror writers club and attend monthly horror trivia at Haunt Coffee."],
    ],
  },
  {
    stageName: 'Liz',
    pronouns: 'she/her',
    castRole: 'Cast Member',
    usualRole: 'Janet, Rocky, Frank, Columbia, Trixie',
    image: '/images/cast/bios/liz.jpg',
    alt: 'Liz, Golden Atlas Players cast member',
    photoCredit: '@jacob.lens.photography',
    photoCreditUrl: 'https://www.instagram.com/jacob.lens.photography/',
    socialLinks: [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/lizkameen/',
      },
    ],
    questions: [
      ['How long have you been doing Rocky?', 'Since 2023'],
      ['How did you get into Rocky?', 'Spaced Out Sensations went to Moravian University and I joined after my second show! When GAP started their shows, I immediately joined this cast too! '],
      ['Favorite character', 'Frank and Rocky'],
      ['Favorite song', 'Iâ€™m Going Home'],
      ['Favorite callback', 'â€œHe\'s got more hurt than you\'ve got skirt, slut!"'],
      ['Most memorable Rocky moment', 'iClint farting on cue perfectly at the 2024 Moravian show during Takeover scene! '],
      ['Fun fact', 'I always wanted to study abroad in Paris and even had a France-themed room growing up but then chose to study abroad in Florence, Italy in college! '],
      ['Outside of Rocky', 'I love painting and writing, especially watercolor and poetry. I have the travel bug and love getting out into nature â€” Iâ€™m also an annoyingly fast reader, typer, and talker!'],
    ],
  },
  {
    stageName: 'Kit/Kitty',
    pronouns: 'They/He',
    castRole: 'Multi-purpose ',
    usualRole: 'Columbia, Brad, Eddie, whatever is needed ',
    image: '/images/cast/bios/kitty.jpg',
    alt: 'Kit/ Kitty, Golden Atlas Players cast member',
    photoCredit: '@jacob.lens.photography',
    photoCreditUrl: 'https://www.instagram.com/jacob.lens.photography/',
    socialLinks: [],
    questions: [
      ['How long have you been doing Rocky?', "Since 2008, though there's been a few breaks in there.  "],
      ['How did you get into Rocky?', 'Our GSA in college did a large show in the local single screen theater a block off campus every year, then when I moved to the lehigh valley I rediscovered the greater rocky shadow cast community.  '],
      ['Favorite callback', '"Bullwinkle!" during rocky horror roll call '],
      ['Fun fact', 'I have at least one crocheted costume piece for each character that I play. '],
    ],
  },
  {
    stageName: 'Emmy',
    pronouns: 'She/her',
    castRole: 'Cast member',
    usualRole: "Magenta, Eddie, brad, Janet and I've played every role at least twice.",
    image: '/images/cast/bios/emmy.jpg',
    alt: 'Emmy, Golden Atlas Players cast member',
    questions: [
      ['How long have you been doing Rocky?', '32 years'],
      ['How did you get into Rocky?', "I went with my cousin Jim to a show at the Lehigh valley theater and loved it. Joined the cast a few weeks later. I was just a transfer for awhile and then one night I was needed at the last minute to pay magenta. I was so scared, but obviously that didn't last lol. I ran that cast for many years and have been involved with 5 casts since."],
      ['Favorite character', 'Magenta and Eddie'],
      ['Favorite song', 'Hot patootie'],
      ['Most memorable Rocky moment', 'My fiance(at the time) played brad and I was Janet and he actually proposed on stage. Everyone in the audience knew but me.'],
      ['Fun fact', 'I absolutely love ducks and I have a collection of about 4000 ducks.'],
      ['Outside of Rocky', "I enjoy do crafts like diamond art, scrapbooking and anything for parties. I have always wanted to be a party planner, which I'm really good at. I enjoy bowling, playing board and card games and spending time with family and friends."],
    ],
  },
  {
    stageName: 'Suzie Pony',
    pronouns: 'She/her',
    castRole: 'Cast member',
    usualRole: 'Criminologist, Magenta,  Janet, Dr. Scott',
    image: '/images/cast/bios/suzie_pony.jpg',
    alt: 'Suzie Pony, Golden Atlas Players cast member',
    questions: [
      ['How long have you been doing Rocky?', '22 years'],
      ['How did you get into Rocky?', 'Friends who insisted I try something  new to help me get over my fear of  people.'],
      ['Favorite character', 'Criminologist'],
      ['Favorite song', 'Sweet Transvestite'],
      ['Most memorable Rocky moment', 'All of them'],
      ['Fun fact', 'I love snowglobes.'],
      ['Outside of Rocky', 'I grew up having horses, cats, dogs and periodically,  ducks.'],
    ],
  },
  {
    stageName: 'Velvet',
    pronouns: 'She/her',
    castRole: 'Just about whatever needs doing.',
    usualRole: 'Magenta and Riff usually.',
    image: '/images/cast/bios/velvet.jpg',
    alt: 'Velvet, Golden Atlas Players cast member',
    photoCredit: 'Reading Eagle Newspaper circa 2020',
    questions: [
      ['How long have you been doing Rocky?', 'January, 2003'],
      ['How did you get into Rocky?', 'An ex gifted me the VHS around the same time I met some friends who were in a cast.'],
      ['Favorite character', 'Magenta'],
      ['Favorite callback', '"I\'ve got to smoke a bowl!"'],
      ['Most memorable Rocky moment', "Hard to pick just one. Let's say that I've had the opportunity to perform in some really cool and sometimes unexpected places (like on the altar of a catholic church). I've also made some of the most interesting friends."],
      ['Fun fact', 'I hate most musicals.'],
      ['Outside of Rocky', "I've tried a bunch of stuff over the years but a passion for cooking has always been part of my life."],
    ],
  },
  {
    stageName: 'Banana',
    pronouns: 'She/Her',
    castRole: 'Cast Member',
    usualRole: 'Magenta, Riff, and Janet, but have done them all at least once.',
    image: '/images/cast/bios/banana.JPG',
    alt: 'Banana, Golden Atlas Players cast member',
    photoCredit: '@jacoblensphotography',
    photoCreditUrl: 'https://www.instagram.com/jacoblensphotography/',
    questions: [
      ['How long have you been doing Rocky?', 'I believe I first started performing in 2004/2005.  So roughly 22 years give or take some small breaks.'],
      ['How did you get into Rocky?', `Blame it all on Clint, lol.  My Rocky Horror journey wouldn't exist without him.  Once upon a time back when instant messenger was all the rage he sent one to a mutual friend of ours inviting them to come out to Rocky Horror, they told him that I was with and he said will bring her too!  16 year old me basically never looked back again.

3-4 years later Clint was involved with Erotic Daydreams and had invited me to a show to see him perform and then that became a weekly ritual until I finally joined as well, I did my first show at The Angela Triplex Theatre as Magenta, I was probably around 19/20.`],
      ['Favorite character', 'Magenta'],
      ['Favorite song', 'Touch-A, Touch-A, Touch Me'],
      ['Favorite callback', '"How Do You Spell Slut!"'],
      ['Most memorable Rocky moment', "I have so many, but maybe not so much to share out there in the universe.  One that I will share is more of I can't believe I went back on stage after that kind of moment.... during my time with Erotic Daydreams I was performing as Frank and I wore a pair of heeled boots, as I was coming down the steps at the end of Sweet T my boot hooked to one of the steps. I went my leg stayed. I bruised my shin all the way down to the bone and was black and blue for months.  Another Frank stepped in for probably about 10-15 minutes and I got right back in there!"],
      ['Fun fact', "I didn't see the Rocky Horror Show until 2024. It was at the Bucks County Playhouse, Frankie Grande was Frank.  The person who took me, makes fun of me constantly for being a part of Rocky and actually had a good time and enjoyed himself, still can't convince him to come to a show though."],
      ['Outside of Rocky', "Hate to say it, outside of Rocky I'm just your average adult trying to get through the day.  I work a full-time Monday-Friday job. Take care of my mom in between.  I do have a black kitty, his name is Onyx and he's just a big old noodle.  Most Friday's you can find me playing some Music Video Bingo unless obviously there's a show to be had."],
    ],
  },
  {
    stageName: 'Rainbow sprinkles/ anya marquee',
    pronouns: 'He him',
    castRole: 'Cast member tech crew',
    usualRole: 'Rocky',
    image: '/images/cast/bios/rainbowsprinkles.jpeg',
    alt: 'Rainbow sprinkles/ anya marquee, Golden Atlas Players cast member',
    photoCredit: '@jacoblensphotography',
    photoCreditUrl: 'https://www.instagram.com/jacoblensphotography/',
    questions: [
      ['How long have you been doing Rocky?', '2019'],
      ['How did you get into Rocky?', 'I always was big into broadway and theater. So my friend invited me to his birthday party one year and introduced  me to one of his friends that did rocky horror. We talked for awhile that night became friends exchanged info. Then a month or so later I went with him to see rocky and this would go on for about a year and at times the cast would throw me up on stage as trixie. So after doing trixie awhile I decided to join my first rocky cast. Flash foward to now I perform  with 2 cast full time and guest perform  with a coupke other casts '],
      ['Favorite character', 'Rocky'],
      ['Favorite song', 'Sweet transvestite '],
      ['Favorite callback', 'How much for a  blow job ... free '],
      ['Most memorable Rocky moment', 'Meeting Barry bostwick  '],
      ['Fun fact', "Im  a big broadway fan and I collect playbills from the broadways I've seen and I was organizing  them the one day and I was looking at my first  broadway show was spamalot and as I was flipping thru it when I realized  that I saw tim curry as king Arthur on broadway  which I thought  was pretty awesome "],
      ['Outside of Rocky', 'I like to got broadway shows and support local theater. I dabble as a drag queen here and there. My drag name is Anya Marquee. I know how to do the polka. I also went to school to be a pastry chef.'],
    ],
  },
];
