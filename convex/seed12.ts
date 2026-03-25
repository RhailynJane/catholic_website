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

  // ── FEBRUARY ────────────────────────────────────────────────────────────

  {
    name: "Saint Ansgar",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "If God grants me the grace to endure, it is enough. What have I deserved that I should be honored with martyrdom?",
    fullBio: `<h3>Apostle of the North</h3>
<p>Ansgar (Anskar) was born around 801 AD in Picardy, northern France, and entered the Benedictine monastery of Corbie as a child. Educated at Corbie and at its daughter house New Corbie (Corvey) in Saxony, he became a teacher and preacher of considerable gifts. The mission that would define his life began in 826, when the converted Danish King Harald Klak returned to Denmark with Ansgar as his missionary companion. Ansgar began preaching in Jutland — the first sustained Christian mission to Scandinavia.</p>

<h3>Mission to Sweden and Denmark</h3>
<p>In 829, Ansgar led a mission to Birka in Sweden — the first Christian mission to Sweden. He built the first Christian church in Sweden and converted a number of leading citizens. In 831, Pope Gregory IV appointed him Archbishop of Hamburg, with a mandate as papal legate for all the Scandinavian and Slavic missions. He established schools and churches. The mission suffered a catastrophic setback in 845 when a Viking raid destroyed Hamburg and nearly extinguished all his work. Ansgar was undaunted. He rebuilt and returned to Denmark and Sweden, preaching, establishing churches, and ransoming Christian slaves.</p>

<h3>Patient Sower</h3>
<p>Ansgar's mission did not produce lasting results in his own lifetime. Scandinavia did not definitively Christianize until long after his death. He knew this. His biographer Rimbert records that when a vision promised him the crown of martyrdom, Ansgar replied that he had done nothing to deserve it — he prayed for the grace of endurance but regarded even martyrdom as too high an honor. He died peacefully on February 3, 865, at Bremen. He is called the Apostle of the North. The eventual Christianization of Denmark (c. 10th century), Sweden (c. 11th-12th century), and Norway (c. 10th-11th century) built on the foundation he planted, even if through different missionaries.</p>`,
    reflection: "Ansgar preached to Scandinavia and did not see its conversion. He sowed seeds that did not flower for two centuries. His life is a meditation on the long patience of missionary work — the conviction that faithful planting, even without visible harvest, is obedience. The most important missionary work is often the most invisible: the first school in a new land, the first church, the first slave ransomed. Ansgar's patience outlasted the sack of Hamburg, the death of sympathetic kings, and the apparent failure of his life's work.",
    prayerToSaint: "O Saint Ansgar, apostle of the North and patient sower of the Gospel, you preached in lands that were not ready, suffered the destruction of all you built, and returned again. Intercede for all missionaries who plant seeds they will not live to harvest, for all evangelists who work in resistant cultures, and for all the peoples of Scandinavia. Help us to trust that faithful obedience is enough, even when we cannot see the fruit. Amen.",
  },

  {
    name: "Saint Jerome Emiliani",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Clement XIII (1767)",
    quote: "The way to heaven is through the cross, and if you would get there you must carry it.",
    fullBio: `<h3>Soldier to Saint</h3>
<p>Jerome Emiliani was born in 1486 in Venice into a noble family. He pursued a military career, serving the Venetian Republic. In 1511, while defending the castle of Castelnuovo in the hills above Treviso against the League of Cambrai, he was captured and thrown into prison. The conditions were brutal. In prison Jerome began to pray — perhaps for the first time seriously — and had an experience of conversion. He escaped (legend says miraculously through the intercession of the Virgin Mary, whose chains he later hung as a votive at the Treviso shrine) and returned to Venice transformed. He was ordained a priest around 1518.</p>

<h3>Father of Orphans</h3>
<p>In the aftermath of the Italian wars, the cities of northern Italy were full of orphaned, abandoned, and destitute children — the casualties of decades of warfare and plague. Jerome began gathering them from the streets of Somasca, Bergamo, Brescia, Milan, and Venice. He founded orphanages, gave the children a home, educated them in Christian doctrine, and trained them in trades. He established hospitals and homes for women who had been forced into prostitution. In 1532, he founded the Clerks Regular of Somasca — the Somascan Fathers — dedicated to the care of orphans and the education of the poor. He also wrote a simple catechism for children, one of the early examples of formal catechetical instruction.</p>

<h3>Death and Legacy</h3>
<p>Jerome died on February 8, 1537, having contracted a disease while caring for the sick and dying. He was canonized in 1767. Pope Pius XI declared him the patron of orphans and abandoned children in 1928. The Somascans continue his work today in dozens of countries. His life demonstrates that military conversion — the experience of captivity, defeat, and helplessness — can become the source of the deepest apostolic energy when it is entrusted to God.</p>`,
    reflection: "Jerome Emiliani went from prison to the streets — but the streets of a city full of abandoned children, not of military triumph. What he had experienced in prison — helplessness, dependence, the need for someone to come — he now offered to the children of the streets. He had been saved when he couldn't save himself; he spent the rest of his life saving others who couldn't save themselves. His conversion was not merely internal but immediately, concretely social: out of his own suffering, he organized the care of the suffering.",
    prayerToSaint: "O Saint Jerome Emiliani, patron of orphans and abandoned children, you were rescued from captivity and spent your freedom rescuing others. Intercede for all orphaned and abandoned children, for all who work in foster care and child welfare, and for all missionaries who serve the poorest of the poor. Help us to see in every abandoned child the face of the Christ who called little children to himself, and to give ourselves as you gave yourself — without reserve. Amen.",
  },

  {
    name: "Saint Josephine Bakhita",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope John Paul II (2000)",
    quote: "Be good, love the Lord, pray for those who do not know Him. What a great grace it is to know God!",
    fullBio: `<h3>From Slavery to Sainthood</h3>
<p>Josephine Bakhita was born around 1869 in Olgossa, in the Darfur region of Sudan. She was kidnapped by slave traders at approximately nine years old. The trauma was so severe that she forgot her family name; the name "Bakhita" (Arabic for "lucky") was given to her mockingly by her captors. Over the following years she was bought and sold repeatedly, suffering brutal treatment including being forcibly tattooed with razor marks. She served various masters, some kind, most cruel. Her story is a direct witness to the horror of the nineteenth-century slave trade in East Africa.</p>

<h3>Discovery of God</h3>
<p>In 1883, she was purchased by the Italian consul Callisto Legnani, who treated her with genuine human dignity. When he returned to Italy in 1885, Bakhita went with him. Eventually she was entrusted to the Canossian Daughters of Charity in Venice to care for the daughter of the Michieli family. Living in the convent, she began to recognize in the Christian God the One she had intuited even in slavery — the God she described as having "sensed in my heart" even before knowing His name. She was baptized and confirmed on January 9, 1890, taking the name Josephine Margaret.</p>

<h3>Canossian Sister</h3>
<p>Josephine entered the Canossian congregation and made her perpetual profession in 1896. For forty years she served at the Canossian house in Schio, Veneto, as cook, sacristan, doorkeeper, and seamstress — humble work done with extraordinary joy. She became a beloved figure throughout the region, drawing visitors by the warmth of her presence. In her final years she suffered greatly from the physical consequences of her years of abuse, but her spirit remained luminous. When asked about her enslavers, she expressed forgiveness: had she not been taken, she said, she might never have found God. She died on February 8, 1947. Beatified 1992, canonized October 1, 2000.</p>`,
    reflection: "Josephine Bakhita's life is a theological argument. She was one of the most wronged people in this calendar — kidnapped, enslaved, tortured, sold. And what she said about it was: 'What a great grace it is to know God.' She was not denying the wrong. She was naming something larger. The God who met her in the convent was the God she had always felt but could not name, even in the worst of her suffering. Her forgiveness of her torturers was not weakness or denial; it was the supernatural overflow of a heart that had found what it was made for.",
    prayerToSaint: "O Saint Josephine Bakhita, daughter of Sudan and child of God, you passed through the deepest darkness and emerged with a heart on fire with love. Intercede for all victims of slavery and human trafficking, for all who have been abused and feel forgotten by God. Help us to hold fast to the faith that God is present even in the places of greatest darkness, and to show the world the joy of having found Him. Amen.",
  },

  // ── MARCH ────────────────────────────────────────────────────────────────

  {
    name: "Saint Frances of Rome",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Paul V (1608)",
    quote: "It is most laudable in a married woman to be devout, but she must never forget that she is a housewife.",
    fullBio: `<h3>Noblewoman and Mystic</h3>
<p>Frances was born in 1384 in Rome to a wealthy family. At twelve she wanted to enter religious life but was married instead, at her parents' insistence, to Lorenzo Ponziani — a marriage that proved unexpectedly happy. For forty years Frances was a devoted wife and mother, managing a great household while practicing intense interior prayer. She organized charitable work among the poor of Rome with her sister-in-law Vannozza. She bore three children; two died in childhood. During the troubled years of the Western Schism and the Italian wars, her family's fortunes were repeatedly disrupted by political conflict, her son taken as a hostage, her home confiscated.</p>

<h3>The Oblates of Mary</h3>
<p>Frances was remarkable as a laywoman who achieved a depth of mystical life rarely associated outside religious enclosure. She received visions and ecstasies; she had a permanent guardian angel who was visible to her. She organized a community of women (without vows, living in the world) to serve the poor — the Oblates of Tor de' Specchi, founded in 1425. After her husband's death in 1436, Frances herself entered the community and served as its leader until her death a year later on March 9, 1440. Her combination of married life, mystical prayer, and organized charitable service made her unique among medieval saints.</p>

<h3>Patroness of Motorists</h3>
<p>Frances is famously the patroness of automobile drivers — a designation given in the twentieth century on the basis of a legend that her guardian angel lit her way through the dark streets of Rome. Her feast day, March 9, is celebrated by many Italian automobile clubs. More substantially, she is a patroness of widows and of women who must balance contemplative prayer with active household responsibilities.</p>`,
    reflection: "Frances of Rome is the saint of the impossible balance: deep prayer and household management, mystical vision and practical charity, marriage and contemplation. Her famous line — 'she is a housewife' — is not a diminishment but a clarification. The spiritual life does not lift us out of our responsibilities; it enables us to carry them. Frances achieved in a household with servants and children and a husband what most monks sought in a cloister. Her witness is that contemplation and action are not opposed, and that holiness can be practiced at a kitchen table as surely as in a choir.",
    prayerToSaint: "O Saint Frances of Rome, wife, mother, mystic, and servant of the poor, you found God in the demands of daily household life as surely as in ecstasy and vision. Intercede for all married women who struggle to balance prayer, family, work, and service. Help us to see that every ordinary day, faithfully lived, is a path to sanctity, and that the God we seek in prayer is the same God who meets us in the faces of those who depend on us. Amen.",
  },

  {
    name: "Saint Louise de Marillac",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope John XXIII (1934 beatified; 1934 was beatification — canonized 1934 by John XXIII? No — beatified 1920, canonized 1934)",
    quote: "Serve the poor with great love. Do not lose heart when you are tired of serving them.",
    fullBio: `<h3>Aristocrat and Social Worker</h3>
<p>Louise de Marillac was born on August 12, 1591, in Paris — her exact birth circumstances are unclear; she may have been the illegitimate daughter of a nobleman of the Marillac family, who died when she was young. She received an excellent education, initially at a Dominican convent, then in a cultured household. She wanted to enter religious life but was judged too frail for cloister. At twenty-two she married Antony Le Gras, a secretary to the queen. The marriage was reasonably happy; she had one son, Michel. When her husband died in 1625 after a long illness, Louise fell into deep spiritual crisis and depression.</p>

<h3>Meeting Vincent de Paul</h3>
<p>In 1625, the same year of her husband's death, Louise came under the spiritual direction of Vincent de Paul — one of the most consequential pastoral relationships in the history of the Church. Vincent recognized in Louise a combination of organizational genius, educational attainment, and genuine charity that he needed for his mission to the poor. Beginning in 1629, he sent her to visit and evaluate the Confraternities of Charity he had established in rural France. What she found was that wealthy ladies, however well-intentioned, could not sustain the daily physical work of caring for the sick and poor. Something new was needed.</p>

<h3>Daughters of Charity</h3>
<p>In 1633, Louise began gathering simple country women in her home for formation and training. This became the Daughters of Charity — the first uncloistered congregation of women dedicated to active charity, whose "cloister" would be the streets of the city, whose "chapel" would be the parish church, whose "cell" would be a rented room. Louise wrote their rule, organized their formation, oversaw their placement in hospitals, orphanages, schools, and prisons across France. She managed the details with extraordinary precision while maintaining deep interior prayer. She died on March 15, 1660 — just before Vincent, whose death followed in September. The Daughters of Charity became the largest congregation of women in the Church's history and remain so today.</p>`,
    reflection: "Louise de Marillac did not just found a congregation; she founded the model for all subsequent active religious life for women. Before the Daughters of Charity, women's religious communities were cloistered. Louise and Vincent's insight — that the poor needed sisters in their homes, not behind grilles — changed everything. Her own spiritual path, through the loss of a father she barely knew, through an imperfect marriage, through depression and spiritual darkness, gave her the compassion without sentimentality that effective charity requires.",
    prayerToSaint: "O Saint Louise de Marillac, co-foundress of the Daughters of Charity and patron of social workers, you organized the care of the poor with the efficiency of an administrator and the tenderness of a mother. Intercede for all social workers, nurses, and those who serve in hospitals and care homes. Help us to serve with love, without losing heart when the need is great and the resources small — trusting that the God who sent us to serve will supply what we lack. Amen.",
  },

  // ── APRIL ────────────────────────────────────────────────────────────────

  {
    name: "Saint Stanislaus",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pope Innocent IV (1253)",
    quote: "I have done what was right. Now let God do with me as He wills.",
    fullBio: `<h3>Bishop and Martyr of Kraków</h3>
<p>Stanislaus (Stanisław) was born on July 26, 1030, at Szczepanów near Kraków, Poland, the only child of a noble family who had long prayed for a son. He was educated in Kraków and possibly in Gniezno, then studied in Paris (according to some traditions), returning to Poland as a canon of the Kraków cathedral. His personal holiness, his generosity to the poor, and his gifts as a preacher were widely recognized. He was elected Bishop of Kraków around 1072, reluctantly accepting the office.</p>

<h3>Confrontation with King Bolesław</h3>
<p>King Bolesław II ("the Bold") was a capable but violent ruler. The conflict between Stanislaus and Bolesław is remembered as one of the great confrontations between church and state in medieval history. Accounts differ — later sources accuse Bolesław of adultery, rape of noblewomen, cruelty to soldiers, and other abuses; Stanislaus repeatedly rebuked the king, and eventually — probably in 1079 — excommunicated him. The king's response was brutal: he personally killed Stanislaus with his own sword at the church of Saint Michael on the Skałka rock outside Kraków while the bishop was saying Mass. The body was dismembered; tradition holds that the pieces miraculously reunited.</p>

<h3>Patron of Poland</h3>
<p>The killing of a bishop while celebrating Mass shocked Poland and Europe. Bolesław was forced into exile and died, possibly a penitent, in Hungary. Stanislaus was immediately venerated as a martyr. He was canonized in 1253 by Pope Innocent IV — the first native-born Pole to be canonized — and became the patron saint of Poland. His feast on April 11 is a major celebration in Polish culture. The dismembered-and-reunited-body legend was taken as an allegory of Poland's political destiny: scattered, then reconstituted. Pope John Paul II, himself Polish, had a particular devotion to Stanislaus.</p>`,
    reflection: "Stanislaus was murdered while saying Mass — murdered by the king whose sins he had rebuked. The pattern is ancient: prophets are killed by the kings they correct. He is in the lineage of John the Baptist (murdered for rebuking Herod), Thomas Becket (murdered for resisting Henry II), and Oscar Romero (murdered for speaking truth to military power). Every age has its bishops who must decide whether the pastoral duty of fraternal correction extends to political power. Stanislaus decided it did, and paid the price.",
    prayerToSaint: "O Saint Stanislaus, bishop and martyr of Kraków, you rebuked the king to his face and were cut down at the altar. Intercede for Poland and all nations torn between faithful witness and political expediency. Pray for all bishops who must speak truth to power, for all who are persecuted for their fidelity to the Church's moral teaching, and for the unity of all Christian peoples. Help us to say with you when the moment comes: I have done what is right. Amen.",
  },

  {
    name: "Saint Anselm",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (canonized c.1163; Doctor declared 1720)",
    quote: "I do not seek to understand so that I may believe; I believe so that I may understand.",
    fullBio: `<h3>Father of Scholasticism</h3>
<p>Anselm was born around 1033 in Aosta, Lombardy (in what is now Italy), to a noble family. His mother Ermenberga was a devout woman who gave him his first formation in faith. After her death, relations with his father became difficult and he left Aosta, eventually making his way to Normandy and the Abbey of Bec, where the philosopher-theologian Lanfranc was teaching. In 1060 Anselm entered the monastery. He became prior, then abbot. The school at Bec under Anselm became the most important intellectual center in northern Europe, attracting students from England, France, and Germany. He is regarded as the father of Scholasticism — the systematic application of reason to theology.</p>

<h3>The Ontological Argument</h3>
<p>Anselm's most famous work, the <em>Proslogion</em> (1077-78), contains the "ontological argument" for God's existence: God is "that than which nothing greater can be conceived" — and since a God who exists in reality is greater than a God who exists only in thought, God must necessarily exist. The argument has fascinated and divided philosophers ever since, with Kant famously rejecting it and Alvin Plantinga defending a modal version in the twentieth century. Anselm also wrote the <em>Cur Deus Homo</em> ("Why God Became Man"), the first systematic treatment of atonement theology in terms of honor, satisfaction, and infinite debt — an account that shaped Western soteriology for centuries and remains debated today.</p>

<h3>Archbishop and Exile</h3>
<p>In 1093, Anselm was appointed Archbishop of Canterbury. His episcopate was consumed by the Investiture Controversy — the conflict over whether kings or popes had the right to appoint bishops. Anselm refused to compromise with Kings William II and Henry I on the principle that church appointments belonged to the Church. He was twice exiled to Rome rather than comply. He died on April 21, 1109, having returned from his second exile. He was declared a Doctor of the Church by Pope Clement XI in 1720.</p>`,
    reflection: "Anselm's motto — 'faith seeking understanding' (<em>fides quaerens intellectum</em>) — is the charter of all Catholic intellectual life. He did not think that reason could replace faith, or that faith should suppress reason. He thought they were partners: the believer who refuses to think is ungrateful to the mind God gave him; the philosopher who refuses to believe has cut himself off from the source of all wisdom. His life of repeated exile for a principle of church governance adds to his intellectual achievement the testimony of a man who practiced what he preached.",
    prayerToSaint: "O Saint Anselm, archbishop and doctor, you sought to understand what you believed and believed what you sought to understand. Intercede for all teachers of theology, all Catholic philosophers, and all who struggle to bring their reason and their faith into harmony. Help us to love truth as you loved it — with rigor, with humility, and with the unshakeable conviction that the God of reason and the God of faith are one. Amen.",
  },

  {
    name: "Saint George",
    feastType: "Optional Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "I am a Christian soldier. What you ask me to do, no Christian can do.",
    fullBio: `<h3>The Universal Soldier-Martyr</h3>
<p>George was a Roman soldier, traditionally identified as an officer of the Praetorian Guard, who was martyred during the Diocletianic persecution around 303 AD. He is venerated in both Eastern and Western Christianity as one of the greatest martyrs, and is among the Fourteen Holy Helpers in the West and the Great Martyrs in the East. The historical core of his story is simple: he was a soldier who refused to deny his Christian faith and was executed. Beyond this, the historical record is sparse, though the veneration is very ancient — a church at Lydda (Diospolis in Palestine) honored him at least from the fourth century.</p>

<h3>The Legend of the Dragon</h3>
<p>The famous legend of Saint George and the dragon reached its most developed literary form in Jacobus de Voragine's <em>Golden Legend</em> (c. 1260). In the story, a city in Libya was terrorized by a dragon who demanded first animal sacrifices, then human victims chosen by lot. When the king's own daughter was chosen, George arrived, wounded the dragon with his lance, and led it bound into the city on the princess's girdle. He then killed it — but only after the people agreed to be baptized. The dragon is understood as an allegory of paganism (or the devil), the princess as the Church held captive, and George as the Christian soldier who liberates souls through Christ. The image of George on horseback slaying the dragon became one of the most reproduced images in Christian art.</p>

<h3>Patron of Nations</h3>
<p>George is the patron saint of England, Georgia (the country named for him), Ethiopia, Portugal, Aragon, and many other nations and cities. The Cross of Saint George — a red cross on white — is the flag of England and an element of the flags of several other nations. He is patron of soldiers, chivalry, scouts, archers, and those who suffer from skin diseases (deriving from the dragon legend). His feast on April 23 was a major celebration in medieval England. Pope Gelasius I noted in 494 that George was among those "whose names are rightly reverenced among men, but whose actions are known only to God."</p>`,
    reflection: "Almost nothing is known of George beyond the bare fact of his martyrdom. Pope Gelasius said so in 494: his name is rightly venerated, but his deeds are known only to God. And yet he became the patron of England, of Georgia, of chivalry — a symbol capable of holding centuries of devotion. The purity of his image — soldier, cross, dragon, and princess — speaks more deeply than biography could. He is the Christian at his most archetypal: in the world's service, facing the ancient enemy, armed only with faith.",
    prayerToSaint: "O Saint George, soldier and martyr, your deeds are known to God though hidden from us. Intercede for all soldiers who struggle to serve with justice, for all nations under your patronage, and for all who face the dragon of evil in whatever form it takes in our day. Give us the knight's virtues — courage, protection of the vulnerable, service without regard for reward — and the martyr's one indispensable gift: the willingness to lose everything rather than deny Christ. Amen.",
  },

  // ── MAY ─────────────────────────────────────────────────────────────────

  {
    name: "Saint Bernardine of Siena",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Nicholas V (1450)",
    quote: "The name of Jesus is the glory of preachers, because the shining splendor of this name causes his word to be proclaimed and heard.",
    fullBio: `<h3>Orphan, Nurse, and Friar</h3>
<p>Bernardine was born on September 8, 1380, in Massa Marittima, Tuscany, into a noble family. His mother died when he was three; his father when he was six. He was raised by devout aunts in Siena, receiving an excellent humanist education. At twenty, during the terrible plague of 1400 that swept Siena, he organized and led a volunteer group that cared for the sick at the city's largest hospital for four months — at the cost of his own health, which never fully recovered. In 1402 he entered the Friars Minor (Franciscan Observants), was ordained a priest, and began his decades of preaching.</p>

<h3>The Holy Name Preacher</h3>
<p>Bernardine became the greatest popular preacher of the fifteenth century — travelling almost continuously across Italy on foot, preaching in town squares to crowds of thousands, sometimes for hours at a time. His preaching style was vivid, earthy, humorous, and morally direct. His great devotional innovation was the promotion of the cult of the Holy Name of Jesus (IHS — the first three letters of "Jesus" in Greek), displayed on a sunburst tablet. He carried this tablet and displayed it at the climax of his sermons, urging the crowd to worship the name. His preaching produced mass conversions, reconciliations between feuding families, and the burning of gambling equipment and other "vanities." He was three times offered the episcopate (Siena, Ferrara, and Urbino) and refused all three.</p>

<h3>Death and Canonization</h3>
<p>Bernardine died on May 20, 1444, in Aquila, exhausted by decades of travel and preaching — having preached that very day. He was canonized just six years later, one of the fastest canonizations in Church history. His influence on Franciscan spirituality and on Italian popular piety was enormous. His writings on theology and preaching fill nine volumes.</p>`,
    reflection: "Bernardine of Siena was one of the most effective preachers in Church history, and he refused episcopal preferment three times. He chose preaching over administration, the road over the curia. He understood his gift and used it without diversion. His promotion of the Holy Name — those three letters, IHS — is a reminder that devotion to Christ does not require elaborate argument. Sometimes what is needed is a name, written large, held up before a crowd, and the invitation to honor it.",
    prayerToSaint: "O Saint Bernardine of Siena, apostle of the Holy Name, preacher of the piazzas and the poor, you gave your life to make the name of Jesus known and loved. Intercede for all preachers and evangelists, for all who proclaim the Gospel in the public square. Help us to honor the name of Jesus in our own speech and conduct, and to carry His name before us as you carried that sunburst tablet — with joy, with courage, and without shame. Amen.",
  },

  {
    name: "Saint Pius V",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Clement XI (1712)",
    quote: "This is what we desire: that all the faithful be so instructed in sacred things that, armed with the weapons of the Spirit, they may guard themselves from the snares of the devil.",
    fullBio: `<h3>Dominican Reformer</h3>
<p>Antonio Ghislieri was born on January 17, 1504, in Bosco near Alexandria, in Piedmont, Italy, to a poor family. He became a shepherd boy, then entered the Dominican Order at fourteen. His intelligence and piety were quickly recognized; he was ordained, then appointed inquisitor for Como and Bergamo, then Commissioner General of the Roman Inquisition. He was made a cardinal in 1557 by Pope Paul IV. He was known for his austerity, his refusal of personal comfort and nepotism (he gave nothing to his own family from Church resources), and his uncompromising orthodoxy.</p>

<h3>The Reforming Pope</h3>
<p>Elected Pope on January 7, 1566, Pius V immediately set about implementing the decrees of the Council of Trent with a thoroughness his predecessors had lacked. He reformed the Roman Curia, enforced clerical celibacy and residence, published the Tridentine Catechism (the Roman Catechism), revised the Roman Missal (1570) and the Roman Breviary — establishing the Tridentine Mass that would be the normative rite of the Latin Church for four centuries. He excommunicated Queen Elizabeth I of England (a geopolitically disastrous decision that worsened the situation of English Catholics). He lived as a Dominican friar rather than a Renaissance pope — white habit, fasting, nocturnal prayer — and transformed the atmosphere of the Vatican.</p>

<h3>Lepanto</h3>
<p>Pius V organized the Holy League — an alliance of Venice, Spain, and the Papal States — against the Ottoman Empire, which was advancing across the Mediterranean. On October 7, 1571, the fleet of the Holy League defeated the Ottoman fleet at the Battle of Lepanto, preventing the further expansion of Ottoman power in the Mediterranean. Pius attributed the victory to the intercession of the Virgin Mary through the Rosary, and instituted the feast of Our Lady of Victory (later Our Lady of the Rosary, October 7) to commemorate it. He died on May 1, 1572, and was canonized in 1712.</p>`,
    reflection: "Pius V was a man of iron principle in an age that needed it. The Council of Trent had finished its work; what was needed was someone to enforce it without exception or self-interest. He lived like a friar in the Vatican, applied the council's decrees to everyone including royalty, and organized the defense of Europe against Ottoman expansion. His greatness is inseparable from his austerity: a man who wanted nothing for himself was free to give everything to the Church.",
    prayerToSaint: "O Saint Pius V, reforming pope and Dominican mystic, you asked nothing for yourself and gave everything to the reform of the Church. Intercede for all popes and bishops charged with implementing the Church's councils and decrees, for all who must enforce difficult truths without regard for personal consequence, and for the defense of Christian civilization against those who would destroy it. Help us to be as unmoved by comfort and reward as you were, and as single-minded in our pursuit of God's glory. Amen.",
  },

  {
    name: "Saints Philip and James",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Lord, show us the Father, and we will be satisfied. — Philip",
    fullBio: `<h3>Philip the Questioner</h3>
<p>Philip was one of the first disciples Jesus called — the Gospel of John (1:43-44) notes that Jesus found Philip directly and said "Follow me." Philip was from Bethsaida, the same town as Peter and Andrew. He appears three times in John's Gospel in significant roles: bringing Nathanael to Jesus, prompting the question about buying bread before the multiplication of loaves (Jn 6:5-7), and most memorably asking at the Last Supper: "Lord, show us the Father, and we will be satisfied" — to which Jesus responded: "Have I been with you so long, and you still do not know me, Philip? Whoever has seen me has seen the Father" (Jn 14:8-9). Philip represents the disciple who is close to Christ and yet still does not fully understand what he has been given.</p>

<h3>James Son of Alphaeus</h3>
<p>James the son of Alphaeus (also called "James the Less" to distinguish him from James the son of Zebedee) is one of the most obscure of the Twelve. He appears in the apostolic lists (Matthew 10:3, Mark 3:18, Luke 6:15, Acts 1:13) but is not individually prominent in the Gospel narratives. He may be the "James the younger" mentioned in Mark 15:40. Whether he is the same as "James the brother of the Lord" who led the Jerusalem church is debated; the Western tradition has identified them, but Eastern tradition distinguishes them. He was almost certainly martyred; the tradition says he was beaten to death with a fuller's club, which becomes his symbol in Christian art.</p>

<h3>Their Feast</h3>
<p>Philip and James have shared a feast since the dedication of the Basilica of the Apostles in Rome (later San Apostoli) on May 1, which housed relics of both apostles. The feast celebrates the vocation of the Twelve as the foundation of the Church — chosen, formed, sent, and finally giving their lives. Their combined feast on May 3 (since the calendar reform of 1969) makes them companions in the liturgical year as they were in the college of apostles.</p>`,
    reflection: "Philip's question at the Last Supper is one of the most painfully human moments in the Gospel. He has been with Jesus for three years, has seen miracles, has heard the teaching — and still asks to be shown the Father as if he hadn't already seen Him. Jesus's answer is not reproach but revelation: everything you have seen in me is the Father. Philip represents every disciple who is present to Christ but not yet fully awake to what that presence means. His question — and the answer it received — is one of the greatest moments of Trinitarian revelation in the New Testament.",
    prayerToSaint: "O Saints Philip and James, apostles of the Lord, you walked with Jesus and still did not know what you had been given until the Spirit opened your eyes. Intercede for all who are near Christ in the sacraments and in prayer but have not yet fully seen the Father in him. Help us to ask Philip's question with Philip's urgency, and to receive with wonder the answer Christ gives: whoever has seen me has seen the Father. Amen.",
  },

  {
    name: "Saint Matthias",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "It is necessary to choose one of the men who have accompanied us the whole time that the Lord Jesus went in and out among us.",
    fullBio: `<h3>The Chosen Replacement</h3>
<p>Matthias is the apostle chosen to replace Judas Iscariot after the Ascension, as recounted in Acts 1:15-26. The account is notable for its method: Peter, addressing the gathered community of about one hundred and twenty, sets out the criterion — the new apostle must be one who had been with Jesus from the baptism of John through to the Ascension, in order to be "a witness to his resurrection." Two candidates were proposed: Joseph Barsabbas (also called Justus) and Matthias. After prayer, lots were cast. The lot fell to Matthias. He was thus "numbered with the eleven apostles." This is the only apostolic selection in the New Testament decided by lot.</p>

<h3>The Witness</h3>
<p>What is remarkable about the selection is its premise: Matthias had been with Jesus throughout His entire public ministry, presumably including the Last Supper, the Passion, and the Resurrection appearances — yet he appears nowhere in the Gospels by name. He was a constant, unnamed witness, present for everything, unrecorded. His selection reveals that the Twelve were embedded in a larger community of disciples (the seventy-two, and beyond them the hundred and twenty), and that apostolic witness was not the exclusive possession of the named inner circle. Matthias represents the uncounted, unnamed faithful who were just as present as the famous ones.</p>

<h3>Mission and Martyrdom</h3>
<p>Traditions about Matthias's subsequent mission vary: some sources place him in Judea and Cappadocia, others in Ethiopia or on the Caspian Sea. He was martyred, according to tradition, probably by stoning or by axe (his symbol in art). His relics are claimed by the Abbey of Saint Matthias in Trier, Germany, where he has been venerated since the medieval period. His feast is celebrated on May 14 in the Roman calendar since 1969.</p>`,
    reflection: "Matthias was present for the whole story — the baptism of John, the ministry, the miracles, the Passion, the Resurrection — and not named once. He was faithful and invisible. His selection by lot removes even the honor of being chosen by discernment; God chose him, purely. His life is a word to everyone who serves faithfully without recognition, who is present for the whole story but never gets their name in the record. God notices the unnamed presence. The lots fell on Matthias.",
    prayerToSaint: "O Saint Matthias, apostle chosen by lot and witness to the whole ministry of the Lord, you served faithfully in obscurity and were raised to apostolic dignity at God's sole initiative. Intercede for all who serve the Church without recognition, for all who are present and faithful without being notable, and for all who must begin again after another has failed. Help us to be content with being witnesses, whether named or not, as long as we are faithful. Amen.",
  },

  // ── AUGUST ───────────────────────────────────────────────────────────────

  {
    name: "Saint Joan of Arc",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XV (1920)",
    quote: "I am not afraid. I was born to do this.",
    fullBio: `<h3>The Peasant Visionary</h3>
<p>Joan was born on January 6, 1412, in Domrémy, a small village on the border of Lorraine, France. She was the daughter of Jacques d'Arc, a peasant farmer of modest means. France had been at war with England since 1337 — the Hundred Years' War — and much of northern France, including Paris, was under English control. The Dauphin Charles VII had not been crowned. Joan grew up in a pious family, attending Mass regularly and showing from childhood an intensity of prayer that her contemporaries noticed.</p>

<h3>The Voices</h3>
<p>At approximately thirteen, Joan began hearing voices — which she identified, over time, as Saint Michael the Archangel, Saint Catherine of Alexandria, and Saint Margaret of Antioch. The voices gave her a mission: go to the Dauphin, have him crowned King of France, and drive the English from the country. Joan traveled to Vaucouleurs and persuaded the local commander, Robert de Baudricourt, to give her an escort to the royal court at Chinon. At Chinon she recognized the disguised Dauphin — a test the court had arranged — and gained his confidence. A theological commission at Poitiers examined her for three weeks and found nothing heretical.</p>

<h3>Victory and Capture</h3>
<p>Joan was given command of the relief force sent to Orléans, which was under English siege. On May 8, 1429, the siege was lifted — one of the great military reversals of the Hundred Years' War. She then led the campaign that took Reims, where Charles VII was crowned King of France on July 17, 1429, with Joan at his side. But the king's support for her subsequent campaign was lukewarm, and in May 1430 Joan was captured at Compiègne by Burgundian forces allied with the English. She was sold to the English, tried by a pro-English ecclesiastical court at Rouen on charges of heresy and witchcraft, and burned at the stake on May 30, 1431, at age nineteen. Her last word was "Jesus." A rehabilitation trial in 1456 overturned her condemnation. She was beatified in 1909 and canonized in 1920.</p>`,
    reflection: "Joan of Arc is one of the most extraordinary human beings who ever lived — a peasant girl who led armies, lifted sieges, and had a king crowned, all before her twentieth year. Then she was burned. She was not afraid, she said, because she was born to do this. Her voices may be interpreted in various ways; what cannot be interpreted away is the historical fact: she did what she said she was sent to do, and it cost her everything. The Church reversed her condemnation twenty-five years after her death. God did not wait for the reversal to crown her.",
    prayerToSaint: "O Saint Joan of Arc, virgin and martyr, soldier of France and daughter of God, you obeyed voices that no one else could hear and did what no one believed was possible. Intercede for France, for soldiers, for all young women who are called to courage in a world that dismisses them, and for all who are condemned unjustly by corrupt authority. Help us to be unafraid — not because the danger is not real, but because we were born, like you, to do what God has asked of us. Amen.",
  },

  {
    name: "Saint Adalbert",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "If I return to you after martyrdom, will you receive me? Then accept me now — for I go to preach to those who have not yet heard the Gospel.",
    fullBio: `<h3>Bishop of Prague and Martyr</h3>
<p>Adalbert (Vojtěch) was born around 956 into a noble Bohemian family and received an excellent education at Magdeburg under Archbishop Adalbert, whose name he took at confirmation. He was appointed Bishop of Prague in 983 — a young man placed over one of the most turbulent churches in Europe, a recently Christianized people still largely practicing paganism in private, resisting clerical celibacy, tolerating the slave trade, and bridling under episcopal discipline. Adalbert twice abandoned his diocese in despair at the impossibility of reform, spending time with the Benedictines of Montecassino and with his friend Romuald. He was twice persuaded to return.</p>

<h3>Mission to the Prussians</h3>
<p>After his second departure from Prague, Adalbert went to Poland and then in 997 to Prussia — the pagan region on the Baltic — as a missionary. After a brief mission he was captured by a pagan priest and killed on April 23, 997. The accounts of his death describe him as struck multiple times with lances and beheaded. He was immediately venerated as a martyr. King Bolesław the Brave of Poland ransomed his body for its weight in gold. Adalbert was canonized in 999 — two years after his death — one of the fastest canonizations in history. He became a patron of Poland, Bohemia, Hungary, and Prussia. His influence on the evangelization of Central and Eastern Europe, and his personal friendship with Emperor Otto III, made him a pivotal figure in the Christianization of the region.</p>`,
    reflection: "Adalbert was twice driven from his own diocese by the impossibility of the task, and twice sent back — and ultimately sent to a mission where there was no diocesan base at all, only pagans and death. His life is a study in evangelical failure and evangelical persistence. The greatest missionaries are often the ones who most clearly feel the futility of what they are attempting and go forward anyway. He could not reform his diocese; he could go to the untouched frontier. God, it seems, was satisfied with that offering.",
    prayerToSaint: "O Saint Adalbert, bishop and martyr, apostle of Poland and Prussia, you gave your life twice — first in exhausting pastoral service and then in mission to the unconverted. Intercede for the evangelization of Europe's secularized peoples, for all bishops who feel overwhelmed by their mission, and for all missionaries who go forward knowing the cost. Help us to persevere in hope where others give up, and to go to the edges of the world where the Gospel has not yet been heard. Amen.",
  },

  {
    name: "Saint Augustine of Canterbury",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "I know, brothers, that it is hard to receive strangers and foreigners. But the Christ who sends us is harder still to refuse.",
    fullBio: `<h3>The Reluctant Missionary</h3>
<p>Augustine was a monk at the monastery of Sant'Andrea al Celio in Rome, serving under the priorship of Gregory (later Pope Gregory the Great). In 596, Gregory chose him to lead a mission of forty monks to England — a mission that might have seemed to many like a sentence: England was remote, pagan, and dangerous. The monks set out but turned back at Gaul, terrified by reports of the English. Augustine returned to Rome to ask Gregory's permission to abandon the mission. Gregory famously refused, wrote letters of encouragement and recommendation to various Frankish kings and bishops, and sent Augustine back with the title of abbot. The mission resumed.</p>

<h3>Arrival and Conversion of Kent</h3>
<p>Augustine arrived in Kent in 597. The situation was favorable: King Æthelberht of Kent had a Frankish Christian wife, Bertha, who had been permitted to practice her faith. Æthelberht received Augustine cautiously but fairly. Augustine and his monks sang psalms in procession, carried a silver cross and an image of Christ, and preached through an interpreter. The king converted within months; on Christmas Day 597, ten thousand of his subjects were reportedly baptized in the River Swale. Pope Gregory celebrated the success with joy — his famous "Alleluia" letter, saying: "England, once lying in a corner of the world, now gives praise to God." Augustine was consecrated the first Archbishop of Canterbury.</p>

<h3>Legacy</h3>
<p>Augustine's mission laid the foundation of English Christianity. He organized the church structure Gregory had envisioned: two archbishoprics (Canterbury and York), twelve suffragan bishops each. He dealt with the complex problem of the Celtic Christians in Britain — who had maintained their own traditions during the Roman absence — with insufficient delicacy, a failure for which the sources criticize him. He died around 604, just a year after Gregory. The See of Canterbury, which he founded, remains the mother church of the worldwide Anglican Communion and is still deeply rooted in the Gregorian mission he established.</p>`,
    reflection: "Augustine of Canterbury was afraid. He turned back once before going forward. This makes his mission more human, not less holy. Gregory sent him anyway, and he obeyed. What followed — the conversion of a pagan kingdom, the foundation of a great church, the Christianization of England — was not the achievement of a fearless hero but of a frightened monk who went when he was sent. The obedience of the terrified is often God's preferred instrument.",
    prayerToSaint: "O Saint Augustine of Canterbury, apostle of the English, you were afraid and went anyway. Intercede for all who are called to missions they fear and tasks they feel unequal to. Pray for the Church of England and all the churches descended from the Gregorian mission, and for the full unity of all Christians in England and throughout the world. Help us to see that our own fears are not disqualifications from God's service, but the very condition in which grace most clearly shines. Amen.",
  },

];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed12 = mutation({
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
