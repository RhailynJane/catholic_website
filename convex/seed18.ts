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
    name: "Saint John Paul II",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Francis (2014)",
    quote: "Do not be afraid. Open wide the doors for Christ.",
    fullBio: `<h3>A Worker from Kraków</h3>
<p>Karol Józef Wojtyla was born on May 18, 1920, in Wadowice, a small city near Kraków, Poland. His mother died when he was nine; his brother Edmund (a doctor) died of scarlet fever when Karol was twelve; his father, an army lieutenant, died in 1941. He grew up in a Poland that would be invaded first by Nazi Germany (1939) and then occupied by Soviet Communism. During the Nazi occupation, he worked as a laborer in a quarry and a chemical factory while secretly studying for the priesthood in the underground seminary organized by Archbishop Sapieha of Kraków. He was ordained in 1946.</p>

<h3>Philosopher, Bishop, Cardinal</h3>
<p>Wojtyla pursued philosophical studies in Rome and Kraków, writing his habilitation thesis on the ethics of Max Scheler. He became a professor of ethics at the Catholic University of Lublin, where he developed the personalist philosophy that would underpin his most important works — <em>Love and Responsibility</em> (1960) and <em>The Acting Person</em> (1969). He was appointed Bishop of Kraków in 1958, Archbishop in 1963, and Cardinal in 1967. He participated in all four sessions of the Second Vatican Council, contributing significantly to <em>Gaudium et Spes</em>. On October 16, 1978, he was elected Pope — the first non-Italian pope in 455 years, the first Polish pope ever — and took the name John Paul II.</p>

<h3>The Pontificate</h3>
<p>John Paul II's pontificate (1978-2005) was one of the longest and most consequential in modern history. He helped bring about the fall of Communism in Eastern Europe through his support of the Solidarity movement in Poland and his personal presence and witness during his nine Polish pilgrimages. He made 104 pastoral visits to 129 countries — more than all previous popes combined. He issued 14 encyclicals (including <em>Redemptor Hominis</em>, <em>Laborem Exercens</em>, <em>Veritatis Splendor</em>, and <em>Evangelium Vitae</em>), the Catechism of the Catholic Church (1992), the Theology of the Body (a series of Wednesday audiences, 1979-1984), and the Luminous Mysteries of the Rosary (2002). He survived an assassination attempt on May 13, 1981 (the feast of Our Lady of Fatima), and attributed his survival to Our Lady's intercession. He died on April 2, 2005. Beatified 2011; canonized 2014.</p>`,
    reflection: "Do not be afraid. John Paul II said this at his first appearance as pope — and he lived it for twenty-six years. He was afraid of nothing: of Communism, of assassination (he had already survived one attempt), of suffering (his last years were marked by visible Parkinson's disease), of death. His fearlessness was not bravado; it was the theological conviction that Christ has overcome death and that the risen Lord who said 'do not be afraid' three times in the Easter appearances meant it for all time. His death — public, slow, witnessed by millions — was itself a final encyclical on the dignity of suffering.",
    prayerToSaint: "O Saint John Paul II, Vicar of Christ and apostle of the new evangelization, you said do not be afraid and spent a quarter century proving that you weren't. Intercede for Poland, for the Church in the former Communist countries, and for all who are afraid. Help us to open wide the doors for Christ — in our hearts, in our homes, in our culture — with the same joyful courage with which you opened them in St. Peter's Square on that October night in 1978. Amen.",
  },

  // ── APRIL ─────────────────────────────────────────────────────────────────

  {
    name: "Saint Robert Bellarmine",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XI (1930); Doctor declared 1931",
    quote: "To wish to be a scholar and to be ignorant of the first principles of learning, is to wish to be a craftsman and not know the use of tools.",
    fullBio: `<h3>The Theologian of Controversy</h3>
<p>Roberto Francesco Romolo Bellarmino was born on October 4, 1542, in Montepulciano, Tuscany, Italy, the son of a noble family (his mother was a niece of Pope Marcellus II). He entered the Jesuits in 1560, studied in Florence and Padua, was sent to Louvain for his theology, and was ordained in 1570. At Louvain he encountered the full force of Protestant theology on its home ground — he learned to argue with Luther, Calvin, and Melanchthon from their own texts. He returned to Rome in 1576 and began teaching at the Roman College the course of lectures that would become the <em>Disputationes de Controversiis Christianae Fidei</em> — the most systematic Catholic response to Protestant theology produced in the sixteenth century.</p>

<h3>The Controversies</h3>
<p>The <em>Controversies</em> (published in three volumes, 1586-1593) was an encyclopedic treatment of every disputed point between Catholics and Protestants — Scripture and tradition, the Church, the sacraments, grace, justification, the papacy. It was so thorough that Protestant universities were said to have created chairs specifically to refute it. Bellarmine treated Protestant positions fairly, argued from Scripture and reason as well as tradition, and avoided polemic in favor of systematic exposition. It remained the standard Catholic apologetic for generations. He was also consulted in the Galileo affair (1616) — he delivered to Galileo the Congregation of the Index's warning not to hold or teach the heliocentric theory, a role that was pastoral and institutional rather than personal persecution.</p>

<h3>Archbishop, Cardinal, and Saint</h3>
<p>Bellarmine was created a Cardinal by Clement VIII in 1599 and Archbishop of Capua in 1602 (a position he held until 1605). He was a conscientious and charitable bishop, living simply, giving his personal income to the poor, and cutting the silk hangings in his bedroom to make clothes for the destitute. He served on the commission that produced the Clementine Vulgate (1592), on the commission that produced the new Roman Martyrology, and as prefect of the Vatican Library. He died on September 17, 1621. He was canonized and declared Doctor of the Church in the same year (1930 and 1931).</p>`,
    reflection: "Bellarmine spent his life arguing for the truth of the Catholic faith against its sharpest critics — and he did it fairly, from the texts, without polemic. This is itself a spiritual act: to argue well with those who oppose you, to understand their position on its own terms before rejecting it, to prefer clear argument to emotional appeal. His life is a model for the intellectual apostolate: that rigorous scholarship in service of the faith is itself a form of charity, and that the defense of truth is a work of love.",
    prayerToSaint: "O Saint Robert Bellarmine, cardinal and doctor of the Church, you spent your life defending Catholic truth against every challenge, with rigor, fairness, and pastoral love. Intercede for all theologians and apologists, for Catholic universities and seminaries, and for all who engage in ecumenical and interreligious dialogue. Help us to defend the faith as you defended it — from the texts, with honest arguments, without polemic, and always in service of souls rather than of victory. Amen.",
  },

  {
    name: "Saint John Baptist de la Salle",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Leo XIII (1900)",
    quote: "Teach your students not only the content of faith but how to live it.",
    fullBio: `<h3>Canon to Schoolteacher</h3>
<p>Jean-Baptiste de La Salle was born on April 30, 1651, in Reims, France, into a wealthy noble family. He received an excellent education, became a cathedral canon at sixteen (a comfortable ecclesiastical sinecure), and was ordained a priest in 1678. His encounter with the problem of poor children's education began when he was asked to help a man named Nyel who was establishing free schools for the poor in Reims. What began as casual patronage became an all-consuming vocation: by 1684, La Salle had resigned his canonry (which had provided his comfortable income), given away his personal fortune during a famine, and formed a community of lay teachers.</p>

<h3>The Brothers of the Christian Schools</h3>
<p>The Brothers of the Christian Schools — the De La Salle Brothers — were, when founded, radically innovative: they were a congregation of laymen, not priests, dedicated entirely to the education of poor boys. La Salle insisted on conducting classes in French rather than Latin (at a time when educated instruction was conducted in Latin), grouping students by ability rather than age, training teachers systematically (he established the first teacher-training colleges), and having the teacher address the whole class rather than individual students simultaneously — what we now call the "simultaneous method." He also founded the first Sunday schools for working adults and schools for delinquents.</p>

<h3>Legacy</h3>
<p>La Salle faced constant opposition from secular schoolmasters' guilds who saw him as unfair competition, from ecclesiastical authorities who were suspicious of a priestly founder working through laymen, and from his own community members who sometimes left or rebelled. He resigned as superior general of the Brothers in 1717 and died on Good Friday, April 7, 1719, shortly after being reconciled with the community. He was canonized in 1900 and declared patron of teachers by Pope Pius XII in 1950. The De La Salle Brothers currently operate over 1,000 schools in 80 countries, educating nearly a million students.</p>`,
    reflection: "John Baptist de la Salle gave up a wealthy sinecure to teach poor boys in French. This is the entire story in one sentence: from comfort to service, from Latin to the vernacular, from personal wealth to institutional poverty. He understood that education is not a luxury for the wealthy but the basic right of every child made in God's image. His teacher-training colleges were perhaps his most lasting innovation: he recognized that the quality of the teacher determines the quality of the school, and that forming excellent teachers was more important than personally teaching excellent students.",
    prayerToSaint: "O Saint John Baptist de la Salle, founder of the Brothers of the Christian Schools and patron of teachers, you gave up wealth and comfort to teach the poorest children in their own language. Intercede for all Catholic school teachers, especially those who serve low-income students, for the De La Salle Brothers worldwide, and for all who work to make quality education available to the poor. Help us to teach with your conviction that every child's mind is made in God's image and deserves the best we can offer. Amen.",
  },

  {
    name: "Saint Francis of Paola",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Leo X (1519)",
    quote: "Charity is the priceless purchase-money of heaven.",
    fullBio: `<h3>The Hermit of Calabria</h3>
<p>Francesco di Paola was born on March 27, 1416, in Paola, Calabria, southern Italy, the answer to his parents' long prayers for a child — they had vowed to send him to a Franciscan monastery if God granted them a son. He spent a year at a Franciscan friary (1430-31), then withdrew to a cave near the sea at Paola to live as a hermit. Disciples gathered around him; by 1452 he had formed a community and built a simple chapel and cells — the first house of what would become the Order of Minims (the "least ones"). His model was radical humility: the Minims were to be the least of all religious, practicing perpetual abstinence from meat (a lifelong Lenten fast) as their distinguishing ascesis.</p>

<h3>Miracles and Royal Service</h3>
<p>Francis became famous throughout Calabria and Sicily for miracles of healing, prophecy, and control of nature. His most famous miracle: he was refused passage on a ferry by a boatman who demanded payment; Francis spread his cloak on the water and sailed across on it. He is depicted in art with the word "CHARITAS" (charity) on his chest — his founding spiritual principle. King Louis XI of France, dying and terrified, sent for Francis; Pope Sixtus IV commanded him to go. From 1483 until his death, Francis lived in France, advising Louis XI and his successors. He died at the French royal court on Good Friday, April 2, 1507, at age ninety-one. He is patron of seafarers and of Calabria.</p>`,
    reflection: "Francis of Paola sailed across the sea on his cloak because the ferryman refused to carry him for free. The miracle is memorable, but the theology behind it is more interesting: he had nothing — no money, no boat, no credentials — and went forward anyway, trusting that the One who walked on water would carry His servant. Every mission undertaken in complete poverty and dependence on providence has this quality: the cloak on the water, the trust that God will provide what human provisions cannot.",
    prayerToSaint: "O Saint Francis of Paola, hermit of Calabria and servant of charity, you sailed on your cloak because charity had nothing to fear from the sea. Intercede for all who make their way by trust in Providence rather than by worldly resources, for sailors and seafarers, and for all the poor who depend on the charity of others. Help us to build our lives on CHARITAS as you built yours — loving God above all and neighbor in God, without holding back anything. Amen.",
  },

  // ── MAY ───────────────────────────────────────────────────────────────────

  {
    name: "Saint Isidore the Farmer",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory XV (1622)",
    quote: "I have only one master in heaven: it is He who gives me my daily bread.",
    fullBio: `<h3>The Spanish Peasant</h3>
<p>Isidore (Isidro) was born around 1070 in Madrid — a small village at the time, nothing like the modern capital — to a poor peasant family. He worked as a farmhand his entire life on the estate of Juan de Vargas near Madrid. He married María de la Cabeza (herself venerated as a blessed), with whom he had one son who died in childhood. His life was outwardly unremarkable: he plowed fields, sowed grain, and tended livestock. What made him a saint was not any dramatic event or extraordinary achievement but the invisible quality of his daily work — offered to God, punctuated by prayer, and permeated by charity to the poor.</p>

<h3>The Angels and the Plow</h3>
<p>The legends associated with Isidore are agricultural miracles. His fellow farmhands complained to the master Juan de Vargas that Isidore was always arriving late because he stopped to hear Mass at one of the many chapels along the road. De Vargas investigated and reportedly saw two angels guiding a second plow alongside Isidore's — compensating for his absence with supernatural assistance. The image is memorable: the saint at prayer while angels do the farm work. Another legend holds that Isidore multiplied grain to feed a flock of hungry birds in winter. He died around 1130. He was not canonized until 1622 — nearly five hundred years after his death.</p>

<h3>Patron of Farmers</h3>
<p>Isidore is patron of farmers, peasants, agricultural laborers, and Madrid — where he and his wife are the patron saints. Their feast on May 15 is a major celebration in Madrid. His body, considered incorrupt, is preserved in the Church of San Isidro in Madrid and has been carried in procession through the city during droughts. He was canonized alongside Teresa of Ávila, Ignatius of Loyola, Philip Neri, and Francis Xavier — a remarkable company for a farmhand.</p>`,
    reflection: "Isidore was canonized alongside four of the greatest founders and mystics in the history of the Church: Teresa, Ignatius, Philip Neri, Francis Xavier. The Church placed a farmhand in their company. This is deliberate: holiness is not the property of founders, mystics, or missionaries. It is available to anyone who tills his field as an act of worship, who feeds the poor from his meager store, who stops to pray on the way to work. Isidore's angels are not an excuse for tardiness; they are a statement about the universe — that the world participates in the prayer of those who pray.",
    prayerToSaint: "O Saint Isidore the Farmer, patron of agricultural laborers and the city of Madrid, you worked the fields and prayed the way, and the angels plowed alongside you. Intercede for all farmers, all who labor with their hands, and all who struggle to find God in the monotony of daily work. Help us to sanctify our labor as you sanctified yours — not by doing extraordinary things but by doing ordinary things with the spirit of someone who knows his bread comes from God. Amen.",
  },

  {
    name: "Saint Joseph the Worker",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "N/A",
    quote: "Is not this the carpenter's son? — The people of Nazareth, speaking of Jesus",
    fullBio: `<h3>The Feast of Labor</h3>
<p>The feast of Saint Joseph the Worker, celebrated on May 1, was instituted by Pope Pius XII in 1955 — deliberately on the same date as International Workers' Day (May Day), which had been claimed by socialist and communist movements as their primary celebration. Pius XII's response was not to oppose the observance of labor but to claim it for Christ: to place at the center of the Catholic celebration of work the figure of Joseph of Nazareth, the carpenter who raised and sheltered the Son of God.</p>

<h3>Joseph the Craftsman</h3>
<p>The Gospels tell us that Joseph was a <em>tektōn</em> — a Greek word usually translated "carpenter" but more accurately meaning a craftsman in wood or stone (a builder). Jesus is called "the carpenter's son" (Matthew 13:55) and himself "the carpenter" (Mark 6:3). Joseph's trade defined the social world of Nazareth in which Jesus grew up; he presumably taught his foster son the craft. The home at Nazareth was a workshop: Joseph and Jesus planed wood, shaped joints, built tables and doors and perhaps houses. The Son of God spent thirty years acquiring and practicing a skilled trade. This is the theological foundation of the dignity of manual labor.</p>

<h3>Theology of Work</h3>
<p>The feast of Joseph the Worker gave the Church a framework for what would later be developed in Pope John Paul II's encyclical <em>Laborem Exercens</em> (1981): that work is not merely economic activity but a participation in the creative work of God; that the worker's dignity derives not from what he produces but from the fact that he is made in God's image; that the exploitation of workers is a spiritual and moral offense; and that the Incarnation — God choosing to be born into a working-class family and to work with his hands — is the definitive statement of the dignity of labor. Joseph is patron of workers, of the Church, and of a happy death.</p>`,
    reflection: "God chose to be born in a carpenter's house, raised by a craftsman, and to spend thirty of his thirty-three years learning and practicing a skilled trade. This is not incidental background detail; it is the Incarnation's most surprising claim: that the eternal Word, through whom all things were made, wanted to know what it was like to cut a piece of wood straight. The dignity of labor is not a political slogan; it is a theological fact, certified by the thirty years in which the Son of God was a carpenter.",
    prayerToSaint: "O Saint Joseph the Worker, craftsman of Nazareth and foster father of the Lord, you spent thirty years teaching God's Son your trade. Intercede for all workers, especially the poor and the exploited, for all who seek dignified employment, and for all who feel that their daily work is too small for God's attention. Help us to see in every faithful performance of our trade an act of worship, and to know that the God who planed wood in Nazareth is present in every workshop, office, and field. Amen.",
  },

  // ── JULY ─────────────────────────────────────────────────────────────────

  {
    name: "Saint Camillus de Lellis",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XIV (1746)",
    quote: "More love, more love for the sick. They are our masters and we their servants.",
    fullBio: `<h3>Soldier to Servant of the Sick</h3>
<p>Camillus de Lellis was born on May 25, 1550, in Bucchianico, Abruzzi, Italy. He was a tall, physically powerful man — his father was a soldier, and Camillus followed him into a military life, fighting for Venice and Spain. He was also a compulsive gambler who squandered everything he had, including the clothes off his back. A chronic wound on his leg (which would never fully heal and tormented him for the rest of his life) kept him from continuing his military career. In 1575, at the age of twenty-five, during a period of working on construction at a Capuchin friary, he underwent a sudden and radical conversion under the influence of the friar's spiritual direction.</p>

<h3>Servant of the Sick</h3>
<p>Camillus threw himself into service at the San Giacomo hospital in Rome. He was horrified by the poor quality of care — the indifference, the cruelty, the insufficiency. He tried to enter the Capuchins but was repeatedly refused because of his leg wound. He formed a community of dedicated hospital servants, ordained (in 1584, at the insistence of his confessor Philip Neri), and founded the Order of the Ministers of the Sick — the Camillians — whose symbol is a large red cross on their habit (predating the Red Cross by nearly three centuries and probably influencing it). The Camillians staffed hospitals in Rome, Naples, Milan, and eventually across Europe, setting standards of medical care and patient dignity that were revolutionary.</p>

<h3>Last Years and Legacy</h3>
<p>Camillus spent his final years in pain — his old leg wound, his stomach, his feet — and continued working in hospitals until he was physically unable. He died on July 14, 1614. He was beatified in 1742 and canonized in 1746. Together with John of God, he is patron of hospitals, nurses, physicians, and the sick. His insistence that the sick are "our masters" — a reversal of the social hierarchy as radical as Francis's embrace of lepers — shaped Catholic medical ethics profoundly.</p>`,
    reflection: "Camillus de Lellis was a gambler and a soldier, twice as tall as an average man, with a festering wound in his leg that never healed — and from this unlikely vessel God drew one of the great founders of organized medical care. His insight was spiritual before it was medical: the sick are our masters. Not objects of charity. Not problems to be solved. Masters — whose service is the service of Christ. Every subsequent development in Catholic hospital care and medical ethics stands on this theological foundation.",
    prayerToSaint: "O Saint Camillus de Lellis, patron of the sick and founder of hospital ministry, you reversed the social order by calling patients your masters. Intercede for all nurses, doctors, orderlies, and medical staff; for all hospitals and hospices; and for all who are sick and lonely and afraid. Help us to see in every hospital bed the bed of Christ, and to serve the sick with the reverence you showed — not from above, as benefactors, but from below, as servants. Amen.",
  },

  // ── AUGUST ───────────────────────────────────────────────────────────────

  {
    name: "Saint Stephen of Hungary",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory VII (1083)",
    quote: "A kingdom with only one language and one custom is weak and fragile. Therefore I command you to receive immigrants and treat them well.",
    fullBio: `<h3>First King of Hungary</h3>
<p>Vajk (baptized Stephen/István) was born around 975 AD, the son of the Magyar chieftain Géza and his wife Sarolt (a Christian woman from Transylvania). Hungary had been settled by the Magyar tribes from the Central Asian steppe in the late ninth century; they were pagan, and their raids terrorized western Europe for decades until a catastrophic defeat at the Battle of Lechfeld (955) forced them to settle. Géza began the process of Christianization and centralization; Stephen completed it. He was baptized in childhood, married Gisela of Bavaria in 996, and succeeded his father in 997, immediately facing and defeating a rebellion of pagan Hungarian chieftains.</p>

<h3>The Christian Kingdom</h3>
<p>Pope Sylvester II sent Stephen a crown (the Holy Crown of Hungary, still preserved in Budapest) and the title "Apostolic King" in the year 1000 or 1001 — an act that placed Hungary officially within the Christian family of nations. Stephen spent his reign systematically building a Christian society: establishing bishoprics and monasteries, requiring every ten villages to build a church, outlawing pagan practices, codifying Hungarian law on Christian principles. His administrative directives (<em>Admonitions</em>) to his son Emeric include the remarkable command to receive immigrants and treat them well, because diversity strengthens rather than weakens a kingdom.</p>

<h3>Death and Legacy</h3>
<p>His son and heir Emeric (also a saint) died in a hunting accident in 1031, leaving Stephen without a clear successor. His last years were marked by succession disputes. He died on August 15, 1038 (the feast of the Assumption — to which he had dedicated his kingdom, giving Hungary the title "Mary's kingdom"). He was canonized in 1083. He is patron of Hungary, of kings, and of those who seek difficult conversions. The Holy Crown of Hungary is still treated as a sacred national symbol.</p>`,
    reflection: "Stephen of Hungary built a Christian nation from scratch — he had to import clergy, organize parishes, establish law, and manage a population whose grandparents had been pagan raiders. His instruction to welcome immigrants is historically remarkable: he knew that a kingdom that drew talent from outside itself would be stronger than one that maintained ethnic purity. He saw diversity as a gift rather than a threat. He dedicated his kingdom to Mary — recognizing that what he had built was beyond his power to sustain, and that Hungary needed a heavenly protector stronger than any earthly king.",
    prayerToSaint: "O Saint Stephen of Hungary, first Christian king and patron of Hungary, you built a nation on the foundation of faith and welcomed the stranger with the generosity of a Christian king. Intercede for Hungary and all the peoples of central Europe, for all who govern nations and seek to build just societies, and for all immigrants and refugees who seek welcome. Help us to receive diversity as a gift, to govern with justice and mercy, and to entrust our nations to the protection of Our Lady as you entrusted Hungary to her. Amen.",
  },

  {
    name: "Saint Helena of Constantinople",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Whether God has granted me life or whether He will take it from me, I give thanks for all. But above all, how much we owe Him for the discovery of the holy and saving wood!",
    fullBio: `<h3>Mother of the First Christian Emperor</h3>
<p>Helena (Flavia Iulia Helena) was born around 248 AD, probably in Drepanum in Bithynia (modern Turkey), to a family of humble origin. She met the Roman general (later co-emperor) Constantius Chlorus, who took her as his concubine or wife (the sources differ) and with whom she had a son, Constantine, born around 272. When Constantius was elevated to the rank of Caesar in 293, he abandoned Helena and married a woman of higher social standing. Constantine, when he became emperor, restored his mother to the highest honors — giving her the title Augusta and the use of imperial funds for her charitable projects.</p>

<h3>Pilgrimage to the Holy Land</h3>
<p>In 326-327 AD (by which time Helena was in her seventies or eighties), she undertook a pilgrimage to the Holy Land that became one of the most consequential journeys in Christian history. She ordered the construction of two great churches: the Church of the Nativity in Bethlehem (on the site of Jesus's birth) and the Church of the Eleona on the Mount of Olives (on the site of the Ascension). At Jerusalem, she oversaw the excavation of the site of the Crucifixion — then buried under a Roman temple to Venus — where, according to tradition, the True Cross was discovered. This discovery was commemorated in a feast that has been celebrated ever since (the Exaltation of the Holy Cross, September 14, and the Finding of the Cross, May 3 in older calendars).</p>

<h3>Death and Relics</h3>
<p>Helena died around 330 AD, shortly after her return from Palestine. Constantine mourned her deeply. Her sarcophagus — a red porphyry container of great magnificence — is in the Vatican Museums. Various churches claim portions of the True Cross she reportedly found; the question of their authenticity has been debated for centuries, but the theological importance of the discovery — the Church's claim that the Passion of Christ took place in real time and real space — endures regardless. She is patron of archaeologists (for her excavations), converts, difficult marriages, and divorced people.</p>`,
    reflection: "Helena went to Jerusalem at eighty and dug up the True Cross. This is the stubbornness of faith: the conviction that history matters, that the Incarnation took place in real time and real space, and that the places where God acted in the world deserve to be found and honored. She did not go to the Holy Land for a spiritual experience; she went to build churches on the actual sites. The Church of the Nativity still stands. Her pilgrimage is a permanent argument that Christian faith is not mythology but history, and that history has a geography worth finding.",
    prayerToSaint: "O Saint Helena, mother of Constantine and finder of the True Cross, you went at eighty to dig up the place where Christ was crucified, because you believed the Incarnation happened in real time and real space. Intercede for all pilgrims to the Holy Land, for archaeologists who seek to understand the places of salvation history, for converts who come to faith late in life, and for all who must make long journeys of faith at an age when the world would rather they stayed home. Help us to be as tenacious in seeking the presence of Christ as you were. Amen.",
  },

  // ── SEPTEMBER ────────────────────────────────────────────────────────────

  {
    name: "Saint Cyprian of Carthage",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "He cannot have God for his Father who does not have the Church for his Mother.",
    fullBio: `<h3>Rhetor to Bishop</h3>
<p>Thascius Caecilius Cyprianus was born around 200-210 AD in Carthage, North Africa, to a wealthy pagan family. He was a rhetor and teacher of rhetoric — a polished, sophisticated man of letters — before his conversion around 246 AD, which he describes in his letter <em>Ad Donatum</em> as a transformation of extraordinary completeness. He was baptized, was ordained a priest shortly after, and was elected Bishop of Carthage by popular acclamation in 249 — just two or three years after his baptism.</p>

<h3>The Decian Persecution and the Lapsed</h3>
<p>Almost immediately, the Decian persecution began (249-251). Cyprian went into hiding — a decision that scandalized some and that he later defended as following the example of Christ who withdrew from his enemies. During his two-year absence he governed his diocese by letter, maintaining pastoral contact and issuing guidance on the treatment of the <em>lapsi</em> — those who had apostatized under pressure. After the persecution ended he returned and had to navigate the same crisis as Rome: how to receive back those who had lapsed, against both the rigorists (who refused readmission) and the laxists (who readmitted too easily). His position — mercy through penance — largely prevailed and was confirmed at the Councils of Carthage.</p>

<h3>Unity and Martyrdom</h3>
<p>Cyprian's great work <em>De Ecclesiae Catholicae Unitate</em> (On the Unity of the Catholic Church) contains his famous axiom: "He cannot have God for his Father who does not have the Church for his Mother." He argued that the unity of the Church is grounded in the unity of the episcopate — the bishops, as successors of the apostles, hold the Church together. This ecclesiology would prove enormously influential. He was martyred on September 14, 258 (the feast of the Exaltation of the Holy Cross), beheaded outside Carthage under the Emperor Valerian's persecution.</p>`,
    reflection: "Cyprian's double axiom — you cannot have God as Father if you do not have the Church as Mother — is one of the most quoted and most contested lines in Christian tradition. It affirms that salvation is ecclesial, that the Church is not an optional add-on to personal faith but its necessary form, that the mother who bears us in baptism is the community of believers through which God works in the world. This conviction drove both his pastoral work with the lapsed and his insistence on episcopal unity: without the Church, there is no sacramental life; without episcopal unity, there is no Church.",
    prayerToSaint: "O Saint Cyprian of Carthage, bishop and martyr, you governed your diocese in hiding and returned to lead it to martyrdom, holding fast to the conviction that the Church is our mother without whom we cannot have God as father. Intercede for the Church in North Africa and throughout the African continent, for all bishops who must make difficult decisions about mercy and discipline, and for all who face martyrdom for their faith. Help us to love the Church as you loved her — imperfect but holy, humanly fragile but divinely sustained. Amen.",
  },

  {
    name: "Saint Sergius of Radonezh",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Contemplate the Holy Trinity in order to overcome the hate and discord of this world.",
    fullBio: `<h3>The Father of Russian Monasticism</h3>
<p>Sergius (baptized Bartholomew) was born around 1314-1322 in Rostov, Russia, to a noble family. When the Tatars devastated Rostov, his family fled to Radonezh near Moscow, where his parents died in poverty. Bartholomew had always been deeply pious and learned slowly as a student — a difficulty overcome, according to his life, by a miraculous encounter with an angelic elder in the forest who gave him the gift of reading. After his parents' deaths, he and his brother Stephen went into the forest at Makovets (near modern Sergiev Posad) and built a small hermitage with a chapel dedicated to the Holy Trinity.</p>

<h3>The Trinity Monastery</h3>
<p>Stephen eventually left for a monastery in Moscow, unable to bear the hardships. Bartholomew remained alone, was tonsured as a monk taking the name Sergius, and lived in extreme solitude and poverty — reportedly befriending the bears and wolves who visited his hermitage for food. Gradually disciples gathered; the small hermitage became the Trinity-Sergius Monastery (now the Trinity-Sergius Lavra, the most important monastery in Russia). Sergius was eventually persuaded to accept ordination and serve as abbot. He governed the community with remarkable gentleness, refusing all ecclesiastical promotions (including the metropolitanate of Moscow), accepting only the authority necessary to serve his monks.</p>

<h3>Battle of Kulikovo and Legacy</h3>
<p>In 1380, Prince Dmitry Donskoy of Moscow consulted Sergius before the Battle of Kulikovo — the pivotal Russian victory over the Mongol Golden Horde that is considered the beginning of Russia's national liberation. Sergius blessed Dmitry and reportedly sent two of his warrior-monks into battle. The victory was attributed in part to his intercession. He died on September 25, 1392. The Trinity-Sergius Lavra, which he founded, remains the most important center of Russian Orthodox spirituality. He is the most beloved Russian saint and is widely called the "builder of Russia."</p>`,
    reflection: "Sergius of Radonezh built a hermitage in the forest and invited everyone to contemplate the Trinity — the love of Father, Son, and Spirit — as the answer to the hatred and discord of the Mongol-devastated Russia around him. His insight is that the root of violence and discord is the failure to see the Trinitarian love that holds all things together; that the antidote to hatred is not political power but contemplation of the God who is love. His blessing of Dmitry before Kulikovo was not the mobilization of religious resources for political ends; it was the extension of Trinity-contemplation into the moment when Russia's existence was at stake.",
    prayerToSaint: "O Saint Sergius of Radonezh, builder of Russia and master of Trinitarian contemplation, you built a hermitage in the forest and invited your nation to overcome hatred by gazing on the love of the Trinity. Intercede for Russia and all the Orthodox peoples of the Slavic world, for all monastic communities, and for all who seek to build peace through prayer rather than through power. Help us to contemplate the Trinity as you did — not as an abstract doctrine but as the source of the love that overcomes all discord. Amen.",
  },

  {
    name: "Saint Thomas Becket",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pope Alexander III (1173)",
    quote: "For the name of Jesus and the protection of the Church, I am ready to embrace death.",
    fullBio: `<h3>Chancellor and Archbishop</h3>
<p>Thomas Becket was born on December 21, 1118 (possibly), in Cheapside, London, to a prosperous Norman merchant family. He received an excellent education, entered the household of Archbishop Theobald of Canterbury, and was appointed Archdeacon of Canterbury in 1154. When Henry II became king in 1154, Thomas became his chancellor — his closest friend and advisor, living with enormous splendor and serving Henry's political interests with great ability. In 1162, Henry appointed Thomas Archbishop of Canterbury — expecting his loyal friend to continue serving royal interests within the Church.</p>

<h3>The Conflict</h3>
<p>Thomas's transformation from royal servant to defender of the Church's liberties was one of the most dramatic conversions in medieval history. As archbishop, he adopted austerity, wore a hair shirt, and became a fierce defender of clerical independence against royal control. The central conflict was over the Constitutions of Clarendon (1164) — Henry's attempt to extend royal jurisdiction over the Church and especially over "criminous clerks" (clergymen accused of crimes). Thomas refused to accept the constitutions, was forced into exile in France (1164-1170), made a partial reconciliation with Henry, and returned to England in 1170 — immediately excommunicating bishops who had acted against the rights of Canterbury during his absence.</p>

<h3>The Murder in the Cathedral</h3>
<p>Henry, enraged, reportedly said "Will no one rid me of this turbulent priest?" Four knights took this as an order and traveled to Canterbury. On December 29, 1170, they entered the cathedral and murdered Thomas Becket before the altar of Saint Benedict. The murder of an archbishop in his own cathedral — a holy place, a place of asylum — shocked Christendom. Thomas was canonized within three years (1173). Henry II was forced to do public penance at Becket's tomb. The shrine of Saint Thomas at Canterbury became the most important pilgrimage site in England, immortalized in Chaucer's <em>Canterbury Tales</em>.</p>`,
    reflection: "Thomas Becket was killed in his own cathedral on the feast of the Holy Innocents' octave — the season of martyrdom. He knew they were coming; he refused to bar the doors. His famous final words — 'For the name of Jesus and the protection of the Church, I am ready to embrace death' — are not the words of a frightened man but of one who had thought through the situation and chosen. The Church's independence from state control was the issue. He paid for that independence with his life, and the king who ordered his death did penance at his tomb. Power yielded to sanctity.",
    prayerToSaint: "O Saint Thomas Becket, archbishop and martyr of Canterbury, you gave your life for the freedom of the Church from state control, and in dying made the pilgrim road to Canterbury one of the great spiritual highways of Europe. Intercede for the Church in England, for all bishops who must stand between the Church's mission and political power, and for all who are killed for defending institutional justice. Help us to say with you when the moment demands it: for the name of Jesus and the protection of the Church, I am ready. Amen.",
  },

];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed18 = mutation({
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
