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

  // ── JANUARY ─────────────────────────────────────────────────────────────

  {
    name: "Saint Basil the Great",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "The bread you do not use is the bread of the hungry. The garment hanging in your wardrobe is the garment of him who is naked.",
    fullBio: `<h3>The Cappadocian Family</h3>
<p>Basil was born around 330 AD in Caesarea, Cappadocia (modern Turkey), into one of the most remarkable families in Christian history. His grandmother was Saint Macrina the Elder, a disciple of Saint Gregory Thaumaturgus. His father and mother, Basil the Elder and Emmelia, were both saints. His sister was Saint Macrina the Younger, whose death provoked one of the most moving funeral orations in patristic literature. Two of his brothers, Gregory of Nyssa and Peter of Sebaste, were also bishops and saints. The household was a living school of holiness.</p>

<h3>Education and Conversion</h3>
<p>Basil received the finest education of his day — Caesarea, Constantinople, and then Athens, where he studied alongside his lifelong friend Gregory Nazianzen and the future emperor Julian the Apostate. His academic achievements were brilliant: philosophy, rhetoric, law, and science. But his sister Macrina drew him back from worldly ambition, showing him a deeper path. He traveled to Egypt, Palestine, Syria, and Mesopotamia to observe the great monasteries, then returned to Cappadocia and gathered a community of monks on his family's estate at Annesi. His two monastic rules, the Longer and Shorter, remain foundational documents of Eastern Christian monasticism — and, through Benedict's Rule (which borrowed from them), of Western monasticism as well.</p>

<h3>Bishop and Defender of Orthodoxy</h3>
<p>Basil was ordained a priest and in 370 was elected Bishop of Caesarea, Metropolitan of Cappadocia. His episcopate coincided with the height of the Arian crisis. The emperor Valens, an Arian, tried to intimidate Basil into signing the Arian creed. The famous confrontation followed: when the emperor's prefect threatened Basil with exile, torture, or death, Basil replied that these threats held no terror for a man who owned nothing, feared nothing, and had already died to the world. The prefect reported to Valens that he had never met such a man. Valens backed down. Basil stood firm — the great rock of Nicene orthodoxy in the East, just as Athanasius had been in the generation before him.</p>

<h3>Theologian and Philanthropist</h3>
<p>Basil was not merely a controversialist. He was one of the greatest constructive theologians of the Church, particularly in his work on the Holy Spirit — his treatise <em>De Spiritu Sancto</em> remains a masterpiece of Trinitarian theology. He also organized the Cappadocian church with exceptional administrative ability, founding the Basiliad — a vast complex of hospitals, poorhouses, and guesthouses that was called by one contemporary "a new city." He preached vividly against the exploitation of the poor by the wealthy, calling the hoarded bread in rich men's storehouses the bread of the hungry. He died on January 1, 379, exhausted by illness and asceticism at the age of 49, having transformed the Church in the East.</p>`,
    reflection: "Basil combined two gifts rarely found together: the theologian's precision and the pastor's burning love for the poor. He could define the procession of the Holy Spirit with philosophical exactness, and the next hour turn to beg grain for the starving of Cappadocia. His life is a rebuke to the idea that doctrine and charity are separate concerns. For Basil, they were one: the God who is Trinity is the God who feeds the poor.",
    prayerToSaint: "O Saint Basil the Great, bishop and doctor, you stood unmoved before emperors and spent yourself for the poorest of the poor. Help us to hold the truth firmly while holding the suffering tenderly — to be as unyielding as you were in matters of faith, and as generous as you were in works of charity. Intercede for all bishops who must defend the faith against powerful opposition, and for all who serve the poor in the name of Christ. Amen.",
  },

  {
    name: "Saint Gregory Nazianzen",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "We must begin again, and again after that, until we attain to Him who is above all beginnings.",
    fullBio: `<h3>The Reluctant Theologian</h3>
<p>Gregory was born around 329 AD in Arianzus, Cappadocia, the son of Gregory of Nazianzus the Elder, a bishop of mixed pagan and Jewish background who converted to Christianity, and his wife Nonna, whose prayers and persistence won his father's conversion. He studied in Caesarea in both Cappadocia and Palestine, then in Alexandria, and finally in Athens — where his lifelong friendship with Basil began. They studied together for years, then jointly edited a collection of the works of Origen, the <em>Philokalia</em>. Gregory wanted nothing more than the contemplative life; he was, by temperament, a poet and mystic, not an administrator or polemicist. Life, however, had other plans.</p>

<h3>Ordained Against His Will</h3>
<p>Gregory's father, as bishop, ordained him a priest against his will. Gregory fled to Basil's monastery in Pontus. After a period of reflection, he returned and accepted the priesthood, preaching his famous "Oration on the Flight" — an extraordinary defense of the weight and dignity of priesthood that became a foundational text for all thinking about ordained ministry. He helped his aging father administer the diocese, then accepted the difficult position of bishop of the tiny, contested outpost of Sasima (which he later called "a detestable little place"). The friendship with Basil was strained by this appointment. After his father's death, Gregory withdrew to his hermitage at Arianzus.</p>

<h3>Archbishop of Constantinople</h3>
<p>In 379, Gregory was invited to lead the beleaguered Nicene community in Constantinople — the capital of the empire, which had been dominated by Arians for decades. He arrived to find a single small chapel available to the Nicene faithful. From this chapel, the Anastasia ("Resurrection"), he preached the five <em>Theological Orations</em> — among the finest theological writing in Christian history, earning him permanently the title "the Theologian." He defended the full divinity of the Son and the Spirit against the Arians and the Pneumatomachoi with such brilliance that the theological tide turned. The Emperor Theodosius, a Nicene, entered Constantinople in 380 and restored the great churches to the orthodox.</p>

<h3>Resignation and Poetry</h3>
<p>Gregory presided at the First Council of Constantinople in 381, which completed the Nicene-Constantinopolitan Creed. But he was worn out by the conflicts. He resigned, delivered his famous farewell oration, and retired to his estate in Arianzus, where he spent his final years writing poetry — doctrinal verse, autobiographical poems, and letters. He died around 390, the most literary and perhaps the most personally sensitive of all the Cappadocian Fathers. His poetry is a window into a mind of great beauty.</p>`,
    reflection: "Gregory Nazianzen is unique among the Fathers in how personally he wrote about his own struggles — his longing for solitude, his resentment at being thrust into public life, his grief at losing Basil, his sense of failure as a bishop. He is a saint of interiority. His greatness was not organizational but theological and poetic: the Five Theological Orations turned the course of Christian history. His life suggests that God calls not only the bold and the vigorous but also the sensitive, the reluctant, and the lonely — and uses them for work that no one else could do.",
    prayerToSaint: "O Saint Gregory the Theologian, you were driven by love of God to speak and write with matchless beauty and precision. You longed for silence and were given a pulpit; you desired solitude and were given a council. Help us to accept the mission God gives us even when it is not the one we would choose, and to bring to it the same intellectual honesty, poetic spirit, and love of truth that marked your own. Amen.",
  },

  {
    name: "Saint Elizabeth Ann Seton",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Paul VI (1975)",
    quote: "The first end I propose in our daily work is to do the will of God; secondly, to do it in the manner He wills it; and thirdly, to do it because it is His will.",
    fullBio: `<h3>A New York Society Woman</h3>
<p>Elizabeth Ann Bayley was born on August 28, 1774, in New York City, into a prosperous and distinguished Episcopalian family. Her father, Richard Bayley, was a prominent physician and Columbia professor; her mother died when Elizabeth was three. She was raised with culture, education, and social grace. At nineteen, she married William Magee Seton, a wealthy shipping merchant, and together they had five children. She was known in New York society as a devoted wife and mother and an active member of Trinity Church, where she was involved in charity work — earning the nickname "the Protestant Sister of Charity." Her life seemed set.</p>

<h3>Loss and Conversion</h3>
<p>Then catastrophe: William's business failed in 1800, and he soon contracted tuberculosis. Elizabeth took him to Leghorn (Livorno), Italy, in 1803, hoping the Mediterranean climate would help. He died there in December. A widow at twenty-nine, Elizabeth was cared for by the Filicchi family — devout Italian Catholics who introduced her to the faith. She was deeply moved by the Catholic understanding of the Eucharist — the Real Presence — and by the depth of faith she witnessed. After two years of intense study and struggle, she was received into the Catholic Church in New York in March 1805, a decision that cost her most of her Protestant friends and social standing.</p>

<h3>Founder of Catholic Education</h3>
<p>In 1808, at the invitation of Bishop John Carroll and Father William DuBourg, Elizabeth moved to Baltimore to open a school for Catholic girls. In 1809, she moved to Emmitsburg, Maryland, where she founded a religious community — the Sisters of Charity of St. Joseph — the first native American religious community. The community wore a distinctive black habit and ran Saint Joseph's Academy and Free School, providing education to the poor. Elizabeth adapted the Rule of Saint Vincent de Paul for American conditions. Her community grew rapidly, establishing schools and orphanages in New York and Philadelphia. She is considered the foundress of the American parochial school system.</p>

<h3>Death and Canonization</h3>
<p>Elizabeth Seton died on January 4, 1821, at Emmitsburg, aged 46, of tuberculosis — the same disease that had taken her husband. She had outlived three of her five children. She was beatified by Pope John XXIII in 1963 and canonized by Pope Paul VI on September 14, 1975 — the first person born in the United States to be canonized. Her feast day is January 4. She is the patroness of Catholic schools, the loss of a parent, widows, and those ridiculed for their faith.</p>`,
    reflection: "Elizabeth Seton's life is a story of repeated loss — her mother in infancy, her husband to disease, her social world to conversion, several of her children before herself. What is remarkable is that each loss became a door into deeper faith. The woman who converted after witnessing Italian Catholic devotion to the Eucharist went on to build the educational infrastructure of American Catholicism. She was not protected from suffering; she was transformed by it — and through her, countless children received an education they would never have had otherwise.",
    prayerToSaint: "O Saint Elizabeth Ann Seton, widow, mother, and foundress, you bore losses that would have crushed many, and made of each one a foundation for deeper love of God and neighbor. Intercede for all widows and single mothers, for all Catholic school teachers, and for all who have sacrificed social acceptance to follow the truth. Help us to find in every loss an invitation to greater trust, and in every door that closes a sign of the door God is opening. Amen.",
  },

  {
    name: "Saint John Neumann",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Paul VI (1977)",
    quote: "I am nothing. I have nothing. I desire nothing but the greater glory of God.",
    fullBio: `<h3>From Bohemia to America</h3>
<p>John Neumann was born on March 28, 1811, in Prachatice, Bohemia (now the Czech Republic), the third of six children of Philip and Agnes Neumann. From boyhood he showed exceptional intelligence and a desire for the priesthood. He studied theology at the diocesan seminary in Budweis, then at the University of Prague. The diocese of Budweis had a surplus of seminarians; John was told his ordination would be delayed indefinitely. Meanwhile he felt a call to mission in North America, where German-speaking Catholic immigrants desperately needed priests. He sailed for New York in 1836, almost penniless, knowing no one. He was ordained on June 25, 1836, just weeks after his arrival — one of the youngest men ever ordained for the Diocese of New York.</p>

<h3>Redemptorist and Missionary</h3>
<p>For four years Neumann worked as a missionary among the German immigrants of western New York, covering enormous territories on foot and horseback with almost no resources. In 1840 he joined the Redemptorists — the first Redemptorist to take his vows in the United States — and continued his missionary work in Baltimore, Pittsburgh, and across the East. His energy was prodigious. He learned six languages (Czech, German, English, French, Italian, and Spanish) to serve immigrants, taught himself enough Irish and Gaelic to hear confessions, and became beloved for his simplicity, availability, and gentleness in the confessional.</p>

<h3>Bishop of Philadelphia</h3>
<p>In 1852, Pope Pius IX appointed Neumann Bishop of Philadelphia — a diocese in crisis, underfunded, and lacking priests and schools. Neumann threw himself into organizing it. He doubled the number of Catholic schools from two to one hundred, established the diocesan school system (the first organized Catholic parochial school system in the United States), introduced the Forty Hours devotion to the American church, and brought numerous religious communities to the diocese. He is considered one of the chief architects of American Catholic institutional life. He died suddenly of a stroke on January 5, 1860, while walking down a Philadelphia street, aged 48.</p>`,
    reflection: "John Neumann came to America with nothing and left it with one hundred schools. He spoke six languages and still felt himself inadequate. He said he was nothing, had nothing, desired nothing — and through that emptiness God built something remarkable. His life is a reminder that the most effective servants of God are often the most self-forgetful ones, that the diocese organized by a man who wanted only the greater glory of God educated generations of Americans in the faith.",
    prayerToSaint: "O Saint John Neumann, immigrant priest and bishop of the poor, you gave your life for the education and sacramental care of souls far from home. Intercede for all immigrant communities seeking pastoral care in their own language, for Catholic school teachers and administrators, and for bishops facing impossible tasks with insufficient resources. Help us to say with you: I am nothing, I have nothing — and to trust that God's grace is sufficient for all He asks of us. Amen.",
  },

  {
    name: "Saint André Bessette",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XVI (2010)",
    quote: "It is Saint Joseph who cures. I am only his little dog.",
    fullBio: `<h3>The Weakest Child</h3>
<p>Alfred Bessette was born on August 9, 1845, in Mont-Saint-Grégoire, Quebec, Canada, the eighth of twelve children in a desperately poor family. His father was a carpenter who died when Alfred was nine; his mother died two years later. Alfred was raised by various relatives, too sickly and weak to attend school regularly. He worked odd jobs — farmhand, shoemaker, blacksmith, baker, tinsmith — never strong enough to hold any for long. His stomach was chronically ill; he could barely digest food. He seemed destined for obscurity. His entire childhood was marked by poverty, orphanhood, illness, and failure.</p>

<h3>Rejected, Then Admitted</h3>
<p>At twenty-five, Alfred applied to join the Congregation of Holy Cross at Notre-Dame College in Montreal. After a year as a postulant he was rejected — too frail, too uneducated, unable to contribute. He appealed to Bishop Bourget of Montreal, who returned his application with a note: "I am sending you a saint." The congregation reconsidered and admitted him in 1870. He was assigned to be the doorkeeper at Collège Notre-Dame — answering the door, running errands, carrying messages, cutting hair. He was almost entirely illiterate. He held this position for forty years.</p>

<h3>The Doorkeeper and His Chapel</h3>
<p>From his door, Brother André developed an intense devotion to Saint Joseph, pressing a medal of the saint into the hands of the sick who came to him. People began to be healed. Within a few years, hundreds were coming to the door of Collège Notre-Dame seeking the little brother who prayed over them. The ecclesiastical authorities were suspicious; doctors investigated and found no natural explanation for many of the healings. Brother André's constant explanation: "It is Saint Joseph who cures. I am only his little dog." He raised funds — a nickel at a time — to build a chapel to Saint Joseph on Mount Royal. The chapel, opened in 1904, grew into the Oratory of Saint Joseph, which by the time of his death in 1937 was one of the largest churches in the world.</p>

<h3>Death and Canonization</h3>
<p>Brother André died on January 6, 1937, at the age of 91 — the most visited and beloved figure in Quebec, drawing a million pilgrims a year to his oratory. One million people attended his funeral. His heart was preserved as a relic and is still venerated at the Oratory of Saint Joseph on Mount Royal. He was beatified by Pope John Paul II in 1982 and canonized by Pope Benedict XVI in 2010. He is the patron saint of Canada.</p>`,
    reflection: "André Bessette was, by all worldly measures, a failure — sickly, illiterate, rejected, limited to the most menial work. And through him, God healed thousands. The oratory he built by collecting nickels at the door is one of the great pilgrimage sites of North America. His life is the Gospel parable of the mustard seed enacted in one human being: the smallest, most insignificant thing God could find, from which something enormous and good and alive grew up. He pointed always away from himself: to Saint Joseph, to the Christ whom Joseph served.",
    prayerToSaint: "O Saint André Bessette, doorkeeper and miracle-worker of Montreal, you were the smallest and weakest of all, and God chose you to heal thousands. Help us to see our weakness not as an obstacle to God's work but as the very condition He requires. Intercede for all who are sick, all who feel too small and too broken to be used, and for all who love Saint Joseph, the patron of workers and of hidden holiness. Amen.",
  },

  {
    name: "Saint Raymond of Penyafort",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Clement VIII (1601)",
    quote: "If we truly love God, we must also love our neighbor, for God is love, and love cannot remain inactive.",
    fullBio: `<h3>Canon Lawyer and Papal Confessor</h3>
<p>Raymond of Penyafort was born around 1175 near Barcelona, Catalonia, into a noble family related to the kings of Aragon. He was a prodigy: teaching philosophy in Barcelona at twenty, studying canon law at Bologna (the great center of medieval legal studies) and earning his doctorate, then teaching there himself. He was deeply devout throughout his academic life. At forty-one, in 1216, he entered the Order of Preachers (Dominicans) in Barcelona, making him one of the earliest Dominicans. Pope Gregory IX summoned him to Rome as his confessor and penitentiary, entrusting him with writing the definitive collection of papal decretals — the <em>Decretales Gregorii IX</em>, also known as the <em>Liber Extra</em> — which served as the foundational legal code of the Church until 1917 and formed the backbone of Canon Law for seven centuries.</p>

<h3>Master General and the Summa</h3>
<p>Raymond wrote the <em>Summa de Poenitentia</em>, a guide for confessors that became the standard manual of moral theology for generations of priests. He also wrote a <em>Summa de Matrimonio</em>. In 1238, he was elected Master General of the Dominican Order and revised the Dominican constitutions — though he resigned after only two years, feeling unworthy of leadership. It is said he encouraged Thomas Aquinas, during a sea voyage, to write the <em>Summa contra Gentiles</em> as a tool for missionary work among Muslims and Jews — a direct encouragement that may have contributed to one of the greatest theological works in history.</p>

<h3>Mission and Miracles</h3>
<p>Raymond's great passion was the conversion of the Moors in Spain and of Jews in Aragon, and he promoted the learning of Arabic and Hebrew for this purpose — partly inspiring the school of Oriental languages in Barcelona. He was legendary for his gentleness in the confessional and his compassion for sinners. A famous legend (probably legendary) holds that when the King of Aragon refused to let him leave the island of Majorca, Raymond spread his cloak on the sea, stepped onto it, and sailed home to Barcelona — the king reportedly converting to better behavior as a result. Raymond died at age one hundred (c. 1275), the most eminent canon lawyer of the medieval Church.</p>`,
    reflection: "Raymond of Penyafort was a man of law — but a man of law in service of mercy. His legal codes organized the Church's pastoral care; his penitential manual made the confessional more effective; his missionary work sought to bring God's love to those outside the Church. He understood that Canon Law was not an end in itself but a structure for pastoral action. His long life — a century of service — suggests that God sometimes gives the most faithful servants the most time.",
    prayerToSaint: "O Saint Raymond of Penyafort, master of law and servant of mercy, you organized the Church's legal life so that justice and charity could flourish. Intercede for all canon lawyers, confessors, and penitentiaries, and for all missionaries who work among those of other faiths. Help us to understand that every structure in the Church exists for the salvation of souls, and that the law of God is always law in service of love. Amen.",
  },

  {
    name: "Saint Hilary of Poitiers",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Heresy is unbelief that has misunderstood the holy scriptures. It is not an error of scripture but an error of reading.",
    fullBio: `<h3>Pagan Scholar to Catholic Bishop</h3>
<p>Hilary was born around 315 AD in Poitiers, Gaul (modern France), into a wealthy pagan family. He received an excellent education in Latin rhetoric and philosophy. As a young man he began studying religion systematically, and the prologue of his great work <em>De Trinitate</em> describes his intellectual journey: beginning with philosophical monotheism, then discovering the Hebrew Scriptures, and finally encountering the Gospel of John — the opening "In the beginning was the Word" — which completed his conversion. He and his wife (he was married before his conversion) and daughter became Christians. He was chosen Bishop of Poitiers around 353 — against his inclination — and devoted his episcopate to defending Nicene orthodoxy.</p>

<h3>Exile in the East</h3>
<p>The Emperor Constantius II, an Arian, exiled Hilary to Phrygia in Asia Minor in 356 — ironically, this proved a blessing. In the East, Hilary encountered the full range of Eastern theology and deepened his understanding of the Trinitarian controversy. He wrote his masterwork, <em>De Trinitate</em> (twelve books), and the <em>De Synodis</em>, which sought to find common ground between Eastern and Western formulations while defending the Nicene faith. His learning and balance impressed Eastern bishops. In 360 the Arians, finding him more trouble as an exile than as a bishop, asked the Emperor to send him home. Hilary returned to Gaul and continued his anti-Arian campaign, earning the title "the Athanasius of the West" for his tenacity.</p>

<h3>Poet and Doctor</h3>
<p>Hilary was also a hymnographer — the first known Latin Christian hymnographer — composing hymns to teach the faith to ordinary Christians, a technique that Arius himself had used for his heresy. His hymns did not survive in liturgical use, but the technique he pioneered was taken up by Ambrose of Milan with enormous success. Jerome called him "the Rhône of Latin eloquence." He died around 368. Pope Pius IX declared him a Doctor of the Church in 1851. His feast on January 13 gives its name to the "Hilary term" in British and Irish law courts and universities — reflecting the medieval calendar custom of resuming work after Christmas on his feast.</p>`,
    reflection: "Hilary came to faith through reason and Scripture — an intellectual convert who then spent his life defending what he had found. His exile to Asia Minor, intended as a punishment, became the education that made him the greatest Latin theologian of his generation. He is a patron for converts who have made the journey from unbelief through reason to faith, and for all who try to explain the mystery of the Trinity with precision and depth. His famous insistence that heresy is not scripture's fault but the reader's is a salutary reminder that the tradition guards the text from misreading.",
    prayerToSaint: "O Saint Hilary of Poitiers, bishop and doctor, you came to faith through the love of wisdom and defended it at the cost of exile. Intercede for all who seek God through reason and intellect, for all converts who have left behind the world of their upbringing, and for all who must suffer for orthodox faith. Help us to love the truth as you loved it — with the whole mind, the whole heart, and the willingness to pay whatever price truth requires. Amen.",
  },

  {
    name: "Saint Anthony of the Desert",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "I saw the snares that the enemy spreads out over the world. Sighing, I said, 'What can pass through such snares?' Then I heard a voice saying to me, 'Humility.'",
    fullBio: `<h3>Father of Christian Monasticism</h3>
<p>Anthony was born around 251 AD in Coma, near Herakleopolis Magna in Egypt, to a wealthy Christian family. When he was about twenty, he heard the Gospel passage "If you wish to be perfect, go, sell your possessions, and give the money to the poor" — and understood it as addressed directly to him. He gave away his land (about 300 acres of fertile Egyptian soil), left his sister in the care of a community of virgins, and began a life of radical ascetic practice. He first apprenticed himself to an older ascetic near his village, learning the basic disciplines, then in about 285 he crossed the Nile and established himself in a ruined fort at Pispir — the first of his great retreats into deeper and deeper solitude.</p>

<h3>The Spiritual Battle</h3>
<p>Anthony's life in the desert became legendary for his battles with demons — battles described in vivid detail by his biographer Athanasius in the <em>Life of Anthony</em>, the most influential biography in Christian history. Demons appeared to him as wild beasts, as terrifying visions, as angels of light. Anthony endured them, fought them, prayed through them, and emerged strengthened. Athanasius presents these battles as the desert equivalent of martyrdom: the monk who faces the powers of darkness unarmed except by prayer and fasting participates in the combat of Christ. Thousands of readers were inspired by the <em>Life of Anthony</em> — Augustine read it in Milan just before his conversion, and the two Milanese courtiers he mentions who read it "on the spot" abandoned their careers to become monks.</p>

<h3>Father of Monks</h3>
<p>Anthony's deeper retreat to the "inner mountain" (near the Red Sea, modern Deir Mar Antonios) did not mean isolation from others. Disciples flocked to him and settled near his hermitage, forming a loose federation of solitaries — the prototype of the monastic laura. Anthony counseled them, visited them, and preached to them. He emerged twice from solitude to encourage the Christians of Alexandria during the Diocletianic persecution (303-311) and to fight against Arianism alongside Athanasius (c. 338). He died around 356, aged approximately 105 — still vigorous in spirit, having lived the last twenty years of his life in almost total solitude. His body was buried secretly, as he requested; Athanasius wrote his <em>Life</em> shortly after.</p>`,
    reflection: "Anthony's life challenges the assumption that service to others requires constant activity. He was most useful to the Church when most withdrawn from it — his holiness was a kind of gravitational field that drew others toward God. The desert is not an escape from the world; it is the place where the world's illusions are stripped away and reality — including the reality of spiritual battle — becomes visible. Every Christian life has its desert moments: the retreats, the silences, the dark nights. Anthony is the patron of those who dare to go further in.",
    prayerToSaint: "O Saint Anthony of the Desert, father of monks and champion in spiritual battle, you left everything for God and found in the desert the fullness of life. Intercede for all who are called to a deeper solitude — monks, hermits, and all who feel drawn to more radical prayer. Help us to face the demons of our own lives — temptation, distraction, pride, despair — with the same humble, patient courage with which you faced them in the Egyptian desert. Amen.",
  },

  {
    name: "Saint Fabian",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "A dove descended from above and settled on my head — and so I knew that God had chosen me.",
    fullBio: `<h3>The Pope Chosen by a Dove</h3>
<p>Fabian became Pope in 236 AD under remarkable circumstances, according to Eusebius of Caesarea. He was a layman — not a cleric — who had come to Rome from the country. When the assembly of clergy and people gathered to elect a new bishop of Rome, a dove suddenly descended and alighted on Fabian's head, recalling the descent of the Holy Spirit on Christ at his baptism. The clergy and people, interpreting this as divine election, unanimously chose him despite his lack of ecclesiastical credentials. He proved a capable and energetic bishop.</p>

<h3>Administrative Reformer</h3>
<p>Fabian served as Pope for fourteen years, from 236 to 250 AD, one of the longer pontificates of the early Church. He divided Rome into seven ecclesiastical districts, each supervised by a deacon and subdeacon — an organizational reform that became the foundation of the Roman parish system. He sent seven missionaries (including Dionysius, later Bishop of Paris) to Gaul to evangelize France. He corresponded with Origen on doctrinal matters, initially defending him and later distancing himself. He rebuilt the catacombs and had the bodies of several earlier martyred popes translated there with honor. He was also involved in the controversy over Novatian and the readmission of the lapsed — those who had apostatized under pressure.</p>

<h3>Martyrdom</h3>
<p>Fabian was the first victim of the Decian persecution (250 AD) — Emperor Decius specifically targeted the Bishop of Rome as a way of decapitating the Church. Fabian was arrested immediately when the persecution began and died in prison, probably in January 250. Cyprian of Carthage, writing to the Roman clergy after Fabian's death, said that his virtue was "incomparable" and that he had died "in a manner befitting his pure and righteous administration." He is buried in the catacomb of San Callisto; his original epitaph, discovered in modern times, still reads simply "Fabianos Ep. Mr." — "Fabian, Bishop, Martyr."</p>`,
    reflection: "Fabian was chosen by a sign: a dove settling on an ordinary man's head. He accepted the strange election, stepped into the role, and served with such distinction that Cyprian called his administration incomparable. Then when the storm came, he was the first to die — precisely because he was the bishop of Rome, because he had not hidden. He is a patron of those who are chosen for unexpected roles and who, when the price comes due, pay it without flinching.",
    prayerToSaint: "O Saint Fabian, pope and martyr, chosen by a sign of the Spirit and confirmed in the fires of persecution, intercede for the Church you led and loved. Pray for the Bishop of Rome and all bishops who bear the weight of Christ's flock. Help us to accept the role God gives us, however unexpected, and to fulfill it as you did — faithfully, boldly, to the end. Amen.",
  },

  {
    name: "Saint Sebastian",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Do not fear those who kill the body but cannot kill the soul.",
    fullBio: `<h3>The Soldier-Martyr</h3>
<p>Sebastian was born, according to tradition, around 256 AD, possibly in Narbonne, Gaul, or Milan, and was a soldier who rose to the rank of captain of the Praetorian Guard under the Emperor Diocletian. His military service in Rome gave him access to prisoners and to the court itself. According to the detailed but largely legendary <em>Passion of Sebastian</em> (written long after his death), Sebastian used his position to visit Christians in prison, encourage them to hold firm, and convert numerous pagans and officials — including the twin brothers Mark and Marcellian. He kept his own Christianity secret for a time to enable this work.</p>

<h3>Discovery and Martyrdom</h3>
<p>When Sebastian's faith was discovered, Diocletian condemned him to be shot to death by archers. He was bound to a post and used as a target; the archers left him pierced by arrows and apparently dead. But the widow Irene, who came to retrieve his body, found him still alive and nursed him back to health. Rather than flee, Sebastian appeared before Diocletian on the steps of the palace and rebuked him for his persecution of Christians. Astonished that he was still alive, Diocletian had him beaten to death with clubs and his body thrown into the Cloaca Maxima (the great sewer of Rome). A Christian woman named Lucina was told in a vision where his body was and retrieved it for burial at the catacombs on the Appian Way — the Catacomb of San Sebastiano.</p>

<h3>Plague, Pestilence, and Art</h3>
<p>Sebastian became the patron of plague victims in the medieval period, possibly because arrows (his instrument of martyrdom) were associated with divine punishment — as in Homer and the Hebrew Bible. The arrows also made him one of the most painted saints in Western art: the image of the beautiful young man pierced by arrows, bound and upright, became an iconic image of Christian suffering in Renaissance painting. He is patron of athletes (for his physique and endurance), soldiers, and archers, as well as of several cities and dioceses.</p>`,
    reflection: "Sebastian survived the arrows only to walk back and confront the emperor face to face. Rescue was not the goal — faithfulness was. He had been given more life; he used it to bear witness again, at the cost of that life. This second martyrdom, more quiet than the first, is perhaps the braver one: it is easier to be heroic in a dramatic moment than to return deliberately to danger when you have already been given an unexpected escape. Sebastian's life says: there is no exit from fidelity.",
    prayerToSaint: "O Saint Sebastian, soldier, athlete, and twice-martyred witness of Christ, you spent your life in secret service to Christians in prison and then returned, healed, to testify before the power that had condemned you. Intercede for all soldiers, all athletes, all who work in hidden service to the Church. Give us the courage to face the persecutors of our day with the same unbreakable serenity that you showed before Diocletian. Amen.",
  },

  {
    name: "Saint Agnes",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Christ is my spouse; He chose me first, and His I will be.",
    fullBio: `<h3>The Most Beloved Virgin Martyr</h3>
<p>Agnes was a Roman girl martyred around 304 AD during the Diocletianic persecution, probably at the age of twelve or thirteen. She is one of seven women (with Felicity, Perpetua, Agatha, Lucy, Cecilia, and Anastasia) commemorated by name in the Roman Canon — the most ancient Eucharistic Prayer — a honor given only to those whose veneration was universal and ancient. Her name comes from the Latin <em>agnus</em>, lamb, and she is almost always depicted holding a lamb. She was buried on the Via Nomentana outside Rome; her basilica there, Sant'Agnese fuori le Mura, was one of the first great basilicas built by Constantine.</p>

<h3>The Account of Her Martyrdom</h3>
<p>The accounts of Agnes's martyrdom, though written later and containing legendary elements, preserve an early core. She was a beautiful and devout Christian girl of a noble Roman family. When the son of a Roman prefect sought her hand and she refused, declaring herself consecrated to Christ, he denounced her as a Christian. The judge alternately threatened and cajoled her. When she refused to sacrifice to the gods, she was sent to a brothel — a common punishment for Christian women. Accounts vary on what followed, but the tradition holds she was protected from violation by divine intervention, and was then beheaded. Ambrose of Milan wrote of her: "She was too young to die, but too old in virtue."</p>

<h3>Lambs and the Feast</h3>
<p>On her feast day — January 21 — two lambs are blessed at Sant'Agnese in Rome and presented to the Pope. Their wool is later woven into the pallia — the white woolen vestments worn by the Pope and metropolitans as a sign of pastoral authority. This ancient custom connects the lamb of Agnes to the Lamb of God and the lambs of the Good Shepherd, weaving her martyrdom into the structure of the Church's worship. Agnes is patron of girls, chastity, victims of sexual violence, and engaged couples.</p>`,
    reflection: "Agnes was thirteen years old. She refused a powerful man's desire, refused the threats of a judge, refused the worst the world could do to her — and died. She is one of the pillars of the Canon, one of the women whose names are spoken every day in the Eucharistic Prayer. The Church has never forgotten her. Her witness is not an abstract ideal of purity; it is the concrete claim that the body belongs to God, that a young girl's 'no' has infinite dignity, and that what the powerful cannot take from you is your fidelity.",
    prayerToSaint: "O Saint Agnes, virgin and martyr of Rome, you were too young to die but too old in virtue to live in compromise. Intercede for all young women who face the pressure of the world's demands on their bodies and their fidelity. Help all who suffer from sexual violence to know that their dignity is inviolable and that God has not forgotten them. And give to all of us the courage to say, when the world demands what belongs to God: Christ is my spouse, and His I will be. Amen.",
  },

  {
    name: "Saints Timothy and Titus",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Let no one despise your youth, but set the believers an example in speech and conduct, in love, in faith, in purity.",
    fullBio: `<h3>Paul's Closest Companions</h3>
<p>Timothy and Titus are the only two people to whom Paul addressed entire surviving letters — letters of pastoral instruction that became part of the New Testament canon, alongside a letter to Philemon. Together with 1 and 2 Timothy and Titus (the "Pastoral Epistles"), these letters preserve Paul's most direct teaching on Church order, episcopal ministry, and pastoral responsibility. Both men were among Paul's most trusted emissaries and representatives, sent into the most difficult situations on his behalf.</p>

<h3>Timothy</h3>
<p>Timothy was born in Lystra (in modern Turkey) to a Greek father and a Jewish mother named Eunice; his grandmother Lois is also mentioned by Paul as a woman of faith. He became a disciple of Paul on the second missionary journey (Acts 16) and was circumcised by Paul as a pastoral concession, since he would be ministering to Jewish communities. He accompanied Paul on much of his missionary work, was left in Thessalonica to strengthen the community there (1 Thess 3:2), and was later sent to Corinth to represent Paul (1 Cor 4:17). Paul's two letters to Timothy were written late in his life, with moving personal warmth — "my true child in the faith," "my beloved child." Timothy was bishop of Ephesus, according to tradition. Eusebius reports he was martyred under the Emperor Nerva around 97 AD.</p>

<h3>Titus</h3>
<p>Titus was a Gentile Greek who served as a living argument for Paul's gospel of salvation apart from the Law — Paul refused to have him circumcised even under pressure from "false brothers" in Jerusalem (Gal 2:3). Titus carried the difficult "letter of tears" to the Corinthians (2 Cor 2:4, 7:6-8) and negotiated the collection for Jerusalem. He was left as bishop in Crete to organize the churches there (Titus 1:5). Paul's letter to Titus is a concise manual of pastoral oversight. Tradition associates Titus with Crete, where the cathedral of Heraklion is dedicated to him, and some traditions say he died peacefully in old age on the island. Both Timothy and Titus represent the generation of "apostolic men" — disciples who carried the Pauline churches forward.</p>`,
    reflection: "Timothy and Titus were young men entrusted with enormous responsibilities by the greatest missionary in Christian history. Paul wrote to Timothy: 'Let no one despise your youth.' This is the perpetual challenge of young ministers and leaders in the Church — to lead with authority not derived from age but from genuine faith, genuine love, genuine holiness of life. Their feast reminds us that the Church is always in the process of raising up new pastors, and that the crucial thing Paul passed on was not merely organization but the fire of the Gospel itself.",
    prayerToSaint: "O Saints Timothy and Titus, faithful companions of the Apostle Paul, you bore the weight of young leadership in the first Christian communities and carried Paul's ministry forward when he could not go himself. Intercede for all young priests and bishops, for all who feel too young or too inexperienced for the tasks they have been given. Help them to set the example Paul commanded: in speech and conduct, in love, in faith, in purity — and to trust that the grace of ordination is sufficient for the call. Amen.",
  },

  {
    name: "Saint Angela Merici",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius VII (1807)",
    quote: "Disorder in society is the result of disorder in the family.",
    fullBio: `<h3>The Third Order Visionary</h3>
<p>Angela Merici was born on March 21, 1474, in Desenzano del Garda, on the shore of Lake Garda in northern Italy. She lost both her parents early and was raised by a wealthy uncle in Salò, where her elder sister — her closest companion — died suddenly and without apparent last rites. This death caused Angela deep anguish, which was relieved by a vision of her sister surrounded by angels in heavenly glory. She had joined the Franciscan Third Order and from her youth devoted herself to prayer, penance, and care for the poor children of the region.</p>

<h3>A New Kind of Religious Life</h3>
<p>Angela became convinced that the greatest spiritual need of her time was the education and formation of girls and women — and that existing religious structures were inadequate to address it. In 1516 she was invited to Brescia, where she established herself and gathered around her a company of women dedicated to educating poor girls and to their own ongoing formation in Christian virtue. In 1535, she formally founded the Company of Saint Ursula — the Ursulines — the first women's teaching religious order in the Church's history. The radical innovation was that her women were not cloistered. They lived in the world, in their own homes, working in families and parishes, teaching children, and governing themselves through elected leaders. Angela resisted pressure to cloister them, insisting that their work in the world required them to be in the world.</p>

<h3>Legacy</h3>
<p>Angela died on January 27, 1540, in Brescia. After her death the Ursulines were eventually organized under a common rule and life, though cloistered versions also developed. The Ursulines became one of the great teaching orders of the Counter-Reformation, founding schools across Europe and the Americas — including the first school for girls in New France (Quebec, 1639). Angela's vision that educated women would be the foundation of family and social renewal proved prophetic. She was beatified in 1768 and canonized in 1807.</p>`,
    reflection: "Angela Merici saw the problem clearly: if the family was disordered, society would be disordered. And the family was disordered, in large part, because women had no formation in the faith. Her solution was radical: instead of building another cloister, build a school. Instead of removing women from the world to protect them, form them in the world to transform it. Her insight that Christian renewal requires the education of women — not just men, not just clergy — was five centuries ahead of any official Church policy.",
    prayerToSaint: "O Saint Angela Merici, foundress of the Ursulines and champion of women's education, you saw that a world formed in faith requires women formed in faith. Intercede for all teachers of children, especially those who teach the poor. Help us to see, as you did, that the transformation of society begins in the home, and that the home is only as holy as the formation of those within it. Give us the courage to be present to the world as you were — not protected from it, but sent into it. Amen.",
  },

  {
    name: "Saint Blase",
    feastType: "Optional Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Have courage. Your faith has saved you from this sickness of the soul. And God, who rewards faith, will also deliver you from sickness of the body.",
    fullBio: `<h3>Bishop and Healer</h3>
<p>Blaise (or Blase) was bishop of Sebaste in Armenia (modern Turkey) during the early fourth century — a physician before his ordination, a bishop of holiness and pastoral care. Almost nothing is reliably known of his life beyond the tradition that he was martyred under Licinius, the co-emperor who persecuted Christians in the East, around 316 AD. His cult became immensely popular in the medieval Church in both East and West, and he is one of the Fourteen Holy Helpers — saints invoked for particular needs — whose veneration was central to medieval popular piety.</p>

<h3>The Healing of the Boy</h3>
<p>The most famous legend associated with Blaise concerns a boy brought to him who was choking on a fishbone, near death. Blaise prayed over him and the boy was healed — a miracle that gave rise to the blessing of throats on his feast day (February 3). The priest crosses two candles at the throat and says: "May God at the intercession of Saint Blaise preserve you from all ailments of the throat and from every other evil." This blessing remains one of the most widely observed popular sacramentals in Catholic parishes. In some countries, February 3 brings people to church in greater numbers than any day except Christmas and Easter.</p>

<h3>Martyrdom and Patronage</h3>
<p>According to legend, Blaise was captured while living as a hermit in the mountains and brought before the governor. On the way, he reportedly healed the choking boy. He was tortured with iron wool combs — devices used to comb wool into thread — and then beheaded. This gives him patronage not only of throat ailments but of wool combers and those who work with wool. His relics were brought from the East to the West, with several places (including Dubrovnik and Maratea) claiming them. He is the patron of Dubrovnik and was the patron of many medieval cities and guilds. His cult in England before the Reformation was enormous.</p>`,
    reflection: "The blessing of throats — two candles crossed at the neck, a prayer for healing — has drawn generations to Saint Blaise's feast. There is something touching about a saint known primarily through a gesture: the concrete, physical act of invoking God's protection over the most vulnerable and expressive part of the human body. The Church's body, like the human body, is marked by these small rituals of protection — and through them, the invisible becomes visible, and ancient faith touches contemporary life.",
    prayerToSaint: "O Saint Blaise, bishop and martyr, patron of those who suffer in their throats and all who work with their hands, intercede for all who are sick and in pain. By your blessing, may all ailments of the body and soul be healed. Help all bishops to be shepherds as you were — healers, not merely administrators — and help all of us to see in every physical blessing an image of the deeper healing God desires for us. Amen.",
  },

  {
    name: "Saint Josephine Bakhita",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope John Paul II (2000)",
    quote: "Be good, love the Lord, pray for those who do not know Him. What a great grace it is to know God!",
    fullBio: `<h3>From Slavery to Saint</h3>
<p>Josephine Bakhita was born around 1869 in Olgossa, in the Darfur region of Sudan. At about nine years old, she was kidnapped by Arab slave traders. The trauma of the kidnapping was so severe that she forgot her original name — the name "Bakhita" (Arabic for "lucky") was given to her by her captors with bitter irony. Over the next several years she was bought and sold multiple times, subjected to cruelty and abuse, tattooed with a razor (sixty marks cut on her chest and filled with salt), forced to work under brutal conditions. She experienced, in her own body, the reality of the slave trade.</p>

<h3>The Canossian Sisters</h3>
<p>In 1883 she was purchased by the Italian consul Callisto Legnani, who treated her with kindness. When Legnani returned to Italy in 1885, he took Bakhita with him. She was placed in the care of the Canossian Daughters of Charity in Venice to look after the daughter of another Italian family. In the convent, encountering the Eucharist and Christian prayer, she recognized the God she had unknowingly sought throughout her years of slavery. She was baptized, confirmed, and received First Communion on January 9, 1890, taking the name Josephine Margaret. She later said: "If I were to meet the slave raiders who kidnapped and tortured me, I would kneel and kiss their hands. Because if that had not happened, I would not be a Christian and a religious today."</p>

<h3>Religious and Mystic</h3>
<p>Josephine entered the Canossian order and made her perpetual vows in 1896. She lived the rest of her life at the convent of Schio in the Veneto, serving as a sacristan, cook, and doorkeeper. She was deeply beloved by the local community for her warmth, her gentle humor, and her radiant joy. When asked what she would say to her former kidnappers and torturers, she answered with forgiveness. She spent her final years suffering from the long-term effects of her abuse. She died on February 8, 1947. She was beatified in 1992 and canonized on October 1, 2000.</p>`,
    reflection: "Josephine Bakhita was, by any earthly measure, one of the most wronged people in the Church's calendar of saints — a kidnapped child, a slave, a victim of systematic torture. And what she said, looking back, was: 'What a great grace it is to know God.' She forgave her torturers not because what they did was excusable but because she had found something larger than the wrong they did her. Her life is an unbearable argument for the existence of God: what else could explain a heart like that?",
    prayerToSaint: "O Saint Josephine Bakhita, daughter of Sudan and daughter of God, you passed through the fires of slavery and torture and emerged with a heart on fire with love. Intercede for all victims of trafficking and slavery, for all who have been abused and exploited, and for all in Sudan and across Africa who still suffer from poverty and violence. Help us to know God with the wonder you felt — and help us, in knowing Him, to love our neighbor as you loved even those who wronged you most deeply. Amen.",
  },

  {
    name: "Saints Cyril and Methodius",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (Cyril); Beatified/venerated from antiquity (Methodius)",
    quote: "We have found the alphabet of your tongue, our people. Receive this gift, greater than silver or gold.",
    fullBio: `<h3>Brothers from Thessalonica</h3>
<p>Cyril (born Constantine, c. 826) and Methodius (born c. 815) were brothers from Thessalonica — then a city where Greek and Slavic cultures met, giving them natural bilingualism. Both were highly educated. Cyril was a philosopher (he was known in his lifetime as "Constantine the Philosopher") who served as librarian at the Hagia Sophia in Constantinople and as imperial envoy to the Khazars. Methodius was an administrator who later became a monk. Together they represent the most successful missionary enterprise in the history of eastern Christianity.</p>

<h3>The Glagolitic Alphabet</h3>
<p>In 863, the Prince of Moravia (modern Czech Republic) asked the Byzantine Emperor for missionaries who could teach the faith in Slavic — the people's own language — rather than in Greek or Latin. Emperor Michael III sent Cyril and Methodius. Before departing, Cyril devised the first alphabet for the Slavic language — the Glagolitic script — and translated the liturgy and Scriptures into what is now called Old Church Slavonic. This was revolutionary: Western missionaries generally conducted liturgy in Latin, regardless of the local language. Cyril and Methodius believed the Gospel should be heard in the mother tongue. The Cyrillic alphabet (named after Cyril but probably developed by his disciples) is a later refinement of their work and remains in use today in Russia, Bulgaria, Serbia, Ukraine, and numerous other Slavic nations.</p>

<h3>Rome and Legacy</h3>
<p>Their use of Slavonic liturgy was controversial; Latin-rite clergy in Germany accused them of heresy for not using Latin. Cyril and Methodius went to Rome to defend their mission. Pope Adrian II supported them and approved the Slavonic liturgy. Cyril died in Rome on February 14, 869, having become a monk shortly before his death. Methodius continued the mission in Moravia under constant harassment from the German clergy, was imprisoned for more than two years by the Archbishop of Salzburg, was eventually vindicated by Pope John VIII, and died in Moravia in 885. Their disciples, expelled from Moravia, carried the Slavonic liturgy to Bulgaria and eventually to Russia and the broader Slavic world. Cyril and Methodius are co-patrons of Europe, declared so by Pope John Paul II in 1980.</p>`,
    reflection: "Cyril and Methodius invented an alphabet so that the Gospel could be heard in a language people actually spoke. In an age when Latin was considered uniquely sacred, they insisted that God speaks every tongue — that the Holy Spirit at Pentecost gave the gift of languages precisely so that every nation might hear in its own speech the mighty works of God. Their mission is the foundation of Slavic Christian civilization. Every Orthodox or Catholic Slavic Christian owes to these two brothers the alphabet in which their faith was first written.",
    prayerToSaint: "O Saints Cyril and Methodius, apostles of the Slavs and co-patrons of Europe, you invented an alphabet and translated the Gospel so that a whole people might pray in their mother tongue. Intercede for all missionaries and translators of the Scriptures, for the unity of Eastern and Western Christianity, and for all the peoples of Slavic heritage. Help us to carry the Gospel into every culture and language with the same respect and ingenuity you brought to the peoples of Moravia. Amen.",
  },

  {
    name: "Saint Peter Damian",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Leo XII (1828)",
    quote: "The Church of Christ is a single province, not divided by distances. She transcends all boundaries of time and place.",
    fullBio: `<h3>From Poverty to Reform</h3>
<p>Peter Damian was born in 1007 in Ravenna, Italy, the youngest of a large and poor family. His parents died when he was young and he was initially mistreated by an older brother who made him work as a swineherd. Another brother, a priest named Damian (whose name Peter took), took him in and educated him. Peter was brilliant; he became a professor of grammar, rhetoric, and dialectic in Ravenna while still young, then abandoned his academic career for the life of a hermit at Fonte Avellana in Umbria, one of the austere Camaldolese communities.</p>

<h3>Reformer and Cardinal</h3>
<p>From his hermitage Peter became the leading voice of ecclesiastical reform in the eleventh century. His treatise <em>Liber Gomorrhianus</em> (1049) addressed clerical sexual sin with unprecedented bluntness. His <em>Liber Gratissimus</em> dealt with simony (the buying and selling of church offices). He argued for papal supremacy as the basis of reform — only a strong papacy could clean up the corruption of local churches and secular interference in appointments. He became a close ally of Pope Leo IX and subsequent reforming popes, and was created Cardinal Bishop of Ostia by Stephen IX in 1057, a position he tried to resign multiple times. He is considered a precursor of the Gregorian Reform and a key figure in the history of celibacy legislation. He died in 1072. Dante placed him in Paradise (Canto XXI).</p>`,
    reflection: "Peter Damian refused to let the sacred remain comfortable with corruption. His bluntness — his willingness to name clerical sins explicitly in writing, to confront popes and emperors, to argue from both Scripture and natural law — was not cruelty but love. He believed the Church was the Body of Christ and that what disfigured that Body was an offense against the Head. His reform was theological before it was organizational: the Church must be holy because God is holy.",
    prayerToSaint: "O Saint Peter Damian, cardinal and hermit, reformer of the Church and doctor of humility, you loved the Church too much to let her be comfortable with corruption. Intercede for the reform of clergy and of religious life, for the purity and holiness of all who serve at the altar, and for all who must speak uncomfortable truths to those in authority. Help us to be as unyielding as you were in the defense of holiness, and as rooted in personal penance. Amen.",
  },

  {
    name: "Saint Polycarp",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Eighty-six years have I served Him, and He has never done me wrong. How can I blaspheme my King who saved me?",
    fullBio: `<h3>Disciple of John</h3>
<p>Polycarp was bishop of Smyrna (modern Izmir, Turkey) in the early second century and one of the most important figures in the transition from the apostolic to the post-apostolic Church. He had known John the Apostle personally (or, more precisely, the Elder John of Ephesus, whom Irenaeus identified as "the disciple of the Lord"). Irenaeus of Lyon, who had heard Polycarp as a boy, describes him as "having been taught by the apostles and having been familiar with many who had seen Christ." He was thus a living link between the world of the first apostles and the Church of the mid-second century.</p>

<h3>Letter to the Philippians</h3>
<p>Polycarp's only surviving writing is his letter to the Philippians — a brief, warm, and pastorally direct letter that focuses on the duty of presbyters and deacons, the importance of Scripture, and the need to hold firm to orthodox teaching against docetism (the heresy that Christ did not truly become flesh). He insists on the reality of Christ's incarnation, suffering, and resurrection against the "firstborn of Satan" (his sharp phrase) who deny that Christ came in the flesh. He visited Rome and met Pope Anicetus to discuss the Quartodeciman controversy (the dating of Easter).</p>

<h3>The Martyrdom of Polycarp</h3>
<p>Polycarp was martyred in 155 or 156 AD in Smyrna. The <em>Martyrdom of Polycarp</em> — the earliest surviving account of a Christian martyrdom outside the New Testament — describes how he was led into the stadium, urged by the proconsul to deny Christ and save his life. His response: "Eighty-six years have I served Him, and He has never done me wrong. How can I blaspheme my King who saved me?" He was bound and burned; the tradition adds that the flames did not kill him and he was stabbed. The <em>Martyrdom</em> presents his death as a martyr's sacrifice, explicitly in imitation of Christ, and coins the term "Catholic Church" to describe the universal Church.</p>`,
    reflection: "Polycarp's answer to the proconsul is one of the great utterances of the early Church: eighty-six years of service, and not a single wrong. A life of faith reduced to its simplest form. He had known the Apostle John. He had served the Church for nearly a century. And when the moment came, he refused to deny the one who had never wronged him. His martyrdom is the testimony of old age: that a life given to God over a long time produces not bitterness but this — calm, enormous faithfulness.",
    prayerToSaint: "O Saint Polycarp, bishop and martyr, disciple of the Apostle John and bridge between the age of the apostles and our own, you served eighty-six years and found at the end only gratitude and fidelity. Intercede for all elderly Catholics whose faith has sustained them through a long life, for all bishops who guard the apostolic tradition against novelty and error, and for all who face persecution. Help us to say at the end of our lives what you said at the end of yours: He has never done me wrong. Amen.",
  },

  {
    name: "Saint Katharine Drexel",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope John Paul II (2000)",
    quote: "If you would be holy, be poor; and if you would be perfect, give all to the poor.",
    fullBio: `<h3>Heiress and Saint</h3>
<p>Katharine Drexel was born on November 26, 1858, in Philadelphia, Pennsylvania, into one of the wealthiest families in the United States. Her father Francis Drexel was a banker and co-founder of Drexel University; her stepmother Emma was a woman of great piety who opened the family home for three days a week to distribute food, clothing, and rent money to the poor. The family fortune, at her father's death in 1885, totaled fourteen million dollars (equivalent to several hundred million today). Katharine and her sisters stood to inherit it all — and faced the question of what to do with wealth of that magnitude.</p>

<h3>Meeting the Pope</h3>
<p>In 1887, during a European trip, the Drexel sisters had a private audience with Pope Leo XIII. Katharine asked the Pope to send missionaries to serve Native Americans. The Pope's reply shocked her: "Why not become a missionary yourself?" It was a turning point. After years of prayer and discernment — including a meeting with Bishop O'Connor of Omaha and a period of formation with the Sisters of Mercy — Katharine made her final profession as a religious in 1891 and founded the Sisters of the Blessed Sacrament for Indians and Colored People, the first religious congregation specifically dedicated to service of Native and Black Americans.</p>

<h3>Schools and Xavier University</h3>
<p>Over her lifetime Katharine spent the entirety of her inheritance — approximately twelve million dollars — on the mission. She founded fifty schools for Native Americans across thirteen states, including the still-operating Saint Michael Indian School in Arizona. She established rural schools for Black Americans in the South during the height of the Jim Crow era — some of them bombed or burned by hostile white communities. In 1915, she founded Xavier University of Louisiana in New Orleans — the only historically Black Catholic university in the United States, still operating today. She died on March 3, 1955, having lived to see some of the early fruits of the Civil Rights movement. She was canonized in 2000.</p>`,
    reflection: "Katharine Drexel was asked by the Pope why she didn't become a missionary herself, and she did. She took twelve million dollars and poured it into schools for the people everyone else had forgotten. She lived through Reconstruction, the lynching era, Jim Crow, two world wars, and into the civil rights era — and the whole time she was building schools. Her life is a rebuke to the comfortable: not because she was comfortable and became uncomfortable, but because she was comfortable and decided that discomfort in the service of justice was more worthy of her wealth than security.",
    prayerToSaint: "O Saint Katharine Drexel, heiress and foundress, you gave away a fortune to educate the poorest and most excluded of your country's children. Intercede for all Catholic schools serving minority and poor communities, for all who work for racial justice and equal education, and for the students and staff of Xavier University. Help us to spend what we have — wealth, talent, time, influence — as you did: not for our own comfort but for those whom the world has left behind. Amen.",
  },

];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed11 = mutation({
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
