import { mutation } from "./_generated/server";

// ─── RICH SAINT BIOGRAPHIES ───────────────────────────────────────────────────
// Full biographical content for major saints throughout the liturgical year.
// Each entry is matched to the DB by name (case-insensitive, partial match on month+day).

type SaintBio = {
  name: string; // Must match DB name
  fullBio: string;
  quote?: string;
  reflection?: string;
  prayerToSaint?: string;
  feastType?: string;
  liturgicalColor?: string;
  canonizedBy?: string;
};

const SAINT_BIOS: SaintBio[] = [
  // ─── JANUARY ─────────────────────────────────────────────────────────────

  {
    name: "Saint Lucy Filippini",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XI (1930)",
    quote: "Having learned in school those things that were necessary, they repeat them to parents and relatives at home and thus become so many young teachers.",
    fullBio: `<h3>Early Life</h3>
<p>Lucia (Lucy) Filippini was born on January 13, 1672, in Corneto-Tarquinia, Tuscany, Italy — an ancient city that predated Rome itself. She was the fifth and youngest child of Filippo Filippini and Maddalena Picchi. Tragedy struck early: her mother died before Lucia had reached her first birthday, and her father followed six years later. Now doubly orphaned, Lucia went to live with her aunt and uncle. Even as a young child, she displayed a remarkable piety — constructing small home altars, praying devoutly, and bearing a quiet, focused intelligence that those around her recognized as a gift from God. In the nearby Benedictine Nuns' Monastery of Santa Lucia, she received her First Holy Communion, an event that deepened her already intense spiritual life.</p>

<h3>Meeting Cardinal Barbarigo</h3>
<p>When Cardinal Mark Anthony Barbarigo made his first pastoral visit to Corneto, the young Lucia was profoundly moved. She followed him to Montefiascone, placing herself under his spiritual guidance and eagerly leaving behind all worldly attachments. She had a particular devotion to the Blessed Virgin Mary, and throughout her life, her love for Our Lady sustained her through years of illness and sacrifice. Cardinal Barbarigo, a reforming bishop who deeply desired a renewal of Christian family life in his diocese, recognized in Lucia the ideal instrument for his vision: he would establish schools for women to cultivate virtue, domestic dignity, and Christian faith from within the home.</p>

<h3>Founding the Schools</h3>
<p>In 1692, teachers were trained to staff the Cardinal's rapidly expanding schools. Lucia became the driving force behind their spiritual and pedagogical mission. The young ladies of Montefiascone were taught domestic arts — weaving, embroidering, household management — as well as reading and the essentials of Christian doctrine. Lucia understood that the transformation of society began in the home, and that women educated in virtue would become "so many young teachers," bringing what they learned back to their families and communities.</p>
<p>In 1707, Pope Clement XI, impressed by the work of these schools, summoned Lucia to Rome to found schools under his personal protection. Fifty-two schools were established during her lifetime, a remarkable achievement for any age. Lucia and her teachers also conducted retreats, classes, and conferences for adult women, strengthening their faith and encouraging works of charity. Her particular concern was always the poor — both the materially poor and those poor in knowledge of their faith.</p>

<h3>The Religious Teachers Filippini</h3>
<p>Lucia helped form the Institute of the Maestre Pie (Pious Teachers), later known as the Religious Teachers Filippini, which is credited with the religious and social uplift of Italian women well before compulsory education existed. The Cardinal, in his wisdom, devised a set of rules to guide Lucia and her followers in religious life. The Institute she helped found continued to grow after her death, spreading to Europe, the United States, Brazil, Ethiopia, and India — carrying forward the mission she and Cardinal Barbarigo had envisioned three centuries ago.</p>

<h3>Death and Canonization</h3>
<p>Afflicted with multiple illnesses for many years, Lucia Filippini died of cancer on March 25, 1732, at the age of 60, in Montefiascone, Italy. She was beatified by Pope Pius XI on June 13, 1926, and canonized by the same Pope on June 22, 1930. She is buried at the Cathedral of Montefiascone. In a singular honor, she was given the last available niche in the Basilica of Saint Peter in Rome — a testament to the Church's recognition of her extraordinary mission.</p>`,
    reflection: "Saint Lucy Filippini understood that the renewal of the Church and of society begins in the home, and that the home is shaped by the women within it. She did not seek grand recognition — she sought to teach. Her schools were not about producing scholars but forming Christians: women who would bring the light of the Gospel back to their families, their neighborhoods, and their communities. Her life is an encouragement to all who labor quietly in education and formation, trusting that faithful, patient teaching — one student at a time — can transform the world.",
    prayerToSaint: "O Saint Lucy Filippini, faithful teacher and mother of souls, you spent your life forming women in virtue and faith so that they might become lights in their homes and communities. Intercede for all teachers, catechists, and parents who labor to hand on the faith to the next generation. Help us to see in every soul we teach the face of Christ, and to teach as you did — with patience, charity, and unfailing trust in God's grace. Amen.",
  },

  {
    name: "Saint Basil the Great",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "The bread which you do not use is the bread of the hungry; the garment hanging in your wardrobe is the garment of him who is naked.",
    fullBio: `<h3>Early Life</h3>
<p>Basil was born around 330 AD in Caesarea, Cappadocia (modern-day Turkey), into a remarkable Christian family that produced multiple saints. His grandmother Macrina the Elder, his father Basil the Elder, his mother Emmelia, his sister Macrina the Younger, and his brother Gregory of Nyssa are all venerated as saints. After brilliant studies in Athens — where he befriended the future Gregory Nazianzen — Basil returned home, received baptism, and for a time pursued the ascetic life in Syria and Egypt, studying the monastic traditions of the East.</p>

<h3>Bishop and Defender of Orthodoxy</h3>
<p>Ordained priest by Bishop Eusebius of Caesarea, Basil became bishop of Caesarea in 370 AD. He governed during one of the most turbulent periods of Church history: the Arian controversy, which denied the full divinity of Christ. The Emperor Valens was an Arian and actively promoted heresy. Basil stood firm against imperial pressure, reportedly causing the Imperial Prefect to declare he had never been resisted so boldly. He reorganized the Church of Caesarea, reformed the liturgy (the Divine Liturgy of Saint Basil is still celebrated in Eastern Churches), and wrote the foundational Rules that govern Eastern monasticism to this day.</p>

<h3>Champion of the Poor</h3>
<p>Basil built outside Caesarea what contemporaries called the "Basileiad" — effectively the first hospital complex in the Western world: a home for the poor, a hospice for the sick, a guest house for travelers, and workshops for the unemployed. He gave away his own inheritance to feed the hungry during a famine and challenged the wealthy of his time with uncompromising words about the obligations of the rich toward the poor.</p>

<h3>Death and Legacy</h3>
<p>Basil died on January 1, 379, exhausted by fasting, illness, and the labors of his episcopate, at approximately 49 years of age. Gregory Nazianzen delivered his funeral oration, calling him "the great Basil." He was declared a Doctor of the Church and is venerated as one of the Three Holy Hierarchs by the Eastern Church. His writings on the Holy Spirit were decisive in the Council of Constantinople (381 AD), which formally defined the divinity of the Third Person of the Trinity.</p>`,
    reflection: "Basil the Great combined brilliant theology with radical charity — he saw that orthodoxy without mercy is incomplete. His Basileiad stands as a rebuke to every age that separates the love of God from the love of neighbor. His courage before imperial power reminds us that the bishop's first duty is to the truth, not to political convenience.",
    prayerToSaint: "O Saint Basil the Great, defender of the faith and father of the poor, you held fast to the truth of Christ's divinity when emperors and courtiers pressed you to compromise. Obtain for us your courage in professing the faith, your generosity toward the poor, and your wisdom in guiding the Church. Help us to live as you taught: with prayer, work, and a heart open to every neighbor in need. Amen.",
  },

  {
    name: "Saint Thomas Aquinas",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope John XXII (1323)",
    quote: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.",
    fullBio: `<h3>Early Life</h3>
<p>Thomas was born in 1225 at Roccasecca, near Aquino in southern Italy, to a noble family related to the Holy Roman Emperor. At age five he was sent to the Benedictine abbey of Monte Cassino for his early education, and later to the University of Naples. Against his family's strong opposition — his brothers actually kidnapped him and held him captive for a year, even sending a woman to tempt him — Thomas persisted in his desire to join the newly founded Order of Preachers (Dominicans). The legend holds that when the woman entered his room, Thomas drove her away with a burning brand from the fire, and then, kneeling in prayer, received from angels the gift of perpetual chastity.</p>

<h3>Study and Teaching</h3>
<p>Thomas studied under the great Albert the Great in Cologne and Paris, earning the nickname "the Dumb Ox" for his quiet demeanor — to which Albert prophetically replied: "We call this lad a dumb ox, but his bellowing in doctrine will one day resound throughout the world." Thomas became a master of theology at the University of Paris, one of the most coveted intellectual positions of the age. He wrote prolifically — commentaries on Aristotle and Scripture, disputed questions, and his masterwork, the <em>Summa Theologiae</em>, a systematic exposition of the whole of Catholic theology that remains the standard reference in Catholic seminaries to this day.</p>

<h3>The Summa and Contemplative Life</h3>
<p>The <em>Summa Theologiae</em>, though unfinished, runs to over two million words and integrates the insights of Aristotelian philosophy with the whole of Christian revelation. Thomas sought to show that faith and reason are not enemies but partners — that what reason can know of God prepares the mind for the deeper truths that only faith can reach. He also wrote the liturgical texts for the feast of Corpus Christi (<em>Pange Lingua</em>, <em>Tantum Ergo</em>, <em>O Salutaris Hostia</em>) which remain among the greatest hymns of the Catholic tradition. Late in life, he reportedly said: "All that I have written seems like straw compared to what I have seen," having experienced a mystical encounter that led him to stop writing the <em>Summa</em>.</p>

<h3>Death and Legacy</h3>
<p>Thomas died on March 7, 1274, at Fossanova Abbey, while traveling to the Council of Lyon. He was only about 49 years old. Pope John XXII canonized him in 1323, and in 1567, Pope Pius V declared him a Doctor of the Church, giving him the title <em>Doctor Angelicus</em> (the Angelic Doctor). He is the patron of Catholic schools and universities, of scholars and students, and of booksellers. Pope Leo XIII's encyclical <em>Aeterni Patris</em> (1879) mandated Thomistic philosophy as the basis of Catholic education.</p>`,
    reflection: "Thomas Aquinas teaches us that the search for truth is itself a form of worship. He believed that every truth, discovered by reason, ultimately reflects the truth of God. His life of intense prayer combined with intense intellectual labor shows that contemplation and action are not opposites but partners. When he struggled, he prayed before the Crucifix; when God spoke, he listened and wrote. His greatest gift is the reminder that faith seeking understanding is the highest use of the human mind.",
    prayerToSaint: "O Saint Thomas Aquinas, Angelic Doctor and prince of theologians, you devoted your life to seeking God through reason illumined by faith. Intercede for all students and teachers, that they may love truth for its own sake and find in every truth a glimpse of God. Help us to study with diligence, to pray with devotion, and to hold fast to the faith with both heart and mind. Amen.",
  },

  {
    name: "Saint John Bosco",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XI (1934)",
    quote: "Run, jump, shout, make all the noise you want — but do not sin.",
    fullBio: `<h3>Early Life</h3>
<p>Giovanni (John) Melchior Bosco was born on August 16, 1815, in Becchi, near Turin, Piedmont, Italy, the youngest of three sons of Francesco Bosco and Margherita Occhiena. His father died when John was barely two years old, leaving the family in poverty. His mother, Margherita, a woman of extraordinary faith and practical wisdom, shaped his soul with her simple but profound religiosity. As a boy, John received in a dream a vision that would define his life: he saw a crowd of wild boys who, when he tried to quiet them with blows, turned into animals — until a beautiful Lady appeared and said: "Not with blows, but with gentleness and love, must you win these friends of yours."</p>

<h3>Priest and Educator of Youth</h3>
<p>Ordained a priest in 1841, Don Bosco quickly recognized the misery of the thousands of young men flooding into industrial Turin — homeless, jobless, easily exploited. He gathered them not in formal institutions but in open spaces: fields, church courtyards, wherever he could find room. His "Preventive System" of education — based on reason, religion, and kindness — was a radical departure from the punitive discipline typical of the era. He established workshops to train the boys in trades, schools to teach them to read, chapels for prayer, and theaters for plays. His goal was always the same: to make them "good Christians and honest citizens."</p>

<h3>Founding the Salesians</h3>
<p>In 1859, Don Bosco formally founded the Society of Saint Francis de Sales — the Salesians — a religious congregation dedicated to the education and pastoral care of youth, especially the poor. The Salesian Sisters (Daughters of Mary Help of Christians), co-founded with Saint Mary Mazzarello in 1872, extended the mission to girls. By his death, the Salesian congregation numbered over a thousand priests and brothers working across five continents. He also founded the Salesian Cooperators, a lay association, and the Association of Mary Help of Christians for the devotion he believed had protected him throughout his extraordinary apostolate.</p>

<h3>Miracles and Mystical Gifts</h3>
<p>Don Bosco was a man of supernatural gifts: he is reported to have read consciences, prophesied future events with remarkable accuracy, and multiplied food and chestnut oil when provisions ran short. He was regularly visited by his "dream-prophecies" — vivid visions of the future of the Salesian mission — and his biography recounts numerous miraculous healings. Through it all, his manner remained warm, approachable, and shot through with humor.</p>

<h3>Death and Canonization</h3>
<p>Don Bosco died on January 31, 1888, in Turin. More than forty thousand people came to venerate his body. He was beatified by Pope Pius XI in 1929 and canonized in 1934. He is buried in the Basilica of Mary Help of Christians in Turin, which he himself built. He is the patron of youth, editors, magicians, and apprentices.</p>`,
    reflection: "John Bosco found God in the faces of street children. When others saw a problem, he saw a person; when others reached for punishment, he reached for kindness. His genius was simple: treat young people with the love and respect they deserve as children of God, and they will become who God made them to be. His life is a perpetual challenge to every generation to invest in youth — not just their education, but their joy.",
    prayerToSaint: "O Saint John Bosco, loving father and teacher of youth, you spent yourself without reserve for the poorest and most abandoned young people of your age. Intercede for all young people today who are lost, lonely, or without direction. Obtain for educators and parents your patience, your creativity, and your unshakeable belief that every young person is worth saving. Help us to meet the young where they are and lead them, with kindness and love, toward God. Amen.",
  },

  {
    name: "Saint Francis de Sales",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Alexander VII (1665)",
    quote: "Ask nothing, refuse nothing.",
    fullBio: `<h3>Early Life</h3>
<p>Francis de Sales was born on August 21, 1567, at the Château de Sales in Thorens, Savoy (now part of France), to a noble family. His father intended him for a career in law and public service. Francis studied at Paris, where he encountered Calvinist theology and was plunged into a spiritual crisis about predestination that brought him to the brink of despair. He resolved the crisis by making a total act of self-surrender to God: "Whatever may be, Lord, at least let me love you in this life, if I am not able to love you in eternity." The peace that followed was unshakeable. He studied law in Padua and, against his father's wishes, pursued ordination to the priesthood in 1593.</p>

<h3>Apostle to the Chablais</h3>
<p>Assigned to the Chablais region — a heavily Calvinist area of Savoy — Francis undertook a three-year mission to bring the population back to the Catholic faith. Without the authority of force and often in physical danger, he went door to door, printed thousands of small leaflets summarizing Catholic teaching, and preached wherever he could. By the end of the mission, the region had largely returned to Catholicism. His approach — patient, gentle, deeply personal — would characterize everything he did.</p>

<h3>Bishop and Spiritual Director</h3>
<p>In 1602, Francis became Bishop of Geneva (though he resided in Annecy, as Geneva was under Calvinist control). As bishop, he was known for personal poverty, exhausting pastoral labor, and accessibility to all who sought his counsel. His spiritual friendship with Jeanne de Chantal led to the co-founding of the Order of the Visitation in 1610, a congregation for women who desired contemplative life but whose health or age prevented more austere religious life. His most lasting literary works — <em>Introduction to the Devout Life</em> (1609) and <em>Treatise on the Love of God</em> (1616) — remain classics of Catholic spirituality. <em>Introduction to the Devout Life</em> was revolutionary in its argument that holiness is for everyone in every state of life, not just monks and nuns.</p>

<h3>Death and Legacy</h3>
<p>Francis died on December 28, 1622, in Lyon, France, worn out by apostolic labor. He was 55 years old. Beatified in 1661 and canonized in 1665, he was declared a Doctor of the Church by Pope Pius IX in 1877 — the Doctor of the Love of God. He is the patron of writers, journalists, the deaf, and the Catholic press. The Salesians of Don Bosco took their name in his honor.</p>`,
    reflection: "Francis de Sales showed that holiness and sweetness are not opposites but inseparable. His famous axiom — 'You can catch more flies with a spoonful of honey than with a whole barrel of vinegar' — was not merely a rhetorical strategy but a theology: God wins souls through love, and those who serve him must serve him in the same way. His <em>Introduction to the Devout Life</em> remains perhaps the most practical guide to sanctity ever written, and its central message — that every person in every walk of life is called to holiness — is the message the Church most needs in every age.",
    prayerToSaint: "O Saint Francis de Sales, gentle bishop and Doctor of Love, you taught that holiness is for every soul, in every state of life. Guide all who struggle to find God in the ordinary: in work, in family, in the small events of daily life. Obtain for us your patience, your gentleness, and your unshakeable confidence that God desires all of us to be saints. Help writers, journalists, and all who communicate to speak the truth with love. Amen.",
  },

  // ─── FEBRUARY ────────────────────────────────────────────────────────────

  {
    name: "Saint Blaise of Sebaste",
    feastType: "Optional Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "I will not cease to invoke God's help in your behalf.",
    fullBio: `<h3>Early Life and Episcopate</h3>
<p>Blaise (Blasius) was bishop of Sebaste in Armenia (in present-day Turkey) in the early 4th century, during the reign of Emperor Licinius. Little is historically certain about his life; most accounts come from later hagiographies. He is said to have been a physician before his ordination and episcopate. Fleeing persecution, he retreated to a cave in the mountains, where, according to tradition, wild animals came to him peacefully for healing and blessing — an image that evokes the harmony of Eden restored in the holy person.</p>

<h3>Arrest and Martyrdom</h3>
<p>Discovered by hunters, Blaise was arrested and brought to the governor Agricolaus. While being led to prison, he reportedly healed a boy who was choking on a fish bone, and healed a poor woman's pig that had been seized by a wolf — miracles that have ensured his patronage of throat ailments for seventeen centuries. He was imprisoned, tortured with iron combs (the instruments of his martyrdom and why wool carders claim him as patron), and finally beheaded around 316 AD, calmly professing his faith to the end.</p>

<h3>The Blessing of Throats</h3>
<p>The blessing of throats on his feast day — two crossed candles held against the throat with the prayer: "Through the intercession of Saint Blaise, bishop and martyr, may God deliver you from ailments of the throat and from every other evil" — is one of the most beloved sacramentals of the Catholic year. It dates to the Middle Ages and continues to draw millions to church on his feast day, a testament to the trust ordinary people place in his intercession.</p>`,
    reflection: "Saint Blaise reminds us that the Church has always trusted in the intercession of the saints for very concrete, physical needs. The blessing of throats is not superstition but faith: the conviction that God cares for our bodies as well as our souls, and that the prayers of his friends in heaven reach the throne of grace on our behalf. In an age that separates body from soul, Blaise reminds us that salvation is embodied.",
    prayerToSaint: "O Saint Blaise, bishop and martyr, whose intercession has protected the faithful from ailments of the throat for centuries, protect our health and our voices. Help us to use our voices in your honor: to speak the truth, to proclaim the faith, and to praise God with our lips. By your intercession, may we be preserved from all evil, both of body and of soul. Amen.",
  },

  {
    name: "Saint Agatha of Sicily",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Jesus Christ, Lord of all, you see my heart, you know my desires. Possess all that I am. I am your sheep; make me worthy to overcome the devil.",
    fullBio: `<h3>Life and Martyrdom</h3>
<p>Agatha was a young Sicilian Christian of noble birth who is venerated as one of the most famous virgin-martyrs of the early Church, along with Lucy, Agnes, and Cecilia. She died around 250 AD during the Decian persecution. Historical sources are limited, but the tradition is consistent: Quintianus, a Roman official (or possibly the Consul of Sicily), desired Agatha as his wife or mistress. When she refused, declaring her consecration to Christ, he had her arrested, subjected to unspeakable tortures — including the amputation of her breasts — and imprisoned. She reportedly received a vision of Saint Peter in prison, who healed her wounds.</p>

<h3>Death and Significance</h3>
<p>Agatha was martyred and buried in Catania, Sicily, where her shrine and relics have been venerated since the 4th century. She is mentioned by name in the Roman Canon (Eucharistic Prayer I) — one of only seven women saints so honored in the most ancient prayer of the Mass. Her feast has been kept on February 5 since at least the time of Pope Symmachus (d. 514 AD). A veil of Saint Agatha is said to have stopped a lava flow from Mount Etna in antiquity, securing her patronage of the city of Catania and of volcanic regions.</p>

<h3>Patronage and Devotion</h3>
<p>Saint Agatha is the patron of breast cancer patients, nurses, nursing mothers, bell-founders, and the island of Sicily. Hallowed bread rolls (pani di Sant'Agata) and pastries shaped to recall her martyrdom are blessed and distributed on her feast day in Sicily — a striking testimony to how Christian tradition has transformed even suffering into celebration.</p>`,
    reflection: "Agatha's courage stands as a perpetual witness against the abuse of power and the exploitation of the vulnerable. She said 'no' to a powerful man and 'yes' to her Lord — and she paid for it with her life. But her story did not end in defeat. She is remembered; her torturer is not. The Church's veneration of her body speaks to the dignity of every body, especially those harmed by violence.",
    prayerToSaint: "O Saint Agatha, virgin and martyr, you endured the most terrible suffering rather than betray your love for Christ. Intercede for all who suffer from illness, especially those afflicted with cancer. Protect all who are threatened or abused in their dignity. Help us to hold fast to our commitment to God even when the cost seems unbearable, trusting that nothing done for love of him is ever wasted. Amen.",
  },

  {
    name: "Saint Polycarp of Smyrna",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Eighty and six years have I served Him, and He never did me any wrong. How can I speak evil of my King who saved me?",
    fullBio: `<h3>Disciple of the Apostles</h3>
<p>Polycarp of Smyrna (c. 69–155 AD) occupies a unique place in the history of the Church: he stands as a living link between the Apostolic generation and the Church of the mid-second century. According to Irenaeus of Lyon, who knew him personally, Polycarp had been "instructed by the Apostles and conversed with many who had seen Christ." The Apostle John himself is credited with his formation in the faith. As bishop of Smyrna (modern Izmir, Turkey), Polycarp was a revered figure throughout the Christian world, consulted on matters of doctrine and practice by believers from Rome to Asia Minor.</p>

<h3>Letter and Teaching</h3>
<p>Polycarp's letter to the Philippians survives and reveals a pastor of great learning, pastoral wisdom, and uncompromising commitment to the faith received from the Apostles. He vigorously opposed Marcion and other Gnostic teachers, calling Marcion "the first-born of Satan" when they met in Rome. His insistence on handing on faithfully what he had received from the Apostles — without addition or subtraction — makes him a paradigmatic witness to the principle of Apostolic Tradition.</p>

<h3>Martyrdom</h3>
<p>Around 155 AD (or possibly 167–168 AD), during a period of anti-Christian violence in Smyrna, Polycarp was arrested. The account of his martyrdom — the oldest such account outside the New Testament — is one of the most moving documents of the early Church. Brought before the proconsul, he was urged to renounce Christ and spare his life. His reply has echoed through the centuries: "Eighty and six years have I served Him, and He never did me any wrong. How can I speak evil of my King who saved me?" When the flames were lit, witnesses reported that they formed a vault around him without burning him; he was finally killed with a dagger. His feast is celebrated on February 23.</p>`,
    reflection: "Polycarp's martyrdom is the martyrdom of a very old man — and that is its particular power. At 86, after a lifetime of service, he was given the chance to save his life by a simple public denial. He refused, and his refusal has inspired Christian courage for nineteen centuries. The question he asked — 'How can I speak evil of my King who saved me?' — is the question every Christian faces in some form.",
    prayerToSaint: "O Saint Polycarp, bishop and martyr, disciple of the Apostles and teacher of the Church, you received the faith from those who had known our Lord and handed it on intact to those who came after you. Intercede for the Church in every age, that she may preserve the Apostolic faith without compromise. Strengthen us to confess Christ before the world, as you confessed him before your executioners. Amen.",
  },

  // ─── MARCH ───────────────────────────────────────────────────────────────

  {
    name: "Saint Patrick of Ireland",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation (recognized before formal canonization process)",
    quote: "Christ with me, Christ before me, Christ behind me, Christ in me, Christ beneath me, Christ above me, Christ on my right, Christ on my left.",
    fullBio: `<h3>Captivity and Conversion</h3>
<p>Patrick was born around 385 AD in Roman Britain, the son of Calpurnius, a deacon, and grandson of a priest (in the era before clerical celibacy became universal). At around age 16, he was captured by Irish pirates and taken to Ireland, where he spent six years as a slave, tending sheep on the slopes of what is traditionally identified as Slemish Mountain in County Antrim. In this desolate servitude, away from family and civilization, Patrick experienced a profound conversion: "I would pray constantly," he writes in his <em>Confessio</em>, "and more and more did the love of God and the fear of Him flame within me."</p>

<h3>Escape and Return</h3>
<p>After hearing a voice in a dream telling him that a ship was ready for him, Patrick escaped and made his way to the coast, where he found passage to Britain and eventually to France. He studied under Bishop Germanus of Auxerre and was eventually ordained bishop. Despite the resistance of some in the Church who questioned his education and fitness, Patrick felt an overwhelming call to return to Ireland — to the very people who had enslaved him. "I am bound by the Spirit," he wrote, "not to see any of my family."</p>

<h3>Apostle to Ireland</h3>
<p>Beginning his mission to Ireland around 432 AD, Patrick traveled throughout the island — from the hill of Tara (seat of the High Kings) to the mountains of Connaught — preaching, baptizing, and establishing churches and monasteries. He reportedly baptized thousands and ordained hundreds of priests. His method of inculturation was remarkable: he used familiar symbols (the shamrock for the Trinity) and met people on their own cultural ground. His mission transformed Ireland from a tribal warrior society into "the Island of Saints and Scholars" — a center of Christian learning that would later re-evangelize a Europe darkened by the fall of Rome.</p>

<h3>Death and Legacy</h3>
<p>Patrick died around 461 AD, most probably at Saul in County Down. His tomb is traditionally identified with the Cathedral of Down in Downpatrick. He wrote two works that survive: the <em>Confessio</em> (a spiritual autobiography) and the <em>Epistola</em> (a letter denouncing the British chieftain Coroticus for enslaving Irish Christians). These writings reveal a man of deep faith, profound humility, and an unshakeable conviction of God's mercy. He is the patron saint of Ireland, Nigeria, and engineers.</p>`,
    reflection: "Patrick's story is the story of a man who returned to his prison — freely, willingly, out of love. Ireland had enslaved him; he went back to set it free. This is the logic of the Gospel: the wounded healer, the one who has suffered who returns to suffer again for others. His prayer, the Breastplate of Saint Patrick ('Christ with me, Christ before me...'), expresses the essence of Celtic spirituality: the immense nearness of Christ in every moment of daily life.",
    prayerToSaint: "O Saint Patrick, apostle of Ireland, you returned in love to those who had enslaved you and brought the light of Christ to their darkness. Intercede for all missionaries who carry the Gospel to unfamiliar and dangerous places. Pray for the country you loved and transformed — and for all who trace their faith back to your tireless labor. Help us to see our own hardships as God's preparation for our mission. Amen.",
  },

  {
    name: "Saint Joseph of Nazareth",
    feastType: "Solemnity",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "He who honors God with silence does not diminish His glory. God speaks through those who work for His love.",
    fullBio: `<h3>The Silent Saint</h3>
<p>Joseph of Nazareth is one of the most venerated saints in the Catholic Church, yet not a single word he spoke is recorded in the Gospels. He is the Guardian of the Holy Family — the man entrusted by God with the protection and care of the Mother of God and the Son of God made flesh. His greatness lies precisely in his hiddenness. He is the model of the faithful worker, the just man, the father who protects and provides — and the saint of silent fidelity.</p>

<h3>Betrothal and the Angel's Visit</h3>
<p>Joseph was betrothed to the Virgin Mary when he discovered she was with child. Matthew's Gospel tells us that "because he was a just man and unwilling to put her to shame, he resolved to send her away quietly" (Matthew 1:19). His first instinct was mercy, not judgment. Then, in a dream, an angel revealed the truth: "Joseph, son of David, do not fear to take Mary your wife, for that which is conceived in her is of the Holy Spirit." Joseph's response was immediate and total obedience — he took Mary as his wife and named the child Jesus.</p>

<h3>Guardian of the Holy Family</h3>
<p>Joseph led the Holy Family to Bethlehem for the census, found shelter in the stable, and received the adoration of shepherds and Magi. An angel warned him in a dream to flee to Egypt to escape Herod's massacre; he rose and departed that same night. When Herod died, another dream directed him to return to Israel — and he settled the family in Nazareth, fulfilling the prophecy. Three times in Matthew's Gospel, an angel communicates God's will to Joseph through dreams; three times Joseph obeys without question or delay. His is the obedience of a man whose will is perfectly aligned with God's.</p>

<h3>The Hidden Years</h3>
<p>For some thirty years, Joseph raised and formed the Son of God. He taught Jesus to walk, to work, to pray the prayers of Israel. He passed on the trade of carpentry. He was the one Jesus called "father" in the presence of men. The Gospels' silence about Joseph after the Finding in the Temple (Luke 2:41-52) suggests that he died before the public ministry began — a death tradition imagines as the most blessed imaginable: in the arms of Jesus and Mary.</p>

<h3>Patronage</h3>
<p>Saint Joseph is the patron of the Universal Church (declared by Pope Pius IX in 1870), of workers and laborers (his feast on May 1 is the Church's answer to International Workers' Day), of fathers, of the dying, of families, and of carpenters. Pope Francis added his name to all the Eucharistic Prayers of the Roman Rite in 2013.</p>`,
    reflection: "Joseph teaches us the sanctity of hidden, faithful service. He was the first person entrusted with the care of God Incarnate — and he exercised that trust in the silence of a carpenter's workshop, in the darkness of a flight into Egypt, in the ordinary rhythm of family life. His greatness was not visible to the world. It was visible to God. He is the patron of everyone who labors faithfully in obscurity, trusting that faithfulness in hidden things is itself a form of glory.",
    prayerToSaint: "O Saint Joseph, Guardian of the Holy Family and patron of the Universal Church, you protected the Mother of God and the Child Jesus with silent, faithful love. Protect our families from every danger, spiritual and physical. Intercede for fathers, that they may fulfill their vocation with courage and tenderness. Pray for all who labor with their hands, that they may find dignity and joy in their work, as you found it in serving the Lord of all. Amen.",
  },

  // ─── APRIL ───────────────────────────────────────────────────────────────

  {
    name: "Saint Catherine of Siena",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius II (1461)",
    quote: "Be who God meant you to be and you will set the world on fire.",
    fullBio: `<h3>Early Life</h3>
<p>Catherine Benincasa was born on March 25, 1347, in Siena, the twenty-third of twenty-five children of a dyer and his wife. From early childhood she displayed extraordinary mystical gifts. At age six she reportedly experienced a vision of Christ enthroned in glory. At seven she made a private vow of virginity. She resisted her family's attempts to marry her off by cutting off her hair and withdrawing from family meals. Eventually she was allowed to enter the Third Order of Saint Dominic (the Mantellate) and began an intense interior life of prayer, penance, and mystical experience.</p>

<h3>Apostle of the Streets</h3>
<p>After years of intense solitary prayer, Catherine experienced a mystical marriage with Christ and was directed by God to go out into the world. She nursed the plague-stricken, cared for the condemned, and worked among the poorest citizens of Siena. Her personal charisma and holiness attracted a large "famiglia" of followers — priests, scholars, and laypeople who revered her as a spiritual mother. She received the stigmata in 1375, though she prayed that the wounds remain invisible during her lifetime.</p>

<h3>Theologian and Politician</h3>
<p>Perhaps most remarkably, Catherine — a woman who learned to read only as an adult, and who dictated rather than wrote her letters and her <em>Dialogue</em> (a mystical theological masterwork) — became one of the most influential figures in fourteenth-century Europe. She wrote hundreds of letters to popes, kings, queens, condottieri, and prisoners, directing affairs of Church and state with remarkable authority. Most famously, she pressured Pope Gregory XI to end the "Babylonian Captivity" of the papacy in Avignon and return to Rome — which he did in 1377, largely as a result of her insistence. She addressed him as "Babbo" (Daddy) and called him to his duty without deference to his office.</p>

<h3>Death and Legacy</h3>
<p>Catherine died in Rome on April 29, 1380, at age 33, worn out by fasting, mystical suffering, and apostolic labor. She was canonized in 1461, declared a Doctor of the Church by Pope Paul VI in 1970 — one of only four women so honored — and in 1999, Pope John Paul II declared her co-patroness of Europe with Saints Benedict, Cyril, Methodius, Bridget of Sweden, and Edith Stein.</p>`,
    reflection: "Catherine of Siena is proof that God does not limit his call to the educated or the powerful. She was a dyer's daughter who had never studied theology — and she became the woman who called the Pope back to Rome. Her secret was simple: she burned with love for God and refused to let anyone or anything diminish that love. 'Be who God meant you to be and you will set the world on fire' — she was who God meant her to be, and the world has never been the same.",
    prayerToSaint: "O Saint Catherine of Siena, virgin, Doctor of the Church, and patroness of Europe, you burned with love for God and channeled that fire into service of the Church and the world. Intercede for the Church in her leaders, that they may have courage to follow the path of truth. Pray for women who are called to speak truth to power. Help us to love God with Catherine's passion and to serve neighbor with her tireless generosity. Amen.",
  },

  // ─── JUNE ────────────────────────────────────────────────────────────────

  {
    name: "Saint Anthony of Padua",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory IX (1232)",
    quote: "The things of God are not made known to men by natural intelligence. They are made known only through the Holy Spirit.",
    fullBio: `<h3>Early Life in Portugal</h3>
<p>Anthony was born Fernando Martins de Bulhões on August 15, 1195, in Lisbon, Portugal, to a noble family. He received an excellent education at the Cathedral School in Lisbon, then joined the Augustinian Canons in Coimbra, where he became deeply formed in Scripture and theology. The turning point came in 1220, when the relics of the Five Franciscan Martyrs of Morocco passed through Coimbra: Franciscan friars had been beheaded in Morocco for preaching the Gospel. Anthony was so moved by their martyrdom that he petitioned to enter the Franciscan Order, desiring to go to Morocco and die for Christ.</p>

<h3>Illness and Hidden Gifts</h3>
<p>Anthony sailed for Morocco, but severe illness forced him to turn back; his ship was blown off course and landed in Sicily. Making his way to central Italy, he attended the Chapter of Mats of 1221 (the great gathering of early Franciscans) and was assigned to a remote hermitage near Forli for prayer and manual labor. His extraordinary gifts remained hidden until a chance occasion at an ordination ceremony, when — the scheduled preacher having failed to appear — Anthony was asked to speak. What poured forth astonished everyone present. Word reached Francis of Assisi himself, who wrote: "I am pleased that you teach sacred theology to the brothers, so long as — in the words of the Rule — you do not extinguish the spirit of prayer and devotion during study of this kind."</p>

<h3>Preacher and Theologian</h3>
<p>Anthony became the first lector (theology teacher) of the Franciscan Order. He preached throughout France and Italy with extraordinary effect — crowds so large that churches could not hold them forced him to preach in city squares and fields. He was a relentless opponent of heresy (particularly Catharism) and an advocate of the poor. Miracles multiplied around him: a mule is said to have knelt before the Blessed Sacrament he carried in a procession; a fish allegedly raised their heads from the water to hear him preach.</p>

<h3>Death and Canonization</h3>
<p>Anthony died on June 13, 1231, near Padua, exhausted and ill, at only 35 or 36 years of age. He was canonized by Pope Gregory IX less than a year after his death — one of the fastest canonizations in history. In 1946, Pope Pius XII declared him a Doctor of the Church with the title <em>Doctor Evangelicus</em>. He is one of the most popular saints in the world, invoked especially for finding lost objects (a tradition linked to a novice who stole his psalter, then returned it) and for help in finding what has been lost in a deeper sense.</p>`,
    reflection: "Anthony of Padua was a man who spent most of his life in obscurity — years of study, a failed journey, an anonymous hermitage. His gifts were extraordinary, but they flowered only in obedience and humility. When he finally spoke, it was because he was asked. There is a lesson here for the gifted: gifts given for God's glory must wait on God's timing, not our ambition.",
    prayerToSaint: "O Saint Anthony of Padua, Doctor of the Church and wonder-worker, you are invoked by millions who have lost what is precious to them. Intercede for all who have lost their way — in faith, in hope, in love. Help us to find what we have lost of God in our lives. Through your powerful intercession, restore to us the spirit of prayer and the love of the poor that Jesus desires of all his disciples. Amen.",
  },

  {
    name: "Saint Thomas More",
    feastType: "Optional Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pope Pius XI (1935)",
    quote: "I die the King's good servant, but God's first.",
    fullBio: `<h3>Statesman and Scholar</h3>
<p>Thomas More was born on February 7, 1478, in London, the son of a lawyer. He received an exceptional humanist education and became one of the brightest intellects of the English Renaissance, a close friend of Erasmus and a correspondent with the leading scholars of Europe. His <em>Utopia</em> (1516) remains a classic of political philosophy. He married Jane Colt in 1505 and, after her death, Alice Middleton; together they raised four children whom he educated with unusual care — his daughter Margaret was famous for her Latin scholarship, a rarity for women of the age.</p>

<h3>Chancellor of England</h3>
<p>Thomas rose through the ranks of royal service: undersheriff of London, Member of Parliament, Speaker of the House of Commons, and in 1529, Lord Chancellor of England — the highest legal office in the realm. He served Henry VIII faithfully for years, but when Henry sought to have his marriage to Catherine of Aragon annulled and to declare himself Supreme Head of the Church of England, More could not comply. He resigned the chancellorship in 1532 and withdrew from public life, hoping his silence would protect him.</p>

<h3>Trial and Execution</h3>
<p>In 1534, the Act of Supremacy required all subjects to swear an oath acknowledging Henry as head of the Church. More refused and was imprisoned in the Tower of London. At his trial, he was condemned on the perjured testimony of Richard Rich. His execution was ordered for July 6, 1535. Walking to the scaffold, he reportedly told the Lieutenant of the Tower that his legs were weak, and asked him: "I pray you, Mr. Lieutenant, see me safe up, and for my coming down let me shift for myself." He died affirming that he was "the King's good servant, but God's first."</p>

<h3>Canonization and Legacy</h3>
<p>Thomas More was beatified by Pope Leo XIII in 1886 and canonized along with John Fisher in 1935 by Pope Pius XI. In 2000, Pope John Paul II declared him patron of statesmen and politicians. His life stands as one of the most compelling testimonies in history to the sovereignty of conscience formed by God's law over the demands of earthly power.</p>`,
    reflection: "Thomas More died for the freedom of the Church and the supremacy of conscience. He was no fanatic — he loved his family, his country, and his king. But there was one thing he loved more. His death was not the failure of statecraft but its highest expression: a demonstration that there are things no king can command. In every age when the state demands what belongs to God alone, More's example shines with renewed urgency.",
    prayerToSaint: "O Saint Thomas More, patron of statesmen and lawyers, you chose God over the favor of a king and a comfortable life. Intercede for all who hold public office, that they may govern with justice and integrity and never sacrifice conscience on the altar of power or popularity. Help lawyers to seek truth above victory. Protect all who must choose between their faith and their livelihoods. Amen.",
  },

  // ─── JULY ────────────────────────────────────────────────────────────────

  {
    name: "Saint Mary Magdalene",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "They have taken my Lord, and I do not know where they have laid him.",
    fullBio: `<h3>Disciple and Witness</h3>
<p>Mary of Magdala is one of the most significant figures in the Gospels: a faithful disciple who accompanied Jesus from Galilee, who stood at the foot of the Cross when most of the male disciples had fled, who was among the first to arrive at the tomb on Easter morning, and who was the first witness of the Resurrection. The Gospel of John records her intimate encounter with the Risen Christ in the garden, where she mistook him for the gardener until he called her by name: "Mary." She is called <em>Apostola Apostolorum</em> — "Apostle to the Apostles" — by several Church Fathers, because she was sent by the Risen Lord to tell the other disciples that he had risen.</p>

<h3>Who Was She?</h3>
<p>The Gospels identify Mary Magdalene as the woman from whom Jesus cast out "seven demons" (Luke 8:2). A later tradition, primarily in the Western Church, conflated her with the unnamed sinful woman who anointed Jesus' feet (Luke 7:37-50) and with Mary of Bethany, sister of Martha and Lazarus. While this conflation shaped Western devotion and art for centuries, the Eastern Church and modern biblical scholarship generally distinguish these as three separate women. Pope Francis elevated her feast to the rank of Feast (from Memorial) in 2016, calling her "the Apostle of the New Hope."</p>

<h3>Tradition After the Resurrection</h3>
<p>The Western tradition holds that Mary Magdalene, after Pentecost, traveled to Provence in southern France with Martha, Lazarus, and others, and evangelized that region. She is said to have spent her last years as a hermit in a cave at La Sainte-Baume. Whether or not this tradition is historical, it reflects the Church's intuition that the woman who loved Christ most ardently and was first to proclaim his Resurrection did not rest until she had shared that proclamation with the world.</p>`,
    reflection: "Mary Magdalene's story is the story of love stronger than grief. She came to the tomb in the darkness, weeping, searching. She could not leave even when others had gone away. And because she stayed, she was the first to hear her name spoken by the Risen Lord. There is a teaching here: God reveals himself to those who keep looking, who refuse to accept that the story is over, who seek him even in desolation.",
    prayerToSaint: "O Saint Mary Magdalene, Apostle to the Apostles, you loved the Lord with a love that nothing could discourage. When others fled, you stayed. When the tomb was empty, you wept and searched. You were the first to see the Risen Christ. Intercede for all who are searching for God in darkness, grief, or confusion. Help them to hear their name spoken by the Lord who seeks them even more ardently than they seek him. Amen.",
  },

  // ─── AUGUST ──────────────────────────────────────────────────────────────

  {
    name: "Saint Clare of Assisi",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Alexander IV (1255)",
    quote: "Place your mind before the mirror of eternity. Place your soul in the brilliance of glory. Place your heart in the figure of the divine substance. And transform your whole being into the image of the Godhead Itself through contemplation.",
    fullBio: `<h3>Early Life</h3>
<p>Clare of Offreduccio was born in 1194 in Assisi, Italy, into a noble family. At eighteen, inspired by the preaching of Francis of Assisi, she secretly fled her family's home on the night of Palm Sunday, 1212, and went to the chapel of the Portiuncula, where Francis and his brothers were gathered. There, by the light of torches, Francis cut off her hair and clothed her in the rough habit of penance — the founding moment of what would become the Order of Poor Ladies (later the Poor Clares).</p>

<h3>Life at San Damiano</h3>
<p>Clare established her community at San Damiano, the small chapel outside Assisi that Francis had repaired with his own hands. From there she never moved for over forty years — though illness confined her to her cell for much of that time. Her community attracted women from across Italy and eventually from across Europe; her own mother and sisters eventually joined her. Clare obtained from Pope Innocent III the "Privilege of Poverty" — the right to live without any communal endowment, sustained solely by alms — something previously unheard of for women religious. She fought tenaciously to maintain this radical poverty against repeated attempts by the papacy to impose a more comfortable rule.</p>

<h3>Defender of Assisi</h3>
<p>In 1241, an army of Emperor Frederick II threatened Assisi. Unable to defend herself physically, Clare reportedly carried the ciborium of the Blessed Sacrament to the wall of the convent. The soldiers fell back and the city was saved — an event that has made her patron of television (by extension of a story that she "saw" on the wall of her cell the Christmas Mass being celebrated in the Basilica of San Francesco when she was too ill to attend).</p>

<h3>Death and Canonization</h3>
<p>Clare died on August 11, 1253, in Assisi, at about 59 years of age. On her deathbed, she reportedly said: "Blessed be Thou, O God, for having created me." She was canonized by Pope Alexander IV in 1255, barely two years after her death. Her body is enshrined in the Basilica of Saint Clare in Assisi. She is the patron of television, needle workers, and the Poor Clares, who continue to live her radical Gospel poverty throughout the world.</p>`,
    reflection: "Clare's whole life was a commentary on a single line of Scripture: 'If you wish to be perfect, sell all you have and follow me.' She took this literally — and not as a burden but as a liberation. Stripped of everything that might substitute for God, she found that God was enough. Her 'Privilege of Poverty' was not a deprivation but the most extravagant luxury: the freedom to possess nothing except the Lord himself.",
    prayerToSaint: "O Saint Clare, light of the Church and model of evangelical poverty, you chose nothing over Christ — and in that nothingness, you found everything. Intercede for women and men who are called to the contemplative life, that their hidden prayer may be the heart of the Church's mission. Help all of us to simplify our lives, detach from what distracts us from God, and discover in poverty of spirit the richness of his presence. Amen.",
  },

  {
    name: "Saint Lawrence of Rome",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "I am already being roasted, turn me over and eat.",
    fullBio: `<h3>Deacon of Rome</h3>
<p>Lawrence was one of the seven deacons of Rome, the most prominent of whom was responsible for the goods of the Church and the care of the poor. He served under Pope Sixtus II. During the persecution of Emperor Valerian, Sixtus II was arrested and executed on August 6, 258 AD. According to the account of Ambrose of Milan, as Sixtus was led away to execution, Lawrence followed weeping, asking: "Father, where are you going without your deacon?" Sixtus replied: "I do not leave you, my son. You will follow me in three days."</p>

<h3>The Treasures of the Church</h3>
<p>The Roman prefect, knowing Lawrence controlled the Church's finances, ordered him to bring the treasures of the Church to the imperial treasury within three days. Lawrence gathered the poor, the sick, the lame, the blind, and the outcasts of Rome, and presented them to the prefect: "These are the treasures of the Church." This act of defiance — and the theology it contains — cost him his life. He was condemned to be roasted alive on a gridiron on August 10, 258 AD. The tradition holds that after some time on the grill, Lawrence said with characteristic calm: "I am already being roasted; turn me over and eat." His courage and humor in the face of death became legendary.</p>

<h3>Significance and Legacy</h3>
<p>Lawrence's martyrdom had an enormous impact on the Church of Rome. Augustine remarked that his death marked the beginning of the end of paganism in Rome. His intercession was credited with the conversion of Rome. The Basilica of Saint Lawrence Outside the Walls (San Lorenzo fuori le Mura) is one of the major patriarchal basilicas of Rome. He is the patron of deacons, the poor, cooks, comedians, and librarians.</p>`,
    reflection: "Lawrence's gesture — presenting the poor as the treasures of the Church — is one of the most theologically rich acts in Christian history. The Church's treasury is not gold or silver; it is the Body of Christ, present in the Eucharist and present in the poorest of the poor. His martyrdom was also an act of teaching: the prefect asked for treasure, and Lawrence showed him what treasure really looks like.",
    prayerToSaint: "O Saint Lawrence, deacon and martyr, you served the poor as the true treasures of the Church and faced death with a courage that still astonishes the world. Intercede for all deacons and those who serve the poor, that they may see in the face of every suffering person the face of Christ. Help us to hold worldly goods lightly and to treasure above all what God treasures: the souls of those who belong to him. Amen.",
  },

  {
    name: "Saint Dominic de Guzmán",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory IX (1234)",
    quote: "Arm yourself with prayer rather than a sword; wear humility rather than fine clothes.",
    fullBio: `<h3>Early Life</h3>
<p>Dominic de Guzmán was born in 1170 in Caleruega, Castile (Spain), to a family of minor nobility. His mother, Blessed Jane of Aza, reportedly had a prophetic dream before his birth in which a dog leaped from her womb carrying a torch in its mouth — a vision the Order of Preachers (Dominicans) has embraced with the pun <em>Domini Canes</em> (Hounds of the Lord). Dominic studied theology at Palencia and was ordained a canon at the Cathedral of Osma. He lived in community with other priests, practicing poverty and regular prayer.</p>

<h3>Mission Against the Albigensians</h3>
<p>In 1203, Dominic accompanied his bishop on a diplomatic mission through southern France, the stronghold of Catharism — a dualist heresy that condemned matter as evil and rejected the sacraments, marriage, and the Incarnation. Dominic recognized that the wealthy, powerful Cistercian legates sent to combat the heresy were counterproductive: their luxury undermined their message. His solution was radical: preach the Gospel in apostolic poverty, going on foot, without horse or equipment, disputing with the Cathars not with anathemas but with argument and persuasion. He spent years doing exactly this, with remarkable personal success.</p>

<h3>The Order of Preachers</h3>
<p>In 1216, Dominic obtained papal approval for his new Order of Preachers — the first religious order formally dedicated to preaching and study. He deliberately chose poverty as the order's foundation, requiring friars to live on alms, so that they could preach the Gospel without the social distance that wealth creates. The order spread rapidly across Europe, establishing itself at the great universities of Paris, Bologna, and Oxford — producing some of the greatest theologians of the Middle Ages, including Albert the Great and Thomas Aquinas.</p>

<h3>Death and Legacy</h3>
<p>Dominic died on August 6, 1221, in Bologna, at approximately 51 years of age, worn out by his apostolic travels. He was canonized by Pope Gregory IX in 1234. According to tradition, he received the Rosary from Our Lady as a weapon against heresy — and the Dominican Order has been the principal promoter of this prayer ever since. He is buried in the Basilica of San Domenico in Bologna.</p>`,
    reflection: "Dominic's genius was strategic poverty. He understood that the Church's message is undercut when it is proclaimed by the wealthy to the poor. He demanded that his friars live as poor as those they served — and from this radical equality came an apostolic credibility that transformed Europe. His combination of learning and poverty, contemplation and preaching, remains the Church's surest method of evangelization.",
    prayerToSaint: "O Saint Dominic, father of preachers and champion of truth, you combated heresy not with force but with humble argument, poverty, and prayer. Intercede for all preachers, teachers, and evangelists, that they may proclaim the Gospel with both learning and holiness. Help the Church in our time to speak with the authority that comes only from poverty of spirit and love of truth. Amen.",
  },

  // ─── SEPTEMBER ───────────────────────────────────────────────────────────

  {
    name: "Saint Gregory the Great",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "It is better to attempt something and fail than to attempt nothing and succeed.",
    fullBio: `<h3>Roman Aristocrat and Monk</h3>
<p>Gregory I was born around 540 AD in Rome, into one of the most distinguished aristocratic families of the city. His great-great-grandfather was Pope Felix III. After a classical education and a career in Roman public administration (rising to the office of Prefect of Rome by 573 AD), Gregory converted his family mansion on the Caelian Hill into a monastery and gave away his considerable wealth. He lived for years as a monk, a period he later recalled as the happiest of his life.</p>

<h3>Papal Legate and Reluctant Pope</h3>
<p>Pope Pelagius II sent Gregory as his representative (apocrisiarius) to the imperial court in Constantinople, where he served for six years. Returning to Rome, he became abbot of his monastery. When Pelagius II died in the plague of 590, the clergy, people, and senate unanimously elected Gregory pope. He reportedly fled and had to be brought back. "I have lost the deep pleasure of my quiet," he wrote — but once elected, he threw himself into the work with his characteristic energy.</p>

<h3>Pastor of Souls</h3>
<p>Gregory's pontificate (590–604) was extraordinarily fruitful despite the most difficult circumstances: plague, famine, Lombard invasions, and the weakness of the imperial government. He reorganized the Church's charitable institutions, feeding thousands from the papal granaries. He reformed the liturgy — the Gregorian Chant bears his name, and while his exact role in its development is debated, his influence on Roman liturgical music was decisive. He sent Augustine of Canterbury on the mission to evangelize the Anglo-Saxons in 597. He wrote prolifically: his <em>Pastoral Rule</em> (a handbook for bishops), his <em>Dialogues</em>, and his biblical commentaries became standard texts in medieval Europe. His <em>Moralia in Job</em> — a massive allegorical commentary on the Book of Job — is still read today.</p>

<h3>Doctor of the Church</h3>
<p>Gregory died on March 12, 604, worn out by gout and the labors of his office. He was immediately acclaimed a saint. He is one of only four popes called "the Great" (along with Leo I, Nicholas I, and John Paul II by popular usage), and one of four Latin Doctors of the Church (with Ambrose, Augustine, and Jerome). His feast is celebrated on September 3, the anniversary of his pontificate's beginning.</p>`,
    reflection: "Gregory the Great was a contemplative thrust into action by necessity — and he accepted that necessity as the will of God. His genius was to unite the monastery and the marketplace: he brought the spiritual depth of monastic life into the governance of the Church and the care of the poor. His <em>Pastoral Rule</em> — essentially a manual for bishops — remains the best description of what leadership in the Church should look like: the servant of the servants of God.",
    prayerToSaint: "O Saint Gregory the Great, Doctor of the Church and servant of the servants of God, you gave up the peace of the monastery for the service of all, and in doing so, gave the Church some of her greatest gifts. Intercede for all bishops and pastors, that they may serve with both humility and courage. Inspire all who combine intellectual work with love of the poor, and all who seek God in the duties of their state of life. Amen.",
  },

  {
    name: "Saint Jerome",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Ignorance of Scripture is ignorance of Christ.",
    fullBio: `<h3>Scholar and Ascetic</h3>
<p>Jerome (Hieronymus) was born around 345 AD in Stridon on the Dalmatian coast. He received an excellent classical education in Rome, where he was baptized around 366 AD. A man of passionate temperament and formidable intelligence, he was drawn early to the ascetic life — living for a time as a hermit in the Syrian desert, where he learned Hebrew from a converted Jew. He was ordained a priest at Antioch, though he spent most of his life as a monk and scholar rather than in active pastoral ministry.</p>

<h3>The Vulgate</h3>
<p>In 382 AD, Pope Damasus I commissioned Jerome to revise the existing Latin translations of the Bible, which had become confused and inconsistent. Jerome produced not merely a revision but a new translation from the original Hebrew and Greek — working at his monastery in Bethlehem, where he had settled around 386 AD. This translation, the <em>Vulgate</em> (from <em>versio vulgata</em>, the common translation), became the standard Latin Bible of the Catholic Church for over a millennium, formally confirmed by the Council of Trent as authoritative. Jerome also wrote extensive biblical commentaries, letters, and polemical works — the latter sometimes with a sharpness that made him enemies.</p>

<h3>Director of Souls</h3>
<p>In Rome, Jerome became the spiritual director of a circle of aristocratic women dedicated to asceticism and Scripture study — Paula, her daughter Eustochium, and others. Their relationship was somewhat scandalous to Roman society; after the death of Pope Damasus, Jerome left Rome under a cloud of criticism and settled in Bethlehem. Paula and Eustochium followed, establishing a community of women religious alongside his monastery.</p>

<h3>Death and Legacy</h3>
<p>Jerome died on September 30, 420, in his cell in Bethlehem, after more than thirty years of unceasing scriptural labor. He is one of the four great Latin Doctors of the Church, alongside Ambrose, Augustine, and Gregory the Great. He is the patron of translators, librarians, and scholars. His famous motto — "Ignorance of Scripture is ignorance of Christ" — remains the Church's most urgent call to biblical literacy.</p>`,
    reflection: "Jerome was not a gentle saint — his letters are often biting, his polemics fierce, his personal relationships stormy. But his passion for Scripture was unmatched. He believed that the Word of God was the most important thing in the world, and he devoted his life to making it accessible. In an age when the Bible has never been more available and is often less read, his motto rings with particular urgency.",
    prayerToSaint: "O Saint Jerome, Doctor of the Church and prince of biblical scholars, you gave your life to making God's Word accessible to the faithful. Intercede for all translators, scholars, and catechists who work to open the Scriptures for the People of God. Help us to love the Word of God as you did — not as an academic exercise but as a personal encounter with the living Christ who speaks to us in every page. Amen.",
  },

  // ─── OCTOBER ─────────────────────────────────────────────────────────────

  {
    name: "Saint Therese of Lisieux",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XI (1925)",
    quote: "I will spend my heaven doing good on earth. I will let fall a shower of roses.",
    fullBio: `<h3>Early Life and Vocation</h3>
<p>Marie-Françoise-Thérèse Martin was born on January 2, 1873, in Alençon, France, the youngest of the five surviving daughters of Louis and Zélie Martin — both of whom were canonized together in 2015, the first married couple so honored. Thérèse's childhood was marked by a sensitive, somewhat neurotic temperament, but also by intense religious feeling. When her mother died of breast cancer in 1877, the family moved to Lisieux; Thérèse was deeply attached to her elder sisters, three of whom entered the Carmelite convent at Lisieux. At age fifteen — obtaining a special dispensation from Pope Leo XIII himself, whom she asked directly during a pilgrimage to Rome — she became the youngest novice ever admitted to the Carmel of Lisieux.</p>

<h3>The Little Way</h3>
<p>In the convent, Thérèse held no significant office and performed no extraordinary feats of penance. What she developed instead was her "little way of spiritual childhood": the conviction that holiness consists not in dramatic heroism but in doing small things with great love, in accepting one's insignificance before God with childlike trust, and in offering every small suffering and joy to Jesus. "I understand that holiness consists in the disposition of the heart which makes one humble and little in God's hands," she wrote. Her autobiography, begun at the command of her prioress, became one of the most widely read spiritual classics of the 20th century: <em>The Story of a Soul</em>.</p>

<h3>Suffering and Death</h3>
<p>Thérèse was diagnosed with tuberculosis in 1896. The last eighteen months of her life were a prolonged spiritual agony — physical suffering combined with intense temptations against faith. She endured them with the same little way she had preached: one moment at a time, in trust. She died on September 30, 1897, at age 24, reportedly saying: "My God, I love you." She had asked to spend her heaven doing good on earth and promised to send roses as signs of her intercession — a promise countless devotees testify she has kept.</p>

<h3>Doctor of the Church</h3>
<p>Thérèse was beatified in 1923 and canonized in 1925 by Pope Pius XI, who called her "the greatest saint of modern times." In 1997, Pope John Paul II declared her a Doctor of the Church — one of only four women so honored — with the title <em>Doctor of Merciful Love</em>. She is patron of missionaries, florists, and France.</p>`,
    reflection: "Thérèse's 'little way' is the most subversive spiritual doctrine in modern Catholicism. In a Church that sometimes seemed to admire only heroic virtue and extraordinary penance, she proclaimed that the small acts of love performed by ordinary people in ordinary circumstances are the stuff of sanctity. She democratized holiness. And she backed up her teaching with her life — a short, mostly invisible life that has moved more hearts than many far more dramatic careers.",
    prayerToSaint: "O Saint Thérèse, the Little Flower, you showed the world that holiness is not reserved for the heroic or the extraordinary, but is within the reach of every soul that trusts completely in God's mercy. Intercede for all who feel too small or too weak to be holy. Help us to make of our small, daily sacrifices great acts of love; to accept the littleness of our lives as the very path by which God leads us to himself. Send us your roses from heaven. Amen.",
  },

  {
    name: "Saint Francis of Assisi",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory IX (1228)",
    quote: "Lord, make me an instrument of your peace.",
    fullBio: `<h3>Son of a Merchant</h3>
<p>Giovanni di Pietro di Bernardone was born in 1181 or 1182 in Assisi, Umbria, Italy, the son of Pietro Bernardone, a prosperous cloth merchant, and his wife Pica (possibly from Provence). His father nicknamed him Francesco (the Frenchman) for his love of all things French. Francis grew up in comfort, aspiring to knighthood and a life of chivalric adventure. He was charming, generous, fond of feasting and singing, and deeply popular with the youth of Assisi. His conversion was gradual: a serious illness, a failed military campaign, an encounter with a leper, and finally a mystical experience before a crucifix in the crumbling chapel of San Damiano, where he heard Christ say: "Francis, go and repair my house, which as you see is falling into ruin."</p>

<h3>The Radical Break</h3>
<p>Francis took this command literally, selling cloth from his father's warehouse to fund repairs. When his furious father dragged him before the Bishop of Assisi for a public confrontation, Francis removed all his clothes, returned them to his father, and declared: "Until now I have called Pietro Bernardone my father. From now on I will say: 'Our Father, who art in heaven.'" This dramatic renunciation of wealth, social status, and family security became the foundation of a movement that would transform the Church.</p>

<h3>The Friars Minor</h3>
<p>Francis began to gather followers — men who were drawn to his radical poverty and joy. Their rule was simple: to live according to the Holy Gospel by owning nothing, working and begging, preaching penance, and serving the poor. In 1209, Pope Innocent III gave oral approval to the rule. The Franciscan movement spread with extraordinary speed across Europe. Francis attempted a mission to the Sultan of Egypt during the Fifth Crusade (1219) — he walked unarmed into the Sultan's camp and was received with surprising courtesy, though he did not convert him.</p>

<h3>Stigmata and Death</h3>
<p>In September 1224, on the mountain of La Verna, Francis received the stigmata — the five wounds of Christ — visible marks in his hands, feet, and side that remained until his death. He died on October 3, 1226, at the Portiuncula chapel near Assisi, singing Psalm 141, having asked to be laid naked on the bare ground in imitation of his crucified Lord. He was 44 or 45 years old. Canonized in 1228 by Gregory IX — the fastest canonization in history to that point — Francis is patron of Italy, ecology, animals, and merchants. His Canticle of the Creatures is one of the earliest vernacular Italian poems and the first great Italian literary work.</p>`,
    reflection: "Francis of Assisi gave the medieval Church something it desperately needed: a visible, irrefutable argument that the Gospel is not only true but livable. In a Church made wealthy and political by its success, Francis pointed back to the poor Christ of the Gospels. He did not argue — he demonstrated. His poverty was not a rejection of creation but a freedom within it: stripped of possession, he could embrace everything with joy, calling the sun his brother and death his sister.",
    prayerToSaint: "O Saint Francis of Assisi, herald of the Great King and poor man of God, you renounced everything the world values and discovered in that renunciation a joy the world cannot give. Intercede for our wounded world: for peace among peoples, for care of creation, for openness to the poor who are Christ in disguise. Help us to make of our lives, as you made of yours, an instrument of God's peace. Amen.",
  },

  {
    name: "Saint Teresa of Avila",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory XV (1622)",
    quote: "Let nothing disturb you, let nothing frighten you, all things are passing away: God never changes. Patience obtains all things. Whoever has God lacks nothing; God alone suffices.",
    fullBio: `<h3>Early Life</h3>
<p>Teresa de Ahumada was born on March 28, 1515, in Ávila, Castile, Spain, the daughter of a converso family of Jewish origin that had converted to Christianity. Her mother died when Teresa was thirteen; her father, a pious man who read spiritual works aloud to his children, shaped her early religious sensibility. As a teenager, she read chivalric romances, concerned herself with fashion and her appearance, and was sent by her worried father to an Augustinian convent. There, reading the letters of St. Jerome, she decided to become a nun — though more out of fear of hell than love of God, she later admitted.</p>

<h3>Conversion and Prayer</h3>
<p>Teresa entered the Carmelite Monastery of the Incarnation in Ávila around 1535. For nearly twenty years, she lived a divided life: drawn to God in prayer but also deeply attached to the convent's comfortable social life. A crisis at age 39 — looking at a statue of the wounded Christ and being struck to the heart by guilt and love — became the turning point of her interior life. From that moment, she gave herself completely to prayer. In the following years she experienced mystical phenomena of increasing intensity: locutions (hearing interior words), visions, levitation, and finally the "spiritual marriage" — the highest degree of union with God described in Christian mysticism.</p>

<h3>Reformer of Carmel</h3>
<p>At the age of 47, Teresa founded the first of the Discalced (barefoot) Carmelite convents — San José in Ávila — returning to the primitive Rule of stricter poverty, enclosure, and contemplative prayer. Despite enormous opposition from civil and ecclesiastical authorities, she founded sixteen more convents in seventeen years, often traveling in unheated oxcarts across Castile. She worked alongside the young Juan de la Cruz (Saint John of the Cross) to reform the Carmelite friars. Her major spiritual works — <em>The Life</em>, <em>The Way of Perfection</em>, and <em>The Interior Castle</em> — are the most systematic and accessible accounts of the stages of prayer ever written.</p>

<h3>Death and Legacy</h3>
<p>Teresa died on October 4/15, 1582, in Alba de Tormes, Spain — the very night Spain adopted the Gregorian calendar, so technically October 15 became October 4. She was 67 years old. Canonized in 1622, she was declared the first female Doctor of the Church by Pope Paul VI in 1970, together with Saint Catherine of Siena.</p>`,
    reflection: "Teresa's most famous words — 'God alone suffices' — were not a pious platitude but the conclusion of a life tested in every possible way. She knew what it was to be mediocre, divided, and lukewarm. She also knew what it was to be completely transformed by God's love. Her books are so practical and psychologically precise because she was writing from experience: the experience of a woman who struggled, failed, persevered, and ultimately arrived. She gives hope to everyone who has not yet arrived.",
    prayerToSaint: "O Saint Teresa of Ávila, Doctor of the Church and great teacher of prayer, you mapped the interior journey of the soul to God with precision and compassion. Intercede for all who desire to pray but find it difficult. Help those who are spiritually lukewarm to be set on fire by divine love. Guide all who seek God in the depths of their souls to the dwelling place where he waits for them — the innermost castle of the soul. Let nothing disturb us; God alone suffices. Amen.",
  },

  // ─── NOVEMBER ────────────────────────────────────────────────────────────

  {
    name: "Saint Martin of Tours",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Lord, if your people still need me, I do not refuse the work. Your will be done.",
    fullBio: `<h3>Soldier and Monk</h3>
<p>Martin was born around 316 AD in Sabaria, Pannonia (modern Szombathely, Hungary), the son of a Roman military tribune. As the son of a soldier, he was required to serve in the Roman army, which he did from about age fifteen. The most famous episode of his life occurred around 334 AD, near the city of Amiens in Gaul: encountering a half-naked beggar in biting cold, Martin cut his military cloak in two with his sword and gave half to the beggar. That night he dreamed of Christ wearing the cloak, saying to the angels surrounding him: "Martin, a mere catechumen, has clothed me with this garment." Martin was baptized shortly after.</p>

<h3>Soldier, Then Bishop</h3>
<p>At the conclusion of his military service, Martin became a disciple of Hilary of Poitiers, then lived as a hermit at Ligugé (establishing what is claimed to be the oldest monastery in the West). His holiness attracted disciples and then popular demand: in 371 AD, the people of Tours acclaimed him their bishop by near-acclamation — he had to be deceived into entering the city to be elected. As bishop, he continued to live as a monk at Marmoutier, a monastery he founded outside Tours, making pastoral visits throughout his diocese.</p>

<h3>Apostle to the Gauls</h3>
<p>Martin was one of the first great missionaries to the rural paganism of Gaul. He cut down sacred trees, destroyed temples, and built churches and monasteries in their place, yet always with gentleness rather than violence. His biographer Sulpicius Severus records many miracles: raising the dead, healing the sick, and defeating demonic forces. He vigorously opposed the execution of the Priscillianist heretics — one of the first voices in the Church to argue against capital punishment for heresy.</p>

<h3>Death and Legacy</h3>
<p>Martin died on November 8, 397, in Candes, while on a pastoral visit, at perhaps 81 years of age. He is buried at Tours. His cloak (cappa) became one of the most venerated relics of the Frankish kingdom — the priests who cared for it were called "chaplains" (capellani), the origin of our word "chaplain." He is the patron of France, soldiers, beggars, and wine-growers. The celebration of Martinmas (November 11) — with bonfires, lanterns, and the slaughter of the Martinmas goose — is one of the oldest popular festivals of northern Europe.</p>`,
    reflection: "Martin's cloak stands as one of the most enduring symbols in Christian history: the soldier's cloak, the instrument of military identity and protection, given away to a beggar — and that beggar turning out to be Christ. Every act of charity is this same story: we give to the poor and we meet Christ. Martin understood this before he was even baptized, and that half-cloak was his real baptism.",
    prayerToSaint: "O Saint Martin of Tours, soldier of Christ and bishop of the poor, you showed us Christ in the face of the beggar. Help all soldiers and military personnel to temper strength with mercy. Intercede for bishops and pastors, that they may live simply and serve generously. Inspire all of us to see in the poor and suffering the face of our Lord, and to give, as you gave, from what we actually need. Amen.",
  },

  {
    name: "Saint Cecilia of Rome",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Let my heart be kept undefiled, that I be not confounded.",
    fullBio: `<h3>Virgin Martyr of Rome</h3>
<p>Cecilia is one of the most celebrated virgin martyrs of Rome, traditionally venerated since the third or fourth century. Her Acts, written much later, describe her as a Roman noblewoman who had consecrated her virginity to God. Betrothed by her parents to a pagan nobleman named Valerian, she converted him on their wedding night by revealing that an angel of the Lord protected her. Valerian and his brother Tiburtius were baptized and subsequently martyred for burying the bodies of Christian martyrs. Cecilia was arrested, condemned, and ultimately martyred — tradition placing her death during the persecution of Emperor Alexander Severus (222–235 AD) or earlier.</p>

<h3>The Patron of Music</h3>
<p>The artistic tradition portraying Cecilia with an organ or singing dates from the 15th–16th centuries, based on a verse from her Acts that may be interpreted as her "singing to God in her heart" on her wedding day. This association has made her the patron of musicians, composers, and singers since the Renaissance. The Papal Academy of Music (Accademia di Santa Cecilia) in Rome, founded in 1584, bears her name. Musical performances and concerts in her honor on November 22 are held throughout the world.</p>

<h3>Discovery of Relics and Basilica</h3>
<p>Her basilica in Trastevere, one of the oldest in Rome, is said to occupy the site of her house. Pope Paschal I (817–824) discovered her incorrupt body and translated it to the basilica. In 1599, the tomb was opened again and Cardinal Sfondrati reported finding the body still incorrupt after nearly thirteen centuries. The sculptor Stefano Maderno was present and created his famous statue showing Cecilia's body as he saw it — lying on her side, hands crossed at the throat to indicate her three-day agony after the executioner's failed attempts at beheading — a masterpiece of devotional art.</p>`,
    reflection: "Cecilia sings — even at her wedding, even facing death. The image of a woman singing in the midst of a threatening world is not escapism but a form of witness: the refusal to let fear, suffering, or hostility silence the song of praise that rises from a soul united with God. Music, at its best, is prayer extended in time. Cecilia teaches us that the singing soul is the unconquerable soul.",
    prayerToSaint: "O Saint Cecilia, virgin and martyr, patron of musicians and singers, you sang to God in your heart even when the world threatened you. Bless all who make music in God's honor and all who use their gifts to lift hearts toward heaven. Help us to find in music a school of prayer, and in the beauty of sound a foretaste of the eternal harmony that awaits us in God's presence. Amen.",
  },

  {
    name: "Saint Andrew the Apostle",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "O good Cross, made beautiful by the body of my Lord, receive me from among men, and return me to my Teacher, so that through you He may receive me, since through you He redeemed me.",
    fullBio: `<h3>The First-Called</h3>
<p>Andrew was a fisherman from Bethsaida in Galilee, the brother of Simon Peter and, before following Jesus, a disciple of John the Baptist. The Gospel of John presents him as the first of the Apostles to encounter Jesus — earning him in Eastern tradition the title <em>Protocletus</em>, "the First-Called" (John 1:35-42). It was Andrew who brought his brother Simon to Jesus, saying: "We have found the Messiah." This act of bringing others to Christ is the defining gesture of Andrew's apostolate.</p>

<h3>Apostolic Mission</h3>
<p>The Acts of Andrew — a 3rd-century apocryphal text of uncertain historical value — describe his missionary journey through Asia Minor and Greece. According to tradition, he evangelized Scythia (modern Ukraine/Russia), Epirus, Achaia, and Byzantium — making him the patron Apostle of the Eastern Church. He reportedly founded the church in Byzantium (Constantinople), making him the founder of the See that would later be the Ecumenical Patriarchate. The Russian Orthodox Church also claims him as its founder. He was crucified at Patras in Achaia (Greece) around 60 AD.</p>

<h3>The X-Shaped Cross</h3>
<p>Andrew is associated with a saltire (X-shaped) cross, said to be the form of his crucifixion — chosen by him, according to tradition, out of humility, as he felt unworthy to die on the same type of cross as his Lord. This cross appears on the flags of Scotland (white on blue) and the United Kingdom (as part of the Union Jack). His relics were brought to Constantinople in the 4th century and later translated to Amalfi, Italy, in 1208. Pope Paul VI returned the relic of his head to Patras in 1964 as a gesture of ecumenical goodwill toward the Orthodox Church.</p>`,
    reflection: "Andrew's first act as a disciple was to find his brother and bring him to Jesus. The greatest saints are always those who cannot keep the good news to themselves. Andrew had nothing to offer Simon except Jesus — and that was everything. Evangelization at its best has always looked like this: one person, transformed by an encounter, taking another person by the hand and saying simply, 'Come and see.'",
    prayerToSaint: "O Saint Andrew, First-Called of the Apostles, you followed the Lord at the first invitation and spent the rest of your life bringing others to him. Intercede for missionaries everywhere. Bless the churches of both East and West that trace their origins to your apostolate, and help them to grow in unity. Help us, who have received the faith, to be like you: always bringing our brothers and sisters to the one who is the way, the truth, and the life. Amen.",
  },

  // ─── DECEMBER ────────────────────────────────────────────────────────────

  {
    name: "Saint Francis Xavier",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory XV (1622)",
    quote: "Tell the students to give up their small ambitions and come eastward to preach the Gospel of Christ.",
    fullBio: `<h3>Nobleman and Skeptic</h3>
<p>Francisco de Jasso y Azpilicueta was born on April 7, 1506, in the Castle of Xavier, Navarre (now part of Spain), the youngest child of a noble Basque family. He went to Paris to study philosophy and harbored academic ambitions. There he met Ignatius of Loyola, initially resisting his friendship — he valued his intellectual reputation too much to be associated with the older man's spiritual intensity. But Ignatius's question, "What does it profit a man to gain the whole world and lose his soul?" eventually broke through his resistance. Francis became one of the original seven Jesuits who pronounced their first vows at Montmartre in 1534.</p>

<h3>Apostle of the Indies</h3>
<p>In 1540, King John III of Portugal requested missionaries for his colonies in Asia. Ignatius offered Francis, who set sail in 1541 and arrived in Goa, India, in 1542. Over the next eleven years, Francis covered an astonishing missionary territory: Goa, the Pearl Fishery Coast, the Moluccas (modern Indonesia), the Malay Peninsula, and Japan. He reputedly baptized hundreds of thousands (his critics argue the numbers are exaggerated; his admirers cite miracles of healing and tongues). He adapted his method to each culture, learning local languages, working with the poorest and most marginal populations. Japan (1549–1551) proved the most culturally sophisticated challenge, and his Japan mission planted seeds that would survive centuries of persecution.</p>

<h3>Death and Canonization</h3>
<p>Francis died on December 3, 1552, on the island of Shangchuan off the coast of China, within sight of the continent he had longed to evangelize but never reached. He was 46 years old, alone except for a Chinese man he had recently befriended, burning with fever and repeating the names of the Trinity and of Jesus. He was canonized in 1622, the same year as Ignatius, Teresa of Ávila, Philip Neri, and Isidore the Farmer — a remarkable class of saints. He is the patron of missions, foreign missions, and the propagation of the faith.</p>`,
    reflection: "Francis Xavier's life is an argument against small ambitions. He was, by nature, an academic — ambitious, concerned with reputation. God redirected those ambitions toward an enterprise so vast that no career strategy could contain it: the evangelization of Asia. He died on a beach in China, alone and feverish, still trying to go further. The patron of missions is also the patron of those who refuse to let prudence become an excuse for mediocrity.",
    prayerToSaint: "O Saint Francis Xavier, Apostle of Asia and patron of all missionaries, you gave up comfort, reputation, and your native land to carry the Gospel to the ends of the earth. Intercede for missionaries everywhere, especially those working in danger. Inspire the Church with your missionary zeal, and help us to realize that every baptized person is called to be, in some way, a missionary. Inflame our hearts with the love that drove you to the other side of the world for the love of souls. Amen.",
  },

  {
    name: "Saint Nicholas of Myra",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "The giver of every good and perfect gift has called upon us to mimic His giving, by grace, through faith, and this is not of ourselves.",
    fullBio: `<h3>Bishop of Myra</h3>
<p>Nicholas was born in the late 3rd century (around 270 AD) in Patara, a city of Lycia in Asia Minor (modern Turkey), to a wealthy Christian family. When his parents died in an epidemic, he used his entire inheritance for works of charity. He became Bishop of Myra, the capital of Lycia, at a relatively young age. He was imprisoned during the Diocletianic persecution and, according to tradition, was present at the Council of Nicaea in 325 AD — where the famous legend holds that he slapped the heretic Arius in the face for denying the divinity of Christ (an act that supposedly led to his temporary imprisonment by the council fathers, until a vision of Christ and Mary convinced them to release him).</p>

<h3>The Secret Gift-Giver</h3>
<p>The most famous story about Nicholas concerns a poor man with three daughters who had no dowry and thus no prospect of honorable marriage. Nicholas, on three separate occasions, secretly threw bags of gold through the window of their house at night. On the third occasion, the father caught him. Nicholas pleaded for anonymity but the story spread. This habit of secret gift-giving — rooted in the Gospel command not to let the left hand know what the right hand does — became the seed of the Saint Nicholas tradition that evolved, through Dutch <em>Sinterklaas</em>, into the figure of Santa Claus.</p>

<h3>Patron of Children and Sailors</h3>
<p>Nicholas became the patron of children, sailors, merchants, archers, repentant thieves, prostitutes (for his patronage of the poor daughters), students, and brewers — a remarkable range reflecting the breadth of medieval devotion to him. His relics were translated from Myra to Bari, Italy, in 1087, where the Basilica di San Nicola still houses them. Nicholas is one of the most popular saints in both Eastern and Western Christianity.</p>`,
    reflection: "Nicholas gave secretly, carefully, anonymously — three times taking the risk of being discovered rather than giving publicly and claiming credit. In our culture of self-promotion, his secret charity is a striking alternative: the gift given when no one is watching, for the recipient's sake alone, is the gift that most perfectly images the love of God, who gives without need of recognition.",
    prayerToSaint: "O Saint Nicholas, patron of children and generous bishop of the poor, you gave away your entire inheritance and spent your life in secret acts of charity. Help us to be generous as you were generous — secretly, joyfully, without counting the cost. Intercede for all children, especially those who are poor or in danger, and for all in desperate need of unexpected help. Amen.",
  },

  {
    name: "Saint Lucy of Syracuse",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "As for your threats, they cannot shake my resolve. No one loses God's light by losing bodily sight.",
    fullBio: `<h3>Virgin Martyr of Syracuse</h3>
<p>Lucy (Lucia) was born around 283 AD in Syracuse, Sicily, to a wealthy Christian family. Her father died when she was young, and she was raised by her devout mother Eutychia. Lucy made a private vow of virginity and wished to distribute her dowry to the poor. Her mother, who suffered from a hemorrhage, was miraculously cured at the tomb of Agatha in Catania when Lucy prayed there. In gratitude, Eutychia granted Lucy her wish regarding the dowry. However, a rejected suitor denounced Lucy to the Roman governor Paschasius as a Christian during the Diocletianic persecution (around 304 AD).</p>

<h3>Martyrdom</h3>
<p>Paschasius condemned her to a brothel, but tradition holds that the Spirit of God made her immovable — she could not be budged even by a team of oxen. A fire was lit around her and she remained unharmed, prophesying before it. She was finally killed by a sword thrust through her throat. An additional tradition — of uncertain origin — holds that her eyes were gouged out during the martyrdom, subsequently restored by God, making her a special patron of the blind and those with eye diseases.</p>

<h3>The Light of December</h3>
<p>Lucy's name means "light" (from the Latin <em>lux, lucis</em>), and her feast on December 13 — once coinciding with the winter solstice in the old Julian calendar — made her a saint of light in the darkness. In Scandinavia, the feast of Saint Lucia is celebrated with great beauty: young women in white robes with wreaths of candles on their heads bring light into the darkness of the winter morning. Her name appears in the Roman Canon (Eucharistic Prayer I), one of only seven women so honored in the most ancient prayer of the Mass.</p>`,
    reflection: "Lucy's name is light, and her feast comes in the darkest time of year. This is not coincidence but theology: the Church places a virgin martyr who bore light in her name and in her courage at the threshold of the season when the world is darkest, just before the Light of the World is born at Christmas. Lucy's witness is that human beings can be bearers of light even when the world tries to extinguish them.",
    prayerToSaint: "O Saint Lucy, virgin and martyr of Syracuse, you chose the darkness of martyrdom over the darkness of sin and infidelity. Intercede for all who suffer from diseases of the eyes, and for all who are spiritually blind. Help us to carry the light of Christ into the dark places of our world — our families, our workplaces, our communities — as you carried it into the darkness of persecution. Amen.",
  },
];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed9 = mutation({
  args: {},
  handler: async (ctx) => {
    // Load all saints once
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
