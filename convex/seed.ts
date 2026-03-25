import { mutation } from "./_generated/server";

const off = [0,31,59,90,120,151,181,212,243,273,304,334];
const mn = ["","January","February","March","April","May","June","July","August","September","October","November","December"];

type SD = {
  name: string; m: number; d: number;
  short: string; tags: string[];
  extra?: string; p?: string; born?: string; died?: string;
};

const SAINTS: SD[] = [
  // JANUARY
  { name:"Mary, Mother of God", m:1, d:1, short:"The Blessed Virgin Mary, honored on the octave of Christmas as Theotokos—God-bearer—and interceding Mother of the Church.", tags:["virgin","mother","dogma"], p:"all mankind", died:"1st century" },
  { name:"Basil the Great", m:1, d:2, short:"Bishop of Caesarea and Doctor of the Church who defended Nicene orthodoxy against Arianism and wrote foundational monastic rules.", tags:["bishop","doctor","monk"], born:"330", died:"379" },
  { name:"Gregory Nazianzen", m:1, d:2, short:"Archbishop of Constantinople and Doctor of the Church, called 'the Theologian' for his five Theological Orations defending Trinitarian faith.", tags:["bishop","doctor","theologian"], born:"329", died:"390" },
  { name:"Genevieve of Paris", m:1, d:3, short:"Fifth-century consecrated virgin who rallied the people of Paris in prayer during Attila the Hun's advance, credited with saving the city.", tags:["virgin","mystic"], p:"Paris", born:"c.419", died:"c.500" },
  { name:"Elizabeth Ann Seton", m:1, d:4, short:"First native-born American saint, founder of the Sisters of Charity, and pioneer of Catholic parochial education in the United States.", tags:["founder","widow","educator"], p:"death of children, widows", born:"1774", died:"1821" },
  { name:"John Neumann", m:1, d:5, short:"Redemptorist bishop of Philadelphia who organized the first diocesan Catholic school system in America and was canonized in 1977.", tags:["bishop","missionary","educator"], p:"Catholic education", born:"1811", died:"1860" },
  { name:"Andre Bessette", m:1, d:6, short:"Holy Cross brother known as the 'Miracle Worker of Montreal' whose devotion to St. Joseph led to the construction of the Oratory of Saint Joseph.", tags:["brother","mystic","healer"], p:"sick people", born:"1845", died:"1937" },
  { name:"Raymond of Penyafort", m:1, d:7, short:"Dominican friar, canon lawyer, and third Master General of the Dominicans who compiled the Decretals and worked for the conversion of Moors and Jews.", tags:["priest","lawyer","dominican"], p:"canon lawyers, medical record librarians", born:"c.1175", died:"1275" },
  { name:"Thorlac of Iceland", m:1, d:8, short:"Bishop of Skalholt who reformed the Icelandic church, enforced clerical celibacy, and is venerated as the patron saint of Iceland.", tags:["bishop","reformer"], p:"Iceland", born:"1133", died:"1193" },
  { name:"Adrian of Canterbury", m:1, d:9, short:"African-born abbot of Saints Peter and Paul in Canterbury who made the school there a leading center of learning in seventh-century England.", tags:["abbot","scholar","missionary"], born:"c.635", died:"710" },
  { name:"Gregory X", m:1, d:10, short:"Pope who convened the Second Council of Lyon, attempted reunion with the Eastern Church, and promulgated the conclave rules still governing papal elections.", tags:["pope","reformer"], born:"1210", died:"1276" },
  { name:"Paulinus of Aquileia", m:1, d:11, short:"Patriarch of Aquileia, theologian, and poet who combated the Adoptionist heresy and fostered the evangelization of the Avars.", tags:["bishop","theologian"], born:"c.726", died:"802" },
  { name:"Marguerite Bourgeoys", m:1, d:12, short:"French missionary to New France who founded the Congregation of Notre Dame of Montreal and built the first stone church in Montreal.", tags:["founder","missionary","educator"], p:"against poverty, people rejected by religious orders", born:"1620", died:"1700" },
  { name:"Hilary of Poitiers", m:1, d:13, short:"Bishop and Doctor of the Church called the 'Athanasius of the West' for his vigorous defense of Nicene Trinitarian doctrine against Arianism.", tags:["bishop","doctor","theologian"], p:"against snake bites, backward children", born:"c.315", died:"367" },
  { name:"Felix of Nola", m:1, d:14, short:"Third-century priest of Nola who endured persecution under Decius, miraculously escaped prison, and cared for his bishop Maximus in hiding.", tags:["priest","confessor"], born:"c.255", died:"c.260" },
  { name:"Maur", m:1, d:15, short:"Early disciple of St. Benedict who, according to Gregory the Great, walked on water to save a drowning monk, and is considered founder of Benedictine monasticism in France.", tags:["monk","abbot"], born:"c.512", died:"584" },
  { name:"Marcellus I", m:1, d:16, short:"Pope who faced the Diocletianic persecution and whose pontificate was troubled by controversy over the reconciliation of apostates.", tags:["pope","martyr"], died:"309" },
  { name:"Anthony the Great", m:1, d:17, short:"Egyptian hermit regarded as the father of Christian monasticism whose life, written by Athanasius, inspired thousands to the desert life.", tags:["monk","hermit","abbot"], p:"skin diseases, gravediggers, butchers", born:"c.251", died:"356" },
  { name:"Prisca", m:1, d:18, short:"Roman virgin martyr venerated since antiquity on the Aventine Hill in Rome, where a basilica bearing her name has stood since the fourth century.", tags:["virgin","martyr"], died:"c.270" },
  { name:"Wulfstan of Worcester", m:1, d:19, short:"Anglo-Saxon bishop of Worcester who survived the Norman Conquest, campaigned against the slave trade, and is the last canonized Anglo-Saxon bishop.", tags:["bishop","reformer"], born:"c.1008", died:"1095" },
  { name:"Fabian", m:1, d:20, short:"Pope who reorganized the Roman church into seven regions and was martyred under Emperor Decius; Cyprian called him 'incomparable.'", tags:["pope","martyr"], died:"250" },
  { name:"Sebastian", m:1, d:20, short:"Roman soldier and martyr who secretly encouraged persecuted Christians until discovered and shot with arrows, then clubbed to death under Diocletian.", tags:["martyr","soldier"], p:"athletes, soldiers, police", died:"c.288" },
  { name:"Agnes", m:1, d:21, short:"Thirteen-year-old Roman martyr who chose death over marriage and the denial of her faith, one of the most celebrated virgins of the early Church.", tags:["virgin","martyr"], p:"chastity, girls, rape survivors", died:"c.304" },
  { name:"Vincent of Saragossa", m:1, d:22, short:"Deacon and protomartyr of Spain who suffered extraordinary tortures under Dacian and whose courage inspired countless Christians.", tags:["deacon","martyr"], p:"winemakers, vinegar makers", died:"304" },
  { name:"Marianne Cope", m:1, d:23, short:"Franciscan Sister who cared for leprosy patients in Hawaii, including Robert Louis Stevenson's patients at Molokai after Fr. Damien's death.", tags:["religious","missionary","nurse"], p:"leprosy patients, outcasts", born:"1838", died:"1918" },
  { name:"Francis de Sales", m:1, d:24, short:"Bishop of Geneva, Doctor of the Church, and spiritual director who wrote Introduction to the Devout Life, teaching that holiness is for everyone.", tags:["bishop","doctor","writer"], p:"writers, journalists, the deaf", born:"1567", died:"1622" },
  { name:"The Conversion of Paul", m:1, d:25, short:"Feast commemorating Saul of Tarsus's blinding encounter with the risen Christ on the road to Damascus, transforming the Church's greatest persecutor into its greatest missionary.", tags:["apostle","feast"], p:"missionaries, theologians" },
  { name:"Timothy", m:1, d:26, short:"Disciple and companion of Paul, first bishop of Ephesus, martyred for opposing the cult of Diana; Paul addressed two pastoral letters to him.", tags:["bishop","martyr","apostolic"], born:"c.17", died:"97" },
  { name:"Titus", m:1, d:26, short:"Companion of Paul, first bishop of Crete, to whom Paul addressed a pastoral letter and whom he left in Crete to appoint presbyters.", tags:["bishop","apostolic"], died:"c.107" },
  { name:"Angela Merici", m:1, d:27, short:"Italian mystic and founder of the Company of St. Ursula (Ursulines), the first teaching order of women, dedicated to the education of girls.", tags:["founder","virgin","educator"], p:"sick and disabled people, loss of parents", born:"1474", died:"1540" },
  { name:"Thomas Aquinas", m:1, d:28, short:"Dominican friar, philosopher, and Doctor of the Church whose Summa Theologiae synthesized Christian theology with Aristotelian philosophy, forming the basis of Scholasticism.", tags:["priest","doctor","theologian","dominican"], p:"students, scholars, universities, booksellers", born:"1225", died:"1274" },
  { name:"Gildas the Wise", m:1, d:29, short:"Sixth-century British monk and historian whose work De Excidio et Conquestu Britanniae is the primary contemporary source for post-Roman Britain.", tags:["monk","writer"], born:"c.500", died:"c.570" },
  { name:"Martina of Rome", m:1, d:30, short:"Roman martyr venerated since ancient times whose relics were discovered in 1634 under the church of San Luca e Martina in the Roman Forum.", tags:["virgin","martyr"], died:"c.228" },
  { name:"John Bosco", m:1, d:31, short:"Founder of the Salesians who devoted his life to the education and spiritual care of poor youth in Turin, pioneering the 'preventive system' of education.", tags:["priest","founder","educator"], p:"youth, editors, magicians", born:"1815", died:"1888" },

  // FEBRUARY
  { name:"Brigid of Ireland", m:2, d:1, short:"Fifth-century abbess of Kildare venerated as one of Ireland's three patron saints, associated with perpetual fire and miraculous charity.", tags:["abbess","founder"], p:"Ireland, dairymaids, cattle, newborns", born:"c.451", died:"525" },
  { name:"Presentation of the Lord", m:2, d:2, short:"Feast commemorating the presentation of the infant Jesus in the Temple forty days after his birth and the purification of the Blessed Virgin Mary.", tags:["feast","mary"], p:"" },
  { name:"Blaise of Sebaste", m:2, d:3, short:"Bishop and martyr of Armenia who miraculously healed a boy choking on a fishbone; his blessing of throats remains a beloved sacramental.", tags:["bishop","martyr"], p:"throat ailments, wool combers", died:"316" },
  { name:"Ansgar", m:2, d:3, short:"Benedictine monk and Archbishop of Hamburg-Bremen, the 'Apostle of the North,' who evangelized Denmark, Sweden, and Hamburg.", tags:["bishop","missionary","monk"], p:"Scandinavia", born:"801", died:"865" },
  { name:"Gilbert of Sempringham", m:2, d:4, short:"English priest who founded the only medieval religious order of English origin—the Gilbertines—with double monasteries for men and women.", tags:["priest","founder"], born:"c.1083", died:"1189" },
  { name:"Agatha of Sicily", m:2, d:5, short:"Third-century Sicilian virgin and martyr who resisted the advances of a Roman magistrate; her courage and suffering have been venerated since antiquity.", tags:["virgin","martyr"], p:"breast cancer, nursing mothers, Sicily, bell-founders", died:"c.251" },
  { name:"Paul Miki", m:2, d:6, short:"Japanese Jesuit martyr who, while crucified, preached forgiveness to the crowd; one of the Twenty-Six Martyrs of Japan canonized in 1862.", tags:["martyr","jesuit"], p:"Japan", born:"1562", died:"1597" },
  { name:"Colette of Corbie", m:2, d:7, short:"Franciscan mystic who reformed the Poor Clares, returning to strict observance, and founded seventeen convents of the reformed Colettine Poor Clares.", tags:["abbess","founder","mystic"], born:"1381", died:"1447" },
  { name:"Jerome Emiliani", m:2, d:8, short:"Venetian nobleman turned priest who founded the Somaschi Fathers and devoted himself to caring for orphans, the poor, and the sick after his own miraculous release from prison.", tags:["priest","founder"], p:"orphans, abandoned children, youth", born:"1481", died:"1537" },
  { name:"Josephine Bakhita", m:2, d:8, short:"Sudanese-born Canossian Sister who survived slavery to become a joyful witness to God's mercy, canonized by John Paul II in 2000.", tags:["religious","confessor"], p:"Sudan, trafficking victims", born:"c.1869", died:"1947" },
  { name:"Miguel Febres Cordero", m:2, d:9, short:"Ecuadorian De La Salle Brother and scholar who wrote foundational Spanish-language grammar texts and was canonized in 1984.", tags:["brother","educator","writer"], born:"1854", died:"1910" },
  { name:"Scholastica", m:2, d:10, short:"Twin sister of St. Benedict and first Benedictine nun whose last conversation with her brother, ended by a miraculous storm, is recounted by Gregory the Great.", tags:["abbess","virgin","monk"], p:"convulsive children, nuns", born:"c.480", died:"543" },
  { name:"Our Lady of Lourdes", m:2, d:11, short:"Commemoration of the eighteen Marian apparitions to Bernadette Soubirous in 1858 at the Grotto of Massabielle, from which a healing spring emerged.", tags:["mary","apparition","feast"], p:"sick people, bodily ills" },
  { name:"Meletius of Antioch", m:2, d:12, short:"Bishop of Antioch who navigated the Arian controversy with pastoral prudence and presided over the First Council of Constantinople before his death there in 381.", tags:["bishop","confessor"], born:"c.310", died:"381" },
  { name:"Catherine dei Ricci", m:2, d:13, short:"Dominican tertiary of Prato who experienced weekly stigmatic trances re-enacting Christ's Passion, attracting pilgrims including three future popes.", tags:["virgin","mystic","stigmatic"], born:"1522", died:"1590" },
  { name:"Valentine of Rome", m:2, d:14, short:"Roman priest and martyr of the third century whose feast day became associated with courtly love in the Middle Ages; patron of lovers and engaged couples.", tags:["martyr","priest"], p:"love, engaged couples, beekeepers", died:"c.269" },
  { name:"Claude La Colombiere", m:2, d:15, short:"Jesuit confessor of St. Margaret Mary Alacoque who promoted devotion to the Sacred Heart of Jesus and was beatified in 1929.", tags:["priest","jesuit"], born:"1641", died:"1682" },
  { name:"Seven Founders of the Servites", m:2, d:17, short:"Seven Florentine noblemen who withdrew to Monte Senario in 1233 and founded the Order of Servants of Mary, all canonized together in 1888.", tags:["founder","monk","friar"], died:"13th century" },
  { name:"Fra Angelico", m:2, d:18, short:"Dominican friar and Renaissance painter of sacred art, beatified by John Paul II in 1982 and named patron of Catholic artists; his works adorn the Vatican.", tags:["friar","artist","dominican"], born:"c.1395", died:"1455" },
  { name:"Conrad of Piacenza", m:2, d:19, short:"Italian nobleman who became a Franciscan tertiary after accidentally causing a forest fire; he lived as a hermit in Sicily performing miraculous healings.", tags:["hermit","tertiary"], p:"hernias, cowherds", born:"1290", died:"1351" },
  { name:"Jacinta and Francisco Marto", m:2, d:20, short:"Two of the three child seers of Fatima who died young after seeing the vision of hell and offering their sufferings for sinners, canonized in 2017.", tags:["visionary","martyr"], born:"1908/1910", died:"1919/1920" },
  { name:"Peter Damian", m:2, d:21, short:"Benedictine hermit, cardinal, and Doctor of the Church who vigorously reformed clerical morals and simony in the eleventh-century Church.", tags:["cardinal","monk","doctor","reformer"], born:"1007", died:"1072" },
  { name:"Margaret of Cortona", m:2, d:22, short:"Penitent Franciscan tertiary who, after a sinful early life, became a mystic and founded a hospital, the Poverelle, for the poor of Cortona.", tags:["tertiary","penitent","mystic"], p:"homeless, falsely accused, midwives", born:"1247", died:"1297" },
  { name:"Polycarp of Smyrna", m:2, d:23, short:"Bishop of Smyrna and disciple of John the Apostle who was burned at the stake at age 86, declaring he had served Christ for 86 years and would not deny him.", tags:["bishop","martyr","apostolic"], born:"c.69", died:"155" },
  { name:"Matthias the Apostle", m:2, d:24, short:"Chosen by lot to replace Judas Iscariot among the Twelve Apostles, Matthias is believed to have evangelized Judea and Ethiopia.", tags:["apostle"], p:"alcoholism, smallpox, carpenters", died:"c.80" },
  { name:"Walburga", m:2, d:25, short:"Anglo-Saxon Benedictine abbess of Heidenheim in Germany who assisted St. Boniface in evangelizing the Germans; her feast eve gave rise to 'Walpurgisnacht.'", tags:["abbess","missionary"], p:"against rabies, plague, whooping cough", born:"c.710", died:"779" },
  { name:"Porphyry of Gaza", m:2, d:26, short:"Bishop of Gaza who persevered in a hostile pagan city, obtained from the Emperor the demolition of the city's great pagan temple, and built a church on its site.", tags:["bishop","missionary"], born:"347", died:"420" },
  { name:"Gabriel Possenti", m:2, d:27, short:"Passionist student who died at 24 after a short but intense spiritual life marked by deep devotion to Our Lady of Sorrows; patron of youth.", tags:["student","religious"], p:"youth, seminarians, clerics", born:"1838", died:"1862" },
  { name:"Hilary of Arles", m:2, d:28, short:"Fifth-century archbishop of Arles known for his ascetical life, eloquence, and conflict with Pope Leo I over the limits of papal authority in Gaul.", tags:["bishop","monk"], born:"c.401", died:"449" },

  // MARCH
  { name:"David of Wales", m:3, d:1, short:"Sixth-century bishop and abbot, patron saint of Wales, whose monastic rule emphasized extreme asceticism; his last words: 'Be joyful, keep the faith, do the little things.'", tags:["bishop","abbot","monk"], p:"Wales, vegetarians, doves", died:"c.589" },
  { name:"Chad of Mercia", m:3, d:2, short:"Anglo-Saxon monk who became bishop of both Lichfield and York, known for his humility and pastoral zeal; he insisted on traveling his diocese on foot.", tags:["bishop","monk"], born:"c.634", died:"672" },
  { name:"Katharine Drexel", m:3, d:3, short:"Philadelphia heiress who used her inheritance to found the Sisters of the Blessed Sacrament and establish Xavier University, the first historically Black Catholic university in America.", tags:["founder","religious","educator"], p:"racial justice, philanthropy", born:"1858", died:"1955" },
  { name:"Casimir of Poland", m:3, d:4, short:"Polish prince who refused to invade Hungary for political gain, chose a life of prayer and celibacy, and died young of tuberculosis, venerated for his integrity.", tags:["prince","confessor"], p:"Poland, Lithuania, youth", born:"1458", died:"1484" },
  { name:"John Joseph of the Cross", m:3, d:5, short:"Neapolitan Franciscan Alcantarine mystic who worked miracles, lived in extreme poverty, and was filled with supernatural gifts including bilocation.", tags:["priest","mystic","franciscan"], born:"1654", died:"1734" },
  { name:"Colette of Corbie", m:3, d:6, short:"See February 7. Additional feast kept in some calendars on the date of her death.", tags:["abbess","founder"], born:"1381", died:"1447" },
  { name:"Perpetua and Felicity", m:3, d:7, short:"Carthaginian noblewoman and her slave, both young mothers, who were martyred together in the arena in 203 AD; their prison diary is among the earliest Christian documents.", tags:["martyr","mother"], p:"mothers, expectant mothers, ranchers", died:"203" },
  { name:"John of God", m:3, d:8, short:"Portuguese-Spanish convert who, after a breakdown, founded the Brothers Hospitallers of Saint John of God and pioneered humanitarian care for the mentally ill and poor.", tags:["founder","nurse"], p:"heart patients, hospitals, booksellers, alcoholics", born:"1495", died:"1550" },
  { name:"Frances of Rome", m:3, d:9, short:"Married noblewoman, mother, and widow who founded the Oblates of Tor de' Specchi and was attended by her guardian angel, visible to her for years.", tags:["founder","widow","mystic"], p:"motorists, Benedictine oblates, widows", born:"1384", died:"1440" },
  { name:"Dominic Savio", m:3, d:9, short:"Pupil of Don Bosco who died at 15 after a brief and intensely holy life; the youngest non-martyr canonized by the Church, in 1954 by Pius XII.", tags:["youth","confessor"], p:"juvenile delinquents, choir boys, falsely accused", born:"1842", died:"1857" },
  { name:"John Ogilvie", m:3, d:10, short:"Scottish Jesuit priest who ministered secretly to Catholics during the Reformation and was hanged for refusing to acknowledge royal supremacy in spiritual matters.", tags:["martyr","jesuit"], p:"Scotland", born:"1579", died:"1615" },
  { name:"Eulogius of Cordoba", m:3, d:11, short:"Priest of Cordoba who encouraged the voluntary martyrs of Cordoba during Moorish rule and wrote their history; himself martyred for sheltering a Christian convert.", tags:["martyr","priest"], born:"c.810", died:"859" },
  { name:"Maximilian of Tebessa", m:3, d:12, short:"Roman conscript who refused military service because as a Christian he could not bear arms, and was executed at age 21, one of the earliest conscientious objectors.", tags:["martyr"], died:"295" },
  { name:"Rodrigo of Cordoba", m:3, d:13, short:"Priest martyred at Cordoba under the Moors after being betrayed by his own apostate brother who reported him for practicing Christianity.", tags:["martyr","priest"], died:"857" },
  { name:"Matilda of Saxony", m:3, d:14, short:"Queen of Germany and wife of Henry the Fowler who founded numerous religious houses, endured her sons' ingratitude, and died in prayer at the monastery of Nordhausen.", tags:["queen","founder"], born:"c.895", died:"968" },
  { name:"Louise de Marillac", m:3, d:15, short:"Co-founder with St. Vincent de Paul of the Daughters of Charity, the first non-cloistered congregation of women dedicated to active charitable service.", tags:["founder","widow"], p:"social workers, widows", born:"1591", died:"1660" },
  { name:"Herbert of Cologne", m:3, d:16, short:"Archbishop of Cologne and counselor to Emperor Otto III who founded Deutz Abbey and is remembered for his care of the poor and reform of the clergy.", tags:["bishop","founder"], born:"c.970", died:"1021" },
  { name:"Patrick of Ireland", m:3, d:17, short:"Romano-British missionary bishop who, after years of slavery in Ireland, returned to evangelize the Irish, establishing the Church that would send missionaries across Europe.", tags:["bishop","missionary"], p:"Ireland, engineers, Nigeria", born:"c.385", died:"c.461" },
  { name:"Cyril of Jerusalem", m:3, d:18, short:"Bishop of Jerusalem and Doctor of the Church whose Catechetical Lectures are a primary source for early liturgy and sacramental theology.", tags:["bishop","doctor"], born:"c.313", died:"386" },
  { name:"Joseph of Nazareth", m:3, d:19, short:"Foster father of Jesus Christ and husband of the Blessed Virgin Mary, guardian of the Holy Family, model of the faithful worker and protector.", tags:["patriarch","father"], p:"workers, fathers, dying persons, universal Church", died:"1st century" },
  { name:"Cuthbert of Lindisfarne", m:3, d:20, short:"Anglo-Saxon monk and bishop of Lindisfarne whose life as hermit and pastor on the Farne Islands made him the most beloved saint of northern England.", tags:["bishop","hermit","monk"], born:"c.634", died:"687" },
  { name:"Ita of Killeedy", m:3, d:15, short:"Irish abbess called 'foster-mother of the saints of Ireland' who ran a monastic school in Limerick where young boys including St. Brendan were educated.", tags:["abbess","educator"], p:"Munster (Ireland)", died:"c.570" },
  { name:"Turibius of Mogrovejo", m:3, d:23, short:"Spanish-born Archbishop of Lima who reformed colonial abuses, confirmed nearly a million native Peruvians including St. Rose of Lima, and convened major councils.", tags:["bishop","missionary"], p:"Latin American bishops, native rights", born:"1538", died:"1606" },
  { name:"Oscar Romero", m:3, d:24, short:"Archbishop of San Salvador assassinated while celebrating Mass in 1980; prophet of the poor who became a martyr for justice, canonized in 2018.", tags:["bishop","martyr"], p:"Americas, persecuted people", born:"1917", died:"1980" },
  { name:"Annunciation of the Lord", m:3, d:25, short:"Feast celebrating the angel Gabriel's announcement to the Virgin Mary and her fiat, the moment of the Incarnation of the Son of God.", tags:["feast","mary","incarnation"] },
  { name:"Ludger of Münster", m:3, d:26, short:"Frisian-born first Bishop of Münster who evangelized pagan Saxons and Frisians with gentle persistence rather than coercion, founding several abbeys.", tags:["bishop","missionary"], born:"c.742", died:"809" },
  { name:"Rupert of Salzburg", m:3, d:27, short:"Frankish bishop who evangelized Bavaria, founded Salzburg Cathedral and the Abbey of St. Peter, and is venerated as the apostle of the Bavarians.", tags:["bishop","founder","missionary"], died:"c.710" },
  { name:"Guntram of Burgundy", m:3, d:28, short:"Frankish king who maintained peace, founded monasteries, fed the poor, and was known for his just and merciful rule; venerated as a saint in Burgundy.", tags:["king","confessor"], born:"532", died:"592" },
  { name:"Jonah and Barachisius", m:3, d:29, short:"Persian brothers martyred under King Shapur II for encouraging imprisoned Christians not to apostatize; subjected to elaborate tortures before their deaths.", tags:["martyr"], died:"327" },
  { name:"John Climacus", m:3, d:30, short:"Sixth-century monk of Mt. Sinai who wrote The Ladder of Divine Ascent, one of the most influential spiritual works of Eastern Christianity.", tags:["monk","writer","mystic"], born:"c.579", died:"c.649" },
  { name:"Benjamin of Persia", m:3, d:31, short:"Persian deacon martyred under Yazdegerd II for refusing to stop preaching the Gospel after being released from a year's imprisonment.", tags:["deacon","martyr"], died:"424" },

  // APRIL
  { name:"Hugh of Grenoble", m:4, d:1, short:"Bishop of Grenoble who welcomed St. Bruno and his companions and granted them the land that became the Grande Chartreuse; bishop for 52 years despite wanting to resign.", tags:["bishop","confessor"], born:"1053", died:"1132" },
  { name:"Francis of Paola", m:4, d:2, short:"Italian hermit who founded the Order of Minims—the 'least' of religious—and was renowned for his austerity, miracles, and prophetic gifts.", tags:["founder","hermit"], p:"seafarers, naval officers, Calabria", born:"1416", died:"1507" },
  { name:"Richard of Chichester", m:4, d:3, short:"Bishop of Chichester who resisted royal pressure, championed the poor, and is remembered for his prayer asking to know, love, and follow Christ more clearly.", tags:["bishop","confessor"], born:"c.1197", died:"1253" },
  { name:"Isidore of Seville", m:4, d:4, short:"Archbishop of Seville, Doctor of the Church, and encyclopedist whose Etymologiae attempted to preserve all ancient knowledge and shaped medieval education.", tags:["bishop","doctor","scholar"], p:"internet, computers, students", born:"c.560", died:"636" },
  { name:"Vincent Ferrer", m:4, d:5, short:"Spanish Dominican preacher whose fervent missions across Europe converted thousands and were confirmed by extraordinary miracles; proclaimed the imminence of judgment.", tags:["priest","dominican","missionary"], p:"builders, plumbers", born:"1350", died:"1419" },
  { name:"William of Aebelholt", m:4, d:6, short:"French-born Augustinian canon who became abbot of Aebelholt in Denmark, reformed Danish monasticism, and was renowned for miraculous healings.", tags:["abbot","reformer"], born:"c.1127", died:"1203" },
  { name:"John Baptist de la Salle", m:4, d:7, short:"Founder of the Brothers of the Christian Schools who revolutionized education by teaching vernacular languages, training teachers, and establishing free schools for the poor.", tags:["priest","founder","educator"], p:"teachers", born:"1651", died:"1719" },
  { name:"Julie Billiart", m:4, d:8, short:"French founder of the Sisters of Notre Dame de Namur who served the poor through education; miraculously healed of paralysis during a novena to the Sacred Heart.", tags:["founder","educator"], born:"1751", died:"1816" },
  { name:"Hugh of Rouen", m:4, d:9, short:"Archbishop of Rouen and simultaneously bishop of Paris and abbot of Fontenelle, a pluralist reforming bishop of the Carolingian era.", tags:["bishop","abbot"], died:"730" },
  { name:"Fulbert of Chartres", m:4, d:10, short:"Bishop of Chartres and scholar who rebuilt the cathedral after fire, wrote hymns to the Virgin Mary, and was one of the leading intellectuals of his age.", tags:["bishop","scholar"], born:"c.952", died:"1028" },
  { name:"Stanislaus of Kraków", m:4, d:11, short:"Bishop of Kraków martyred by King Bolesław II for rebuking the king's injustices; patron of Poland and symbol of the Church's moral authority over civil rulers.", tags:["bishop","martyr"], p:"Poland, moral order", born:"1030", died:"1079" },
  { name:"Julius I", m:4, d:12, short:"Pope who championed the cause of St. Athanasius and Nicene orthodoxy against the Arians, and established the authority of Rome as an appellate court for bishops.", tags:["pope","confessor"], died:"352" },
  { name:"Martin I", m:4, d:13, short:"Pope who condemned Monothelitism at the Lateran Council of 649, was arrested by Emperor Constans II, exiled to Crimea, and died of mistreatment—the last pope venerated as a martyr.", tags:["pope","martyr"], died:"655" },
  { name:"Tiburce and Valerian", m:4, d:14, short:"Roman martyrs whose Acts depict them as the husband and brother-in-law of St. Cecilia, converted by her faith and martyred for burying Christian dead.", tags:["martyr"], died:"c.229" },
  { name:"Damien of Molokai", m:4, d:15, short:"Belgian Sacred Hearts priest who voluntarily joined the leprosy colony on Molokai, eventually contracting leprosy himself, and gave the sufferers dignity and faith.", tags:["priest","missionary","nurse"], p:"leprosy patients, outcasts, Hawaii", born:"1840", died:"1889" },
  { name:"Bernadette Soubirous", m:4, d:16, short:"Fourteen-year-old miller's daughter of Lourdes who received eighteen apparitions of the Virgin Mary in 1858, later becoming a Sister of Notre Dame at Nevers.", tags:["visionary","religious"], p:"illness, poverty, Lourdes", born:"1844", died:"1879" },
  { name:"Robert Bellarmine", m:4, d:17, short:"Jesuit cardinal and Doctor of the Church who wrote the definitive Catholic response to Protestant theology and defended the rights of conscience against secular power.", tags:["cardinal","doctor","jesuit"], p:"catechists, canon lawyers", born:"1542", died:"1621" },
  { name:"Apollonius the Apologist", m:4, d:18, short:"Roman senator and Christian apologist who delivered a brilliant defense of the faith before the Senate before being martyred under Commodus around 185 AD.", tags:["martyr","apologist"], died:"c.185" },
  { name:"Alphege of Canterbury", m:4, d:19, short:"Archbishop of Canterbury taken hostage by Vikings who refused to allow his ransom be paid from the poor and was pelted to death with ox bones.", tags:["bishop","martyr"], born:"954", died:"1012" },
  { name:"Agnes of Montepulciano", m:4, d:20, short:"Dominican nun who became prioress at thirteen through special papal dispensation, was favored with mystical experiences, and worked miracles during her lifetime.", tags:["abbess","virgin","mystic","dominican"], born:"1268", died:"1317" },
  { name:"Anselm of Canterbury", m:4, d:21, short:"Benedictine archbishop and Doctor of the Church whose Proslogion contains the ontological argument for God's existence; also wrote Cur Deus Homo on the Atonement.", tags:["bishop","doctor","theologian","monk"], p:"understanding faith", born:"1033", died:"1109" },
  { name:"Theodore of Sykeon", m:4, d:22, short:"Byzantine monk and bishop of Anastasioupolis who was a prominent miracle-worker and ascetic, widely venerated in the Eastern Church.", tags:["bishop","monk","mystic"], born:"c.540", died:"613" },
  { name:"George the Martyr", m:4, d:23, short:"Soldier-martyr venerated throughout the Christian world since at least the fourth century; patron of England, known for the legendary dragon-slaying allegory of faith overcoming evil.", tags:["martyr","soldier"], p:"England, soldiers, scouts, skin diseases", died:"c.303" },
  { name:"Fidelis of Sigmaringen", m:4, d:24, short:"Capuchin priest, lawyer-turned-friar, and proto-martyr of the Congregation for the Propagation of the Faith, killed by Swiss Zwinglians while preaching in 1622.", tags:["martyr","capuchin","priest"], p:"lawyers", born:"1578", died:"1622" },
  { name:"Mark the Evangelist", m:4, d:25, short:"Author of the second Gospel and companion of Peter and Paul; tradition holds he founded the Church in Alexandria and was martyred there.", tags:["evangelist","martyr","apostolic"], p:"Venice, lawyers, notaries, opticians", died:"c.68" },
  { name:"Cletus", m:4, d:26, short:"Third bishop of Rome after Peter and Linus, traditionally martyred and venerated as a saint since the earliest centuries of the Church.", tags:["pope","martyr"], died:"c.92" },
  { name:"Zita of Lucca", m:4, d:27, short:"Italian domestic servant who gave away her master's food to the poor and was repaid with miracles; patroness of domestic workers and those who lose keys.", tags:["lay","confessor"], p:"domestic servants, lost keys", born:"1218", died:"1272" },
  { name:"Louis Marie de Montfort", m:4, d:28, short:"French priest and founder of the Montfortians whose True Devotion to Mary profoundly influenced Marian spirituality and was beloved by John Paul II.", tags:["priest","founder","writer"], p:"missionaries of the poor", born:"1673", died:"1716" },
  { name:"Catherine of Siena", m:4, d:29, short:"Dominican tertiary, Doctor of the Church, co-patron of Europe who urged Pope Gregory XI to return to Rome from Avignon and wrote the mystical Dialogue.", tags:["virgin","doctor","mystic","dominican"], p:"Italy, Europe, fire prevention, nursing", born:"1347", died:"1380" },
  { name:"Pius V", m:4, d:30, short:"Dominican pope who implemented the Council of Trent, standardized the Roman Rite Mass, organized the Holy League, and excommunicated Elizabeth I of England.", tags:["pope","dominican","reformer"], born:"1504", died:"1572" },

  // MAY
  { name:"Joseph the Worker", m:5, d:1, short:"Feast instituted by Pius XII in 1955 honoring St. Joseph as model of the working man, set on May Day to provide a Christian response to Labor Day celebrations.", tags:["feast","patriarch"], p:"workers, craftsmen" },
  { name:"Athanasius of Alexandria", m:5, d:2, short:"Bishop of Alexandria and Doctor of the Church who spent 17 of his 45 years as bishop in exile for his unwavering defense of Nicene faith against Arianism—'Athanasius contra mundum.'", tags:["bishop","doctor"], p:"theologians", born:"c.296", died:"373" },
  { name:"Philip the Apostle", m:5, d:3, short:"One of the first disciples called by Jesus who brought Nathanael to Christ; asked Jesus 'show us the Father' at the Last Supper and is believed to have been crucified.", tags:["apostle","martyr"], p:"Luxembourg, pastry chefs, hatters", died:"c.80" },
  { name:"James the Lesser", m:5, d:3, short:"'Brother of the Lord' and first Bishop of Jerusalem who was thrown from the Temple and beaten to death; his Letter is one of the oldest New Testament writings.", tags:["apostle","bishop","martyr"], p:"dying people, fullers", died:"62" },
  { name:"Florian of Austria", m:5, d:4, short:"Roman officer martyred in 304 AD who is invoked against fire and floods; patron of Austria, Poland, and firefighters.", tags:["martyr","soldier"], p:"firefighters, Austria, Poland", died:"304" },
  { name:"Hilary of Arles (May)", m:5, d:5, short:"(See Feb 28.) Kept additionally on this date in some calendars.", tags:["bishop"], born:"c.401", died:"449" },
  { name:"Marian and James of Numidia", m:5, d:6, short:"Numidian martyrs—a lector and a deacon—whose detailed passion account describes their imprisonment, prophetic visions, and martyrdom in 259 under Valerian.", tags:["martyr"], died:"259" },
  { name:"Rose Venerini", m:5, d:7, short:"Italian founder of the Venerini Sisters who opened the first free public school for girls in Italy and pioneered women's education in the Papal States.", tags:["founder","educator"], born:"1656", died:"1728" },
  { name:"Peter of Tarentaise", m:5, d:8, short:"Cistercian monk and Archbishop of Tarentaise who cared for the poor with remarkable charity, fled his see to avoid honors, and was forced back by papal command.", tags:["bishop","monk","cistercian"], born:"c.1102", died:"1175" },
  { name:"Pachomius the Great", m:5, d:9, short:"Egyptian monk and founder of cenobitic monasticism who established the first monastic community with a formal rule, precursor to all Western religious orders.", tags:["monk","abbot","founder"], p:"monastic life", born:"c.292", died:"348" },
  { name:"Damien of Molokai (May)", m:5, d:10, short:"(See Apr 15. Feast on this date in the General Calendar after 2009.)", tags:["priest","missionary"], born:"1840", died:"1889" },
  { name:"Ignatius of Laconi", m:5, d:11, short:"Sardinian Capuchin lay brother who spent 40 years as a questor, begging for the friary, known for his gentle charity and prophetic gifts.", tags:["brother","capuchin"], born:"1701", died:"1781" },
  { name:"Pancras of Rome", m:5, d:12, short:"Roman teenager martyred for his faith around age 14; his basilica was one of the seven principal churches of Rome and his name was given to a London district.", tags:["martyr"], died:"c.304" },
  { name:"Nereus and Achilleus", m:5, d:12, short:"Roman soldiers martyred for refusing military service after their Christian conversion; buried near St. Domitilla in the catacombs bearing her name.", tags:["martyr","soldier"], died:"c.100" },
  { name:"Our Lady of Fatima", m:5, d:13, short:"Commemoration of the first Marian apparition to the three shepherd children of Fatima, Portugal, on May 13, 1917, with the message of prayer and penance.", tags:["mary","apparition","feast"] },
  { name:"Matthias (alternate)", m:5, d:14, short:"Feast of the Apostle Matthias kept in some Western calendars on this date; chosen to replace Judas Iscariot among the Twelve.", tags:["apostle","martyr"] },
  { name:"Isidore the Farmer", m:5, d:15, short:"Spanish peasant laborer whose entire life of agricultural work was shot through with prayer; angels reportedly plowed his fields while he attended Mass.", tags:["lay","confessor"], p:"farmers, rural communities, Madrid", born:"c.1070", died:"1130" },
  { name:"Andrew Bobola", m:5, d:16, short:"Polish Jesuit priest who reconverted Ruthenians to Catholicism and was captured and tortured to death by Cossacks in 1657, canonized in 1938.", tags:["martyr","jesuit"], p:"Poland", born:"1591", died:"1657" },
  { name:"Paschal Baylon", m:5, d:17, short:"Franciscan lay brother of Spain whose intense Eucharistic adoration and loving humility led to his designation as patron of Eucharistic congresses and associations.", tags:["brother","franciscan"], p:"Eucharistic congresses and associations", born:"1540", died:"1592" },
  { name:"John I", m:5, d:18, short:"Pope who died in the prison of Theodoric the Ostrogoth after an embassy to Constantinople, venerated as a martyr.", tags:["pope","martyr"], died:"526" },
  { name:"Celestine V", m:5, d:19, short:"Benedictine hermit elected pope at 85 who resigned after five months—the only voluntary papal resignation before Benedict XVI—and was promptly imprisoned by his successor.", tags:["pope","monk","hermit"], born:"c.1215", died:"1296" },
  { name:"Bernardine of Siena", m:5, d:20, short:"Franciscan friar whose fiery preaching across Italy revived Catholic devotion and promoted the Holy Name of Jesus, which he displayed on the IHS monogram.", tags:["priest","franciscan","preacher"], p:"advertisers, public relations, communication workers", born:"1380", died:"1444" },
  { name:"Christopher Magallanes", m:5, d:21, short:"Mexican parish priest and one of the twenty-five Cristero martyrs, executed in 1927 without trial during the Calles persecution, canonized in 2000.", tags:["martyr","priest"], p:"Mexico", born:"1869", died:"1927" },
  { name:"Rita of Cascia", m:5, d:22, short:"Augustinian widow-nun of Umbria who bore a thorn from the Crown of Christ in her forehead and spent years of suffering in union with the Passion; patron of impossible causes.", tags:["abbess","widow","mystic"], p:"impossible causes, wounds, sickness", born:"1381", died:"1457" },
  { name:"John Baptist de Rossi", m:5, d:23, short:"Roman priest who devoted himself to the sick, prisoners, and homeless in Rome, sleeping near patients in hospitals to be available for last rites.", tags:["priest","confessor"], born:"1698", died:"1764" },
  { name:"Our Lady Help of Christians", m:5, d:24, short:"Marian feast celebrated especially in Australia and the Salesian tradition, commemorating Mary's intercession for the Church; instituted by Pius VII after his release from Napoleonic captivity.", tags:["mary","feast"] },
  { name:"Mary Magdalene de' Pazzi", m:5, d:25, short:"Florentine Carmelite nun who experienced extraordinary mystical states including ecstasies, visions, and 40 days without food, and whose incorrupt body is venerated in Florence.", tags:["virgin","mystic","carmelite"], born:"1566", died:"1607" },
  { name:"Philip Neri", m:5, d:26, short:"Florentine priest called the 'Apostle of Rome' who founded the Oratory, was famous for his joy and humor, and served the poor and pilgrims of Rome for decades.", tags:["priest","founder"], p:"Rome, United States Army special forces", born:"1515", died:"1595" },
  { name:"Augustine of Canterbury", m:5, d:27, short:"Benedictine monk sent by Gregory the Great to evangelize England who baptized King Ethelbert and became the first Archbishop of Canterbury.", tags:["bishop","monk","missionary"], p:"England", died:"604" },
  { name:"Germain of Paris", m:5, d:28, short:"Bishop of Paris who promoted monastic ideals, founded abbeys, and interceded for the poor before the Merovingian king; the Saint-Germain-des-Prés quarter bears his name.", tags:["bishop","founder"], born:"496", died:"576" },
  { name:"Bona of Pisa", m:5, d:29, short:"Pisan pilgrim who made multiple journeys to Compostela and the Holy Land as a guide for other pilgrims, canonized in 1962 and named patron of air hostesses.", tags:["lay","pilgrim"], p:"flight attendants, travelers", born:"c.1156", died:"c.1207" },
  { name:"Joan of Arc", m:5, d:30, short:"French peasant girl who, guided by heavenly voices, led French armies to victory at Orléans and secured the coronation of Charles VII before being burned at the stake at 19.", tags:["virgin","martyr"], p:"France, soldiers, prisoners, women who have been abused", born:"c.1412", died:"1431" },
  { name:"Petronilla", m:5, d:31, short:"Roman martyr honored since the second century in the catacomb of Domitilla; early tradition made her a daughter of St. Peter, though this is legendary.", tags:["virgin","martyr"], died:"1st century" },

  // JUNE
  { name:"Justin Martyr", m:6, d:1, short:"Second-century Greek philosopher who converted to Christianity and wrote the first sustained philosophical defense of the faith, martyred in Rome around 165 AD.", tags:["martyr","apologist"], p:"philosophers, lecturers", born:"c.100", died:"c.165" },
  { name:"Marcellinus and Peter", m:6, d:2, short:"Roman priest and exorcist martyred together under Diocletian; Constantine himself venerated their tomb and built a basilica over it on the Via Labicana.", tags:["martyr","priest"], died:"304" },
  { name:"Charles Lwanga", m:6, d:3, short:"Leader of the Uganda Martyrs—twenty-two young men martyred by King Mwanga in 1886 for refusing his immoral advances; canonized 1964.", tags:["martyr"], p:"youth, African Catholic youth", born:"c.1860", died:"1886" },
  { name:"Francis Caracciolo", m:6, d:4, short:"Italian nobleman and co-founder of the Minor Clerks Regular who dedicated himself to adoration of the Blessed Sacrament and care of the poor and prisoners.", tags:["priest","founder"], born:"1563", died:"1608" },
  { name:"Boniface of Mainz", m:6, d:5, short:"Anglo-Saxon Benedictine monk and 'Apostle of the Germans' who organized the German Church, reformed the Frankish Church, and was martyred in Frisia while confirming converts.", tags:["bishop","martyr","missionary","monk"], p:"Germany, tailors, brewers", born:"c.675", died:"754" },
  { name:"Norbert of Xanten", m:6, d:6, short:"German nobleman converted by a lightning strike who founded the Norbertine (Premonstratensian) canons, reformed clerical life, and became Archbishop of Magdeburg.", tags:["bishop","founder"], p:"Bohemia, invoked against fever", born:"c.1080", died:"1134" },
  { name:"Anne of St. Bartholomew", m:6, d:7, short:"Spanish Carmelite lay sister, companion of Teresa of Ávila, who held the dying Teresa in her arms and later defended Carmelite convents in France and the Low Countries.", tags:["religious","mystic","carmelite"], born:"1549", died:"1626" },
  { name:"Medard of Noyon", m:6, d:8, short:"Bishop of Noyon in the sixth century whose feast day, like Groundhog Day, is associated with weather prediction in French folklore.", tags:["bishop"], born:"c.456", died:"c.545" },
  { name:"Ephrem the Syrian", m:6, d:9, short:"Deacon and Doctor of the Church at Nisibis and Edessa whose thousands of Syriac hymns and theological poems earned him the title 'Harp of the Holy Spirit.'", tags:["deacon","doctor","poet"], p:"spiritual directors, Armenia", born:"c.306", died:"373" },
  { name:"Getulius of Tivoli", m:6, d:10, short:"Roman officer martyred with his companions for refusing to abandon Christianity, one of the martyrs venerated in the early Roman liturgy.", tags:["martyr","soldier"], died:"c.120" },
  { name:"Barnabas the Apostle", m:6, d:11, short:"Levite from Cyprus and companion of Paul who introduced him to the apostles; the 'son of consolation' who separated from Paul over John Mark and evangelized Cyprus.", tags:["apostle","missionary"], p:"Cyprus, Antioch", died:"c.61" },
  { name:"Eskil of Sweden", m:6, d:12, short:"English missionary bishop in Sweden martyred by pagans for overthrowing an idol during a sacrificial feast; venerated as proto-martyr of Sweden.", tags:["bishop","martyr","missionary"], died:"c.1080" },
  { name:"Anthony of Padua", m:6, d:13, short:"Franciscan friar and Doctor of the Church, 'Hammer of Heretics,' whose preaching in France and Italy won back countless lapsed Catholics and whose relics draw millions to Padua.", tags:["priest","doctor","franciscan"], p:"lost items, the poor, sterility, travelers, elderly people", born:"1195", died:"1231" },
  { name:"Elisha the Prophet", m:6, d:14, short:"Old Testament prophet and successor of Elijah whose miraculous deeds foreshadow the sacraments; celebrated in the Roman Martyrology.", tags:["prophet"], died:"c.800 BC" },
  { name:"Vitus", m:6, d:15, short:"Child martyr of the Diocletianic persecution invoked against epilepsy and chorea ('St. Vitus' Dance'); patron of Bohemia and one of the Fourteen Holy Helpers.", tags:["martyr"], p:"Bohemia, dancers, epilepsy, dogs", died:"c.303" },
  { name:"Aurelian of Arles", m:6, d:16, short:"Archbishop of Arles who founded two monasteries with rules influenced by Caesarius of Arles and Benedict, bridging Eastern and Benedictine monasticism.", tags:["bishop","founder"], died:"551" },
  { name:"Albert Chmielowski", m:6, d:17, short:"Polish painter who became a Franciscan tertiary, gave away everything, and founded the Brothers and Sisters of the Third Order of St. Francis to serve the destitute.", tags:["founder","lay"], p:"Poland, the poor", born:"1845", died:"1916" },
  { name:"Gregory Barbarigo", m:6, d:18, short:"Cardinal-bishop of Padua who founded a seminary with an outstanding library and printing press for missionary work, and was a model pastor at the time of the Counter-Reformation.", tags:["cardinal","bishop"], born:"1625", died:"1697" },
  { name:"Romuald of Ravenna", m:6, d:19, short:"Benedictine reformer who founded the Camaldolese order combining the cenobitic and eremitic life, and spent his life establishing hermitages and monastic communities.", tags:["monk","founder","hermit"], born:"c.951", died:"1027" },
  { name:"Silverius", m:6, d:20, short:"Pope who was deposed and exiled by the Byzantine Empress Theodora for refusing to restore the Monophysite patriarch Anthimus, dying in exile on the island of Ponza.", tags:["pope","martyr"], died:"537" },
  { name:"Aloysius Gonzaga", m:6, d:21, short:"Jesuit scholastic who renounced a princely inheritance to enter religious life, and died at 23 nursing plague victims; patron of youth and AIDS patients.", tags:["religious","jesuit","youth"], p:"youth, AIDS patients, Jesuit students", born:"1568", died:"1591" },
  { name:"Paulinus of Nola", m:6, d:22, short:"Roman senator turned monk, bishop, and poet who gave away his vast wealth, wrote hymns for the consecration of churches, and is credited with inventing church bells.", tags:["bishop","poet","monk"], p:"bells, campanologists, Campania", born:"354", died:"431" },
  { name:"John Fisher", m:6, d:22, short:"Cardinal-bishop of Rochester who refused to acknowledge Henry VIII as head of the Church of England and was beheaded on Tower Hill.", tags:["bishop","cardinal","martyr"], p:"bishops", born:"1469", died:"1535" },
  { name:"Thomas More", m:6, d:22, short:"Lord Chancellor of England, humanist scholar, and family man who died rather than swear an oath denying the Pope's authority; 'the king's good servant, but God's first.'", tags:["martyr","layman"], p:"lawyers, politicians, civil servants", born:"1478", died:"1535" },
  { name:"Etheldreda of Ely", m:6, d:23, short:"Anglo-Saxon queen who remained a virgin through two marriages, became a nun, and founded the double monastery of Ely, one of the great English abbeys.", tags:["abbess","virgin","queen"], born:"c.636", died:"679" },
  { name:"Birth of John the Baptist", m:6, d:24, short:"Solemnity celebrating the birth of the Forerunner of Christ, the only saint other than Mary whose birthday (rather than feast day) is celebrated liturgically.", tags:["feast","solemnity","prophet"] },
  { name:"William of Vercelli", m:6, d:25, short:"Italian hermit who founded Monte Vergine abbey and the Williamite congregation, combining Benedictine and eremitic ideals in the mountains of Campania.", tags:["abbot","founder","hermit"], born:"1085", died:"1142" },
  { name:"Josemaria Escriva", m:6, d:26, short:"Spanish priest and founder of Opus Dei who taught that ordinary professional work and daily life can be means of personal sanctification and apostolate.", tags:["priest","founder"], p:"people seeking God in ordinary life", born:"1902", died:"1975" },
  { name:"Cyril of Alexandria", m:6, d:27, short:"Patriarch of Alexandria and Doctor of the Church who championed the title Theotokos for the Virgin Mary at the Council of Ephesus against Nestorius.", tags:["bishop","doctor","theologian"], born:"c.376", died:"444" },
  { name:"Irenaeus of Lyon", m:6, d:28, short:"Bishop of Lyon and first great systematic theologian of Christianity whose Against Heresies refuted Gnosticism and articulated the apostolic tradition as criterion of truth.", tags:["bishop","doctor","theologian","martyr"], born:"c.130", died:"c.202" },
  { name:"Peter and Paul", m:6, d:29, short:"Solemnity of the two great pillars of the Church: Peter the fisherman, first Pope, crucified upside down in Rome; and Paul the Apostle to the Gentiles, beheaded on the Ostian Way.", tags:["apostle","martyr","solemnity"], p:"fishermen, Rome, papacy" },
  { name:"First Martyrs of Rome", m:6, d:30, short:"Commemoration of the Christians burned alive by Nero in 64 AD after the Great Fire of Rome—the first organized persecution of Christians by the Roman state.", tags:["martyr","feast"], died:"64" },

  // JULY
  { name:"Junipero Serra", m:7, d:1, short:"Franciscan friar and founder of the California mission chain who baptized thousands of Native Americans; canonized 2015 amid controversy over mission-era abuses.", tags:["priest","franciscan","missionary"], p:"California, vocations", born:"1713", died:"1784" },
  { name:"Bernardine Realino", m:7, d:2, short:"Italian Jesuit of noble birth who served the poor of Lecce for forty years, becoming the city's patron and performing many miraculous healings.", tags:["priest","jesuit"], born:"1530", died:"1616" },
  { name:"Thomas the Apostle", m:7, d:3, short:"Apostle who doubted the Resurrection until Christ appeared and invited him to touch his wounds; tradition holds he evangelized India, where the Thomas Christians venerate him.", tags:["apostle","martyr"], p:"India, architects, blind people, construction workers", died:"c.72" },
  { name:"Elizabeth of Portugal", m:7, d:4, short:"Portuguese queen who used her personal fortune to broker peace between warring kingdoms, founded hospitals, and retired to a Poor Clare convent after her husband's death.", tags:["queen","tertiary","widow"], p:"Coimbra, victims of jealousy, brides", born:"1271", died:"1336" },
  { name:"Anthony Zaccaria", m:7, d:5, short:"Milanese physician turned priest who founded the Barnabites (Clerks Regular of St. Paul) to promote the Pauline spirit of apostolic charity and reformation.", tags:["priest","founder"], born:"1502", died:"1539" },
  { name:"Maria Goretti", m:7, d:6, short:"Eleven-year-old Italian girl who was stabbed to death for resisting her attacker's advances; she forgave him before she died, and he later converted and testified at her canonization.", tags:["virgin","martyr"], p:"youth, teenage girls, rape victims, purity", born:"1890", died:"1902" },
  { name:"Willibald of Eichstätt", m:7, d:7, short:"Anglo-Saxon monk, nephew of Boniface, first bishop of Eichstätt, and the first English pilgrim whose account of a Holy Land journey has been preserved.", tags:["bishop","pilgrim","monk"], born:"700", died:"787" },
  { name:"Kilian of Würzburg", m:7, d:8, short:"Irish missionary bishop who evangelized Franconia and was martyred for telling Duke Gozbert his marriage to his brother's widow was unlawful.", tags:["bishop","martyr","missionary"], p:"Franconia, gout, whitewash makers", died:"689" },
  { name:"Veronica Giuliani", m:7, d:9, short:"Capuchin Poor Clare abbess of Città di Castello who received the stigmata and whose mystical experiences were documented by her confessor and confirmed by medical examination.", tags:["abbess","mystic","stigmatic"], born:"1660", died:"1727" },
  { name:"The Seven Brothers", m:7, d:10, short:"Seven sons of St. Felicity, martyred in Rome under Antoninus Pius; their Passio, though largely legendary, inspired Christian mothers facing persecution.", tags:["martyr"], died:"c.150" },
  { name:"Benedict of Nursia", m:7, d:11, short:"Father of Western monasticism whose Rule of St. Benedict shaped European civilization through twelve centuries of Benedictine monasteries, schools, and cultural preservation.", tags:["abbot","founder","monk"], p:"Europe, students, monks, farmers, speleologists", born:"c.480", died:"c.547" },
  { name:"John Gualbert", m:7, d:12, short:"Florentine nobleman who forgave his brother's murderer on Good Friday, became a Benedictine, and founded the Vallombrosan Congregation dedicated to poverty and prayer.", tags:["abbot","founder","monk"], p:"foresters, park rangers", born:"c.985", died:"1073" },
  { name:"Henry II", m:7, d:13, short:"Holy Roman Emperor who governed with justice and piety, founded Bamberg Cathedral, supported the Church's reform movement, and died without heirs, leaving his empire to God.", tags:["emperor","confessor"], born:"972", died:"1024" },
  { name:"Kateri Tekakwitha", m:7, d:14, short:"Mohawk-Algonquin woman who converted at 20, endured persecution from her tribe, and practiced heroic penance; first Native American saint, canonized 2012.", tags:["virgin","confessor"], p:"Native Americans, ecology, environment", born:"1656", died:"1680" },
  { name:"Bonaventure", m:7, d:15, short:"Franciscan friar, cardinal, and Doctor of the Church known as the 'Seraphic Doctor' who wrote The Mind's Road to God and led the Franciscans through a critical period.", tags:["cardinal","doctor","franciscan"], p:"bowel disorders", born:"1221", died:"1274" },
  { name:"Our Lady of Mount Carmel", m:7, d:16, short:"Feast honoring Our Lady's association with Mount Carmel and the Carmelite Order, popularized through the vision of Simon Stock and devotion to the Brown Scapular.", tags:["mary","feast","carmelite"] },
  { name:"Alexis of Rome", m:7, d:17, short:"Fifth-century ascetic who, according to legend, lived as a beggar under the staircase of his own Roman noble family's house for seventeen years, unrecognized.", tags:["hermit","confessor"], died:"c.417" },
  { name:"Camillus de Lellis", m:7, d:18, short:"Italian soldier turned nurse who founded the Ministers of the Sick (Camillians), who wore a red cross—inspiring the modern Red Cross symbol—to serve plague victims.", tags:["priest","founder","nurse"], p:"sick people, hospitals, nurses, doctors", born:"1550", died:"1614" },
  { name:"Macrina the Elder", m:7, d:19, short:"Grandmother of Basil the Great, Gregory of Nyssa, and Peter of Sebaste who preserved and transmitted the faith of Gregory Thaumaturgus through the persecutions.", tags:["confessor","widow"], born:"c.270", died:"c.340" },
  { name:"Elijah the Prophet", m:7, d:20, short:"Old Testament prophet of fire who confronted Ahab and the prophets of Baal on Mt. Carmel and was taken to heaven in a fiery chariot; precursor of John the Baptist.", tags:["prophet","feast"], p:"carmelites, Bosnia" },
  { name:"Lawrence of Brindisi", m:7, d:21, short:"Capuchin friar, cardinal, and Doctor of the Church who knew eight languages, served as papal legate, and led troops against the Turks at Székesfehérvár in 1601.", tags:["cardinal","doctor","capuchin"], born:"1559", died:"1619" },
  { name:"Mary Magdalene", m:7, d:22, short:"Disciple of Jesus from whom seven demons were cast out, faithful at the Cross, and first witness of the Resurrection—'Apostle to the Apostles' as the Fathers call her.", tags:["disciple","confessor","apostolic"], p:"women, penitents, perfumers, hairdressers", died:"1st century" },
  { name:"Bridget of Sweden", m:7, d:23, short:"Swedish mystic, widow, mother of eight, and founder of the Brigittine Order who received the Revelations and called the popes back to Rome from Avignon.", tags:["mystic","founder","widow"], p:"Sweden, Europe, widows, pilgrims", born:"c.1303", died:"1373" },
  { name:"Charbel Makhlouf", m:7, d:24, short:"Lebanese Maronite monk and hermit who spent 23 years in solitary prayer, whose incorrupt body has been the source of miraculous healings since his death in 1898.", tags:["monk","hermit"], p:"Lebanon", born:"1828", died:"1898" },
  { name:"James the Greater", m:7, d:25, short:"Apostle, son of Zebedee, first apostle martyred, and patron of Spain where the cathedral of Santiago de Compostela marks his traditional burial site.", tags:["apostle","martyr"], p:"Spain, pilgrims, knights, horsemen, rheumatism", died:"44" },
  { name:"Joachim and Anne", m:7, d:26, short:"Parents of the Blessed Virgin Mary and maternal grandparents of Jesus Christ; venerated since the fourth century, their names come from tradition rather than Scripture.", tags:["confessor","parent"], p:"grandparents, parents, women in labor", died:"1st century BC" },
  { name:"Aurelius of Carthage", m:7, d:20, short:"Bishop of Carthage who presided over numerous African councils with Augustine and Jerome, steering the Church through the Donatist and Pelagian controversies.", tags:["bishop"], born:"c.350", died:"c.430" },
  { name:"Godelieve of Flanders", m:7, d:6, short:"Flemish noblewoman strangled by agents of her abusive husband; venerated since the eleventh century as a martyr for faith and virtue.", tags:["martyr"], born:"c.1052", died:"1070" },
  { name:"Martha, Mary, and Lazarus", m:7, d:29, short:"Siblings beloved by Jesus in Bethany: Lazarus raised from the dead, Mary who chose the better part, and Martha the model of active charitable service, all feasted together since 2021.", tags:["disciple","confessor"], p:"innkeepers, cooks, servants", died:"1st century" },
  { name:"Peter Chrysologus", m:7, d:30, short:"Archbishop of Ravenna and Doctor of the Church known as the 'Golden Word' for his concise, clear sermons; he urged Eutyches to accept Roman authority in the Monophysite controversy.", tags:["bishop","doctor"], born:"c.380", died:"c.450" },
  { name:"Ignatius of Loyola", m:7, d:31, short:"Basque soldier converted by reading saints' lives while recovering from a cannonball wound, who founded the Society of Jesus (Jesuits) and wrote the Spiritual Exercises.", tags:["priest","founder","jesuit"], p:"Jesuits, soldiers, retreats", born:"1491", died:"1556" },

  // AUGUST
  { name:"Alphonsus Liguori", m:8, d:1, short:"Neapolitan bishop, founder of the Redemptorists, and Doctor of the Church whose moral theology charted a middle way between Jansenist rigorism and laxity.", tags:["bishop","doctor","founder"], p:"confessors, moral theologians", born:"1696", died:"1787" },
  { name:"Eusebius of Vercelli", m:8, d:2, short:"First bishop of Vercelli in northern Italy who was exiled by Emperor Constantius II for opposing Arianism and combining monastic and clerical life.", tags:["bishop","confessor"], born:"c.283", died:"371" },
  { name:"Peter Julian Eymard", m:8, d:2, short:"French priest and founder of the Congregation of the Blessed Sacrament who championed perpetual adoration of the Eucharist and first communion preparation.", tags:["priest","founder"], p:"Eucharistic adoration", born:"1811", died:"1868" },
  { name:"Lydia of Thyatira", m:8, d:3, short:"First European convert of Paul, a dealer in purple cloth at Philippi, whose household was baptized and who hosted the first Christian community in Europe.", tags:["confessor","lay"], died:"1st century" },
  { name:"John Vianney", m:8, d:4, short:"Curé of Ars who spent up to 18 hours a day hearing confessions, drawing hundreds of thousands of pilgrims, battling the devil, and illuminating sin's ugliness and God's mercy.", tags:["priest","confessor","mystic"], p:"parish priests", born:"1786", died:"1859" },
  { name:"Dedication of St. Mary Major", m:8, d:5, short:"Anniversary feast of the Liberian Basilica in Rome, the first church in the West dedicated to the Virgin Mary, built by Pope Sixtus III after the Council of Ephesus.", tags:["feast","mary"] },
  { name:"Transfiguration of the Lord", m:8, d:6, short:"Feast of Christ's Transfiguration on Mt. Tabor before Peter, James, and John, a revelation of his divine glory confirming the disciples' faith before the Passion.", tags:["feast","lord"] },
  { name:"Sixtus II and Companions", m:8, d:7, short:"Pope seized while celebrating Mass in the Valerian persecution and beheaded with four deacons in the cemetery; St. Lawrence was martyred days later.", tags:["pope","martyr"], died:"258" },
  { name:"Dominic de Guzmán", m:8, d:8, short:"Spanish canon who founded the Order of Preachers (Dominicans) to combat the Albigensian heresy through preaching, learning, and holy poverty.", tags:["priest","founder","dominican"], p:"astronomers, scientists, the Dominican Republic", born:"c.1170", died:"1221" },
  { name:"Teresa Benedicta of the Cross", m:8, d:9, short:"Edith Stein—Jewish philosopher, convert, Carmelite nun, and Doctor of the Church—murdered at Auschwitz in 1942; co-patron of Europe.", tags:["martyr","carmelite","doctor"], p:"Europe, converts, loss of parents", born:"1891", died:"1942" },
  { name:"Lawrence of Rome", m:8, d:10, short:"Roman deacon martyred on a gridiron in 258; when asked to deliver the Church's treasure he brought the poor, saying 'These are the treasure of the Church.'", tags:["deacon","martyr"], p:"deacons, cooks, archivists, librarians", died:"258" },
  { name:"Clare of Assisi", m:8, d:11, short:"Founder of the Poor Clares and first woman to write a religious rule; she guarded Assisi from imperial soldiers by holding up the Blessed Sacrament.", tags:["abbess","founder","virgin"], p:"television, eye disease, goldsmiths, embroiderers", born:"1194", died:"1253" },
  { name:"Jane Frances de Chantal", m:8, d:12, short:"French widow and co-founder with Francis de Sales of the Visitation Sisters, who visited the sick and poor and whose order became known for its spiritual direction.", tags:["founder","widow"], p:"widows, forgotten people, parents separated from children", born:"1572", died:"1641" },
  { name:"Pontian and Hippolytus", m:8, d:13, short:"Pope Pontian and the antipope Hippolytus, bitter theological opponents, both condemned to the Sardinian mines by Maximinus Thrax, where they reconciled before dying.", tags:["pope","martyr","priest"], died:"235" },
  { name:"Maximilian Kolbe", m:8, d:14, short:"Polish Franciscan priest who voluntarily took the place of a condemned family man in the Auschwitz starvation bunker, leading his companions in prayer until he died.", tags:["martyr","franciscan","priest"], p:"drug addicts, prisoners, families, journalists", born:"1894", died:"1941" },
  { name:"Assumption of Mary", m:8, d:15, short:"Solemnity defined as dogma by Pius XII in 1950 celebrating the Blessed Virgin Mary's bodily taking up into heavenly glory at the end of her earthly life.", tags:["mary","solemnity","dogma"], p:"the Church" },
  { name:"Stephen of Hungary", m:8, d:16, short:"First Christian king of Hungary who Christianized the Magyars, founded the Church's structure in Hungary, and submitted his kingdom to the Holy See.", tags:["king","confessor"], p:"Hungary, kings, bricklayers", born:"c.975", died:"1038" },
  { name:"Hyacinth of Kraków", m:8, d:17, short:"Polish Dominican friar who evangelized Poland, Lithuania, Russia, Tibet, and China; called the 'Apostle of Poland,' he is said to have fled with the Blessed Sacrament during a Tartar raid.", tags:["priest","dominican","missionary"], p:"Poland", born:"c.1185", died:"1257" },
  { name:"Helena of Constantinople", m:8, d:18, short:"Mother of Emperor Constantine who made a pilgrimage to the Holy Land, built basilicas over the holy sites, and traditionally discovered the True Cross in Jerusalem.", tags:["empress","confessor"], p:"archaeologists, converts, difficult marriages", born:"c.250", died:"c.330" },
  { name:"Ezekiel Moreno", m:8, d:19, short:"Spanish Augustinian Recollect bishop of Pasto, Colombia, renowned for his pastoral charity and mystical gifts; canonized by John Paul II in 1992.", tags:["bishop","augustinian"], born:"1848", died:"1906" },
  { name:"Bernard of Clairvaux", m:8, d:20, short:"Cistercian abbot and Doctor of the Church who made Clairvaux a center of spiritual renewal, preached the Second Crusade, wrote mystical commentaries on the Song of Songs, and shaped medieval Europe.", tags:["abbot","doctor","mystic","cistercian"], p:"Cistercians, bees, candlemakers, wax melters", born:"1090", died:"1153" },
  { name:"Pius X", m:8, d:21, short:"Pope who championed frequent communion, lowered the First Communion age, reformed the liturgy, condemned Modernism, and lived in remarkable personal poverty.", tags:["pope","confessor"], p:"first communicants, pilgrims", born:"1835", died:"1914" },
  { name:"Queenship of Mary", m:8, d:22, short:"Feast instituted by Pius XII in 1954 honoring the Blessed Virgin Mary as Queen of heaven and earth, celebrated eight days after the Assumption.", tags:["mary","feast"] },
  { name:"Rose of Lima", m:8, d:23, short:"Dominican tertiary, first canonized saint of the Americas, who lived a life of severe penance in her Lima garden cell and worked among the poor, sick, and enslaved.", tags:["virgin","tertiary","mystic","dominican"], p:"Americas, Peru, Philippines, florists, gardeners", born:"1586", died:"1617" },
  { name:"Bartholomew the Apostle", m:8, d:24, short:"Apostle identified with Nathanael, praised by Jesus for his honesty; tradition says he evangelized India and Armenia where he was martyred by being flayed alive.", tags:["apostle","martyr"], p:"Armenia, tanners, plasterers, butchers", died:"c.70" },
  { name:"Louis IX of France", m:8, d:25, short:"King of France, Crusader, founder of the Sainte-Chapelle, builder of hospitals and leprosaria, and model of justice, piety, and governance.", tags:["king","confessor","tertiary"], p:"France, crusaders, hairdressers, Carthage", born:"1214", died:"1270" },
  { name:"Zephyrinus", m:8, d:26, short:"Bishop of Rome during the Severan persecutions who faced the theological challenge of Monarchianism; died possibly as a confessor rather than martyr.", tags:["pope","confessor"], died:"217" },
  { name:"Monica of Thagaste", m:8, d:27, short:"North African mother whose decades of prayer, tears, and counsel finally won the conversion of her brilliant but dissolute son, St. Augustine of Hippo.", tags:["widow","confessor"], p:"mothers, wives, abuse victims, difficult marriages", born:"332", died:"387" },
  { name:"Augustine of Hippo", m:8, d:28, short:"Bishop, Father, and Doctor of the Church whose Confessions and City of God shaped Western theology, philosophy, and culture more profoundly than any other after Paul.", tags:["bishop","doctor","theologian"], p:"brewers, printers, theologians, sore eyes", born:"354", died:"430" },
  { name:"Beheading of John the Baptist", m:8, d:29, short:"Feast commemorating the martyrdom of the Forerunner of Christ, beheaded at the request of Salome at the instigation of Herodias; a day of penance in many traditions.", tags:["feast","martyr","prophet"], died:"c.30" },
  { name:"Felix and Adauctus", m:8, d:30, short:"Roman priest martyred under Diocletian; a stranger joined him spontaneously on the way to execution and was beheaded with him, hence 'Adauctus' (the added one).", tags:["martyr","priest"], died:"c.303" },
  { name:"Aidan of Lindisfarne", m:8, d:31, short:"Irish monk from Iona who founded the monastery of Lindisfarne as a base for evangelizing northern England, and whose gentle manner won countless souls.", tags:["bishop","monk","missionary"], p:"Northumbria", born:"c.590", died:"651" },

  // SEPTEMBER
  { name:"Giles", m:9, d:1, short:"Seventh-century hermit of Provence who gave sanctuary to a hunted doe; one of the Fourteen Holy Helpers, patron of the disabled and nursing mothers.", tags:["hermit","confessor"], p:"disabled, nursing mothers, beggars, blacksmiths", died:"c.710" },
  { name:"Stephen of Hungary (Sept.)", m:9, d:2, short:"(Additional commemoration for St. Stephen of Hungary, who died August 15, 1038; kept in Hungarian calendars on this date.)", tags:["king","confessor"], born:"c.975", died:"1038" },
  { name:"Gregory the Great", m:9, d:3, short:"Pope and Doctor of the Church who reformed the liturgy, sent Augustine to England, wrote the Pastoral Rule, Dialogues, and Moralia, and is credited with Gregorian chant.", tags:["pope","doctor","monk"], p:"musicians, singers, popes, teachers, England", born:"c.540", died:"604" },
  { name:"Rosalia of Palermo", m:9, d:4, short:"Twelfth-century hermit of Palermo whose relics, discovered in 1624, ended a plague there; venerated as the city's patron ever since.", tags:["virgin","hermit"], p:"Palermo, plague", born:"c.1130", died:"c.1160" },
  { name:"Teresa of Calcutta", m:9, d:5, short:"Albanian-born founder of the Missionaries of Charity who devoted her life to the 'poorest of the poor' in Calcutta, canonized in 2016 by Pope Francis.", tags:["founder","confessor"], p:"the poor, missionaries of charity", born:"1910", died:"1997" },
  { name:"Bega of Northumbria", m:9, d:6, short:"Irish princess, possibly legendary, who fled to Cumberland to avoid marriage and became a nun; the town of St. Bees is named for her.", tags:["virgin","abbess"], died:"c.660" },
  { name:"Cloud of Metz", m:9, d:7, short:"Frankish prince who renounced the throne after his brothers' murder, became a hermit, and was ordained by St. Medard; an early evangelist of the Seine valley.", tags:["hermit","priest"], born:"c.522", died:"c.560" },
  { name:"Birth of the Virgin Mary", m:9, d:8, short:"Feast celebrating the birth of the Blessed Virgin Mary, observed since the fifth century; one of three birthdays celebrated in the liturgy (the others: John the Baptist and Jesus).", tags:["mary","feast","solemnity"] },
  { name:"Peter Claver", m:9, d:9, short:"Spanish Jesuit who declared himself 'slave of the black slaves forever' and ministered to African captives arriving in Cartagena, baptizing perhaps 300,000 over 40 years.", tags:["priest","jesuit","missionary"], p:"Afro-American missions, Colombia, race relations", born:"1581", died:"1654" },
  { name:"Nicholas of Tolentino", m:9, d:10, short:"Augustinian friar of Tolentino known for his lifelong austerity, his passionate intercession for souls in purgatory, and his miraculous healings.", tags:["friar","confessor","augustinian"], p:"holy souls, dying people, mariners", born:"1245", died:"1305" },
  { name:"Hypatia (Paphnutius)", m:9, d:11, short:"Egyptian bishop of the Upper Thebaid who suffered mutilation under Maximian; a leading figure at Nicaea and defender of Athanasius.", tags:["bishop","confessor"], born:"c.260", died:"c.360" },
  { name:"Name of the Blessed Virgin Mary", m:9, d:12, short:"Feast instituted after the victory at Vienna in 1683 to honor the power of Mary's name invoked in the battle; celebrates the devotion to and meaning of the name 'Mary.'", tags:["mary","feast"] },
  { name:"John Chrysostom", m:9, d:13, short:"Archbishop of Constantinople and Doctor of the Church whose golden preaching ('Chrysostom' means golden-mouthed) and fearless moral correction led to his exile and death.", tags:["bishop","doctor","preacher"], p:"preachers, orators, Constantinople", born:"c.347", died:"407" },
  { name:"Exaltation of the Holy Cross", m:9, d:14, short:"Feast celebrating the recovery of the True Cross from the Persians by Emperor Heraclius in 628 and its return to Jerusalem; a day for venerating the instrument of salvation.", tags:["feast","lord"] },
  { name:"Our Lady of Sorrows", m:9, d:15, short:"Memorial honoring the seven sorrows of the Blessed Virgin Mary, especially her participation in Christ's Passion at the foot of the Cross.", tags:["mary","feast"], p:"the suffering" },
  { name:"Cornelius", m:9, d:16, short:"Pope who insisted on the reconciliation (with penance) of the lapsi—those who had apostatized—and died in exile, counting as a confessor-martyr.", tags:["pope","martyr"], died:"253" },
  { name:"Cyprian of Carthage", m:9, d:16, short:"Bishop of Carthage and Father of the Church who wrote On the Unity of the Church, the De Lapsis, and corresponded with Pope Cornelius on the question of the lapsed.", tags:["bishop","martyr"], born:"c.200", died:"258" },
  { name:"Robert Bellarmine (Sept.)", m:9, d:17, short:"(See April 17.) Feast date of the Doctor of the Church in the General Calendar.", tags:["cardinal","doctor","jesuit"], born:"1542", died:"1621" },
  { name:"Joseph of Cupertino", m:9, d:18, short:"Franciscan friar noted for his extreme simplicity, mystical levitation during prayer, and supernatural knowledge; patron of air travelers, pilots, and test-takers.", tags:["priest","franciscan","mystic"], p:"air travelers, pilots, test-takers, astronauts", born:"1603", died:"1663" },
  { name:"Januarius of Benevento", m:9, d:19, short:"Bishop of Benevento martyred under Diocletian; the liquefaction of his dried blood in Naples three times a year is one of the most famous ongoing miracles in the Church.", tags:["bishop","martyr"], p:"Naples, blood banks", died:"305" },
  { name:"Andrew Kim Taegon", m:9, d:20, short:"First Korean-born Catholic priest, martyred at age 25; one of the 103 Korean Martyrs canonized in 1984 by John Paul II during his visit to Seoul.", tags:["priest","martyr"], p:"Korea", born:"1821", died:"1846" },
  { name:"Matthew the Apostle", m:9, d:21, short:"Tax collector called by Jesus who became an Apostle and Evangelist; author of the first Gospel, he is believed to have been martyred in Ethiopia or Persia.", tags:["apostle","evangelist","martyr"], p:"accountants, bankers, tax collectors, customs agents", died:"c.70" },
  { name:"Thomas of Villanova", m:9, d:22, short:"Augustinian Archbishop of Valencia known for his extraordinary charity to the poor, his brilliant preaching, and his funding of the University of Villanova in Pennsylvania.", tags:["bishop","augustinian"], p:"the poor", born:"1488", died:"1555" },
  { name:"Pio of Pietrelcina", m:9, d:23, short:"Capuchin friar—Padre Pio—who bore the stigmata for 50 years, spent up to 15 hours a day confessing, and whose spiritual fatherhood extended to millions worldwide.", tags:["priest","capuchin","mystic","stigmatic"], p:"civil defense volunteers, stress relief, Pietrelcina", born:"1887", died:"1968" },
  { name:"Our Lady of Walsingham", m:9, d:24, short:"Feast honoring the English Marian shrine of Walsingham where the Virgin Mary appeared to Richeldis de Faverches in 1061, destroyed at the Reformation and restored.", tags:["mary","feast","apparition"], p:"England" },
  { name:"Sergius of Radonezh", m:9, d:25, short:"Russian monk who founded the Trinity Monastery near Moscow and is revered as one of Russia's greatest saints; his blessing strengthened Dmitry Donskoy before the Battle of Kulikovo.", tags:["monk","abbot","founder"], p:"Russia, Moscow", born:"c.1314", died:"1392" },
  { name:"Cosmas and Damian", m:9, d:26, short:"Twin Arab physician-brothers martyred under Diocletian who practiced medicine without fee—'silverless' saints—and are patron saints of medicine.", tags:["martyr","doctor of medicine"], p:"physicians, surgeons, pharmacists, dentists", died:"c.303" },
  { name:"Vincent de Paul", m:9, d:27, short:"French priest who organized charity on a vast scale, founding the Vincentians, the Daughters of Charity, and systems of relief for prisoners, slaves, and the rural poor.", tags:["priest","founder"], p:"charitable societies, volunteers, horses", born:"1581", died:"1660" },
  { name:"Wenceslaus of Bohemia", m:9, d:28, short:"Duke of Bohemia martyred by his brother Boleslav, venerated as the patron of Czechia and immortalized in the Christmas carol as a model of justice and almsgiving.", tags:["prince","martyr"], p:"Bohemia, Czech Republic, brewers", born:"907", died:"935" },
  { name:"Michael, Gabriel, and Raphael", m:9, d:29, short:"Feast of the three named archangels: Michael the warrior, Gabriel the messenger of the Annunciation, and Raphael the healer who guided Tobit.", tags:["archangel","feast"], p:"radiologists, police, military, the sick" },
  { name:"Jerome", m:9, d:30, short:"Father and Doctor of the Church who produced the Vulgate Latin Bible, wrote acerbic commentaries and letters, and spent the last 34 years of his life in a cave at Bethlehem.", tags:["priest","doctor","scholar"], p:"librarians, archivists, translators, Bible scholars", born:"c.342", died:"420" },

  // OCTOBER
  { name:"Therese of Lisieux", m:10, d:1, short:"Carmelite nun who died at 24 and whose 'little way' of spiritual childhood has made her one of the most popular saints; Doctor of the Church and co-patron of the missions.", tags:["virgin","doctor","carmelite"], p:"France, missions, priests, foreign missions, florists, aviators", born:"1873", died:"1897" },
  { name:"Guardian Angels", m:10, d:2, short:"Feast celebrating the personal angels assigned by God to protect and guide each human soul through life, a belief rooted in Scripture and developed by the Fathers.", tags:["angel","feast"] },
  { name:"Thomas of Hereford", m:10, d:3, short:"Bishop of Hereford who championed the poor and clergy against King Edward I of England and was canonized in 1320; his tomb became a major English pilgrimage site.", tags:["bishop","confessor"], born:"c.1218", died:"1282" },
  { name:"Francis of Assisi", m:10, d:4, short:"Founder of the Friars Minor, deacon, stigmatist, and poet whose radical embrace of Lady Poverty and fraternal love of all creation made him the most beloved saint after Mary.", tags:["friar","founder","deacon","franciscan"], p:"ecology, animals, merchants, Italy, stowaways", born:"c.1182", died:"1226" },
  { name:"Flora of Beaulieu", m:10, d:5, short:"French mystic of the Hospitallers of St. John of Jerusalem who experienced the passive night of the soul for years and received mystical graces in the last years of her life.", tags:["religious","mystic"], born:"c.1309", died:"1347" },
  { name:"Bruno of Cologne", m:10, d:6, short:"German canon who founded the Carthusian order at the Grande Chartreuse in 1084, the strictest and most austere of all religious orders, which has never been reformed as it has never been deformed.", tags:["founder","monk","hermit"], born:"c.1030", died:"1101" },
  { name:"Our Lady of the Rosary", m:10, d:7, short:"Feast instituted after the victory at Lepanto (1571) in thanksgiving to Our Lady; celebrates the Rosary as the most popular Marian devotion of the Church.", tags:["mary","feast"], p:"rosary devotees" },
  { name:"Simeon the Stylite the Younger", m:10, d:8, short:"Sixth-century Syrian ascetic who spent 68 years living on a pillar on Wondrous Mountain near Antioch, where he received pilgrims and dictated letters to rulers.", tags:["hermit","monk"], born:"521", died:"597" },
  { name:"Denis of Paris", m:10, d:9, short:"First Bishop of Paris, martyred on Montmartre ('Hill of Martyrs'); according to legend he carried his severed head to the site of his burial, now the Basilica of Saint-Denis.", tags:["bishop","martyr"], p:"France, headaches, rabies", died:"c.250" },
  { name:"John Leonardi", m:10, d:9, short:"Italian priest who founded the Clerks Regular of the Mother of God and helped establish the Congregation for the Propagation of the Faith.", tags:["priest","founder"], born:"1541", died:"1609" },
  { name:"Paulinus of York", m:10, d:10, short:"Roman monk sent to accompany Ethelburga to Northumbria who baptized King Edwin at York and became the first Archbishop of York.", tags:["bishop","missionary","monk"], died:"644" },
  { name:"Mary of the Incarnation (Guyard)", m:10, d:11, short:"French Ursuline mystic, widow, and missionary who sailed to New France in 1639 and founded the first school for Indigenous girls in Quebec.", tags:["religious","mystic","missionary","widow"], born:"1599", died:"1672" },
  { name:"Wilfrid of York", m:10, d:12, short:"Anglo-Saxon bishop who championed Roman over Celtic custom at the Synod of Whitby (664) and became the most powerful churchman in seventh-century England.", tags:["bishop","confessor"], born:"634", died:"709" },
  { name:"Edward the Confessor", m:10, d:13, short:"Last Anglo-Saxon king before the Conquest, known for his piety, justice, and humility; he rebuilt Westminster Abbey and was canonized in 1161.", tags:["king","confessor"], born:"c.1003", died:"1066" },
  { name:"Callistus I", m:10, d:14, short:"Pope who governed during the Severan controversy, offered mercy to adulterers and apostates who repented, and was attacked for laxity by Hippolytus and Tertullian.", tags:["pope","martyr"], died:"222" },
  { name:"Teresa of Avila", m:10, d:15, short:"Carmelite reformer, Doctor of the Church, and mystical writer whose The Interior Castle and The Way of Perfection remain classics of Christian spirituality.", tags:["virgin","doctor","mystic","carmelite","founder"], p:"headache sufferers, those ridiculed for piety, Spain", born:"1515", died:"1582" },
  { name:"Hedwig of Silesia", m:10, d:16, short:"Duchess of Silesia and Poland who used her position to found hospitals and a Cistercian convent, and practiced severe personal penance while governing wisely.", tags:["duchess","widow","tertiary"], p:"Silesia, brides, widows", born:"c.1174", died:"1243" },
  { name:"Margaret Mary Alacoque", m:10, d:16, short:"Visitation nun of Paray-le-Monial who received the revelations of the Sacred Heart of Jesus that launched the worldwide devotion, canonized in 1920.", tags:["religious","mystic","visionary"], p:"Sacred Heart devotion", born:"1647", died:"1690" },
  { name:"Ignatius of Antioch", m:10, d:17, short:"Third bishop of Antioch and Apostolic Father who wrote seven letters while en route to martyrdom in Rome, rich in theology of the Eucharist, episcopate, and martyrdom.", tags:["bishop","martyr","apostolic"], born:"c.35", died:"c.107" },
  { name:"Luke the Evangelist", m:10, d:18, short:"Physician and companion of Paul who wrote the third Gospel and Acts of the Apostles; tradition credits him with painting the first icon of the Virgin Mary.", tags:["evangelist","apostolic"], p:"physicians, surgeons, artists, students", died:"c.84" },
  { name:"Paul of the Cross", m:10, d:19, short:"Italian mystic and founder of the Passionists who spent 50 years promoting meditation on Christ's Passion as the supreme school of divine love.", tags:["priest","founder","mystic"], born:"1694", died:"1775" },
  { name:"John Paul II", m:10, d:22, short:"Karol Wojtyla—Polish pope who helped topple communism, launched World Youth Day, wrote 14 encyclicals, canonized 482 saints, and modeled suffering united to Christ.", tags:["pope","confessor"], p:"families, World Youth Day", born:"1920", died:"2005" },
  { name:"John of Capistrano", m:10, d:23, short:"Franciscan friar and papal legate who led the crusade that defeated the Ottomans at Belgrade in 1456; the California mission town of San Juan Capistrano bears his name.", tags:["priest","franciscan","preacher"], p:"jurists, military chaplains", born:"1386", died:"1456" },
  { name:"Anthony Mary Claret", m:10, d:24, short:"Spanish Claretian founder and Archbishop of Cuba whose preaching tours evangelized thousands and whose writings fill 150 volumes; confessor to Queen Isabella II.", tags:["bishop","founder","preacher"], born:"1807", died:"1870" },
  { name:"Crispin and Crispinian", m:10, d:25, short:"Roman brothers martyred at Soissons; shoemakers by trade who preached while plying their craft and are patrons of leather workers—immortalized by Shakespeare's Henry V.", tags:["martyr"], p:"shoemakers, saddlers, glove-makers", died:"c.286" },
  { name:"Alfred the Great", m:10, d:26, short:"King of Wessex who defeated the Vikings, promoted literacy and Christian culture, translated Latin texts into Old English, and is the only English monarch called 'the Great.'", tags:["king","confessor"], born:"849", died:"899" },
  { name:"Frumentius of Axum", m:10, d:27, short:"Tyre-born slave who became the Apostle of Ethiopia, founding the Ethiopian Church and consecrated its first bishop by Athanasius of Alexandria.", tags:["bishop","missionary"], p:"Ethiopia", born:"c.300", died:"c.383" },
  { name:"Simon the Apostle", m:10, d:28, short:"One of the Twelve called 'the Zealot,' possibly a former member of the Zealot party; believed to have evangelized Persia with Jude Thaddaeus.", tags:["apostle","martyr"], p:"tanners, sawyers", died:"c.65" },
  { name:"Jude Thaddaeus", m:10, d:28, short:"Apostle distinguished from Judas Iscariot, author of the Letter of Jude, believed martyred with Simon in Persia; invoked as patron of impossible causes.", tags:["apostle","martyr"], p:"desperate situations, hospitals, Armenia", died:"c.65" },
  { name:"Narcissus of Jerusalem", m:10, d:29, short:"Bishop of Jerusalem at the turn of the third century, noted for a miracle of turning water into oil and for his holiness even amid false accusations that drove him to the desert.", tags:["bishop","confessor"], born:"c.99", died:"c.216" },
  { name:"Alphonsus Rodriguez", m:10, d:30, short:"Jesuit lay brother doorkeeper of the Majorcan college for 46 years whose hidden mystical life and spiritual counsel influenced thousands including St. Peter Claver.", tags:["brother","jesuit","mystic"], born:"1533", died:"1617" },
  { name:"Wolfgang of Regensburg", m:10, d:31, short:"Benedictine monk and Bishop of Regensburg who reformed his diocese and the monasteries of the Danube region, and tutored the future Emperor Henry II.", tags:["bishop","monk","reformer"], born:"934", died:"994" },

  // NOVEMBER
  { name:"All Saints", m:11, d:1, short:"Solemnity honoring all the saints of God, known and unknown, who have attained heavenly glory; a holy day of obligation recalling our communion with the Church Triumphant.", tags:["feast","solemnity"] },
  { name:"All Souls", m:11, d:2, short:"Commemoration of All the Faithful Departed, praying for souls in purgatory; the bond of prayer and intercession linking the Church Militant with the Church Suffering.", tags:["feast"] },
  { name:"Martin de Porres", m:11, d:3, short:"Peruvian Dominican lay brother of mixed race who cared for the sick regardless of race or class and is venerated especially among the poor of Latin America.", tags:["brother","dominican","confessor"], p:"interracial harmony, barbers, public health workers, Peru", born:"1579", died:"1639" },
  { name:"Charles Borromeo", m:11, d:4, short:"Cardinal-Archbishop of Milan who implemented the Council of Trent in his diocese with exemplary thoroughness, founded the Confraternity of Christian Doctrine, and died worn out by fasting.", tags:["cardinal","bishop","reformer"], p:"catechists, seminarians, bishops, stomach ailments", born:"1538", died:"1584" },
  { name:"Elizabeth and Zechariah", m:11, d:5, short:"Parents of John the Baptist: the aged priest and his barren wife to whom the angel Gabriel announced their miraculous conception.", tags:["confessor","parent"], died:"1st century" },
  { name:"Leonard of Noblac", m:11, d:6, short:"Frankish hermit near Limoges whose shrine became a major medieval pilgrimage destination for his reputed power of freeing prisoners; countless chains were hung at his tomb.", tags:["hermit","confessor"], p:"prisoners, captives, women in labor", died:"c.559" },
  { name:"Willibrord of Utrecht", m:11, d:7, short:"Northumbrian monk sent by Pope Sergius I to evangelize the Frisians; first Archbishop of Utrecht and apostle of the Low Countries.", tags:["bishop","missionary","monk"], born:"658", died:"739" },
  { name:"Elizabeth of the Trinity", m:11, d:8, short:"French Carmelite nun of Dijon whose mystical theology centered on the indwelling Trinity and whose writings influenced Hans Urs von Balthasar; beatified 1984, canonized 2016.", tags:["virgin","mystic","carmelite"], born:"1880", died:"1906" },
  { name:"Dedication of Lateran Basilica", m:11, d:9, short:"Feast of the Archbasilica of St. John Lateran, 'mother and head of all churches,' dedicated by Sylvester I in 324; celebrated worldwide as the pope's own cathedral.", tags:["feast"] },
  { name:"Leo the Great", m:11, d:10, short:"Pope and Doctor of the Church who met Attila the Hun and turned him from Rome, defined Christology in his Tome for Chalcedon, and asserted papal primacy with doctrinal clarity.", tags:["pope","doctor"], p:"music, choristers", born:"c.400", died:"461" },
  { name:"Martin of Tours", m:11, d:11, short:"Roman soldier who halved his cloak for a beggar—later revealed as Christ—converted, became a monk, and as bishop of Tours founded the first rural parish system in the West.", tags:["bishop","monk","confessor"], p:"beggars, soldiers, France, geese, horses", born:"316", died:"397" },
  { name:"Josaphat Kuntsevych", m:11, d:12, short:"Archbishop of Polotsk and Greek Catholic martyr who worked to reunite the Orthodox with Rome and was murdered by a mob, the first Uniate martyr to be canonized.", tags:["bishop","martyr"], p:"Ukraine", born:"c.1580", died:"1623" },
  { name:"Frances Xavier Cabrini", m:11, d:13, short:"First US citizen canonized, the founder of the Missionary Sisters of the Sacred Heart who established hospitals, schools, and orphanages across the Americas.", tags:["founder","missionary"], p:"immigrants, hospital administrators", born:"1850", died:"1917" },
  { name:"Serapion of Thmuis", m:11, d:14, short:"Egyptian bishop and friend of Athanasius and Anthony the Great, author of a liturgical Euchologion; distinguished defender of Nicene faith.", tags:["bishop","confessor"], died:"c.370" },
  { name:"Albert the Great", m:11, d:15, short:"Dominican bishop and Doctor of the Church, 'Universal Doctor,' master of Thomas Aquinas, who commented on all of Aristotle and championed the compatibility of faith and reason.", tags:["bishop","doctor","dominican","theologian"], p:"natural scientists, medical technicians, philosophy students", born:"c.1200", died:"1280" },
  { name:"Margaret of Scotland", m:11, d:16, short:"Queen of Scotland who reformed the Scottish Church, championed the poor, founded Dunfermline Abbey, and is venerated for her extraordinary piety in the royal court.", tags:["queen","confessor"], p:"Scotland, death of children, widows", born:"c.1045", died:"1093" },
  { name:"Gertrude the Great", m:11, d:16, short:"Benedictine nun of Helfta and mystic whose Revelations and Exercises explore the humanity of Christ, the Sacred Heart, and union with God through liturgical prayer.", tags:["abbess","mystic","doctor"], born:"1256", died:"1302" },
  { name:"Hugh of Lincoln", m:11, d:17, short:"Carthusian prior imported from Burgundy who became Bishop of Lincoln, fearlessly rebuked kings, protected Jews during riots, and was the first Carthusian to be canonized.", tags:["bishop","monk","carthusian"], born:"c.1135", died:"1200" },
  { name:"Rose Philippine Duchesne", m:11, d:18, short:"French Religious of the Sacred Heart who spent 34 years in America, founding schools for poor children and Native Americans; the Potawatomi called her 'the woman who prays always.'", tags:["religious","missionary","educator"], p:"Native Americans", born:"1769", died:"1852" },
  { name:"Mechtild of Hackeborn", m:11, d:19, short:"Benedictine mystic of Helfta and sister of Abbess Gertrude, whose Book of Special Grace recorded her visions of the Sacred Heart before that term was formalized.", tags:["abbess","mystic"], born:"1241", died:"1298" },
  { name:"Edmund of Abingdon", m:11, d:16, short:"Archbishop of Canterbury who championed the rights of the Church against the Crown, failed to reform his chapter, and died in exile in France, seeking peace in a Cistercian monastery.", tags:["bishop","confessor"], born:"c.1174", died:"1240" },
  { name:"Presentation of Mary", m:11, d:21, short:"Feast celebrating the ancient tradition that Mary was presented in the Temple at age three and consecrated to God, drawn from the Protoevangelium of James.", tags:["mary","feast"] },
  { name:"Cecilia of Rome", m:11, d:22, short:"Roman noblewoman martyr, one of the most celebrated saints of the ancient Church, who sang to God on her wedding day and is patron of music and musicians.", tags:["virgin","martyr"], p:"music, musicians, singers, poets, organ builders", died:"c.230" },
  { name:"Clement I", m:11, d:23, short:"Fourth bishop of Rome whose letter to the Corinthians is one of the earliest documents of papal authority; traditionally the third successor of Peter.", tags:["pope","martyr","apostolic"], died:"c.99" },
  { name:"Andrew Dung-Lac", m:11, d:24, short:"Vietnamese priest and one of the 117 Vietnamese Martyrs canonized in 1988; martyred during the persecutions of Minh Mang and Tu Duc.", tags:["priest","martyr"], born:"c.1795", died:"1839" },
  { name:"Catherine of Alexandria", m:11, d:25, short:"Alexandrian scholar-martyr who confounded fifty philosophers, refused the Emperor Maxentius's advances, and was tortured on a spiked wheel; one of the Fourteen Holy Helpers.", tags:["virgin","martyr"], p:"philosophers, teachers, students, librarians, wheelwrights", died:"c.305" },
  { name:"Leonard of Port Maurice", m:11, d:26, short:"Franciscan friar of the Strict Observance who was the greatest Italian mission preacher of the eighteenth century and promoted the Stations of the Cross.", tags:["priest","franciscan","preacher"], born:"1676", died:"1751" },
  { name:"Virgil of Salzburg", m:11, d:27, short:"Irish monk who became Bishop of Salzburg, conflicted with Boniface, and remarkably posited the existence of a world with antipodeans—a form of intellectual daring.", tags:["bishop","monk"], born:"c.700", died:"784" },
  { name:"Catherine Laboure", m:11, d:28, short:"French Daughter of Charity who received the vision of the Miraculous Medal in 1830 and kept her identity secret for 46 years until her deathbed.", tags:["religious","visionary"], p:"the elderly", born:"1806", died:"1876" },
  { name:"Francis Anthony Fasani", m:11, d:29, short:"Conventual Franciscan Minister Provincial of Apulia who used his position to seek release of prisoners and help the poor, canonized by John Paul II in 1986.", tags:["priest","franciscan"], born:"1681", died:"1742" },
  { name:"Andrew the Apostle", m:11, d:30, short:"First called of the Twelve, brother of Peter, who brought Peter to Jesus; believed crucified on an X-shaped cross (the saltire); patron of Scotland, Russia, and Greece.", tags:["apostle","martyr"], p:"Scotland, Russia, Greece, Ukraine, fishermen", died:"c.60" },

  // DECEMBER
  { name:"Edmund Campion", m:12, d:1, short:"English Jesuit priest who returned secretly to minister to English Catholics after the Reformation and was hanged, drawn, and quartered at Tyburn in 1581.", tags:["martyr","jesuit"], born:"1540", died:"1581" },
  { name:"Bibiana of Rome", m:12, d:2, short:"Roman virgin martyr whose basilica near the Lateran is one of the ancient titular churches of Rome, and whose relics were venerated by Pilgrims in the fourth century.", tags:["virgin","martyr"], died:"c.363" },
  { name:"Francis Xavier", m:12, d:3, short:"Navarrese Jesuit co-founder who baptized tens of thousands across Goa, Malacca, and Japan; the greatest Catholic missionary since Paul, who died on his way to China.", tags:["priest","jesuit","missionary"], p:"Goa, Japan, foreign missions, navigators", born:"1506", died:"1552" },
  { name:"John of Damascus", m:12, d:4, short:"Syrian monk and Doctor of the Church, last of the Greek Fathers, who defended icon veneration against the Iconoclast emperors and wrote the Fount of Knowledge.", tags:["monk","doctor","theologian"], p:"icons, pharmacists", born:"c.676", died:"c.749" },
  { name:"Sabas the Sanctified", m:12, d:5, short:"Cappadocian monk who founded the Great Laura of Mar Saba near Bethlehem, still inhabited by Greek Orthodox monks; a major figure in Palestinian monasticism.", tags:["monk","abbot","founder"], born:"439", died:"532" },
  { name:"Nicholas of Myra", m:12, d:6, short:"Fourth-century bishop of Myra in Lycia whose extraordinary generosity to the poor, love of children, and miraculous deeds made him the most popular saint in both East and West; Santa Claus derives from his tradition.", tags:["bishop","confessor"], p:"children, sailors, merchants, falsely accused, pawnbrokers", died:"c.343" },
  { name:"Ambrose of Milan", m:12, d:7, short:"Bishop of Milan and Doctor of the Church who baptized Augustine, confronted Emperor Theodosius over the Thessalonian massacre, and shaped the theology of the Mass.", tags:["bishop","doctor","theologian"], p:"Milan, beekeepers, candlemakers, students", born:"339", died:"397" },
  { name:"Immaculate Conception", m:12, d:8, short:"Solemnity defined as dogma by Pius IX in 1854 celebrating that Mary was preserved from original sin from the first instant of her conception, by the merits of Christ.", tags:["mary","solemnity","dogma"], p:"United States" },
  { name:"Peter Fourier", m:12, d:9, short:"French Augustinian canon regular who co-founded the Congregation of Notre-Dame of Lorraine for the free education of girls and reformed his canonry's religious life.", tags:["priest","founder","educator"], born:"1565", died:"1640" },
  { name:"Our Lady of Loreto", m:12, d:10, short:"Feast honoring the Holy House of Nazareth, believed miraculously translated to Loreto, Italy; a major Marian shrine and pilgrimage site patronized by popes and saints.", tags:["mary","feast"], p:"aviation, pilots, air travelers" },
  { name:"Damasus I", m:12, d:11, short:"Pope who commissioned Jerome to produce the Vulgate, established Latin as the language of the Roman liturgy, and adorned the martyrs' tombs with famous verse inscriptions.", tags:["pope","confessor"], born:"c.305", died:"384" },
  { name:"Jane de Chantal (Dec.)", m:12, d:12, short:"(See Aug. 12.) Feast of the co-founder of the Visitation Sisters kept in some calendars on this date, the anniversary of her canonization.", tags:["founder","widow"], born:"1572", died:"1641" },
  { name:"Our Lady of Guadalupe", m:12, d:12, short:"Feast commemorating the apparitions of the Virgin Mary to Juan Diego at Tepeyac, Mexico, in 1531, where she left her image on his tilma; Queen of Mexico and the Americas.", tags:["mary","apparition","feast"], p:"Americas, Mexico, unborn children, Philippines" },
  { name:"Lucy of Syracuse", m:12, d:13, short:"Sicilian virgin-martyr whose eyes were reportedly torn out; her name means 'light' and she is invoked for eye ailments; one of the most celebrated martyrs of the ancient Church.", tags:["virgin","martyr"], p:"eyes, the blind, writers, Syracuse", died:"c.304" },
  { name:"John of the Cross", m:12, d:14, short:"Carmelite reformer and Doctor of the Church whose Ascent of Mount Carmel and Dark Night of the Soul are the supreme mystical poetry and theology of the Christian tradition.", tags:["priest","doctor","mystic","carmelite"], p:"mystics, contemplatives, poets", born:"1542", died:"1591" },
  { name:"Mary of the Cross MacKillop", m:12, d:8, short:"Australian co-founder of the Sisters of St. Joseph of the Sacred Heart, the first Australian citizen to be canonized (2010); championed education for the rural poor.", tags:["founder","educator"], born:"1842", died:"1909" },
  { name:"Adelaide of Italy", m:12, d:16, short:"Holy Roman Empress, mother, and grandmother of emperors, who used her position to found monasteries, ransom prisoners, and feed the poor; patroness of step-parents.", tags:["empress","widow"], p:"second wives, widows, step-parents", born:"931", died:"999" },
  { name:"Lazarus of Bethany", m:12, d:17, short:"Friend of Jesus whom he raised from the dead after four days in the tomb; tradition holds he became bishop of Marseille and died a martyr there.", tags:["confessor","bishop"], died:"1st century" },
  { name:"Flannan of Killaloe", m:12, d:18, short:"Irish bishop of Killaloe and son of a chieftain, who made a pilgrimage to Rome and was consecrated bishop by the Pope; the Flannan Isles off Scotland bear his name.", tags:["bishop","missionary"], died:"c.700" },
  { name:"Anastasia of Sirmium", m:12, d:25, short:"Roman noblewoman martyred at Sirmium; the second Mass of Christmas Day was traditionally associated with her, giving her a unique place in the Roman liturgy.", tags:["martyr"], died:"c.304" },
  { name:"Stephen the Protomartyr", m:12, d:26, short:"First Christian martyr, one of the seven deacons chosen by the Apostles, who saw heaven opened as he was stoned to death—while Saul (Paul) held the cloaks of those killing him.", tags:["deacon","martyr"], p:"deacons, stonemasons, headaches, horses", died:"c.36" },
  { name:"John the Apostle", m:12, d:27, short:"Son of Zebedee, 'the beloved disciple,' who stood at the Cross, took Mary into his home, authored the fourth Gospel and three letters; the only Apostle not to die a martyr's death.", tags:["apostle","evangelist"], p:"love, loyalty, friendship, Asia Minor", died:"c.100" },
  { name:"Holy Innocents", m:12, d:28, short:"Feast of the infants slaughtered by Herod in Bethlehem in his attempt to kill the newborn King; the first martyrs of Christ, honored since the fifth century.", tags:["martyr","feast"], p:"babies, foundlings" },
  { name:"Thomas Becket", m:12, d:29, short:"Archbishop of Canterbury murdered in his cathedral by knights of Henry II in 1170 for defending the Church's liberties; his shrine was one of the most visited in medieval Christendom.", tags:["bishop","martyr"], p:"clergy, secular clergy, Portsmouth", born:"1118", died:"1170" },
  { name:"Egwin of Worcester", m:12, d:30, short:"Anglo-Saxon bishop of Worcester who founded Evesham Abbey following a vision of the Virgin Mary, and made a penitential pilgrimage to Rome in fetters.", tags:["bishop","abbot"], born:"c.660", died:"717" },
  { name:"Sylvester I", m:12, d:31, short:"Pope during the reign of Constantine who received the Lateran Palace as a gift, governed during Nicaea (though not attending himself), and is the patron of the New Year's Eve tradition.", tags:["pope","confessor"], p:"new year celebrations", died:"335" },
];

const EVANGELIUM = [
  {
    section: "creed" as const,
    title: "The Creed — What Catholics Believe",
    content: `The Catholic faith is summarized in the Nicene Creed, proclaimed at Sunday Mass and rooted in Scripture and Apostolic Tradition. Catholics believe in one God who is Trinity: Father, Son, and Holy Spirit — three Persons, one divine nature.

**God the Father** is the Creator of all things visible and invisible. Nothing exists apart from his creative love. He is not a distant watchmaker but a personal Father who knows each soul by name.

**Jesus Christ** is the eternal Son of God who "for us men and for our salvation came down from heaven." He was conceived by the Holy Spirit and born of the Virgin Mary — fully God and fully man. He suffered under Pontius Pilate, was crucified, died, and was buried. On the third day he rose from the dead in accordance with the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead.

**The Holy Spirit** is the Lord and giver of life who proceeds from the Father and the Son. He spoke through the prophets and continues to animate the Church, sanctify souls through the sacraments, and guide believers into all truth.

The Church is **one** (unified in faith and charity), **holy** (set apart for God), **catholic** (universal, for all peoples and times), and **apostolic** (founded on the Apostles and their successors). Outside the Church there is no salvation — understood not as a condemnation of the ignorant, but as a recognition that Christ's Body is the ordinary means of grace willed by God.

Catholics believe in the **resurrection of the body**: the same body that lives and suffers on earth will rise glorified, reunited with the soul at the Last Judgment. And they believe in **life everlasting**: heaven as the beatific vision of God; hell as the eternal self-exclusion of those who refuse God's love; purgatory as the final purification of those who die in God's friendship but still imperfectly.

These are not opinions or suggestions. They are the deposit of faith, entrusted to the Church and guarded by the Magisterium under the guidance of the Holy Spirit.`,
    lastUpdated: "2024-01-01",
  },
  {
    section: "sacraments" as const,
    title: "The Sacraments — Channels of Grace",
    content: `A sacrament is an outward sign, instituted by Christ, that gives the grace it signifies. The Catholic Church has seven sacraments, grouped into three categories.

**Sacraments of Initiation**

*Baptism* is the gateway to the Christian life. Water is poured (or the person immersed) while the words "I baptize you in the name of the Father, and of the Son, and of the Holy Spirit" are spoken. Baptism forgives original sin and all personal sins, makes the recipient a child of God, and incorporates them into the Body of Christ. It leaves an indelible mark on the soul and cannot be repeated.

*Confirmation* completes Baptism. The bishop anoints the forehead with chrism oil, deepening the gifts of the Holy Spirit received at Baptism and strengthening the Christian for mission. In the East, it is given at Baptism; in the West, typically at adolescence or later.

*The Eucharist* is the source and summit of Christian life (Vatican II, Lumen Gentium 11). At Mass, through the words of consecration spoken by a validly ordained priest, bread and wine become the Body and Blood, Soul and Divinity of Jesus Christ. This is not symbolism — it is the Real Presence. The substance of bread and wine is entirely replaced by Christ, while the appearances (accidents) of bread and wine remain. This is called transubstantiation.

**Sacraments of Healing**

*Penance and Reconciliation* restores the baptismal grace lost by mortal sin. The penitent must have contrition, confess all mortal sins in kind and number, and have the intention to avoid sin and its near occasions. The priest, acting in the person of Christ, pronounces absolution. Venial sins may also be confessed and are forgiven. The seal of confession is absolute and inviolable — no priest may ever reveal what is confessed, under any circumstances, even at the cost of his life.

*Anointing of the Sick* is given to those seriously ill, elderly, or facing surgery. The priest anoints the forehead and hands with blessed oil, praying for healing of body and soul. It can forgive sins if the person is unable to confess, and prepares the soul for death.

**Sacraments of Service**

*Holy Orders* confers the priesthood in three degrees: bishop (the fullness of the sacrament), priest (who acts in the person of Christ at Mass and in confession), and deacon (who assists and serves). Only a baptized man may validly receive Holy Orders. The Magisterium has declared this not a matter of discipline but of divine law.

*Matrimony* is the covenant between a baptized man and a baptized woman, ordered to the good of the spouses and the procreation and education of children. The spouses confer the sacrament on each other; the priest (or deacon) witnesses. A valid sacramental marriage cannot be dissolved by any human authority — only death dissolves the bond. An annulment is not a Catholic divorce; it is a declaration that no valid sacrament was contracted.`,
    lastUpdated: "2024-01-01",
  },
  {
    section: "morals" as const,
    title: "Christian Morality — Life in Christ",
    content: `Catholic moral teaching is not a list of arbitrary rules but a coherent vision of human flourishing rooted in the nature God gave us and perfected by grace. The foundation is the twofold commandment: love God with all your heart, soul, mind, and strength; and love your neighbor as yourself.

**The Natural Law and the Ten Commandments**

The natural law is written on every human heart. Right reason, reflecting on human nature and its ends, can discern what is truly good. The Ten Commandments given to Moses are a privileged expression of this natural law. The first three concern our duties to God (worship, reverence for his name, the sabbath rest). The remaining seven concern our duties to neighbor: honor parents, do not kill, do not commit adultery, do not steal, do not bear false witness, do not covet.

**Conscience and Magisterium**

Every person has a duty to follow their conscience — but also a duty to form it rightly. A conscience formed by ignorance, passion, or bad teaching may sincerely judge wrongly. The Magisterium (the Church's teaching office) is a gift precisely for this: to guide conscience formation, not to replace conscience but to illuminate it.

**The Virtues**

The moral life is not primarily about avoiding sin but about growing in virtue — stable dispositions of the will that make good action easy and joyful. The cardinal virtues are prudence (right judgment in particular situations), justice (giving each person their due), fortitude (courage in difficulty), and temperance (moderation of appetites). These are perfected by the theological virtues — faith, hope, and charity — which are gifts infused by God and orient us directly toward him.

**Specific Areas of Catholic Moral Teaching**

The Church teaches that human life is sacred from conception to natural death. Abortion, euthanasia, and the direct killing of innocent persons are gravely evil. The Church upholds the dignity of every human person, made in God's image.

On sexuality, the Church teaches that the sexual act belongs exclusively within a valid marriage between a man and a woman, open to life. Contraception, fornication, adultery, pornography, and same-sex sexual acts are contrary to the moral order — not because bodies are bad, but because sexuality has an objective meaning that must be respected.

On social justice: the Church's social doctrine, from Leo XIII's Rerum Novarum (1891) onward, defends the dignity of workers, the right to private property, the priority of the family as the basic unit of society, the universal destination of goods, and the duty of the state to promote the common good.

**Sin, Conversion, and Mercy**

Sin is an offense against God and a wound to our own nature. Mortal sin kills the life of grace in the soul; venial sin weakens it. But no sin is beyond God's mercy if the sinner repents. The entire moral life is ordered toward conversion — the ongoing turning from sin toward God — which is possible at every moment because of Christ's redemption.`,
    lastUpdated: "2024-01-01",
  },
  {
    section: "prayer" as const,
    title: "Prayer — Conversation with God",
    content: `Prayer is the raising of the mind and heart to God. It is not an optional accessory to the Christian life — it is the very breath of the soul. Without prayer, the spiritual life withers; with it, even the most ordinary day becomes suffused with grace.

**Forms of Prayer**

The Church recognizes several movements of the praying heart. *Adoration* acknowledges God's greatness and our creatureliness — the posture of awe before the Holy. *Thanksgiving* responds to God's gifts, recognizing that every good thing comes from him. *Contrition* acknowledges sin and turns back toward God. *Petition* brings our needs before the Father who invites us to ask (Matthew 7:7). *Intercession* brings the needs of others before God — perhaps the most powerful form of charity.

**The Our Father**

Jesus himself gave us the Lord's Prayer when his disciples asked him how to pray. It is the summary of the Gospel: we address God as Father (intimacy), acknowledge his holiness (adoration), desire his kingdom (mission), ask for daily bread (material and Eucharistic sustenance), seek forgiveness while committing to forgive others (mercy), and beg for protection from evil (dependence). Every petition of Christian prayer can be found within its seven clauses.

**The Rosary**

The Rosary is the most popular Marian devotion of the Catholic Church. It meditates on the twenty Mysteries of Christ's life — Joyful, Luminous, Sorrowful, and Glorious — using the repeated Hail Mary as a rhythmic backdrop that frees the mind for contemplation. Popes from Leo XIII to Francis have championed it. Many saints called it their most powerful weapon.

**Liturgy of the Hours**

The Church's official daily prayer — the Divine Office — is prayed seven times a day following the pattern of Psalm 119:164. Morning Prayer (Lauds) and Evening Prayer (Vespers) are the twin hinges. Priests and religious are bound to pray it; laity are warmly encouraged to participate. It sanctifies the hours of the day and unites the one praying to the universal prayer of the Church across the globe.

**Contemplative Prayer**

Beyond vocal and meditative prayer lies contemplation — a gift of God in which the soul rests quietly in his presence without many words or images. The great Carmelite doctors — Teresa of Ávila and John of the Cross — are the Church's principal guides here. Contemplation is not reserved for monks and nuns; it is the destiny of every baptized soul, the foretaste of the beatific vision.

**Practical Counsel**

Set a fixed time for prayer each day — morning is traditional, offering the first fruits of the day to God. Find a quiet place, at least initially. Begin with an act of faith in God's presence. Use Scripture, especially the Psalms. Speak honestly. Bring your distractions to God rather than fighting them. End with gratitude. Persevere even in dryness — the saints universally testify that consolation returns to those who do not give up.`,
    lastUpdated: "2024-01-01",
  },
];

const ARTICLES = [
  {
    slug: "what-is-the-catholic-church",
    title: "What Is the Catholic Church?",
    category: "fundamentals",
    content: `The Catholic Church is the community of believers founded by Jesus Christ on the Apostles, with Peter as their head, continuing through history under the leadership of the Pope and bishops in communion with him. The word "Catholic" means universal — a church for all peoples, all nations, all times.

Jesus promised that the gates of hell would not prevail against his Church (Matthew 16:18). Catholics believe this promise has been kept: the Church, though made up of sinners, has preserved the deposit of faith intact through twenty centuries of history.

The Church is not a human organization that can be reformed from scratch or replaced by a better model. It is the Body of Christ — a divine-human reality, like Christ himself, simultaneously limited in its human members and infallible in its divinely protected teaching. The Second Vatican Council described it as the "universal sacrament of salvation" (Lumen Gentium 48).`,
    summary: "An introduction to the nature, origin, and mission of the Catholic Church.",
    sortOrder: 1,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "the-mass-explained",
    title: "The Mass Explained",
    category: "sacraments",
    content: `The Mass is the central act of Catholic worship. It is simultaneously a memorial, a sacrifice, and a meal — not three different things but three dimensions of one reality.

As **memorial** (Greek: anamnesis), the Mass does not merely recall Calvary from a distance. It makes present the one sacrifice of Christ, rendering it effective here and now. "Do this in memory of me" means: make this present, re-present it, bring it into this time and place.

As **sacrifice**, the Mass is the unbloody re-presentation of Christ's death on the Cross. The same Christ who died on Calvary is offered on the altar — not killed again (he died once, for all: Hebrews 7:27) but presented to the Father in his glorified state.

As **meal**, the Mass culminates in Communion — receiving the Body and Blood of Christ under the forms of bread and wine. "Unless you eat the flesh of the Son of Man and drink his blood, you have no life in you" (John 6:53).

The Mass has two main parts: the Liturgy of the Word (readings, homily, Creed, general intercessions) and the Liturgy of the Eucharist (offertory, Eucharistic Prayer, Communion rite). Together they form one act of worship.`,
    summary: "A clear explanation of what happens at Mass and why it matters.",
    sortOrder: 2,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "how-to-go-to-confession",
    title: "How to Go to Confession",
    category: "sacraments",
    content: `Confession — the Sacrament of Penance and Reconciliation — is one of the great gifts Christ left his Church. "Whose sins you forgive are forgiven them; whose sins you retain are retained" (John 20:23). The priest, acting in the person of Christ, pronounces absolution that is real, objective, and complete.

**Preparation**
Examine your conscience using the Ten Commandments or the Beatitudes as a guide. Be honest. What have you done, thought, or said that you know was wrong? What good have you failed to do? Mortal sins (grave matter, full knowledge, deliberate consent) must be confessed in kind and number. Venial sins may also be confessed.

**In the Confessional**
Make the Sign of the Cross and say: "Bless me Father, for I have sinned. It has been [time] since my last confession." Then confess your sins. Listen to any counsel the priest offers. He will give you a penance. Express your Act of Contrition. Receive absolution.

**Act of Contrition**
"O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen."

**After Confession**
Complete your penance promptly. Give thanks. Go in peace.

Do not be afraid of the priest. He has heard everything. His only concern is your soul. If you have been away for years, he will welcome you as the father welcomed the Prodigal Son.`,
    summary: "A step-by-step guide to making a good confession.",
    sortOrder: 3,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "the-rosary-how-to-pray-it",
    title: "The Rosary: How to Pray It",
    category: "prayer",
    content: `The Rosary is a meditation on the life of Christ through the eyes of his Mother. It uses the repetition of vocal prayers — particularly the Hail Mary — to create a rhythm that frees the mind for contemplation.

**The Prayers**
- The Apostles' Creed (on the crucifix)
- Our Father (on each large bead)
- Hail Mary (on each small bead — 10 per decade)
- Glory Be (after each decade)
- Fatima Prayer (optional, after each Glory Be): "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy."

**The Mysteries** (each decade meditates on one mystery)

*Joyful* (Monday, Saturday): Annunciation, Visitation, Nativity, Presentation, Finding in the Temple.

*Luminous* (Thursday): Baptism of Jesus, Wedding at Cana, Proclamation of the Kingdom, Transfiguration, Institution of the Eucharist.

*Sorrowful* (Tuesday, Friday): Agony in the Garden, Scourging, Crowning with Thorns, Carrying the Cross, Crucifixion.

*Glorious* (Wednesday, Sunday): Resurrection, Ascension, Descent of the Holy Spirit, Assumption, Coronation of Mary.

**How to Pray It**
Hold the crucifix, pray the Creed. Move to the first large bead (Our Father), then three small beads (Hail Marys for faith, hope, and charity), then a Glory Be. Announce the first mystery, pray an Our Father, ten Hail Marys, Glory Be, Fatima Prayer. Repeat for each decade. Conclude with the Hail Holy Queen.`,
    summary: "A complete guide to praying the Holy Rosary with all mysteries.",
    sortOrder: 4,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "purgatory-what-catholics-believe",
    title: "Purgatory: What Catholics Believe",
    category: "fundamentals",
    content: `Purgatory is the state of final purification for souls who die in God's friendship but are not yet fully conformed to his holiness. It is not a second chance for those who rejected God, nor a punishment imposed from outside, but the necessary completion of a conversion that was genuinely begun but not fully accomplished in earthly life.

The doctrine rests on Scripture: Judas Maccabeus prayed and offered sacrifice for the dead "so that they might be delivered from their sin" (2 Maccabees 12:45). Jesus speaks of sins forgiven "in the age to come" (Matthew 12:32), implying a process beyond death. Paul writes of being "saved, but only as through fire" (1 Corinthians 3:15).

The Church defines purgatory as real but has not defined its nature beyond this: it is a purification after death for those destined for heaven. Theories of fire, duration, and geography are theological speculation, not dogma.

The living can help the souls in purgatory through prayer, Mass, indulgences, and charitable works. This is not superstition — it is the communion of saints in action. We are not isolated individuals; we are members of one Body, and our prayers have effects beyond what we can see.

Praying for the dead is among the oldest Christian practices. The ancient Roman Canon (Eucharistic Prayer I) mentions "those who have gone before us marked with the sign of faith." The Church's practice predates the formal definition of the doctrine.`,
    summary: "Catholic teaching on purgatory, its Scriptural basis, and its meaning for Christian life.",
    sortOrder: 5,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "the-bible-and-the-church",
    title: "The Bible and the Church",
    category: "fundamentals",
    content: `Catholics believe that Divine Revelation comes through two channels: Sacred Scripture and Sacred Tradition, both entrusted to the Church and interpreted by the Magisterium. This is not a Catholic addition to the Bible — it is the view the Church held from the beginning, before the canon of Scripture was even formally defined.

The Catholic Church determined which books belong in the Bible. The canon — the official list — was established by councils in the fourth century (Hippo, 393; Carthage, 397) and definitively confirmed by the Council of Trent (1546). The Catholic Bible contains 73 books; Protestant Bibles contain 66, having removed seven Old Testament books (Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach, Baruch) in the 16th century.

Scripture is the inspired Word of God — "God-breathed" (2 Timothy 3:16). The human authors wrote freely, with their own styles and purposes, but what they wrote is what God intended to be written and is free from error in matters pertaining to salvation. This is the doctrine of inerrancy.

The Church does not place tradition above Scripture or Scripture above tradition. Both come from the same divine source and are received in the context of the living Church. The Magisterium — the Pope and bishops in union with him — serves the Word of God, not lords over it. Its role is to guard and authentically interpret what has been received, not to invent new doctrines.

Catholics are strongly encouraged to read Scripture daily. The Liturgy of the Hours, lectio divina, and Bible study in community are all ancient and valued practices.`,
    summary: "How Catholics understand Scripture, Tradition, and the Magisterium working together.",
    sortOrder: 6,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "mary-in-catholic-faith",
    title: "Mary in Catholic Faith",
    category: "fundamentals",
    content: `Mary holds a unique place in Catholic theology and devotion — not because Catholics worship her (they do not), but because of her unique role in salvation history as the Mother of God Incarnate.

**The Four Marian Dogmas**

*Theotokos* (God-bearer, 431 AD): Mary is truly the Mother of God because Jesus, whom she bore, is truly God. This is not primarily a statement about Mary but about Christ — it guards his full divinity.

*Perpetual Virginity*: Mary was a virgin before, during, and after the birth of Jesus. The "brothers and sisters" of Jesus mentioned in the Gospels are understood in Catholic tradition as cousins or kinsmen (the Greek and Aramaic words for "brother" covered these relationships).

*Immaculate Conception* (defined 1854): From the first moment of her conception, Mary was preserved from original sin by the merits of Christ, applied to her in anticipation. She was not sinless by her own power but by a singular grace.

*Assumption* (defined 1950): At the end of her earthly life, Mary was taken body and soul into heavenly glory. Whether this followed death or not is not defined.

**Veneration vs. Worship**

Catholics venerate Mary (dulia, or more precisely hyperdulia — a higher form of veneration proper to her unique dignity). They worship only God (latria). Asking Mary to pray for us is no different in principle from asking a friend to pray — except Mary is alive in God's presence, her prayers are powerful, and she loves every soul as her spiritual child.

**Mary and the Church**

Vatican II's Lumen Gentium ends with a chapter on Mary as model and mother of the Church. She is the first disciple, the first to say yes to God's word, and the image of what the Church is called to be.`,
    summary: "Catholic teaching on Mary: the four dogmas, veneration, and her role in salvation.",
    sortOrder: 7,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "the-papacy",
    title: "The Papacy: Peter's Successor",
    category: "fundamentals",
    content: `The Pope is the Bishop of Rome and successor of St. Peter, the visible head of the Catholic Church on earth. The papacy is not a medieval invention — it is rooted in the explicit words of Christ: "You are Peter, and on this rock I will build my church" (Matthew 16:18).

Peter exercised a clear primacy among the Apostles: he speaks for the group, is named first in every list, receives the special commission to "strengthen your brothers" (Luke 22:32), and is told three times to "feed my sheep" (John 21). This primacy passed to his successors in Rome — a fact acknowledged, even grudgingly, by many in the ancient world.

**Papal Infallibility**

Defined at Vatican I (1870), papal infallibility is widely misunderstood. The Pope is not personally sinless or always right. He is protected from error only when: (1) he speaks ex cathedra — from the chair of Peter, as teacher of the universal Church; (2) on a matter of faith or morals; (3) with the explicit intention of binding the whole Church. This has happened only twice in the dogmatic form: the Immaculate Conception (1854) and the Assumption (1950).

All ordinary papal teaching commands respect and religious assent — the faithful should not casually dismiss it — but it does not carry the same authority as a formal dogmatic definition.

**The Pope and the Bishops**

The Pope governs the Church together with the college of bishops. He is not an absolute monarch disconnected from the episcopate. Episcopal conferences, synods, and ecumenical councils are all expressions of collegial governance. But the Pope has supreme authority in the Church and his decisions do not require the bishops' ratification to be valid.`,
    summary: "The origin, nature, and proper understanding of the papacy and papal infallibility.",
    sortOrder: 8,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "saints-intercession-communion",
    title: "Saints, Intercession, and the Communion of Saints",
    category: "fundamentals",
    content: `The Communion of Saints is the spiritual bond uniting all members of Christ's Body: the Church Militant (believers on earth), the Church Suffering (souls in purgatory), and the Church Triumphant (saints in heaven). Death does not sever the bonds of charity within this one Body.

Saints are not dead — they are more alive than we are, living in the fullness of God's presence. To ask a saint to pray for us is to ask a member of Christ's Body to intercede, just as we ask a friend on earth to pray. The difference is that heavenly intercessors see God face to face, love us with a purified love, and their prayers are powerful.

**The Basis in Scripture**

The Book of Revelation depicts heavenly beings offering the prayers of the saints to God (Rev 5:8; 8:3-4). The "great cloud of witnesses" of Hebrews 12:1 actively surrounds the earthly Church. Paul asks his communities for their prayers — the same dynamic applies across the veil of death.

**How the Church Canonizes**

Canonization is the formal declaration that a person is in heaven and worthy of universal veneration. The process requires: evidence of heroic virtue (leading to beatification), and typically two verified miracles after beatification. The Pope's declaration is an exercise of infallible teaching — the Church cannot err in proposing someone as a model of holiness.

**Relics**

The veneration of relics is ancient (Acts 19:12; 2 Kings 13:21). First-class relics are physical remains of the saint; second-class are objects they used; third-class are objects touched to first-class relics. Veneration (not worship) of relics honors the Holy Spirit who dwelt in those bodies and anticipates the resurrection.`,
    summary: "How the Church understands the saints, their intercession, and our union with them.",
    sortOrder: 9,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "heaven-hell-last-things",
    title: "Heaven, Hell, and the Last Things",
    category: "fundamentals",
    content: `The "Last Things" — death, judgment, heaven, and hell — are the horizon against which all Christian life is lived. The Church does not allow us to sentimentalize them away.

**Death**

Death is the separation of soul and body. It is the consequence of original sin (Romans 5:12), but Christ has transformed it: for the Christian, death is not the end but the passage to the Father. Nevertheless, it is a real and total event. At death, each soul faces the Particular Judgment.

**The Particular Judgment**

At the moment of death, each person is judged by Christ. Those who die in mortal sin and do not repent go to hell. Those who die in God's grace but need purification go to purgatory. Those who are perfectly conformed to Christ enter heaven immediately.

**Heaven**

Heaven is the beatific vision — the direct, immediate knowledge and love of God as he knows and loves himself. It is not a consolation prize or an eternal vacation; it is the fulfillment of human nature as God created it. The joy of heaven is not diminished by the variety of degrees of glory among the saints — each vessel is filled to its capacity.

**Hell**

Hell is real. Jesus speaks of it more than anyone else in Scripture. It is the state of eternal separation from God, freely chosen. The Church has never named any particular person as damned, but she does not teach universal salvation. Hell is the logical consequence of human freedom: God will not force himself on anyone. The doors of hell, as C.S. Lewis said, are locked from the inside.

**The Last Judgment**

At the end of time, souls will be reunited with their bodies in the resurrection. The general or Last Judgment will publicly manifest God's justice — every hidden thing brought to light. Then the eternal separation between those who chose God and those who chose themselves will be made final and visible.`,
    summary: "Catholic teaching on death, judgment, heaven, hell, and the resurrection of the body.",
    sortOrder: 10,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "fasting-and-abstinence",
    title: "Fasting and Abstinence in the Catholic Tradition",
    category: "prayer",
    content: `Fasting and abstinence are ancient practices of Christian asceticism — disciplines of the body that serve the soul. They are not punishments or attempts to earn God's favor; they are means of training the will, expressing repentance, and uniting our small sufferings to the Cross of Christ.

**Current Obligations**

Catholics aged 18-59 are bound to fast on Ash Wednesday and Good Friday (one full meal and two smaller meals that do not equal one full meal; no eating between meals). Abstinence from meat applies to all Catholics over 14 on Ash Wednesday and every Friday of Lent. Fridays outside Lent carry an obligation of some form of penance, which in many countries may be substituted with another penitential act.

**The Tradition**

The Didache (c. 100 AD) already mandated Wednesday and Friday fasts. The early Church fasted more rigorously than modern Catholics are required to. The medieval period saw elaborate systems of fast days — sometimes more than half the year. Modern regulations are minimal; the tradition invites us to go beyond them.

**Why Fast?**

Fasting sharpens prayer by quieting the clamor of the body and producing a hunger that can be redirected toward God. It expresses solidarity with the hungry. It is a form of almsgiving — what we save by fasting can be given to the poor. And it is a school of freedom: the person who can say no to food can begin to say no to other disordered desires.

**Practical Counsel**

Begin small and build. Choose a regular fast day beyond what is required. Fast with intention — offer it for a specific intention: a soul in purgatory, a friend's conversion, peace in a troubled region. Drink water. Do not advertise your fasting (Matthew 6:16-18). Unite your hunger to Christ's Passion.`,
    summary: "The Church's teaching and tradition on fasting, abstinence, and bodily penance.",
    sortOrder: 11,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "indulgences-explained",
    title: "Indulgences Explained",
    category: "fundamentals",
    content: `Indulgences are among the most misunderstood aspects of Catholic practice. They cannot be purchased. They do not forgive sins. They do not provide a license to sin. What they do is remit the temporal punishment due to sins already forgiven.

**The Distinction: Guilt and Punishment**

When a sin is forgiven in confession, the eternal punishment (hell, for mortal sin) is removed. But the temporal consequences of sin — damage to our relationship with God, to others, and to ourselves — remain. This is why a confessor gives a penance: not to earn forgiveness but to begin repairing what sin damaged. Even after death, purgatory completes this repair.

An indulgence remits this temporal punishment through the Church's application of the "treasury of merits" — the superabundant merits of Christ and the saints, available to the faithful through the Church's authority to bind and loose (Matthew 16:19).

**Plenary and Partial**

A plenary indulgence removes all temporal punishment when obtained under the proper conditions: sacramental confession, Eucharistic communion, prayer for the Pope's intentions, and complete detachment from sin (including venial sin). A partial indulgence removes some portion of temporal punishment.

**How to Gain an Indulgence**

Common plenary indulgences include: praying the Rosary in community; adoring the Blessed Sacrament for at least 30 minutes; reading Scripture for at least 30 minutes; making the Stations of the Cross; receiving a papal blessing. Indulgences can be applied to the souls in purgatory.

**The Reformation and Reform**

The abuse of indulgences — particularly selling them — sparked Luther's Ninety-Five Theses. The Council of Trent addressed the abuses, and Paul VI's Apostolic Constitution Indulgentiarum Doctrina (1967) reformed the system, making it cleaner and more focused on conversion of heart.`,
    summary: "A clear explanation of what indulgences are, how they work, and how to gain them.",
    sortOrder: 12,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "liturgical-year",
    title: "The Liturgical Year",
    category: "prayer",
    content: `The Church does not merely remember Christ's life — she relives it annually through the liturgical year, a sacred calendar that sanctifies time by inserting the mysteries of salvation into the rhythm of the seasons.

**Advent**
The year begins with Advent (four Sundays before Christmas) — a season of expectant waiting. We await Christ's coming at Christmas, but more deeply, we await his second coming at the end of time. Advent's themes are hope, repentance, and vigilance. The color is violet (or blue in some traditions).

**Christmas**
Christmas (December 25) celebrates the Incarnation of the Son of God. The season runs through the Feast of the Baptism of the Lord in January, including Epiphany (the manifestation of Christ to the Gentiles) and the Holy Family.

**Ordinary Time (Part I)**
A brief stretch of Ordinary Time after Christmas follows, before Lent. "Ordinary" does not mean boring — it means "ordered," counted. The green vestments signal growth in discipleship.

**Lent**
Lent is forty days of penance and preparation for Easter, beginning with Ash Wednesday. It mirrors Christ's forty days in the desert. Catholics are called to deepen prayer, fasting, and almsgiving. Palm Sunday begins Holy Week, culminating in the Triduum.

**The Triduum**
The holiest three days of the year: Holy Thursday (Last Supper, washing of feet, reposition of the Blessed Sacrament), Good Friday (Passion and death of Christ, veneration of the Cross), Holy Saturday (the Great Easter Vigil — the sacraments of initiation, the Exsultet, the proclamation of the Resurrection).

**Easter**
Easter Sunday is the greatest feast, the "feast of feasts." The Easter season lasts fifty days, ending with Pentecost — the descent of the Holy Spirit and the birthday of the Church.

**Ordinary Time (Part II)**
The longest stretch of the year, Ordinary Time resumes after Pentecost and runs until the end of November, concluding with the Feast of Christ the King — a statement that all of time and history belongs to him.`,
    summary: "A guide to the seasons, feasts, and rhythms of the Catholic liturgical year.",
    sortOrder: 13,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "catholic-social-teaching",
    title: "Catholic Social Teaching",
    category: "morals",
    content: `Catholic Social Teaching (CST) is the body of doctrine developed by popes and councils since Leo XIII's Rerum Novarum (1891) addressing the social, economic, and political dimensions of the Gospel. It is sometimes called "the Church's best kept secret" — rich, coherent, and largely unknown even among Catholics.

**Core Principles**

*Human Dignity*: Every person is made in the image and likeness of God (Genesis 1:27). This is the non-negotiable foundation. No economic system, political program, or social ideology may treat persons as mere means.

*Solidarity*: We are not isolated individuals but members of one human family. "We are all responsible for all" (John Paul II, Sollicitudo Rei Socialis). The sin of omission — failing to care for the neighbor in need — is as real as the sin of commission.

*Subsidiarity*: Decisions should be made at the lowest competent level. The state should not do what families, parishes, and local communities can do. This protects freedom and human initiative.

*The Universal Destination of Goods*: God intended the earth's goods for all humanity. Private property is a right — but it is not absolute. Those with surplus have an obligation toward those in need.

*The Option for the Poor*: The measure of any society is how it treats its most vulnerable. The Church's preferential love for the poor does not mean exclusive love — it means the poor have a prior claim on our attention and resources.

**Political Implications**

CST does not endorse any political party. It critiques both unbridled capitalism (for treating persons as economic units) and socialism (for violating subsidiarity and often human dignity). Catholics may legitimately disagree on prudential judgments — how to implement these principles — but not on the principles themselves.`,
    summary: "An introduction to the principles of Catholic Social Teaching from Rerum Novarum onward.",
    sortOrder: 14,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "the-holy-trinity",
    title: "The Holy Trinity",
    category: "fundamentals",
    content: `The Trinity is the central mystery of the Christian faith: one God in three Persons — Father, Son, and Holy Spirit. It is not a contradiction. It is the most profound truth about the nature of the God who revealed himself in Jesus Christ.

**What the Doctrine States**
There is one divine nature (essence, substance) and three divine Persons. The Persons are really distinct from each other — the Father is not the Son, the Son is not the Holy Spirit — but they share one and the same divine nature. No Person is more or less God than the others.

**How We Know This**
The Trinity is not a philosophical deduction — it is a revelation. The Old Testament hints at it (the plural Elohim; the Wisdom of God as a distinct divine reality). But the Trinity was fully revealed only in the New Testament: at Jesus's baptism (the Father speaks, the Son is baptized, the Spirit descends as a dove); in the Upper Discourse of John 14-17; in the Pauline and Johannine letters; and in the Great Commission (Matthew 28:19).

**The Councils**
The Council of Nicaea (325) defined that the Son is "consubstantial" (homoousios) with the Father — not a lesser divine being but equal God. The Council of Constantinople (381) affirmed the full divinity of the Holy Spirit. The Council of Chalcedon (451) defined the full humanity and full divinity of the one Person of Christ.

**The Filioque**
The Western Church (following Augustine) added to the Nicene Creed that the Spirit proceeds from the Father "and the Son" (Filioque). This is a point of disagreement with the Eastern Orthodox Churches and a significant ecumenical question.

**Living the Trinity**
The Trinity is not merely an abstract doctrine — it is the pattern of Christian life. We are baptized into the Trinity. We pray to the Father, through the Son, in the Spirit. Our communion with each other reflects the communion of the divine Persons. Ultimately, we are destined to share in the inner life of the Trinity through sanctifying grace and, in heaven, the beatific vision.`,
    summary: "The doctrine of the Trinity: its content, its revelation, its definition by the councils.",
    sortOrder: 15,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "original-sin-and-redemption",
    title: "Original Sin and Redemption",
    category: "fundamentals",
    content: `Original sin is the wound at the heart of human history — not a sin we personally committed, but one we inherit as members of the human family. Redemption is God's answer to that wound, more powerful than the sin itself.

**What Happened in Eden**
Adam and Eve, created in God's image, with original holiness and justice, chose to distrust God and assert their own independence. This was not merely a personal failure — it was a rupture in the relationship between humanity and God that affected all their descendants. What was lost was not something they merely acquired — it was a gift that constituted their proper relationship with God.

**What Original Sin Is Not**
It is not sexual sin, though Augustine's emphasis on concupiscence sometimes gave that impression. It is not a personal guilt for Adam's act — we did not personally choose this. It is the privation of original holiness, the state of being born without sanctifying grace, with a nature wounded and inclined toward sin (concupiscence).

**The Effects**
Original sin produces: ignorance (the intellect is darkened), suffering, death, and the inclination toward sin (concupiscence). These are not punishments arbitrarily imposed — they are the natural consequences of losing the gift that ordered human nature toward God.

**Redemption**
Christ is the new Adam (Romans 5:12-21). As one man's disobedience brought death to all, one Man's obedience brings life. Baptism removes the guilt of original sin and restores sanctifying grace — but the effects (concupiscence, suffering, death) remain as a school of virtue and solidarity with Christ's Passion.

The redemption is "more" than the fall: Christ does not merely restore us to Adam's state; he elevates us to share in the divine nature itself (2 Peter 1:4). The Exsultet at the Easter Vigil dares to call Adam's sin "felix culpa" — a happy fault — because it merited so great a Redeemer.`,
    summary: "What original sin is, how it affects us, and how Christ's redemption surpasses it.",
    sortOrder: 16,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "vocations-marriage-religious-life",
    title: "Vocations: Marriage, Priesthood, and Religious Life",
    category: "morals",
    content: `A vocation is a calling from God to a particular state of life through which we are to work out our salvation and contribute to his Kingdom. The Church recognizes several primary vocations.

**Marriage**
Marriage is a sacrament — an outward sign of Christ's covenant love for his Church (Ephesians 5:25-32). Spouses commit to fidelity (one person, permanently), fruitfulness (openness to children), and free consent. The domestic church — the Christian family — is the "first seminary," the place where faith is first lived and transmitted.

Natural Family Planning (NFP) is the Church's proposed means of responsible parenthood — working with the body's natural cycles rather than suppressing them. It differs fundamentally from contraception in intent and method, and its effectiveness is well-documented.

**The Priesthood**
The priesthood is not merely a job or a spiritual leadership role — it is a sacramental configuration to Christ the Head and Shepherd. The priest acts in persona Christi (in the person of Christ) when celebrating the sacraments. Celibacy in the Latin Rite is not a theological necessity but a sign of the Kingdom and an apostolic freedom: the priest is not the "man for his family" but the "man for all."

**Religious Life**
Men and women in religious life take vows of poverty, chastity, and obedience, consecrating their whole selves to God. Religious life is not a higher calling than marriage — it is a different calling. It is a prophetic sign that the Kingdom is our true homeland and that God alone is sufficient.

**Discernment**
Discerning a vocation requires: prayer, especially Eucharistic adoration; honest self-knowledge; spiritual direction; an openness to God's will rather than one's own preferences; and time — God rarely reveals his will in one dramatic moment.`,
    summary: "Catholic teaching on the vocations of marriage, priesthood, and religious life.",
    sortOrder: 17,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "the-creed-line-by-line",
    title: "The Nicene Creed, Line by Line",
    category: "fundamentals",
    content: `The Nicene Creed is the faith of the Catholic Church expressed in its most concentrated and authoritative form. Proclaimed at Sunday Mass, it was composed at the Councils of Nicaea (325) and Constantinople (381) to define Christian faith against the Arian heresy.

**"I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible."**
One God — not many. The Father — personal, not a force. Almighty — omnipotent. Creator of everything: the material universe, and spiritual realities (angels).

**"I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father."**
Jesus is not a creature. He is eternally generated from the Father's substance — consubstantial (homoousios), the key word of Nicaea.

**"Through him all things were made."**
The Son is the instrument of creation (John 1:3).

**"For us men and for our salvation he came down from heaven."**
The Incarnation is purposeful: for our salvation.

**"And by the Holy Spirit was incarnate of the Virgin Mary, and became man."**
The Holy Spirit effected the conception; Mary is the human mother. The Son became genuinely human — not a human body animated by a divine spirit, but a complete human nature.

**"For our sake he was crucified under Pontius Pilate, he suffered death and was buried."**
Historical specificity: Pontius Pilate, a datable Roman official. The death was real.

**"And rose again on the third day in accordance with the Scriptures."**
The Resurrection is the pivot of history (1 Corinthians 15:14).

**"He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end."**
Christ's present reign and future coming.

**"I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets."**
The Spirit is fully divine, co-equal, co-eternal.

**"I believe in one, holy, catholic and apostolic Church."**
The four marks of the Church.

**"I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen."**
The eschatological horizon of Christian hope.`,
    summary: "An explanation of every clause of the Nicene Creed and its doctrinal significance.",
    sortOrder: 18,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "divine-mercy",
    title: "Divine Mercy: The Devotion",
    category: "prayer",
    content: `The Divine Mercy devotion was given to St. Faustina Kowalska (1905-1938), a Polish Sister of Our Lady of Mercy, through a series of visions recorded in her Diary (Divine Mercy in My Soul). After years of suppression and rehabilitation, John Paul II officially established Divine Mercy Sunday in 2000 — the Second Sunday of Easter.

**The Core Message**
God's mercy is infinite and offered to every soul, no matter how great their sin, as long as they turn to him with trust. "The greater the sinner, the greater the right he has to My mercy" (Diary 723). This is not a license for sin — it is an assurance that no one is beyond the reach of God's love.

**The Chaplet of Divine Mercy**
Prayed on rosary beads, the Chaplet replaces the Hail Marys and Our Fathers with specific petitions:
- Begin with the Our Father, Hail Mary, and Apostles' Creed
- On the Our Father beads: "Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world."
- On the Hail Mary beads: "For the sake of His sorrowful Passion, have mercy on us and on the whole world." (repeated 10 times per decade)
- Conclude: "Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world." (3 times)

**The Hour of Mercy**
3:00 PM is the Hour of Mercy — the traditional hour of Christ's death. Jesus asked that this hour be kept with special prayer, veneration of his Passion, and petition for mercy for sinners.

**Divine Mercy Sunday**
On this day, Christ promised complete forgiveness of sins and temporal punishment to anyone who goes to confession and receives Communion with total trust in his mercy. It is called the "Feast of Mercy" and is meant to be like a second Baptism.`,
    summary: "The Divine Mercy devotion: its origin in St. Faustina, the Chaplet, and Divine Mercy Sunday.",
    sortOrder: 19,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "angels-and-demons",
    title: "Angels and Demons: Catholic Teaching",
    category: "fundamentals",
    content: `Angels are pure spiritual beings created by God before the visible world, endowed with intellect and will, and existing to serve God and minister to human salvation. Demons are angels who freely chose to rebel against God and were cast from heaven.

**Angels in Scripture**
Angels appear throughout Scripture: announcing births (to Zechariah, to Mary, to the shepherds), comforting the afflicted (Elijah, Christ in Gethsemane), protecting God's people (Psalm 91:11), and executing divine judgment. Michael, Gabriel, and Raphael are the three named archangels; only they are given a liturgical feast day.

**Guardian Angels**
Jesus says "their angels in heaven always behold the face of my Father" (Matthew 18:10), implying each person has a personal angel. The Church teaches that every soul has a guardian angel assigned to protect and guide them. The feast of the Guardian Angels is October 2.

**The Fall of the Angels**
"He did not spare the angels when they sinned, but cast them into hell" (2 Peter 2:4). The devil (Satan, Lucifer) was among the highest of the angels who rejected God's sovereignty in a definitive act of pride. His fall was irrevocable — unlike humans, angels make their choice with full knowledge and it is final.

**Spiritual Warfare**
"We are not contending against flesh and blood, but against the principalities, against the powers, against the world rulers of this present darkness" (Ephesians 6:12). The Church takes spiritual warfare seriously: the Rite of Exorcism exists, and the Church carefully investigates alleged cases of possession. The ordinary "weapons" are prayer, the sacraments, Scripture, and the sign of the Cross.

**The Hierarchy of Angels**
Tradition (following Dionysius the Areopagite) names nine choirs of angels in three spheres: Seraphim, Cherubim, Thrones (highest); Dominions, Virtues, Powers (middle); Principalities, Archangels, Angels (lowest, closest to humans). This is theological tradition, not defined dogma.`,
    summary: "Catholic teaching on the nature, role, and reality of angels and demons.",
    sortOrder: 20,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
  {
    slug: "ecology-care-for-creation",
    title: "Care for Creation: Laudato Si'",
    category: "morals",
    content: `Pope Francis's encyclical Laudato Si' (2015) — "Praise Be to You" — is a comprehensive reflection on care for our common home. It draws on Francis of Assisi's Canticle of the Creatures, Scripture, and Catholic Social Teaching to address the ecological crisis in its moral and spiritual dimensions.

**The Theological Foundation**
Creation is not our property — it is God's gift, entrusted to our stewardship. "The Lord God took the man and put him in the garden of Eden to till it and keep it" (Genesis 2:15). The Hebrew shamar — "keep" — implies custodial care, not exploitation. Human beings have a unique dignity among creatures, but this dignity entails responsibility, not domination.

**The Integral Ecology**
Laudato Si' argues that the ecological crisis cannot be separated from the social crisis. The same throwaway culture that treats the poor as expendable treats the earth as disposable. An integral ecology connects environmental, economic, social, and cultural dimensions. Care for creation and care for the poor are not competing agendas — they are one.

**Critique of Technocracy**
Francis critiques the "technocratic paradigm" — the assumption that every problem can be solved by technology without changing human hearts or habits. This is a spiritual problem as much as a technical one. Genuine solutions require conversion: a change in how we relate to God, to each other, and to the created world.

**Practical Call**
The encyclical calls for: lifestyle changes (consumerism wounds both people and planet); political action (the ecological crisis requires international cooperation); and spiritual conversion (a new relationship with creation rooted in gratitude, wonder, and responsibility). Small daily actions — reducing waste, growing food, walking rather than driving — are not trivial; they express a worldview.

The response to Laudato Si' was followed by Laudate Deum (2023), which addressed the climate crisis more directly and urgently, calling concrete action particularly from the world's wealthy nations.`,
    summary: "Pope Francis's Laudato Si' on ecology, integral development, and care for creation.",
    sortOrder: 21,
    isActive: true,
    lastUpdated: "2024-01-01",
  },
];

export const seedAll = mutation({
  args: {},
  handler: async (ctx) => {
    // Single batch reads to avoid per-record table scans
    const existingSaints = await ctx.db.query("saints").collect();
    const existingNames = new Set(existingSaints.map((s) => s.name));

    let saintCount = 0;
    for (const s of SAINTS) {
      if (!existingNames.has(s.name)) {
        const dayOfYear = off[s.m - 1] + s.d;
        const feastDate = `${mn[s.m]} ${s.d}`;
        await ctx.db.insert("saints", {
          name: s.name,
          dayOfYear,
          month: s.m,
          day: s.d,
          feastDate,
          shortBio: s.short,
          fullBio: s.extra ? s.short + "\n\n" + s.extra : s.short,
          bornYear: s.born,
          diedYear: s.died,
          patronOf: s.p,
          tags: s.tags,
          isActive: true,
        });
        existingNames.add(s.name);
        saintCount++;
      }
    }

    let evangCount = 0;
    for (const e of EVANGELIUM) {
      const existing = await ctx.db
        .query("evangelium")
        .withIndex("by_section", (q) => q.eq("section", e.section))
        .first();
      if (!existing) {
        await ctx.db.insert("evangelium", {
          section: e.section,
          title: e.title,
          content: e.content,
          lastUpdated: e.lastUpdated,
        });
        evangCount++;
      }
    }

    const existingArticles = await ctx.db.query("articles").collect();
    const existingSlugs = new Set(existingArticles.map((a) => a.slug));

    let articleCount = 0;
    for (const a of ARTICLES) {
      if (!existingSlugs.has(a.slug)) {
        await ctx.db.insert("articles", {
          slug: a.slug,
          title: a.title,
          category: a.category,
          content: a.content,
          summary: a.summary,
          sortOrder: a.sortOrder,
          isActive: a.isActive,
          lastUpdated: a.lastUpdated,
        });
        existingSlugs.add(a.slug);
        articleCount++;
      }
    }

    return {
      saints: saintCount,
      evangelium: evangCount,
      articles: articleCount,
    };
  },
});

