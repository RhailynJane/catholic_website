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

  // ── JUNE ─────────────────────────────────────────────────────────────────

  {
    name: "Saint Barnabas the Apostle",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "And when he came and had seen the grace of God, he was glad, and exhorted them all that with purpose of heart they would cleave unto the Lord.",
    fullBio: `<h3>Son of Encouragement</h3>
<p>Barnabas — whose original name was Joseph but who was renamed by the apostles "Barnabas" (meaning "Son of Encouragement") — was a Levite from Cyprus who became one of the most important figures in the earliest Church. He appears repeatedly in the Acts of the Apostles as the man who mediates trust: he introduced the newly converted Saul to the skeptical apostles in Jerusalem (Acts 9:27), vouching for his conversion. He was sent by the Jerusalem church to investigate the new Gentile community in Antioch and was so moved by "the grace of God" that he remained and strengthened them (Acts 11:22-24).</p>

<h3>Partner of Paul</h3>
<p>Barnabas went to Tarsus to find Paul and brought him to Antioch, where they taught together for a year. When famine relief was sent from Antioch to Jerusalem, Barnabas and Paul delivered it. They were then set apart by the Holy Spirit for the first missionary journey (Acts 13:1-3), traveling through Cyprus and Asia Minor. Barnabas introduced Paul to the church; Paul's gifts soon outshone his older companion, and Luke's narrative shifts from "Barnabas and Paul" to "Paul and Barnabas." A sharp disagreement over John Mark (who had abandoned the first journey) ended their partnership; Barnabas took John Mark to Cyprus, Paul took Silas to Syria. Paul later acknowledged that John Mark was useful to him (2 Timothy 4:11) — suggesting that Barnabas had been right about him.</p>

<h3>Cyprus and Martyrdom</h3>
<p>Tradition holds that Barnabas evangelized Cyprus with John Mark and was martyred there around 61 AD — stoned to death by Jews from Antioch who followed him to Cyprus. He is venerated as the founder of the Church in Cyprus; the autocephalous (self-governing) status of the Cypriot church, granted at the Council of Ephesus (431), was justified in part by appeal to its apostolic foundation through Barnabas. His feast is June 11.</p>`,
    reflection: "Barnabas is the patron of second chances. He vouched for Paul when no one trusted him. He gave John Mark another opportunity when Paul dismissed him. Both men proved worthy of Barnabas's confidence. The Church owes an enormous debt to this encourager — without his intercession for Paul, the apostle to the Gentiles might never have been given the platform he needed. Every community needs its Barnabas: the person who sees potential in the rejected, vouches for the untrustworthy, and creates the conditions for others' greatness.",
    prayerToSaint: "O Saint Barnabas, son of encouragement and apostle of Cyprus, you introduced Paul to the apostles and gave John Mark a second chance. Intercede for all who feel overlooked or dismissed, for all who have made mistakes and need someone to vouch for them, and for the Church in Cyprus. Help us to be for others what you were for Paul — the person who sees potential where others see only risk, and who places reputation on the line for the sake of a soul. Amen.",
  },

  {
    name: "Saint Boniface of Mainz",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Let us fight for the Lord on the day of battle, so that we may attain eternal life.",
    fullBio: `<h3>The Apostle of Germany</h3>
<p>Boniface (born Wynfrith) was born around 675 AD in Crediton, Devon, England, to a noble Anglo-Saxon family. He entered the Benedictine monastery of Nursling in Hampshire, where he became an outstanding teacher and scholar. Despite a promising career at home, he felt called to missionary work among the pagan Germanic peoples on the continent. His first mission to Frisia (the Netherlands) in 716 failed; he returned to Nursling and was elected abbot, but declined the position. In 718 he received papal authorization from Pope Gregory II and set out again — this time for Germany.</p>

<h3>Felling the Oak of Thor</h3>
<p>For the next thirty-five years, Boniface transformed the religious landscape of Germany. His most famous act — felling the sacred oak tree of Thor at Geismar (723) without divine retribution — broke the hold of paganism over the local population and opened the way for mass conversions. He organized the German church systematically, establishing bishoprics in Würzburg, Erfurt, Eichstätt, and Regensburg, and founding the great monastery of Fulda (744), which became the center of German intellectual and spiritual life. He reformed the Frankish church at the request of Charles Martel's sons, presiding at major synods (742-745) that addressed clerical abuses and restored discipline. He was appointed Archbishop of Mainz.</p>

<h3>Martyrdom in Frisia</h3>
<p>In 754, at the age of nearly eighty, Boniface resigned his archbishopric to return to missionary work — in Frisia, where his first mission had failed forty years before. On June 5, 754, near Dokkum, he and his companions were attacked by a pagan mob and killed. He was found lying with a Gospel book over his face. He was buried at Fulda, where his tomb remains a major pilgrimage site. He is venerated as the Apostle of Germany and the patron of Germany and of brewers.</p>`,
    reflection: "Boniface cut down the sacred oak of Thor with his own hands — a gesture of absolute conviction that the God of the Christians is stronger than the god of the thunder. The tree fell. Nothing happened. The pagans converted. This is the missionary's wager: that truth told plainly, with one's life behind it, is more powerful than any sacred tree. He spent thirty-five years building the German church, then resigned his archbishopric to go back to where he had failed and complete what he had left unfinished. He died at nearly eighty, still at work.",
    prayerToSaint: "O Saint Boniface, apostle of Germany and martyr, you felled the sacred oak and built a church in its place. Intercede for all missionaries, for Germany and all German-speaking peoples, and for all who must confront the sacred trees of our culture — the idols of comfort, power, and success — with the same calm conviction that the living God is stronger. Help us to lay down our lives for the mission as you laid down yours, and to complete at the end what we began at the start. Amen.",
  },

  {
    name: "Saint Romuald of Ravenna",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Sit in your cell as in paradise. Put the whole world behind you and forget it.",
    fullBio: `<h3>Father of the Camaldolese</h3>
<p>Romuald was born around 950 AD into the Onesti family of Ravenna — a noble family with a violent history. Around 975, his father killed a relative in a duel over property; Romuald withdrew to the monastery of Sant'Apollinare in Classe in penance and was so moved that he entered religious life, eventually leaving the monastery to find a more austere form of solitude under the guidance of a hermit named Marinus near Venice. For years he wandered through Italy, founding hermitages and reforming monasteries, driven by restless holiness and spiritual visions.</p>

<h3>Camaldoli</h3>
<p>Around 1012, Romuald founded the hermitage at Camaldoli in the Tuscan Apennines — a cluster of individual hermit cells around a common church, combining eremitic solitude with cenobitic community. The Camaldolese Order, which he founded, represents a distinctive synthesis: monks live in separate cells and observe profound silence, but gather for liturgical prayer and share a common life. Romuald's "Little Rule" preserved by his disciple Peter Damian — from which the famous "Sit in your cell as in paradise" comes — is a masterpiece of concise spiritual guidance for the contemplative life.</p>

<h3>Missionary Zeal</h3>
<p>Paradoxically, Romuald's passion for solitude was matched by a burning desire for martyrdom in the mission to the Slavic peoples. He trained missionaries, including Saints Benedict and John (the Five Brothers), who were martyred in Poland in 1003. He himself tried repeatedly to go to Hungary on mission but was repeatedly prevented by illness. He died in 1027 in the hermitage of Val-di-Castro, the last surviving member of his community at that moment — fulfilling a prophecy he had made that he would die alone. He was canonized by Pope Gregory IX in 1595.</p>`,
    reflection: "Romuald's advice — sit in your cell as in paradise — is the hermit's entire philosophy in one sentence. The cell is not a prison but a paradise: the place where, with nothing to distract you, you discover that God is all you need. His restless wandering in search of the right form of solitude, his failed attempts at missionary martyrdom, his founding of a new kind of monasticism that combined hermit and monk — all of this speaks of a man who understood that the love of God cannot be domesticated, and that every form of Christian life must be pushed to its radical edge.",
    prayerToSaint: "O Saint Romuald, father of the Camaldolese and seeker of solitude, you fled the world to find God in the silence of the cell, and found in that silence a fire of charity that burned for souls. Intercede for all hermits and contemplatives, for all Camaldolese communities, and for all who feel called to a deeper silence than the active life permits. Help us to find paradise where you found it: in the cell of interior prayer, in the presence of the God who is closer to us than we are to ourselves. Amen.",
  },

  {
    name: "Saint Aloysius Gonzaga",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XIII (1726)",
    quote: "I am a piece of twisted iron; I entered religion to be made straight.",
    fullBio: `<h3>The Princely Renunciation</h3>
<p>Luigi Gonzaga was born on March 9, 1568, the eldest son of the Marquis of Castiglione — one of the most powerful noble families of Lombardy. From infancy he was destined for military and political greatness; at age four he fired a cannon and was given toy weapons to play with. His father set him on a path of courtly education in the courts of Florence and Spain. But even in childhood Luigi showed an extraordinary tendency toward prayer and a repugnance for the moral atmosphere of the courts he was required to inhabit. At nine he made a vow of perpetual chastity.</p>

<h3>Entry into the Jesuits</h3>
<p>At sixteen, Luigi made the decision to renounce his inheritance and enter the Jesuits. The struggle to obtain his father's permission took three years; in November 1585, Aloysius (the Latinized form he adopted in religion) entered the Jesuit novitiate in Rome, surrendering all claim to the marquisate of Castiglione. His novice master was none other than Robert Bellarmine. Aloysius brought to the Jesuits an intensity of prayer and penitential discipline that his superiors had constantly to moderate — he was inclined to fast and mortify himself beyond what his health (which was always fragile) could sustain. He was told by his confessor that his most difficult penance was to learn to accept relaxation of his regime.</p>

<h3>Martyrdom of Charity</h3>
<p>In 1591, a plague struck Rome. Aloysius, not yet ordained, worked in the Jesuit hospital caring for plague victims. He contracted the disease himself in March 1591 and died on June 21, 1591, at age twenty-three — after three months of lingering illness, during which his serenity and peace became apparent to all who visited him. Robert Bellarmine administered his last rites. He was beatified in 1605 and canonized in 1726. He is the patron of youth, students, and AIDS patients (named so by Pope John Paul II in 1991 for his care of plague victims).</p>`,
    reflection: "Aloysius Gonzaga gave up a marquessate to be a novice, accepted being told to pray less as his most difficult penance, and died caring for plague victims before he could be ordained. He compressed holiness into twenty-three years. His life is a reminder that sanctity does not require a long life but only a complete surrender — that God can do with a few years what He might take decades to accomplish in a soul less willing to yield everything at once.",
    prayerToSaint: "O Saint Aloysius Gonzaga, patron of youth and model of purity, you gave up empire to serve God and died before you could be ordained — serving the plague-stricken as your last act of love. Intercede for all young people, for students, for all who care for the sick and dying, and for those suffering from AIDS. Help us to give God what is most difficult to give: not our sins (those are easy to confess) but our ambitions, our attachments, the things we cling to as constitutive of who we are. Amen.",
  },

  {
    name: "Saint Josemaria Escriva",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope John Paul II (2002)",
    quote: "Sanctity does not consist in doing extraordinary things. It consists in doing ordinary things with love.",
    fullBio: `<h3>Founder of Opus Dei</h3>
<p>Josemaría Escrivá de Balaguer was born on January 9, 1902, in Barbastro, Aragon, Spain, the second of six children of a devout merchant family. Three of his sisters died in childhood, a series of losses that shaped his early faith. He felt called to the priesthood from his early teens and was ordained on March 28, 1925. On October 2, 1928, during a retreat in Madrid, he received what he described as a founding inspiration — the vision of Opus Dei (Latin: "Work of God"), a Catholic institution dedicated to spreading the call to holiness in ordinary life through ordinary work.</p>

<h3>The Universal Call to Holiness</h3>
<p>Opus Dei's charism anticipated by thirty years the teaching of the Second Vatican Council on the universal call to holiness (Lumen Gentium, chapter 5). Escrivá insisted that holiness was not the preserve of priests and religious but the vocation of every baptized Christian — that the lawyer, the housewife, the student, the factory worker could and should be saints, and that the ordinary work of their daily lives was the material of sanctification. The way to holiness was not to do extraordinary things but to do ordinary things with extraordinary love and union with God.</p>

<h3>The Spanish Civil War and Beyond</h3>
<p>During the Spanish Civil War (1936-1939), Escrivá was in daily danger as a priest; he fled Madrid and crossed the Pyrenees on foot through winter snow to reach nationalist-controlled territory. He continued his pastoral work throughout the war. After the war, Opus Dei spread rapidly through Spain and internationally. By the time of Escrivá's death on June 26, 1975, it had members in dozens of countries. He was beatified by Pope John Paul II in 1992 and canonized in 2002. He is the founder of the Personal Prelature of Opus Dei.</p>`,
    reflection: "Josemaría Escrivá taught that your desk, your kitchen, your classroom, your workshop is an altar — the place where your daily offering of work, done well and done with love for God, becomes a participation in the sacrifice of Christ. This is not a comfortable metaphor; it is a demanding theology. It means that slacking at work is a kind of spiritual failure, and that excellent craftsmanship, careful thinking, and faithful execution of duties are forms of prayer. His charism democratized sanctity: not just for monks and nuns, but for the person in the office on an ordinary Tuesday.",
    prayerToSaint: "O Saint Josemaría Escrivá, founder of Opus Dei and apostle of the universal call to holiness, you saw in the ordinary work of daily life the material of sanctification. Intercede for all who struggle to unite their professional and spiritual lives, for all members of Opus Dei, and for all who are trying to sanctify the world from within. Help us to transform our desks and kitchens and workshops into altars, and to offer God the daily work that is our most honest gift. Amen.",
  },

  // ── JULY ─────────────────────────────────────────────────────────────────

  {
    name: "Saint Junipero Serra",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Francis (2015)",
    quote: "Always forward, never back.",
    fullBio: `<h3>The Apostle of California</h3>
<p>Miguel José Serra was born on November 24, 1713, in Petra, Majorca, Spain, to a farming family. He entered the Franciscan Order, took the name Junípero (after a companion of Saint Francis), and became a distinguished professor of philosophy at the University of Palma before feeling called to the missions in the Americas. He arrived in Mexico City in 1749 and served for seventeen years among the indigenous peoples of the Sierra Gorda region of Mexico, learning the Pame language and establishing missions that combined evangelization with practical education in agriculture and crafts.</p>

<h3>The California Missions</h3>
<p>In 1769, at the age of fifty-five, Serra accompanied the Spanish military expedition to Alta California (modern California). Despite a severe leg infection that would pain him the rest of his life, he walked thousands of miles up and down the California coast. He founded nine of the twenty-one California missions between 1769 and his death in 1784, beginning with San Diego de Alcalá (1769) and ending with San Buenaventura (1782). The missions — now a chain from San Diego to Sonoma — brought the indigenous peoples into agricultural communities where they received the sacraments, learned European farming and crafts, and were protected (to a degree) from the violence of Spanish colonization.</p>

<h3>Complexity and Canonization</h3>
<p>Serra's canonization in 2015 was controversial: scholars and indigenous groups raised legitimate concerns about the mission system's treatment of California's native peoples — including corporal punishment, restrictions on movement, and the catastrophic collapse of indigenous populations through disease and cultural disruption. Pope Francis, who canonized him at the first canonization ever held in the United States, acknowledged this complexity while emphasizing Serra's personal courage, his defense of indigenous peoples against Spanish military violence, and his genuine care for their welfare as he understood it. He died on August 28, 1784, at Mission San Carlos Borroméo in Carmel.</p>`,
    reflection: "Junípero Serra's legacy is genuinely complicated, and honest veneration of him requires acknowledging it. The mission system he built both preserved many indigenous lives from Spanish military violence and disrupted indigenous cultures catastrophically. Serra himself petitioned Spanish authorities to end corporal punishment of indigenous people and defended their rights against military abuses — sometimes at risk to himself. He was a man of his century, with his century's blind spots, who also exhibited genuine love for the people he served. His canonization does not require pretending the mission system was without harm; it requires discerning holiness in a complex historical actor.",
    prayerToSaint: "O Saint Junípero Serra, Franciscan missionary and apostle of California, you walked thousands of miles on a crippled leg to plant the Church on the Pacific coast. Intercede for the Church in California and for the indigenous peoples whose ancestors you served. Help us to carry the Gospel as you carried it — always forward, never back — and to pursue the call with your persistence, while remaining open to honest reckoning with the harm that good intentions can sometimes cause. Amen.",
  },

  {
    name: "Saint Bridget of Sweden",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "Pope Boniface IX (1391)",
    quote: "Love God above all things and your neighbor as yourself — this is all of religion.",
    fullBio: `<h3>Mystic and Pilgrim</h3>
<p>Birgitta (Bridget) Birgersdotter was born around 1303 in Finsta, Sweden, to a noble family of great piety. Her mother died when she was eleven; she was raised by an aunt and, from her earliest childhood, received mystical visions. At thirteen she was married, at her father's arrangement, to Ulf Gudmarsson, a Swedish nobleman. The marriage was, by all accounts, genuinely happy: the couple made a pilgrimage to Santiago de Compostela together, had eight children (including the future Saint Catherine of Sweden), and shared a mutual commitment to prayer and charitable works. After twenty-eight years of marriage, Ulf died in 1344 following a long illness during which both he and Birgitta deepened their spiritual lives.</p>

<h3>Revelations and the Order of the Holy Savior</h3>
<p>After Ulf's death, Birgitta committed herself entirely to a life of prayer, penance, and charity at the monastery of Alvastra. She received extensive mystical revelations — the <em>Revelationes Caelestes</em> — which became enormously influential in late medieval spirituality. She was directed to found a religious order: the Order of the Most Holy Savior (Birgittines), with a double monastery of men and women under the governance of an abbess. She traveled to Rome in 1349, intending to obtain papal approval for her order and to work for the return of the popes from Avignon to Rome. She spent the rest of her life in Rome, pursuing both goals with extraordinary energy.</p>

<h3>Death and Legacy</h3>
<p>Birgitta made a pilgrimage to the Holy Land in 1371-72, receiving her final major revelations at the sites of Christ's birth and crucifixion. She returned to Rome and died there on July 23, 1373, having never obtained the return of the popes to Rome (which happened only in 1377). Her relics were translated to Vadstena in Sweden, where her daughter Catherine established the first Birgittine monastery. She was canonized in 1391 and declared co-patroness of Europe (with Benedict, Cyril and Methodius, and Catherine of Siena) by Pope John Paul II in 1999.</p>`,
    reflection: "Bridget of Sweden was a wife, a mother, a mystic, a foundress, a pilgrim, and a prophetic voice calling the popes back to Rome — all simultaneously. Her life is a rebuke to any spirituality that divides the active and the contemplative, the domestic and the apostolic, the personal and the institutional. She had eight children and mystical visions. She managed a household and petitioned popes. She traveled to Jerusalem in her late sixties and continued receiving revelations until her death. Her example is that the interior life overflows — it cannot be contained — and that the mystic is always also an actor in the world.",
    prayerToSaint: "O Saint Bridget of Sweden, wife, mother, mystic, and foundress, you poured your abundant interior life into every external calling — family, monastery, pilgrimage, prophetic mission. Intercede for mothers who seek contemplative depth while managing demanding families, for all who feel torn between active and contemplative vocations, and for the peoples of Scandinavia. Help us to trust that the God who gives visions also gives energy for all the work that flows from them. Amen.",
  },

  {
    name: "Saint Joachim and Anne",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Blessed are you among women, and blessed is the fruit of your womb! — Elizabeth to Mary, the daughter of Anne",
    fullBio: `<h3>The Parents of Mary</h3>
<p>Joachim and Anne are the parents of the Virgin Mary — the grandparents of Jesus Christ — whose names and story are not preserved in the canonical Scriptures but are known from the apocryphal <em>Protoevangelium of James</em> (c. 150 AD), one of the earliest non-canonical Christian texts. The <em>Protoevangelium</em> recounts that Joachim and Anne were a pious, wealthy, and childless couple — Joachim was a descendant of David — who were deeply distressed by their inability to have children, in a culture that regarded childlessness as divine disfavor. Joachim was humiliated at the Temple when a priest refused his offering on the grounds that he was barren.</p>

<h3>The Annunciation to Joachim and Anne</h3>
<p>Joachim withdrew to the desert to fast and pray; Anne remained at home in grief. An angel appeared to each of them separately with the announcement that they would conceive a child "blessed by all the world." Joachim returned, they met at the Golden Gate of Jerusalem in a famous embrace, and Anne conceived Mary. The account deliberately parallels the Old Testament stories of barren women — Sarah, Hannah, Elizabeth — who conceived miraculously: the parents of Israel's greatest figures were themselves figures of hopeless barrenness transformed into miraculous fruitfulness.</p>

<h3>Veneration and Feast</h3>
<p>Anne has been venerated as a patron of mothers, grandmothers, and pregnant women since early Christian times. The feast of Anne was celebrated in the East from the sixth century; it was introduced to the Roman calendar in 1584. Joachim's feast was added much later, and both are now celebrated together on July 26. They are patrons of grandparents, parents, married couples, and those hoping for conception. The basilica of Saint Anne in Jerusalem marks the traditional site of their home.</p>`,
    reflection: "Joachim and Anne gave the world Mary, and Mary gave the world Christ. They are, in the economy of salvation, the ultimate grandparents — the furthest back we can reach in the human ancestry of God incarnate. Their barrenness and their prayer and their unexpected gift are a reminder that the most important things God does in human history come through ordinary human love, faithfulness, and prayer. Every family that prays for children, every couple who endures the humiliation of infertility with faith — they are walking in the footsteps of Joachim and Anne.",
    prayerToSaint: "O Saints Joachim and Anne, parents of the Virgin Mary and grandparents of our Lord, you endured the pain of childlessness with faith and were given the greatest gift in human history. Intercede for all couples struggling with infertility, for all grandparents and elderly parents, and for all families. Help us to give our children not just comfort and security but the formation in prayer and holiness that you gave to Mary — the formation that prepared her to say yes to God. Amen.",
  },

  // ── AUGUST ───────────────────────────────────────────────────────────────

  {
    name: "Saint Louis IX of France",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Boniface VIII (1297)",
    quote: "Whether sleeping or waking, eating or drinking, alone or in company, order all your actions as if you were seeing them in the full light of God's justice.",
    fullBio: `<h3>The Crusader King</h3>
<p>Louis IX was born on April 25, 1214, in Poissy, France, the son of King Louis VIII and Blanche of Castile. He became king at age twelve under his mother's regency and was crowned in 1226. Blanche was a formidable ruler who shaped Louis's character profoundly; he later wrote that he feared offending God more than anything else — including her. He married Margaret of Provence in 1234; they had eleven children. By temperament and formation Louis was a man of deep piety who took the obligations of Christian kingship with absolute seriousness.</p>

<h3>Justice and Charity</h3>
<p>Louis's domestic governance was remarkable by medieval standards: he promoted the rule of law over arbitrary royal power, created a system for receiving petitions directly from any subject (the famous "justice under the oak" at Vincennes), worked to reform abuses in the judicial system, forbade blasphemy and public games, restricted usury, and built the Sainte-Chapelle in Paris (1248) to house the Crown of Thorns he had purchased from the Byzantine emperor. He personally served the poor and sick, washed the feet of lepers, and distributed food at his table. He founded several hospitals and the Quinze-Vingts, a hospice for three hundred blind persons in Paris.</p>

<h3>The Crusades and Death</h3>
<p>Louis led two crusades. The Seventh Crusade (1248-1254) ended in his capture at the Battle of al-Mansurah in Egypt and a humiliating ransom. The Eighth Crusade (1270) was directed toward Tunis; Louis died of dysentery or typhus at Tunis on August 25, 1270, aged fifty-six. His final words were reportedly: "Jerusalem, Jerusalem." He was canonized in 1297, twenty-seven years after his death. He is patron of France, the French monarchy, the Secular Franciscan Order, and tertiaries.</p>`,
    reflection: "Louis IX governed a kingdom and ran it like a saint — literally. He sat under an oak tree and heard anyone's petition. He washed lepers' feet. He built hospitals. He failed his crusades. He died of fever in a military camp in North Africa, whispering Jerusalem. His life is the medieval ideal of Christian kingship at its best: the belief that secular power is given by God and must be exercised with the rigor of Christian conscience. He shows what might happen if every person with power asked: how would I govern if I knew God was watching?",
    prayerToSaint: "O Saint Louis IX of France, Christian king and servant of the poor, you governed your kingdom with justice and served your subjects with the hands of a servant. Intercede for the rulers and governments of France and all nations, for all who exercise political power, and for all who try to live the Gospel in the midst of public responsibility. Help us to govern whatever is given us to govern — our families, our organizations, our small spheres — with the same conviction that power is held on behalf of God and neighbor. Amen.",
  },

  {
    name: "Saint Pius X",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XII (1954)",
    quote: "I was born poor, I have lived poor, and I wish to die poor.",
    fullBio: `<h3>The Pope of the Eucharist</h3>
<p>Giuseppe Melchiorre Sarto was born on June 2, 1835, in Riese, Venetia, to a postman and a seamstress — one of ten children in a poor family. He was educated on scholarships, ordained in 1858, and worked as a parish priest for seventeen years in Tombolo and Salzano. He became Bishop of Mantua in 1884 and was made a cardinal and Patriarch of Venice in 1893. At the conclave of 1903, the frontrunner was the liberal Cardinal Rampolla, but the Emperor of Austria-Hungary exercised the ancient right of veto — the last time a civil authority blocked a papal election. The cardinals turned to the reluctant Sarto, who wept and accepted as "the cross."</p>

<h3>The First Communion Decree</h3>
<p>Pius X's most significant pastoral act was the decree <em>Quam singulari</em> (1910), which lowered the age of First Communion to the "age of reason" (approximately seven years old) and insisted on frequent Communion for all the faithful. Before this decree, First Communion had typically been deferred until twelve to fourteen years of age, and frequent Communion was discouraged. The effect was transformative: millions of children received their first Communion years earlier than before, and the practice of frequent, even daily, Communion became normative for the first time in centuries.</p>

<h3>The Modernist Crisis</h3>
<p>Pius X's pontificate was also marked by a fierce campaign against "Modernism" — the theological movement that applied historical-critical methods to Scripture and tradition in ways that, in his view, compromised the content of faith. His decree <em>Lamentabili</em> (1907) and encyclical <em>Pascendi</em> (1907) condemned Modernism systematically. The anti-Modernist campaign involved measures (including a required oath against Modernism for clergy) that are now considered excessive. Pius died on August 20, 1914, just weeks after the outbreak of World War I, reportedly broken by the disaster he had foreseen. He was canonized in 1954.</p>`,
    reflection: "Pius X gave millions of children the Eucharist earlier than any previous generation had received it, and insisted that all the faithful commune frequently. He understood that the Eucharist is the center of Christian life — not a reward for the holy but food for the hungry. His lowering of the age of First Communion was not liturgical administration; it was an act of spiritual democracy, insisting that the Lord who said 'let the children come to me' meant it sacramentally as well as metaphorically.",
    prayerToSaint: "O Saint Pius X, pope of the Eucharist and defender of the faith, you opened the table to children and the poor with equal generosity. Intercede for the renewal of Eucharistic devotion and for all who receive unworthily or not at all. Help us to hunger for the Eucharist as you taught us to hunger — frequently, humbly, and without fear. And help the Church to be as generous in welcoming the little ones to the table as you were in your pontificate. Amen.",
  },

  // ── SEPTEMBER-OCTOBER ───────────────────────────────────────────────────

  {
    name: "Saint Cornelius",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "The Church is built upon the unity of the bishops. May God preserve her from schism.",
    fullBio: `<h3>Pope in the Decian Aftermath</h3>
<p>Cornelius served as Pope from March 251 to June 253 AD — a brief but decisive pontificate during the aftermath of the Decian persecution. The Decian persecution (249-251 AD) had forced enormous numbers of Christians to apostasize — to offer sacrifice to the pagan gods — under threat of torture and death. When the persecution ended, the Church faced the pastoral crisis of what to do with the <em>lapsi</em> (the "lapsed") — those who had compromised. Cornelius, in correspondence with Cyprian of Carthage, advocated a policy of mercy: the lapsed could be reconciled after a period of penance, through the sacrament of confession and the intercession of the martyrs.</p>

<h3>The Novatian Schism</h3>
<p>This mercy policy was opposed by Novatian, a Roman priest of great intellectual gifts, who argued that the Church had no power to absolve those who had apostasized and that Cornelius's election (opposed by Novatian's faction) was invalid. Novatian had himself consecrated a rival bishop of Rome — the first anti-pope in Church history. Cornelius, supported by the great majority of the Western bishops and by Cyprian of Carthage, governed the Church in schism, condemning Novatianism and defending both the Church's mercy toward the penitent lapsed and his own legitimacy. Cornelius was eventually exiled to Centumcellae (modern Civitavecchia) by the Emperor Gallus and died there in June 253 — venerated immediately as a martyr, though the circumstances of his death (whether direct execution or death from the hardships of exile) are unclear.</p>`,
    reflection: "Cornelius faced both external persecution and internal schism — the two great threats to the Church in every age. His response to both was the same: unity and mercy. Against Novatian's rigorism, he insisted that the Church's sacramental mercy was real, that the penitent lapsed could be forgiven, that the community should be gathered not divided. His friendship with Cyprian, bishop of Carthage, maintained the solidarity of the Western church against the schism. He is a patron of those who believe that mercy and unity are always the right answer to the Church's internal crises.",
    prayerToSaint: "O Saint Cornelius, pope and martyr, you held the Church together in the aftermath of persecution and the crisis of schism. Intercede for the unity of the Church, for all bishops who must navigate between rigorism and laxity, and for all the penitent who need the Church's sacramental mercy. Help us to believe that the Church's power to forgive is real, that the lapsed can return, and that unity is worth more than the satisfaction of being right. Amen.",
  },

  {
    name: "Saint Wenceslaus of Bohemia",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Grant me the grace to do good for my people and to defend the truth of the faith.",
    fullBio: `<h3>The Good King</h3>
<p>Wenceslaus (Václav) was born around 907 in Stochov, Bohemia, the son of Duke Vratislav I and Drahomíra, a pagan princess. He was raised in the Christian faith by his devout grandmother Ludmila (also a saint, murdered by Drahomíra) and educated by priests in Budeč. When his father died around 921, the regency was contested between his Christian-oriented faction and his mother Drahomíra's pagan faction; Drahomíra had Ludmila strangled, fearing her influence over the young duke. Wenceslaus eventually took power himself around 922 and began governing Bohemia according to Christian principles.</p>

<h3>Christian Duke</h3>
<p>Wenceslaus promoted Christianity in Bohemia, built churches (including the rotunda of Saint Vitus in Prague, on the site of the current cathedral), brought in priests and monks, ransomed prisoners and freed slaves, and was personally known for feeding the poor and caring for the sick and suffering. The Christmas carol "Good King Wenceslas" (written in 1853) preserves in legendized form the historical memory of his charity. He maintained Bohemia's independence through careful diplomacy — paying tribute to the German king Henry the Fowler rather than fighting a war he would likely have lost — a decision unpopular with the Bohemian nobility.</p>

<h3>Martyrdom</h3>
<p>On September 28, 929 (or 935 — the date is disputed), Wenceslaus was murdered by his younger brother Boleslav and his companions, apparently at Boleslav's invitation to a religious feast. The murder may have been partly motivated by Boleslav's alliance with the pagan nobility who resented Wenceslaus's Christian policy and his deference to German power. He was immediately venerated as a martyr. He is patron of Bohemia, the Czech Republic, and brewers. His feast on September 28 is the Czech national holiday.</p>`,
    reflection: "The Good King of the Christmas carol was murdered by his brother. What the carol preserves — the king going out in the snow to carry food to a poor man — is the historical Wenceslaus: a ruler who personally and practically cared for his poorest subjects. He governed a small, fragile country between pagan traditions and German power with patience, prayer, and personal holiness. His martyrdom at his brother's hands is the oldest kind of tragedy: the good man undone by family violence and political calculation. The Church has not forgotten him.",
    prayerToSaint: "O Saint Wenceslaus, patron of Bohemia and Czech people, good king and martyr, you governed with justice and died for your faith. Intercede for the Czech Republic and all the peoples of central Europe, for all Christian rulers who must balance principle and prudence, and for all who suffer from violence within their own families. Help us to be as generous with the poor as you were, and as unmoved by political convenience when our faith is at stake. Amen.",
  },

  {
    name: "Saint Isidore of Seville",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (Doctor declared 1722)",
    quote: "If a man wants to be always in God's company, he must pray regularly and read regularly. When we pray, we talk to God; when we read, God talks to us.",
    fullBio: `<h3>The Last Father of the West</h3>
<p>Isidore was born around 560 AD in Cartagena, Spain (then part of the Visigothic kingdom), the youngest of four siblings, three of whom became saints (Leander, Fulgentius, and Florentina). When his elder brother Leander became Archbishop of Seville, Isidore joined him as an ecclesiastical colleague; when Leander died around 600-601, Isidore succeeded him. He governed the archdiocese of Seville for about thirty-six years, dying on April 4, 636 AD. He was known as the last of the great Latin Fathers of the Church and the most learned man of his age.</p>

<h3>The Etymologiae</h3>
<p>Isidore's intellectual achievement is almost unparalleled in the early medieval Church. His <em>Etymologiae</em> (also called <em>Origines</em>) — a twenty-volume encyclopedia of all human knowledge, organized thematically — was the most used reference work of the entire medieval period, surviving in almost a thousand manuscripts. It preserved knowledge of classical learning that would otherwise have been lost: grammar, rhetoric, geometry, arithmetic, music, astronomy, medicine, law, theology, architecture, agriculture, warfare, ships, cooking, and more. His other works included histories of the Goths and the Vandals, a rule for monasteries, a systematic theology, scriptural commentaries, and a major liturgical reform (the Mozarabic Rite).</p>

<h3>Patron of the Internet</h3>
<p>Isidore has been proposed (and informally adopted) as the patron saint of the internet and computer users — on the grounds that the internet is a repository of all human knowledge, and Isidore's <em>Etymologiae</em> was the first attempt to compile and organize all human knowledge in one place. The analogy is imperfect but suggestive. He was declared Doctor of the Church in 1722 and a patron of students and scholars. His feast is April 4.</p>`,
    reflection: "Isidore of Seville saved Western learning by putting it all in one book. At a time when the Roman Empire had collapsed and classical civilization was dissolving in barbarian kingdoms, he compiled what could be saved and organized it for future generations. He understood that knowledge is not an enemy of faith but its servant — that everything knowable about the created world reflects the wisdom of its Creator. His life is a permanent argument that intellectual work is a form of prayer.",
    prayerToSaint: "O Saint Isidore of Seville, last father of the West and guardian of learning, you saved the accumulated wisdom of the ancient world for the medieval one. Intercede for all scholars, teachers, and students, for all who work with information and knowledge, and for the wise use of the internet and modern technology. Help us to see in every fragment of knowledge a gleam of the divine wisdom, and to use what we know in service of what we love. Amen.",
  },

  {
    name: "Saint Teresa of Calcutta",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Francis (2016)",
    quote: "Not all of us can do great things. But we can do small things with great love.",
    fullBio: `<h3>Agnes of Skopje</h3>
<p>Anjezë Gonxhe Bojaxhiu was born on August 26, 1910, in Skopje (now the capital of North Macedonia), the youngest of three children in a devout Albanian Catholic family. Her father Nikola died when she was eight; her mother Drana raised the children in a home known for charity and hospitality to the poor. Agnes felt called to religious life from her early teens. At eighteen she joined the Sisters of Loreto in Dublin, then traveled to India for her novitiate in Darjeeling. She took the name Teresa (after Thérèse of Lisieux) and made her final profession in 1937. She spent the next sixteen years teaching at Saint Mary's High School in Calcutta.</p>

<h3>The Call Within the Call</h3>
<p>On September 10, 1946, during a train journey to Darjeeling for her annual retreat, Sister Teresa received what she described as "a call within a call" — a message from Christ asking her to leave the convent school and serve "the poorest of the poor" in the slums of Calcutta. Two years of discernment followed; in 1948 she began her mission alone, with no money. She learned basic medical care from the Medical Mission Sisters in Patna, returned to Calcutta, and began serving the dying in the streets. In 1950, the Missionaries of Charity were formally founded.</p>

<h3>Nobel Peace Prize and Dark Night</h3>
<p>The Missionaries of Charity grew from twelve sisters in 1950 to over 4,500 by the time of Mother Teresa's death — operating homes for the dying, orphanages, schools, and AIDS hospices in 133 countries. She received the Nobel Peace Prize in 1979. After her death on September 5, 1997, her private letters were published — revealing that for decades she had lived in profound spiritual darkness, unable to feel the presence of God she had once experienced vividly. This "dark night of the soul" is now understood as participation in the desolation of the poor she served and in the abandonment of Christ on the cross. She was canonized by Pope Francis on September 4, 2016.</p>`,
    reflection: "Mother Teresa of Calcutta picked up dying people from the streets and gave them a place to die with dignity. Not great things — small things with great love. The Nobel Prize, the global recognition, the 4,500 missionaries, the two thousand institutions — all grew from one woman picking up one dying man from a Calcutta gutter. Her secret dark night — decades of feeling nothing from God while serving Him absolutely — is the deepest thing about her: she served without consolation, loved without feeling, believed without experiencing. This is not failure; it is the most heroic form of faith.",
    prayerToSaint: "O Saint Teresa of Calcutta, foundress of the Missionaries of Charity and servant of the poorest of the poor, you saw in every dying destitute person the face of Christ in his distressing disguise. Intercede for all who serve the homeless and dying, for all who labor in spiritual darkness trusting that God hears even when He is silent, and for all who try to do small things with great love. Help us to see Christ where He is hardest to recognize, and to serve Him there. Amen.",
  },

];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed16 = mutation({
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
