import { mutation } from "./_generated/server";

type SaintBio = {
  name: string;
  fullBio: string;
  quote?: string;
  reflection?: string;
  prayerToSaint?: string;
  feastType?: string;
  liturgicalColor?: string;
  canonizedBy?: string;
};

const SAINT_BIOS: SaintBio[] = [

  // ── OCTOBER ──────────────────────────────────────────────────────────────

  {
    name: "Saint Francis of Assisi",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory IX (1228)",
    quote: "Preach the Gospel at all times. Use words if necessary.",
    fullBio: `<h3>The Perfect Fool</h3>
<p>Giovanni di Pietro di Bernardone was born in 1181-82 in Assisi, Umbria, Italy, the son of a prosperous cloth merchant, Pietro di Bernardone, and a French noblewoman named Pica. He was nicknamed "Francesco" (the Frenchman) by his father. Young Francis was charming, ambitious, and popular — the leader of Assisi's youth, dreaming of knightly glory. He fought in a skirmish against Perugia, was captured and spent a year as a prisoner, then fell seriously ill. Through this suffering and a series of mystical encounters — a voice from a crucifix, a leper on the road, a vision in the ruined chapel of San Damiano — he underwent a total conversion.</p>

<h3>The Radical Choice</h3>
<p>Francis's conversion was publicly dramatized in the piazza before the Bishop of Assisi: when his outraged father sued him for giving away goods, Francis appeared before the bishop, stripped off his fine clothes, handed them to his father, and said: "Until now I have called Pietro Bernardone my father. From now on I can say with greater truth: Our Father, who art in heaven." He spent several years restoring ruined chapels by hand, caring for lepers, and beginning to gather followers. He had understood the voice from the cross at San Damiano literally: "Go, Francis, repair my house, which as you see is falling into ruin" — before understanding that the house God wanted repaired was not a building but the Church itself.</p>

<h3>The Friars Minor</h3>
<p>The Order of Friars Minor (Little Brothers) grew rapidly from a dozen companions to thousands. Francis's vision was radical: absolute poverty (the friars owned nothing individually or collectively), itinerant preaching, and total dependence on divine providence. He preached to cardinals and criminals, tried to preach to the Sultan of Egypt during the Fifth Crusade (1219 — he crossed enemy lines alone), and composed the <em>Canticle of Brother Sun</em>, one of the earliest and most beautiful poems in the Italian language. In 1224, he received the stigmata — the wounds of Christ — on Mount La Verna. He died on October 3, 1226, singing Psalm 141. He is patron of Italy, ecology, animals, and merchants.</p>`,
    reflection: "Francis of Assisi stripped off his clothes in a public piazza and handed them to his father, and the gesture was so pure that it echoed through eight centuries. He did not establish a new theology; he did not found a university or a charity organization. He chose poverty — radical, joyful, absolute poverty — as a way of demonstrating that God is enough. When he preached the Gospel at all times and used words only when necessary, he meant that a life lived in the joy of poverty is itself the Gospel. His feast follows the feast of the Guardian Angels; one could argue that Francis was himself an angelic figure — pure spirit in earthly form.",
    prayerToSaint: "O Saint Francis of Assisi, little poor man of Assisi and patron of ecology and animals, you stripped yourself of everything and found in nothing everything. Intercede for the poor of the world, for all who care for creation, for the Franciscan family worldwide, and for Italy. Help us to loosen our grip on the things we hold too tightly, to find in simplicity the freedom you found, and to sing with you the praises of Brother Sun and Sister Moon and all their creatures. Amen.",
  },

  {
    name: "Saint Teresa of Avila",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory XV (1622); Doctor declared 1970",
    quote: "Let nothing trouble you, let nothing frighten you. All things are passing. God never changes. Patience obtains all things. Nothing is wanting to him who possesses God. God alone suffices.",
    fullBio: `<h3>The Determined Woman</h3>
<p>Teresa de Ahumada y Cepeda was born on March 28, 1515, in Ávila, Castile, Spain. Her father was of Jewish converso background, her mother a devout noblewoman who died when Teresa was twelve. Teresa was beautiful, charming, and social — fond of romance novels and of male attention. Her father, fearing for her moral safety, placed her in an Augustinian convent school; she fell ill and returned home, but the experience had awakened a desire for religious life. Against her father's wishes she entered the Carmelite Convent of the Incarnation in Ávila in 1535. She was twenty years old, and she would transform the Church's understanding of prayer.</p>

<h3>The Interior Castle</h3>
<p>Teresa's religious life was initially tepid — she struggled for nearly twenty years with lukewarm prayer and social distraction. The turning point came around 1554: she experienced a conversion before an image of the wounded Christ and entered a period of intense mystical experience that she spent the rest of her life analyzing and describing. Her major works — <em>The Life</em>, <em>The Way of Perfection</em>, and <em>The Interior Castle</em> — are the most systematic and accessible account of mystical prayer in Catholic tradition. The <em>Interior Castle</em> describes the soul as a castle of many rooms, and prayer as the movement from the outer rooms toward the center, where God dwells.</p>

<h3>The Carmelite Reform</h3>
<p>In 1562, Teresa founded the first house of the Discalced Carmelites — a reform movement returning to the original Carmelite rule of strict poverty, enclosure, and prayer. She founded seventeen more convents in her lifetime, traveling across Spain in a covered wagon while writing her major works, establishing each community, training novices, and fighting institutional resistance. She collaborated closely with John of the Cross, who led the reform for men. She died on October 4, 1582 — the night the Gregorian calendar was introduced, so that she died on October 4 (Julian) and was buried on October 15 (Gregorian). She was the first woman declared a Doctor of the Church (1970).</p>`,
    reflection: "Teresa of Ávila's nada te turbe — 'let nothing trouble you' — is not the advice of someone who has not been troubled. She fought institutional resistance, traveled in rickety wagons across Spain in her sixties, argued with bishops and provincials, founded seventeen convents, and described mystical states that no one had ever clearly described before. She was troubled by almost everything, and she overcame her trouble by returning again and again to the conviction that God alone suffices. It is advice hard-won from the hardships of a very active and very contemplative life.",
    prayerToSaint: "O Saint Teresa of Ávila, doctor of the Church and mother of the Carmelite reform, you built seventeen houses of prayer and wrote the most penetrating account of mystical experience in the Catholic tradition. Intercede for all Carmelite communities, for all who struggle with lukewarm prayer, and for all who feel the call to a deeper interior life. Help us to enter the interior castle, to move from the outer rooms toward the center where God dwells, and to find there, as you found, that God alone suffices. Amen.",
  },

  {
    name: "Saint John XXIII",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Francis (2014)",
    quote: "It is not that the Gospel has changed; it is that we have begun to understand it better.",
    fullBio: `<h3>Good Pope John</h3>
<p>Angelo Giuseppe Roncalli was born on November 25, 1881, in Sotto il Monte, Bergamo, Lombardy — a farming village near the Alps — the fourth of thirteen children in a peasant family. He was ordained a priest in 1904, served as secretary to the Bishop of Bergamo, worked as a military chaplain in World War I, and entered the Vatican's diplomatic service in 1925. He served as apostolic delegate to Bulgaria (1925-1934), to Turkey and Greece (1934-1944), and as papal nuncio to France (1944-1953) — navigating the complex aftermath of the German occupation and collaborationism controversies. He became Patriarch of Venice in 1953 and was elected Pope on October 28, 1958, at age seventy-six — widely expected to be a transitional pope.</p>

<h3>The Second Vatican Council</h3>
<p>Pope John XXIII surprised everyone. Within three months of his election he announced the Second Vatican Council — the first ecumenical council in almost a century. He described his intention with a new word: <em>aggiornamento</em> — updating, bringing up to date. He wanted to open the Church to the modern world not to accommodate it but to engage it: to find new ways of expressing the ancient faith, to promote Christian unity (ecumenism), and to address the social, political, and cultural realities of the mid-twentieth century. His opening speech to the Council (October 1962) is one of the great theological addresses of the twentieth century.</p>

<h3>Death and Canonization</h3>
<p>John XXIII died of stomach cancer on June 3, 1963, after only four and a half years as pope — before the Council he had convened had completed its work. He had governed with warmth, humor, and accessibility that won the affection of people far beyond the Catholic world; the announcement of his death produced grief even in non-Catholic countries. He was beatified by Pope John Paul II in 2000 and canonized with Pope John Paul II by Pope Francis on April 27, 2014.</p>`,
    reflection: "John XXIII called a council at seventy-six and died before it finished. He opened windows he would never look through. He planted seeds he would never harvest. His gift to the Church was trust: the trust that the Holy Spirit could guide the Church through renewal, that the ancient faith did not need to be protected from the modern world by fearful defensiveness but could engage it with confident love. The Gospel had not changed; we had begun to understand it better. That confidence was itself a form of holiness.",
    prayerToSaint: "O Saint John XXIII, good pope and father of the Second Vatican Council, you opened the windows of the Church to the Spirit and trusted that what came in would not extinguish but fan the flame. Intercede for the ongoing reception of the Council, for all who work for Christian unity, and for all who must make bold decisions without seeing the outcome. Help us to trust the Spirit as you trusted Him, and to serve the Church with the warmth, humility, and holy confidence that marked your brief and fruitful pontificate. Amen.",
  },

  {
    name: "Saint Luke the Evangelist",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "The Spirit of the Lord is upon me, because he has anointed me to bring good news to the poor.",
    fullBio: `<h3>The Beloved Physician</h3>
<p>Luke is mentioned three times in the New Testament: by Paul, who calls him "the beloved physician" (Colossians 4:14) and "my fellow worker" (Philemon 24); and in 2 Timothy 4:11, where Paul says "only Luke is with me" during his Roman imprisonment. He was almost certainly a Gentile — possibly a native of Antioch in Syria — and is the only Gentile author in the New Testament canon. He wrote both the Gospel of Luke (the longest single book in the New Testament) and the Acts of the Apostles, which together constitute about 27% of the entire New Testament.</p>

<h3>The Gospel of Mercy</h3>
<p>Luke's Gospel is distinguished by its emphasis on mercy, the poor, women, Gentiles, and prayer. It alone contains the parables of the Prodigal Son, the Good Samaritan, the Lost Sheep, and the Lost Coin — the great parables of divine compassion. It alone contains the Infancy Narratives that gave the Church the Magnificat, the Benedictus, and the Nunc Dimittis — three canticles that have been prayed daily in the Liturgy of the Hours ever since. Luke's is the Gospel that shows Jesus weeping over Jerusalem, that records his words from the cross including "Father, forgive them" and "Today you will be with me in paradise." It is the Gospel most associated with mercy, joy, and the Spirit.</p>

<h3>Tradition and Patronages</h3>
<p>Tradition (from the sixth century onward) holds that Luke was also a painter who painted the first icon of the Virgin Mary. This tradition is not historical, but it reflects Luke's reputation as the most vivid and humanly detailed of the evangelists — his portrait of Mary, particularly in the Infancy Narratives, is so intimate that it was natural to imagine him as having known her personally and depicted her visually. He is patron of physicians, surgeons, artists, and painters. His feast is October 18.</p>`,
    reflection: "Luke's Gospel is the Gospel of the poor, the women, the Gentiles, and the sinners. It is the Gospel of the prodigal son's father running down the road, of the Good Samaritan who crossed the ethnic boundary, of the woman sweeping her whole house to find one lost coin. Luke gives us a God who runs, who searches, who sweeps — a God whose mercy is not passive but active, not dignified but urgent. His Gospel is the one the Church returns to most often when it needs to be reminded who God is and who the Church exists for.",
    prayerToSaint: "O Saint Luke the Evangelist, beloved physician and painter of the Virgin, you gave the Church the parables of mercy and the canticles of the poor. Intercede for all physicians and artists, for all who preach the Gospel to those the world has forgotten, and for all who read and study the Scriptures. Help us to receive your Gospel as the announcement it is — good news for the poor, liberty for captives, sight for the blind — and to live it outward with the same urgency with which you wrote it. Amen.",
  },

  {
    name: "Saint John of the Cross",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XIII (1726); Doctor declared 1926",
    quote: "In the twilight of life, God will not judge us on our earthly possessions and human successes, but on how well we have loved.",
    fullBio: `<h3>Doctor of the Dark Night</h3>
<p>Juan de Yepes Álvarez was born on June 24, 1542, in Fontiveros, a small village near Ávila, Castile, Spain. He was the youngest of three sons of a weaver who died when Juan was an infant; his mother was left destitute. He grew up in poverty, was educated by charity at a school for poor children in Medina del Campo, and entered the Carmelite Order in 1563 — taking the name John of Saint Matthias. He studied theology at Salamanca, was ordained in 1567, and met Teresa of Ávila that same year. The encounter transformed both of them: Teresa gave John the vision and framework for the male Discalced Carmelite reform; he gave her a brilliant collaborator.</p>

<h3>The Dark Night of the Soul</h3>
<p>In 1577, the unreformed Carmelites (the Calced) kidnapped John and imprisoned him in a tiny cell in Toledo for nine months — a cell in which he could not stand upright, barely lit, with a single small window near the ceiling. During this imprisonment he composed the first stanzas of his greatest poem, the <em>Spiritual Canticle</em>, from memory. He escaped in August 1578. His imprisonment and the mystical experiences that followed it became the experiential basis for his four great works: the <em>Ascent of Mount Carmel</em>, the <em>Dark Night of the Soul</em>, the <em>Spiritual Canticle</em>, and the <em>Living Flame of Love</em>.</p>

<h3>Theology of the Dark Night</h3>
<p>John's theological-spiritual masterwork is the analysis of the "dark night" — the experience of spiritual desolation, aridity, and what feels like God's absence, which is actually God purifying the soul for deeper union. There are two dark nights: of the senses (purgation of sensory attachments) and of the spirit (much more profound, stripping away even spiritual consolations and concepts). The dark night is not the absence of God but the presence of God purifying the soul by the sheer intensity of light — like the sun that blinds when it is stared at directly. He died on December 14, 1591, aged forty-nine, after a painful illness. He was canonized in 1726 and declared Doctor of the Church in 1926.</p>`,
    reflection: "John of the Cross spent nine months in a three-foot-wide cell, unable to stand, barely able to see, and composed there the most beautiful love poem in the Spanish language. The dark night he endured was not an obstacle to the poem; it was the poem's condition. His theology says the same thing: the apparent absence of God in the dark night is not abandonment but the most intense form of divine presence — purifying by darkness what cannot be purified by light. He wrote about the dark night because he had lived in it, and he found there what he had been seeking his whole life.",
    prayerToSaint: "O Saint John of the Cross, doctor of the dark night and poet of divine love, you were imprisoned in a cell and emerged singing. Intercede for all who are in the dark night — who feel God's absence as an oppressive silence, who pray without consolation, who serve without feeling. Help us to trust your word: that the night is not abandonment but the most intimate approach of the God who is light, and that what feels like death is the path to the deepest union. Amen.",
  },

  {
    name: "Saint Martin of Tours",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Lord, if your people still need me, I will not refuse the work. Your will be done.",
    fullBio: `<h3>The Soldier's Cloak</h3>
<p>Martin was born around 316-317 AD in Sabaria (modern Szombathely, Hungary), the son of a Roman military tribune. At age fifteen, by Roman law, he was required to serve in the army like his father. He became a cavalryman in the imperial guard. The famous event occurred at the gates of Amiens (modern France) around 334: it was a bitterly cold winter and a half-naked beggar was freezing. Martin had only his military cloak; he cut it in two with his sword and gave half to the beggar. That night he dreamed of Christ wearing the half-cloak and saying to the angels: "Martin, still only a catechumen, has clothed me with this garment." He was baptized shortly after.</p>

<h3>Reluctant Bishop</h3>
<p>Martin left the army (claiming it was incompatible with his Christian faith — a historically significant case of conscientious objection), studied under Hilary of Poitiers, founded the first monastery in Gaul at Ligugé (360 AD), and in 371 was tricked into coming to Tours — the people wanted him as their bishop and knew he would refuse if given the choice. He governed the diocese of Tours for more than twenty years, combining episcopal administration with monastic life at the Abbey of Marmoutier, conducting missions throughout Gaul, destroying pagan temples, and performing numerous miracles of healing. He was the first non-martyr to be venerated as a saint in the Western Church.</p>

<h3>Legacy</h3>
<p>Martin died on November 8, 397, in Candes, while on a pastoral visit. His feast on November 11 became one of the great festivals of the medieval Church — Martinmas, associated with the end of harvest, the slaughter of livestock for winter, and the first tasting of new wine. His body was carried to Tours; his shrine became the most important pilgrimage site in France after Rome. He is patron of France (shared with Joan of Arc and Denis), of soldiers, of beggars, and of the poor. His cloak (cappa) was preserved as a relic by the Frankish kings; the chaplains who guarded it were called capellani — the origin of the word "chapel" and "chaplain."</p>`,
    reflection: "Martin cut his cloak in two. He had one cloak, a beggar had none, and he divided what he had. This is the arithmetic of the Gospel: not the hero's gift of abundance, but the disciple's sharing of what little he has. The dream that followed — Christ wearing the half-cloak, telling the angels — gives Martin's act its theological weight: what we give to the poor, we give to Christ. Not metaphorically. Actually. Martin's cloak is one of the most vivid images in Western Christianity of the Incarnation's implications.",
    prayerToSaint: "O Saint Martin of Tours, soldier and bishop, you cut your cloak in half for a freezing beggar and found Christ in the dream that followed. Intercede for all soldiers, for all who serve in the military, for all the poor and homeless who freeze in winter, and for France. Help us to divide what we have when another is freezing, and to recognize in the beggar at the gate the face of the Christ who comes to us in disguise. Amen.",
  },

  {
    name: "Saint Cecilia of Rome",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "I have asked an angel of God as my guardian, and he watches over my body with jealous care.",
    fullBio: `<h3>The Roman Virgin</h3>
<p>Cecilia was a Roman noblewoman who was martyred in the early third century, probably during the pontificate of Pope Urban I (222-230 AD). She is venerated as a virgin martyr and her feast on November 22 has been celebrated in the Roman church since the fifth century, when Pope Symmachus built a basilica in her honor in the Trastevere district of Rome — over what was believed to be her house. Her body was discovered in the catacombs of San Callisto in 820 and translated to the Trastevere basilica by Pope Paschal I, who reported finding her incorrupt.</p>

<h3>The Passion of Cecilia</h3>
<p>The detailed account of her martyrdom, written in the fifth century (much later than her death), is largely legendary but preserves the outline of her veneration. According to the <em>Passio</em>, Cecilia was a Christian noblewoman married against her will to a pagan named Valerian. On her wedding night she told him she was protected by an angel and that if he could see the angel, he must promise to believe. Valerian was baptized by Pope Urban, returned, and saw both Cecilia and the angel with crowns. Both he and his brother Tiburtius were martyred. Cecilia was then condemned to be suffocated in her bathroom; when this failed, she was beheaded. The attempt to kill her with steam in the bathroom — a detail in the medieval accounts — gave her the iconographic attribute of a portable organ or pipes, since the steam mechanism resembled organ pipes. This is the origin of her patronage of music.</p>

<h3>Patroness of Musicians</h3>
<p>The connection between Cecilia and music is medieval in origin (the steam pipes of her martyrdom) but ancient in spirit: she is said to have "sung to God in her heart" on her wedding day. The patronage of musicians was formally attached to her in the fifteenth century; the Academies of Saint Cecilia in Rome (1584), London, and elsewhere perpetuated it. She is patron of musicians, poets, and singers.</p>`,
    reflection: "Cecilia sang to God in her heart on the day she was being married against her will. This is her whole spirituality in one image: whatever the outward circumstances, the interior song continues. Her angel-guardian and her mission to convert her husband and his brother are legendary; her determination to maintain interior freedom in an impossible situation is historically real in the sense that matters — her example sustained it for centuries. She is patron of musicians not because she played an instrument but because her life was music: ordered to God, sustained in suffering, completed in martyrdom.",
    prayerToSaint: "O Saint Cecilia, virgin and martyr of Rome, you sang to God in your heart even as the world forced its demands upon you. Intercede for all musicians, singers, composers, and poets, and for all who try to maintain interior prayer in the midst of outward demands. Help us to find the music within — the interior song that no circumstance can silence — and to offer it to God without ceasing. Amen.",
  },

  {
    name: "Saint Andrew the Apostle",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "I have found the Messiah! — Andrew to Simon Peter",
    fullBio: `<h3>The First Called</h3>
<p>Andrew was a fisherman from Bethsaida, a village on the Sea of Galilee. He was originally a disciple of John the Baptist; when John pointed to Jesus as "the Lamb of God," Andrew and an unnamed companion followed Jesus. Andrew then immediately found his brother Simon Peter and brought him to Jesus (John 1:35-42) — making him the Church's first missionary. The Synoptic Gospels account of Andrew's call is different (Mark 1:16-18, Matthew 4:18-20): Jesus passes along the Sea of Galilee and calls Andrew and Peter from their nets simultaneously.</p>

<h3>The Apostle</h3>
<p>Andrew is named in all four lists of the Twelve (Matthew 10:2, Mark 3:18, Luke 6:14, Acts 1:13) and appears in several significant Gospel scenes: he brings the boy with five loaves and two fish to Jesus (John 6:8-9), and together with Philip he brings the Greek inquirers to Jesus (John 12:22). He is most present in John's Gospel as a figure who mediates access to Christ — always bringing others. After the Resurrection and Pentecost, the New Testament is silent about him; tradition fills in the rest.</p>

<h3>Patron of Scotland and Russia</h3>
<p>Andrew is traditionally said to have preached in Scythia (modern Ukraine and Russia — giving him patronage of Russia and Ukraine), in Greece, and ultimately in Patras in Achaia, where he was crucified on an X-shaped cross (the saltire, or Saint Andrew's Cross) around 60 AD. His relics were translated to Constantinople in 357; some relics were later taken to Amalfi, Italy, and to Patras. A relic said to include his shoulder blade was taken to Scotland in the 8th century, establishing him as patron of Scotland — a claim that gave rise to the saltire as Scotland's national symbol. His feast is November 30.</p>`,
    reflection: "Andrew was the first follower and the first missionary: he found the Messiah, and the first thing he did was find his brother and tell him. This is Andrew's entire vocation in one gesture: to encounter Christ and immediately bring someone else. He is the apostle not of the great speech or the miraculous work but of the simple introduction — 'come and see.' Every apostolate begins with someone doing what Andrew did: finding someone who matters to them and saying, I've found something worth knowing.",
    prayerToSaint: "O Saint Andrew the Apostle, first called and first to bring another, patron of Scotland and Russia and apostle of the cross, intercede for all who are trying to bring their loved ones to Christ. Give us the simplicity and confidence of your mission: not elaborate arguments but the simple invitation — come and see. Intercede for the Church in Scotland, in Russia, in Greece, and in all the lands you evangelized, and help us to be as immediately generous with the discovery of Christ as you were. Amen.",
  },

  // ── NOVEMBER ─────────────────────────────────────────────────────────────

  {
    name: "Saint Ambrose of Milan",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "When I came among you as a young man, unexperienced in worldly ways, what could I tell you except what I have learned from Scripture?",
    fullBio: `<h3>The Governor Who Became Bishop</h3>
<p>Ambrose was born around 339 AD in Augusta Treverorum (Trier, Germany), the son of the Praetorian Prefect of Gaul. He received an excellent education in Rome in rhetoric, law, and Greek, and entered the imperial administration, becoming governor of the provinces of Liguria and Emilia with his seat at Milan around 370. He was not yet baptized when, in 374, a riot broke out in Milan over the election of a new bishop to replace the Arian bishop Auxentius who had just died. Ambrose — a catechumen, unbaptized — went to the basilica to restore order. The crowd began shouting "Ambrose for bishop!" He fled, tried to hide, offered to become a philosopher rather than a bishop. It was no use.</p>

<h3>Eight Days from Layman to Bishop</h3>
<p>Within eight days Ambrose was baptized, ordained through all the clerical grades, and consecrated bishop. He gave away his personal fortune to the poor, entrusted his private affairs to his brother Satyrus, and threw himself into theological study with the energy of a trained lawyer. He mastered Greek patristic theology (reading Origen, Basil, Gregory of Nyssa) and became within a decade one of the most formidable theologians and preachers in the West. He was famous for his sermons on Scripture — Augustine heard them in Milan in 386 and was converted in part by them.</p>

<h3>Pastor and Prophet</h3>
<p>Ambrose's episcopate was defined by three great confrontations. First, he faced down the Empress Justina, an Arian, who demanded one of Milan's basilicas for Arian worship: he occupied it with his people, singing hymns through the night (he invented hymn-singing for congregations in the Latin West). Second, he excommunicated the Emperor Theodosius I after the Thessalonica massacre (390 AD), in which thousands of civilians were killed in revenge for the murder of a general — refusing him communion until he had done public penance. The emperor obeyed. Third, he refused to surrender a Milan synagogue to be made a church, resisting imperial pressure. He died on Good Friday, April 4, 397.</p>`,
    reflection: "Ambrose excommunicated an emperor and made him do public penance. This is not politics or power play; it is pastoral care extended to the most powerful person in the world. The bishop's duty to the emperor's soul is the same as his duty to any other sinner: to bring him to repentance, to protect him from the spiritual consequences of his actions. That Theodosius obeyed — that the most powerful man in the Western world knelt in the cathedral of Milan in a hair shirt — is perhaps the single most remarkable act of episcopal authority in Church history. The Church existed to govern souls, not kingdoms; but in governing Theodosius's soul, Ambrose changed the direction of history.",
    prayerToSaint: "O Saint Ambrose, bishop of Milan and doctor of the Church, you faced down emperors, occupied basilicas, and excommunicated the powerful for the sake of their souls. Intercede for all bishops who must speak truth to political power, for the Church in Milan and all of northern Italy, and for all who exercise pastoral authority in difficult times. Help us to serve souls as you served them — with the same courage in confronting the powerful and the same tenderness in welcoming the penitent. Amen.",
  },

  {
    name: "Saint John of Damascus",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (Doctor declared 1890)",
    quote: "I will not cease to honor matter, because it was through matter that my salvation came about.",
    fullBio: `<h3>Last Father of the East</h3>
<p>John Mansur was born around 676 AD in Damascus, Syria, into a prominent Christian family. His father and grandfather had served as administrators to the Umayyad Caliphate — the Arab Muslim government that had conquered Syria in 636. John himself served as a financial official under the Caliph Abd al-Malik. He was educated in Greek philosophy, theology, and the sciences by a monk named Cosmas whom his father had ransomed from Greek captivity. Around 706-716, he resigned his position at the caliph's court, went to the monastery of Mar Saba in the Judean desert (near Jerusalem), was ordained a priest, and spent the rest of his life there writing.</p>

<h3>Defense of Icons</h3>
<p>John's most important historical role was as the chief theological defender of icons during the Iconoclast Controversy. When the Byzantine Emperor Leo III issued his decree against images in 726, John was beyond imperial reach — living under Muslim rule — and could write freely. His three <em>Treatises on the Divine Images</em> are the foundational theological defense of Christian iconography. His key argument: the Incarnation of the Word changes everything. God, who could not be depicted in the Old Testament (because He had not taken human form), can and must be depicted in the New — because Christ is both God and man, and to refuse to depict him is to deny the Incarnation itself. "I will not cease to honor matter, because it was through matter that my salvation came about."</p>

<h3>The Fount of Knowledge</h3>
<p>John's encyclopedic theological work, <em>The Fount of Knowledge</em>, was the first systematic theology of the Eastern Church — an organized summary of the teaching of the Greek Fathers that served in the East the function that Peter Lombard's <em>Sentences</em> served in the West. He also wrote hymns, sermons, and philosophical works. He died around 749. He was declared a Doctor of the Church by Pope Leo XIII in 1890. He is the last of the Church Fathers and the first great systematic theologian of the East.</p>`,
    reflection: "John of Damascus's defense of icons is a defense of the Incarnation. God became matter — flesh, blood, a face — and that face can be painted. To deny this is to deny not just icons but Christmas. His logic is stark: if the Word truly became flesh, then the flesh is holy, matter is redeemable, and images of the Incarnate One are acts of faith rather than idolatry. Every icon in every Eastern church, every crucifix in every Latin church, every nativity scene — all of them rest on John's argument. 'It was through matter that my salvation came about.'",
    prayerToSaint: "O Saint John of Damascus, last father of the East and champion of sacred images, you defended the Incarnation against all who would strip the faith of its flesh and images and matter. Intercede for all Christian artists, icon-writers, and liturgical craftspeople, and for the Church of the East. Help us to honor matter as holy — to see in every painted face of Christ, every icon of the Virgin, every sacred image, the theological claim that God became visible in human form. Amen.",
  },

  {
    name: "Saint Nicholas of Myra",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Give and you will receive: your gift will return to you in full — pressed down, shaken together to make room for more, running over, and poured into your lap.",
    fullBio: `<h3>Bishop of Myra</h3>
<p>Nicholas was born in the late 3rd century (around 270 AD) in Patara, a city of Lycia in Asia Minor (modern Turkey), to a wealthy Christian family. When his parents died in an epidemic, he used his entire inheritance for works of charity. He became Bishop of Myra, the capital of Lycia, at a relatively young age. He was imprisoned during the Diocletianic persecution and, according to tradition, was present at the Council of Nicaea in 325 AD — where the famous legend holds that he slapped the heretic Arius in the face for denying the divinity of Christ. He died around 343 AD.</p>

<h3>The Secret Gift-Giver</h3>
<p>The most famous story about Nicholas concerns a poor man with three daughters who had no dowry and thus no prospect of honorable marriage, and would likely have been forced into prostitution. Nicholas, on three separate occasions, secretly threw bags of gold through the window of their house at night (or, in some versions, down the chimney) so that each daughter could be married. On the third occasion, the father caught him. Nicholas pleaded for anonymity but the story spread. This habit of secret gift-giving — rooted in the Gospel command not to let the left hand know what the right hand does — became the seed of the Saint Nicholas tradition that evolved, through Dutch <em>Sinterklaas</em>, into the modern figure of Santa Claus.</p>

<h3>Patron of Children and Sailors</h3>
<p>Nicholas became the patron of children, sailors, merchants, students, and countless others — a remarkable range reflecting the breadth of medieval devotion. His relics were translated from Myra to Bari, Italy, in 1087, where the Basilica di San Nicola still houses them. He is one of the most popular saints in both Eastern and Western Christianity. His feast on December 6 initiates the Advent season of charitable giving, and the custom of giving gifts on his feast day (or on Christmas, as the tradition evolved in different cultures) makes him the most globally recognized saint in the calendar.</p>`,
    reflection: "Nicholas gave secretly — three times, in the dark, anonymously, and was almost caught. The secrecy is the theological point: the gift given when no one is watching, for the recipient's sake alone, is the gift that most perfectly images the love of God, who gives without need of recognition. The evolution of Saint Nicholas into Santa Claus has been both a popularization of his charism (generosity toward children) and a secularization that has almost entirely detached the gift from the Giver. His feast is an invitation to reconnect: to give as Nicholas gave, secretly, generously, and in Christ's name.",
    prayerToSaint: "O Saint Nicholas of Myra, bishop and secret gift-giver, you used your inheritance to save three daughters from despair and gave anonymously because that is how God gives. Intercede for all children, for all in desperate poverty, for all sailors in danger on the sea, and for the Church in Turkey where you served. Help us to give as you gave — secretly, generously, without waiting for gratitude or recognition — trusting that the God who sees in secret will reward openly. Amen.",
  },

];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed17 = mutation({
  args: {},
  handler: async (ctx) => {
    const allSaints = await ctx.db.query("saints").collect();
    const saintsByName = new Map(allSaints.map(s => [s.name, s]));

    let updated = 0;
    const notFound: string[] = [];

    for (const bio of SAINT_BIOS) {
      const saint = saintsByName.get(bio.name);

      if (!saint) {
        notFound.push(bio.name);
        continue;
      }

      const patch: Record<string, unknown> = {};
      if (bio.fullBio) patch.fullBio = bio.fullBio;
      if (bio.quote) patch.quote = bio.quote;
      if (bio.reflection) patch.reflection = bio.reflection;
      if (bio.prayerToSaint) patch.prayerToSaint = bio.prayerToSaint;
      if (bio.feastType) patch.feastType = bio.feastType;
      if (bio.liturgicalColor) patch.liturgicalColor = bio.liturgicalColor;
      if (bio.canonizedBy) patch.canonizedBy = bio.canonizedBy;

      await ctx.db.patch(saint._id, patch);
      updated++;
    }

    return { updated, notFound, total: SAINT_BIOS.length };
  },
});
