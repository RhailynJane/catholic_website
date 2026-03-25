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

  // Fix notFound from seed14
  {
    name: "Chair of Saint Peter",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "N/A",
    quote: "You are the Christ, the Son of the living God. — Peter's confession at Caesarea Philippi",
    fullBio: `<h3>The Feast of Petrine Authority</h3>
<p>The feast of the Chair of Saint Peter (February 22) celebrates not a relic but a ministry: the teaching authority Christ gave to Peter and through Peter to his successors. The word "chair" (Latin: <em>cathedra</em>) is the symbol of the teacher's authority — every bishop's cathedral takes its name from the bishop's chair. To celebrate the Chair of Peter is to celebrate the Petrine ministry of unity and authoritative teaching that Christ established when He said: "You are Peter, and on this rock I will build my Church, and the gates of hell shall not prevail against it" (Matthew 16:18).</p>

<h3>The Cathedra Petri</h3>
<p>An ancient wooden chair preserved in Saint Peter's Basilica in Rome (enclosed within Bernini's monumental golden reliquary in the apse — the <em>Cathedra Petri</em>) was long venerated as Peter's actual chair. Modern analysis dates the visible portions to the ninth century (likely a gift from the Frankish King Charles the Bald), though the inner core may be older. Whether or not this is Peter's physical chair matters less than what the feast celebrates: the unbroken succession of bishops of Rome from Peter to the present, and the promise of Christ that the Church built on Peter's confession of faith will endure through all ages.</p>

<h3>Theological Meaning</h3>
<p>The feast is an act of faith in the durability of the Church — that the gates of hell shall not prevail against it. Peter's authority rested not on his own virtue (he denied Christ three times) but on Christ's prayer: "I have prayed for you that your faith may not fail; and when you have turned again, strengthen your brothers" (Luke 22:32). The papacy is built on that prayer, not on Peter's perfection. The feast calls Catholics to renew their bond with the Bishop of Rome as the center of Catholic unity.</p>`,
    reflection: "The Chair of Peter is a piece of furniture elevated to a theological symbol. Authority flows from the chair, but the authority is Christ's, not Peter's own. Peter was chosen not because he was the best or the strongest — he was neither — but because Christ chose him, prayed for him, and commissioned him: 'Feed my sheep.' The feast asks every Catholic to consider what it means to be in communion with Peter's successor, and to receive that ministry with gratitude and love.",
    prayerToSaint: "Lord Jesus Christ, you said to Peter: upon this rock I will build my Church, and the gates of hell shall not prevail against it. Protect the Chair of Peter and all who sit in it. Give the Bishop of Rome wisdom, courage, and holiness sufficient to the weight of the Petrine ministry. Strengthen the bonds of Catholic unity so that the Church may be one as you and the Father are one. Amen.",
  },

  // ── JULY ────────────────────────────────────────────────────────────────

  {
    name: "Saint Benedict of Nursia",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (patron of Europe declared 1964)",
    quote: "Prefer nothing to the love of Christ.",
    fullBio: `<h3>Father of Western Monasticism</h3>
<p>Benedict was born around 480 AD in Nursia, Umbria (central Italy), to a noble family. He was sent to Rome for his education but, horrified by the licentiousness of student life there, withdrew first to Enfide and then to a cave at Subiaco — three years of solitude, prayer, and fierce spiritual combat. Disciples gathered around him; he organized them into small communities. After a difficult period at one of these communities (where the monks attempted to poison him), he moved south to Monte Cassino, where around 529 he founded the great monastery that would become the center of Western Christian civilization.</p>

<h3>The Rule</h3>
<p>Benedict's <em>Rule</em> — the <em>Regula Benedicti</em> — is one of the most influential documents in human history. It is moderate, practical, and humane: where earlier monastic rules had been brutally ascetic, Benedict's Rule provides enough food and sleep, allows adaptation to seasons and individual frailty, and insists on the abbot's paternal care for his monks. Its structure — a balanced rhythm of prayer (<em>Opus Dei</em>), sacred reading (<em>lectio divina</em>), and manual work (<em>ora et labora</em>) — became the template of European civilization. Benedictine monasteries preserved ancient learning through the collapse of the Roman Empire, cleared forests and established agriculture, ran hospitals and schools, and produced the art and culture of the medieval world.</p>

<h3>Last Chapter of the Dialogues</h3>
<p>Nearly all we know of Benedict comes from Pope Gregory the Great's <em>Dialogues</em>, Book II — a biography written sixty years after Benedict's death that focuses on his miracles and spiritual gifts. Gregory describes Benedict raising the dead, reading thoughts, and prophesying. He describes also his peaceful death: standing at prayer, supported by his monks, his hands raised to heaven. He died around 547 AD. His twin sister Scholastica, who had founded a women's community nearby, preceded him in death. He is the patron of Europe (declared by Paul VI in 1964), of monks, and of those seeking peace.</p>`,
    reflection: "Benedict's Rule is built around a single conviction: God is present everywhere, and especially in the monastery. Everything in the Rule — the hours of prayer, the silence, the obedience, the reverence for guests as Christ — is organized around making that Presence tangible and inescapable. 'Prefer nothing to the love of Christ': this is both the Rule's summary and its entire spirituality. The civilization that Benedictine monasteries built on this foundation was not a side effect; it was what happens when human life is organized around the love of God.",
    prayerToSaint: "O Saint Benedict, father of monks and patriarch of Western civilization, you preferred nothing to the love of Christ. Intercede for all monasteries and religious communities, for all Benedictine oblates and friends, and for the continent of Europe which your spiritual children civilized and evangelized. Help us to find in our daily rhythm of prayer and work the same love of God that organized your Rule, and to say at the end of each day: nothing before the love of Christ. Amen.",
  },

  {
    name: "Saint Bonaventure",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Sixtus IV (1482); Doctor declared 1588",
    quote: "If you wish to know how these things come about, ask grace, not knowledge; desire, not understanding; groaning in prayer, not diligent reading.",
    fullBio: `<h3>The Seraphic Doctor</h3>
<p>Bonaventure was born Giovanni di Fidanza around 1221 in Bagnoregio, Tuscany. As a child he was apparently healed of a serious illness through the intercession of Francis of Assisi — the future saint who visited the area in 1222. He entered the Franciscan Order around 1243 and studied at Paris under Alexander of Hales, the great Franciscan theologian. He received his doctorate and became a master of theology at Paris, where he was a contemporary and friend of Thomas Aquinas. Their doctorates were conferred the same day in 1257 — two of the greatest theologians of the medieval Church, one Dominican and one Franciscan, receiving academic recognition simultaneously.</p>

<h3>Minister General of the Franciscans</h3>
<p>In 1257, the same year as his doctorate, Bonaventure was elected Minister General of the Franciscan Order — at a time of internal conflict between the "Spirituals" (who wanted absolute poverty) and the "Conventuals" (who accepted institutional property). He guided the order with remarkable balance, writing the official biography of Saint Francis (the <em>Legenda Maior</em>) that became the authorized account of the founder's life. He declined the archbishopric of York (offered by Pope Clement IV in 1265) but accepted the cardinal bishopric of Albano in 1273. He died during the Council of Lyon on July 15, 1274, still in service to the Church.</p>

<h3>Mystical Theologian</h3>
<p>Bonaventure's greatest work is the <em>Itinerarium Mentis in Deum</em> (The Soul's Journey into God, 1259) — a mystical theology of the ascent of the soul to God through reflection on creation, the soul, and finally the Trinity and the Crucified Christ. He was called the "Seraphic Doctor" for the warmth and devotion of his theology. Unlike Thomas Aquinas, who approached God primarily through the intellect, Bonaventure insisted that the will and the affections — love itself — are the highest faculty of the soul and the proper instrument of mystical union.</p>`,
    reflection: "Bonaventure says: ask grace, not knowledge; desire, not understanding; groaning in prayer, not diligent reading. He does not mean that knowledge and understanding are useless — he was one of the greatest intellectuals of the thirteenth century. He means that the destination of theology is not information but transformation: that theological study is meant to produce love, and if it produces only clever arguments, it has failed. His theology is a constant reminder that the point of knowing about God is to know God.",
    prayerToSaint: "O Saint Bonaventure, Seraphic Doctor and lover of the Crucified, you led your mind all the way up through creation and the soul to the heart of the Trinity, and found there the same God whose wound was your path of entry. Intercede for all theologians, philosophers, and students of the faith. Help us to study not for knowledge alone but for the love that all knowledge should produce. Guide us on the soul's journey into God. Amen.",
  },

  {
    name: "Saint Maria Goretti",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pope Pius XII (1950)",
    quote: "I forgive Alessandro Serenelli, and I want him to be with me in heaven.",
    fullBio: `<h3>Martyr of Purity</h3>
<p>Maria Goretti was born on October 16, 1890, in Corinaldo, near Ancona, Italy, the third of seven children of Luigi Goretti and Assunta Carlini. The family was desperately poor; when Luigi died of malaria in 1900, nine-year-old Maria became the eldest child at home and took on much of the household work. The family shared a two-story stone farmhouse near Nettuno with another family — the Serenelli — whose son Alessandro, eighteen years old, had developed an obsessive and threatening fixation on Maria.</p>

<h3>The Martyrdom</h3>
<p>On July 5, 1902, Alessandro Serenelli, twenty years old, found eleven-year-old Maria alone in the house and attempted to rape her. When she resisted and told him it was a sin that would send him to hell, he stabbed her fourteen times with an awl. Maria was taken to a hospital in Nettuno, where she lingered for twenty hours. Before dying, she explicitly forgave Alessandro and said she wanted him to be with her in heaven. She was twelve years old. Alessandro was convicted and sentenced to thirty years in prison. He was initially unrepentant. In 1910, he reported that Maria appeared to him in a dream, offering him flowers. He underwent a dramatic conversion and spent the rest of his imprisonment in peace. After his release, he went to Maria's mother Assunta and begged her forgiveness; she forgave him. Both Alessandro and Assunta attended Maria's canonization in 1950.</p>

<h3>Canonization</h3>
<p>Maria was beatified in 1947 by Pope Pius XII and canonized on June 24, 1950 — the first canonization with both the saint's murderer (still living) and her mother in attendance. She is the patroness of rape victims, young girls, and those who resist sexual violence.</p>`,
    reflection: "Maria Goretti's story is not comfortable. A twelve-year-old girl was stabbed to death for resisting rape, and the Church holds her up as a saint of purity. This has been misunderstood as blaming the victim or glorifying martyrdom for an abstract virtue. The reality is different: Maria's martyrdom is not the glorification of dying over sinning — it is the witness of a child who, with her last breath, forgave her murderer and wished him heaven. What is miraculous is not the death but the forgiveness. Alessandro Serenelli walked out of prison converted. Both murderer and mother stood at her canonization. The story ends not with punishment but with reconciliation.",
    prayerToSaint: "O Saint Maria Goretti, martyr and virgin, patron of those who have been assaulted and violated, your forgiveness of Alessandro is among the most astonishing acts of grace in modern hagiography. Intercede for all victims of sexual violence, for all who struggle to forgive those who have grievously wronged them, and for all young people facing pressure, threats, and coercion. Help us to hold fast to what is good, and when we are wronged beyond bearing, to forgive as you forgave — from the cross. Amen.",
  },

  {
    name: "Saint Kateri Tekakwitha",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XVI (2012)",
    quote: "Who can tell me what is most pleasing to God, that I may do it?",
    fullBio: `<h3>The Lily of the Mohawks</h3>
<p>Kateri Tekakwitha was born in 1656 in Ossernenon (near modern Auriesville, New York), the daughter of a Mohawk warrior chief and an Algonquin Christian woman who had been captured in a raid. When Kateri was four, a smallpox epidemic killed both her parents and her infant brother; the disease permanently scarred her face and weakened her eyesight so severely that she could barely see in bright light. She was raised by her Mohawk uncle, a chief who was deeply hostile to Christianity.</p>

<h3>Conversion and Baptism</h3>
<p>Jesuit missionaries had been active in the region since the early seventeenth century; some had been martyred by the Mohawks (including Saint Isaac Jogues, who was martyred at Ossernenon, the same village of Kateri's birth). Kateri encountered the Jesuits during a diplomatic visit and was drawn to Christianity with increasing intensity. Against her uncle's fierce opposition, she was baptized on Easter Sunday, April 18, 1676, at the age of twenty, taking the name Kateri (Catherine). The hostility of her community — who accused her of various offenses and threatened her — became intolerable; she fled to the Jesuit mission of Saint Francis Xavier at Sault Saint-Louis (near Montreal).</p>

<h3>Life of Prayer and Penance</h3>
<p>At the mission, Kateri's spiritual life intensified rapidly. She practiced extreme penance, fasted, and spent long hours before the Blessed Sacrament. She received First Communion on Christmas Day 1677 and wished to consecrate her virginity permanently to God — unusual in the Indigenous context where women were expected to marry. She and two companions made private vows of chastity. Her health, never robust, declined rapidly; she died on April 17, 1680, at age twenty-four. Those present reported that the smallpox scars on her face disappeared immediately after her death, leaving her skin luminous. She was beatified in 1980 and canonized in 2012 — the first Native American saint.</p>`,
    reflection: "Kateri Tekakwitha came to the faith through suffering and against enormous resistance. She was an orphan, disfigured, partially blind, in a community that regarded Christianity with hostility. She chose it anyway — and went further into it than most of those who received it as a comfortable inheritance. Her question — 'Who can tell me what is most pleasing to God, that I may do it?' — is the question of a soul that has found what it was looking for and wants nothing else. She is the first saint of North America's indigenous peoples.",
    prayerToSaint: "O Saint Kateri Tekakwitha, Lily of the Mohawks and first indigenous saint of North America, you came to Christ through suffering and against the resistance of your own people, and you loved Him with a purity that shone even through death. Intercede for the indigenous peoples of North America, for all who are marginalized and disfigured by illness, and for all who seek only to know what is most pleasing to God. Help us to desire, as you desired, nothing but what pleases Him. Amen.",
  },

  // ── AUGUST ───────────────────────────────────────────────────────────────

  {
    name: "Saint John Vianney",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XI (1925)",
    quote: "The sinner who is sorry for his sins is closer to God than the just man who is not sorry for his faults.",
    fullBio: `<h3>The Curé of Ars</h3>
<p>Jean-Baptiste-Marie Vianney was born on May 8, 1786, in Dardilly, near Lyon, France, to a farming family in modest circumstances. His early education was disrupted by the French Revolution; Catholic schools were closed, Mass was celebrated in secret, and the young Jean-Baptiste received his religious formation clandestinely. He did not begin serious formal studies until he was twenty, and struggled terribly with Latin. He was twice rejected from seminary as academically insufficient. Through the extraordinary intervention of his spiritual director, the Abbé Balley, who tutored him privately and vouched for his exceptional piety, he was finally ordained on August 13, 1815, at age twenty-nine.</p>

<h3>The Parish of Ars</h3>
<p>In 1818, Vianney was assigned to the tiny parish of Ars-en-Dombes — a village of 230 souls, described by his superiors as "not very difficult" because there was so little religion left. Within twenty years, Ars was receiving twenty thousand pilgrims a year. The transformation was accomplished primarily through three things: Vianney's extraordinary gifts in the confessional, his austere personal holiness (he reportedly survived on almost no food and little sleep), and his preaching. He would spend sixteen to eighteen hours a day in the confessional during the peak years, hearing thousands of confessions and demonstrating what was widely recognized as supernatural insight into souls. Bishops and priests came from across Europe to make their confessions to him.</p>

<h3>Spiritual Warfare and Death</h3>
<p>Vianney reported nightly disturbances attributed to the devil — noises, banging, fire — so persistent that he gave the phenomenon a name ("the Grappin"). He tried to leave Ars three times, feeling himself unworthy; his parishioners and superiors always persuaded him to return. He died on August 4, 1859, at age seventy-three, worn out by his labors. He was beatified by Pius X in 1905 and canonized in 1925. He is the patron saint of parish priests.</p>`,
    reflection: "The Curé of Ars could barely pass seminary, and he became the most sought-after confessor in the history of the Church. Sixteen hours a day in a small wooden booth, hearing sins, reading souls, turning people back to God — for forty years. He did not accomplish this by brilliance or education or organizational skill. He accomplished it by holiness: by becoming so transparent to God that people could feel it. He is a patron of parish priests not because he ran a successful parish but because he was a saint, and his parish became holy because he was.",
    prayerToSaint: "O Saint John Vianney, Curé of Ars and patron of parish priests, you turned a village indifferent to God into a place of pilgrimage through the force of your holiness and the gift of your mercy in the confessional. Intercede for all parish priests — especially those who feel overwhelmed, unworthy, and forgotten. Help us to believe that the holiness of the pastor transforms the parish, and that faithfulness over years accomplishes what talent and strategy cannot. Amen.",
  },

  {
    name: "Saint Teresa Benedicta of the Cross",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pope John Paul II (1998)",
    quote: "Do not accept anything as the truth if it lacks love. And do not accept anything as love which lacks truth.",
    fullBio: `<h3>Philosopher and Convert</h3>
<p>Edith Stein was born on October 12, 1891 (Yom Kippur) in Breslau, Germany (now Wrocław, Poland), the youngest of eleven children in a devout Jewish family. Her father died when she was two; her mother Frau Auguste Stein ran the family lumber business with extraordinary strength and piety — a woman Edith admired deeply throughout her life. By adolescence Edith had stopped believing in God. She studied philosophy at the University of Göttingen, becoming a student and collaborator of Edmund Husserl, the founder of phenomenology. She received her doctorate in 1916 with a brilliant dissertation on empathy.</p>

<h3>Conversion and Carmel</h3>
<p>In the summer of 1921, Edith spent a night reading the autobiography of Teresa of Ávila at the home of a friend. She finished it as dawn broke and said: "This is the truth." She was baptized on January 1, 1922. She taught for eleven years at the Dominican school in Speyer, deepening her philosophical work (including a major study on Thomas Aquinas and phenomenology) and developing as a lecturer and writer on women's vocation and education. In 1933, the Nazi laws prohibiting Jews from teaching ended her academic career. She entered the Carmelite monastery in Cologne on October 14, 1933, taking the religious name Teresa Benedicta of the Cross.</p>

<h3>Martyrdom at Auschwitz</h3>
<p>In 1938, after the Kristallnacht pogrom, she was transferred to the Carmelite monastery in Echt, Netherlands. When the German occupation of the Netherlands intensified persecution of Jews, and when the Dutch Catholic bishops issued a pastoral letter protesting Nazi persecution of the Jews in July 1942, the Nazis retaliated by arresting Jewish converts to Catholicism. Edith and her sister Rosa (also a convert) were arrested on August 2, 1942, and transported to Auschwitz. They were killed in the gas chambers on August 9, 1942. Edith was beatified by Pope John Paul II in 1987 and canonized in 1998. She is co-patroness of Europe.</p>`,
    reflection: "Edith Stein's life spans the greatest intellectual and spiritual journey of the twentieth century: from Jewish believer to atheist philosopher to Catholic mystic to Carmelite nun to martyr of the Holocaust. Her final statement before entering the transport to Auschwitz was reportedly: 'Come, Rosa, let us go for our people.' She understood her death as a participation in the Passion of Christ and in the suffering of her Jewish people — two identities she refused to separate. She is the saint of the impossible synthesis: Jew and Christian, philosopher and mystic, scholar and contemplative, victim and witness.",
    prayerToSaint: "O Saint Teresa Benedicta of the Cross, philosopher and martyr, you sought truth until it led you to the cross, and you carried the cross to the end. Intercede for scholars and seekers, for all who begin with philosophy and find their way to faith, and for the Jewish people with whom you identified even as you died in Christ. Help us to hold truth and love together as you held them, and never to accept a truth without love or a love without truth. Amen.",
  },

  {
    name: "Saint Maximilian Kolbe",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pope John Paul II (1982)",
    quote: "The Immaculata alone has from God the promise of victory over Satan.",
    fullBio: `<h3>Apostle of Consecration</h3>
<p>Rajmund Kolbe was born on January 8, 1894, in Zduńska Wola, Poland (then under Russian partition), the second of five sons of a pious Polish family. As a boy he received a vision of the Virgin Mary offering him two crowns — one white (purity) and one red (martyrdom) — and he chose both. He entered the Franciscans, was ordained in Rome in 1918, and received his doctorate from the Gregorian University. In 1917 he had founded the Militia of the Immaculata — a movement of Marian consecration that eventually enrolled millions of members worldwide. He was a visionary communicator: he founded a printing house at Niepokalanów (near Warsaw) that became one of the largest Catholic publishing enterprises in the world, producing magazines and newspapers in multiple languages.</p>

<h3>Japan and Arrest</h3>
<p>In 1930, Kolbe took the Militia's mission to Japan, founding a friary and publishing house near Nagasaki — which survived the atomic bomb of 1945, apparently sheltered by its location on the opposite side of a hill from the blast center. He returned to Poland in 1936 and continued his work until the German invasion in 1939. Niepokalanów sheltered thousands of Jewish and Polish refugees. Kolbe was arrested by the Gestapo and sent to Auschwitz concentration camp in May 1941.</p>

<h3>The Bunker of Starvation</h3>
<p>In July 1941, a prisoner escaped from Kolbe's block. As punishment, ten men were selected to die by starvation in an underground bunker. One of those selected, Franciszek Gajowniczek, cried out that he had a wife and children. Kolbe stepped forward and offered to take his place. The Nazi officer accepted the substitution. In the bunker, Kolbe led the dying men in prayer and hymns; he was the last of the ten to die, and was killed by a lethal injection of carbolic acid on August 14, 1941. Gajowniczek survived the war and lived until 1995, attending Kolbe's canonization in 1982.</p>`,
    reflection: "Maximilian Kolbe stepped forward and said: take me instead. This is agape — the love that gives itself for another, that places itself between another and death. He did it in Auschwitz, in the worst place human beings had yet devised for the erasure of human dignity. His act did not stop the Holocaust; it didn't even save many lives. But it said, in the place where nothing human was supposed to survive: something human survived here. Grace was here. The Immaculata was here. Love was here.",
    prayerToSaint: "O Saint Maximilian Kolbe, priest, martyr, and knight of the Immaculata, you gave your life for a stranger in the worst place in the world. Intercede for all who are in prison, all who face death unjustly, and all who must choose between safety and sacrifice. Help us to love as you loved — not in comfortable abstractions but in the concrete, costly act of stepping forward when another needs our place. And through your intercession, may the world never build another Auschwitz. Amen.",
  },

  {
    name: "Saint Jane Frances de Chantal",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Clement XIII (1767)",
    quote: "I am determined to do whatever God wills, even though it costs me my life and everything dear to me.",
    fullBio: `<h3>Widow and Foundress</h3>
<p>Jane Frances Frémyot de Chantal was born on January 23, 1572, in Dijon, France, into a noble family. Her mother died when she was eighteen months old. She received an excellent education and in 1592 married Christophe de Rabutin, Baron de Chantal — a man she loved deeply. They had six children (four survived infancy). In 1601, Christophe was killed in a hunting accident — shot accidentally by a friend. Jane was twenty-nine, with four young children, and was required by social custom to live with her difficult and domineering father-in-law. She spent seven years in this painful situation, directing her grief toward prayer and service of the poor.</p>

<h3>Meeting Francis de Sales</h3>
<p>In 1604, Jane heard Francis de Sales preach during his Lenten mission in Dijon. She recognized in him the spiritual director she had been seeking. Their correspondence — several hundred letters over the next eighteen years — is one of the great spiritual documents of the seventeenth century, revealing two souls of extraordinary depth guiding each other toward God. Francis became her confessor and director. Together they founded the Visitation of Holy Mary in Annecy in 1610 — an Order designed for women who were not strong enough for the rigors of existing religious life (including Jane herself, who suffered chronic illness), providing a gentler form of religious life centered on the virtues of the Visitation narrative: humility, charity, and gentleness.</p>

<h3>Death and Legacy</h3>
<p>Francis de Sales died in 1622; Jane continued to govern and expand the Order for another nineteen years, founding over eighty Visitation houses across France and beyond. She died on December 13, 1641, in Moulins. She was beatified in 1751 and canonized in 1767. She is patron of widows and of those in difficult family situations.</p>`,
    reflection: "Jane de Chantal was molded by grief — the loss of her mother, her husband, eventually her beloved director Francis de Sales — and by difficult circumstances she did not choose. The Order she founded was specifically for the weak, the ill, the overlooked: those who wanted to give their lives to God but couldn't meet the physical demands of existing religious life. From her own weakness came a charism of gentleness that produced one of the great contemplative traditions of France. Her willingness to do God's will even at the cost of everything dear to her was not achieved easily; it was forged over decades of loss.",
    prayerToSaint: "O Saint Jane Frances de Chantal, widow, mother, and foundress of the Visitation, you found God in the fires of grief and difficulty, and made of those fires a school of gentleness for others. Intercede for all widows and those who grieve, for all who live in difficult family situations, and for all who feel too weak or too broken for the spiritual life. Help us to know that God's grace is sufficient for those who cannot manage the heroic — that gentleness and humility and love are enough. Amen.",
  },

  {
    name: "Saint Bernard of Clairvaux",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Alexander III (1174); Doctor declared 1830",
    quote: "You wish to see life and prosperity? Keep your tongue from evil and your lips from speaking deceit.",
    fullBio: `<h3>The Last Father of the Church</h3>
<p>Bernard was born around 1090 at Fontaines-lès-Dijon, Burgundy, France, the third of seven children of a noble family. His mother Aleth was a woman of great piety. When Bernard entered the monastery of Cîteaux in 1112, he did not come alone: he persuaded thirty of his friends and relatives — including four of his brothers — to join him. This extraordinary personal magnetism would characterize his whole life. In 1115, the abbot of Cîteaux sent him to found a new monastery at Clairvaux (in Champagne), where he served as abbot for the remaining thirty-eight years of his life, founding sixty-five Cistercian houses from that single monastery.</p>

<h3>Theologian and Preacher</h3>
<p>Bernard became the most influential man in Europe — the "uncrowned pope" — without holding any official position beyond abbot. He resolved papal schisms, preached the Second Crusade, silenced Peter Abelard, opposed Arnold of Brescia, elected popes, settled theological controversies, and conducted a correspondence that encompassed everyone from kings to hermits. His theological works include the <em>De Consideratione</em> (a guide to governance for Pope Eugenius III, his own former novice), the <em>De Diligendo Deo</em> (On Loving God), a series of eighty-six sermons on the Song of Songs, and treatises on humility, grace, and the Virgin Mary. He was called <em>Doctor Mellifluus</em> — the honey-sweet doctor — for the warmth and beauty of his prose.</p>

<h3>The Cistercian Reform</h3>
<p>Bernard's monasticism was a reaction against the perceived luxury of Benedictine abbeys like Cluny — a return to strict simplicity of life, plain architecture (no stained glass, no statues, no ornament), manual labor, and the pure white of the Cistercian habit. His influence on Cistercian architecture (the spare, luminous beauty of places like Fontenay) and on European culture (he effectively invented the concept of courtly love through his theological influence on the troubadour tradition) was enormous. He died on August 20, 1153, at Clairvaux.</p>`,
    reflection: "Bernard walked into a Cistercian monastery with thirty companions — not because he dragged them there but because his conviction was so luminous that they couldn't bear to be elsewhere. He spent the next four decades intervening in every major crisis in European Christendom, writing theological treatises that shaped Christian spirituality for centuries, and building a monastic empire from one house in Champagne. He did all this as a monk who had wanted only God. The wanting only God was the source of everything else.",
    prayerToSaint: "O Saint Bernard of Clairvaux, honey-sweet doctor and builder of the Cistercian reform, you led thirty men into the cloister and rebuilt the Church from a muddy clearing in Burgundy. Intercede for all monks and contemplatives, for all preachers and reformers, and for all who must speak truth to power in the Church. Help us to love God with the ardent and eloquent love that marked your sermons on the Song of Songs, and to serve the Church as you served it — without sparing ourselves. Amen.",
  },

  // ── SEPTEMBER ────────────────────────────────────────────────────────────

  {
    name: "Saint Pio of Pietrelcina",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope John Paul II (2002)",
    quote: "Pray, hope, and don't worry. Worry is useless. God is merciful and will hear your prayer.",
    fullBio: `<h3>Padre Pio</h3>
<p>Francesco Forgione was born on May 25, 1887, in Pietrelcina, in the province of Benevento, southern Italy, to a farming family. He was a deeply pious child who reportedly experienced visions from his earliest years. He entered the Capuchin Franciscan Order in 1903, taking the name Pio. He was ordained a priest in 1910. From early in his religious life he experienced physical phenomena associated with mystical experience: stigmata (wounds of Christ), bilocation, levitation, reading of souls, and the "odor of sanctity" — a mysterious fragrance associated with his presence and sometimes smelled at a distance.</p>

<h3>The Stigmata</h3>
<p>In September 1918, while praying before a crucifix at San Giovanni Rotondo (Foggia), Padre Pio received the visible, permanent stigmata — wounds in his hands, feet, and side corresponding to the wounds of the crucified Christ. These wounds bled regularly, especially during Mass, and were the subject of multiple medical investigations over the decades. He bore the stigmata continuously for fifty years. He spent up to nineteen hours a day in the confessional and celebrated Mass with intense devotion that could last hours. People came from all over the world for his counsel and absolution.</p>

<h3>Casa Sollievo della Sofferenza</h3>
<p>During World War II, Padre Pio raised funds to build a hospital at San Giovanni Rotondo — the Casa Sollievo della Sofferenza (Home for the Relief of Suffering), which opened in 1956 and is now one of the largest hospitals in Italy. He died on September 23, 1968, having lived fifty years with the stigmata and founded one of the most visited pilgrimage sites in the world. He was beatified in 1999 and canonized in 2002. His body is incorrupt and is still venerated at San Giovanni Rotondo.</p>`,
    reflection: "Padre Pio prayed, hoped, and did not worry — but he also spent fifty years bearing wounds that bled. His famous advice is not the advice of someone who has never suffered; it is the advice of someone who has suffered more than most and found that prayer and hope are not psychological techniques but genuine participation in Christ's own life. The stigmata are not decoration; they are the signature of the Crucified on a soul that has given itself fully. His life suggests that the deepest consolation available is not the absence of suffering but the discovery of its meaning.",
    prayerToSaint: "O Saint Pio of Pietrelcina, wounded with the wounds of Christ and tireless shepherd of souls, you bore for fifty years what Christ bore for three hours. Intercede for all who are sick and suffering, for all who make pilgrimage to San Giovanni Rotondo seeking healing, and for all priests who spend themselves in the confessional. Help us to pray without ceasing, to hope without giving up, and to trust that the God who heard your prayers hears ours as well. Amen.",
  },

  {
    name: "Saint Teresa of Calcutta",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Francis (2016)",
    quote: "Not all of us can do great things. But we can do small things with great love.",
    fullBio: `<h3>Agnes of Skopje</h3>
<p>Anjezë Gonxhe Bojaxhiu was born on August 26, 1910, in Skopje (now the capital of North Macedonia), the youngest of three children in a devout Albanian Catholic family. Her father Nikola died when she was eight; her mother Drana raised the children in a home known for charity and hospitality to the poor. Agnes felt called to religious life from her early teens. At eighteen she joined the Sisters of Loreto in Dublin, then traveled to India for her novitiate in Darjeeling. She took the name Teresa (after Thérèse of Lisieux) and made her final profession in 1937. She spent the next sixteen years as a teacher and principal at St. Mary's High School in Calcutta.</p>

<h3>The Call Within the Call</h3>
<p>On September 10, 1946 (now celebrated as "Inspiration Day"), during a train journey to Darjeeling for her annual retreat, Sister Teresa received what she described as "a call within a call" — a direct message from Christ, experienced in locutions, asking her to leave the convent school and serve "the poorest of the poor" in the slums of Calcutta. She spent two years seeking permission and discernment; in 1948 she began her mission, alone, with no money, learning basic medical care from the Medical Mission Sisters in Patna. In 1950, she founded the Missionaries of Charity.</p>

<h3>The Missionaries of Charity</h3>
<p>The Missionaries of Charity grew from twelve sisters in 1950 to over 4,500 sisters and 350 brothers in 133 countries by the time of Mother Teresa's death. Their work: homes for the dying, orphanages, schools for street children, care for lepers, AIDS hospices. Mother Teresa herself became the most recognizable face of Catholic charity in the world, receiving the Nobel Peace Prize in 1979. After her death on September 5, 1997, her private correspondence was published — revealing that she had lived for decades in profound spiritual darkness, unable to feel the presence of God she had once experienced vividly. This "dark night" is now understood as a participation in the desolation of the poor she served.</p>`,
    reflection: "Mother Teresa of Calcutta picked up dying people from the streets and gave them a place to die with dignity. She said: not great things, but small things with great love. The Nobel Prize lecture, the global recognition, the two thousand institutions — all of this grew from one woman picking up one dying man from a Calcutta gutter. And then she did it again. And again. Her secret dark night — the years of feeling nothing from God while serving Him absolutely — is the deepest thing about her: she served without consolation, loved without feeling, believed without experiencing. This is not failure; it is the deepest form of faith.",
    prayerToSaint: "O Saint Teresa of Calcutta, foundress of the Missionaries of Charity and servant of the poorest of the poor, you saw in every dying destitute person the face of Christ in his distressing disguise. Intercede for all who serve the homeless, the dying, and those abandoned by society. Help us to do small things with great love — to see Christ where He is hardest to recognize, and to serve Him there with the same devotion we would bring to His face in glory. Amen.",
  },

  {
    name: "Saint Irenaeus of Lyon",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (Doctor declared 2022)",
    quote: "The glory of God is man fully alive, and the life of man is the vision of God.",
    fullBio: `<h3>The First Great Theologian</h3>
<p>Irenaeus was born around 130-140 AD in Asia Minor (probably Smyrna), where as a boy he had heard Polycarp preach — and Polycarp had known the Apostle John. He thus stood at one remove from the apostolic generation. He became Bishop of Lyon in Gaul (modern France) around 178 AD, succeeding the martyred Pothinus after the persecution under Marcus Aurelius. He governed the church at Lyon while also serving as a theologian and apologist — the first systematic theologian in the history of the Church.</p>

<h3>Against the Heresies</h3>
<p>Irenaeus's great work is <em>Adversus Haereses</em> (Against the Heresies, c. 180 AD) — a five-book refutation of Gnosticism that also presents the first comprehensive positive account of Christian theology. Against the Gnostic claim that the material world is the creation of an inferior or evil deity, Irenaeus insists on the unity of the Old and New Testaments, the goodness of creation, the reality of the Incarnation, and the "recapitulation" (<em>anakephalaiosis</em>) of all things in Christ — by which Christ as the second Adam reverses and restores what the first Adam ruined. His theology of salvation is rich and optimistic: God's purpose in creation is to bring humanity to participation in His own divine life, a process of growth and maturation (<em>theosis</em> or divinization).</p>

<h3>The Vision of God</h3>
<p>Irenaeus's most famous line — "The glory of God is man fully alive, and the life of man is the vision of God" — is the summary of his entire theology. God is glorified not when human beings are suppressed or diminished but when they flourish in the fullness of life. And the fullness of life for human beings is the vision of God — the face-to-face encounter with the living God that constitutes ultimate happiness. His theology of the human person as the image and likeness of God (connecting Genesis 1:26 to the Incarnation) remains foundational. He was probably martyred around 202 AD. He was declared a Doctor of the Church by Pope Francis in 2022.</p>`,
    reflection: "The glory of God is man fully alive. This single line from Irenaeus has shaped Christian anthropology for two millennia. It answers the suspicion that religion demands the diminishment of the human person: Christianity does not crush the human; it fulfills it. The living God is glorified by living human beings — by people who are fully, richly, beautifully alive. And the fullness of human life is the vision of God. These two truths are the same truth: there is no tension between human flourishing and the glory of God, because human flourishing IS the glory of God.",
    prayerToSaint: "O Saint Irenaeus of Lyon, bishop and doctor, you defended the goodness of creation against those who despised it, and proclaimed that God's glory shines in human beings fully alive. Intercede for all theologians and teachers of the faith, for all who must counter the heresies of our day — the ancient Gnostic contempt for the body, now returned in new forms. Help us to live fully, to welcome life, and to see in every flourishing human person the glory of the God who made them. Amen.",
  },

  {
    name: "Saint Vincent de Paul",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Clement XII (1737)",
    quote: "The poor are our lords and masters.",
    fullBio: `<h3>Apostle of Charity</h3>
<p>Vincent de Paul was born around April 24, 1581, in Pouy (now Saint-Vincent-de-Paul), Landes, in the Gascony region of southwestern France. He was the third of six children of a peasant family. Intelligent and ambitious, he was ordained a priest in 1600, still a teenager — irregularly young by canon law but not unusual at the time. He was reportedly captured by Barbary pirates around 1605 and held in Tunis for two years (the historicity of this captivity is disputed by scholars, but Vincent himself spoke of it). By 1610 he was chaplain to Queen Margaret of Valois in Paris, then chaplain to the de Gondi family — the most powerful noble family in France.</p>

<h3>Conversion to the Poor</h3>
<p>In 1617, while serving as chaplain to a sick peasant near Châtillon, Vincent organized an impromptu charity and was struck by the immense need and the inadequate response. From this moment his life changed direction entirely. He organized the Confraternities of Charity — lay associations to serve the sick poor systematically. He recognized that wealthy ladies could not sustain the daily physical work; together with Louise de Marillac he founded the Daughters of Charity in 1633, the first non-cloistered congregation of women dedicated to active service of the poor. In 1625 he founded the Congregation of the Mission (Vincentians) to give missions to the rural poor and train clergy in seminaries — the first organized seminary system in France.</p>

<h3>The Organizer of Charity</h3>
<p>Vincent organized relief operations for war refugees across France on a scale that no private organization had previously attempted, ransomed Christian slaves from North Africa, reformed the French clergy through organized seminaries, and created a network of charitable works that influenced every subsequent Catholic charitable organization. He died on September 27, 1660, aged seventy-nine, having spent fifty years reorganizing the Church's care for the poor. He is patron of charitable societies and all works of charity.</p>`,
    reflection: "The poor are our lords and masters. This is Vincent de Paul's theology and his practice: not paternalism toward the poor, not pity, but recognition of their lordship — the Lordship of Christ present in them. He insisted that servants of the poor must approach the poor as servants, not masters: with respect, with deference, with attention. He organized charity at industrial scale without losing the personal encounter at its center. His insight that piety without systematic charity is insufficient — and that charity without piety is unsustainable — became the foundation of modern Catholic social work.",
    prayerToSaint: "O Saint Vincent de Paul, apostle of charity and patron of the poor, you saw Christ in the faces of the sick and the destitute and organized the whole Church to serve them. Intercede for all who work in charitable organizations, for all Vincentian conferences and Daughters of Charity, and for the billions of poor in our world who still wait for their lords and masters to recognize them. Help us to serve the poor with the respect you showed them — as our lords, not our projects. Amen.",
  },

  // ── FIX: Correct name variant ──────────────────────────────────────────

  {
    name: "Saint Dominic de Guzmán",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory IX (1234)",
    quote: "Arm yourself with prayer rather than a sword; wear humility rather than fine clothes.",
    fullBio: `<h3>Founder of the Order of Preachers</h3>
<p>Dominic de Guzmán was born around 1170 in Caleruega, Castile (Spain), to a noble family. He was educated at Palencia in the humanities and theology, becoming a cathedral canon in Osma. During a diplomatic journey through southern France in 1203-1205, he encountered the Albigensian (Cathar) heresy — a dualistic movement that was attracting educated and devout people through its apparent simplicity and austere living. Dominic recognized that the Church's response — wealthy bishops, comfortable clergy — was not meeting the Cathars' challenge. A different kind of witness was needed: learned, poor, preaching friars who could debate and preach while living in apostolic poverty.</p>

<h3>The Order of Preachers</h3>
<p>Dominic spent nearly a decade preaching in the Languedoc, converting individual Cathars through debate and the force of his personal poverty and holiness. In 1215, with the approval of Bishop Fulk of Toulouse and later of Pope Innocent III (and Honorius III), he founded the Order of Friars Preachers — the Dominicans. The Order was innovative: its members took traditional religious vows, but their primary mission was preaching and teaching. They were to be scholars and itinerant preachers, combining the intellectual formation of universities with the poverty and mobility of the early mendicant movement. Dominic sent his friars — against all conventional wisdom — to the great university cities: Paris, Bologna, Rome, Oxford.</p>

<h3>The Rosary and Death</h3>
<p>Tradition attributes to Dominic the origin of the Rosary in its current form — a tradition that post-dates him historically, but reflects the deep connection between his order and Marian prayer that he did encourage. He died on August 6, 1221, in Bologna, and was buried there; his tomb in the Basilica of San Domenico remains a major pilgrimage site. He was canonized in 1234, just thirteen years after his death. The Order he founded produced Thomas Aquinas, Albert the Great, Meister Eckhart, and generations of theologians, mystics, and missionaries.</p>`,
    reflection: "Dominic saw that the Church was losing the intellectual and moral battle with the Cathars because its official representatives were wealthy and comfortable. His response was not to condemn the Cathars but to outdo them in poverty and learning — to preach the Gospel with the credibility that comes from living it. He built an Order around two commitments: truth and poverty. His friars would know more than the heretics and live more simply than the heretics. The combination proved irresistible. Every Dominican is still living out that original wager.",
    prayerToSaint: "O Saint Dominic, founder of the Order of Preachers, you preached the truth in poverty and set the whole Church singing the Rosary. Intercede for all Dominican friars, sisters, and laypeople. Intercede for preachers, teachers, and all who proclaim the Gospel with both knowledge and simplicity of life. Help us to arm ourselves with prayer as you armed yourself — making the Rosary the weapon of choice in the spiritual battles of our time. Amen.",
  },

];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed15 = mutation({
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
