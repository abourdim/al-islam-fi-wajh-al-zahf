/* الإسلام في وجه الزحف الأحمر — ISLAM FACING THE RED TIDE — app.js v1.0 */
/* Based on "Al-Islam fi Wajh al-Zahf al-Ahmar" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الإسلام في وجه الزحف الأحمر',
    splashSub: 'قيم الإسلام في مواجهة الإلحاد',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الروم ٣٠: ٣٠',
    tabHome: 'الرئيسية', tabTraits: 'القيم', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'قيم الإسلام الخالدة',
    traitsDesc: '١٥ قيمة إسلامية من كتاب الشيخ محمد الغزالي — كل قيمة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن قيم الإسلام — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي الفكرية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة القيم',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الثبات والهداية',
    dailyLabel: '✨ قيمة اليوم',
    searchPlaceholder: 'ابحث في القيم...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ قيمة من كتاب الإسلام في وجه الزحف الأحمر',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Islam Facing the Red Tide',
    splashSub: 'Islamic values against atheism for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Ar-Rum 30:30',
    tabHome: 'Home', tabTraits: 'Values', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Eternal Islamic Values',
    traitsDesc: '15 Islamic values from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic values — 4 choices per question',
    progressTitle: 'My Intellectual Journey',
    progressDesc: 'Your progress and achievements in the values journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Steadfastness & Guidance',
    dailyLabel: "✨ Today's Value",
    searchPlaceholder: 'Search values...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 Islamic values from Islam Facing the Red Tide',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'L\'Islam Face a la Maree Rouge',
    splashSub: 'Les valeurs islamiques face a l\'atheisme pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Ar-Rum 30:30',
    tabHome: 'Accueil', tabTraits: 'Valeurs', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Valeurs Islamiques Eternelles',
    traitsDesc: '15 valeurs islamiques du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur les valeurs islamiques — 4 choix par question',
    progressTitle: 'Mon Parcours Intellectuel',
    progressDesc: 'Vos progres et realisations dans le parcours des valeurs',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Fermete et la Guidance',
    dailyLabel: '✨ Valeur du Jour',
    searchPlaceholder: 'Rechercher les valeurs...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 valeurs islamiques du livre L\'Islam Face a la Maree Rouge',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 ISLAMIC VALUES DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🌅',
    ar:{title:'الإيمان بالله يدحض الإلحاد',desc:'الإيمان بالله فطرة في كل إنسان. الكون بتصميمه المذهل يشهد بوجود خالق حكيم. الإلحاد لا يستطيع تفسير أصل الحياة ولا الوعي ولا النظام الكوني. العلم الحقيقي يقود إلى الإيمان لا إلى الإنكار.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا لَا تَبْدِيلَ لِخَلْقِ اللَّهِ',verseRef:'الروم ٣٠',hadith:'كل مولود يُولد على الفطرة — متفق عليه',action:'تأمل في الكون اليوم: النجوم والجبال والبحار — واسأل: من صمّم كل هذا بهذا الجمال؟',young:'الله خلق كل شيء! انظر حولك — الأشجار والنجوم والبحار — كلها تقول: الله موجود! 🌅'},
    en:{title:'Faith in God Refutes Atheism',desc:'Faith in God is a natural instinct in every human. The universe with its amazing design testifies to the existence of a wise Creator. Atheism cannot explain the origin of life, consciousness, or cosmic order. True science leads to faith, not denial.',verse:'The nature of Allah upon which He created mankind — no change should there be in the creation of Allah',verseRef:'Ar-Rum 30',hadith:'Every child is born with the natural instinct (fitrah) — Agreed upon',action:'Reflect on the universe today: the stars, mountains, and seas — ask: who designed all this with such beauty?',young:'Allah created everything! Look around you — trees, stars, and seas — they all say: Allah exists! 🌅'},
    fr:{title:'La Foi en Dieu Refute l\'Atheisme',desc:'La foi en Dieu est un instinct naturel en chaque humain. L\'univers avec son design etonnant temoigne de l\'existence d\'un Createur sage. L\'atheisme ne peut expliquer l\'origine de la vie, de la conscience ou de l\'ordre cosmique. La vraie science mene a la foi, pas au deni.',verse:'La nature d\'Allah selon laquelle Il a cree les gens — pas de changement dans la creation d\'Allah',verseRef:'Ar-Rum 30',hadith:'Chaque enfant nait avec l\'instinct naturel (fitrah) — Unanimement reconnu',action:'Reflechissez a l\'univers aujourd\'hui : les etoiles, les montagnes et les mers — demandez : qui a concu tout cela avec tant de beaute ?',young:'Allah a tout cree ! Regarde autour de toi — les arbres, les etoiles et les mers — ils disent tous : Allah existe ! 🌅'}
  },
  {
    id:2, emoji:'✨',
    ar:{title:'الروح أسمى من المادة',desc:'الإنسان ليس مجرد آلة مادية. فيه روح ووجدان وضمير. المادية تحوّل الإنسان إلى حيوان يبحث عن الطعام فقط. الإسلام يوازن بين حاجات الجسد وتطلعات الروح. السعادة الحقيقية في الإيمان لا في الاستهلاك.',verse:'وَنَفَخْتُ فِيهِ مِنْ رُوحِي',verseRef:'الحجر ٢٩',hadith:'ليس الغنى عن كثرة العرض ولكن الغنى غنى النفس — متفق عليه',action:'خصص وقتاً اليوم لروحك: صلِّ بخشوع، اقرأ القرآن، أو تأمل في نعم الله',young:'أنت لست فقط جسداً! عندك قلب يشعر وروح تحب الله — اعتنِ بروحك كما تعتني بجسمك ✨'},
    en:{title:'Spirit Is Higher Than Matter',desc:'A human is not just a material machine. There is a spirit, emotions, and conscience. Materialism turns humans into animals seeking only food. Islam balances bodily needs with spiritual aspirations. True happiness lies in faith, not consumption.',verse:'And I breathed into him of My spirit',verseRef:'Al-Hijr 29',hadith:'Richness is not in having many possessions, but richness is the richness of the soul — Agreed upon',action:'Dedicate time today to your spirit: pray with focus, read Quran, or reflect on Allah\'s blessings',young:'You are not just a body! You have a heart that feels and a spirit that loves Allah — take care of your spirit just like your body ✨'},
    fr:{title:'L\'Esprit Est Superieur a la Matiere',desc:'L\'humain n\'est pas qu\'une machine materielle. Il y a un esprit, des emotions et une conscience. Le materialisme transforme les humains en animaux ne cherchant que la nourriture. L\'Islam equilibre les besoins du corps avec les aspirations de l\'esprit. Le vrai bonheur reside dans la foi, pas la consommation.',verse:'Et J\'ai insuffle en lui de Mon esprit',verseRef:'Al-Hijr 29',hadith:'La richesse n\'est pas dans l\'abondance des biens, mais la richesse est la richesse de l\'ame — Unanimement reconnu',action:'Consacrez du temps aujourd\'hui a votre esprit : priez avec concentration, lisez le Coran ou reflechissez aux bienfaits d\'Allah',young:'Tu n\'es pas qu\'un corps ! Tu as un coeur qui ressent et un esprit qui aime Allah — prends soin de ton esprit comme de ton corps ✨'}
  },
  {
    id:3, emoji:'👑',
    ar:{title:'كرامة الإنسان',desc:'الإسلام يكرّم الإنسان بما هو إنسان، بغض النظر عن لونه أو عرقه أو طبقته. لا يجوز استعباد الناس أو إذلالهم. كل إنسان مكرّم لأنه خليفة الله في الأرض. الكرامة حق لكل فرد.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',verseRef:'الإسراء ٧٠',hadith:'الناس سواسية كأسنان المشط — رواه أحمد',action:'عامل كل شخص تقابله اليوم باحترام — بغض النظر عن مظهره أو وظيفته أو أصله',young:'كل إنسان كريم عند الله! عامل الجميع باحترام — لا تسخر من أحد ولا تنظر لأحد بازدراء 👑'},
    en:{title:'Human Dignity',desc:'Islam honors humans as humans, regardless of color, race, or class. Enslaving or humiliating people is forbidden. Every human is honored because they are God\'s vicegerent on earth. Dignity is a right for every individual.',verse:'And We have certainly honored the children of Adam',verseRef:'Al-Isra 70',hadith:'People are equal like the teeth of a comb — Ahmad',action:'Treat every person you meet today with respect — regardless of their appearance, job, or origin',young:'Every person is honored by Allah! Treat everyone with respect — never mock anyone or look down on anyone 👑'},
    fr:{title:'La Dignite Humaine',desc:'L\'Islam honore l\'humain en tant qu\'humain, independamment de sa couleur, race ou classe. Asservir ou humilier les gens est interdit. Chaque humain est honore car il est le vicaire de Dieu sur terre. La dignite est un droit pour chaque individu.',verse:'Et Nous avons certes honore les enfants d\'Adam',verseRef:'Al-Isra 70',hadith:'Les gens sont egaux comme les dents d\'un peigne — Ahmad',action:'Traitez chaque personne que vous rencontrez aujourd\'hui avec respect — peu importe son apparence, son travail ou son origine',young:'Chaque personne est honoree par Allah ! Traite tout le monde avec respect — ne te moque jamais de personne 👑'}
  },
  {
    id:4, emoji:'⚖️',
    ar:{title:'العدالة الاجتماعية بالطريقة الإسلامية',desc:'الإسلام يحقق العدالة الاجتماعية دون سحق الفرد. الزكاة والوقف والميراث أدوات لتوزيع الثروة. لكن الإسلام يحترم الملكية الفردية ولا يصادر أموال الناس. العدالة الحقيقية تبدأ من القلب لا من القهر.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل ٩٠',hadith:'اتقوا الظلم فإن الظلم ظلمات يوم القيامة — رواه مسلم',action:'كن عادلاً اليوم في كل تعاملاتك — مع أصدقائك وأهلك وزملائك',young:'الإسلام يحب العدل! كن عادلاً مع الجميع — لا تظلم أحداً ولا تسكت عن ظلم تراه ⚖️'},
    en:{title:'Social Justice the Islamic Way',desc:'Islam achieves social justice without crushing the individual. Zakat, waqf, and inheritance are tools for distributing wealth. But Islam respects private property and does not confiscate people\'s money. True justice starts from the heart, not from coercion.',verse:'Indeed, Allah commands justice and excellence',verseRef:'An-Nahl 90',hadith:'Beware of injustice, for it will be darkness on the Day of Judgment — Muslim',action:'Be just today in all your dealings — with friends, family, and colleagues',young:'Islam loves justice! Be fair with everyone — never be unfair to anyone and don\'t stay silent when you see injustice ⚖️'},
    fr:{title:'La Justice Sociale a la Maniere Islamique',desc:'L\'Islam realise la justice sociale sans ecraser l\'individu. La zakat, le waqf et l\'heritage sont des outils pour distribuer la richesse. Mais l\'Islam respecte la propriete privee et ne confisque pas l\'argent des gens. La vraie justice commence par le coeur, pas par la coercition.',verse:'Certes, Allah ordonne la justice et la bienfaisance',verseRef:'An-Nahl 90',hadith:'Gardez-vous de l\'injustice, car elle sera des tenebres le Jour du Jugement — Muslim',action:'Soyez juste aujourd\'hui dans toutes vos relations — avec vos amis, votre famille et vos collegues',young:'L\'Islam aime la justice ! Sois juste avec tout le monde — ne sois jamais injuste et ne te tais pas devant l\'injustice ⚖️'}
  },
  {
    id:5, emoji:'🏡',
    ar:{title:'الملكية الفردية المتوازنة',desc:'الإسلام يعترف بحق الملكية الفردية لكنه يقيّدها بالمسؤولية الاجتماعية. المال مال الله والإنسان مستخلف فيه. لا مصادرة ظالمة ولا جشع بلا حدود. التوازن هو المفتاح.',verse:'وَآتُوهُمْ مِنْ مَالِ اللَّهِ الَّذِي آتَاكُمْ',verseRef:'النور ٣٣',hadith:'إن لنفسك عليك حقاً ولأهلك عليك حقاً — رواه البخاري',action:'استمتع بما تملك لكن لا تنسَ حق الآخرين — تصدق أو ساعد محتاجاً اليوم',young:'يمكنك أن تملك أشياء جميلة! لكن تذكر أن تشارك مع من لا يملك — هكذا يعلمنا الإسلام 🏡'},
    en:{title:'Balanced Private Property',desc:'Islam recognizes the right to private property but restricts it with social responsibility. Wealth belongs to God and humans are its trustees. No unjust confiscation and no greed without limits. Balance is the key.',verse:'And give them from the wealth of Allah which He has given you',verseRef:'An-Nur 33',hadith:'Your body has rights over you and your family has rights over you — Bukhari',action:'Enjoy what you own but don\'t forget the rights of others — give charity or help someone in need today',young:'You can own beautiful things! But remember to share with those who don\'t have — that is what Islam teaches 🏡'},
    fr:{title:'La Propriete Privee Equilibree',desc:'L\'Islam reconnait le droit a la propriete privee mais le restreint par la responsabilite sociale. La richesse appartient a Dieu et les humains en sont les depositaires. Pas de confiscation injuste et pas de cupidite sans limites. L\'equilibre est la cle.',verse:'Et donnez-leur de la richesse d\'Allah qu\'Il vous a donnee',verseRef:'An-Nur 33',hadith:'Ton corps a des droits sur toi et ta famille a des droits sur toi — Bukhari',action:'Profitez de ce que vous possedez mais n\'oubliez pas les droits des autres — donnez la charite ou aidez quelqu\'un dans le besoin aujourd\'hui',young:'Tu peux posseder de belles choses ! Mais rappelle-toi de partager avec ceux qui n\'ont pas — c\'est ce que l\'Islam enseigne 🏡'}
  },
  {
    id:6, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'قيم الأسرة',desc:'الأسرة هي اللبنة الأساسية للمجتمع. الإسلام يحمي الأسرة ويقوّيها. الأب والأم لهما حقوق وواجبات، والأطفال لهم حق الرعاية والتعليم. تفكيك الأسرة يؤدي لانهيار المجتمع كله.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا',verseRef:'الروم ٢١',hadith:'خيركم خيركم لأهله وأنا خيركم لأهلي — رواه الترمذي',action:'اهتم بأسرتك اليوم: قل لوالديك أحبكما، ساعد في البيت، واقضِ وقتاً مع إخوتك',young:'العائلة هي أجمل نعمة! قل لأمك وأبيك: أحبكما كثيراً — وساعد في البيت كل يوم 👨‍👩‍👧‍👦'},
    en:{title:'Family Values',desc:'The family is the fundamental building block of society. Islam protects and strengthens the family. Parents have rights and duties, and children have the right to care and education. Breaking the family leads to the collapse of the entire society.',verse:'And of His signs is that He created for you from yourselves mates that you may find tranquility in them',verseRef:'Ar-Rum 21',hadith:'The best of you is the best to their family, and I am the best to my family — Tirmidhi',action:'Care for your family today: tell your parents you love them, help at home, and spend time with your siblings',young:'Family is the most beautiful blessing! Tell your mom and dad: I love you so much — and help at home every day 👨‍👩‍👧‍👦'},
    fr:{title:'Les Valeurs Familiales',desc:'La famille est la pierre angulaire de la societe. L\'Islam protege et renforce la famille. Les parents ont des droits et des devoirs, et les enfants ont droit aux soins et a l\'education. Briser la famille mene a l\'effondrement de toute la societe.',verse:'Et parmi Ses signes, Il a cree pour vous des epouses tirees de vous-memes pour que vous trouviez la tranquillite aupres d\'elles',verseRef:'Ar-Rum 21',hadith:'Le meilleur d\'entre vous est le meilleur envers sa famille, et je suis le meilleur envers ma famille — Tirmidhi',action:'Prenez soin de votre famille aujourd\'hui : dites a vos parents que vous les aimez, aidez a la maison et passez du temps avec vos freres et soeurs',young:'La famille est la plus belle benediction ! Dis a ta maman et ton papa : je vous aime beaucoup — et aide a la maison chaque jour 👨‍👩‍👧‍👦'}
  },
  {
    id:7, emoji:'🗽',
    ar:{title:'حرية الفكر والاعتقاد',desc:'الإسلام يضمن حرية الفكر والاعتقاد. لا إكراه في الدين. المسلم يدعو بالحكمة والموعظة الحسنة لا بالقوة والإجبار. حرية التفكير تقود إلى إيمان حقيقي وعميق.',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'البقرة ٢٥٦',hadith:'من دعا إلى هدى كان له من الأجر مثل أجور من تبعه — رواه مسلم',action:'احترم آراء الآخرين حتى لو اختلفت معهم — وادعُ بالحكمة والكلمة الطيبة',young:'الإسلام يقول: فكّر بحرية! لكن فكّر بعقلك وقلبك معاً — واحترم أفكار الآخرين 🗽'},
    en:{title:'Freedom of Thought and Belief',desc:'Islam guarantees freedom of thought and belief. There is no compulsion in religion. A Muslim invites with wisdom and good counsel, not with force and coercion. Freedom of thinking leads to genuine and deep faith.',verse:'There shall be no compulsion in religion — the right course has become clear from the wrong',verseRef:'Al-Baqarah 256',hadith:'Whoever calls to guidance will have a reward like those who follow them — Muslim',action:'Respect others\' opinions even if you disagree — invite with wisdom and kind words',young:'Islam says: think freely! But think with your mind and your heart together — and respect others\' ideas 🗽'},
    fr:{title:'La Liberte de Pensee et de Croyance',desc:'L\'Islam garantit la liberte de pensee et de croyance. Il n\'y a pas de contrainte en religion. Le musulman invite avec sagesse et bon conseil, pas avec force et coercition. La liberte de penser mene a une foi veritable et profonde.',verse:'Nulle contrainte en religion — le bon chemin s\'est distingue de l\'egarement',verseRef:'Al-Baqarah 256',hadith:'Quiconque appelle a la guidance aura une recompense comme celle de ceux qui le suivent — Muslim',action:'Respectez les opinions des autres meme si vous n\'etes pas d\'accord — invitez avec sagesse et bonnes paroles',young:'L\'Islam dit : pense librement ! Mais pense avec ton esprit et ton coeur ensemble — et respecte les idees des autres 🗽'}
  },
  {
    id:8, emoji:'🙏',
    ar:{title:'الأخلاق تحتاج إلى الله',desc:'بدون الإيمان بالله تصبح الأخلاق نسبية وتفقد أساسها. من يؤمن بالله يعلم أنه مراقَب فيحسن السلوك حتى في الخلوة. الأخلاق بلا دين كبناء بلا أساس — ينهار عند أول اختبار حقيقي.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَى',verseRef:'النحل ٩٠',hadith:'الإحسان أن تعبد الله كأنك تراه فإن لم تكن تراه فإنه يراك — متفق عليه',action:'تصرف اليوم بأخلاق حسنة حتى لو لم يرك أحد — لأن الله يراك دائماً',young:'كن صادقاً وأميناً حتى لو لم يرك أحد! الله يراك دائماً ويحب الأخلاق الحسنة 🙏'},
    en:{title:'Morality Needs God',desc:'Without faith in God, morality becomes relative and loses its foundation. One who believes in God knows they are watched, so they behave well even in private. Morality without religion is like a building without a foundation — it collapses at the first real test.',verse:'Indeed, Allah commands justice, excellence, and giving to relatives',verseRef:'An-Nahl 90',hadith:'Excellence is to worship Allah as though you see Him, for if you do not see Him, He sees you — Agreed upon',action:'Act with good morals today even if no one sees you — because Allah always sees you',young:'Be honest and trustworthy even if no one sees you! Allah always sees you and loves good character 🙏'},
    fr:{title:'La Moralite a Besoin de Dieu',desc:'Sans la foi en Dieu, la moralite devient relative et perd son fondement. Celui qui croit en Dieu sait qu\'il est observe, alors il se comporte bien meme en prive. La moralite sans religion est comme un batiment sans fondation — il s\'effondre au premier vrai test.',verse:'Certes, Allah ordonne la justice, la bienfaisance et la generosite envers les proches',verseRef:'An-Nahl 90',hadith:'L\'excellence est d\'adorer Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui te voit — Unanimement reconnu',action:'Agissez avec de bonnes moeurs aujourd\'hui meme si personne ne vous voit — car Allah vous voit toujours',young:'Sois honnete et digne de confiance meme si personne ne te voit ! Allah te voit toujours et aime le bon caractere 🙏'}
  },
  {
    id:9, emoji:'📚',
    ar:{title:'دروس سقوط الأنظمة الظالمة',desc:'التاريخ يشهد أن كل نظام قام على الظلم والقهر سقط في النهاية. الأنظمة التي حاربت الدين وسحقت الحريات انهارت من الداخل. القوة وحدها لا تبني حضارة. العدل والإيمان هما أساس البقاء.',verse:'فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا',verseRef:'النمل ٥٢',hadith:'إن الله ليُملي للظالم حتى إذا أخذه لم يفلته — متفق عليه',action:'تعلم من التاريخ: الظلم لا يدوم — كن دائماً في صف الحق والعدل',young:'الظلم لا يستمر أبداً! التاريخ يعلمنا أن العدل ينتصر دائماً في النهاية 📚'},
    en:{title:'Lessons from the Fall of Oppressive Systems',desc:'History testifies that every system built on injustice and oppression eventually fell. Systems that fought religion and crushed freedoms collapsed from within. Power alone does not build civilization. Justice and faith are the foundations of survival.',verse:'So those are their houses fallen into ruin because they wronged',verseRef:'An-Naml 52',hadith:'Indeed, Allah gives respite to the oppressor, but when He seizes them, He does not let them escape — Agreed upon',action:'Learn from history: injustice does not last — always stand on the side of truth and justice',young:'Injustice never lasts! History teaches us that justice always wins in the end 📚'},
    fr:{title:'Lecons de la Chute des Systemes Oppressifs',desc:'L\'histoire temoigne que tout systeme bati sur l\'injustice et l\'oppression a fini par tomber. Les systemes qui ont combattu la religion et ecrase les libertes se sont effondres de l\'interieur. La force seule ne construit pas une civilisation. La justice et la foi sont les fondements de la survie.',verse:'Voila donc leurs maisons tombees en ruines parce qu\'ils ont ete injustes',verseRef:'An-Naml 52',hadith:'Certes, Allah accorde un repit a l\'oppresseur, mais quand Il le saisit, Il ne le laisse pas echapper — Unanimement reconnu',action:'Apprenez de l\'histoire : l\'injustice ne dure pas — soyez toujours du cote de la verite et de la justice',young:'L\'injustice ne dure jamais ! L\'histoire nous enseigne que la justice gagne toujours a la fin 📚'}
  },
  {
    id:10, emoji:'🌿',
    ar:{title:'الطريق الوسط للإسلام',desc:'الإسلام طريق وسط بين التطرف المادي والتطرف الروحي. لا رهبانية تقتل الحياة ولا مادية تقتل الروح. الإسلام يجمع بين الدنيا والآخرة، بين الفرد والمجتمع، بين الحرية والمسؤولية.',verse:'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ١٤٣',hadith:'يسروا ولا تعسروا وبشروا ولا تنفروا — متفق عليه',action:'طبّق الوسطية اليوم: وازن بين دراستك ولعبك، بين عبادتك وراحتك',young:'الإسلام يحب التوازن! ادرس واعبد الله والعب وارتح — كل شيء بتوازن جميل 🌿'},
    en:{title:'Islam\'s Middle Path',desc:'Islam is a middle path between material extremism and spiritual extremism. No monasticism that kills life, and no materialism that kills the spirit. Islam combines this world and the hereafter, the individual and society, freedom and responsibility.',verse:'And thus We have made you a middle nation',verseRef:'Al-Baqarah 143',hadith:'Make things easy and do not make them difficult, give glad tidings and do not repel — Agreed upon',action:'Apply moderation today: balance studying and playing, worship and rest',young:'Islam loves balance! Study, worship Allah, play, and rest — everything in beautiful balance 🌿'},
    fr:{title:'La Voie du Milieu de l\'Islam',desc:'L\'Islam est une voie du milieu entre l\'extremisme materiel et l\'extremisme spirituel. Pas de monachisme qui tue la vie, et pas de materialisme qui tue l\'esprit. L\'Islam combine ce monde et l\'au-dela, l\'individu et la societe, la liberte et la responsabilite.',verse:'Et ainsi Nous avons fait de vous une communaute du juste milieu',verseRef:'Al-Baqarah 143',hadith:'Facilitez et ne compliquez pas, annoncez de bonnes nouvelles et ne repoussez pas — Unanimement reconnu',action:'Appliquez la moderation aujourd\'hui : equilibrez etude et jeu, adoration et repos',young:'L\'Islam aime l\'equilibre ! Etudie, adore Allah, joue et repose-toi — tout en bel equilibre 🌿'}
  },
  {
    id:11, emoji:'🔨',
    ar:{title:'كرامة العمل',desc:'العمل في الإسلام شرف وعبادة. كل عامل يؤدي عمله بإتقان يكون في عبادة. الإسلام يرفض استغلال العامل ويضمن حقه في أجر عادل. النبي ﷺ عمل بيديه وأكل من كسب يده.',verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ',verseRef:'التوبة ١٠٥',hadith:'أعطوا الأجير أجره قبل أن يجف عرقه — رواه ابن ماجه',action:'أتقن عملك اليوم واحترم كل عامل تقابله — فالعمل شرف مهما كان نوعه',young:'كل عمل شريف! احترم كل العاملين — المعلم والطبيب والعامل وعامل النظافة 🔨'},
    en:{title:'Dignity of Work',desc:'Work in Islam is honor and worship. Every worker who does their job with excellence is in worship. Islam rejects exploiting workers and guarantees their right to fair wages. The Prophet (PBUH) worked with his hands and ate from his own earnings.',verse:'And say: Work, for Allah will see your work',verseRef:'At-Tawbah 105',hadith:'Give the worker their wages before their sweat dries — Ibn Majah',action:'Perfect your work today and respect every worker you meet — work is honor regardless of its type',young:'Every job is honorable! Respect all workers — teachers, doctors, builders, and cleaners 🔨'},
    fr:{title:'La Dignite du Travail',desc:'Le travail en Islam est un honneur et une adoration. Chaque travailleur qui fait son travail avec excellence est en adoration. L\'Islam rejette l\'exploitation des travailleurs et garantit leur droit a un salaire equitable. Le Prophete (PSL) a travaille de ses mains et a mange de ses propres gains.',verse:'Et dis : Oeuvrez, car Allah verra votre oeuvre',verseRef:'At-Tawbah 105',hadith:'Donnez au travailleur son salaire avant que sa sueur ne seche — Ibn Majah',action:'Perfectionnez votre travail aujourd\'hui et respectez chaque travailleur que vous rencontrez — le travail est un honneur quel qu\'il soit',young:'Chaque travail est honorable ! Respecte tous les travailleurs — enseignants, medecins, ouvriers et agents de nettoyage 🔨'}
  },
  {
    id:12, emoji:'🎓',
    ar:{title:'غاية التعليم',desc:'التعليم في الإسلام ليس فقط لكسب المال بل لبناء الإنسان الصالح. طلب العلم فريضة على كل مسلم. الغاية هي معرفة الله وخدمة الخلق. التعليم سلاح ضد الجهل والتخلف والانحراف.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً مفيداً اليوم — ليس فقط للامتحان بل لبناء نفسك',young:'التعلم مغامرة رائعة! تعلم شيئاً جديداً كل يوم — اقرأ كتاباً أو اكتشف معلومة 🎓'},
    en:{title:'The Purpose of Education',desc:'Education in Islam is not just for earning money but for building a righteous person. Seeking knowledge is an obligation upon every Muslim. The goal is knowing God and serving creation. Education is a weapon against ignorance, backwardness, and deviation.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new and useful today — not just for exams but for building yourself',young:'Learning is an amazing adventure! Learn something new every day — read a book or discover new information 🎓'},
    fr:{title:'Le But de l\'Education',desc:'L\'education en Islam n\'est pas seulement pour gagner de l\'argent mais pour construire une personne vertueuse. Chercher le savoir est une obligation pour chaque musulman. Le but est de connaitre Dieu et de servir la creation. L\'education est une arme contre l\'ignorance, le retard et la deviation.',verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:'Apprenez quelque chose de nouveau et utile aujourd\'hui — pas seulement pour les examens mais pour vous construire',young:'Apprendre est une aventure incroyable ! Apprends quelque chose de nouveau chaque jour — lis un livre ou decouvre une nouvelle information 🎓'}
  },
  {
    id:13, emoji:'🕊️',
    ar:{title:'العنف ليس الحل',desc:'الإسلام يرفض العنف كأداة لنشر الأفكار. الحوار والإقناع هما الطريق الصحيح. القوة لا تغيّر القلوب بل تولّد الحقد. الإسلام انتشر بالأخلاق والعدل لا بالسيف كما يزعم البعض.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'إن الرفق لا يكون في شيء إلا زانه ولا يُنزع من شيء إلا شانه — رواه مسلم',action:'استخدم الحوار والكلمة الطيبة اليوم بدلاً من العنف أو الصراخ',young:'الكلمة الطيبة أقوى من الصراخ! إذا اختلفت مع أحد، تحدث بهدوء واحترام 🕊️'},
    en:{title:'Violence Is Not the Solution',desc:'Islam rejects violence as a tool for spreading ideas. Dialogue and persuasion are the correct path. Force does not change hearts; it breeds hatred. Islam spread through good character and justice, not by the sword as some claim.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 125',hadith:'Gentleness is not found in anything except that it beautifies it, and it is not removed from anything except that it disfigures it — Muslim',action:'Use dialogue and kind words today instead of violence or shouting',young:'Kind words are stronger than shouting! If you disagree with someone, talk calmly and respectfully 🕊️'},
    fr:{title:'La Violence N\'est Pas la Solution',desc:'L\'Islam rejette la violence comme outil pour repandre les idees. Le dialogue et la persuasion sont le bon chemin. La force ne change pas les coeurs ; elle engendre la haine. L\'Islam s\'est repandu par le bon caractere et la justice, pas par l\'epee comme certains le pretendent.',verse:'Invite au chemin de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 125',hadith:'La douceur ne se trouve en rien sans l\'embellir, et n\'est retiree de rien sans l\'enlaidir — Muslim',action:'Utilisez le dialogue et les bonnes paroles aujourd\'hui au lieu de la violence ou des cris',young:'Les bonnes paroles sont plus fortes que les cris ! Si tu n\'es pas d\'accord avec quelqu\'un, parle calmement et respectueusement 🕊️'}
  },
  {
    id:14, emoji:'🌐',
    ar:{title:'الأخوة الإنسانية الإسلامية',desc:'الإسلام دين عالمي لا عنصري. يجمع بين شعوب مختلفة بلا تفرقة. لا فضل لعربي على أعجمي إلا بالتقوى. الإسلام يبني أخوة حقيقية تتجاوز الحدود والألوان والأعراق.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣',hadith:'لا فضل لعربي على أعجمي إلا بالتقوى — رواه أحمد',action:'تعرف اليوم على شخص من ثقافة مختلفة واحترم اختلافه — التنوع نعمة',young:'الناس كلهم إخوة! لا تفرّق بين أحد بسبب لونه أو لغته — الجميع سواسية عند الله 🌐'},
    en:{title:'Islamic International Brotherhood',desc:'Islam is a universal, not racist, religion. It unites different peoples without discrimination. There is no superiority of an Arab over a non-Arab except through piety. Islam builds real brotherhood that transcends borders, colors, and races.',verse:'O mankind, We created you from male and female and made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 13',hadith:'There is no superiority of an Arab over a non-Arab except through piety — Ahmad',action:'Get to know someone from a different culture today and respect their differences — diversity is a blessing',young:'All people are brothers and sisters! Don\'t treat anyone differently because of their color or language — everyone is equal before Allah 🌐'},
    fr:{title:'La Fraternite Internationale Islamique',desc:'L\'Islam est une religion universelle, pas raciste. Il unit des peuples differents sans discrimination. Il n\'y a pas de superiorite d\'un Arabe sur un non-Arabe sauf par la piete. L\'Islam construit une fraternite reelle qui transcende les frontieres, les couleurs et les races.',verse:'O humanite, Nous vous avons crees d\'un male et d\'une femelle et Nous avons fait de vous des peuples et des tribus pour que vous vous connaissiez',verseRef:'Al-Hujurat 13',hadith:'Il n\'y a pas de superiorite d\'un Arabe sur un non-Arabe sauf par la piete — Ahmad',action:'Faites connaissance avec quelqu\'un d\'une culture differente aujourd\'hui et respectez ses differences — la diversite est une benediction',young:'Tous les gens sont freres et soeurs ! Ne traite personne differemment a cause de sa couleur ou de sa langue — tout le monde est egal devant Allah 🌐'}
  },
  {
    id:15, emoji:'🌟',
    ar:{title:'المستقبل للإيمان',desc:'التاريخ أثبت أن الإيمان أقوى من كل الأنظمة المادية. الشعوب تعود إلى الله حين تجرّب بدائل فاشلة. المستقبل للإسلام لأنه يلبي حاجات الإنسان الحقيقية: الجسد والروح والعقل معاً.',verse:'هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَى وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ',verseRef:'التوبة ٣٣',hadith:'لا تزال طائفة من أمتي ظاهرين على الحق — رواه مسلم',action:'كن واثقاً من دينك وقيمك — وادعُ إليه بالحكمة والقدوة الحسنة',young:'الإيمان بالله أقوى شيء! كن فخوراً بدينك وأخلاقك — المستقبل للمؤمنين الصادقين 🌟'},
    en:{title:'The Future Belongs to Faith',desc:'History has proven that faith is stronger than all material systems. Peoples return to God when they experience failed alternatives. The future belongs to Islam because it fulfills humanity\'s real needs: body, spirit, and mind together.',verse:'It is He who sent His Messenger with guidance and the religion of truth to manifest it over all religion',verseRef:'At-Tawbah 33',hadith:'There will always remain a group from my nation apparent upon the truth — Muslim',action:'Be confident in your religion and values — invite to it with wisdom and good example',young:'Faith in Allah is the strongest thing! Be proud of your religion and morals — the future belongs to sincere believers 🌟'},
    fr:{title:'L\'Avenir Appartient a la Foi',desc:'L\'histoire a prouve que la foi est plus forte que tous les systemes materiels. Les peuples reviennent a Dieu quand ils experimentent des alternatives echouees. L\'avenir appartient a l\'Islam car il repond aux vrais besoins de l\'humanite : corps, esprit et intelligence ensemble.',verse:'C\'est Lui qui a envoye Son Messager avec la guidee et la religion de verite pour la faire prevaloir sur toute religion',verseRef:'At-Tawbah 33',hadith:'Il y aura toujours un groupe de ma communaute apparent sur la verite — Muslim',action:'Soyez confiant dans votre religion et vos valeurs — invitez-y avec sagesse et bon exemple',young:'La foi en Allah est la chose la plus forte ! Sois fier de ta religion et de tes valeurs morales — l\'avenir appartient aux croyants sinceres 🌟'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "فِطْرَتَ اللَّهِ الَّتِي ... النَّاسَ عَلَيْهَا"',opts:['خلق','فطر','هدى','أنشأ'],correct:1,hint:'تتعلق بالطبيعة الأصلية للإنسان',quran:'الروم ٣٠'},
    en:{q:'Complete the verse: "The nature of Allah upon which He ... mankind"',opts:['Created','Originated','Guided','Produced'],correct:1,hint:'It relates to the original nature of humans',quran:'Ar-Rum 30'},
    fr:{q:'Completez le verset : « La nature d\'Allah selon laquelle Il a ... les gens »',opts:['Cree','Dispose','Guide','Produit'],correct:1,hint:'Cela concerne la nature originelle des humains',quran:'Ar-Rum 30'}
  },
  {
    ar:{q:'ما الآية التي تقول "لَا إِكْرَاهَ فِي الدِّينِ"؟',opts:['البقرة ٢٥٥','البقرة ٢٥٦','آل عمران ١٠٠','النساء ١٠'],correct:1,hint:'تأتي بعد آية الكرسي مباشرة',quran:'البقرة ٢٥٦'},
    en:{q:'Which verse says "There shall be no compulsion in religion"?',opts:['Al-Baqarah 255','Al-Baqarah 256','Al Imran 100','An-Nisa 10'],correct:1,hint:'It comes right after Ayat al-Kursi',quran:'Al-Baqarah 256'},
    fr:{q:'Quel verset dit « Nulle contrainte en religion » ?',opts:['Al-Baqarah 255','Al-Baqarah 256','Al Imran 100','An-Nisa 10'],correct:1,hint:'Il vient juste apres Ayat al-Kursi',quran:'Al-Baqarah 256'}
  },
  {
    ar:{q:'أكمل الحديث: "ليس الغنى عن كثرة العرض ولكن الغنى ..."',opts:['غنى المال','غنى العلم','غنى النفس','غنى الصحة'],correct:2,hint:'يتعلق بالقناعة الداخلية',quran:'الحجر ٢٩'},
    en:{q:'Complete the hadith: "Richness is not in having many possessions, but richness is..."',opts:['Richness of money','Richness of knowledge','Richness of the soul','Richness of health'],correct:2,hint:'It relates to inner contentment',quran:'Al-Hijr 29'},
    fr:{q:'Completez le hadith : « La richesse n\'est pas dans l\'abondance des biens, mais la richesse est... »',opts:['La richesse d\'argent','La richesse de savoir','La richesse de l\'ame','La richesse de sante'],correct:2,hint:'Cela concerne le contentement interieur',quran:'Al-Hijr 29'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَقَدْ كَرَّمْنَا ..."',opts:['المسلمين','المؤمنين','بني آدم','الأنبياء'],correct:2,hint:'تتعلق بكرامة كل البشر',quran:'الإسراء ٧٠'},
    en:{q:'Complete the verse: "And We have certainly honored..."',opts:['The Muslims','The believers','The children of Adam','The prophets'],correct:2,hint:'It relates to the dignity of all humans',quran:'Al-Isra 70'},
    fr:{q:'Completez le verset : « Et Nous avons certes honore... »',opts:['Les Musulmans','Les croyants','Les enfants d\'Adam','Les prophetes'],correct:2,hint:'Cela concerne la dignite de tous les humains',quran:'Al-Isra 70'}
  },
  {
    ar:{q:'ما الحديث الذي يأمر بإعطاء العامل حقه فوراً؟',opts:['أعطوه قبل الغروب','أعطوه قبل أن يجف عرقه','أعطوه في نفس اليوم','أعطوه قبل أن يسأل'],correct:1,hint:'يتعلق بسرعة الدفع',quran:'التوبة ١٠٥'},
    en:{q:'Which hadith orders giving the worker their due immediately?',opts:['Before sunset','Before their sweat dries','On the same day','Before they ask'],correct:1,hint:'It relates to speed of payment',quran:'At-Tawbah 105'},
    fr:{q:'Quel hadith ordonne de donner au travailleur son du immediatement ?',opts:['Avant le coucher du soleil','Avant que sa sueur ne seche','Le meme jour','Avant qu\'il ne demande'],correct:1,hint:'Cela concerne la rapidite du paiement',quran:'At-Tawbah 105'}
  },
  {
    ar:{q:'ما معنى "أمة وسطاً" في سورة البقرة؟',opts:['أمة كبيرة','أمة معتدلة','أمة قوية','أمة عالمة'],correct:1,hint:'تصف منهج الإسلام الوسطي',quran:'البقرة ١٤٣'},
    en:{q:'What does "a middle nation" mean in Surah Al-Baqarah?',opts:['A great nation','A moderate nation','A powerful nation','A learned nation'],correct:1,hint:'It describes Islam\'s moderate approach',quran:'Al-Baqarah 143'},
    fr:{q:'Que signifie « une communaute du juste milieu » dans la Sourate Al-Baqarah ?',opts:['Une grande communaute','Une communaute moderee','Une communaute puissante','Une communaute savante'],correct:1,hint:'Cela decrit l\'approche moderee de l\'Islam',quran:'Al-Baqarah 143'}
  },
  {
    ar:{q:'أكمل الحديث: "كل مولود يُولد على ..."',opts:['الإسلام','الإيمان','الفطرة','الخير'],correct:2,hint:'الطبيعة الأصلية للإنسان',quran:'الروم ٣٠'},
    en:{q:'Complete the hadith: "Every child is born upon..."',opts:['Islam','Faith','Fitrah (natural instinct)','Goodness'],correct:2,hint:'The original nature of a human',quran:'Ar-Rum 30'},
    fr:{q:'Completez le hadith : « Chaque enfant nait sur... »',opts:['L\'Islam','La Foi','La Fitrah (instinct naturel)','Le Bien'],correct:2,hint:'La nature originelle d\'un humain',quran:'Ar-Rum 30'}
  },
  {
    ar:{q:'ما الآية التي تأمر بالدعوة بالحكمة والموعظة الحسنة؟',opts:['البقرة ٢٥٦','النحل ١٢٥','آل عمران ١٠٤','الحجرات ١٣'],correct:1,hint:'في سورة النحل',quran:'النحل ١٢٥'},
    en:{q:'Which verse commands inviting with wisdom and good instruction?',opts:['Al-Baqarah 256','An-Nahl 125','Al Imran 104','Al-Hujurat 13'],correct:1,hint:'In Surah An-Nahl',quran:'An-Nahl 125'},
    fr:{q:'Quel verset commande d\'inviter avec sagesse et bonne exhortation ?',opts:['Al-Baqarah 256','An-Nahl 125','Al Imran 104','Al-Hujurat 13'],correct:1,hint:'Dans la Sourate An-Nahl',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'أكمل الحديث: "لا فضل لعربي على أعجمي إلا ب..."',opts:['العلم','المال','التقوى','النسب'],correct:2,hint:'المعيار الحقيقي للتفاضل',quran:'الحجرات ١٣'},
    en:{q:'Complete the hadith: "No Arab has superiority over a non-Arab except through..."',opts:['Knowledge','Wealth','Piety','Lineage'],correct:2,hint:'The true standard of merit',quran:'Al-Hujurat 13'},
    fr:{q:'Completez le hadith : « Pas de superiorite d\'un Arabe sur un non-Arabe sauf par... »',opts:['Le savoir','La richesse','La piete','La lignee'],correct:2,hint:'Le vrai critere de merite',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'ما وصية القرآن في أسلوب الدعوة؟',opts:['بالقوة والسيطرة','بالمال والهدايا','بالحكمة والموعظة الحسنة','بالتخويف والترهيب'],correct:2,hint:'أسلوب راقٍ في التعامل',quran:'النحل ١٢٥'},
    en:{q:'What does the Quran recommend as the method of invitation?',opts:['Force and control','Money and gifts','Wisdom and good instruction','Threats and intimidation'],correct:2,hint:'A refined approach in dealing with others',quran:'An-Nahl 125'},
    fr:{q:'Que recommande le Coran comme methode d\'invitation ?',opts:['Force et controle','Argent et cadeaux','Sagesse et bonne exhortation','Menaces et intimidation'],correct:2,hint:'Une approche raffinee dans les relations',quran:'An-Nahl 125'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, let not our hearts deviate after You have guided us and grant us mercy from You — Al Imran 8'},
    fr:{label:'Dua pour la Fermete',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres nous avoir guides et accorde-nous de Ta part une misericorde — Al Imran 8'} },
  { ar:{label:'دعاء الهداية',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'الفاتحة ٦'},
    en:{label:'Dua for Guidance',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Guide us to the straight path — Al-Fatiha 6'},
    fr:{label:'Dua pour la Guidance',text:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Guide-nous vers le droit chemin — Al-Fatiha 6'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god but Him. I rely on Him and He is Lord of the Great Throne — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui et Il est le Seigneur du Trone immense — At-Tawbah 129'} },
  { ar:{label:'دعاء النصر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Victory',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and plant firmly our feet and give us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour la Victoire',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et donne-nous la victoire — Al-Baqarah 250'} },
  { ar:{label:'دعاء حسن الخاتمة',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'البقرة ٢٠١'},
    en:{label:'Dua for a Good End',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'Our Lord, give us good in this world and good in the Hereafter, and protect us from the Fire — Al-Baqarah 201'},
    fr:{label:'Dua pour une Bonne Fin',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'Notre Seigneur, donne-nous du bien dans ce monde et du bien dans l\'au-dela et protege-nous du Feu — Al-Baqarah 201'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'zahf-xp'; const BADGES_KEY = 'zahf-badges'; const READ_KEY = 'zahf-read'; const STREAK_KEY = 'zahf-streak'; const MODE_KEY = 'zahf-mode'; const QUIZ_BEST_KEY = 'zahf-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) { const read = getReadTraits(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar'; let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean']; const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' }; let currentPrincipleIdx = -1;
function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle; document.getElementById('splashSub').textContent = t.splashSub; document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome; document.getElementById('tabTraits').textContent = t.tabTraits; document.getElementById('tabQuiz').textContent = t.tabQuiz; document.getElementById('tabProgress').textContent = t.tabProgress; document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle; document.getElementById('traitsDesc').textContent = t.traitsDesc; document.getElementById('quizTitle').textContent = t.quizTitle; document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle; document.getElementById('progressDesc').textContent = t.progressDesc; document.getElementById('helpTitle').textContent = t.helpTitle; document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome(); renderTraits(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % TRAITS.length; const trait = TRAITS[dayIdx]; const d = trait[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${trait.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => { const dd = tr[lang]; return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')"><span class="hc-icon">${tr.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang]; const readTraits = getReadTraits(); const container = document.getElementById('traitsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => { const d = tr[lang]; const isRead = readTraits.includes(tr.id); return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})"><span class="trait-num">${tr.id}</span><span class="trait-emoji">${tr.emoji}</span><span class="trait-title">${d.title}</span>${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span></div>
      <div class="trait-body"><div class="trait-inner"><div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button></div></div>
    </div>`; }).join('');
}

function filterTraits(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareTrait(id) { const trait = TRAITS.find(t => t.id === id); if (!trait) return; const d = trait[lang]; const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }
function showQuizQuestion() {
  const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1;
  container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div>
      <div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div></div>`;
}
function answerQuiz(idx) { if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); }); const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); } quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800); }
function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }
function showQuizResult() {
  const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20);
  let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readTraits = getReadTraits(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100);
  document.getElementById('progressContainer').innerHTML = `
    <div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats"><div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'قيمة مقروءة':lang==='fr'?'Valeurs lues':'Values Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div>
    <div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`;
}
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«الإسلام في وجه الزحف الأحمر» كتاب يدافع عن قيم الإسلام في مواجهة الفكر المادي الإلحادي. يبيّن الشيخ الغزالي أن الإسلام يقدم بديلاً حضارياً متكاملاً يحفظ كرامة الإنسان وحريته ويحقق العدالة دون سحق الفرد أو إنكار الروح.', sourcesTitle:'المصادر', sources:['كتاب "الإسلام في وجه الزحف الأحمر" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأحمد'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"Islam Facing the Red Tide" defends Islamic values against materialist atheistic ideology. Sheikh al-Ghazali shows that Islam offers a comprehensive civilizational alternative that preserves human dignity and freedom while achieving justice without crushing the individual or denying the spirit.', sourcesTitle:'Sources', sources:['"Islam Facing the Red Tide" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Ahmad'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'"L\'Islam Face a la Maree Rouge" defend les valeurs islamiques contre l\'ideologie materialiste atheiste. Le Sheikh al-Ghazali montre que l\'Islam offre une alternative civilisationnelle complete qui preserve la dignite humaine et la liberte tout en realisant la justice sans ecraser l\'individu ni nier l\'esprit.', sourcesTitle:'Sources', sources:['"L\'Islam Face a la Maree Rouge" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Ahmad'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "الإسلام في وجه الزحف الأحمر" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ قيمة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},{title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/al-islam-fi-wajh-al-zahf'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"Islam Facing the Red Tide" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 values, interactive quiz, XP and badges system, 2 age modes.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},{title:'🤝 Contributing',body:'GitHub: github.com/abourdim/al-islam-fi-wajh-al-zahf'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"L\'Islam Face a la Maree Rouge" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 valeurs, quiz interactif, systeme XP et badges, 2 modes d\'age.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},{title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/al-islam-fi-wajh-al-zahf'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar: ['📖 اكتشف قيمة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالثبات والهداية','⭐ أكمل ١٥ قيمة لتصبح خبيراً'], en: ['📖 Discover a new value every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for steadfastness','⭐ Complete all 15 values to become an Expert'], fr: ['📖 Decouvrez une nouvelle valeur chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour la fermete','⭐ Completez les 15 valeurs pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join(''); ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-traits'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'traitsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir)); cards[currentPrincipleIdx].classList.add('open'); cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext; let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','traits','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => { document.body.classList.toggle('young-mode', ageMode === 'young'); updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter(); });
