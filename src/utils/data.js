import rooms from '../constants/rooms';

export const roomsArray = [
  {
    id: 1,
    show: true,
    titleKey: 'rooms.jacuzzi.title',
    shortDescriptionKey: 'rooms.jacuzzi.short',
    longDescriptionKey: 'rooms.jacuzzi.long',
    longDescriptionMoreKey: 'rooms.jacuzzi.long_more',
    slug: 'spa-bath-apartment',
    headerImg: rooms.jacuzzi,
    room_nums: [],
    size: 35,
    facilities: {
      ac: true,
      balcony: true,
      spatub: true,
      shower: true,
      wifi: true,
      soundproof: true,
      kitchen: false,
      view: false,
    },
    images: [
      {
        src: rooms.jacuzzi,
        alt: 'spa bath',
      },
      {
        src: rooms.jacuzzi_sub_1,
        alt: 'spa bath room bedroom view',
      },
      {
        src: rooms.jacuzzi_sub_2,
        alt: 'spa bath room double bed',
      },
      {
        src: rooms.jacuzzi_sub_3,
        alt: 'spa bath',
      },
      {
        src: rooms.jacuzzi_sub_4,
        alt: 'spa bath room toilet sink',
      },
      {
        src: rooms.jacuzzi_sub_5,
        alt: 'spa bath room bed with tv',
      },
      {
        src: rooms.deluxe_room_sub_5,
        alt: 'spa bath room shower and toilet',
      },
    ],
  },
  {
    id: 2,
    show: true,
    titleKey: 'rooms.deluxe_room.title',
    shortDescriptionKey: 'rooms.deluxe_room.short',
    longDescriptionKey: 'rooms.deluxe_room.long',
    longDescriptionMoreKey: 'rooms.deluxe_room.long_more',
    slug: 'deluxe-room',
    headerImg: rooms.deluxe_room,
    room_nums: ['2', '5', '8', '11'],
    size: 18,
    facilities: {
      ac: true,
      balcony: false,
      spatub: false,
      shower: true,
      wifi: true,
      soundproof: true,
      kitchen: false,
      view: false,
    },
    images: [
      {
        src: rooms.deluxe_room,
        alt: 'deluxe room double bed',
      },
      {
        src: rooms.deluxe_room_sub_1,
        alt: 'deluxe room bedroom view',
      },
      {
        src: rooms.deluxe_room_sub_2,
        alt: 'deluxe room bed with tv',
      },
      {
        src: rooms.deluxe_room_sub_3,
        alt: 'deluxe room kettle',
      },
      {
        src: rooms.deluxe_room_sub_4,
        alt: 'deluxe room toilet sink',
      },
      {
        src: rooms.deluxe_room_sub_5,
        alt: 'deluxe room shower and toilet',
      },
    ],
  },
  {
    id: 3,
    show: true,
    titleKey: 'rooms.deluxe_family.title',
    shortDescriptionKey: 'rooms.deluxe_family.short',
    longDescriptionKey: 'rooms.deluxe_family.long',
    longDescriptionMoreKey: 'rooms.deluxe_family.long_more',
    slug: 'deluxe-family-apartment',
    headerImg: rooms.deluxe_family,
    room_nums: ['3', '4', '9', '10'],
    size: 40,
    facilities: {
      ac: true,
      balcony: true,
      spatub: false,
      shower: true,
      wifi: true,
      soundproof: true,
      kitchen: true,
      view: false,
    },
    images: [
      {
        src: rooms.deluxe_family,
        alt: 'deluxe family room sofa',
      },
      {
        src: rooms.deluxe_family_sub_1,
        alt: 'deluxe family room bedroom view',
      },
      {
        src: rooms.deluxe_family_sub_2,
        alt: 'deluxe family room living room with tv',
      },
      {
        src: rooms.deluxe_family_sub_3,
        alt: 'deluxe family room kitchen island',
      },
      {
        src: rooms.deluxe_family_sub_4,
        alt: 'deluxe family room kitchen',
      },
      {
        src: rooms.deluxe_family_sub_5,
        alt: 'deluxe family room shower and toilet',
      },
    ],
  },
  {
    id: 4,
    show: true,
    titleKey: 'rooms.triple_apt.title',
    shortDescriptionKey: 'rooms.triple_apt.short',
    longDescriptionKey: 'rooms.triple_apt.long',
    longDescriptionMoreKey: 'rooms.triple_apt.long_more',
    slug: 'triple-studio-apartment',
    headerImg: rooms.triple_apt,
    room_nums: ['12'],
    size: 35,
    facilities: {
      ac: true,
      balcony: true,
      spatub: false,
      shower: true,
      wifi: true,
      soundproof: true,
      kitchen: true,
      view: false,
    },
    images: [
      {
        src: rooms.triple_apt,
        alt: 'triple studio apartment bedroom view',
      },
      {
        src: rooms.deluxe_studio_sub_2,
        alt: 'triple studio apartment bed with tv',
      },
      {
        src: rooms.triple_apt_sub_1,
        alt: 'triple studio apartment kitchen',
      },
      {
        src: rooms.triple_apt_sub_2,
        alt: 'triple studio apartment entrance',
      },
      {
        src: rooms.deluxe_room_sub_5,
        alt: 'triple studio apartment shower and toilet',
      },
    ],
  },
  {
    id: 5,
    show: true,
    titleKey: 'rooms.deluxe_studio.title',
    shortDescriptionKey: 'rooms.deluxe_studio.short',
    longDescriptionKey: 'rooms.deluxe_studio.long',
    longDescriptionMoreKey: 'rooms.deluxe_studio.long_more',
    slug: 'deluxe-studio-apartment',
    headerImg: rooms.deluxe_studio,
    room_nums: ['6'],
    size: 35,
    facilities: {
      ac: true,
      balcony: true,
      spatub: false,
      shower: true,
      wifi: true,
      soundproof: true,
      kitchen: true,
      view: false,
    },
    images: [
      {
        src: rooms.deluxe_studio,
        alt: 'deluxe studio bed with champagne',
      },
      {
        src: rooms.deluxe_studio_sub_1,
        alt: 'deluxe studio bedroom view',
      },
      {
        src: rooms.deluxe_studio_sub_2,
        alt: 'deluxe studio bed with tv',
      },
      {
        src: rooms.deluxe_studio_sub_3,
        alt: 'deluxe studio kitchen with table',
      },
      {
        src: rooms.deluxe_studio_sub_4,
        alt: 'deluxe studio kitchen',
      },
      {
        src: rooms.deluxe_studio_sub_5,
        alt: 'deluxe studio toilet and shower',
      },
    ],
  },
  {
    id: 6,
    show: true,
    titleKey: 'rooms.standard_apt.title',
    shortDescriptionKey: 'rooms.standard_apt.short',
    longDescriptionKey: 'rooms.standard_apt.long',
    longDescriptionMoreKey: 'rooms.standard_apt.long_more',
    slug: 'standard-apartment',
    headerImg: rooms.standard_apt,
    room_nums: ['7'],
    size: 35,
    facilities: {
      ac: true,
      balcony: true,
      spatub: false,
      shower: true,
      wifi: true,
      soundproof: true,
      kitchen: true,
      view: false,
    },
    images: [
      {
        src: rooms.standard_apt,
        alt: 'standard apartment bedroom view',
      },
      {
        src: rooms.standard_apt_sub_1,
        alt: 'standard apartment sofa and coffee table',
      },
      {
        src: rooms.standard_apt_sub_2,
        alt: 'standard apartment dining table',
      },
      {
        src: rooms.standard_apt_sub_3,
        alt: 'standard apartment sofa, coffee table and tv',
      },
      {
        src: rooms.standard_apt_sub_4,
        alt: 'standard apartment kitchen',
      },
      {
        src: rooms.standard_apt_sub_5,
        alt: 'standard apartment kitchen with fridge',
      },
    ],
  },
  {
    id: 7,
    show: true,
    titleKey: 'rooms.standard_room.title',
    shortDescriptionKey: 'rooms.standard_room.short',
    longDescriptionKey: 'rooms.standard_room.long',
    longDescriptionMoreKey: 'rooms.standard_room.long_more',
    slug: 'standard-room',
    headerImg: rooms.standard_room,
    room_nums: ['1a', '2a', '14'],
    size: 13,
    facilities: {
      ac: true,
      balcony: false,
      spatub: false,
      shower: true,
      wifi: true,
      soundproof: true,
      kitchen: false,
      view: true,
    },
    images: [
      {
        src: rooms.standard_room,
        alt: 'standard room bedroom view',
      },
      {
        src: rooms.standard_room_sub_1,
        alt: 'standard room bed and tv',
      },
      {
        src: rooms.standard_room_sub_2,
        alt: 'standard room shower and toilet',
      },
      {
        src: rooms.standard_room_sub_3,
        alt: 'standard room entrance',
      },
    ],
  },
  {
    id: 8,
    show: false,
    titleKey: 'rooms.standard_studio_apt.title',
    shortDescriptionKey: 'rooms.standard_studio_apt.short',
    longDescriptionKey: 'rooms.standard_studio_apt.long',
    longDescriptionMoreKey: 'rooms.standard_studio_apt.long_more',
    slug: 'standard-studio-apartment',
    headerImg: rooms.standard_studio_apt,
    room_nums: ['13', '16'],
    size: 35,
    facilities: {
      ac: true,
      balcony: true,
      spatub: false,
      shower: true,
      wifi: true,
      soundproof: true,
      kitchen: true,
      view: false,
    },
  },
];

export const userReviews = [
  {
    user: 'Sam',
    review:
      "The room was very spacious and had a cool space-age theme befitting of the name Galaxy Apartments. It's very close to the airport, making it perfect for short layovers. The staff are incredibly friendly and helpful. In fact, I would have missed my 6am flight without the staff. After falling back asleep after my alarm, a staff member made sure I was awake and didn't miss my taxi. Top service.",
    stars: 5,
    sex: 'male',
    country: 'im',
  },
  {
    user: 'Evgenii',
    review:
      "The aparmtent's location is only 10 minutes by taxi from the airport. In terms of convenience and overall experience, I'd happily give it a 12 out of 10. The apartment itself is impeccable - it's clean, comfortable, and well-maintained. Both the ventilation and central heating systems worked flawlessly, ensuring a pleasant stay regardless of the weather outside. I highly recommend this place for anyone if you need to get accommodation in the vicinity of the airport.",
    stars: 5,
    sex: 'male',
    country: 'ru',
  },
  {
    user: 'Milena',
    review:
      'J ai tout aimé..la proximité avec l aeroport..la présence d une personne malgre l accueil tardif.. Le petit café du matin.. Les hoteliers sont charmant et trés à l écoute..pret à vous aider à tout moment.Beaucoup plus que des professionnels de l hôtellerie. Merci à eux et bonne continuation.',
    stars: 5,
    sex: 'female',
    country: 'fr',
  },
  {
    user: 'Biljana',
    review:
      'Prekrasna komunikacija, preubavi i cisti sobi, odlicno precekani, so svoj parking, preporacuvam od srce',
    stars: 5,
    sex: 'female',
    country: 'mk',
  },
  {
    user: 'Ksenia',
    review:
      'Close to the airport, shops, restaurants, bus stops. Clean, quiet, great bed, shower with good hot water pressuer, everything you need to comfortably spend a couple of days.',
    stars: 5,
    sex: 'female',
    country: 'il',
  },
  {
    user: 'Yuliya',
    review:
      "Stayed for one night with the kids. Checked in at 00:00. The man at the reception was very polite and friendly. The two rooms were very clean, cozy and comfortable. The location is near the airport and not far from the highway. We had a good night's rest.",
    stars: 5,
    sex: 'female',
    country: 'ua',
  },
  {
    user: 'Luis',
    review:
      'Simple yet cosy hotel close to Belgrade airport. Very friendly owners that will help you with everything you may need. Great value for money, comfortable bed.',
    stars: 5,
    sex: 'male',
    country: 'br',
  },
];
