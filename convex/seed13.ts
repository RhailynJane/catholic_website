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

  // ── From seed2-7 "Saint" prefix list ────────────────────────────────────

  {
    name: "Saint Agatha",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Jesus Christ, Lord of all things, you have created me. You know that I love you alone, and that for your sake I bear this torment gladly.",
    fullBio: `<h3>Virgin Martyr of Sicily</h3>
<p>Agatha was born around 231 AD in Catania or Palermo, Sicily, to a wealthy and distinguished family. From her youth she consecrated her virginity to Christ. During the Decian persecution (249-251 AD), the Roman consul of Sicily, Quintianus, desired Agatha and sought to use the persecution to force her compliance. When she refused his advances, he sent her to a brothel managed by a woman named Aphrodisia — hoping that a month of degradation would break her resolve. She emerged unchanged.</p>

<h3>Torture and Miraculous Healing</h3>
<p>Quintianus had Agatha tortured in numerous ways. The most famous detail in her passion is the cutting off of her breasts — a detail so associated with her that her feast day attributes include a plate bearing two round objects (her amputated breasts, sometimes mistaken in later art for bells or loaves of bread). After this mutilation, she was thrown into prison without food or medical attention. That night, according to the tradition, Saint Peter appeared to her in prison and healed her wounds miraculously. When Quintianus visited the next morning and found her healed, he was reportedly more enraged than before.</p>

<h3>Death and Patronages</h3>
<p>Agatha died in prison around 251 AD, from the effects of her torture. She was buried in Catania; one year after her death, Mount Etna erupted, and the people of Catania carried her veil toward the lava flow, which is said to have stopped. This miracle established her as the patroness of those threatened by volcanic eruptions, as well as of breast cancer patients (for her specific martyrdom), nursing mothers, bell founders, and Sicily. Her name appears in the Roman Canon — the First Eucharistic Prayer — one of only seven women so honored in the Church's most ancient prayer. Her basilica in Catania was an early and important pilgrimage site.</p>`,
    reflection: "Agatha endured the worst a powerful man's lust and malice could devise, and emerged each time with the same serenity. She did not escape — she was not spared. What she was given was something more: the inner freedom that makes suffering bearable. She is a patron of survivors of sexual violence not because she was protected from it but because she overcame it — not by defeating it but by being larger than it, by having a center that Quintianus never reached.",
    prayerToSaint: "O Saint Agatha, virgin and martyr, you resisted the power of the state and the cruelty of lust with nothing but your faith. Intercede for all women who suffer from sexual violence and exploitation, for all who are sick with breast cancer, and for all who must bear bodily suffering for their fidelity. Help us to trust that Christ is present in every prison, that He heals what the world destroys, and that the veil of a martyr can stop the violence of a volcano. Amen.",
  },

  {
    name: "Saint Paul Miki and Companions",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pope Pius IX (1862)",
    quote: "The only reason for my being killed is that I have taught the doctrine of Christ. I thank God it is for this reason I die.",
    fullBio: `<h3>The Twenty-Six Martyrs of Japan</h3>
<p>On February 5, 1597, twenty-six Christians were crucified on a hill outside Nagasaki, Japan — the first major martyrdom of the Japanese Church and one of the most significant events in Asian Christian history. The twenty-six included six Franciscan missionaries (three Spaniards, one Mexican, one Indian, one Portuguese), seventeen Japanese lay people, and three Japanese Jesuit lay brothers. Among the lay people were several who had been converted only recently; one of them, Ibaragi Kun, was just twelve years old.</p>

<h3>Paul Miki</h3>
<p>Paul Miki was a Japanese Jesuit novice born around 1564, the son of a military leader, who had received an excellent education in Jesuit schools and become renowned as a preacher. He was already under arrest when he was crucified. On the cross — following Japanese custom — he was allowed to speak. His last sermon, delivered from the cross to the watching crowd, is preserved: he spoke of his happiness at dying as Jesus died; he forgave his executioners; he urged his hearers to embrace Christianity. He died with the name of Jesus on his lips.</p>

<h3>The Persecution and Its Fruit</h3>
<p>The martyrdom was ordered by the military ruler Toyotomi Hideyoshi, who had initially tolerated Christianity but grew alarmed at its growth and at the political implications of foreign missionaries. The twenty-six were arrested in Kyoto and Osaka and force-marched to Nagasaki — a journey of nearly a month in winter, during which their left ears were cut off as a mark of shame. At Nagasaki they were crucified and pierced with lances. Rather than ending Japanese Christianity, the martyrdom strengthened it. The Japanese Church underwent further persecutions in the 1600s, going underground for over two centuries — and when missionaries returned in the 19th century, they found thousands of "hidden Christians" who had preserved the faith in secret, without priests or sacraments, for generations.</p>`,
    reflection: "Paul Miki preached his last sermon from the cross — literally, from his cross, while dying. He had nothing left but breath and words, and he used them to proclaim Christ to the crowd watching him die. The Japanese martyrs are a window into what the faith looks like when stripped to its essence: not institutions, not sacraments (some had just been received, some barely), not clergy (the majority were laypeople), just the conviction that Christ is worth dying for. The hidden Christians who kept the faith for two hundred years underground prove that the seed Paul Miki planted with his death was real.",
    prayerToSaint: "O Saint Paul Miki and companions, martyrs of Japan, you preached from the cross and died with the name of Jesus on your lips. Intercede for the Church in Japan and throughout East Asia, for all who are persecuted for the faith in countries hostile to Christianity, and for all missionaries. Help us to hold the faith so deeply that even death cannot shake it, and to speak the name of Christ with the same joy and courage with which you spoke it on the hill of Nagasaki. Amen.",
  },

  {
    name: "Saint Vincent of Saragossa",
    feastType: "Optional Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "You can destroy this body of mine, but you cannot touch the soul that God has given me.",
    fullBio: `<h3>The Protomartyr of Spain</h3>
<p>Vincent was a deacon of the church of Saragossa (Zaragoza) in Spain under Bishop Valerius. He was martyred during the Diocletianic persecution in 304 AD at Valencia, under the Roman governor Dacian — one of the most brutal persecutors of the period. His death is recounted in detail by Prudentius, the greatest Latin Christian poet, who wrote a long poem on his martyrdom (Peristephanon V), and by Augustine of Hippo, who preached several sermons on his feast day.</p>

<h3>The Interrogation and Torture</h3>
<p>The accounts describe Dacian as intensely frustrated by Vincent's serenity in the face of increasingly brutal torture. When the governor threatened him with various torments, Vincent responded calmly and even cheerfully — reportedly mocking the governor's inability to break him. He was stretched on the rack, his flesh torn with iron hooks, roasted on a gridiron (his characteristic symbol, like Lawrence of Rome), and finally thrown into prison on a broken floor studded with shards of pottery. He died from his injuries in prison, singing.</p>

<h3>Veneration and Patronages</h3>
<p>Vincent was one of the most popular saints of the early Church in the West. Augustine could assume his Carthaginian congregation knew who Vincent was; his name appears in some ancient liturgical texts. He is the patron saint of Valencia, Saragossa, and Lisbon; of vinegar-makers and winemakers (a connection through his name and the wine-producing regions that venerated him); and of sailors. His feast on January 22 was widely observed throughout the medieval Church. Lisbon's Cathedral (Sé de Lisboa) claims his relics.</p>`,
    reflection: "Vincent was a deacon — not the bishop, not the priest, but the bishop's assistant, the man who served at table, cared for the poor, and handled the material goods of the Church. It was the deacon, not the bishop (who was allowed to go into exile), who faced the torture rack and the gridiron. Something about this fits: the Church's servant-ministers, those most directly in contact with the suffering world, are often the first to enter the suffering of martyrdom. Vincent's serenity on the rack is the serenity of a man who has practiced service so thoroughly that he has nothing left to lose.",
    prayerToSaint: "O Saint Vincent of Saragossa, deacon and martyr, you faced the instruments of torture with a serenity that confounded your persecutors. Intercede for all deacons and those who serve the Church in practical ministry, for all who are persecuted in Spain and throughout the Mediterranean world, and for all who suffer bodily torment for their faith. Help us to find in the Eucharist we serve the same strength you found in the God you served. Amen.",
  },

  {
    name: "Saint John I",
    feastType: "Optional Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Whatever I must endure, I will endure it for the faith of Christ.",
    fullBio: `<h3>Pope and Diplomat</h3>
<p>John I was elected Pope in 523 AD, an elderly man who had served the Roman Church as a deacon and administrator for many years. His brief pontificate (523-526) was dominated entirely by one extraordinary event: a diplomatic mission to Constantinople at the command of the Ostrogothic King Theodoric the Great. Theodoric, though an Arian heretic, had ruled Italy with relative tolerance toward Catholics for decades. But the Emperor Justin I in Constantinople had begun persecuting the Arians in the Eastern Empire, closing their churches and forcing rebaptisms. Theodoric demanded that Pope John lead a delegation to Constantinople to negotiate relief for the Arians.</p>

<h3>The Mission to Constantinople</h3>
<p>It was an unprecedented event: the Bishop of Rome traveling to the Eastern capital. John was received with enormous ceremony — the Emperor Justin prostrated himself before the Pope, and John celebrated Easter Mass in the Hagia Sophia with the Latin liturgy (a remarkable symbol of Western primacy). He secured some concessions from the Emperor, though not all that Theodoric had demanded. When he returned to Ravenna, Theodoric — suspicious that John had conspired with Constantinople against him — had the aged pope arrested and imprisoned.</p>

<h3>Death in Prison</h3>
<p>Pope John I died in prison in Ravenna on May 18, 526, worn out by his age and imprisonment. He was immediately venerated as a martyr, though his death was from natural causes hastened by confinement rather than direct execution. His body was brought to Rome and buried in Saint Peter's Basilica. His feast is May 18. He is a patron of prisoners and of those who die in unjust captivity.</p>`,
    reflection: "John I was an old man sent on a young man's errand — a diplomatic mission to Constantinople, the most powerful city in the world, to negotiate on behalf of the king who would kill him. He went. He was received with prostrations by emperors, preached the Latin liturgy in the Hagia Sophia, and died in a dungeon. His life is a reminder that the Church's servants are not insulated from the consequences of being useful to powerful men.",
    prayerToSaint: "O Saint John I, pope and martyr, you were imprisoned for the failure of a mission you did not choose and died as a hostage to political calculation. Intercede for all who are imprisoned unjustly, for all who die in captivity, and for the Church's leaders who must navigate between hostile powers. Help us to trust that faithfulness in the face of unjust force is itself a kind of martyrdom, and that God honors what the world dishonors. Amen.",
  },

  {
    name: "Saints Marcellinus and Peter",
    feastType: "Optional Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "We believe in Christ, we confess Christ, and for Christ we are ready to die.",
    fullBio: `<h3>Priest and Exorcist</h3>
<p>Marcellinus was a priest and Peter an exorcist of the Roman church, martyred during the Diocletianic persecution around 304 AD. They are among the relatively few martyrs of the Roman church whose historical existence is well-attested: their names appear in the Depositio Martyrum (a 4th-century document listing the tombs of Roman martyrs), they are commemorated in the Roman Canon, and Pope Damasus I — who heard the story of their martyrdom from the executioner himself — composed an epitaph for their tomb on the Via Labicana.</p>

<h3>Their Martyrdom</h3>
<p>According to the accounts preserved by Damasus and others, Marcellinus and Peter were imprisoned and condemned. During their imprisonment, Peter converted their jailer Artemius and his family. Marcellinus converted and baptized several others, including Syriac, Smaragdus, and Largo. They were taken at night to a forest outside Rome (which became known as the "Forest of Fools" — later "Forest of the Holy Martyrs") and executed there, perhaps to avoid the publicity of a public martyrdom. The executioner, named Dorotheus, later converted as a result of what he witnessed — and it was from him that Damasus learned the details of their deaths.</p>

<h3>The Catacomb and Constantine</h3>
<p>Marcellinus and Peter were buried in the catacombs on the Via Labicana. The Emperor Constantine built a basilica over their tomb and (extraordinarily) a rotunda mausoleum for his mother Helena nearby — making the catacomb of Saints Marcellinus and Peter one of the most imperially honored burial sites in Rome. Charlemagne had their relics translated to Seligenstadt, Germany, in 827. Their feast is June 2.</p>`,
    reflection: "Marcellinus and Peter converted their executioner. The man who killed them came to believe because of how they died and what they said. This is the hidden harvest of martyrdom: not just the saints who die, but those who witness the dying and are changed by it. The executioner Dorotheus became the source of Damasus's account — which became the source of the Church's memory. Even from death, they evangelized.",
    prayerToSaint: "O Saints Marcellinus and Peter, priest and exorcist of the Roman church, you converted your jailer and your executioner by the faith with which you faced death. Intercede for all priests and ministers of the Church who serve under persecution, for all prisoners who witness the faith to their captors, and for all who wait in the darkness of unjust imprisonment. Help us to convert the world not only by our words but by the way we bear what we cannot avoid. Amen.",
  },

  // ── From seed.ts (no "Saint" prefix in DB) ──────────────────────────────

  {
    name: "Genevieve of Paris",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Do not lose heart, do not give way to grief or anxiety. Trust God, and He will protect Paris.",
    fullBio: `<h3>The Shepherdess of Paris</h3>
<p>Genevieve (Genoveva) was born around 419-422 AD in Nanterre, near Paris, to a pious family. According to her biography, when she was seven years old, Bishop Germanus of Auxerre passed through Nanterre on his way to Britain to fight the Pelagian heresy. He noticed the young girl in the crowd and singled her out — reportedly sensing her exceptional holiness — and encouraged her parents to dedicate her to God. She received her veil of consecrated virginity at fifteen. After her parents' deaths, she moved to Paris and continued her life of prayer, fasting, and charity.</p>

<h3>Rallying Paris</h3>
<p>The moment that made Genevieve famous occurred around 451 AD, when Attila the Hun began his invasion of Gaul. The population of Paris was preparing to flee. Genevieve rallied the women of the city in a vigil of prayer, urging them not to flee but to pray — insisting that Paris would be spared. The men mocked her and accused her of being a false prophet; some wanted to stone her. Bishop Germanus of Auxerre (through a deputy) supported her. Attila, for reasons that remain disputed by historians, turned south toward Orléans rather than attacking Paris. The Parisians attributed their city's safety to Genevieve's prayers, and the mockery turned to veneration.</p>

<h3>Second Crisis and Death</h3>
<p>A decade later, when the Frankish King Childeric besieged Paris, Genevieve organized boat convoys to bring supplies to the starving city. Her boldness impressed Childeric, who allowed her to ransom prisoners. She maintained good relations with his son Clovis and his wife Clotilde (whom Genevieve may have influenced toward Christianity — Clotilde, Saint Clotilde, later converted Clovis). Genevieve died around 500 AD, aged approximately 80. Her basilica was built on the left bank of the Seine; in the 18th century it was converted into the Panthéon — but her shrine remains venerated in the Church of Saint-Étienne-du-Mont nearby. She is the patron saint of Paris.</p>`,
    reflection: "Genevieve stood between a city and its panic, armed with nothing but prayer and the conviction that God would protect what she entrusted to Him. She was mocked; her nerve held. The mockery of the frightened is one of the oldest obstacles to faith — it takes more courage to be called a false prophet by terrified neighbors than to face the Huns directly. Her feast opens the new year as a reminder that the protection of cities and nations is ultimately in the hands not of armies but of those who pray.",
    prayerToSaint: "O Saint Genevieve, patroness of Paris and protector of cities in danger, you stood firm when others fled and prayed when others panicked. Intercede for Paris and for all cities threatened by violence and war. Help us to pray with your confidence — not in our own virtue, but in the God who hears the prayer of the faithful and turns the courses of history. And help us to mock no one who calls us to trust in God when the times are desperate. Amen.",
  },

  {
    name: "Brigid of Ireland",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "I should like a great lake of beer for the King of Kings. I should like the angels of Heaven to be drinking it through time eternal.",
    fullBio: `<h3>The Mary of the Gaels</h3>
<p>Brigid of Kildare is, after Saint Patrick, the most beloved saint in Ireland — venerated as "the Mary of the Gaels" and "the second patron of Ireland" (with Columba). She was born around 451-452 AD, traditionally said to be the daughter of a pagan chieftain named Dubthach and a Christian bondwoman named Broicsech — making her status ambiguous from birth, reflecting perhaps the complex social world of 5th-century Ireland. She grew up in the Leinster region and from her childhood was known for extraordinary generosity to the poor — reportedly giving away butter, food, and even her father's prized sword to those in need.</p>

<h3>Abbess of Kildare</h3>
<p>Brigid founded the monastery of Kildare ("Church of the Oak"), which became the most important monastic center in Ireland after Armagh. The peculiarity of Kildare was that it was a double monastery — a community of both monks and nuns — presided over by Brigid as abbess. The abbot-bishop of Kildare was subordinate to her in all matters of governance. The monastery contained an "eternal flame" that burned there continuously until the Reformation — recalling the sacred fires of pre-Christian Ireland and suggesting that Brigid may herself have taken on attributes of the goddess Brigid of pre-Christian tradition, a process of Christianization of existing holy figures that was common in early medieval Ireland.</p>

<h3>Legends and Patronages</h3>
<p>The legends associated with Brigid are numerous and characteristically generous: she transformed water into beer, multiplied butter, changed a stone into salt, and hung her cloak on a sunbeam. Her most famous story involves expanding her monastery's land: she asked the King of Leinster for as much land as her cloak could cover; he agreed, and her cloak expanded to cover a vast area. She is patron of Ireland, of poetry, of blacksmiths, of healing, of cattle, of dairymaids, of chicken farmers, of fugitives, and of newborns — a range reflecting the wide scope of her patronage in the ancient Irish world. Her feast, February 1, was traditionally the feast of Imbolc, the first day of spring in the Celtic calendar — another instance of Christian sanctification of a pre-Christian holy day.</p>`,
    reflection: "Brigid's famous prayer for a great lake of beer for the King of Kings is startling in its earthiness — a saint who imagines eternal life as a feast of Irish hospitality, with angels drinking and Christ presiding. This is not frivolity; it is the Celtic theological intuition that the goodness of creation — beer, butter, fire, cattle — participates in the goodness of God, and that the best we can offer God is the best of what God has given us. She was a mystic who prayed in the idiom of her culture, and her prayer is still prayed.",
    prayerToSaint: "O Saint Brigid of Kildare, Mary of the Gaels and second patron of Ireland, abbess of the double monastery and keeper of the sacred flame, intercede for Ireland and for all nations who have received the faith through the Celtic Church. Help us to be as generous as you were — giving away what we have without calculating the cost. And let the flame of faith that burned at Kildare for so long be rekindled in hearts grown cold. Amen.",
  },

  {
    name: "Scholastica",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "I asked you a favor and you refused it. I asked my God and He granted it.",
    fullBio: `<h3>Sister of Saint Benedict</h3>
<p>Scholastica was the twin sister of Saint Benedict of Nursia, the father of Western monasticism. Like her brother, she was born around 480 AD in Nursia, Umbria. She had consecrated her virginity to God from early childhood. When Benedict established his monastery at Monte Cassino, Scholastica founded a community of women at Plombariola (about five miles from Monte Cassino) under his guidance. The details of her life are known almost entirely from Saint Gregory the Great's <em>Dialogues</em>, written about sixty years after her death.</p>

<h3>The Last Meeting</h3>
<p>Gregory recounts that Scholastica and Benedict met once a year at a house below Monte Cassino to pray and discuss spiritual matters. At their last meeting (around 543 AD), Scholastica asked Benedict to stay overnight and continue their conversation. Benedict refused, saying the rule did not permit it. Scholastica bowed her head in prayer — and a sudden violent thunderstorm broke out, making it impossible for Benedict to leave. "What have you done?" he asked. She replied: "I asked you a favor and you refused. I asked my God and He granted it." Benedict remained. They spent the night in spiritual conversation. Three days later, Benedict watched her soul ascend to heaven in the form of a dove.</p>

<h3>Death and Burial</h3>
<p>Scholastica died around February 10, 543 AD. Benedict had her body brought to Monte Cassino and buried in the tomb he had prepared for himself; they share that tomb today. Gregory uses their story to make a point about the relationship between love and divine power: Scholastica could work the miracle of the storm because "she loved more." She is the patron of Benedictine nuns and oblates, and of those who pray for rain. Her feast is February 10.</p>`,
    reflection: "Scholastica loved more. That is Gregory the Great's explanation for why her prayer worked and Benedict's did not: she wanted the conversation to continue, and God wanted it too. The storm was an act of love. Her famous retort to her rule-following brother — 'I asked you and you refused; I asked God and He said yes' — is one of the great moments of holy wit in the tradition. And her death, watched as a dove ascending, is one of its most beautiful images.",
    prayerToSaint: "O Saint Scholastica, twin of Benedict and mother of Benedictine women, you loved your brother and your God with equal intensity, and God loved you back with a thunderstorm. Intercede for all women in contemplative religious life, for all Benedictine monasteries and oblate communities, and for all sisters who pray in hidden places and sustain the Church by their intercession. Help us to love more — and to trust that God hears the prayer that flows from more love. Amen.",
  },

  {
    name: "Cyril of Alexandria",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (Doctor declared 1882)",
    quote: "Mary bore the Word of God made flesh; she is therefore in truth the Mother of God.",
    fullBio: `<h3>The Theologian of the Incarnation</h3>
<p>Cyril was born around 375 AD and became Archbishop of Alexandria in 412, succeeding his uncle Theophilus. He was the most important theologian of the fifth century and the decisive figure in the Council of Ephesus (431) — the council that defined Mary as Theotokos (God-bearer, Mother of God). His theological career was marked by exceptional gifts and, in his early years, by tactics that were at times brutal: he expelled the Jews from Alexandria (an action of dubious legality even then), and the philosopher Hypatia was murdered by a crowd closely associated with him (he bore at least indirect responsibility). His later career was more measured. He was declared a Doctor of the Church in 1882.</p>

<h3>The Nestorian Controversy</h3>
<p>Nestorius, Archbishop of Constantinople (428), objected to the title Theotokos for Mary, preferring Christotokos (Mother of Christ) — arguing that Mary bore the human Christ, not the divine Word. Cyril recognized in this a deeper error: if Christ is divided into two subjects (divine and human), the redemption falls apart, because then the human who suffered and died on the cross is not the divine Son of God. He wrote a series of brilliant letters and treatises against Nestorius, secured the condemnation of Nestorianism at the Council of Ephesus (431), and defined the unity of person in Christ (the hypostatic union) — two natures in one divine Person. This doctrine is the foundation of all subsequent Christology in both Eastern and Western Christianity.</p>

<h3>Legacy</h3>
<p>Cyril's theological achievement — the precise articulation of the Incarnation as one divine Person in two complete natures — was definitively confirmed at the Council of Chalcedon (451), eighteen years after his death. Every Christian recitation of the Creed's "born of the Virgin Mary" reflects Cyril's work. He died on June 27, 444. His feast is June 27 (or February 9 in some rites).</p>`,
    reflection: "Cyril's question was simple: who died on the cross? If it was only the human Jesus, then human beings are not redeemed by God — they are redeemed by a man. But if the one who suffered and died was the eternal Son of God made flesh, then the death on the cross has infinite value and human nature is taken into God himself. Cyril's insistence that Mary is Theotokos — God-bearer — was not about Mary. It was about Christ, about the Incarnation, about whether God truly entered human history or only seemed to. He got the answer right.",
    prayerToSaint: "O Saint Cyril of Alexandria, doctor and defender of the Incarnation, you fought for the truth that God became flesh and dwelt among us — that Mary bore not merely a man but the eternal Son. Intercede for all theologians who seek to understand the mystery of the Incarnation, for all who defend the Church's Marian teaching, and for all facing the subtle heresies that divide Christ. Help us to profess with clarity and joy: the Word became flesh, and Mary is truly the Mother of God. Amen.",
  },

  {
    name: "Peter Canisius",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XI (1925)",
    quote: "If you have too much to do, with God's help you will find time to do it all.",
    fullBio: `<h3>Second Apostle of Germany</h3>
<p>Peter Canisius was born on May 8, 1521, in Nijmegen, Holland (now Netherlands), the son of a prosperous burgher family. He was educated at Cologne, where he encountered the letters of Peter Faber (one of the first Jesuits) and was profoundly moved. In 1543 he traveled to Mainz to attend a retreat directed by Faber himself, and immediately entered the Society of Jesus — one of the earliest members of what was then a very young order. His formation was rapid and intense; he made the full Spiritual Exercises under Faber's direction.</p>

<h3>The Catholic Response to the Reformation</h3>
<p>Canisius was sent to Germany at the height of the Protestant Reformation — a country where Lutheranism was spreading rapidly and Catholic institutions were in near-collapse. For over thirty years he worked without rest: preaching, writing, founding Jesuit colleges, attending the Council of Trent as a theological consultant, serving as advisor to two emperors (Ferdinand I and Maximilian II), and establishing the Jesuit educational system that became the backbone of Catholic intellectual life in Germany. He is called the "Second Apostle of Germany" after Boniface.</p>

<h3>The Catechism Writer</h3>
<p>Canisius's most lasting contribution was his catechism — the <em>Summa Doctrinae Christianae</em> (1555), commonly known as the "Canisius Catechism." It existed in three versions (for theologians, ordinary adults, and children) and became the standard Catholic catechism in German-speaking lands for over a century, going through more than two hundred editions. It did for the German Catholic Church what the Baltimore Catechism would do for American Catholics three centuries later: gave ordinary believers a clear, accessible account of their faith in the face of Protestant challenge. He died on December 21, 1597. He was declared a Doctor of the Church the same day he was canonized in 1925.</p>`,
    reflection: "Peter Canisius worked with his hands: he wrote catechisms, founded colleges, preached sermons, gave retreats, consulted at councils. The Reformation was not defeated by arguments alone but by the generation of educated, faithful Catholics his schools produced. He understood that the battle for souls is ultimately a battle for education — that what people believe about God depends in large measure on what they were taught about God as children. His catechism was his greatest weapon, and it was a teacher's weapon.",
    prayerToSaint: "O Saint Peter Canisius, apostle of Germany and doctor of the Church, you held the Catholic faith together in Germany through the force of your preaching, your schools, and your catechism. Intercede for all religious educators, catechists, and school teachers, and for the Church in Germany and German-speaking lands. Help us to explain the faith as clearly, warmly, and accessibly as you did — meeting people where they are and leading them to where God wants them to be. Amen.",
  },

  {
    name: "John of Kanty",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Clement XIII (1767)",
    quote: "Fight all error, but do it with good humor, patience, kindness, and love. Harshness will damage your own soul and spoil the best cause.",
    fullBio: `<h3>The Scholar Priest of Kraków</h3>
<p>John of Kanty (Jan Kanty) was born on June 23, 1390, in Kęty (Kanty) near Bielsko-Biała in southern Poland. He studied theology at the Jagiellonian University in Kraków, was ordained a priest, and received his doctorate. He became a professor at the university and held the chair of theology for many years. He was a scholar of remarkable depth and breadth — his library, which he donated to the university, was one of the finest in Poland. He was also a man of extraordinary personal simplicity: he slept on the floor, ate sparingly, gave most of his income to the poor, and walked to Rome on pilgrimage four times.</p>

<h3>Persecution and Restoration</h3>
<p>John's career at the university was interrupted by jealousy and intrigue: colleagues accused him of erroneous teaching and had him removed from his chair and sent to a parish in rural Olkusz. The parish experience was initially painful — the parishioners, accustomed to a different kind of priest, treated him with suspicion and even hostility. John endured this with patience. When he was eventually restored to his university chair, he said that the years in Olkusz had been a great grace. He taught at Kraków for the rest of his life and died on December 24, 1473, aged 83, universally beloved.</p>

<h3>Patron of Poland and Lithuania</h3>
<p>John is one of the patron saints of Poland and Lithuania. His reputation for holiness was immediate and widespread; he was beatified in 1680 and canonized in 1767. A famous legend holds that when he gave his coat to a beggar in winter and felt cold, angels brought him a new coat. More historically, he was known for the "Kęty principle": the motto inscribed on his portrait, which he took as a life rule — "Fight all error, but do it with good humor, patience, kindness, and love."</p>`,
    reflection: "John of Kanty's motto is practical theology for every polemical age: fight error with kindness or your harshness will damage your own soul and spoil your best cause. He taught this in the fifteenth century and it has been ignored in almost every century since. The combination of intellectual rigor and personal gentleness — fighting for the truth with good humor and love — is rare, and its rarity makes it more, not less, necessary.",
    prayerToSaint: "O Saint John of Kanty, scholar, priest, and man of holy simplicity, you pursued truth with your mind and mercy with your hands, giving your coat and your income and your learning to those who needed them. Intercede for all university professors and scholars, for all priests who serve in difficult parishes, and for all who must defend the faith in contentious times. Help us to fight error as you taught: with good humor, patience, kindness, and love. Amen.",
  },

  {
    name: "Toribio of Mogrovejo",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XIII (1726)",
    quote: "Christ said, I am the truth. He did not say, I am the custom.",
    fullBio: `<h3>Lawyer to Archbishop</h3>
<p>Toribio Alfonso de Mogrovejo was born on November 16, 1538, in Villaquejida, Spain. He studied law at Salamanca and became a professor, then was appointed Chief Inquisitor of Granada under King Philip II. He was a layman — never ordained — when Philip II nominated him for the archbishopric of Lima, Peru. He had never been a priest. The Council of Trent normally required episcopal candidates to be clerics. But Peru needed a man of Toribio's energy and organizational capacity, and the exception was made. He was ordained priest, bishop, and archbishop in quick succession and arrived in Lima in 1581.</p>

<h3>Reform and Mission in Peru</h3>
<p>Lima in 1581 was a Spanish colonial city of enormous wealth and considerable corruption. The indigenous population — native Peruvians, survivors of conquest — lived in conditions of exploitation. The Church in Peru had not been effectively organized. Toribio set out to change this systematically. He learned Quechua (and several other indigenous languages) to preach directly to the native peoples. He visited every part of his enormous diocese — traveling on foot or horseback through jungles, mountains, and deserts, through territory totaling about 400,000 square miles. He convened major regional councils (1582-83, 1591, 1601) that established the structures of the Latin American Church. He personally confirmed nearly a million indigenous Peruvians. Among those he confirmed were the future saints Rose of Lima and Martin de Porres. He established the first seminary in the Americas (Lima, 1591).</p>

<h3>Death and Canonization</h3>
<p>Toribio died on March 23, 1606, in Saña, Peru, while on a pastoral visitation — working until the end. He was beatified in 1679 and canonized in 1726. His feast is March 23. He is the patron of Latin American bishops and of those working for the rights of indigenous peoples.</p>`,
    reflection: "Toribio's famous line — 'Christ said, I am the truth. He did not say, I am the custom' — was his answer to colonial officials who justified the mistreatment of indigenous peoples by custom. He knew that the abuse of indigenous people was not sanctioned by Christ, regardless of what Spanish custom permitted. His entire pontificate was a practical application of this conviction: that the Gospel applies to everyone, that the dignity of the native Peruvian is not less than the dignity of the Spanish colonist, and that the Church exists for all people or it doesn't exist at all.",
    prayerToSaint: "O Saint Toribio of Mogrovejo, archbishop and apostle of Peru, you learned the languages of the indigenous peoples and confirmed nearly a million of them in the faith. Intercede for the Church in Latin America, for all bishops who must serve in vast and difficult territories, for all who work for indigenous rights and dignity. Help us to say with you: Christ is the truth, not custom — and to build our lives on that truth, however much custom resists it. Amen.",
  },

];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed13 = mutation({
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
