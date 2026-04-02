/* الإسلام في وجه الزحف الأحمر — ISLAM FACING THE RED TIDE — app.js v1.0 */
/* Based on "Al-Islam fi Wajh al-Zahf al-Ahmar" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الإسلام في وجه الزحف الأحمر',
    splashSub: 'الإسلام يواجه المادية والإلحاد بالحجة والبرهان',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الروم ٣٠: ٣٠',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabContrasts: 'المقارنات',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات المواجهة',
    cardsDesc: '٢٠ بطاقة من كتاب الإسلام في وجه الزحف الأحمر — كل بطاقة تكشف حقيقة عن مواجهة الإسلام للفكر المادي',
    contrastsTitle: 'الإسلام مقابل الشيوعية',
    contrastsDesc: 'مقارنات جوهرية بين النظرة الإسلامية والمادية',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من مبادئ الإيمان والوعي',
    quizTitle: 'اختبر معرفتك',
    quizDesc: 'هل تعرف الفرق بين الرؤية الإسلامية والمادية؟',
    helpTitle: '❓ مساعدة', duaPanelTitle: '🤲 أدعية',
    resetBtn: 'إعادة تعيين اليوم', submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم', quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً', share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!', allDone: 'أحسنت! أكملت جميع العادات!',
    islamView: '☪️ الرؤية الإسلامية', materialView: '🔴 الرؤية المادية',
    splashFeatures: ['٢٠ بطاقة عن مواجهة الفكر المادي','مقارنات بين الإسلام والشيوعية','عادات يومية مع تتبع مستمر','اختبار + أدعية'],
  },
  en: {
    appTitle: 'Islam Facing the Red Tide',
    splashSub: 'Islam confronts materialism and atheism with evidence and reason',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Ar-Rum 30:30',
    tabHome: 'Home', tabCards: 'Cards', tabContrasts: 'Contrasts',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Confrontation Cards',
    cardsDesc: '20 cards from Islam Facing the Red Tide — each reveals a truth about Islam\'s response to materialist ideology',
    contrastsTitle: 'Islam vs. Communism',
    contrastsDesc: 'Fundamental contrasts between the Islamic and materialist worldviews',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by principles of faith and awareness',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'Do you know the difference between the Islamic and materialist worldviews?',
    helpTitle: '❓ Help', duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reset Today', submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight', quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes', share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!', allDone: 'Well done! All habits completed!',
    islamView: '☪️ Islamic View', materialView: '🔴 Materialist View',
    splashFeatures: ['20 cards on confronting materialist ideology','Contrasts between Islam and communism','Daily habits with streak tracking','Quiz + duas'],
  },
  fr: {
    appTitle: 'L\'Islam Face a la Maree Rouge',
    splashSub: 'L\'Islam confronte le materialisme et l\'atheisme avec des preuves et la raison',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Ar-Rum 30:30',
    tabHome: 'Accueil', tabCards: 'Cartes', tabContrasts: 'Contrastes',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Confrontation',
    cardsDesc: '20 cartes du livre L\'Islam Face a la Maree Rouge — chacune revele une verite sur la reponse de l\'Islam au materialisme',
    contrastsTitle: 'Islam vs. Communisme',
    contrastsDesc: 'Contrastes fondamentaux entre les visions islamique et materialiste',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirees des principes de foi et de conscience',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Connaissez-vous la difference entre les visions islamique et materialiste ?',
    helpTitle: '❓ Aide', duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reinitialiser', submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Pensee du Jour', quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois', share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consecutifs !', allDone: 'Bravo ! Toutes les habitudes accomplies !',
    islamView: '☪️ Vision Islamique', materialView: '🔴 Vision Materialiste',
    splashFeatures: ['20 cartes sur la confrontation du materialisme','Contrastes entre Islam et communisme','Habitudes quotidiennes avec suivi','Quiz + duas'],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {id:1, emoji:'🕌', ar:{title:'الإسلام يواجه الإلحاد',desc:'الإلحاد ليس علماً بل موقف فلسفي عاجز عن تفسير الوجود. الإسلام يقدم تفسيراً شاملاً للكون والحياة والغاية.',verse:'أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ',verseRef:'الطور: ٣٥',lesson:'الإيمان بالله أقوى إجابة عن سؤال الوجود'}, en:{title:'Islam Confronts Atheism',desc:'Atheism is not science but a philosophical stance incapable of explaining existence. Islam provides a comprehensive explanation of the universe, life, and purpose.',verse:'Were they created by nothing, or were they the creators?',verseRef:'At-Tur: 35',lesson:'Faith in God is the strongest answer to the question of existence'}, fr:{title:'L\'Islam Confronte l\'Atheisme',desc:'L\'atheisme n\'est pas une science mais une position philosophique incapable d\'expliquer l\'existence. L\'Islam offre une explication complete.',verse:'Ont-ils ete crees a partir de rien ou sont-ils les createurs ?',verseRef:'At-Tur: 35',lesson:'La foi en Dieu est la reponse la plus forte a la question de l\'existence'}},
  {id:2, emoji:'💰', ar:{title:'المادية تختزل الإنسان',desc:'الشيوعية ترى الإنسان مجرد آلة اقتصادية. الإسلام يرى فيه خليفة الله في الأرض، له روح وعقل وكرامة لا تُقدّر بثمن.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',verseRef:'الإسراء: ٧٠',lesson:'الإنسان أعظم من أن يُختزل في بُعد مادي واحد'}, en:{title:'Materialism Reduces Humans',desc:'Communism sees humans as mere economic machines. Islam sees them as God\'s vicegerents on earth, with spirit, intellect, and priceless dignity.',verse:'And We have certainly honored the children of Adam',verseRef:'Al-Isra: 70',lesson:'Humans are greater than being reduced to a single material dimension'}, fr:{title:'Le Materialisme Reduit l\'Homme',desc:'Le communisme voit l\'homme comme une simple machine economique. L\'Islam le voit comme le vicaire de Dieu sur terre, avec esprit, intellect et dignite.',verse:'Nous avons certes honore les fils d\'Adam',verseRef:'Al-Isra: 70',lesson:'L\'homme est plus grand que d\'etre reduit a une seule dimension materielle'}},
  {id:3, emoji:'🔬', ar:{title:'العلم لا ينفي الإيمان',desc:'ادّعت الشيوعية أن العلم ينفي الدين. الحقيقة أن أعظم العلماء كانوا مؤمنين. العلم يكشف عظمة الخالق لا ينفيه.',verse:'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',verseRef:'فاطر: ٢٨',lesson:'كلما تعمّق العالِم في العلم ازداد إيماناً'}, en:{title:'Science Does Not Negate Faith',desc:'Communism claimed science negates religion. The truth is that the greatest scientists were believers. Science reveals the Creator\'s greatness, not negates Him.',verse:'Only those fear God, from among His servants, who have knowledge',verseRef:'Fatir: 28',lesson:'The deeper a scientist goes, the more faith grows'}, fr:{title:'La Science Ne Nie Pas la Foi',desc:'Le communisme pretendait que la science nie la religion. La verite est que les plus grands scientifiques etaient croyants.',verse:'Seuls craignent Dieu, parmi Ses serviteurs, ceux qui possedent le savoir',verseRef:'Fatir: 28',lesson:'Plus un scientifique approfondit, plus la foi grandit'}},
  {id:4, emoji:'⚖️', ar:{title:'العدالة الاجتماعية في الإسلام',desc:'الإسلام سبق الشيوعية في محاربة الفقر والظلم. لكنه فعل ذلك بالرحمة لا بالعنف، وبالزكاة لا بالمصادرة.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'الحشر: ٧',lesson:'العدالة الإسلامية توازن بين الحق الفردي والجماعي'}, en:{title:'Social Justice in Islam',desc:'Islam preceded communism in fighting poverty and injustice. But it did so with mercy, not violence, and with zakat, not confiscation.',verse:'So that it will not be a perpetual distribution among the rich',verseRef:'Al-Hashr: 7',lesson:'Islamic justice balances individual and collective rights'}, fr:{title:'La Justice Sociale en Islam',desc:'L\'Islam a precede le communisme dans la lutte contre la pauvrete. Mais il l\'a fait avec misericorde, pas violence, avec la zakat, pas la confiscation.',verse:'Afin que cela ne circule pas seulement entre les riches',verseRef:'Al-Hashr: 7',lesson:'La justice islamique equilibre droits individuels et collectifs'}},
  {id:5, emoji:'🏠', ar:{title:'الملكية الفردية في الإسلام',desc:'الإسلام يحمي الملكية الفردية ويعتبرها حقاً مشروعاً، لكنه يوجبها بالطرق الحلال ويفرض عليها حقوقاً للمجتمع كالزكاة.',verse:'وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ',verseRef:'البقرة: ١٨٨',lesson:'الملكية حق مقيّد بالعدل والمصلحة العامة'}, en:{title:'Private Property in Islam',desc:'Islam protects private property as a legitimate right, but requires it to be earned through lawful means and imposes social duties like zakat.',verse:'And do not consume one another\'s wealth unjustly',verseRef:'Al-Baqarah: 188',lesson:'Property is a right bounded by justice and public interest'}, fr:{title:'La Propriete Privee en Islam',desc:'L\'Islam protege la propriete privee comme un droit legitime, mais exige qu\'elle soit acquise legalement et impose des devoirs sociaux comme la zakat.',verse:'Ne mangez pas vos biens entre vous injustement',verseRef:'Al-Baqarah: 188',lesson:'La propriete est un droit limite par la justice et l\'interet public'}},
  {id:6, emoji:'🔴', ar:{title:'سقوط الشيوعية حتمي',desc:'نظام يُنكر الفطرة البشرية ويقمع الحرية محكوم عليه بالسقوط. التاريخ أثبت أن الشيوعية فشلت حيثما طُبّقت.',verse:'فَأَمَّا الزَّبَدُ فَيَذْهَبُ جُفَاءً',verseRef:'الرعد: ١٧',lesson:'الباطل زائل مهما بدا قوياً'}, en:{title:'The Fall of Communism Is Inevitable',desc:'A system that denies human nature and suppresses freedom is doomed to fall. History proved communism failed wherever it was applied.',verse:'As for the foam, it vanishes',verseRef:'Ar-Ra\'d: 17',lesson:'Falsehood perishes no matter how powerful it seems'}, fr:{title:'La Chute du Communisme Est Inevitable',desc:'Un systeme qui nie la nature humaine et supprime la liberte est voue a l\'echec. L\'histoire a prouve que le communisme a echoue partout.',verse:'L\'ecume disparait',verseRef:'Ar-Ra\'d: 17',lesson:'Le faux disparait, peu importe sa force apparente'}},
  {id:7, emoji:'👨‍👩‍👧‍👦', ar:{title:'الأسرة في الإسلام والشيوعية',desc:'الشيوعية حاولت تفكيك الأسرة. الإسلام يعتبر الأسرة نواة المجتمع وأساس التربية والاستقرار.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا',verseRef:'الروم: ٢١',lesson:'الأسرة المتماسكة أقوى حصن ضد الانحلال'}, en:{title:'Family in Islam vs. Communism',desc:'Communism tried to dismantle the family. Islam considers the family the nucleus of society and the foundation of upbringing and stability.',verse:'And among His signs is that He created for you mates from among yourselves',verseRef:'Ar-Rum: 21',lesson:'A strong family is the strongest fortress against dissolution'}, fr:{title:'La Famille en Islam vs. Communisme',desc:'Le communisme a tente de demanteler la famille. L\'Islam considere la famille comme le noyau de la societe et le fondement de l\'education.',verse:'Parmi Ses signes, Il a cree pour vous des epouses tirees de vous-memes',verseRef:'Ar-Rum: 21',lesson:'Une famille forte est le meilleur rempart contre la dissolution'}},
  {id:8, emoji:'🧠', ar:{title:'حرية الفكر',desc:'الشيوعية تفرض فكراً واحداً وتقمع المخالف. الإسلام يدعو للتفكر والحوار ويحترم العقل البشري.',verse:'قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ',verseRef:'البقرة: ١١١',lesson:'الإسلام يحترم العقل ويدعو للحوار لا القمع'}, en:{title:'Freedom of Thought',desc:'Communism imposes one ideology and suppresses dissent. Islam invites reflection and dialogue, respecting human intellect.',verse:'Say: Produce your proof if you are truthful',verseRef:'Al-Baqarah: 111',lesson:'Islam respects the intellect and invites dialogue, not suppression'}, fr:{title:'Liberte de Pensee',desc:'Le communisme impose une seule ideologie et supprime la dissidence. L\'Islam invite a la reflexion et au dialogue.',verse:'Dis : Apportez votre preuve si vous etes veridiques',verseRef:'Al-Baqarah: 111',lesson:'L\'Islam respecte l\'intellect et invite au dialogue, pas a la suppression'}},
  {id:9, emoji:'💎', ar:{title:'الروحانية مقابل المادية',desc:'الإنسان ليس مادة فقط. فيه روح تتوق للمعنى والجمال والسكينة. المادية تجاهلت هذا البُعد فأنتجت قلقاً وفراغاً.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'الرعد: ٢٨',lesson:'السكينة الحقيقية في الإيمان لا في المادة'}, en:{title:'Spirituality vs. Materialism',desc:'Humans are not just matter. They have a spirit that yearns for meaning, beauty, and peace. Materialism ignored this dimension, producing anxiety and emptiness.',verse:'Verily, in the remembrance of God do hearts find rest',verseRef:'Ar-Ra\'d: 28',lesson:'True peace is in faith, not in material possessions'}, fr:{title:'Spiritualite vs. Materialisme',desc:'L\'homme n\'est pas que matiere. Il a un esprit qui aspire au sens, a la beaute et a la paix. Le materialisme a ignore cette dimension.',verse:'N\'est-ce pas par le rappel de Dieu que les coeurs se tranquillisent',verseRef:'Ar-Ra\'d: 28',lesson:'La vraie paix est dans la foi, pas dans les possessions materielles'}},
  {id:10, emoji:'📜', ar:{title:'الأخلاق ثابتة لا نسبية',desc:'الشيوعية جعلت الأخلاق نسبية تتغير حسب المصلحة. الإسلام يؤسس الأخلاق على أسس إلهية ثابتة لا تتبدل.',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',verseRef:'القلم: ٤',lesson:'الأخلاق الثابتة حصن المجتمع من الفوضى'}, en:{title:'Morality Is Absolute, Not Relative',desc:'Communism made morality relative, changing with interests. Islam establishes morality on divine foundations that do not change.',verse:'And indeed, you are of a great moral character',verseRef:'Al-Qalam: 4',lesson:'Fixed morality is society\'s fortress against chaos'}, fr:{title:'La Morale Est Absolue, Pas Relative',desc:'Le communisme a rendu la morale relative, changeant selon les interets. L\'Islam etablit la morale sur des fondements divins immuables.',verse:'Tu es certes d\'un caractere eminent',verseRef:'Al-Qalam: 4',lesson:'La morale fixe est le rempart de la societe contre le chaos'}},
  {id:11, emoji:'🌏', ar:{title:'الأممية الإسلامية',desc:'الإسلام سبق الشيوعية في فكرة الأخوّة العالمية. لكنه بناها على الإيمان والتقوى لا على الصراع الطبقي.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ',verseRef:'الحجرات: ١٣',lesson:'الأخوّة الإسلامية تتجاوز العرق واللون والطبقة'}, en:{title:'Islamic Internationalism',desc:'Islam preceded communism in the idea of global brotherhood. But it built it on faith and righteousness, not class struggle.',verse:'O mankind, We have created you from male and female',verseRef:'Al-Hujurat: 13',lesson:'Islamic brotherhood transcends race, color, and class'}, fr:{title:'L\'Internationalisme Islamique',desc:'L\'Islam a precede le communisme dans l\'idee de fraternite universelle. Mais il l\'a construite sur la foi, pas la lutte des classes.',verse:'O hommes, Nous vous avons crees d\'un male et d\'une femelle',verseRef:'Al-Hujurat: 13',lesson:'La fraternite islamique transcende la race, la couleur et la classe'}},
  {id:12, emoji:'🩸', ar:{title:'العنف ليس الحل',desc:'الشيوعية تبني على الصراع والعنف الطبقي. الإسلام يدعو للإصلاح بالحكمة والموعظة الحسنة والعدل.',verse:'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل: ١٢٥',lesson:'الإصلاح بالحكمة أبقى من الثورة بالعنف'}, en:{title:'Violence Is Not the Solution',desc:'Communism builds on class conflict and violence. Islam calls for reform through wisdom, good counsel, and justice.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl: 125',lesson:'Reform through wisdom outlasts revolution through violence'}, fr:{title:'La Violence N\'est Pas la Solution',desc:'Le communisme se construit sur le conflit de classe et la violence. L\'Islam appelle a la reforme par la sagesse et le bon conseil.',verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl: 125',lesson:'La reforme par la sagesse dure plus que la revolution par la violence'}},
  {id:13, emoji:'🏭', ar:{title:'العمل في الإسلام',desc:'الإسلام يكرّم العمل ويعتبره عبادة. لكنه لا يختزل الإنسان في عامل. العامل في الإسلام له حقوق وكرامة.',verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ',verseRef:'التوبة: ١٠٥',lesson:'العمل عبادة والعامل مكرّم'}, en:{title:'Work in Islam',desc:'Islam honors work and considers it worship. But it does not reduce humans to workers. Workers in Islam have rights and dignity.',verse:'And say: Work, for God will see your work',verseRef:'At-Tawbah: 105',lesson:'Work is worship and workers are honored'}, fr:{title:'Le Travail en Islam',desc:'L\'Islam honore le travail et le considere comme une adoration. Mais il ne reduit pas l\'homme a un simple travailleur.',verse:'Dis : Oeuvrez, car Dieu verra votre oeuvre',verseRef:'At-Tawbah: 105',lesson:'Le travail est une adoration et les travailleurs sont honores'}},
  {id:14, emoji:'📚', ar:{title:'التعليم للجميع',desc:'الإسلام أوجب طلب العلم على كل مسلم ومسلمة. لم ينتظر الثورة الصناعية ليكتشف أهمية التعليم.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق: ١',lesson:'طلب العلم فريضة إسلامية سبقت كل الأيديولوجيات'}, en:{title:'Education for All',desc:'Islam made seeking knowledge obligatory for every Muslim, male and female. It did not wait for the industrial revolution to discover the importance of education.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq: 1',lesson:'Seeking knowledge is an Islamic obligation that preceded all ideologies'}, fr:{title:'L\'Education pour Tous',desc:'L\'Islam a rendu la quete du savoir obligatoire pour tout musulman. Il n\'a pas attendu la revolution industrielle pour decouvrir l\'importance de l\'education.',verse:'Lis, au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq: 1',lesson:'La quete du savoir est une obligation islamique qui a precede toutes les ideologies'}},
  {id:15, emoji:'🌍', ar:{title:'السياق التاريخي',desc:'ظهرت الشيوعية كردة فعل على ظلم الكنيسة والإقطاع في أوروبا. الإسلام لم يعرف هذا الصراع لأنه لم يفصل الدين عن العدل.',verse:'لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ',verseRef:'الحديد: ٢٥',lesson:'فهم السياق التاريخي يكشف أصل المشكلة'}, en:{title:'Historical Context',desc:'Communism emerged as a reaction to Church oppression and feudalism in Europe. Islam never knew this conflict because it never separated religion from justice.',verse:'We sent Our messengers with clear proofs',verseRef:'Al-Hadid: 25',lesson:'Understanding historical context reveals the root of the problem'}, fr:{title:'Contexte Historique',desc:'Le communisme a emerge comme reaction a l\'oppression de l\'Eglise et au feodalisme en Europe. L\'Islam n\'a jamais connu ce conflit.',verse:'Nous avons envoye Nos messagers avec des preuves claires',verseRef:'Al-Hadid: 25',lesson:'Comprendre le contexte historique revele la racine du probleme'}},
  {id:16, emoji:'🕊️', ar:{title:'الحرية الحقيقية',desc:'الشيوعية وعدت بالحرية لكنها أنتجت أبشع الدكتاتوريات. الحرية الحقيقية في عبودية الله لا عبودية البشر.',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'البقرة: ٢٥٦',lesson:'العبودية لله تحرر من عبودية البشر'}, en:{title:'True Freedom',desc:'Communism promised freedom but produced the worst dictatorships. True freedom is in servitude to God, not to humans.',verse:'There shall be no compulsion in religion',verseRef:'Al-Baqarah: 256',lesson:'Servitude to God liberates from servitude to humans'}, fr:{title:'La Vraie Liberte',desc:'Le communisme a promis la liberte mais a produit les pires dictatures. La vraie liberte est dans la servitude a Dieu, pas aux hommes.',verse:'Nulle contrainte en religion',verseRef:'Al-Baqarah: 256',lesson:'La servitude a Dieu libere de la servitude aux hommes'}},
  {id:17, emoji:'📊', ar:{title:'الاقتصاد الإسلامي المتوازن',desc:'الإسلام لا رأسمالي متوحش ولا شيوعي قامع. هو نظام وسط يحمي الملكية ويفرض العدالة.',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة: ١٤٣',lesson:'الوسطية هي طريق الإسلام في كل شيء'}, en:{title:'Balanced Islamic Economics',desc:'Islam is neither savage capitalism nor oppressive communism. It is a middle system that protects property and enforces justice.',verse:'And thus We have made you a moderate nation',verseRef:'Al-Baqarah: 143',lesson:'Moderation is Islam\'s path in everything'}, fr:{title:'L\'Economie Islamique Equilibree',desc:'L\'Islam n\'est ni un capitalisme sauvage ni un communisme oppressif. C\'est un systeme intermediaire qui protege la propriete et impose la justice.',verse:'Ainsi Nous avons fait de vous une communaute du juste milieu',verseRef:'Al-Baqarah: 143',lesson:'La moderation est la voie de l\'Islam en toute chose'}},
  {id:18, emoji:'🎯', ar:{title:'الغاية من الحياة',desc:'الشيوعية لا تقدم إجابة عن غاية الوجود. الإسلام يجيب: خُلقنا لعبادة الله وعمارة الأرض بالعدل.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',verseRef:'الذاريات: ٥٦',lesson:'الحياة بلا غاية فراغ لا تملؤه المادة'}, en:{title:'The Purpose of Life',desc:'Communism offers no answer to the purpose of existence. Islam answers: we were created to worship God and build the earth with justice.',verse:'I did not create the jinn and mankind except to worship Me',verseRef:'Adh-Dhariyat: 56',lesson:'Life without purpose is a void that matter cannot fill'}, fr:{title:'Le But de la Vie',desc:'Le communisme n\'offre aucune reponse au but de l\'existence. L\'Islam repond : nous avons ete crees pour adorer Dieu et construire la terre avec justice.',verse:'Je n\'ai cree les djinns et les humains que pour qu\'ils M\'adorent',verseRef:'Adh-Dhariyat: 56',lesson:'La vie sans but est un vide que la matiere ne peut combler'}},
  {id:19, emoji:'⭐', ar:{title:'الفطرة البشرية',desc:'الشيوعية تنكر الفطرة وتدّعي أن البيئة تشكّل كل شيء. الإسلام يؤكد أن الله فطر الناس على التوحيد.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',verseRef:'الروم: ٣٠',lesson:'الفطرة السليمة تهدي للإيمان'}, en:{title:'Human Nature',desc:'Communism denies innate nature, claiming environment shapes everything. Islam affirms that God created humans with an innate disposition toward monotheism.',verse:'The natural disposition of God upon which He created mankind',verseRef:'Ar-Rum: 30',lesson:'Sound natural disposition leads to faith'}, fr:{title:'La Nature Humaine',desc:'Le communisme nie la nature innee, pretendant que l\'environnement forme tout. L\'Islam affirme que Dieu a cree les humains avec une disposition innee vers le monotheisme.',verse:'La nature originelle de Dieu selon laquelle Il a cree les gens',verseRef:'Ar-Rum: 30',lesson:'La disposition naturelle saine mene a la foi'}},
  {id:20, emoji:'🌅', ar:{title:'المستقبل للإسلام',desc:'الباطل يزول مهما علا. الإسلام باقٍ لأنه الحق، والحق ينتصر دائماً. الشيوعية سقطت والإسلام باقٍ.',verse:'جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا',verseRef:'الإسراء: ٨١',lesson:'الحق ينتصر دائماً والباطل يزول'}, en:{title:'The Future Belongs to Islam',desc:'Falsehood perishes no matter how high it rises. Islam endures because it is the truth, and truth always prevails. Communism fell; Islam remains.',verse:'Truth has come and falsehood has departed. Indeed, falsehood is ever bound to depart',verseRef:'Al-Isra: 81',lesson:'Truth always prevails and falsehood always perishes'}, fr:{title:'L\'Avenir Appartient a l\'Islam',desc:'Le faux disparait, peu importe sa grandeur. L\'Islam perdure car il est la verite. Le communisme est tombe ; l\'Islam reste.',verse:'La verite est venue et le faux a disparu. Le faux est voue a disparaitre',verseRef:'Al-Isra: 81',lesson:'La verite triomphe toujours et le faux disparait toujours'}}
];

// ═══════════════ CONTRASTS DATA ═══════════════
const CONTRASTS = [
  {emoji:'🌍', ar:{topic:'نظرة للإنسان',islam:'خليفة الله في الأرض — له روح وعقل وكرامة',material:'آلة اقتصادية — مجرد مادة تتفاعل'}, en:{topic:'View of Humans',islam:'God\'s vicegerent on earth — with spirit, intellect, and dignity',material:'Economic machine — just matter interacting'}, fr:{topic:'Vision de l\'Homme',islam:'Vicaire de Dieu sur terre — avec esprit, intellect et dignite',material:'Machine economique — juste de la matiere en interaction'}},
  {emoji:'💰', ar:{topic:'الملكية',islam:'حق مشروع مقيّد بالعدل والزكاة',material:'إلغاء الملكية الخاصة — كل شيء للدولة'}, en:{topic:'Property',islam:'Legitimate right bounded by justice and zakat',material:'Abolish private property — everything belongs to the state'}, fr:{topic:'La Propriete',islam:'Droit legitime limite par la justice et la zakat',material:'Abolir la propriete privee — tout appartient a l\'Etat'}},
  {emoji:'🕊️', ar:{topic:'الحرية',islam:'حق إلهي — حرية العقيدة والرأي مكفولة',material:'قمع المعارضة — فكر واحد مفروض'}, en:{topic:'Freedom',islam:'Divine right — freedom of belief and opinion guaranteed',material:'Suppress dissent — one imposed ideology'}, fr:{topic:'La Liberte',islam:'Droit divin — liberte de croyance et d\'opinion garantie',material:'Supprimer la dissidence — une seule ideologie imposee'}},
  {emoji:'📖', ar:{topic:'الأخلاق',islam:'ثابتة مبنية على الوحي الإلهي',material:'نسبية تتغير حسب المصلحة الطبقية'}, en:{topic:'Morality',islam:'Fixed, based on divine revelation',material:'Relative, changing with class interests'}, fr:{topic:'La Morale',islam:'Fixe, basee sur la revelation divine',material:'Relative, changeant selon les interets de classe'}},
  {emoji:'👨‍👩‍👧‍👦', ar:{topic:'الأسرة',islam:'نواة المجتمع — محمية ومقدسة',material:'عائق للتقدم — يجب تفكيكها'}, en:{topic:'Family',islam:'Nucleus of society — protected and sacred',material:'Obstacle to progress — must be dismantled'}, fr:{topic:'La Famille',islam:'Noyau de la societe — protegee et sacree',material:'Obstacle au progres — a demanteler'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'📖',ar:{label:'قراءة آية عن الإيمان والتأمل فيها',source:'العلم والإيمان'},en:{label:'Read a verse about faith and reflect on it',source:'Knowledge and faith'},fr:{label:'Lire un verset sur la foi et y reflechir',source:'Savoir et foi'}},
  {emoji:'🧠',ar:{label:'تعلّم حجة جديدة تدحض شبهة',source:'مواجهة الشبهات'},en:{label:'Learn a new argument against a doubt',source:'Confronting doubts'},fr:{label:'Apprendre un nouvel argument contre un doute',source:'Confronter les doutes'}},
  {emoji:'🤲',ar:{label:'الدعاء بالهداية والثبات',source:'الروحانية'},en:{label:'Pray for guidance and steadfastness',source:'Spirituality'},fr:{label:'Prier pour la guidance et la constance',source:'Spiritualite'}},
  {emoji:'💎',ar:{label:'تأمل في نعمة من نعم الله',source:'مقابل المادية'},en:{label:'Reflect on a blessing from God',source:'Against materialism'},fr:{label:'Reflechir a une benediction de Dieu',source:'Contre le materialisme'}},
  {emoji:'📚',ar:{label:'قراءة صفحة من كتاب إسلامي',source:'طلب العلم'},en:{label:'Read a page from an Islamic book',source:'Seeking knowledge'},fr:{label:'Lire une page d\'un livre islamique',source:'Quete du savoir'}},
  {emoji:'🤝',ar:{label:'مساعدة شخص محتاج',source:'العدالة الاجتماعية'},en:{label:'Help someone in need',source:'Social justice'},fr:{label:'Aider une personne dans le besoin',source:'Justice sociale'}},
  {emoji:'🌙',ar:{label:'محاسبة النفس قبل النوم',source:'التزكية'},en:{label:'Self-review before sleep',source:'Self-purification'},fr:{label:'Auto-examen avant le sommeil',source:'Purification de soi'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تعرف أن الإسلام سبق الشيوعية في العدالة الاجتماعية؟',en:'Do you know Islam preceded communism in social justice?',fr:'Savez-vous que l\'Islam a precede le communisme en justice sociale ?'},
  {ar:'هل تعتقد أن العلم يتعارض مع الإيمان؟',en:'Do you believe science conflicts with faith?',fr:'Croyez-vous que la science est en conflit avec la foi ?'},
  {ar:'هل تؤمن بأن للإنسان بُعداً روحياً لا تملؤه المادة؟',en:'Do you believe humans have a spiritual dimension that matter cannot fill?',fr:'Croyez-vous que l\'homme a une dimension spirituelle que la matiere ne peut combler ?'},
  {ar:'هل تقبل فكرة أن الأخلاق نسبية تتغير حسب الظروف؟',en:'Do you accept that morality is relative and changes with circumstances?',fr:'Acceptez-vous que la morale est relative et change selon les circonstances ?'},
  {ar:'هل تعرف لماذا سقطت الشيوعية؟',en:'Do you know why communism fell?',fr:'Savez-vous pourquoi le communisme est tombe ?'},
  {ar:'هل تعتبر الأسرة أساس المجتمع؟',en:'Do you consider the family the foundation of society?',fr:'Considerez-vous la famille comme le fondement de la societe ?'},
  {ar:'هل لديك إجابة واضحة عن غاية الحياة؟',en:'Do you have a clear answer about the purpose of life?',fr:'Avez-vous une reponse claire sur le but de la vie ?'},
  {ar:'هل تستطيع التمييز بين النقد العلمي والتشكيك المغرض؟',en:'Can you distinguish between scientific criticism and biased doubt?',fr:'Pouvez-vous distinguer entre critique scientifique et doute tendancieux ?'},
  {ar:'هل تؤمن بأن الحرية حق إلهي لكل إنسان؟',en:'Do you believe freedom is a divine right for every human?',fr:'Croyez-vous que la liberte est un droit divin pour chaque etre humain ?'},
  {ar:'هل تعرف الفرق بين الاقتصاد الإسلامي والشيوعي؟',en:'Do you know the difference between Islamic and communist economics?',fr:'Connaissez-vous la difference entre l\'economie islamique et communiste ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم اهدني وسددني'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O God, guide me and keep me right'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et maintiens-moi'}},
  {ar:{label:'دعاء الثبات',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'يا مقلب القلوب ثبت قلبي على دينك'},en:{label:'Dua for Steadfastness',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, make my heart firm on Your religion'},fr:{label:'Dua pour la Constance',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion'}},
  {ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'رب زدني علماً'},en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en science'}},
  {ar:{label:'دعاء الحق',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'رب أرني الحق حقاً وارزقني اتباعه'},en:{label:'Dua for Truth',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'Lord, show me truth as truth and grant me to follow it'},fr:{label:'Dua pour la Verite',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'Seigneur, montre-moi la verite et accorde-moi de la suivre'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'ربنا أفرغ علينا صبراً وثبت أقدامنا'},en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, accorde-nous patience et affermis nos pas'}},
  {ar:{label:'دعاء النصر',text:'رَبَّنَا انصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'ربنا انصرنا على القوم الكافرين'},en:{label:'Dua for Victory',text:'رَبَّنَا انصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, grant us victory over the disbelieving people'},fr:{label:'Dua pour la Victoire',text:'رَبَّنَا انصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, accorde-nous la victoire'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('zahf-lang') || 'ar';
let theme = localStorage.getItem('zahf-theme') || 'crimson';
const themes = ['crimson','night','dawn'];
const themeIcons = ['🔴','🌙','🌅'];
const themeNames = {crimson:'قرمزي',night:'ليل هادئ',dawn:'فجر'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme); setLang(lang); initTabs(); initSplash(); initScrollTop();
  renderHome(); renderCards(); renderContrasts(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  initScrollReveal(); initKeyboardNav();
});

function initSplash() {
  let count = 5; const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join('');
  const interval = setInterval(() => { count--; if (el) el.textContent = count; if (count <= 0) { dismissSplash(); clearInterval(interval); } }, 1000);
}
function dismissSplash() { const s = document.getElementById('splash'); if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); } playSound('click'); }

function setLang(l) {
  lang = l; localStorage.setItem('zahf-lang', l);
  const isRTL = l === 'ar'; document.documentElement.lang = l; document.documentElement.dir = isRTL ? 'rtl' : 'ltr'; document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l]; const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabContrasts', t.tabContrasts);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('contrastsTitle', t.contrastsTitle); set('contrastsDesc', t.contrastsDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle); set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderContrasts(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) featuresEl.innerHTML = T[l].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join('');
}

function setTheme(t) { theme = t; document.documentElement.dataset.theme = t; localStorage.setItem('zahf-theme', t); const idx = themes.indexOf(t); const el = document.getElementById('themeIcon'); if (el) el.textContent = themeIcons[idx]; }
function cycleTheme() { const idx = (themes.indexOf(theme) + 1) % themes.length; setTheme(themes[idx]); showToast(themeNames[themes[idx]]); playSound('theme'); }

function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); tab.classList.add('active'); const panel = document.getElementById('panel-' + tab.dataset.tab); if (panel) panel.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); playSound('click'); }); }); }

function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const c = CARDS[dayIdx]; const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${cd.title}</div><div class="daily-body">${cd.desc}</div><div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>`;
  const sections = [{icon:'🔴',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة':lang==='fr'?'20 cartes':'20 cards'},{icon:'⚖️',tab:'contrasts',title:t.tabContrasts,desc:lang==='ar'?'إسلام مقابل شيوعية':lang==='fr'?'Islam vs communisme':'Islam vs communism'},{icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},{icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر نفسك':lang==='fr'?'Testez-vous':'Test yourself'},{icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب':lang==='fr'?'Le livre':'The book'}];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `<div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()"><span class="hc-icon">${s.icon}</span><div class="hc-title">${s.title}</div><div class="hc-desc">${s.desc}</div></div>`).join('');
}

function renderCards() {
  const t = T[lang]; const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => { const d = c[lang]; return `<div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}"><div class="principle-head" onclick="toggleCard('card-${c.id}')"><span class="principle-num">${c.id}</span><span class="principle-emoji">${c.emoji}</span><span class="principle-title">${d.title}</span><span class="principle-chev">&#9660;</span></div><div class="principle-body"><div class="principle-inner"><p class="principle-desc">${d.desc}</p><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.lesson}</span></div><button class="share-btn" onclick="event.stopPropagation();shareCard(${i})"><span class="share-icon">&#128279;</span> ${t.share}</button></div></div></div>`; }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) { const q = query.toLowerCase().trim(); document.querySelectorAll('.principle-card').forEach(card => { const match = !q || (card.dataset.search || '').includes(q) || (card.querySelector('.principle-title')?.textContent.toLowerCase() || '').includes(q); card.style.display = match ? '' : 'none'; }); }

async function shareCard(idx) { const c = CARDS[idx]; const d = c[lang]; const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.lesson}\n\n— الإسلام في وجه الزحف الأحمر`; if (navigator.share) { try { await navigator.share({title:d.title,text}); } catch(e){} } else { try { await navigator.clipboard.writeText(text); showToast(lang==='ar'?'تم النسخ!':lang==='fr'?'Copie !':'Copied!'); } catch(e){ showToast('Could not copy'); } } }

function renderContrasts() {
  const t = T[lang];
  document.getElementById('contrastsContainer').innerHTML = CONTRASTS.map(c => {
    const d = c[lang];
    return `<div class="anxiety-card scroll-reveal"><div class="anxiety-header"><span class="anxiety-emoji">${c.emoji}</span><span class="anxiety-title">${d.topic}</span></div><div class="comparison-box"><div class="comparison-side ghazali-side"><div class="comp-label">${t.islamView}</div><div class="comp-text">${d.islam}</div></div><div class="comparison-side carnegie-side"><div class="comp-label">${t.materialView}</div><div class="comp-text">${d.material}</div></div></div></div>`;
  }).join('');
}

function renderHabits() {
  const today = new Date().toDateString(); let hs = JSON.parse(localStorage.getItem('zahf-habits') || '{}');
  if (hs.date !== today) { updateStreak(hs); hs = {date:today,done:[]}; localStorage.setItem('zahf-habits', JSON.stringify(hs)); }
  const streak = getStreak(); const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h,i) => { const d=h[lang]; const isDone=hs.done.includes(i); return `<div class="habit-item ${isDone?'done':''}" onclick="toggleHabit(${i})"><span class="habit-check">${isDone?'&#10003;':''}</span><span class="habit-emoji">${h.emoji}</span><div><div class="habit-label">${d.label}</div><div class="habit-source">${d.source}</div></div></div>`; }).join('');
  const streakEl = document.getElementById('streakBadge'); if (streakEl) streakEl.innerHTML = streakHTML; updateHabitsProgress(hs);
}
function toggleHabit(i) { const today=new Date().toDateString(); let hs=JSON.parse(localStorage.getItem('zahf-habits')||'{}'); if(hs.date!==today)hs={date:today,done:[]}; const idx=hs.done.indexOf(i); if(idx>-1)hs.done.splice(idx,1);else hs.done.push(i); localStorage.setItem('zahf-habits',JSON.stringify(hs)); renderHabits(); playSound(idx>-1?'click':'success'); if(hs.done.length===HABITS.length){launchConfetti();showToast(T[lang].allDone);} }
function resetHabits() { localStorage.setItem('zahf-habits',JSON.stringify({date:new Date().toDateString(),done:[]})); renderHabits(); showToast(lang==='ar'?'تم إعادة التعيين':lang==='fr'?'Reinitialise':'Reset'); }
function updateHabitsProgress(hs) { const done=hs.done.length,total=HABITS.length,pct=total>0?(done/total*100):0; const fill=document.getElementById('habitsFill'); const txt=document.getElementById('habitsText'); if(fill)fill.style.width=pct+'%'; if(txt)txt.textContent=`${done}/${total}`; }
function updateStreak(prev) { let sd=JSON.parse(localStorage.getItem('zahf-streak')||'{"count":0,"lastDate":""}'); if(prev&&prev.done&&prev.done.length===HABITS.length&&prev.date){const y=new Date();y.setDate(y.getDate()-1);if(prev.date===y.toDateString())sd.count++;else if(prev.date!==new Date().toDateString())sd.count=prev.done.length===HABITS.length?1:0;sd.lastDate=prev.date;}else if(prev&&prev.date){sd.count=0;sd.lastDate=prev.date;} localStorage.setItem('zahf-streak',JSON.stringify(sd)); }
function getStreak() { return JSON.parse(localStorage.getItem('zahf-streak')||'{"count":0}').count; }

function launchConfetti() { const canvas=document.getElementById('confettiCanvas'); if(!canvas)return; canvas.style.display='block'; const ctx=canvas.getContext('2d'); canvas.width=window.innerWidth;canvas.height=window.innerHeight; const particles=[]; const colors=['#C62828','#E53935','#EF5350','#EF9A9A','#FFCDD2','#B71C1C']; for(let i=0;i<120;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});} let frame=0; function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.rot+=p.rotSpeed;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();});frame++;if(frame<120)requestAnimationFrame(draw);else{ctx.clearRect(0,0,canvas.width,canvas.height);canvas.style.display='none';}} draw(); }

function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q,i) => `<div class="quiz-question scroll-reveal" id="quiz-q-${i}"><div class="quiz-q-text">${i+1}. ${q[lang]}</div><div class="quiz-options"><button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button><button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button><button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button></div></div>`).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden'); window._quizAnswers = {};
}
function selectQuizOpt(qi,val) { window._quizAnswers[qi]=val; document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o,oi)=>{o.classList.toggle('selected',[2,1,0][oi]===val);}); playSound('click'); }
function submitQuiz() {
  const answers=window._quizAnswers||{}; if(Object.keys(answers).length<QUIZ.length){showToast(lang==='ar'?'أجب على جميع الأسئلة':lang==='fr'?'Repondez a toutes les questions':'Answer all questions');return;}
  const invertedQs=[1,3]; let score=0; Object.entries(answers).forEach(([qi,v])=>{score+=invertedQs.includes(parseInt(qi))?(2-v):v;});
  const max=QUIZ.length*2; const pct=Math.round(score/max*100); let emoji,title,desc;
  if(pct>=75){emoji='⭐';title=lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';desc=lang==='ar'?'لديك وعي عميق بالفرق بين الرؤية الإسلامية والمادية.':lang==='fr'?'Vous avez une conscience profonde.':'You have deep awareness.';}
  else if(pct>=50){emoji='📖';title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';desc=lang==='ar'?'أنت على الطريق. واصل التعلم.':lang==='fr'?'Vous etes sur la bonne voie.':'You\'re on the right track.';}
  else{emoji='🔄';title=lang==='ar'?'حان وقت التعلم':lang==='fr'?'Il est temps d\'apprendre':'Time to Learn';desc=lang==='ar'?'راجع البطاقات وتعرف على الحجج الإسلامية.':lang==='fr'?'Relisez les cartes.':'Review the cards and learn the Islamic arguments.';}
  const result=document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML=`<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({behavior:'smooth'}); playSound('success');
}

function renderAbout() {
  const about = {
    ar:{disclaimerTitle:'⚠️ تنبيه مهم',disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. ليست فتوى.',authorName:'الشيخ محمد الغزالي',authorDates:'١٩١٧ — ١٩٩٦',authorBio:'عالم ومفكر إسلامي مصري. ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر).',bookTitle:'عن الكتاب',bookDesc:'"الإسلام في وجه الزحف الأحمر" يرد فيه الشيخ الغزالي على الفكر الشيوعي المادي بحجج عقلية وقرآنية. يبيّن أن الإسلام سبق الشيوعية في العدالة الاجتماعية لكن بأسلوب يحفظ كرامة الإنسان وحريته.',sourcesTitle:'المصادر',sources:['كتاب "الإسلام في وجه الزحف الأحمر" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'],contact:'تواصل: abdelhak.bourdim@gmail.com'},
    en:{disclaimerTitle:'⚠️ Important Notice',disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. This is not a fatwa.',authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',authorBio:'Egyptian Islamic scholar and thinker. Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria.',bookTitle:'About the Book',bookDesc:'"Islam Facing the Red Tide" responds to communist materialist ideology with rational and Quranic arguments. It shows that Islam preceded communism in social justice but in a way that preserves human dignity and freedom.',sourcesTitle:'Sources',sources:['"Islam Facing the Red Tide" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'],contact:'Contact: abdelhak.bourdim@gmail.com'},
    fr:{disclaimerTitle:'⚠️ Avis Important',disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Ce n\'est pas une fatwa.',authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',authorBio:'Savant et penseur islamique egyptien. Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie).',bookTitle:'A Propos du Livre',bookDesc:'"L\'Islam Face a la Maree Rouge" repond a l\'ideologie materialiste communiste avec des arguments rationnels et coraniques. Il montre que l\'Islam a precede le communisme en justice sociale tout en preservant la dignite humaine.',sourcesTitle:'Sources',sources:['"L\'Islam Face a la Maree Rouge" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'],contact:'Contact : abdelhak.bourdim@gmail.com'}
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s=>`<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

function renderHelp() {
  const help={ar:[{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي.'},{title:'📚 المصادر',body:'كتاب "الإسلام في وجه الزحف الأحمر" للشيخ محمد الغزالي، القرآن الكريم.'},{title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة، ٥ مقارنات، تتبع العادات، اختبار.'}],en:[{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom.'},{title:'📚 Sources',body:'"Islam Facing the Red Tide" by Sheikh Mohammed al-Ghazali, the Holy Quran.'},{title:'✨ Features',body:'Three languages, 3 themes, 20 cards, 5 contrasts, habit tracker, quiz.'}],fr:[{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble.'},{title:'📚 Sources',body:'"L\'Islam Face a la Maree Rouge" par Sheikh al-Ghazali, le Saint Coran.'},{title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 cartes, 5 contrastes, suivi habitudes, quiz.'}]};
  document.getElementById('helpBody').innerHTML = help[lang].map(h=>`<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d=>{const dd=d[lang];return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;}).join(''); }

function initScrollReveal() { if(!('IntersectionObserver' in window))return; window._scrollObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');window._scrollObserver.unobserve(entry.target);}});},{threshold:0.08,rootMargin:'0px 0px -40px 0px'}); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el=>window._scrollObserver.observe(el)); document.querySelectorAll('.tab').forEach(tab=>{tab.addEventListener('click',()=>setTimeout(()=>{document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el=>window._scrollObserver.observe(el));},100));}); }

function initKeyboardNav() { document.addEventListener('keydown',(e)=>{ if(e.key==='Escape'){const hp=document.getElementById('helpPanel');if(!hp.classList.contains('hidden')){toggleHelp();return;}const dp=document.getElementById('duaPanel');if(!dp.classList.contains('hidden')){toggleDuaPanel();return;}document.querySelectorAll('.principle-card.open').forEach(c=>c.classList.remove('open'));} if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const cp=document.getElementById('panel-cards');if(!cp||!cp.classList.contains('active'))return;if(document.activeElement&&document.activeElement.id==='cardsSearch')return;e.preventDefault();const cards=Array.from(document.querySelectorAll('.principle-card')).filter(c=>c.style.display!=='none');if(!cards.length)return;if(currentCardIdx>=0&&currentCardIdx<cards.length)cards[currentCardIdx].classList.remove('open');const dir=(document.documentElement.dir==='rtl')?(e.key==='ArrowRight'?-1:1):(e.key==='ArrowRight'?1:-1);currentCardIdx=Math.max(0,Math.min(cards.length-1,currentCardIdx+dir));cards[currentCardIdx].classList.add('open');cards[currentCardIdx].scrollIntoView({behavior:'smooth',block:'center'});playSound('click');} }); }

function toggleCard(id){const card=document.getElementById(id);if(card){card.classList.toggle('open');playSound('click');}}
function toggleHelp(){document.getElementById('helpPanel').classList.toggle('hidden');playSound('click');}
function toggleDuaPanel(){document.getElementById('duaPanel').classList.toggle('hidden');playSound('click');}
function showToast(msg){const t=document.getElementById('toast');const m=document.getElementById('toastMsg');if(t&&m){m.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2500);}}
function initScrollTop(){const btn=document.getElementById('scrollTop');window.addEventListener('scroll',()=>{if(btn)btn.classList.toggle('visible',window.scrollY>300);});}

const AudioCtx=window.AudioContext||window.webkitAudioContext;let audioCtx;
function playSound(type){try{if(!audioCtx)audioCtx=new AudioCtx();const osc=audioCtx.createOscillator();const gain=audioCtx.createGain();osc.connect(gain);gain.connect(audioCtx.destination);gain.gain.value=0.06;if(type==='click'){osc.frequency.value=800;osc.type='sine';gain.gain.value=0.04;}else if(type==='success'){osc.frequency.value=523;osc.type='sine';}else if(type==='theme'){osc.frequency.value=440;osc.type='triangle';gain.gain.value=0.05;}osc.start();osc.stop(audioCtx.currentTime+0.1);}catch(e){}}

(function(){let tX=0,tY=0;const tabOrder=['home','cards','contrasts','habits','quiz','about'];document.addEventListener('touchstart',(e)=>{tX=e.changedTouches[0].screenX;tY=e.changedTouches[0].screenY;},{passive:true});document.addEventListener('touchend',(e)=>{const dx=e.changedTouches[0].screenX-tX;const dy=e.changedTouches[0].screenY-tY;if(Math.abs(dx)<50||Math.abs(dy)>Math.abs(dx))return;const isRTL=document.documentElement.dir==='rtl';const at=document.querySelector('.tab.active');if(!at)return;const ci=tabOrder.indexOf(at.dataset.tab);if(ci<0)return;let ni=isRTL?(dx>0?ci+1:ci-1):(dx<0?ci+1:ci-1);if(ni>=0&&ni<tabOrder.length){const nt=document.querySelector(`.tab[data-tab="${tabOrder[ni]}"]`);if(nt)nt.click();}},{passive:true});})();

function startTicker(){var el=document.getElementById('tickerText');if(!el)return;var tips={ar:['🔴 ٢٠ بطاقة عن مواجهة الفكر المادي','⚖️ الإسلام سبق الشيوعية في العدالة','💎 الروحانية تملأ ما تعجز عنه المادة','📖 العلم يزيد الإيمان لا ينقصه','🤲 اللّهُمّ ثبّتنا على الحق','💡 Powered by workshop-diy.org'],en:['🔴 20 cards on confronting materialism','⚖️ Islam preceded communism in justice','💎 Spirituality fills what matter cannot','📖 Science increases faith','🤲 O God, keep us on the truth','💡 Powered by workshop-diy.org'],fr:['🔴 20 cartes sur la confrontation du materialisme','⚖️ L\'Islam a precede le communisme','💎 La spiritualite comble ce que la matiere ne peut','📖 La science augmente la foi','🤲 O Dieu, affermis-nous sur la verite','💡 Powered by workshop-diy.org']};var l=document.documentElement.lang||'ar';var msgs=tips[l]||tips.ar;var txt=msgs.join('  ✦  ');el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';el.style.animation='tickerMarquee '+Math.max(25,txt.length*0.12)+'s linear infinite';}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
