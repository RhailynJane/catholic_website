import { mutation } from "./_generated/server";

// ─── PRAYERS ─────────────────────────────────────────────────────────────────

const PRAYERS = [
  {
    slug: "our-father", title: "Our Father", category: "Daily", sortOrder: 1,
    text: "Our Father, who art in heaven,\nhallowed be thy name;\nthy kingdom come,\nthy will be done,\non earth as it is in heaven.\nGive us this day our daily bread;\nand forgive us our trespasses,\nas we forgive those who trespass against us;\nand lead us not into temptation,\nbut deliver us from evil. Amen.",
    latinText: "Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.",
    origin: "Matthew 6:9-13 — Taught by Jesus to His disciples",
    notes: "The Lord's Prayer is the most fundamental Christian prayer, given directly by Our Lord. St. Thomas Aquinas called it 'the most perfect of prayers.' It contains all that we should seek from God: His glory, our needs, forgiveness, and protection from evil.",
  },
  {
    slug: "hail-mary", title: "Hail Mary", category: "Marian", sortOrder: 2,
    text: "Hail Mary, full of grace, the Lord is with thee;\nblessed art thou among women,\nand blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners,\nnow and at the hour of our death. Amen.",
    latinText: "Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.",
    origin: "Luke 1:28 (Angel Gabriel) and Luke 1:42 (Elizabeth), with the Church's petition added",
    notes: "The Hail Mary is the most prayed Marian prayer. The first part is entirely scriptural — the Angel Gabriel's greeting and Elizabeth's exclamation. The second part is the Church's petition to Our Lady as our intercessor and Mother.",
  },
  {
    slug: "glory-be", title: "Glory Be", category: "Daily", sortOrder: 3,
    text: "Glory be to the Father,\nand to the Son,\nand to the Holy Spirit,\nas it was in the beginning,\nis now, and ever shall be,\nworld without end. Amen.",
    latinText: "Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc et semper, et in saecula saeculorum. Amen.",
    origin: "Ancient doxology of the Church, in liturgical use since the 4th century",
    notes: "The Gloria Patri is a brief hymn of praise to the Blessed Trinity. It is prayed after each decade of the Rosary, after each psalm in the Divine Office, and at the close of many prayers. It affirms the eternal nature of God and the equality of the Three Divine Persons.",
  },
  {
    slug: "apostles-creed", title: "Apostles' Creed", category: "Daily", sortOrder: 4,
    text: "I believe in God, the Father Almighty,\nCreator of heaven and earth,\nand in Jesus Christ, His only Son, Our Lord,\nwho was conceived by the Holy Spirit,\nborn of the Virgin Mary,\nsuffered under Pontius Pilate,\nwas crucified, died and was buried;\nHe descended into hell;\non the third day He rose again from the dead;\nHe ascended into heaven,\nand is seated at the right hand of God the Father Almighty;\nfrom there He will come to judge the living and the dead.\nI believe in the Holy Spirit,\nthe Holy Catholic Church,\nthe communion of saints,\nthe forgiveness of sins,\nthe resurrection of the body,\nand life everlasting. Amen.",
    origin: "Developed from the Old Roman Creed (2nd century), the ancient baptismal symbol of Rome",
    notes: "The Apostles' Creed is the oldest summary of the Apostles' faith. It is used at the beginning of the Rosary, in baptismal rites, and in the Liturgy of the Hours. Each article summarizes a core truth of the Christian faith.",
  },
  {
    slug: "nicene-creed", title: "Nicene Creed", category: "Daily", sortOrder: 5,
    text: "I believe in one God, the Father Almighty,\nmaker of heaven and earth,\nof all things visible and invisible.\n\nI believe in one Lord Jesus Christ,\nthe Only Begotten Son of God,\nborn of the Father before all ages.\nGod from God, Light from Light,\ntrue God from true God,\nbegotten, not made, consubstantial with the Father;\nthrough him all things were made.\nFor us men and for our salvation\nhe came down from heaven,\nand by the Holy Spirit was incarnate of the Virgin Mary,\nand became man.\n\nFor our sake he was crucified under Pontius Pilate,\nhe suffered death and was buried,\nand rose again on the third day\nin accordance with the Scriptures.\nHe ascended into heaven\nand is seated at the right hand of the Father.\nHe will come again in glory\nto judge the living and the dead\nand his kingdom will have no end.\n\nI believe in the Holy Spirit, the Lord, the giver of life,\nwho proceeds from the Father and the Son,\nwho with the Father and the Son is adored and glorified,\nwho has spoken through the prophets.\n\nI believe in one, holy, catholic and apostolic Church.\nI confess one Baptism for the forgiveness of sins\nand I look forward to the resurrection of the dead\nand the life of the world to come. Amen.",
    origin: "Council of Nicaea (325 AD) and Council of Constantinople (381 AD)",
    notes: "The Nicene Creed is the definitive statement of Catholic faith, professed at every Sunday Mass and Solemnity. It was formulated to defend the full divinity of Christ against Arianism. The word 'consubstantial' (homoousios) means that the Son is of the same substance as the Father.",
  },
  {
    slug: "act-of-contrition", title: "Act of Contrition", category: "Sacramental", sortOrder: 6,
    text: "O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, Who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasion of sin. Amen.",
    notes: "The Act of Contrition is prayed during the Sacrament of Penance and Reconciliation. Perfect contrition — sorrow for sin motivated primarily by love of God — forgives mortal sin even before sacramental absolution, provided one intends to confess.",
  },
  {
    slug: "act-of-faith", title: "Act of Faith", category: "Devotional", sortOrder: 7,
    text: "O my God, I firmly believe that Thou art one God in three Divine Persons, Father, Son, and Holy Spirit. I believe that Thy Divine Son became man and died for our sins, and that He will come to judge the living and the dead. I believe these and all the truths which the Holy Catholic Church teaches, because Thou hast revealed them, Who canst neither deceive nor be deceived. Amen.",
    notes: "An Act of Faith is a prayer that explicitly assents to God and His revealed truth. These acts of the theological virtues are a form of prayer highly recommended by the Church, particularly before and after receiving the sacraments.",
  },
  {
    slug: "act-of-hope", title: "Act of Hope", category: "Devotional", sortOrder: 8,
    text: "O my God, relying on Thy almighty power and infinite mercy and promises, I hope to obtain pardon of my sins, the help of Thy grace, and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer. Amen.",
    notes: "An Act of Hope is a prayer expressing confident trust in God's promises of salvation and the assistance of His grace. Hope is the theological virtue by which we desire heaven and trust in God's promises to help us attain it.",
  },
  {
    slug: "act-of-love", title: "Act of Love", category: "Devotional", sortOrder: 9,
    text: "O my God, I love Thee above all things, with my whole heart and soul, because Thou art all good and worthy of all love. I love my neighbor as myself for the love of Thee. I forgive all who have injured me and ask pardon of all whom I have injured. Amen.",
    notes: "An Act of Charity expresses love of God above all things and love of neighbor as oneself. Charity is the greatest of the theological virtues and the bond of all perfection. An act of perfect charity, with true contrition, forgives all sin.",
  },
  {
    slug: "memorare", title: "Memorare", category: "Marian", sortOrder: 10,
    text: "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession, was left unaided. Inspired by this confidence I fly unto thee, O Virgin of virgins, my mother. To thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.",
    notes: "Traditionally attributed to Saint Bernard of Clairvaux (1090-1153), the Memorare is one of the most beloved prayers to the Blessed Virgin Mary. The name comes from the first word of the Latin original: 'Memorare.' It expresses trust in Mary's maternal intercession.",
  },
  {
    slug: "hail-holy-queen", title: "Hail, Holy Queen", category: "Marian", sortOrder: 11,
    text: "Hail, Holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Amen.",
    latinText: "Salve, Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve. Ad te clamamus exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia, ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, O pia, O dulcis Virgo Maria.",
    origin: "Attributed to Hermann of Reichenau (1013-1054), German monk",
    notes: "The Salve Regina is prayed at the end of the Rosary and is one of the four Marian antiphons of the Liturgy of the Hours. It beautifully expresses our condition as exiles and our confidence in Mary's intercession.",
  },
  {
    slug: "angelus", title: "The Angelus", category: "Devotional", sortOrder: 12,
    text: "V. The Angel of the Lord declared unto Mary.\nR. And she conceived of the Holy Spirit.\n\nHail Mary...\n\nV. Behold the handmaid of the Lord.\nR. Be it done unto me according to thy word.\n\nHail Mary...\n\nV. And the Word was made Flesh.\nR. And dwelt among us.\n\nHail Mary...\n\nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ.\n\nLet us pray:\nPour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we, to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ Our Lord. Amen.",
    notes: "The Angelus is traditionally prayed at 6 AM, noon, and 6 PM at the ringing of the Angelus bell. It commemorates the mystery of the Incarnation. During Easter season, the Regina Caeli is prayed in its place.",
  },
  {
    slug: "divine-mercy-chaplet", title: "Divine Mercy Chaplet", category: "Devotional", sortOrder: 13,
    text: "Begin: Our Father, Hail Mary, Apostles' Creed.\n\nOn the large beads:\n'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.'\n\nOn the small beads (10 times per decade):\n'For the sake of His sorrowful Passion, have mercy on us and on the whole world.'\n\nConclusion (3 times):\n'Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.'",
    origin: "Revealed to Saint Faustina Kowalska in 1935 (Diary entries 474-476)",
    notes: "Prayed especially at 3:00 PM — the Hour of Mercy — recalling the moment of Christ's death. Saint Faustina recorded that Jesus promised extraordinary graces to those who pray this chaplet with trust. Approved by the Church and promoted by Saint John Paul II.",
  },
  {
    slug: "prayer-to-saint-michael", title: "Prayer to Saint Michael", category: "Devotional", sortOrder: 14,
    text: "Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Hosts, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.",
    origin: "Composed by Pope Leo XIII in 1886 after a vision",
    notes: "Pope Leo XIII reportedly had a vision of Satan and Christ and was inspired to write this prayer, which was traditionally said after Low Mass until 1964. It has experienced a strong revival and is widely prayed today for protection against evil.",
  },
  {
    slug: "morning-offering", title: "Morning Offering", category: "Daily", sortOrder: 15,
    text: "O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians. Amen.",
    notes: "The Morning Offering consecrates the entire day to God, uniting all actions with the Holy Sacrifice of the Mass being offered throughout the world. It transforms ordinary activities into prayer and is associated with the Apostleship of Prayer.",
  },
  {
    slug: "confiteor", title: "Confiteor", category: "Sacramental", sortOrder: 16,
    text: "I confess to almighty God\nand to you, my brothers and sisters,\nthat I have greatly sinned\nin my thoughts and in my words,\nin what I have done\nand in what I have failed to do,\nthrough my fault, through my fault,\nthrough my most grievous fault;\ntherefore I ask blessed Mary ever-Virgin,\nall the Angels and Saints,\nand you, my brothers and sisters,\nto pray for me to the Lord our God.",
    latinText: "Confiteor Deo omnipotenti et vobis, fratres, quia peccavi nimis cogitatione, verbo, opere et omissione: mea culpa, mea culpa, mea maxima culpa. Ideo precor beatam Mariam semper Virginem, omnes Angelos et Sanctos, et vos, fratres, orare pro me ad Dominum Deum nostrum.",
    notes: "Prayed at the Penitential Rite at the beginning of Mass. The triple 'mea culpa' (my fault) accompanied by striking the breast is an ancient gesture of contrition. It acknowledges sin in thought, word, deed, and omission.",
  },
  {
    slug: "anima-christi", title: "Anima Christi", category: "Devotional", sortOrder: 17,
    text: "Soul of Christ, sanctify me.\nBody of Christ, save me.\nBlood of Christ, inebriate me.\nWater from the side of Christ, wash me.\nPassion of Christ, strengthen me.\nO good Jesus, hear me.\nWithin Thy wounds hide me.\nSeparated from Thee let me never be.\nFrom the malignant enemy, defend me.\nAt the hour of death, call me.\nTo come to Thee, bid me,\nthat I may praise Thee with Thy saints\nand with Thy angels, forever and ever. Amen.",
    latinText: "Anima Christi, sanctifica me. Corpus Christi, salva me. Sanguis Christi, inebria me. Aqua lateris Christi, lava me. Passio Christi, conforta me. O bone Iesu, exaudi me. Intra tua vulnera absconde me. Ne permittas me separari a te. Ab hoste maligno defende me. In hora mortis meae voca me. Et iube me venire ad te, ut cum Sanctis tuis laudem te in saecula saeculorum. Amen.",
    notes: "An ancient prayer, 14th century, associated with Saint Ignatius of Loyola who placed it at the beginning of the Spiritual Exercises. Traditionally prayed after receiving Holy Communion, it meditates on union with Christ through His sacred humanity.",
  },
  {
    slug: "grace-before-meals", title: "Grace Before Meals", category: "Daily", sortOrder: 18,
    text: "Bless us, O Lord, and these Thy gifts which we are about to receive from Thy bounty, through Christ Our Lord. Amen.",
    notes: "The blessing before meals acknowledges that all good gifts come from God. The practice of saying grace before eating is an ancient tradition in the Church, rooted in the Jewish practice of table blessings and Jesus's own practice of giving thanks before eating.",
  },
  {
    slug: "eternal-rest", title: "Eternal Rest", category: "Devotional", sortOrder: 19,
    text: "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May their souls and the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.",
    notes: "The prayer for the dead expresses the Catholic doctrine of Purgatory and the Communion of Saints. The faithful who have died are not beyond the reach of our prayers. This prayer is an act of charity for those being purified before entering heaven.",
  },
  {
    slug: "sub-tuum-praesidium", title: "Sub Tuum Praesidium", category: "Marian", sortOrder: 20,
    text: "We fly to thy patronage, O holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin.",
    latinText: "Sub tuum praesidium confugimus, Sancta Dei Genitrix. Nostras deprecationes ne despicias in necessitatibus nostris, sed a periculis cunctis libera nos semper, Virgo gloriosa et benedicta.",
    origin: "Papyrus fragment (P. Rylands 470), Egypt, circa 250 AD",
    notes: "The oldest known Marian prayer, discovered on a Greek papyrus in Egypt and dated to around 250 AD. Its antiquity testifies to the earliest Christian practice of seeking Mary's intercession. The title 'Theotokos' (God-bearer) in the Greek original was formally defined at the Council of Ephesus (431 AD).",
  },
  {
    slug: "how-to-pray-rosary", title: "How to Pray the Rosary", category: "Devotional", sortOrder: 21,
    text: "HOW TO PRAY THE ROSARY\n\n1. Begin with the Apostles' Creed\n2. Our Father\n3. Three Hail Marys (for faith, hope, and charity)\n4. Glory Be\n\nFor each of the 5 Decades:\n1. Announce the Mystery and meditate\n2. Our Father\n3. Ten Hail Marys\n4. Glory Be\n5. Fatima Prayer: 'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those in most need of Thy mercy.'\n\nConclude with: Hail, Holy Queen\n\nTHE MYSTERIES\nJoyful (Monday & Saturday): The Annunciation — The Visitation — The Nativity — The Presentation — Finding in the Temple\n\nSorrowful (Tuesday & Friday): Agony in the Garden — Scourging at the Pillar — Crowning with Thorns — Carrying the Cross — The Crucifixion\n\nGlorious (Wednesday & Sunday): The Resurrection — The Ascension — Descent of the Holy Spirit — The Assumption — Coronation of Mary\n\nLuminous (Thursday): Baptism of Jesus — Wedding at Cana — Proclamation of the Kingdom — The Transfiguration — Institution of the Eucharist",
    notes: "The Rosary is the pre-eminent Marian prayer and a meditative prayer on the life of Christ. Pope John Paul II called it 'a compendium of the Gospel.' He added the Luminous Mysteries in 2002. Our Lady has appeared at Fatima (1917) and other approved apparitions asking for the daily Rosary.",
  },
  {
    slug: "stations-of-the-cross-guide", title: "Stations of the Cross", category: "Devotional", sortOrder: 22,
    text: "Opening: 'We adore Thee, O Christ, and we bless Thee. Because by Thy holy Cross Thou hast redeemed the world.'\n\nI. Jesus is condemned to death\nII. Jesus takes up His Cross\nIII. Jesus falls the first time\nIV. Jesus meets His Blessed Mother\nV. Simon of Cyrene helps Jesus carry His Cross\nVI. Veronica wipes the face of Jesus\nVII. Jesus falls the second time\nVIII. Jesus meets the women of Jerusalem\nIX. Jesus falls the third time\nX. Jesus is stripped of His garments\nXI. Jesus is nailed to the Cross\nXII. Jesus dies on the Cross\nXIII. Jesus is taken down from the Cross\nXIV. Jesus is laid in the tomb\n\nAt each station pray: 'Lord Jesus, help us to walk in Your footsteps. Have mercy on us. Have mercy on all who suffer.'\n\nClosing: 'Lord Jesus, You have taught us to love as You loved. Help us to take up our cross daily and follow You in Your Passion, that we may share in Your Resurrection.'",
    notes: "The Way of the Cross began as a virtual pilgrimage for those unable to visit Jerusalem's holy sites. It is especially prayed on Fridays and throughout Lent. Pope John Paul II introduced an alternative Scriptural Stations of the Cross on Good Friday.",
  },
];

// ─── BIBLE VERSES ─────────────────────────────────────────────────────────────

const VERSES = [
  { book:"John", chapter:1, verse:1, text:"In the beginning was the Word, and the Word was with God, and the Word was God.", translation:"RSVCE", category:"The Incarnation", tags:["trinity","logos","incarnation"] },
  { book:"John", chapter:1, verse:14, text:"And the Word became flesh and dwelt among us, full of grace and truth; we have beheld his glory, glory as of the only Son from the Father.", translation:"RSVCE", category:"The Incarnation", tags:["incarnation","grace","truth"] },
  { book:"John", chapter:3, verse:16, text:"For God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life.", translation:"RSVCE", category:"Salvation", tags:["salvation","love","eternal life"] },
  { book:"John", chapter:6, verse:35, text:"Jesus said to them, 'I am the bread of life; he who comes to me shall not hunger, and he who believes in me shall never thirst.'", translation:"RSVCE", category:"The Eucharist", tags:["eucharist","faith","bread of life"] },
  { book:"John", chapter:6, verse:51, text:"I am the living bread which came down from heaven; if any one eats of this bread, he will live for ever; and the bread which I shall give for the life of the world is my flesh.", translation:"RSVCE", category:"The Eucharist", tags:["eucharist","Real Presence","eternal life"] },
  { book:"John", chapter:6, verse:53, verseEnd:54, text:"So Jesus said to them, 'Truly, truly, I say to you, unless you eat the flesh of the Son of man and drink his blood, you have no life in you; he who eats my flesh and drinks my blood has eternal life, and I will raise him up at the last day.'", translation:"RSVCE", category:"The Eucharist", tags:["eucharist","Real Presence","salvation"] },
  { book:"John", chapter:11, verse:25, text:"Jesus said to her, 'I am the resurrection and the life; he who believes in me, though he die, yet shall he live.'", translation:"RSVCE", category:"Resurrection", tags:["resurrection","faith","eternal life"] },
  { book:"John", chapter:14, verse:6, text:"Jesus said to him, 'I am the way, and the truth, and the life; no one comes to the Father, but by me.'", translation:"RSVCE", category:"Salvation", tags:["salvation","truth","way"] },
  { book:"John", chapter:14, verse:27, text:"Peace I leave with you; my peace I give to you; not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.", translation:"RSVCE", category:"Prayer", tags:["peace","trust","consolation"] },
  { book:"John", chapter:15, verse:5, text:"I am the vine, you are the branches. He who abides in me, and I in him, he it is that bears much fruit, for apart from me you can do nothing.", translation:"RSVCE", category:"Discipleship", tags:["grace","discipleship","abiding"] },
  { book:"John", chapter:15, verse:13, text:"Greater love has no man than this, that a man lay down his life for his friends.", translation:"RSVCE", category:"Love", tags:["love","sacrifice","martyrdom"] },
  { book:"John", chapter:20, verse:22, verseEnd:23, text:"And when he had said this, he breathed on them, and said to them, 'Receive the Holy Spirit. If you forgive the sins of any, they are forgiven; if you retain the sins of any, they are retained.'", translation:"RSVCE", category:"The Sacraments", tags:["confession","holy spirit","priesthood"] },
  { book:"Matthew", chapter:5, verse:3, text:"Blessed are the poor in spirit, for theirs is the kingdom of heaven.", translation:"RSVCE", category:"The Beatitudes", tags:["beatitudes","kingdom","poverty of spirit"] },
  { book:"Matthew", chapter:5, verse:4, text:"Blessed are those who mourn, for they shall be comforted.", translation:"RSVCE", category:"The Beatitudes", tags:["beatitudes","consolation","grief"] },
  { book:"Matthew", chapter:5, verse:5, text:"Blessed are the meek, for they shall inherit the earth.", translation:"RSVCE", category:"The Beatitudes", tags:["beatitudes","meekness","virtue"] },
  { book:"Matthew", chapter:5, verse:8, text:"Blessed are the pure in heart, for they shall see God.", translation:"RSVCE", category:"The Beatitudes", tags:["beatitudes","purity","vision of God"] },
  { book:"Matthew", chapter:5, verse:9, text:"Blessed are the peacemakers, for they shall be called sons of God.", translation:"RSVCE", category:"The Beatitudes", tags:["beatitudes","peace","charity"] },
  { book:"Matthew", chapter:16, verse:18, verseEnd:19, text:"And I tell you, you are Peter, and on this rock I will build my Church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.", translation:"RSVCE", category:"The Church", tags:["papacy","church","peter"] },
  { book:"Matthew", chapter:22, verse:37, verseEnd:39, text:"You shall love the Lord your God with all your heart, and with all your soul, and with all your mind. This is the great and first commandment. And a second is like it, You shall love your neighbor as yourself.", translation:"RSVCE", category:"Love", tags:["commandments","love of God","love of neighbor"] },
  { book:"Matthew", chapter:28, verse:19, verseEnd:20, text:"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you; and lo, I am with you always, to the close of the age.", translation:"RSVCE", category:"The Church", tags:["mission","baptism","trinity"] },
  { book:"Luke", chapter:1, verse:28, text:"And he came to her and said, 'Hail, full of grace, the Lord is with you!'", translation:"RSVCE", category:"Mary", tags:["mary","annunciation","grace"] },
  { book:"Luke", chapter:1, verse:38, text:"And Mary said, 'Behold, I am the handmaid of the Lord; let it be to me according to your word.' And the angel departed from her.", translation:"RSVCE", category:"Mary", tags:["mary","fiat","humility"] },
  { book:"Luke", chapter:1, verse:46, verseEnd:48, text:"And Mary said, 'My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has regarded the low estate of his handmaiden. For behold, henceforth all generations will call me blessed.'", translation:"RSVCE", category:"Mary", tags:["mary","magnificat","humility"] },
  { book:"Luke", chapter:22, verse:19, verseEnd:20, text:"And he took bread, and when he had given thanks he broke it and gave it to them, saying, 'This is my body which is given for you. Do this in remembrance of me.' And likewise the cup after supper, saying, 'This cup which is poured out for you is the new covenant in my blood.'", translation:"RSVCE", category:"The Eucharist", tags:["eucharist","last supper","covenant"] },
  { book:"Mark", chapter:10, verse:45, text:"For the Son of man also came not to be served but to serve, and to give his life as a ransom for many.", translation:"RSVCE", category:"Salvation", tags:["service","redemption","sacrifice"] },
  { book:"Romans", chapter:8, verse:28, text:"We know that in everything God works for good with those who love him, who are called according to his purpose.", translation:"RSVCE", category:"Trust", tags:["providence","trust","love of God"] },
  { book:"Romans", chapter:8, verse:38, verseEnd:39, text:"For I am sure that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.", translation:"RSVCE", category:"Trust", tags:["love of God","perseverance","hope"] },
  { book:"1 Corinthians", chapter:11, verse:24, verseEnd:25, text:"And when he had given thanks, he broke it, and said, 'This is my body which is for you. Do this in remembrance of me.' In the same way also the cup, after supper, saying, 'This cup is the new covenant in my blood. Do this, as often as you drink it, in remembrance of me.'", translation:"RSVCE", category:"The Eucharist", tags:["eucharist","institution","covenant"] },
  { book:"1 Corinthians", chapter:13, verse:4, verseEnd:8, text:"Love is patient and kind; love is not jealous or boastful; it is not arrogant or rude. Love does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrong, but rejoices in the right. Love bears all things, believes all things, hopes all things, endures all things. Love never ends.", translation:"RSVCE", category:"Love", tags:["love","charity","virtue"] },
  { book:"Ephesians", chapter:2, verse:8, verseEnd:9, text:"For by grace you have been saved through faith; and this is not your own doing, it is the gift of God — not because of works, lest any man should boast.", translation:"RSVCE", category:"Salvation", tags:["grace","faith","salvation"] },
  { book:"Philippians", chapter:4, verse:6, verseEnd:7, text:"Have no anxiety about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which passes all understanding, will keep your hearts and your minds in Christ Jesus.", translation:"RSVCE", category:"Prayer", tags:["prayer","peace","trust"] },
  { book:"Philippians", chapter:4, verse:13, text:"I can do all things in him who strengthens me.", translation:"RSVCE", category:"Trust", tags:["grace","strength","faith"] },
  { book:"Galatians", chapter:2, verse:20, text:"It is no longer I who live, but Christ who lives in me; and the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.", translation:"RSVCE", category:"Discipleship", tags:["grace","faith","union with Christ"] },
  { book:"Hebrews", chapter:11, verse:1, text:"Now faith is the assurance of things hoped for, the conviction of things not seen.", translation:"RSVCE", category:"Faith", tags:["faith","hope","virtue"] },
  { book:"Hebrews", chapter:13, verse:8, text:"Jesus Christ is the same yesterday and today and for ever.", translation:"RSVCE", category:"Faith", tags:["immutability","faith","Jesus"] },
  { book:"James", chapter:1, verse:27, text:"Religion that is pure and undefiled before God and the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.", translation:"RSVCE", category:"Discipleship", tags:["works of mercy","charity","discipleship"] },
  { book:"1 Peter", chapter:5, verse:7, text:"Cast all your anxieties on him, for he cares about you.", translation:"RSVCE", category:"Trust", tags:["trust","prayer","providence"] },
  { book:"Revelation", chapter:21, verse:3, verseEnd:4, text:"And I heard a great voice from the throne saying, 'Behold, the dwelling of God is with men. He will dwell with them, and they shall be his people, and God himself will be with them; he will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning nor crying nor pain any more, for the former things have passed away.'", translation:"RSVCE", category:"Heaven", tags:["heaven","eternal life","consolation"] },
  { book:"Psalms", chapter:23, verse:1, text:"The Lord is my shepherd, I shall not want; he makes me lie down in green pastures. He leads me beside still waters; he restores my soul.", translation:"RSVCE", category:"Trust", tags:["trust","providence","consolation"] },
  { book:"Psalms", chapter:27, verse:1, text:"The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?", translation:"RSVCE", category:"Trust", tags:["trust","faith","courage"] },
  { book:"Psalms", chapter:46, verse:1, text:"God is our refuge and strength, a very present help in trouble.", translation:"RSVCE", category:"Trust", tags:["trust","strength","refuge"] },
  { book:"Psalms", chapter:91, verse:1, verseEnd:2, text:"He who dwells in the shelter of the Most High, who abides in the shadow of the Almighty, will say to the Lord, 'My refuge and my fortress; my God, in whom I trust.'", translation:"RSVCE", category:"Trust", tags:["trust","protection","prayer"] },
  { book:"Isaiah", chapter:40, verse:31, text:"But they who wait for the Lord shall renew their strength, they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint.", translation:"RSVCE", category:"Trust", tags:["trust","strength","hope"] },
  { book:"Isaiah", chapter:41, verse:10, text:"Fear not, for I am with you, be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my victorious right hand.", translation:"RSVCE", category:"Trust", tags:["trust","consolation","providence"] },
  { book:"Isaiah", chapter:43, verse:1, text:"But now thus says the Lord, he who created you, O Jacob, he who formed you, O Israel: 'Fear not, for I have redeemed you; I have called you by name, you are mine.'", translation:"RSVCE", category:"Salvation", tags:["redemption","identity","love of God"] },
  { book:"Genesis", chapter:1, verse:1, text:"In the beginning God created the heavens and the earth.", translation:"RSVCE", category:"Creation", tags:["creation","God","origins"] },
  { book:"Genesis", chapter:1, verse:27, text:"So God created man in his own image, in the image of God he created him; male and female he created them.", translation:"RSVCE", category:"Creation", tags:["creation","dignity","imago dei"] },
  { book:"Proverbs", chapter:3, verse:5, verseEnd:6, text:"Trust in the Lord with all your heart, and do not rely on your own insight. In all your ways acknowledge him, and he will make straight your paths.", translation:"RSVCE", category:"Trust", tags:["trust","wisdom","faith"] },
];

// ─── FORMULAS OF DOCTRINE ────────────────────────────────────────────────────

const FORMULAS = [
  {
    slug: "ten-commandments", title: "The Ten Commandments", category: "Commandments", sortOrder: 1,
    content: `<h2>The Ten Commandments</h2>
<p>Given by God to Moses on Mount Sinai, the Ten Commandments are the foundation of moral life. They express the fundamental duties toward God and neighbor.</p>
<div class="commandments-list">
<div class="commandment-item"><strong>I. I am the Lord your God: you shall not have strange gods before me.</strong><br/>We are to worship only the one true God, rejecting idolatry and false worship in all its forms.</div>
<div class="commandment-item"><strong>II. You shall not take the name of the Lord your God in vain.</strong><br/>The name of God is holy. We must not swear falsely or use His name disrespectfully.</div>
<div class="commandment-item"><strong>III. Remember to keep holy the Lord's Day.</strong><br/>Sunday, the day of the Lord's Resurrection, must be observed with rest, Mass, and works of charity.</div>
<div class="commandment-item"><strong>IV. Honor your father and your mother.</strong><br/>We must respect and care for our parents and legitimate authorities.</div>
<div class="commandment-item"><strong>V. You shall not kill.</strong><br/>Human life is sacred from conception to natural death. Unjust killing is gravely wrong.</div>
<div class="commandment-item"><strong>VI. You shall not commit adultery.</strong><br/>We must respect the gift of sexuality within the covenant of marriage.</div>
<div class="commandment-item"><strong>VII. You shall not steal.</strong><br/>We must respect the property of others and work for just distribution of goods.</div>
<div class="commandment-item"><strong>VIII. You shall not bear false witness against your neighbor.</strong><br/>We must speak the truth in all things and protect the good name of others.</div>
<div class="commandment-item"><strong>IX. You shall not covet your neighbor's wife.</strong><br/>We must guard purity of heart and mind, not desiring what belongs to another.</div>
<div class="commandment-item"><strong>X. You shall not covet your neighbor's goods.</strong><br/>We must not covet what belongs to another, but practice contentment and generosity.</div>
</div>
<blockquote>"The Commandments are not a burden but a path to freedom and human dignity." — Catechism of the Catholic Church</blockquote>`,
    source: "Exodus 20:1-17; Deuteronomy 5:6-21; CCC 2052-2550",
  },
  {
    slug: "beatitudes", title: "The Beatitudes", category: "Beatitudes", sortOrder: 2,
    content: `<h2>The Beatitudes</h2>
<p>Proclaimed by Jesus in the Sermon on the Mount, the Beatitudes are the heart of His teaching. They reveal the face of Christ and describe authentic Christian discipleship.</p>
<div class="beatitudes-list">
<div class="beatitude-item"><strong>Blessed are the poor in spirit, for theirs is the kingdom of heaven.</strong><br/>Poverty of spirit means recognizing our total dependence on God. It is the opposite of pride and self-sufficiency.</div>
<div class="beatitude-item"><strong>Blessed are those who mourn, for they shall be comforted.</strong><br/>Those who grieve over sin and the world's suffering will be consoled by God's mercy.</div>
<div class="beatitude-item"><strong>Blessed are the meek, for they shall inherit the earth.</strong><br/>Meekness is strength under control, not weakness. The meek trust God rather than force.</div>
<div class="beatitude-item"><strong>Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.</strong><br/>The desire for justice and holiness will be fulfilled in the Kingdom of God.</div>
<div class="beatitude-item"><strong>Blessed are the merciful, for they shall obtain mercy.</strong><br/>Showing mercy to others opens our hearts to receive God's own mercy.</div>
<div class="beatitude-item"><strong>Blessed are the pure in heart, for they shall see God.</strong><br/>Purity of heart means a single-minded focus on God, free from duplicity and sin.</div>
<div class="beatitude-item"><strong>Blessed are the peacemakers, for they shall be called sons of God.</strong><br/>Those who work for true peace share in God's own work.</div>
<div class="beatitude-item"><strong>Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven.</strong><br/>The willingness to suffer for truth and justice unites us to Christ who was persecuted.</div>
</div>
<blockquote>The Beatitudes respond to the natural desire for happiness. They teach us the final end to which God calls us. - CCC 1718</blockquote>`,
    source: "Matthew 5:3-12; CCC 1716-1729",
  },
  {
    slug: "seven-sacraments", title: "The Seven Sacraments", category: "Sacraments", sortOrder: 3,
    content: `<h2>The Seven Sacraments</h2>
<p>The sacraments are efficacious signs of grace, instituted by Christ and entrusted to the Church, by which divine life is dispensed to us. There are seven sacraments of the New Law.</p>
<h2>Sacraments of Initiation</h2>
<ul>
<li><strong>Baptism</strong> — The foundation of Christian life. It forgives original and personal sin, incorporates us into the Church, and makes us children of God. Water is poured while saying: "I baptize you in the name of the Father, and of the Son, and of the Holy Spirit."</li>
<li><strong>Confirmation</strong> — The completion of Baptism. The Holy Spirit is given in a special way to strengthen us for our mission. The Bishop anoints with chrism: "Be sealed with the Gift of the Holy Spirit."</li>
<li><strong>Eucharist</strong> — The source and summit of Christian life. The Body, Blood, Soul, and Divinity of Christ are truly present under the appearances of bread and wine. The Mass makes Calvary present.</li>
</ul>
<h2>Sacraments of Healing</h2>
<ul>
<li><strong>Penance and Reconciliation</strong> — Through the ministry of the priest, God forgives sins committed after Baptism. The penitent must confess sins, express contrition, and receive absolution.</li>
<li><strong>Anointing of the Sick</strong> — Strength and healing for those suffering from serious illness or old age. It unites the sick person's suffering to Christ's Passion.</li>
</ul>
<h2>Sacraments at the Service of Communion</h2>
<ul>
<li><strong>Holy Orders</strong> — The sacrament by which men are ordained as bishops, priests, or deacons to serve the Church. They act in persona Christi Capitis (in the person of Christ the Head).</li>
<li><strong>Matrimony</strong> — The covenant between a man and a woman, elevated by Christ to a sacrament. It is a permanent, exclusive, and life-giving union that mirrors Christ's love for the Church.</li>
</ul>`,
    source: "CCC 1210-1666",
  },
  {
    slug: "seven-deadly-sins", title: "The Seven Deadly Sins and Virtues", category: "Virtues & Sins", sortOrder: 4,
    content: `<h2>The Seven Deadly Sins</h2>
<p>Also called capital sins, these are the root sins from which all others spring. Each deadly sin has a corresponding virtue that overcomes it.</p>
<ul>
<li><strong>Pride</strong> — Disordered self-love, refusing to acknowledge God's supremacy. Overcome by: <em>Humility</em> — knowing our true place before God.</li>
<li><strong>Avarice (Greed)</strong> — Excessive desire for wealth and possessions. Overcome by: <em>Generosity</em> — freely giving to God and neighbor.</li>
<li><strong>Envy</strong> — Sorrow at another's good and desire to deprive them of it. Overcome by: <em>Brotherly love</em> — rejoicing in others' blessings.</li>
<li><strong>Wrath (Anger)</strong> — Disordered desire for revenge; excessive anger. Overcome by: <em>Meekness</em> — patient, controlled strength.</li>
<li><strong>Lust</strong> — Disordered desire for sexual pleasure outside of God's order. Overcome by: <em>Chastity</em> — integrity of the person in the sexual sphere.</li>
<li><strong>Gluttony</strong> — Immoderate desire for food or drink. Overcome by: <em>Temperance</em> — moderation in all things.</li>
<li><strong>Sloth (Acedia)</strong> — Spiritual laziness; sadness about spiritual goods. Overcome by: <em>Diligence</em> — fervent pursuit of God.</li>
</ul>
<blockquote>"Capital sins engender other sins, other vices." — CCC 1866</blockquote>`,
    source: "CCC 1866; Gregory the Great, Moralia in Job",
  },
  {
    slug: "theological-virtues", title: "The Theological Virtues", category: "Virtues & Sins", sortOrder: 5,
    content: `<h2>The Theological Virtues</h2>
<p>The theological virtues are infused by God into the souls of the faithful at Baptism. They relate directly to God and are the foundation of Christian moral activity.</p>
<ul>
<li><strong>Faith</strong> — The virtue by which we believe in God and believe all that He has said and revealed, because He is truth itself. Faith is the beginning of eternal life in us. Without faith it is impossible to please God (Hebrews 11:6).</li>
<li><strong>Hope</strong> — The virtue by which we desire the Kingdom of Heaven and eternal life as our happiness, placing our trust in Christ's promises and relying on the Holy Spirit's grace. Hope keeps us from discouragement and sustains us through trials.</li>
<li><strong>Charity (Love)</strong> — The greatest of all virtues. By charity we love God above all things for His own sake, and our neighbor as ourselves for the love of God. Charity is the bond of perfection and the form of all virtues. Without it, all else is nothing (1 Corinthians 13).</li>
</ul>
<blockquote>"So faith, hope, love abide, these three; but the greatest of these is love." — 1 Corinthians 13:13</blockquote>`,
    source: "CCC 1812-1829; 1 Corinthians 13:13",
  },
  {
    slug: "cardinal-virtues", title: "The Cardinal Virtues", category: "Virtues & Sins", sortOrder: 6,
    content: `<h2>The Cardinal Virtues</h2>
<p>The four cardinal virtues are the hinge virtues (from the Latin <em>cardo</em>, hinge) upon which the moral life turns. They can be acquired through human effort and are also elevated by grace.</p>
<ul>
<li><strong>Prudence</strong> — The "charioteer of the virtues." It is the right reason applied to action — knowing what is good and how to attain it. Prudence guides the other virtues and is necessary for all moral decision-making.</li>
<li><strong>Justice</strong> — The constant and firm will to give God and neighbor their due. Justice governs our relationships with others and with God. It includes legal justice, distributive justice, and commutative justice.</li>
<li><strong>Fortitude</strong> — The moral virtue that ensures firmness in difficulties and constancy in pursuing the good. It strengthens the resolve to resist temptation and to overcome obstacles to living rightly. Martyrdom is the supreme act of fortitude.</li>
<li><strong>Temperance</strong> — The virtue that moderates the attraction of pleasures and provides balance in the use of created goods. It ensures the will's mastery over instinct and keeps desires within the limits of what is honorable.</li>
</ul>
<blockquote>"The human virtues are stable dispositions of the intellect and the will that govern our acts, order our passions, and guide our conduct." — CCC 1804</blockquote>`,
    source: "CCC 1805-1811; Wisdom 8:7",
  },
  {
    slug: "gifts-holy-spirit", title: "Gifts of the Holy Spirit", category: "Holy Spirit", sortOrder: 7,
    content: `<h2>The Seven Gifts of the Holy Spirit</h2>
<p>The gifts of the Holy Spirit are permanent dispositions that make us docile to the movements of the Holy Spirit. They are given at Baptism and strengthened at Confirmation.</p>
<ul>
<li><strong>Wisdom</strong> — Enables us to see the world and ourselves from God's perspective, judging all things according to divine truth.</li>
<li><strong>Understanding</strong> — Deepens our insight into the truths of the Faith, enabling us to grasp what we believe more profoundly.</li>
<li><strong>Counsel (Right Judgment)</strong> — Helps us make right decisions in difficult situations, discerning God's will.</li>
<li><strong>Fortitude (Courage)</strong> — Strengthens us to overcome fear and difficulty in living the faith and witnessing to it.</li>
<li><strong>Knowledge</strong> — Enables us to know how to live according to God's will and what truly matters in life.</li>
<li><strong>Piety (Reverence)</strong> — Fills our hearts with love, reverence, and filial affection for God as our Father and for all people as His children.</li>
<li><strong>Fear of the Lord (Wonder and Awe)</strong> — Not servile fear, but reverent awe at God's majesty and holiness, leading us to avoid sin out of love for God.</li>
</ul>
<blockquote>"The Spirit of the Lord shall rest upon him, the spirit of wisdom and understanding, the spirit of counsel and might, the spirit of knowledge and the fear of the Lord." — Isaiah 11:2</blockquote>`,
    source: "Isaiah 11:2-3; CCC 1830-1831",
  },
  {
    slug: "fruits-holy-spirit", title: "Fruits of the Holy Spirit", category: "Holy Spirit", sortOrder: 8,
    content: `<h2>The Twelve Fruits of the Holy Spirit</h2>
<p>The fruits of the Holy Spirit are perfections that the Holy Spirit forms in us as the first-fruits of eternal glory. They are signs of the Spirit's active presence in a soul.</p>
<ul>
<li><strong>Charity (Love)</strong> — The perfection of love toward God and neighbor.</li>
<li><strong>Joy</strong> — The spiritual gladness that flows from union with God, distinct from worldly pleasure.</li>
<li><strong>Peace</strong> — The tranquility of order; the serenity that comes from right relationship with God.</li>
<li><strong>Patience</strong> — The ability to endure suffering, wrongs, and difficulties with equanimity.</li>
<li><strong>Kindness</strong> — Benevolence and goodness toward others in thought and action.</li>
<li><strong>Goodness</strong> — The generosity that gives freely without calculation.</li>
<li><strong>Generosity (Long-suffering)</strong> — Magnanimity; a large-hearted willingness to give.</li>
<li><strong>Gentleness (Meekness)</strong> — Mildness in dealing with others; the absence of harshness.</li>
<li><strong>Faithfulness</strong> — Fidelity to God and to one's commitments and obligations.</li>
<li><strong>Modesty</strong> — Proper restraint in dress, speech, and behavior.</li>
<li><strong>Self-control (Continence)</strong> — Mastery of one's desires and passions.</li>
<li><strong>Chastity</strong> — The integration of sexuality according to one's state in life.</li>
</ul>`,
    source: "Galatians 5:22-23; CCC 1832",
  },
  {
    slug: "corporal-works-mercy", title: "Corporal Works of Mercy", category: "Works of Mercy", sortOrder: 9,
    content: `<h2>The Seven Corporal Works of Mercy</h2>
<p>The corporal works of mercy are charitable actions by which we help our neighbors in their bodily needs. They are inspired by the words of Christ in Matthew 25:31-46.</p>
<ul>
<li><strong>Feed the hungry</strong> — Provide food to those who lack it. Food banks, soup kitchens, and sharing our table are expressions of this mercy.</li>
<li><strong>Give drink to the thirsty</strong> — Provide water and drink to those in need. This includes working for clean water access for the poor.</li>
<li><strong>Clothe the naked</strong> — Provide clothing to those who need it. Clothing drives and donating to the poor fulfill this work.</li>
<li><strong>Shelter the homeless</strong> — Provide shelter and housing to those without it. Hospitality is a fundamental Christian virtue.</li>
<li><strong>Visit the sick</strong> — Care for the ill, the suffering, and the elderly. Hospital and nursing home ministry, and caring for sick family members, fulfill this work.</li>
<li><strong>Visit the imprisoned</strong> — Minister to prisoners and those in legal trouble. Prison ministry and advocating for just treatment of prisoners expresses this mercy.</li>
<li><strong>Bury the dead</strong> — Provide proper burial for the deceased. Caring for the bodies of the dead with dignity and praying for the departed expresses our belief in bodily resurrection.</li>
</ul>
<blockquote>"'Lord, when did we see thee hungry and feed thee...?' And the King will answer them, 'Truly I say to you, as you did it to one of the least of these my brethren, you did it to me.'" — Matthew 25:37, 40</blockquote>`,
    source: "Matthew 25:31-46; CCC 2447",
  },
  {
    slug: "spiritual-works-mercy", title: "Spiritual Works of Mercy", category: "Works of Mercy", sortOrder: 10,
    content: `<h2>The Seven Spiritual Works of Mercy</h2>
<p>The spiritual works of mercy are charitable actions by which we help our neighbors in their spiritual needs. They often require more courage and delicacy than the corporal works.</p>
<ul>
<li><strong>Counsel the doubtful</strong> — Help those who are uncertain in faith or facing difficult decisions with wise and gentle guidance.</li>
<li><strong>Instruct the ignorant</strong> — Share the faith through catechesis, evangelization, and answering sincere questions about God and the Church.</li>
<li><strong>Admonish sinners</strong> — Charitably correct those living in serious sin, out of love for their eternal soul. This requires prudence and courage.</li>
<li><strong>Comfort the afflicted</strong> — Console those who suffer grief, loss, anxiety, or despair with the compassion of Christ.</li>
<li><strong>Forgive offenses</strong> — Forgive those who have wronged us, as God has forgiven us. This frees both the offender and the one who forgives.</li>
<li><strong>Bear wrongs patiently</strong> — Accept injustices and difficulties with patience, offering them to God without bitterness or resentment.</li>
<li><strong>Pray for the living and the dead</strong> — Intercede for all people, including our enemies and the souls in Purgatory. This is the universal work of mercy available to all.</li>
</ul>`,
    source: "CCC 2447; Tobit 12:8; Isaiah 58:6-7",
  },
  {
    slug: "four-last-things", title: "The Four Last Things", category: "Eschatology", sortOrder: 11,
    content: `<h2>The Four Last Things</h2>
<p>The Church encourages meditation on the Four Last Things — Death, Judgment, Heaven, and Hell — as a means of living wisely and pursuing holiness.</p>
<h2>Death</h2>
<p>Physical death is the separation of the soul from the body. It is a consequence of original sin. At death, the soul immediately faces judgment. Death is not to be feared by the Christian, for it is the gateway to eternal life. "For to me to live is Christ, and to die is gain." (Philippians 1:21)</p>
<h2>Judgment</h2>
<p>There are two judgments: the <strong>Particular Judgment</strong>, which occurs immediately at death for each individual soul, and the <strong>General (Last) Judgment</strong>, which occurs at the end of time when all will be revealed before God and one another.</p>
<h2>Heaven</h2>
<p>Heaven is the ultimate end and fulfillment of the deepest human longings — the state of supreme happiness in the presence of God. The Beatific Vision — seeing God face to face — constitutes the fullness of heaven. "Eye has not seen, nor ear heard... what God has prepared for those who love him." (1 Corinthians 2:9)</p>
<h2>Hell</h2>
<p>Hell is the state of definitive self-exclusion from communion with God, chosen freely by the person who dies in mortal sin without repentance. The Church affirms the existence of hell and its eternity, while not declaring any particular person to be in hell. God desires all to be saved (1 Timothy 2:4) and mercy is always available until death.</p>
<p><em>Note: Purgatory is the state of purification for those who die in God's grace but still need purification before entering heaven. The Church prays for the souls in Purgatory.</em></p>`,
    source: "CCC 1020-1060; 1023-1029; 1033-1037",
  },
  {
    slug: "precepts-church", title: "Precepts of the Church", category: "Commandments", sortOrder: 12,
    content: `<h2>The Five Precepts of the Church</h2>
<p>The precepts of the Church are positive laws made by the Church to guarantee the minimum of prayer and moral effort required for growth in the love of God and neighbor. They represent the absolute minimum for a Catholic.</p>
<ol>
<li><strong>Attend Mass on Sundays and Holy Days of Obligation and rest from servile work.</strong><br/>Sunday Mass is the central act of Catholic worship. Missing Mass on Sunday without grave reason is a serious sin.</li>
<li><strong>Confess your sins at least once a year.</strong><br/>The Easter duty of confession ensures that Catholics receive the grace of the Sacrament of Penance at least annually, especially before Easter Communion.</li>
<li><strong>Receive Holy Communion at least once during the Easter season.</strong><br/>The Easter duty of Communion (known as receiving one's "Easter Duty") ensures union with Christ through the Eucharist.</li>
<li><strong>Observe the days of fasting and abstinence.</strong><br/>Days of fasting (limited food) and abstinence (no meat) are mandated. In the Latin Church: abstinence every Friday, fasting and abstinence on Ash Wednesday and Good Friday.</li>
<li><strong>Provide for the material needs of the Church according to one's abilities.</strong><br/>Catholics have a duty to contribute to the financial support of the Church, which serves its mission of worship and charity.</li>
</ol>`,
    source: "CCC 2041-2043",
  },
  {
    slug: "mysteries-rosary", title: "The Mysteries of the Rosary", category: "The Rosary", sortOrder: 13,
    content: `<h2>The Twenty Mysteries of the Rosary</h2>
<p>The Rosary meditates on the life of Christ through the eyes of Mary. Pope John Paul II added the Luminous Mysteries in 2002, bringing the total to twenty.</p>
<h2>The Joyful Mysteries (Monday & Saturday)</h2>
<ol>
<li>The Annunciation — The Angel Gabriel announces to Mary that she will conceive the Son of God (Luke 1:26-38)</li>
<li>The Visitation — Mary visits her cousin Elizabeth, who recognizes the Lord (Luke 1:39-56)</li>
<li>The Nativity — Jesus is born in Bethlehem, laid in a manger (Luke 2:1-20)</li>
<li>The Presentation — Jesus is presented in the Temple; Simeon prophesies (Luke 2:22-38)</li>
<li>The Finding in the Temple — The twelve-year-old Jesus is found teaching in the Temple (Luke 2:41-52)</li>
</ol>
<h2>The Luminous Mysteries (Thursday)</h2>
<ol>
<li>The Baptism of Jesus — Jesus is baptized in the Jordan; the Trinity is revealed (Matthew 3:13-17)</li>
<li>The Wedding at Cana — Jesus performs His first miracle at Mary's request (John 2:1-11)</li>
<li>The Proclamation of the Kingdom — Jesus preaches repentance and the coming of the Kingdom (Mark 1:14-15)</li>
<li>The Transfiguration — Jesus is transfigured in glory before Peter, James, and John (Matthew 17:1-8)</li>
<li>The Institution of the Eucharist — Jesus gives us His Body and Blood at the Last Supper (Luke 22:14-20)</li>
</ol>
<h2>The Sorrowful Mysteries (Tuesday & Friday)</h2>
<ol>
<li>The Agony in the Garden — Jesus prays in Gethsemane and is betrayed (Luke 22:39-53)</li>
<li>The Scourging at the Pillar — Jesus is brutally scourged by Roman soldiers (John 19:1)</li>
<li>The Crowning with Thorns — Soldiers mock Jesus as King and crown Him with thorns (Matthew 27:27-30)</li>
<li>The Carrying of the Cross — Jesus carries His Cross to Calvary (John 19:17)</li>
<li>The Crucifixion — Jesus is crucified and dies for our sins (John 19:18-30)</li>
</ol>
<h2>The Glorious Mysteries (Wednesday & Sunday)</h2>
<ol>
<li>The Resurrection — Jesus rises from the dead on the third day (John 20:1-18)</li>
<li>The Ascension — Jesus ascends to the right hand of the Father (Acts 1:6-11)</li>
<li>The Descent of the Holy Spirit — The Holy Spirit descends at Pentecost (Acts 2:1-13)</li>
<li>The Assumption of Mary — Mary is taken body and soul into Heaven</li>
<li>The Coronation of Mary — Mary is crowned Queen of Heaven and Earth</li>
</ol>`,
    source: "Rosarium Virginis Mariae (John Paul II, 2002); CCC 971",
  },
];

// ─── SAINT BIO BUILDER ────────────────────────────────────────────────────────

function buildTagParagraph(name: string, tags: string[]): string {
  const roles: string[] = [];
  if (tags.some(t => ["martyr","martyrdom"].includes(t))) roles.push("a martyr who gave their life for the faith");
  if (tags.some(t => t === "doctor" || t.includes("doctor"))) roles.push("a Doctor of the Church whose writings enrich Catholic theology");
  if (tags.some(t => t === "founder" || t.includes("founder"))) roles.push("a founder of a religious community");
  if (tags.some(t => ["bishop","archbishop","patriarch"].includes(t))) roles.push("a bishop who shepherded God's people");
  if (tags.some(t => t === "pope")) roles.push("a pope who guided the universal Church");
  if (tags.some(t => ["mystic","stigmatist"].includes(t))) roles.push("a mystic blessed with deep spiritual gifts");
  if (tags.some(t => ["missionary","apostle"].includes(t))) roles.push("a missionary who brought the Gospel to new peoples");
  if (tags.some(t => ["monk","nun","religious","friar"].includes(t))) roles.push("a consecrated religious who gave their life fully to God");
  if (tags.some(t => ["virgin","consecrated"].includes(t))) roles.push("a consecrated virgin who witnessed to the Kingdom");
  if (roles.length === 0) roles.push("a holy person who lived the faith heroically");
  const roleStr = roles.slice(0, 2).join(" and ");
  return `<p>${name} was ${roleStr}. Through their example, the Church sees the universal call to holiness made concrete — that every person, in every state of life, is called to become a saint.</p>`;
}

function buildSaintBio(saint: { name: string; shortBio: string; feastDate: string; patronOf?: string; bornYear?: string; diedYear?: string; tags: string[] }): string {
  const parts: string[] = [];
  parts.push(`<p>${saint.shortBio}</p>`);
  const lifespan = [saint.bornYear && `born c. ${saint.bornYear}`, saint.diedYear && `died ${saint.diedYear}`].filter(Boolean).join(", ");
  if (lifespan) {
    parts.push(`<p>${saint.name} (${lifespan}) is commemorated by the Catholic Church on ${saint.feastDate}. Their life stands as a witness to the transforming power of grace and the reality that holiness is possible in every era of history.</p>`);
  } else {
    parts.push(`<p>${saint.name} is commemorated by the Catholic Church on ${saint.feastDate}. Their witness of faith continues to inspire the faithful throughout the world, a living sign that God's grace is at work in human lives.</p>`);
  }
  parts.push(buildTagParagraph(saint.name, saint.tags));
  if (saint.patronOf) {
    parts.push(`<h2>Patronage</h2>\n<p>${saint.name} is invoked as patron of ${saint.patronOf}. In Catholic tradition, the saints continue to intercede for the living from their place in heaven, united with us through the Communion of Saints. Devotion to one's patron saint is an ancient and beloved practice of the faithful.</p>`);
  }
  parts.push(`<h2>Veneration</h2>\n<p>The Catholic Church honors her saints not by worshipping them, but by honoring Christ who is glorified in them. Canonization affirms that a person lived heroic virtue and is with God in heaven. We honor the saints, seek their intercession, and are inspired by their examples to follow Christ more faithfully.</p>`);
  return parts.join("\n");
}

// ─── MAIN MUTATION ────────────────────────────────────────────────────────────

export const seedContent = mutation({
  args: {},
  handler: async (ctx) => {
    // Prayers
    const existingPrayers = await ctx.db.query("prayers").collect();
    const existingSlugs = new Set(existingPrayers.map(p => p.slug));
    let prayerCount = 0;
    for (const p of PRAYERS) {
      if (!existingSlugs.has(p.slug)) {
        await ctx.db.insert("prayers", {
          slug: p.slug, title: p.title, category: p.category,
          text: p.text, latinText: p.latinText, origin: p.origin, notes: p.notes,
          sortOrder: p.sortOrder, isActive: true,
        });
        prayerCount++;
      }
    }

    // Verses
    const existingVerses = await ctx.db.query("verses").collect();
    const existingVKey = new Set(existingVerses.map(v => `${v.book}|${v.chapter}|${v.verse}`));
    let verseCount = 0;
    for (const v of VERSES) {
      const key = `${v.book}|${v.chapter}|${v.verse}`;
      if (!existingVKey.has(key)) {
        await ctx.db.insert("verses", {
          book: v.book, chapter: v.chapter, verse: v.verse,
          verseEnd: v.verseEnd, text: v.text, translation: v.translation,
          category: v.category, tags: v.tags, isActive: true,
        });
        verseCount++;
      }
    }

    // Formulas
    const existingFormulas = await ctx.db.query("formulas").collect();
    const existingFSlugs = new Set(existingFormulas.map(f => f.slug));
    let formulaCount = 0;
    for (const f of FORMULAS) {
      if (!existingFSlugs.has(f.slug)) {
        await ctx.db.insert("formulas", {
          slug: f.slug, title: f.title, category: f.category,
          content: f.content, source: f.source,
          sortOrder: f.sortOrder, isActive: true,
        });
        formulaCount++;
      }
    }

    // Enrich saint bios — update those with thin fullBio
    const allSaints = await ctx.db.query("saints").collect();
    let bioCount = 0;
    for (const saint of allSaints) {
      if (!saint.fullBio || saint.fullBio.length < 200) {
        const newBio = buildSaintBio({
          name: saint.name,
          shortBio: saint.shortBio,
          feastDate: saint.feastDate,
          patronOf: saint.patronOf,
          bornYear: saint.bornYear,
          diedYear: saint.diedYear,
          tags: saint.tags || [],
        });
        await ctx.db.patch(saint._id, { fullBio: newBio });
        bioCount++;
      }
    }

    return { prayers: prayerCount, verses: verseCount, formulas: formulaCount, saintsEnriched: bioCount };
  },
});
