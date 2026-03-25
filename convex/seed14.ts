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

  // ── Fixing notFound from seed13 (need "Saint" prefix) ───────────────────

  {
    name: "Saint Genevieve of Paris",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Do not lose heart, do not give way to grief or anxiety. Trust God, and He will protect Paris.",
    fullBio: `<h3>The Shepherdess of Paris</h3>
<p>Genevieve (Genoveva) was born around 419-422 AD in Nanterre, near Paris, to a pious family. According to her biography, when she was seven years old, Bishop Germanus of Auxerre passed through Nanterre on his way to Britain to fight the Pelagian heresy. He noticed the young girl in the crowd and singled her out — reportedly sensing her exceptional holiness — and encouraged her parents to dedicate her to God. She received her veil of consecrated virginity at fifteen. After her parents' deaths, she moved to Paris and continued her life of prayer, fasting, and charity.</p>

<h3>Rallying Paris Against Attila</h3>
<p>The moment that made Genevieve famous occurred around 451 AD, when Attila the Hun began his invasion of Gaul. The population of Paris was preparing to flee. Genevieve rallied the women of the city in a vigil of prayer, urging them not to flee but to trust God — insisting that Paris would be spared. The men mocked her and accused her of being a false prophet; some wanted to stone her. Bishop Germanus of Auxerre, through a deputy, supported her. Attila, for reasons historians still debate, turned south toward Orléans rather than attacking Paris. The Parisians credited their city's safety to Genevieve's prayers, and the mockery turned to veneration.</p>

<h3>Second Crisis and Legacy</h3>
<p>A decade later, when the Frankish King Childeric besieged Paris, Genevieve organized boat convoys to bring supplies to the starving city. Her courage impressed Childeric, who allowed her to ransom prisoners. She maintained good relations with his son Clovis and his wife Clotilde — possibly influencing Clotilde toward Christianity, which led to Clovis's own conversion. Genevieve died around 500 AD, aged approximately eighty. Her basilica was built on the left bank of the Seine; in the eighteenth century it was converted into the Panthéon — but her shrine is still venerated in the Church of Saint-Étienne-du-Mont nearby. She is the patron saint of Paris.</p>`,
    reflection: "Genevieve stood between a city and its panic, armed with nothing but prayer and the conviction that God would protect what she entrusted to Him. She was mocked; her nerve held. The mockery of the frightened is one of the oldest obstacles to faith — it takes more courage to be called a false prophet by terrified neighbors than to face the Huns directly. Her feast opens the new year as a reminder that the protection of cities and nations is ultimately in the hands not of armies but of those who pray.",
    prayerToSaint: "O Saint Genevieve, patroness of Paris and protector of cities in danger, you stood firm when others fled and prayed when others panicked. Intercede for Paris and for all cities threatened by violence and war. Help us to pray with your confidence — not in our own virtue, but in the God who hears the prayer of the faithful and turns the courses of history. And help us to mock no one who calls us to trust in God when the times are desperate. Amen.",
  },

  {
    name: "Saint Brigid of Ireland",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "I should like a great lake of beer for the King of Kings. I should like the angels of Heaven to be drinking it through time eternal.",
    fullBio: `<h3>The Mary of the Gaels</h3>
<p>Brigid of Kildare is, after Saint Patrick, the most beloved saint in Ireland — venerated as "the Mary of the Gaels" and "the second patron of Ireland." She was born around 451-452 AD, traditionally said to be the daughter of a pagan chieftain named Dubthach and a Christian bondwoman named Broicsech — making her social status ambiguous from birth. She grew up in the Leinster region and from her childhood was known for extraordinary generosity to the poor, reportedly giving away food and even her father's prized sword to those in need.</p>

<h3>Abbess of Kildare</h3>
<p>Brigid founded the monastery of Kildare ("Church of the Oak"), which became the most important monastic center in Ireland after Armagh. The peculiarity of Kildare was that it was a double monastery — a community of both monks and nuns — presided over by Brigid as abbess. The monastery contained an "eternal flame" that burned there continuously until the Reformation — recalling the sacred fires of pre-Christian Ireland and suggesting that Brigid may have absorbed attributes of the goddess Brigid of the pre-Christian tradition, reflecting the Celtic Church's practice of Christianizing existing holy places and figures.</p>

<h3>Legends and Patronages</h3>
<p>The legends associated with Brigid are numerous and characteristically generous: she transformed water into beer, multiplied butter, changed a stone into salt, and hung her cloak on a sunbeam. Her most famous story involves expanding her monastery's land: she asked the King of Leinster for as much land as her cloak could cover; he agreed, and her cloak expanded to cover a vast area. She is patron of Ireland, of poetry, of blacksmiths, of healing, of cattle, of dairymaids, of chicken farmers, and of newborns. Her feast, February 1, was traditionally the feast of Imbolc, the first day of spring in the Celtic calendar — another instance of Christian sanctification of a pre-Christian holy day.</p>`,
    reflection: "Brigid's famous prayer for a great lake of beer for the King of Kings is startling in its earthiness — a saint who imagines eternal life as a feast of Irish hospitality, with angels drinking and Christ presiding. This is not frivolity; it is the Celtic theological intuition that the goodness of creation — beer, butter, fire, cattle — participates in the goodness of God, and that the best we can offer God is the best of what God has given us. She was a mystic who prayed in the idiom of her culture, and her prayer is still prayed.",
    prayerToSaint: "O Saint Brigid of Kildare, Mary of the Gaels and patron of Ireland, abbess of the double monastery and keeper of the sacred flame, intercede for Ireland and for all nations who have received the faith through the Celtic Church. Help us to be as generous as you were — giving away what we have without calculating the cost. And let the flame of faith that burned at Kildare for so long be rekindled in hearts grown cold. Amen.",
  },

  {
    name: "Saint Scholastica",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "I asked you a favor and you refused it. I asked my God and He granted it.",
    fullBio: `<h3>Sister of Saint Benedict</h3>
<p>Scholastica was the twin sister of Saint Benedict of Nursia, the father of Western monasticism. Like her brother, she was born around 480 AD in Nursia, Umbria. She had consecrated her virginity to God from early childhood. When Benedict established his monastery at Monte Cassino, Scholastica founded a community of women at Plombariola (about five miles from Monte Cassino) under his spiritual guidance. The details of her life are known almost entirely from Saint Gregory the Great's <em>Dialogues</em>, written about sixty years after her death.</p>

<h3>The Last Meeting</h3>
<p>Gregory recounts that Scholastica and Benedict met once a year at a house below Monte Cassino to pray and discuss spiritual matters. At their final meeting (around 543 AD), Scholastica asked Benedict to stay overnight and continue their spiritual conversation. Benedict refused — the monastic rule did not permit it. Scholastica bowed her head in prayer. Immediately, a violent thunderstorm broke out, making it impossible for Benedict to leave. "What have you done?" he asked. She replied: "I asked you a favor and you refused. I asked my God and He granted it." Benedict remained. They spent the night in spiritual conversation about the joys of heaven. Three days later, Benedict watched her soul ascend to heaven in the form of a dove.</p>

<h3>Death and Legacy</h3>
<p>Scholastica died around February 10, 543 AD. Benedict had her body brought to Monte Cassino and buried in the tomb he had prepared for himself; they share that tomb to this day. Gregory uses their story to illustrate a point about the relationship between love and divine power: Scholastica could work the miracle of the storm because, as Gregory writes, "she loved more." She is the patron of Benedictine nuns and oblates, and of those who pray for rain. Her feast is February 10.</p>`,
    reflection: "Scholastica loved more. That is Gregory the Great's explanation for why her prayer worked and Benedict's did not: she wanted the conversation to continue, and God wanted it too. The storm was an act of love. Her famous retort to her rule-following brother — 'I asked you and you refused; I asked God and He said yes' — is one of the great moments of holy wit in the tradition. And her death, watched as a dove ascending, is one of its most beautiful images.",
    prayerToSaint: "O Saint Scholastica, twin of Benedict and mother of Benedictine women, you loved your brother and your God with equal intensity, and God loved you back with a thunderstorm. Intercede for all women in contemplative religious life, for all Benedictine monasteries and oblate communities, and for all sisters who pray in hidden places and sustain the Church by their intercession. Help us to love more — and to trust that God hears the prayer that flows from more love. Amen.",
  },

  {
    name: "Saint Cyril of Alexandria",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (Doctor declared 1882)",
    quote: "Mary bore the Word of God made flesh; she is therefore in truth the Mother of God.",
    fullBio: `<h3>Patriarch and Theologian</h3>
<p>Cyril was born around 375 AD and became Archbishop (Patriarch) of Alexandria in 412, succeeding his uncle Theophilus. He was the most important theologian of the fifth century — the decisive figure in the Council of Ephesus (431) — and the man who defined for all subsequent Christianity the precise meaning of the Incarnation. His early years as bishop were marked by relentless energy and sometimes brutal tactics: he expelled the Jewish community from Alexandria, and the philosopher Hypatia was murdered by a crowd closely associated with him. These actions cast a shadow on his memory that his theological greatness does not entirely dispel.</p>

<h3>The Battle Against Nestorius</h3>
<p>Nestorius, Archbishop of Constantinople, objected to the title <em>Theotokos</em> (God-bearer, Mother of God) for Mary, preferring <em>Christotokos</em> (Mother of Christ) — arguing that Mary bore the human Christ, not the divine Word. Cyril recognized a deeper error: if Christ is divided into two subjects (one divine, one human), the redemption fails — because then it is merely a man who died on the cross, not the Son of God. He wrote a series of letters and treatises against Nestorius with extraordinary theological precision, secured the condemnation of Nestorianism at the Council of Ephesus (431), and defined the unity of person in Christ — the hypostatic union — that two complete natures (divine and human) exist in one divine Person.</p>

<h3>Legacy</h3>
<p>Cyril's theological achievement was definitively confirmed at the Council of Chalcedon (451), eighteen years after his death. Every Christian recitation of "born of the Virgin Mary" reflects Cyril's work. He died on June 27, 444. He was declared a Doctor of the Church by Pope Leo XIII in 1882. His feast is June 27.</p>`,
    reflection: "Cyril's question was simple: who died on the cross? If it was only the human Jesus, then human beings are not redeemed by God — they are redeemed by a man. But if the one who suffered and died was the eternal Son of God made flesh, then the death on the cross has infinite value and human nature is taken into God himself. Cyril's insistence that Mary is Theotokos — God-bearer — was not about Mary. It was about Christ, about the Incarnation, about whether God truly entered human history or only seemed to. He got the answer right.",
    prayerToSaint: "O Saint Cyril of Alexandria, doctor and defender of the Incarnation, you fought for the truth that God became flesh and dwelt among us — that Mary bore not merely a man but the eternal Son. Intercede for all theologians who seek to understand the mystery of the Incarnation, for all who defend the Church's Marian teaching, and for all facing the subtle heresies that divide Christ from His own humanity. Help us to profess with clarity and joy: the Word became flesh, and Mary is truly the Mother of God. Amen.",
  },

  {
    name: "Saint Peter Canisius",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XI (1925)",
    quote: "If you have too much to do, with God's help you will find time to do it all.",
    fullBio: `<h3>Second Apostle of Germany</h3>
<p>Peter Canisius was born on May 8, 1521, in Nijmegen, Holland. He was educated at Cologne, where he encountered the letters of Peter Faber — one of the first Jesuits — and was profoundly moved. In 1543 he traveled to Mainz to make a retreat directed by Faber himself, and entered the Society of Jesus, one of its earliest members. His formation was rapid and intense; he made the full Spiritual Exercises under Faber's direction and received what he described as a mystical gift of the Sacred Heart during his ordination retreat before the Blessed Sacrament.</p>

<h3>Holding Germany for the Faith</h3>
<p>Canisius was sent to Germany at the height of the Protestant Reformation — a country where Lutheranism was spreading rapidly and Catholic institutions were in near-collapse. For over thirty years he worked without rest: preaching, writing, founding Jesuit colleges, attending the Council of Trent as a theological consultant, serving as advisor to two emperors (Ferdinand I and Maximilian II), and establishing the Jesuit educational system that became the backbone of Catholic intellectual life in German-speaking lands. He is called the "Second Apostle of Germany" after Saint Boniface. His preaching reached all classes — from imperial court to market square.</p>

<h3>The Catechism</h3>
<p>Canisius's most lasting contribution was his catechism — the <em>Summa Doctrinae Christianae</em> (1555) — which went through over two hundred editions and became the standard Catholic catechism in German-speaking lands for more than a century. It existed in three versions: a detailed version for theologians, a middle version for ordinary adults, and a short version for children — reflecting his conviction that effective catechesis must meet people where they are. He died on December 21, 1597. He was canonized and declared a Doctor of the Church in the same ceremony in 1925.</p>`,
    reflection: "Peter Canisius worked with his hands: he wrote catechisms, founded colleges, preached sermons, gave retreats, consulted at councils. The Reformation was not defeated by arguments alone but by the generation of educated, faithful Catholics his schools produced. He understood that the battle for souls is ultimately a battle for formation — that what people believe about God depends in large measure on what they were taught about God as children. His catechism was his greatest weapon, and it was a teacher's weapon.",
    prayerToSaint: "O Saint Peter Canisius, apostle of Germany and doctor of the Church, you held the Catholic faith together through the force of your preaching, your schools, and your catechism. Intercede for all religious educators, catechists, and school teachers, and for the Church in Germany and German-speaking lands. Help us to explain the faith as clearly, warmly, and accessibly as you did — meeting people where they are and leading them to where God wants them to be. Amen.",
  },

  {
    name: "Saint John of Kanty",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Clement XIII (1767)",
    quote: "Fight all error, but do it with good humor, patience, kindness, and love. Harshness will damage your own soul and spoil the best cause.",
    fullBio: `<h3>The Scholar-Priest of Kraków</h3>
<p>John of Kanty (Jan Kanty) was born on June 23, 1390, in Kęty near Bielsko-Biała in southern Poland. He studied theology at the Jagiellonian University in Kraków, was ordained a priest, and received his doctorate. He became a professor of theology at the university and held his chair for many years, living with extraordinary personal simplicity: he slept on the floor, ate sparingly, gave most of his income to the poor, and walked to Rome on pilgrimage four times — each time on foot. His library, donated to the university at his death, was one of the finest private collections in Poland.</p>

<h3>Trial and Restoration</h3>
<p>John's academic career was interrupted by jealousy and intrigue: colleagues accused him of doctrinal error and had him removed from his teaching chair, sending him to serve a parish in rural Olkusz. The parishioners, accustomed to a different kind of priest, treated him with suspicion and even hostility. John endured this with patient humility. When he was eventually restored to his university chair, he said the years in Olkusz had been a great grace — that suffering for one's reputation was better than reputation itself. He taught at Kraków for the rest of his life and died on December 24, 1473, aged 83, universally beloved.</p>

<h3>The Kęty Principle</h3>
<p>John is one of the patron saints of Poland and Lithuania. He was beatified in 1680 and canonized in 1767. His portrait bears an inscription taken from his own life principle — sometimes called the "Kęty rule": <em>"Fight all error, but do it with good humor, patience, kindness, and love. Harshness will damage your own soul and spoil the best cause."</em> This motto is among the most practical pieces of spiritual advice in the Catholic tradition.</p>`,
    reflection: "John of Kanty's motto is practical theology for every polemical age: fight error with kindness or your harshness will damage your own soul and spoil your best cause. He taught this in the fifteenth century and it has been ignored in almost every century since. The combination of intellectual rigor and personal gentleness — fighting for the truth with good humor and love — is rare, and its rarity makes it more, not less, necessary.",
    prayerToSaint: "O Saint John of Kanty, scholar, priest, and man of holy simplicity, you pursued truth with your mind and mercy with your hands, giving your coat and your income and your learning to those who needed them. Intercede for all university professors and scholars, for all priests who serve in difficult parishes, and for all who must defend the faith in contentious times. Help us to fight error as you taught: with good humor, patience, kindness, and love. Amen.",
  },

  {
    name: "Saint Turibius of Mogrovejo",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XIII (1726)",
    quote: "Christ said, I am the truth. He did not say, I am the custom.",
    fullBio: `<h3>Lawyer to Archbishop</h3>
<p>Toribio Alfonso de Mogrovejo was born on November 16, 1538, in Villaquejida, Spain. He studied law at Salamanca, was appointed Chief Inquisitor of Granada under King Philip II — as a layman who had never been ordained. Philip II then nominated him for the archbishopric of Lima, Peru. He was ordained priest, bishop, and archbishop in quick succession and arrived in Lima in 1581 with full apostolic energy.</p>

<h3>Reform and Mission in Peru</h3>
<p>Lima in 1581 was a Spanish colonial city of wealth and considerable corruption, and the indigenous population lived in conditions of exploitation. The Church in Peru had not been effectively organized. Toribio set out to change this systematically. He learned Quechua (and several other indigenous languages) to preach directly to the native peoples. He visited every part of his enormous diocese — traveling on foot or horseback through jungles, mountains, and deserts, through territory totaling about 400,000 square miles. He convened major regional councils (1582-83, 1591, 1601) that established the structures of the Latin American Church. He personally confirmed nearly a million indigenous Peruvians — among those he confirmed were the future saints Rose of Lima and Martin de Porres. He established the first seminary in the Americas (Lima, 1591).</p>

<h3>Death and Legacy</h3>
<p>Toribio died on March 23, 1606, in Saña, Peru, while on a pastoral visitation — working until the end. He was beatified in 1679 and canonized in 1726. His feast is March 23. He is patron of Latin American bishops and of those working for the rights of indigenous peoples. His famous saying — "Christ said, I am the truth. He did not say, I am the custom" — was his response to colonial officials who defended the exploitation of indigenous peoples by appeal to local custom.</p>`,
    reflection: "Turibius's famous line — 'Christ said, I am the truth. He did not say, I am the custom' — was his answer to colonial officials who justified the mistreatment of indigenous peoples by custom. He knew that the abuse of indigenous people was not sanctioned by Christ, regardless of what Spanish custom permitted. His entire pontificate was a practical application of this conviction: that the Gospel applies to everyone, that the dignity of the native Peruvian is not less than the dignity of the Spanish colonist, and that the Church exists for all people or it doesn't exist at all.",
    prayerToSaint: "O Saint Turibius of Mogrovejo, archbishop and apostle of Peru, you learned the languages of the indigenous peoples and confirmed nearly a million of them in the faith. Intercede for the Church in Latin America, for all bishops who serve in vast and difficult territories, for all who work for indigenous rights and dignity. Help us to say with you: Christ is the truth, not custom — and to build our lives on that truth, however much custom resists it. Amen.",
  },

  // ── More major saints with correct "Saint" prefix ───────────────────────

  {
    name: "Saint Our Lady of Lourdes",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "N/A",
    quote: "I am the Immaculate Conception.",
    fullBio: `<h3>The Apparitions at Lourdes</h3>
<p>Between February 11 and July 16, 1858, the Virgin Mary appeared eighteen times to Bernadette Soubirous, a fourteen-year-old asthmatic peasant girl, at the Grotto of Massabielle near Lourdes in the French Pyrenees. The apparitions were surrounded by controversy and scrutiny from the beginning. On February 25, Bernadette was directed to dig in the earth, from which a spring emerged — a spring that has since produced millions of liters of water and been the site of thousands of claimed miraculous healings. On March 25, the Feast of the Annunciation, the apparition revealed her identity in words that electrified the theological world: "I am the Immaculate Conception."</p>

<h3>Theological Significance</h3>
<p>The title "Immaculate Conception" referred to the dogma defined just four years earlier (December 8, 1854) by Pope Pius IX — that Mary was conceived without original sin. Bernadette, barely literate, could not have invented this phrase; she reportedly had to repeat it over and over to remember it, and asked what it meant. The timing — the Church defining the dogma in 1854, the apparition confirming it with the title in 1858 — was seen as a supernatural confirmation. The apparitions were officially recognized by Bishop Laurence of Tarbes in 1862.</p>

<h3>World Pilgrimage Site</h3>
<p>Lourdes is now the second most visited pilgrimage site in Europe after Rome, receiving over six million pilgrims annually. The spring produces water that has been associated with hundreds of claimed miraculous healings; the Church's Medical Bureau at Lourdes has investigated these claims since 1882 and recognized a carefully evaluated number as inexplicable by natural causes. The feast of Our Lady of Lourdes on February 11 was declared the World Day of the Sick by Pope John Paul II in 1992.</p>`,
    reflection: "At Lourdes, Mary appeared not to theologians or bishops but to a poor sick girl in a garbage dump — the Grotto of Massabielle was used for dumping rubbish. The spring that emerged from the earth in response to Bernadette's digging has produced healing for countless pilgrims. The logic of Lourdes is the logic of the Incarnation: God meets us in the lowest places, and from the earth of our poverty, something pure and healing emerges. The Immaculate Conception appeared in a rubbish heap to announce that she had never been touched by the corruption that marks our world.",
    prayerToSaint: "Our Lady of Lourdes, Immaculate Conception, you appeared to the little and the poor to confirm the faith of the whole Church. Intercede for all the sick who make pilgrimage to Lourdes and to every shrine of healing. Obtain for us not only healing of body but healing of faith — the recovery of trust in God that our spiritual sicknesses most need. And help us to bring the sick of our communities to the spring of grace, as the pilgrims of Lourdes have done for over a century. Amen.",
  },

  {
    name: "Saint Chair of Saint Peter",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "N/A",
    quote: "You are the Christ, the Son of the living God.",
    fullBio: `<h3>The Feast of Papal Authority</h3>
<p>The feast of the Chair of Saint Peter (February 22) is not a feast of a person or a relic in the ordinary sense, but a liturgical celebration of the authority Christ gave to Peter and through Peter to his successors. The "chair" (Latin: <em>cathedra</em>) is a symbol of the teaching authority of a bishop — every bishop's cathedral takes its name from the bishop's chair. To celebrate the Chair of Peter is to celebrate the papacy itself: the Petrine ministry of unity and authoritative teaching that Christ established when He said, "You are Peter, and on this rock I will build my Church, and the gates of hell shall not prevail against it" (Matthew 16:18).</p>

<h3>Historical Background</h3>
<p>An ancient wooden chair preserved in Saint Peter's Basilica in Rome (enclosed within Bernini's golden reliquary in the apse, the <em>Cathedra Petri</em>) was long venerated as the actual chair of Peter. Modern analysis indicates it dates from the Carolingian period (ninth century), likely a gift from Charles the Bald. Whether or not this is Peter's physical chair matters less than what the feast celebrates: the unbroken succession of bishops of Rome from Peter to the present day, and the promise of Christ that the Church built on Peter's confession of faith will endure.</p>

<h3>Theological Meaning</h3>
<p>The feast is celebrated on February 22 in the Latin Church, reflecting an ancient Roman tradition of honoring the dead at memorial meals in February. The celebration of Peter's chair in February may have roots in a pre-Christian ancestral feast that the Church baptized into a celebration of the apostolic tradition. The feast calls Catholics to renew their bond with the Bishop of Rome as the successor of Peter and the center of Catholic unity.</p>`,
    reflection: "The Chair of Peter is a piece of furniture elevated to a theological symbol — the teacher's seat from which authority flows. Peter's authority came not from his own virtue (he had denied Christ three times) but from Christ's choice: 'I have prayed for you that your faith may not fail; and when you have turned again, strengthen your brothers' (Luke 22:32). The papacy is built on that prayer, not on Peter's perfection. This feast is an act of faith that Christ's prayer has been answered.",
    prayerToSaint: "Lord Jesus Christ, you said to Peter: upon this rock I will build my Church, and the gates of hell shall not prevail against it. Protect the Chair of Peter and all who sit in it. Give the Bishop of Rome wisdom, courage, and holiness sufficient to the weight of the Petrine ministry. Strengthen the bonds of Catholic unity so that the Church may be one as you and the Father are one. And help all Catholics to receive the teaching of Peter's successor with the docility and love that this ministry deserves. Amen.",
  },

  {
    name: "Saint The Conversion of Paul",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "N/A",
    quote: "Saul, Saul, why are you persecuting me? — The Voice of Christ to Paul",
    fullBio: `<h3>The Road to Damascus</h3>
<p>The feast of the Conversion of Saint Paul (January 25) celebrates the event recounted three times in the Acts of the Apostles (9:1-19, 22:3-16, 26:9-18): the blinding vision of the risen Christ that transformed the persecutor Saul of Tarsus into the Apostle Paul. Saul was traveling to Damascus with letters authorizing him to arrest Christians and bring them bound to Jerusalem. On the road, he was suddenly surrounded by a blinding light and thrown to the ground. A voice said: "Saul, Saul, why are you persecuting me?" Saul asked: "Who are you, Lord?" The reply: "I am Jesus, whom you are persecuting."</p>

<h3>The Significance of the Conversion</h3>
<p>Paul's conversion is theologically extraordinary for several reasons. First, it is a direct appearance of the risen Christ — Paul explicitly claims this as the basis of his apostolate: "Am I not an apostle? Have I not seen Jesus our Lord?" (1 Corinthians 9:1). Second, Christ's words — "why are you persecuting me?" when Paul is persecuting Christians — reveal the mystical identification of Christ with His Church: to persecute the Church is to persecute Christ Himself. Third, Paul's conversion required him to abandon the entire framework of his previous identity — his Pharisaism, his zeal for the Law — and rebuild his understanding of God entirely around the crucified and risen Jesus.</p>

<h3>The Week of Prayer for Christian Unity</h3>
<p>The feast of the Conversion of Saint Paul (January 25) closes the Week of Prayer for Christian Unity (January 18-25) — a placement reflecting the hope that the Church's missionary apostle, who wrote so urgently about unity (Ephesians 4:3-6, 1 Corinthians 1:10-13), might intercede for the reunion of divided Christians. Paul's conversion is a model of what ecumenism requires: the willingness to have one's existing categories shattered by an encounter with the living Christ.</p>`,
    reflection: "Saul was on his way to do something terrible — and Christ stopped him. Not by force, not by destruction, but by a question: 'Why are you persecuting me?' The question assumed Saul's accountability without condemning him. And the blinding was not punishment but transformation: for three days Saul sat in darkness, unable to eat or drink, and when his sight returned he was someone else — or rather, more fully himself, because now he was aligned with the One who had made him. The Conversion of Paul is a permanent argument that no one is beyond redemption.",
    prayerToSaint: "O God, who taught the whole world by the preaching of the Apostle Paul, grant that we who celebrate his conversion may advance toward You by following his example. By the intercession of Saint Paul, may all who are persecutors of the faith be converted as he was — by an encounter with the living Christ that strips away everything false and reveals everything true. Help us to say with Paul: 'It is no longer I who live, but Christ who lives in me.' Amen.",
  },

];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed14 = mutation({
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
