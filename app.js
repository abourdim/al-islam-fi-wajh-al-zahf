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
    traitsDesc: '٢٠ قيمة إسلامية من كتاب الشيخ محمد الغزالي — كل قيمة بآية وحديث وتطبيق عملي',
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
      '٢٠ قيمة من كتاب الإسلام في وجه الزحف الأحمر',
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
    traitsDesc: '20 Islamic values from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
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
      '20 Islamic values from Islam Facing the Red Tide',
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
    traitsDesc: '20 valeurs islamiques du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique',
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
      '20 valeurs islamiques du livre L\'Islam Face a la Maree Rouge',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 ISLAMIC VALUES DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🌅',
    ar:{title:'الإيمان بالله يدحض الإلحاد',
      desc:'الإيمان بالله فطرة في كل إنسان. الكون بتصميمه المذهل يشهد بوجود خالق حكيم. الإلحاد لا يستطيع تفسير أصل الحياة ولا الوعي ولا النظام الكوني. العلم الحقيقي يقود إلى الإيمان لا إلى الإنكار. الشيخ الغزالي يبيّن أن المادية فلسفة عاجزة عن الإجابة على أسئلة الإنسان الكبرى: لماذا وُجدت؟ وإلى أين أذهب؟ وما معنى الحياة؟ كل ذرة في الكون تشهد بإبداع الخالق وعظمته.',
      verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا لَا تَبْدِيلَ لِخَلْقِ اللَّهِ',
      verseRef:'الروم ٣٠',
      hadith:'كل مولود يُولد على الفطرة — متفق عليه',
      action:'تأمل في الكون اليوم: النجوم والجبال والبحار — واسأل: من صمّم كل هذا بهذا الجمال؟',
      young:'الله خلق كل شيء! انظر حولك — الأشجار والنجوم والبحار — كلها تقول: الله موجود! 🌅'},
    en:{title:'Faith in God Refutes Atheism',
      desc:'Faith in God is a natural instinct in every human. The universe with its amazing design testifies to the existence of a wise Creator. Atheism cannot explain the origin of life, consciousness, or cosmic order. True science leads to faith, not denial. Sheikh al-Ghazali shows that materialism is a philosophy incapable of answering humanity\'s great questions: Why do I exist? Where am I going? What is the meaning of life? Every atom in the universe testifies to the Creator\'s brilliance and greatness.',
      verse:'The nature of Allah upon which He created mankind — no change should there be in the creation of Allah',
      verseRef:'Ar-Rum 30',
      hadith:'Every child is born with the natural instinct (fitrah) — Agreed upon',
      action:'Reflect on the universe today: the stars, mountains, and seas — ask: who designed all this with such beauty?',
      young:'Allah created everything! Look around you — trees, stars, and seas — they all say: Allah exists! 🌅'},
    fr:{title:'La Foi en Dieu Refute l\'Atheisme',
      desc:'La foi en Dieu est un instinct naturel en chaque humain. L\'univers avec son design etonnant temoigne de l\'existence d\'un Createur sage. L\'atheisme ne peut expliquer l\'origine de la vie, de la conscience ou de l\'ordre cosmique. La vraie science mene a la foi, pas au deni. Sheikh al-Ghazali montre que le materialisme est incapable de repondre aux grandes questions de l\'humanite : Pourquoi est-ce que j\'existe ? Ou vais-je ? Quel est le sens de la vie ? Chaque atome de l\'univers temoigne de la brillance et de la grandeur du Createur.',
      verse:'La nature d\'Allah selon laquelle Il a cree les gens — pas de changement dans la creation d\'Allah',
      verseRef:'Ar-Rum 30',
      hadith:'Chaque enfant nait avec l\'instinct naturel (fitrah) — Unanimement reconnu',
      action:'Reflechissez a l\'univers aujourd\'hui : les etoiles, les montagnes et les mers — demandez : qui a concu tout cela avec tant de beaute ?',
      young:'Allah a tout cree ! Regarde autour de toi — les arbres, les etoiles et les mers — ils disent tous : Allah existe ! 🌅'}
  },
  {
    id:2, emoji:'✨',
    ar:{title:'الروح أسمى من المادة',
      desc:'الإنسان ليس مجرد آلة مادية. فيه روح ووجدان وضمير. المادية تحوّل الإنسان إلى حيوان يبحث عن الطعام فقط. الإسلام يوازن بين حاجات الجسد وتطلعات الروح. السعادة الحقيقية في الإيمان لا في الاستهلاك. الشيوعية اعتبرت الدين أفيون الشعوب لكنها لم تستطع إشباع ظمأ الإنسان الروحي فانهارت من الداخل. المجتمعات المادية البحتة تعاني من الاكتئاب والانتحار رغم الرفاهية المادية لأنها أهملت البعد الروحي للإنسان.',
      verse:'وَنَفَخْتُ فِيهِ مِنْ رُوحِي',
      verseRef:'الحجر ٢٩',
      hadith:'ليس الغنى عن كثرة العرض ولكن الغنى غنى النفس — متفق عليه',
      action:'خصص وقتاً اليوم لروحك: صلِّ بخشوع، اقرأ القرآن، أو تأمل في نعم الله',
      young:'أنت لست فقط جسداً! عندك قلب يشعر وروح تحب الله — اعتنِ بروحك كما تعتني بجسمك ✨'},
    en:{title:'Spirit Is Higher Than Matter',
      desc:'A human is not just a material machine. There is a spirit, emotions, and conscience. Materialism turns humans into animals seeking only food. Islam balances bodily needs with spiritual aspirations. True happiness lies in faith, not consumption. Communism considered religion the opium of the masses but could not satisfy humanity\'s spiritual thirst and collapsed from within. Purely materialistic societies suffer from depression and suicide despite material prosperity because they neglected the spiritual dimension of the human being.',
      verse:'And I breathed into him of My spirit',
      verseRef:'Al-Hijr 29',
      hadith:'Richness is not in having many possessions, but richness is the richness of the soul — Agreed upon',
      action:'Dedicate time today to your spirit: pray with focus, read Quran, or reflect on Allah\'s blessings',
      young:'You are not just a body! You have a heart that feels and a spirit that loves Allah — take care of your spirit just like your body ✨'},
    fr:{title:'L\'Esprit Est Superieur a la Matiere',
      desc:'L\'humain n\'est pas qu\'une machine materielle. Il y a un esprit, des emotions et une conscience. Le materialisme transforme les humains en animaux ne cherchant que la nourriture. L\'Islam equilibre les besoins du corps avec les aspirations de l\'esprit. Le vrai bonheur reside dans la foi, pas la consommation. Le communisme considerait la religion comme l\'opium du peuple mais n\'a pas pu satisfaire la soif spirituelle de l\'humanite et s\'est effondre de l\'interieur. Les societes purement materialistes souffrent de depression et de suicide malgre la prosperite materielle car elles ont neglige la dimension spirituelle de l\'etre humain.',
      verse:'Et J\'ai insuffle en lui de Mon esprit',
      verseRef:'Al-Hijr 29',
      hadith:'La richesse n\'est pas dans l\'abondance des biens, mais la richesse est la richesse de l\'ame — Unanimement reconnu',
      action:'Consacrez du temps aujourd\'hui a votre esprit : priez avec concentration, lisez le Coran ou reflechissez aux bienfaits d\'Allah',
      young:'Tu n\'es pas qu\'un corps ! Tu as un coeur qui ressent et un esprit qui aime Allah — prends soin de ton esprit comme de ton corps ✨'}
  },
  {
    id:3, emoji:'👑',
    ar:{title:'كرامة الإنسان',
      desc:'الإسلام يكرّم الإنسان بما هو إنسان، بغض النظر عن لونه أو عرقه أو طبقته. لا يجوز استعباد الناس أو إذلالهم. كل إنسان مكرّم لأنه خليفة الله في الأرض. الكرامة حق لكل فرد. الشيوعية زعمت تحرير الإنسان لكنها سحقت كرامته في معسكرات الاعتقال والتجسس على المواطنين وإلغاء حرياتهم الأساسية. الإسلام جعل كرامة الإنسان أصلاً ثابتاً لا يتغير بتغير الأنظمة السياسية.',
      verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',
      verseRef:'الإسراء ٧٠',
      hadith:'الناس سواسية كأسنان المشط — رواه أحمد',
      action:'عامل كل شخص تقابله اليوم باحترام — بغض النظر عن مظهره أو وظيفته أو أصله',
      young:'كل إنسان كريم عند الله! عامل الجميع باحترام — لا تسخر من أحد ولا تنظر لأحد بازدراء 👑'},
    en:{title:'Human Dignity',
      desc:'Islam honors humans as humans, regardless of color, race, or class. Enslaving or humiliating people is forbidden. Every human is honored because they are God\'s vicegerent on earth. Dignity is a right for every individual. Communism claimed to liberate humans but crushed their dignity in labor camps, surveillance of citizens, and elimination of basic freedoms. Islam made human dignity a permanent principle that does not change with changing political systems.',
      verse:'And We have certainly honored the children of Adam',
      verseRef:'Al-Isra 70',
      hadith:'People are equal like the teeth of a comb — Ahmad',
      action:'Treat every person you meet today with respect — regardless of their appearance, job, or origin',
      young:'Every person is honored by Allah! Treat everyone with respect — never mock anyone or look down on anyone 👑'},
    fr:{title:'La Dignite Humaine',
      desc:'L\'Islam honore l\'humain en tant qu\'humain, independamment de sa couleur, race ou classe. Asservir ou humilier les gens est interdit. Chaque humain est honore car il est le vicaire de Dieu sur terre. La dignite est un droit pour chaque individu. Le communisme pretendait liberer les humains mais a ecrase leur dignite dans les camps de travail, la surveillance des citoyens et l\'elimination des libertes fondamentales. L\'Islam a fait de la dignite humaine un principe permanent qui ne change pas avec les systemes politiques.',
      verse:'Et Nous avons certes honore les enfants d\'Adam',
      verseRef:'Al-Isra 70',
      hadith:'Les gens sont egaux comme les dents d\'un peigne — Ahmad',
      action:'Traitez chaque personne que vous rencontrez aujourd\'hui avec respect — peu importe son apparence, son travail ou son origine',
      young:'Chaque personne est honoree par Allah ! Traite tout le monde avec respect — ne te moque jamais de personne 👑'}
  },
  {
    id:4, emoji:'⚖️',
    ar:{title:'العدالة الاجتماعية بالطريقة الإسلامية',
      desc:'الإسلام يحقق العدالة الاجتماعية دون سحق الفرد. الزكاة والوقف والميراث أدوات لتوزيع الثروة. لكن الإسلام يحترم الملكية الفردية ولا يصادر أموال الناس. العدالة الحقيقية تبدأ من القلب لا من القهر. الشيوعية فرضت المساواة بالقوة فأنتجت فقراً شاملاً بدل رخاء شامل. الإسلام يحقق التكافل بالمحبة والتراحم لا بالإكراه والتأميم.',
      verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',
      verseRef:'النحل ٩٠',
      hadith:'اتقوا الظلم فإن الظلم ظلمات يوم القيامة — رواه مسلم',
      action:'كن عادلاً اليوم في كل تعاملاتك — مع أصدقائك وأهلك وزملائك',
      young:'الإسلام يحب العدل! كن عادلاً مع الجميع — لا تظلم أحداً ولا تسكت عن ظلم تراه ⚖️'},
    en:{title:'Social Justice the Islamic Way',
      desc:'Islam achieves social justice without crushing the individual. Zakat, waqf, and inheritance are tools for distributing wealth. But Islam respects private property and does not confiscate people\'s money. True justice starts from the heart, not from coercion. Communism imposed equality by force and produced universal poverty instead of universal prosperity. Islam achieves solidarity through love and mercy, not through compulsion and nationalization.',
      verse:'Indeed, Allah commands justice and excellence',
      verseRef:'An-Nahl 90',
      hadith:'Beware of injustice, for it will be darkness on the Day of Judgment — Muslim',
      action:'Be just today in all your dealings — with friends, family, and colleagues',
      young:'Islam loves justice! Be fair with everyone — never be unfair to anyone and don\'t stay silent when you see injustice ⚖️'},
    fr:{title:'La Justice Sociale a la Maniere Islamique',
      desc:'L\'Islam realise la justice sociale sans ecraser l\'individu. La zakat, le waqf et l\'heritage sont des outils pour distribuer la richesse. Mais l\'Islam respecte la propriete privee et ne confisque pas l\'argent des gens. La vraie justice commence par le coeur, pas par la coercition. Le communisme a impose l\'egalite par la force et a produit une pauvrete universelle au lieu d\'une prosperite universelle. L\'Islam realise la solidarite par l\'amour et la misericorde, pas par la contrainte et la nationalisation.',
      verse:'Certes, Allah ordonne la justice et la bienfaisance',
      verseRef:'An-Nahl 90',
      hadith:'Gardez-vous de l\'injustice, car elle sera des tenebres le Jour du Jugement — Muslim',
      action:'Soyez juste aujourd\'hui dans toutes vos relations — avec vos amis, votre famille et vos collegues',
      young:'L\'Islam aime la justice ! Sois juste avec tout le monde — ne sois jamais injuste et ne te tais pas devant l\'injustice ⚖️'}
  },
  {
    id:5, emoji:'🏡',
    ar:{title:'الملكية الفردية المتوازنة',
      desc:'الإسلام يعترف بحق الملكية الفردية لكنه يقيّدها بالمسؤولية الاجتماعية. المال مال الله والإنسان مستخلف فيه. لا مصادرة ظالمة ولا جشع بلا حدود. التوازن هو المفتاح. الشيوعية ألغت الملكية الفردية تماماً فقتلت الحافز والإبداع عند الإنسان. الإسلام يشجع الكسب الحلال والتملك المشروع مع واجب الزكاة والصدقة لحماية المجتمع من الفقر.',
      verse:'وَآتُوهُمْ مِنْ مَالِ اللَّهِ الَّذِي آتَاكُمْ',
      verseRef:'النور ٣٣',
      hadith:'إن لنفسك عليك حقاً ولأهلك عليك حقاً — رواه البخاري',
      action:'استمتع بما تملك لكن لا تنسَ حق الآخرين — تصدق أو ساعد محتاجاً اليوم',
      young:'يمكنك أن تملك أشياء جميلة! لكن تذكر أن تشارك مع من لا يملك — هكذا يعلمنا الإسلام 🏡'},
    en:{title:'Balanced Private Property',
      desc:'Islam recognizes the right to private property but restricts it with social responsibility. Wealth belongs to God and humans are its trustees. No unjust confiscation and no greed without limits. Balance is the key. Communism abolished private property entirely, killing human incentive and creativity. Islam encourages halal earning and legitimate ownership while requiring zakat and charity to protect society from poverty.',
      verse:'And give them from the wealth of Allah which He has given you',
      verseRef:'An-Nur 33',
      hadith:'Your body has rights over you and your family has rights over you — Bukhari',
      action:'Enjoy what you own but don\'t forget the rights of others — give charity or help someone in need today',
      young:'You can own beautiful things! But remember to share with those who don\'t have — that is what Islam teaches 🏡'},
    fr:{title:'La Propriete Privee Equilibree',
      desc:'L\'Islam reconnait le droit a la propriete privee mais le restreint par la responsabilite sociale. La richesse appartient a Dieu et les humains en sont les depositaires. Pas de confiscation injuste et pas de cupidite sans limites. L\'equilibre est la cle. Le communisme a aboli completement la propriete privee, tuant l\'incitation et la creativite humaines. L\'Islam encourage le gain halal et la propriete legitime tout en exigeant la zakat et la charite pour proteger la societe de la pauvrete.',
      verse:'Et donnez-leur de la richesse d\'Allah qu\'Il vous a donnee',
      verseRef:'An-Nur 33',
      hadith:'Ton corps a des droits sur toi et ta famille a des droits sur toi — Bukhari',
      action:'Profitez de ce que vous possedez mais n\'oubliez pas les droits des autres — donnez la charite ou aidez quelqu\'un dans le besoin aujourd\'hui',
      young:'Tu peux posseder de belles choses ! Mais rappelle-toi de partager avec ceux qui n\'ont pas — c\'est ce que l\'Islam enseigne 🏡'}
  },
  {
    id:6, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'قيم الأسرة',
      desc:'الأسرة هي اللبنة الأساسية للمجتمع. الإسلام يحمي الأسرة ويقوّيها. الأب والأم لهما حقوق وواجبات، والأطفال لهم حق الرعاية والتعليم. تفكيك الأسرة يؤدي لانهيار المجتمع كله. الشيوعية حاربت الأسرة باعتبارها مؤسسة برجوازية وشجعت على تفكيكها فدمّرت النسيج الاجتماعي. الإسلام يبني مجتمعاً متماسكاً على أساس أسر قوية متحابة.',
      verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا',
      verseRef:'الروم ٢١',
      hadith:'خيركم خيركم لأهله وأنا خيركم لأهلي — رواه الترمذي',
      action:'اهتم بأسرتك اليوم: قل لوالديك أحبكما، ساعد في البيت، واقضِ وقتاً مع إخوتك',
      young:'العائلة هي أجمل نعمة! قل لأمك وأبيك: أحبكما كثيراً — وساعد في البيت كل يوم 👨‍👩‍👧‍👦'},
    en:{title:'Family Values',
      desc:'The family is the fundamental building block of society. Islam protects and strengthens the family. Parents have rights and duties, and children have the right to care and education. Breaking the family leads to the collapse of the entire society. Communism fought the family as a bourgeois institution and encouraged its dismantling, destroying the social fabric. Islam builds a cohesive society on the foundation of strong, loving families.',
      verse:'And of His signs is that He created for you from yourselves mates that you may find tranquility in them',
      verseRef:'Ar-Rum 21',
      hadith:'The best of you is the best to their family, and I am the best to my family — Tirmidhi',
      action:'Care for your family today: tell your parents you love them, help at home, and spend time with your siblings',
      young:'Family is the most beautiful blessing! Tell your mom and dad: I love you so much — and help at home every day 👨‍👩‍👧‍👦'},
    fr:{title:'Les Valeurs Familiales',
      desc:'La famille est la pierre angulaire de la societe. L\'Islam protege et renforce la famille. Les parents ont des droits et des devoirs, et les enfants ont droit aux soins et a l\'education. Briser la famille mene a l\'effondrement de toute la societe. Le communisme a combattu la famille comme une institution bourgeoise et a encourage son demantelement, detruisant le tissu social. L\'Islam construit une societe cohesive sur la base de familles fortes et aimantes.',
      verse:'Et parmi Ses signes, Il a cree pour vous des epouses tirees de vous-memes pour que vous trouviez la tranquillite aupres d\'elles',
      verseRef:'Ar-Rum 21',
      hadith:'Le meilleur d\'entre vous est le meilleur envers sa famille, et je suis le meilleur envers ma famille — Tirmidhi',
      action:'Prenez soin de votre famille aujourd\'hui : dites a vos parents que vous les aimez, aidez a la maison et passez du temps avec vos freres et soeurs',
      young:'La famille est la plus belle benediction ! Dis a ta maman et ton papa : je vous aime beaucoup — et aide a la maison chaque jour 👨‍👩‍👧‍👦'}
  },
  {
    id:7, emoji:'🗽',
    ar:{title:'حرية الفكر والاعتقاد',
      desc:'الإسلام يضمن حرية الفكر والاعتقاد. لا إكراه في الدين. المسلم يدعو بالحكمة والموعظة الحسنة لا بالقوة والإجبار. حرية التفكير تقود إلى إيمان حقيقي وعميق. الشيوعية فرضت الإلحاد بالقوة وحاربت كل من يمارس دينه فخلقت مجتمعات خائفة منافقة. الإسلام يؤمن بأن الإيمان الحقيقي لا يأتي إلا بالاقتناع الحر.',
      verse:'لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',
      verseRef:'البقرة ٢٥٦',
      hadith:'من دعا إلى هدى كان له من الأجر مثل أجور من تبعه — رواه مسلم',
      action:'احترم آراء الآخرين حتى لو اختلفت معهم — وادعُ بالحكمة والكلمة الطيبة',
      young:'الإسلام يقول: فكّر بحرية! لكن فكّر بعقلك وقلبك معاً — واحترم أفكار الآخرين 🗽'},
    en:{title:'Freedom of Thought and Belief',
      desc:'Islam guarantees freedom of thought and belief. There is no compulsion in religion. A Muslim invites with wisdom and good counsel, not with force and coercion. Freedom of thinking leads to genuine and deep faith. Communism imposed atheism by force and persecuted anyone practicing their religion, creating fearful and hypocritical societies. Islam believes that true faith can only come through free conviction.',
      verse:'There shall be no compulsion in religion — the right course has become clear from the wrong',
      verseRef:'Al-Baqarah 256',
      hadith:'Whoever calls to guidance will have a reward like those who follow them — Muslim',
      action:'Respect others\' opinions even if you disagree — invite with wisdom and kind words',
      young:'Islam says: think freely! But think with your mind and your heart together — and respect others\' ideas 🗽'},
    fr:{title:'La Liberte de Pensee et de Croyance',
      desc:'L\'Islam garantit la liberte de pensee et de croyance. Il n\'y a pas de contrainte en religion. Le musulman invite avec sagesse et bon conseil, pas avec force et coercition. La liberte de penser mene a une foi veritable et profonde. Le communisme a impose l\'atheisme par la force et a persecute quiconque pratiquait sa religion, creant des societes craintives et hypocrites. L\'Islam croit que la vraie foi ne peut venir que par la conviction libre.',
      verse:'Nulle contrainte en religion — le bon chemin s\'est distingue de l\'egarement',
      verseRef:'Al-Baqarah 256',
      hadith:'Quiconque appelle a la guidance aura une recompense comme celle de ceux qui le suivent — Muslim',
      action:'Respectez les opinions des autres meme si vous n\'etes pas d\'accord — invitez avec sagesse et bonnes paroles',
      young:'L\'Islam dit : pense librement ! Mais pense avec ton esprit et ton coeur ensemble — et respecte les idees des autres 🗽'}
  },
  {
    id:8, emoji:'🙏',
    ar:{title:'الأخلاق تحتاج إلى الله',
      desc:'بدون الإيمان بالله تصبح الأخلاق نسبية وتفقد أساسها. من يؤمن بالله يعلم أنه مراقَب فيحسن السلوك حتى في الخلوة. الأخلاق بلا دين كبناء بلا أساس — ينهار عند أول اختبار حقيقي. الأنظمة الشيوعية التي أزالت الدين شهدت أعلى معدلات الفساد والرشوة والكذب لأن الإنسان بلا رقيب إلهي يفقد الحافز الأخلاقي الحقيقي.',
      verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَى',
      verseRef:'النحل ٩٠',
      hadith:'الإحسان أن تعبد الله كأنك تراه فإن لم تكن تراه فإنه يراك — متفق عليه',
      action:'تصرف اليوم بأخلاق حسنة حتى لو لم يرك أحد — لأن الله يراك دائماً',
      young:'كن صادقاً وأميناً حتى لو لم يرك أحد! الله يراك دائماً ويحب الأخلاق الحسنة 🙏'},
    en:{title:'Morality Needs God',
      desc:'Without faith in God, morality becomes relative and loses its foundation. One who believes in God knows they are watched, so they behave well even in private. Morality without religion is like a building without a foundation — it collapses at the first real test. Communist systems that removed religion witnessed the highest rates of corruption, bribery, and dishonesty because a person without divine oversight loses the true moral incentive.',
      verse:'Indeed, Allah commands justice, excellence, and giving to relatives',
      verseRef:'An-Nahl 90',
      hadith:'Excellence is to worship Allah as though you see Him, for if you do not see Him, He sees you — Agreed upon',
      action:'Act with good morals today even if no one sees you — because Allah always sees you',
      young:'Be honest and trustworthy even if no one sees you! Allah always sees you and loves good character 🙏'},
    fr:{title:'La Moralite a Besoin de Dieu',
      desc:'Sans la foi en Dieu, la moralite devient relative et perd son fondement. Celui qui croit en Dieu sait qu\'il est observe, alors il se comporte bien meme en prive. La moralite sans religion est comme un batiment sans fondation — il s\'effondre au premier vrai test. Les systemes communistes qui ont elimine la religion ont connu les plus hauts taux de corruption, de pots-de-vin et de malhonnetete car une personne sans surveillance divine perd la veritable motivation morale.',
      verse:'Certes, Allah ordonne la justice, la bienfaisance et la generosite envers les proches',
      verseRef:'An-Nahl 90',
      hadith:'L\'excellence est d\'adorer Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui te voit — Unanimement reconnu',
      action:'Agissez avec de bonnes moeurs aujourd\'hui meme si personne ne vous voit — car Allah vous voit toujours',
      young:'Sois honnete et digne de confiance meme si personne ne te voit ! Allah te voit toujours et aime le bon caractere 🙏'}
  },
  {
    id:9, emoji:'📚',
    ar:{title:'دروس سقوط الأنظمة الظالمة',
      desc:'التاريخ يشهد أن كل نظام قام على الظلم والقهر سقط في النهاية. الأنظمة التي حاربت الدين وسحقت الحريات انهارت من الداخل. القوة وحدها لا تبني حضارة. العدل والإيمان هما أساس البقاء. سقوط الاتحاد السوفيتي عام ١٩٩١ كان أكبر دليل على أن الأنظمة المادية الملحدة محكومة بالفشل مهما بدت قوية.',
      verse:'فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا',
      verseRef:'النمل ٥٢',
      hadith:'إن الله ليُملي للظالم حتى إذا أخذه لم يفلته — متفق عليه',
      action:'تعلم من التاريخ: الظلم لا يدوم — كن دائماً في صف الحق والعدل',
      young:'الظلم لا يستمر أبداً! التاريخ يعلمنا أن العدل ينتصر دائماً في النهاية 📚'},
    en:{title:'Lessons from the Fall of Oppressive Systems',
      desc:'History testifies that every system built on injustice and oppression eventually fell. Systems that fought religion and crushed freedoms collapsed from within. Power alone does not build civilization. Justice and faith are the foundations of survival. The fall of the Soviet Union in 1991 was the greatest proof that materialist atheist systems are doomed to failure no matter how powerful they appear.',
      verse:'So those are their houses fallen into ruin because they wronged',
      verseRef:'An-Naml 52',
      hadith:'Indeed, Allah gives respite to the oppressor, but when He seizes them, He does not let them escape — Agreed upon',
      action:'Learn from history: injustice does not last — always stand on the side of truth and justice',
      young:'Injustice never lasts! History teaches us that justice always wins in the end 📚'},
    fr:{title:'Lecons de la Chute des Systemes Oppressifs',
      desc:'L\'histoire temoigne que tout systeme bati sur l\'injustice et l\'oppression a fini par tomber. Les systemes qui ont combattu la religion et ecrase les libertes se sont effondres de l\'interieur. La force seule ne construit pas une civilisation. La justice et la foi sont les fondements de la survie. La chute de l\'Union Sovietique en 1991 fut la plus grande preuve que les systemes materialistes athees sont voues a l\'echec, peu importe leur apparente puissance.',
      verse:'Voila donc leurs maisons tombees en ruines parce qu\'ils ont ete injustes',
      verseRef:'An-Naml 52',
      hadith:'Certes, Allah accorde un repit a l\'oppresseur, mais quand Il le saisit, Il ne le laisse pas echapper — Unanimement reconnu',
      action:'Apprenez de l\'histoire : l\'injustice ne dure pas — soyez toujours du cote de la verite et de la justice',
      young:'L\'injustice ne dure jamais ! L\'histoire nous enseigne que la justice gagne toujours a la fin 📚'}
  },
  {
    id:10, emoji:'🌿',
    ar:{title:'الطريق الوسط للإسلام',
      desc:'الإسلام طريق وسط بين التطرف المادي والتطرف الروحي. لا رهبانية تقتل الحياة ولا مادية تقتل الروح. الإسلام يجمع بين الدنيا والآخرة، بين الفرد والمجتمع، بين الحرية والمسؤولية. الشيوعية تطرفت في المادية والرأسمالية تطرفت في الفردية — الإسلام وحده قدّم نموذجاً وسطياً متوازناً يحترم كل أبعاد الإنسان.',
      verse:'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',
      verseRef:'البقرة ١٤٣',
      hadith:'يسروا ولا تعسروا وبشروا ولا تنفروا — متفق عليه',
      action:'طبّق الوسطية اليوم: وازن بين دراستك ولعبك، بين عبادتك وراحتك',
      young:'الإسلام يحب التوازن! ادرس واعبد الله والعب وارتح — كل شيء بتوازن جميل 🌿'},
    en:{title:'Islam\'s Middle Path',desc:'Islam is a middle path between material extremism and spiritual extremism. No monasticism that kills life, and no materialism that kills the spirit. Islam combines this world and the hereafter, the individual and society, freedom and responsibility.',verse:'And thus We have made you a middle nation',verseRef:'Al-Baqarah 143',hadith:'Make things easy and do not make them difficult, give glad tidings and do not repel — Agreed upon',action:'Apply moderation today: balance studying and playing, worship and rest',young:'Islam loves balance! Study, worship Allah, play, and rest — everything in beautiful balance 🌿'},
    fr:{title:'La Voie du Milieu de l\'Islam',desc:'L\'Islam est une voie du milieu entre l\'extremisme materiel et l\'extremisme spirituel. Pas de monachisme qui tue la vie, et pas de materialisme qui tue l\'esprit. L\'Islam combine ce monde et l\'au-dela, l\'individu et la societe, la liberte et la responsabilite.',verse:'Et ainsi Nous avons fait de vous une communaute du juste milieu',verseRef:'Al-Baqarah 143',hadith:'Facilitez et ne compliquez pas, annoncez de bonnes nouvelles et ne repoussez pas — Unanimement reconnu',action:'Appliquez la moderation aujourd\'hui : equilibrez etude et jeu, adoration et repos',young:'L\'Islam aime l\'equilibre ! Etudie, adore Allah, joue et repose-toi — tout en bel equilibre 🌿'}
  },
  {
    id:11, emoji:'🔨',
    ar:{title:'كرامة العمل',
      desc:'العمل في الإسلام شرف وعبادة. كل عامل يؤدي عمله بإتقان يكون في عبادة. الإسلام يرفض استغلال العامل ويضمن حقه في أجر عادل. النبي ﷺ عمل بيديه وأكل من كسب يده. الشيوعية زعمت تحرير العامل لكنها حوّلته إلى عبد للدولة بلا حقوق حقيقية. الإسلام يكرّم كل عمل شريف ويجعل الإتقان عبادة.',
      verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ',
      verseRef:'التوبة ١٠٥',
      hadith:'أعطوا الأجير أجره قبل أن يجف عرقه — رواه ابن ماجه',
      action:'أتقن عملك اليوم واحترم كل عامل تقابله — فالعمل شرف مهما كان نوعه',
      young:'كل عمل شريف! احترم كل العاملين — المعلم والطبيب والعامل وعامل النظافة 🔨'},
    en:{title:'Dignity of Work',
      desc:'Work in Islam is honor and worship. Every worker who does their job with excellence is in worship. Islam rejects exploiting workers and guarantees their right to fair wages. The Prophet (PBUH) worked with his hands and ate from his own earnings. Communism claimed to liberate the worker but turned them into a slave of the state with no real rights. Islam honors every honest profession and makes excellence in work an act of worship.',
      verse:'And say: Work, for Allah will see your work',
      verseRef:'At-Tawbah 105',
      hadith:'Give the worker their wages before their sweat dries — Ibn Majah',
      action:'Perfect your work today and respect every worker you meet — work is honor regardless of its type',
      young:'Every job is honorable! Respect all workers — teachers, doctors, builders, and cleaners 🔨'},
    fr:{title:'La Dignite du Travail',
      desc:'Le travail en Islam est un honneur et une adoration. Chaque travailleur qui fait son travail avec excellence est en adoration. L\'Islam rejette l\'exploitation des travailleurs et garantit leur droit a un salaire equitable. Le Prophete (PSL) a travaille de ses mains et a mange de ses propres gains. Le communisme pretendait liberer le travailleur mais l\'a transforme en esclave de l\'Etat sans droits reels. L\'Islam honore chaque profession honnete et fait de l\'excellence au travail un acte d\'adoration.',
      verse:'Et dis : Oeuvrez, car Allah verra votre oeuvre',
      verseRef:'At-Tawbah 105',
      hadith:'Donnez au travailleur son salaire avant que sa sueur ne seche — Ibn Majah',
      action:'Perfectionnez votre travail aujourd\'hui et respectez chaque travailleur que vous rencontrez — le travail est un honneur quel qu\'il soit',
      young:'Chaque travail est honorable ! Respecte tous les travailleurs — enseignants, medecins, ouvriers et agents de nettoyage 🔨'}
  },
  {
    id:12, emoji:'🎓',
    ar:{title:'غاية التعليم',
      desc:'التعليم في الإسلام ليس فقط لكسب المال بل لبناء الإنسان الصالح. طلب العلم فريضة على كل مسلم. الغاية هي معرفة الله وخدمة الخلق. التعليم سلاح ضد الجهل والتخلف والانحراف. التعليم الشيوعي كان أداة لغسل الأدمغة وتلقين الأيديولوجيا بينما التعليم الإسلامي يبني العقل الناقد والشخصية المتكاملة.',
      verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',
      verseRef:'الزمر ٩',
      hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',
      action:'تعلم شيئاً جديداً مفيداً اليوم — ليس فقط للامتحان بل لبناء نفسك',
      young:'التعلم مغامرة رائعة! تعلم شيئاً جديداً كل يوم — اقرأ كتاباً أو اكتشف معلومة 🎓'},
    en:{title:'The Purpose of Education',
      desc:'Education in Islam is not just for earning money but for building a righteous person. Seeking knowledge is an obligation upon every Muslim. The goal is knowing God and serving creation. Education is a weapon against ignorance, backwardness, and deviation. Communist education was a tool for brainwashing and ideological indoctrination, while Islamic education builds critical thinking and a well-rounded personality.',
      verse:'Say: Are those who know equal to those who do not know?',
      verseRef:'Az-Zumar 9',
      hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',
      action:'Learn something new and useful today — not just for exams but for building yourself',
      young:'Learning is an amazing adventure! Learn something new every day — read a book or discover new information 🎓'},
    fr:{title:'Le But de l\'Education',
      desc:'L\'education en Islam n\'est pas seulement pour gagner de l\'argent mais pour construire une personne vertueuse. Chercher le savoir est une obligation pour chaque musulman. Le but est de connaitre Dieu et de servir la creation. L\'education est une arme contre l\'ignorance, le retard et la deviation. L\'education communiste etait un outil de lavage de cerveau et d\'endoctrinement ideologique, tandis que l\'education islamique construit la pensee critique et une personnalite equilibree.',
      verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',
      verseRef:'Az-Zumar 9',
      hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',
      action:'Apprenez quelque chose de nouveau et utile aujourd\'hui — pas seulement pour les examens mais pour vous construire',
      young:'Apprendre est une aventure incroyable ! Apprends quelque chose de nouveau chaque jour — lis un livre ou decouvre une nouvelle information 🎓'}
  },
  {
    id:13, emoji:'🕊️',
    ar:{title:'العنف ليس الحل',
      desc:'الإسلام يرفض العنف كأداة لنشر الأفكار. الحوار والإقناع هما الطريق الصحيح. القوة لا تغيّر القلوب بل تولّد الحقد. الإسلام انتشر بالأخلاق والعدل لا بالسيف كما يزعم البعض. الثورات الشيوعية استخدمت العنف المنظم لفرض أيديولوجيتها وقتلت الملايين في سبيل ذلك. الإسلام يؤمن بأن تغيير القلوب يكون بالحكمة والرحمة لا بالقوة والإرهاب.',
      verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',
      verseRef:'النحل ١٢٥',
      hadith:'إن الرفق لا يكون في شيء إلا زانه ولا يُنزع من شيء إلا شانه — رواه مسلم',
      action:'استخدم الحوار والكلمة الطيبة اليوم بدلاً من العنف أو الصراخ',
      young:'الكلمة الطيبة أقوى من الصراخ! إذا اختلفت مع أحد، تحدث بهدوء واحترام 🕊️'},
    en:{title:'Violence Is Not the Solution',
      desc:'Islam rejects violence as a tool for spreading ideas. Dialogue and persuasion are the correct path. Force does not change hearts; it breeds hatred. Islam spread through good character and justice, not by the sword as some claim. Communist revolutions used organized violence to impose their ideology and killed millions in the process. Islam believes that changing hearts is achieved through wisdom and mercy, not through force and terror.',
      verse:'Invite to the way of your Lord with wisdom and good instruction',
      verseRef:'An-Nahl 125',
      hadith:'Gentleness is not found in anything except that it beautifies it, and it is not removed from anything except that it disfigures it — Muslim',
      action:'Use dialogue and kind words today instead of violence or shouting',
      young:'Kind words are stronger than shouting! If you disagree with someone, talk calmly and respectfully 🕊️'},
    fr:{title:'La Violence N\'est Pas la Solution',
      desc:'L\'Islam rejette la violence comme outil pour repandre les idees. Le dialogue et la persuasion sont le bon chemin. La force ne change pas les coeurs ; elle engendre la haine. L\'Islam s\'est repandu par le bon caractere et la justice, pas par l\'epee comme certains le pretendent. Les revolutions communistes ont utilise la violence organisee pour imposer leur ideologie et ont tue des millions de personnes. L\'Islam croit que changer les coeurs se fait par la sagesse et la misericorde, pas par la force et la terreur.',
      verse:'Invite au chemin de ton Seigneur par la sagesse et la bonne exhortation',
      verseRef:'An-Nahl 125',
      hadith:'La douceur ne se trouve en rien sans l\'embellir, et n\'est retiree de rien sans l\'enlaidir — Muslim',
      action:'Utilisez le dialogue et les bonnes paroles aujourd\'hui au lieu de la violence ou des cris',
      young:'Les bonnes paroles sont plus fortes que les cris ! Si tu n\'es pas d\'accord avec quelqu\'un, parle calmement et respectueusement 🕊️'}
  },
  {
    id:14, emoji:'🌐',
    ar:{title:'الأخوة الإنسانية الإسلامية',
      desc:'الإسلام دين عالمي لا عنصري. يجمع بين شعوب مختلفة بلا تفرقة. لا فضل لعربي على أعجمي إلا بالتقوى. الإسلام يبني أخوة حقيقية تتجاوز الحدود والألوان والأعراق. الحج أكبر مؤتمر عالمي يجتمع فيه ملايين المسلمين من كل الأعراق والألوان في صعيد واحد دليلاً على المساواة الحقيقية.',
      verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
      verseRef:'الحجرات ١٣',
      hadith:'لا فضل لعربي على أعجمي إلا بالتقوى — رواه أحمد',
      action:'تعرف اليوم على شخص من ثقافة مختلفة واحترم اختلافه — التنوع نعمة',
      young:'الناس كلهم إخوة! لا تفرّق بين أحد بسبب لونه أو لغته — الجميع سواسية عند الله 🌐'},
    en:{title:'Islamic International Brotherhood',
      desc:'Islam is a universal, not racist, religion. It unites different peoples without discrimination. There is no superiority of an Arab over a non-Arab except through piety. Islam builds real brotherhood that transcends borders, colors, and races. Hajj is the greatest global gathering where millions of Muslims from every race and color meet on equal ground, proof of true equality.',
      verse:'O mankind, We created you from male and female and made you peoples and tribes that you may know one another',
      verseRef:'Al-Hujurat 13',
      hadith:'There is no superiority of an Arab over a non-Arab except through piety — Ahmad',
      action:'Get to know someone from a different culture today and respect their differences — diversity is a blessing',
      young:'All people are brothers and sisters! Don\'t treat anyone differently because of their color or language — everyone is equal before Allah 🌐'},
    fr:{title:'La Fraternite Internationale Islamique',
      desc:'L\'Islam est une religion universelle, pas raciste. Il unit des peuples differents sans discrimination. Il n\'y a pas de superiorite d\'un Arabe sur un non-Arabe sauf par la piete. L\'Islam construit une fraternite reelle qui transcende les frontieres, les couleurs et les races. Le Hajj est le plus grand rassemblement mondial ou des millions de musulmans de toutes races se retrouvent sur un pied d\'egalite, preuve de la veritable egalite.',
      verse:'O humanite, Nous vous avons crees d\'un male et d\'une femelle et Nous avons fait de vous des peuples et des tribus pour que vous vous connaissiez',
      verseRef:'Al-Hujurat 13',
      hadith:'Il n\'y a pas de superiorite d\'un Arabe sur un non-Arabe sauf par la piete — Ahmad',
      action:'Faites connaissance avec quelqu\'un d\'une culture differente aujourd\'hui et respectez ses differences — la diversite est une benediction',
      young:'Tous les gens sont freres et soeurs ! Ne traite personne differemment a cause de sa couleur ou de sa langue — tout le monde est egal devant Allah 🌐'}
  },
  {
    id:15, emoji:'🌟',
    ar:{title:'المستقبل للإيمان',
      desc:'التاريخ أثبت أن الإيمان أقوى من كل الأنظمة المادية. الشعوب تعود إلى الله حين تجرّب بدائل فاشلة. المستقبل للإسلام لأنه يلبي حاجات الإنسان الحقيقية: الجسد والروح والعقل معاً. بعد سقوط الشيوعية عاد ملايين الناس في روسيا وآسيا الوسطى إلى الإسلام والمسيحية دليلاً على أن الفطرة الإنسانية لا تُقمع إلى الأبد.',
      verse:'هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَى وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ',
      verseRef:'التوبة ٣٣',
      hadith:'لا تزال طائفة من أمتي ظاهرين على الحق — رواه مسلم',
      action:'كن واثقاً من دينك وقيمك — وادعُ إليه بالحكمة والقدوة الحسنة',
      young:'الإيمان بالله أقوى شيء! كن فخوراً بدينك وأخلاقك — المستقبل للمؤمنين الصادقين 🌟'},
    en:{title:'The Future Belongs to Faith',
      desc:'History has proven that faith is stronger than all material systems. Peoples return to God when they experience failed alternatives. The future belongs to Islam because it fulfills humanity\'s real needs: body, spirit, and mind together. After the fall of communism, millions in Russia and Central Asia returned to Islam and Christianity, proof that human nature cannot be suppressed forever.',
      verse:'It is He who sent His Messenger with guidance and the religion of truth to manifest it over all religion',
      verseRef:'At-Tawbah 33',
      hadith:'There will always remain a group from my nation apparent upon the truth — Muslim',
      action:'Be confident in your religion and values — invite to it with wisdom and good example',
      young:'Faith in Allah is the strongest thing! Be proud of your religion and morals — the future belongs to sincere believers 🌟'},
    fr:{title:'L\'Avenir Appartient a la Foi',
      desc:'L\'histoire a prouve que la foi est plus forte que tous les systemes materiels. Les peuples reviennent a Dieu quand ils experimentent des alternatives echouees. L\'avenir appartient a l\'Islam car il repond aux vrais besoins de l\'humanite : corps, esprit et intelligence ensemble. Apres la chute du communisme, des millions de personnes en Russie et en Asie centrale sont revenues a l\'Islam et au christianisme, preuve que la nature humaine ne peut etre reprimee eternellement.',
      verse:'C\'est Lui qui a envoye Son Messager avec la guidee et la religion de verite pour la faire prevaloir sur toute religion',
      verseRef:'At-Tawbah 33',
      hadith:'Il y aura toujours un groupe de ma communaute apparent sur la verite — Muslim',
      action:'Soyez confiant dans votre religion et vos valeurs — invitez-y avec sagesse et bon exemple',
      young:'La foi en Allah est la chose la plus forte ! Sois fier de ta religion et de tes valeurs morales — l\'avenir appartient aux croyants sinceres 🌟'}
  },
  {
    id:16, emoji:'🛡️',
    ar:{title:'حقوق الإنسان في الإسلام مقابل الماركسية',desc:'يؤكد الغزالي في "الإسلام في وجه الزحف الأحمر": الإسلام كفل حقوق الإنسان قبل الإعلان العالمي بأربعة عشر قرناً. حق الحياة والكرامة والملكية والتعبير والعدالة مصونة في الشريعة. الماركسية سحقت الفرد لصالح الدولة وحوّلت الإنسان إلى ترس في آلة الإنتاج. الإسلام يوازن بين حقوق الفرد وحقوق المجتمع دون طغيان أحدهما على الآخر. خطبة الوداع كانت أول وثيقة حقوقية شاملة في التاريخ البشري.',verse:'مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',verseRef:'المائدة ٣٢',hadith:'إن دماءكم وأموالكم وأعراضكم عليكم حرام — خطبة الوداع',action:'اقرأ عن حقوق الإنسان في خطبة الوداع وقارنها بالمواثيق الحديثة — ستجد أن الإسلام سبقها بقرون',young:'الإسلام حمى حقوقك قبل أن يولد أي قانون حديث! تعلم عن حقوقك في الإسلام 🛡️'},
    en:{title:'Human Rights: Islam vs Marxism',desc:'Al-Ghazali affirms in "Islam Facing the Red Tide": Islam guaranteed human rights fourteen centuries before the Universal Declaration. The right to life, dignity, property, expression, and justice are protected in Shariah. Marxism crushed the individual for the sake of the state and turned humans into cogs in the production machine. Islam balances individual rights and community rights without either dominating the other. The Farewell Sermon was the first comprehensive human rights document in human history.',verse:'Whoever kills a soul unless for a soul or for corruption in the land, it is as if he had slain all mankind',verseRef:'Al-Maidah 32',hadith:'Your blood, your wealth, and your honor are sacred — Farewell Sermon',action:'Read about human rights in the Farewell Sermon and compare them with modern charters — you will find Islam preceded them by centuries',young:'Islam protected your rights before any modern law was born! Learn about your rights in Islam 🛡️'},
    fr:{title:'Droits de l\'Homme : Islam vs Marxisme',desc:'L\'Islam a garanti les droits de l\'homme quatorze siecles avant la Declaration Universelle. Le droit a la vie, a la dignite, a la propriete, a l\'expression et a la justice sont proteges par la Charia. Le marxisme a ecrase l\'individu au profit de l\'Etat et a transforme les humains en rouages dans la machine de production. L\'Islam equilibre les droits individuels et communautaires sans que l\'un domine l\'autre. Le Sermon d\'Adieu fut le premier document complet des droits de l\'homme dans l\'histoire.',verse:'Quiconque tue une ame sans raison ou corruption sur terre, c\'est comme s\'il avait tue l\'humanite entiere',verseRef:'Al-Maidah 32',hadith:'Votre sang, vos biens et votre honneur sont sacres — Sermon d\'Adieu',action:'Lisez les droits de l\'homme dans le Sermon d\'Adieu et comparez-les aux chartes modernes — vous trouverez que l\'Islam les a precedes de siecles',young:'L\'Islam a protege tes droits avant toute loi moderne ! Apprends tes droits en Islam 🛡️'}
  },
  {
    id:17, emoji:'🎨',
    ar:{title:'الفن والجمال في الإسلام',desc:'يؤكد الغزالي في "الإسلام في وجه الزحف الأحمر": الإسلام لا يعادي الفن والجمال بل يرى أن الله جميل يحب الجمال. الخط العربي والزخرفة والعمارة الإسلامية شواهد على إبداع المسلمين. الشيوعية حوّلت الفن إلى أداة دعاية للدولة وقتلت الإبداع الفردي. الإسلام يحرر الفنان ويوجهه نحو الجمال الذي يسمو بالنفس. حضارة الأندلس قدّمت للعالم روائع فنية لا تزال تبهر البشرية حتى اليوم. الفن الإسلامي يعبّر عن التوحيد والتناسق والانسجام الكوني.',verse:'إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَهَا',verseRef:'الكهف ٧',hadith:'إن الله جميل يحب الجمال — رواه مسلم',action:'زُر متحفاً أو معرضاً للفن الإسلامي أو ابحث عنه على الإنترنت — واكتشف عظمة الإبداع الإسلامي',young:'الفن الإسلامي مذهل! اكتشف جمال الخط العربي والزخرفة — وارسم شيئاً جميلاً اليوم 🎨'},
    en:{title:'Art and Beauty in Islam',desc:'Al-Ghazali affirms in "Islam Facing the Red Tide": Islam does not oppose art and beauty; rather it sees that Allah is Beautiful and loves beauty. Arabic calligraphy, ornamental design, and Islamic architecture testify to Muslim creativity. Communism turned art into a state propaganda tool and killed individual creativity. Islam liberates the artist and directs them toward beauty that elevates the soul. Andalusian civilization offered the world artistic masterpieces that still amaze humanity today. Islamic art expresses monotheism, symmetry, and cosmic harmony.',verse:'Indeed, We have made that which is on the earth adornment for it',verseRef:'Al-Kahf 7',hadith:'Indeed, Allah is Beautiful and loves beauty — Muslim',action:'Visit a museum or exhibition of Islamic art or search for it online — discover the greatness of Islamic creativity',young:'Islamic art is amazing! Discover the beauty of Arabic calligraphy and patterns — and draw something beautiful today 🎨'},
    fr:{title:'L\'Art et la Beaute en Islam',desc:'L\'Islam ne s\'oppose pas a l\'art et a la beaute ; il considere qu\'Allah est Beau et aime la beaute. La calligraphie arabe, le design ornemental et l\'architecture islamique temoignent de la creativite musulmane. Le communisme a transforme l\'art en outil de propagande d\'Etat et a tue la creativite individuelle. L\'Islam libere l\'artiste et l\'oriente vers la beaute qui eleve l\'ame. La civilisation andalouse a offert au monde des chefs-d\'oeuvre qui emerveillent encore l\'humanite aujourd\'hui.',verse:'Certes, Nous avons fait de ce qui est sur terre une parure pour elle',verseRef:'Al-Kahf 7',hadith:'Certes, Allah est Beau et aime la beaute — Muslim',action:'Visitez un musee ou une exposition d\'art islamique ou cherchez-le en ligne — decouvrez la grandeur de la creativite islamique',young:'L\'art islamique est incroyable ! Decouvre la beaute de la calligraphie arabe et des motifs — et dessine quelque chose de beau aujourd\'hui 🎨'}
  },
  {
    id:18, emoji:'📖',
    ar:{title:'فلسفة التعليم بين الإسلام والشيوعية',desc:'يؤكد الغزالي في "الإسلام في وجه الزحف الأحمر": التعليم في الإسلام يهدف لبناء الإنسان المتكامل: عقلاً وروحاً وجسداً. أول كلمة نزلت في القرآن كانت "اقرأ". التعليم الشيوعي يلقّن الأيديولوجيا ويقمع التفكير الحر ويحرّم النقد. الإسلام يشجع السؤال والبحث والتجربة. العلماء المسلمون أسسوا المنهج التجريبي وبنوا أولى الجامعات في التاريخ. جامعة القرويين في فاس أقدم جامعة مستمرة في العالم أسستها امرأة مسلمة هي فاطمة الفهرية.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً اليوم بمنهج إسلامي: اسأل لماذا وكيف — لا تحفظ فقط بل افهم وطبّق',young:'التعلم في الإسلام مغامرة! اسأل أسئلة وابحث عن إجابات — العلم نور يضيء طريقك 📖'},
    en:{title:'Education Philosophy: Islam vs Communism',desc:'Al-Ghazali affirms in "Islam Facing the Red Tide": Education in Islam aims to build a complete human being: mind, spirit, and body. The first word revealed in the Quran was "Read." Communist education indoctrinates ideology, suppresses free thinking, and forbids criticism. Islam encourages questioning, research, and experimentation. Muslim scholars founded the experimental method and built the first universities in history. Al-Qarawiyyin University in Fez is the oldest continuously operating university in the world, founded by a Muslim woman, Fatima al-Fihri.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new today with an Islamic approach: ask why and how — do not just memorize but understand and apply',young:'Learning in Islam is an adventure! Ask questions and search for answers — knowledge is light that illuminates your path 📖'},
    fr:{title:'Philosophie de l\'Education : Islam vs Communisme',desc:'L\'education en Islam vise a construire un etre humain complet : esprit, ame et corps. Le premier mot revele dans le Coran etait "Lis". L\'education communiste endoctrine l\'ideologie, supprime la pensee libre et interdit la critique. L\'Islam encourage le questionnement, la recherche et l\'experimentation. Les savants musulmans ont fonde la methode experimentale et construit les premieres universites de l\'histoire. L\'Universite Al-Qarawiyyin a Fes est la plus ancienne universite en activite au monde, fondee par une femme musulmane, Fatima al-Fihri.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 1',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:'Apprenez quelque chose de nouveau aujourd\'hui avec une approche islamique : demandez pourquoi et comment — ne memorisez pas seulement, comprenez et appliquez',young:'Apprendre en Islam est une aventure ! Pose des questions et cherche des reponses — le savoir est une lumiere qui eclaire ton chemin 📖'}
  },
  {
    id:19, emoji:'🌍',
    ar:{title:'البيئة أمانة إلهية',desc:'يؤكد الغزالي في "الإسلام في وجه الزحف الأحمر": الإسلام يعتبر الإنسان خليفة الله في الأرض ومسؤولاً عن حمايتها. الأرض ليست ملكاً للإنسان بل أمانة يجب أن يحافظ عليها للأجيال القادمة. الشيوعية استنزفت الموارد الطبيعية بلا رحمة في سبيل الإنتاج. كارثة تشيرنوبل وتجفيف بحر آرال شواهد على دمار البيئة في ظل الشيوعية. الإسلام يأمر بزراعة الأشجار وعدم الإسراف في الماء حتى على نهر جارٍ. النبي ﷺ جعل إماطة الأذى عن الطريق صدقة وحرّم قطع الأشجار بلا سبب.',verse:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',verseRef:'الأعراف ٥٦',hadith:'إن قامت الساعة وفي يد أحدكم فسيلة فليغرسها — رواه أحمد',action:'ازرع شجرة أو اعتنِ بنبتة اليوم — حافظ على البيئة كأمانة من الله',young:'الأرض أمانة! لا تلوث البيئة واعتنِ بالطبيعة — ازرع شجرة وحافظ على نظافة محيطك 🌍'},
    en:{title:'The Environment as a Divine Trust',desc:'Al-Ghazali affirms in "Islam Facing the Red Tide": Islam considers humans as God\'s stewards on earth, responsible for protecting it. The earth is not human property but a trust that must be preserved for future generations. Communism ruthlessly depleted natural resources for the sake of production. The Chernobyl disaster and the draining of the Aral Sea are testaments to environmental destruction under communism. Islam commands planting trees and not wasting water even beside a flowing river. The Prophet (PBUH) made removing harm from the road a form of charity and forbade cutting trees without reason.',verse:'And do not cause corruption on the earth after its reformation',verseRef:'Al-A\'raf 56',hadith:'If the Hour is about to be established and one of you has a seedling in their hand, let them plant it — Ahmad',action:'Plant a tree or care for a plant today — protect the environment as a trust from God',young:'The earth is a trust! Do not pollute the environment and take care of nature — plant a tree and keep your surroundings clean 🌍'},
    fr:{title:'L\'Environnement comme Confiance Divine',desc:'L\'Islam considere les humains comme les intendants de Dieu sur terre, responsables de la proteger. La terre n\'est pas la propriete de l\'homme mais une confiance a preserver pour les generations futures. Le communisme a epuise les ressources naturelles sans pitie au nom de la production. La catastrophe de Tchernobyl et l\'assechement de la mer d\'Aral temoignent de la destruction environnementale sous le communisme. L\'Islam ordonne de planter des arbres et de ne pas gaspiller l\'eau meme au bord d\'une riviere. Le Prophete (PSL) a fait de l\'elimination des nuisances du chemin une charite et a interdit de couper les arbres sans raison.',verse:'Et ne semez pas la corruption sur terre apres sa reforme',verseRef:'Al-A\'raf 56',hadith:'Si l\'Heure est sur le point de s\'etablir et que l\'un de vous a un plant en main, qu\'il le plante — Ahmad',action:'Plantez un arbre ou prenez soin d\'une plante aujourd\'hui — protegez l\'environnement comme une confiance de Dieu',young:'La terre est une confiance ! Ne pollue pas l\'environnement et prends soin de la nature — plante un arbre et garde ton entourage propre 🌍'}
  },
  {
    id:20, emoji:'💰',
    ar:{title:'الاقتصاد الإسلامي مقابل الاقتصاد الموجّه',desc:'يؤكد الغزالي في "الإسلام في وجه الزحف الأحمر": الاقتصاد الإسلامي يقوم على حرية السوق مع ضوابط أخلاقية تمنع الاحتكار والربا والغش. الزكاة والوقف والصدقة أدوات لتوزيع الثروة طوعياً. الاقتصاد الشيوعي المركزي فشل في تلبية حاجات الناس لأنه قتل المبادرة الفردية وألغى الحوافز. انهيار الاتحاد السوفيتي اقتصادياً قبل سياسياً دليل على فشل التخطيط المركزي. الإسلام يحترم ملكية الفرد ويحفّزه على الإنتاج والإبداع مع مسؤولية اجتماعية تجاه الفقراء والمحتاجين.',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'البقرة ٢٧٥',hadith:'التاجر الصدوق الأمين مع النبيين والصديقين والشهداء — رواه الترمذي',action:'تعامل بصدق وأمانة في كل معاملاتك المالية اليوم — وادعم مشروعاً خيرياً بالزكاة أو الصدقة',young:'كن أميناً في التعامل مع المال! لا تغش ولا تكذب — وتعلم كيف تدّخر وتتصدق 💰'},
    en:{title:'Islamic Economics vs Planned Economy',desc:'Al-Ghazali affirms in "Islam Facing the Red Tide": Islamic economics is based on free markets with ethical controls that prevent monopoly, usury, and fraud. Zakat, waqf, and charity are tools for voluntary wealth distribution. The communist centrally planned economy failed to meet people\'s needs because it killed individual initiative and eliminated incentives. The Soviet Union\'s economic collapse before its political collapse is proof of central planning\'s failure. Islam respects individual ownership and motivates production and creativity while maintaining social responsibility toward the poor and needy.',verse:'And Allah has permitted trade and has forbidden interest',verseRef:'Al-Baqarah 275',hadith:'The honest and trustworthy merchant is with the prophets, the truthful, and the martyrs — Tirmidhi',action:'Deal honestly and with integrity in all your financial transactions today — and support a charitable project with zakat or sadaqah',young:'Be honest when dealing with money! Do not cheat or lie — learn how to save and give charity 💰'},
    fr:{title:'Economie Islamique vs Economie Planifiee',desc:'Al-Ghazali affirme dans "L'Islam Face à la Marée Rouge": L\'economie islamique repose sur le libre marche avec des controles ethiques qui empechent le monopole, l\'usure et la fraude. La zakat, le waqf et la charite sont des outils de redistribution volontaire des richesses. L\'economie communiste planifiee centralement a echoue a repondre aux besoins des gens car elle a tue l\'initiative individuelle et elimine les incitations. L\'effondrement economique de l\'Union Sovietique avant son effondrement politique prouve l\'echec de la planification centrale. L\'Islam respecte la propriete individuelle et motive la production et la creativite tout en maintenant la responsabilite sociale envers les pauvres et les necessiteux.',verse:'Et Allah a permis le commerce et a interdit l\'interet',verseRef:'Al-Baqarah 275',hadith:'Le commercant honnete et digne de confiance est avec les prophetes, les veridiques et les martyrs — Tirmidhi',action:'Agissez honnetement et avec integrite dans toutes vos transactions financieres aujourd\'hui — et soutenez un projet caritatif par la zakat ou la sadaqah',young:'Sois honnete quand tu geres de l\'argent ! Ne triche pas et ne mens pas — apprends a epargner et a donner la charite 💰'}
  },
  {
    id:21, emoji:'🔴',
    ar:{title:'دروس ما بعد الاتحاد السوفيتي',
      desc:'انهيار الاتحاد السوفيتي عام ١٩٩١ أثبت فشل المادية في إشباع حاجات الإنسان. الشعوب التي عاشت تحت الحكم الشيوعي عادت تبحث عن الله والدين فور سقوط الجدار الحديدي. المساجد امتلأت في آسيا الوسطى والقوقاز بعد عقود من الإلحاد الإجباري. هذا دليل على أن الفطرة البشرية لا تُقهر وأن الإيمان أقوى من كل الأنظمة القمعية. الغزالي يرى في هذا الانهيار عبرة لمن يريد فصل الإنسان عن خالقه.',
      verse:'فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',
      verseRef:'الروم ٣٠',
      hadith:'لا تزال طائفة من أمتي ظاهرين على الحق لا يضرهم من خذلهم — رواه مسلم',
      action:'اقرأ عن عودة الإسلام إلى آسيا الوسطى بعد سقوط الاتحاد السوفيتي',
      young:'حتى عندما مُنع الناس من الصلاة لسنوات طويلة، عادوا لله فور حصولهم على الحرية! 🔴'},
    en:{title:'Post-Soviet Lessons',
      desc:'The collapse of the Soviet Union in 1991 proved that materialism fails to satisfy human needs. Peoples who lived under communist rule returned to seek God and religion as soon as the Iron Curtain fell. Mosques filled in Central Asia and the Caucasus after decades of forced atheism. This proves that human nature cannot be conquered and that faith is stronger than all oppressive systems. Al-Ghazali sees in this collapse a lesson for anyone who tries to separate humans from their Creator.',
      verse:'So direct your face toward the religion, inclining to truth — the nature of Allah upon which He created mankind',
      verseRef:'Ar-Rum 30',
      hadith:'A group of my Ummah will always remain victorious on the truth — Muslim',
      action:'Read about the return of Islam to Central Asia after the fall of the Soviet Union',
      young:'Even when people were banned from praying for many years, they returned to Allah as soon as they got freedom! 🔴'},
    fr:{title:'Lecons Post-Sovietiques',
      desc:'L\'effondrement de l\'Union Sovietique en 1991 a prouve que le materialisme echoue a satisfaire les besoins humains. Les peuples qui ont vecu sous le regime communiste sont retournes chercher Dieu et la religion des la chute du Rideau de Fer. Les mosquees se sont remplies en Asie Centrale et dans le Caucase apres des decennies d\'atheisme force. Cela prouve que la nature humaine ne peut etre vaincue et que la foi est plus forte que tous les systemes oppressifs.',
      verse:'Dirige ton visage vers la religion en pur monotheiste — la nature d\'Allah selon laquelle Il a cree les gens',
      verseRef:'Ar-Rum 30',
      hadith:'Un groupe de ma communaute restera toujours victorieux sur la verite — Muslim',
      action:'Lisez sur le retour de l\'Islam en Asie Centrale apres la chute de l\'Union Sovietique',
      young:'Meme quand les gens etaient interdits de prier pendant de longues annees, ils sont retournes vers Allah des qu\'ils ont obtenu la liberte ! 🔴'}
  },
  {
    id:22, emoji:'🐉',
    ar:{title:'نقد النموذج الصيني',
      desc:'النموذج الصيني يقدم نجاحاً اقتصادياً مع قمع للحريات الدينية والسياسية. اضطهاد مسلمي الإيغور يكشف وحشية النظام المادي الذي لا يرى في الإنسان إلا أداة إنتاج. النجاح الاقتصادي بلا حرية وكرامة هو سجن مذهّب. الإسلام يرفض أي نموذج يسحق كرامة الإنسان مهما كانت إنجازاته المادية.',
      verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',
      verseRef:'الإسراء ٧٠',
      hadith:'الناس سواسية كأسنان المشط — رواه أحمد',
      action:'تعرف على قضية مسلمي الإيغور وادعم حقوقهم',
      young:'كل إنسان له كرامة! لا يجوز ظلم أحد مهما كانت الأسباب 🐉'},
    en:{title:'Critique of the China Model',
      desc:'The Chinese model offers economic success with suppression of religious and political freedoms. The persecution of Uyghur Muslims reveals the brutality of a materialistic system that sees humans only as production tools. Economic success without freedom and dignity is a gilded prison. Islam rejects any model that crushes human dignity regardless of its material achievements.',
      verse:'And We have certainly honored the children of Adam',
      verseRef:'Al-Isra 70',
      hadith:'People are equal like the teeth of a comb — Ahmad',
      action:'Learn about the Uyghur Muslim cause and support their rights',
      young:'Every human being has dignity! No one should be oppressed for any reason 🐉'},
    fr:{title:'Critique du Modele Chinois',
      desc:'Le modele chinois offre un succes economique avec une suppression des libertes religieuses et politiques. La persecution des musulmans ouighours revele la brutalite d\'un systeme materialiste qui ne voit en l\'humain qu\'un outil de production. Le succes economique sans liberte et dignite est une prison doree. L\'Islam rejette tout modele qui ecrase la dignite humaine quelles que soient ses realisations materielles.',
      verse:'Et Nous avons certes honore les enfants d\'Adam',
      verseRef:'Al-Isra 70',
      hadith:'Les gens sont egaux comme les dents d\'un peigne — Ahmad',
      action:'Decouvrez la cause des musulmans ouighours et soutenez leurs droits',
      young:'Chaque etre humain a une dignite ! Personne ne devrait etre opprime pour quelque raison que ce soit 🐉'}
  },
  {
    id:23, emoji:'🔥',
    ar:{title:'الدين والثورة',
      desc:'الثورات المادية كالشيوعية وعدت بالعدالة لكنها أنتجت استبداداً أشد. الإسلام يقدم منهج إصلاح تدريجي يبدأ من إصلاح النفس ثم المجتمع. التغيير الحقيقي لا يأتي بالعنف بل بالتربية والوعي والعدل. ثورة الإسلام ثورة أخلاقية تبني لا تهدم.',
      verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
      verseRef:'الرعد ١١',
      hadith:'إن الله ليزع بالسلطان ما لا يزع بالقرآن — رواه الطبراني',
      action:'ابدأ بإصلاح نفسك قبل مطالبة الآخرين بالتغيير',
      young:'التغيير الحقيقي يبدأ من نفسك! كن أنت القدوة التي تريد أن تراها في العالم 🔥'},
    en:{title:'Religion and Revolution',
      desc:'Materialistic revolutions like communism promised justice but produced harsher tyranny. Islam offers a gradual reform approach starting from self-reform then society. True change comes not through violence but through education, awareness, and justice. Islam\'s revolution is a moral revolution that builds, not destroys.',
      verse:'Indeed, Allah will not change the condition of a people until they change what is in themselves',
      verseRef:'Ar-Ra\'d 11',
      hadith:'Allah restrains through authority what He does not restrain through the Quran — Tabarani',
      action:'Start by reforming yourself before demanding that others change',
      young:'Real change starts with yourself! Be the role model you want to see in the world 🔥'},
    fr:{title:'Religion et Revolution',
      desc:'Les revolutions materialistes comme le communisme ont promis la justice mais ont produit une tyrannie plus severe. L\'Islam offre une approche de reforme progressive commencant par la reforme de soi puis de la societe. Le vrai changement ne vient pas par la violence mais par l\'education, la conscience et la justice.',
      verse:'Certes, Allah ne change pas la condition d\'un peuple tant qu\'ils ne changent pas ce qui est en eux-memes',
      verseRef:'Ar-Ra\'d 11',
      hadith:'Allah retient par l\'autorite ce qu\'Il ne retient pas par le Coran — Tabarani',
      action:'Commencez par vous reformer vous-meme avant d\'exiger que les autres changent',
      young:'Le vrai changement commence par toi-meme ! Sois le modele que tu veux voir dans le monde 🔥'}
  },
  {
    id:24, emoji:'🕌',
    ar:{title:'البديل الإسلامي للمادية',
      desc:'الإسلام يقدم بديلاً حقيقياً للمادية الرأسمالية والشيوعية معاً. يحترم الملكية الفردية دون جشع، ويحقق العدالة الاجتماعية دون قمع. يوازن بين الروح والمادة، بين الدنيا والآخرة. الزكاة والوقف والتكافل نظام فريد يجمع بين الكفاءة والرحمة.',
      verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',
      verseRef:'القصص ٧٧',
      hadith:'اعمل لدنياك كأنك تعيش أبداً واعمل لآخرتك كأنك تموت غداً',
      action:'تعلم عن النظام الاقتصادي الإسلامي وقارنه بالرأسمالية والاشتراكية',
      young:'الإسلام يقول: اعمل للدنيا والآخرة معاً! لا تنسَ أي واحدة منهما 🕌'},
    en:{title:'The Islamic Alternative to Materialism',
      desc:'Islam offers a genuine alternative to both capitalist and communist materialism. It respects private property without greed and achieves social justice without oppression. It balances spirit and matter, this world and the next. Zakat, waqf, and mutual support form a unique system combining efficiency with mercy.',
      verse:'But seek through what Allah has given you the home of the Hereafter and do not forget your share of the world',
      verseRef:'Al-Qasas 77',
      hadith:'Work for your worldly life as if you will live forever and work for your Hereafter as if you will die tomorrow',
      action:'Learn about the Islamic economic system and compare it with capitalism and socialism',
      young:'Islam says: work for this world and the next together! Do not forget either one 🕌'},
    fr:{title:'L\'Alternative Islamique au Materialisme',
      desc:'L\'Islam offre une veritable alternative au materialisme capitaliste et communiste. Il respecte la propriete privee sans cupidite et realise la justice sociale sans oppression. Il equilibre l\'esprit et la matiere, ce monde et l\'au-dela. La zakat, le waqf et l\'entraide forment un systeme unique combinant efficacite et misericorde.',
      verse:'Mais recherche a travers ce qu\'Allah t\'a donne la Demeure de l\'Au-dela et n\'oublie pas ta part de ce monde',
      verseRef:'Al-Qasas 77',
      hadith:'Travaille pour ta vie mondaine comme si tu vivais eternellement et travaille pour ton Au-dela comme si tu mourais demain',
      action:'Decouvrez le systeme economique islamique et comparez-le au capitalisme et au socialisme',
      young:'L\'Islam dit : travaille pour ce monde et l\'Au-dela ensemble ! N\'oublie aucun des deux 🕌'}
  },
  {
    id:25, emoji:'🕳️',
    ar:{title:'الفراغ الروحي في المجتمعات العلمانية',
      desc:'المجتمعات العلمانية المتقدمة مادياً تعاني من أزمات روحية عميقة: ارتفاع معدلات الاكتئاب والانتحار والإدمان رغم الرفاهية. الإنسان بلا إيمان يفقد معنى الحياة. الإسلام يملأ هذا الفراغ بالإيمان والعبادة والأخوة الإنسانية.',
      verse:'وَمَنْ أَعْرَضَ عَنْ ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا',
      verseRef:'طه ١٢٤',
      hadith:'ليس الغنى عن كثرة العرض ولكن الغنى غنى النفس — متفق عليه',
      action:'تأمل في مصدر سعادتك: هل هي مادية فقط أم لها بعد روحي؟',
      young:'السعادة الحقيقية ليست في المال والأشياء — بل في القرب من الله وراحة القلب 🕳️'},
    en:{title:'The Spiritual Void in Secular Societies',
      desc:'Materially advanced secular societies suffer from deep spiritual crises: rising rates of depression, suicide, and addiction despite prosperity. A human without faith loses the meaning of life. Islam fills this void with faith, worship, and human brotherhood.',
      verse:'And whoever turns away from My remembrance — indeed, for him is a depressed life',
      verseRef:'Taha 124',
      hadith:'Richness is not in having many possessions, but richness is the richness of the soul — Agreed upon',
      action:'Reflect on the source of your happiness: is it purely material or does it have a spiritual dimension?',
      young:'True happiness is not in money and things — it is in being close to Allah and having a peaceful heart 🕳️'},
    fr:{title:'Le Vide Spirituel dans les Societes Seculieres',
      desc:'Les societes seculieres materiellement avancees souffrent de crises spirituelles profondes : hausse des taux de depression, de suicide et d\'addiction malgre la prosperite. Un humain sans foi perd le sens de la vie. L\'Islam comble ce vide par la foi, l\'adoration et la fraternite humaine.',
      verse:'Et quiconque se detourne de Mon rappel — certes il aura une vie etriquee',
      verseRef:'Taha 124',
      hadith:'La richesse n\'est pas dans l\'abondance des biens, mais la richesse est la richesse de l\'ame — Unanimement reconnu',
      action:'Reflechissez a la source de votre bonheur : est-il purement materiel ou a-t-il une dimension spirituelle ?',
      young:'Le vrai bonheur n\'est pas dans l\'argent et les choses — il est dans la proximite d\'Allah et la paix du coeur 🕳️'}
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
  },
  {
    ar:{q:'ما الآية التي تحرّم قتل النفس بغير حق وتشبّهه بقتل الناس جميعاً؟',opts:['البقرة ١٩٠','المائدة ٣٢','النساء ٩٣','الإسراء ٣٣'],correct:1,hint:'هذه الآية في سورة المائدة وتؤكد قدسية الحياة الإنسانية',quran:'المائدة ٣٢'},
    en:{q:'Which verse forbids killing a soul unjustly and compares it to killing all mankind?',opts:['Al-Baqarah 190','Al-Maidah 32','An-Nisa 93','Al-Isra 33'],correct:1,hint:'This verse is in Surah Al-Maidah and affirms the sanctity of human life',quran:'Al-Maidah 32'},
    fr:{q:'Quel verset interdit de tuer une ame injustement et compare cela au meurtre de toute l\'humanite ?',opts:['Al-Baqarah 190','Al-Maidah 32','An-Nisa 93','Al-Isra 33'],correct:1,hint:'Ce verset est dans la Sourate Al-Maidah et affirme le caractere sacre de la vie humaine',quran:'Al-Maidah 32'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ ..."',opts:['خلقها','إصلاحها','تعميرها','زينتها'],correct:1,hint:'هذه الآية تتعلق بحماية البيئة في الإسلام',quran:'الأعراف ٥٦'},
    en:{q:'Complete the verse: "And do not cause corruption on the earth after its..."',opts:['Creation','Reformation','Building','Decoration'],correct:1,hint:'This verse relates to environmental protection in Islam',quran:'Al-A\'raf 56'},
    fr:{q:'Completez le verset : "Et ne semez pas la corruption sur terre apres sa..."',opts:['Creation','Reforme','Construction','Decoration'],correct:1,hint:'Ce verset concerne la protection de l\'environnement en Islam',quran:'Al-A\'raf 56'}
  },
  {
    ar:{q:'ما الحديث الذي يصف التاجر الصادق بأنه مع النبيين والشهداء؟',opts:['التاجر الأمين في ظل العرش','التاجر الصدوق مع النبيين والصديقين والشهداء','أفضل الكسب عمل الرجل بيده','من غشنا فليس منا'],correct:1,hint:'هذا الحديث يرفع مكانة التاجر الأمين',quran:'البقرة ٢٧٥'},
    en:{q:'Which hadith describes the honest merchant as being with the prophets and martyrs?',opts:['The trustworthy merchant is under the Throne','The honest merchant is with the prophets, the truthful, and the martyrs','The best earning is a man\'s handiwork','Whoever cheats us is not one of us'],correct:1,hint:'This hadith elevates the status of the honest merchant',quran:'Al-Baqarah 275'},
    fr:{q:'Quel hadith decrit le commercant honnete comme etant avec les prophetes et les martyrs ?',opts:['Le commercant digne est sous le Trone','Le commercant honnete est avec les prophetes, les veridiques et les martyrs','Le meilleur gain est le travail de ses mains','Quiconque nous trompe n\'est pas des notres'],correct:1,hint:'Ce hadith eleve le statut du commercant honnete',quran:'Al-Baqarah 275'}
  },
  {
    ar:{q:'أكمل الحديث: "إن قامت الساعة وفي يد أحدكم فسيلة ف..."',opts:['فليتركها','فليغرسها','فليبعها','فليأكلها'],correct:1,hint:'هذا الحديث يدل على أهمية العمل والأمل حتى آخر لحظة',quran:'الأعراف ٥٦'},
    en:{q:'Complete the hadith: "If the Hour is about to be established and one of you has a seedling, let them..."',opts:['Leave it','Plant it','Sell it','Eat it'],correct:1,hint:'This hadith shows the importance of work and hope until the very last moment',quran:'Al-A\'raf 56'},
    fr:{q:'Completez le hadith : "Si l\'Heure est sur le point de s\'etablir et que l\'un de vous a un plant, qu\'il..."',opts:['Le laisse','Le plante','Le vende','Le mange'],correct:1,hint:'Ce hadith montre l\'importance du travail et de l\'espoir jusqu\'au dernier moment',quran:'Al-A\'raf 56'}
  },
  {
    ar:{q:'أكمل الآية: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ ..."',opts:['الغش','الربا','الاحتكار','السرقة'],correct:1,hint:'هذه الآية في سورة البقرة عن المعاملات المالية',quran:'البقرة ٢٧٥'},
    en:{q:'Complete the verse: "And Allah has permitted trade and has forbidden..."',opts:['Fraud','Interest/Usury','Monopoly','Theft'],correct:1,hint:'This verse is in Surah Al-Baqarah about financial transactions',quran:'Al-Baqarah 275'},
    fr:{q:'Completez le verset : "Et Allah a permis le commerce et a interdit..."',opts:['La fraude','L\'interet/usure','Le monopole','Le vol'],correct:1,hint:'Ce verset est dans la Sourate Al-Baqarah sur les transactions financieres',quran:'Al-Baqarah 275'}
  },
  {
    ar:{q:'ما الآية التي تصف من أعرض عن ذكر الله بأن له معيشة ضنكاً؟',opts:['البقرة ١٥٢','طه ١٢٤','الرعد ١١','الأنعام ١٢٢'],correct:1,hint:'تتحدث عن الفراغ الروحي لمن ابتعد عن الله',quran:'طه ١٢٤'},
    en:{q:'Which verse describes those who turn away from God\'s remembrance as having a depressed life?',opts:['Al-Baqarah 152','Taha 124','Ar-Ra\'d 11','Al-An\'am 122'],correct:1,hint:'It speaks about the spiritual void of those who distance themselves from God',quran:'Taha 124'},
    fr:{q:'Quel verset decrit ceux qui se detournent du rappel de Dieu comme ayant une vie etriquee ?',opts:['Al-Baqarah 152','Taha 124','Ar-Ra\'d 11','Al-An\'am 122'],correct:1,hint:'Il parle du vide spirituel de ceux qui s\'eloignent de Dieu',quran:'Taha 124'}
  },
  {
    ar:{q:'أكمل الآية: "وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ ..."',opts:['العمل','الدنيا','العلم','المال'],correct:1,hint:'الآية تدعو للتوازن بين الدنيا والآخرة',quran:'القصص ٧٧'},
    en:{q:'Complete the verse: "Seek through what Allah has given you the Hereafter and do not forget your share of..."',opts:['Work','The world','Knowledge','Wealth'],correct:1,hint:'The verse calls for balance between this world and the next',quran:'Al-Qasas 77'},
    fr:{q:'Completez le verset : « Recherche a travers ce qu\'Allah t\'a donne l\'Au-dela et n\'oublie pas ta part de... »',opts:['Le travail','Ce monde','Le savoir','La richesse'],correct:1,hint:'Le verset appelle a l\'equilibre entre ce monde et l\'Au-dela',quran:'Al-Qasas 77'}
  },
  {
    ar:{q:'ما السبب الرئيسي لانهيار الاتحاد السوفيتي من منظور الغزالي؟',opts:['الضعف العسكري','إهمال البعد الروحي للإنسان','قلة الموارد','الحروب الخارجية'],correct:1,hint:'يتعلق بالفراغ الروحي الذي خلفته المادية',quran:'الروم ٣٠'},
    en:{q:'What is the main reason for the Soviet Union\'s collapse from Al-Ghazali\'s perspective?',opts:['Military weakness','Neglecting the spiritual dimension of humans','Lack of resources','Foreign wars'],correct:1,hint:'It relates to the spiritual void left by materialism',quran:'Ar-Rum 30'},
    fr:{q:'Quelle est la raison principale de l\'effondrement de l\'Union Sovietique selon Al-Ghazali ?',opts:['Faiblesse militaire','Negliger la dimension spirituelle des humains','Manque de ressources','Guerres etrangeres'],correct:1,hint:'Cela concerne le vide spirituel laisse par le materialisme',quran:'Ar-Rum 30'}
  },
  {
    ar:{q:'ما الآية التي تدعو للتوازن بين الدنيا والآخرة؟',
      opts:['البقرة ٢٠١','القصص ٧٧','الحشر ١٨','النساء ٣٦'],
      correct:1,
      hint:'تأمر بالسعي للآخرة وعدم نسيان نصيب الدنيا',
      quran:'القصص ٧٧'},
    en:{q:'Which verse calls for balance between this world and the Hereafter?',
      opts:['Al-Baqarah 201','Al-Qasas 77','Al-Hashr 18','An-Nisa 36'],
      correct:1,
      hint:'It commands seeking the Hereafter without forgetting this world',
      quran:'Al-Qasas 77'},
    fr:{q:'Quel verset appelle a l\'equilibre entre ce monde et l\'Au-dela ?',
      opts:['Al-Baqarah 201','Al-Qasas 77','Al-Hashr 18','An-Nisa 36'],
      correct:1,
      hint:'Il ordonne de chercher l\'Au-dela sans oublier ce monde',
      quran:'Al-Qasas 77'}
  },
  {
    ar:{q:'ما الآية التي تصف عاقبة من أعرض عن ذكر الله؟',
      opts:['الرعد ٢٨','طه ١٢٤','البقرة ١٥٢','الأنعام ١٢٢'],
      correct:1,
      hint:'تصف المعيشة الضنك لمن ابتعد عن الله',
      quran:'طه ١٢٤'},
    en:{q:'Which verse describes the consequence of turning away from God\'s remembrance?',
      opts:['Ar-Ra\'d 28','Taha 124','Al-Baqarah 152','Al-An\'am 122'],
      correct:1,
      hint:'It describes the depressed life of those who distance themselves from God',
      quran:'Taha 124'},
    fr:{q:'Quel verset decrit la consequence de se detourner du rappel de Dieu ?',
      opts:['Ar-Ra\'d 28','Taha 124','Al-Baqarah 152','Al-An\'am 122'],
      correct:1,
      hint:'Il decrit la vie etriquee de ceux qui s\'eloignent de Dieu',
      quran:'Taha 124'}
  },
  {
    ar:{q:'أكمل الحديث: "يا مقلب القلوب ..."',
      opts:['اهدني','ثبت قلبي على دينك','وفقني','نور قلبي'],
      correct:1,
      hint:'دعاء الثبات على الإيمان',
      quran:'الرعد ١١'},
    en:{q:'Complete the hadith: "O Turner of hearts..."',
      opts:['Guide me','Make my heart firm upon Your religion','Grant me success','Illuminate my heart'],
      correct:1,
      hint:'A dua for firmness upon faith',
      quran:'Ar-Ra\'d 11'},
    fr:{q:'Completez le hadith : "O Celui qui retourne les coeurs..."',
      opts:['Guide-moi','Affermis mon coeur sur Ta religion','Accorde-moi le succes','Illumine mon coeur'],
      correct:1,
      hint:'Un dua pour la fermete dans la foi',
      quran:'Ar-Ra\'d 11'}
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
    fr:{label:'Dua pour une Bonne Fin',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'Notre Seigneur, donne-nous du bien dans ce monde et du bien dans l\'au-dela et protege-nous du Feu — Al-Baqarah 201'} },
  { ar:{label:'دعاء الصبر والثبات',text:'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا',tr:'البقرة ٢٨٦'},
    en:{label:'Dua for Patience and Firmness',text:'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا',tr:'Our Lord, do not impose blame upon us if we forget or make a mistake. Our Lord, do not lay upon us a burden like that which You laid upon those before us — Al-Baqarah 286'},
    fr:{label:'Dua pour la Patience et la Fermete',text:'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا',tr:'Notre Seigneur, ne nous impose pas si nous oublions ou commettons une erreur. Ne nous charge pas d\'un fardeau comme Tu as charge ceux avant nous — Al-Baqarah 286'} },
  { ar:{label:'دعاء التوفيق والسداد',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'طه ٢٥-٢٨'},
    en:{label:'Dua for Guidance and Eloquence',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'My Lord, expand for me my chest, ease for me my task, and untie the knot from my tongue that they may understand my speech — Taha 25-28'},
    fr:{label:'Dua pour la Guidance et l\'Eloquence',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'Mon Seigneur, ouvre-moi ma poitrine, facilite-moi ma tache et delie le noeud de ma langue pour qu\'ils comprennent ma parole — Taha 25-28'} },
  { ar:{label:'دعاء الحق',text:'رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'ربنا أرنا الحق حقاً وارزقنا اتباعه'},
    en:{label:'Dua for Truth',text:'رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'Our Lord, show us the truth as truth and grant us to follow it, and show us falsehood as falsehood and grant us to avoid it'},
    fr:{label:'Dua pour la Verite',text:'رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'Notre Seigneur, montre-nous la verite comme verite et accorde-nous de la suivre, et montre-nous le faux comme faux et accorde-nous de l\'eviter'} },
  { ar:{label:'دعاء التثبيت',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'يا مقلب القلوب ثبت قلبي على دينك'},
    en:{label:'Dua for Firmness of Heart',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, make my heart firm upon Your religion'},
    fr:{label:'Dua pour la Fermete du Coeur',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion'} }
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
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«الإسلام في وجه الزحف الأحمر» كتاب يدافع عن قيم الإسلام في مواجهة الفكر المادي الإلحادي. يبيّن الشيخ الغزالي أن الإسلام يقدم بديلاً حضارياً متكاملاً يحفظ كرامة الإنسان وحريته ويحقق العدالة دون سحق الفرد أو إنكار الروح.', sourcesTitle:'المصادر', sources:['كتاب "الإسلام في وجه الزحف الأحمر" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأحمد'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
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
