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

  // ── APRIL ────────────────────────────────────────────────────────────────

  {
    name: "Saint George the Martyr",
    feastType: "Optional Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "I am a Christian soldier, and I serve the King of Heaven.",
    fullBio: `<h3>The Soldier-Martyr</h3>
<p>George was a Roman soldier, possibly an officer, who suffered martyrdom around 303 AD during the Diocletianic persecution — one of the most severe outbreaks of anti-Christian violence in the Roman Empire. He is venerated throughout the Christian world, East and West, and is numbered among the Fourteen Holy Helpers and the Great Martyrs of the Eastern Church. Beyond his historical identity as a soldier who refused to deny his Christian faith, almost nothing certain is known of his life. He was executed — tradition says at Lydda (Diospolis) in Palestine, and his tomb was venerated there from the earliest centuries.</p>

<h3>The Legend of the Dragon</h3>
<p>The famous legend of George and the dragon — in which a knight on horseback slays a dragon and rescues a princess — dates from the medieval period and is properly understood as a theological allegory. The dragon represents evil, the devil, or paganism; the princess represents the Church or the Christian soul held captive; the knight is the Christian soldier who, in the power of Christ, overcomes the powers of darkness. The legend spread across Europe with the Crusades, and George became the patron of knights, soldiers, and of several nations — most famously England, whose flag (the red cross on white) is known as the Cross of Saint George.</p>

<h3>Universal Veneration</h3>
<p>George is venerated as patron saint of England, Georgia (which is named after him), Portugal, Catalonia, and many cities and institutions throughout the Christian world. His feast on April 23 is a national holiday in England and is celebrated with particular devotion in the Eastern Church. The Crusaders and later Christian armies marched under his banner. Pope Gelasius I (494 AD) mentioned him among those whose names are "justly reverenced among men, but whose actions are known only to God" — a frank admission that historical details are sparse, yet whose holiness is unmistakable.</p>`,
    reflection: "George's story — whether historical or legendary — tells a truth that transcends the details: the Christian is always called to stand between the dragon and the innocent, to use whatever power is given them in defense of the vulnerable, for the sake of Christ. The soldier who puts on armor for earthly battles is, in Christian typology, an image of every baptized person who puts on the armor of God (Ephesians 6:10-18) to fight the battle that truly matters.",
    prayerToSaint: "O Saint George, noble soldier of Christ, you faced death rather than deny your King, and your courage has inspired warriors and witnesses for seventeen centuries. Help all who protect the innocent and defend the weak. Give courage to those who face persecution for their faith. Intercede for all soldiers and police officers, that they may serve with justice and honor. And help us in our daily battle against evil, weakness, and sin. Amen.",
  },

  {
    name: "Saint Mark the Evangelist",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "The beginning of the Gospel of Jesus Christ, the Son of God.",
    fullBio: `<h3>Companion of Peter and Paul</h3>
<p>John Mark — known in the New Testament as both John and Mark — was a Jewish Christian from Jerusalem whose mother Mary's house served as a meeting place for the early Church (Acts 12:12). He was the cousin of Barnabas (Colossians 4:10) and accompanied Paul and Barnabas on the first missionary journey before departing unexpectedly at Perga — an action that caused a sharp dispute between Paul and Barnabas on the second journey (Acts 15:37-39). Later, Mark was reconciled with Paul, who called him a "fellow worker" and a comfort to him (Philemon 24; Colossians 4:10).</p>

<h3>The Gospel of Mark</h3>
<p>Tradition unanimously identifies Mark as the author of the second Gospel, which is widely understood as reflecting the preaching and eyewitness accounts of Saint Peter. The early Christian writer Papias (c. 125 AD) records: "Mark, being the interpreter of Peter, wrote down accurately everything he remembered, though not in order, of the things said or done by the Lord." The Gospel of Mark is the shortest and most vivid of the four Gospels — urgent, action-packed, and suffused with Peter's characteristic directness. The word "immediately" appears over forty times. This Gospel almost certainly formed the basis for both Matthew and Luke.</p>

<h3>Founder of the Church in Alexandria</h3>
<p>Tradition holds that Mark founded the Church in Alexandria, Egypt, becoming its first bishop. The Coptic Orthodox Church of Alexandria traces its patriarchal lineage directly to him and venerates him with the title "the Beholder of God and Preacher of the Gospel of Jesus Christ in the Deserts of Egypt." He was martyred in Alexandria around 68 AD, dragged through the streets by a rope tied to his neck. His relics were taken to Venice in 828 AD and enshrined in the Basilica of Saint Mark, the great cathedral of that city. The winged lion — the symbol of Saint Mark — remains the emblem of Venice.</p>`,
    reflection: "Mark's Gospel begins with the word 'beginning' — and Mark himself had a beginning that included a false start, a painful rupture, and a reconciliation. His abandonment of Paul and Barnabas, and his eventual restoration, make him a patron of second chances: the witness that failure is not final, that God's purposes are not derailed by our weaknesses. The shortest Gospel was written by a man who knew something about starting over.",
    prayerToSaint: "O Saint Mark the Evangelist, companion of Peter and Paul and inspired author of the second Gospel, you have given us the most vivid portrait of Jesus in action. Intercede for all evangelists and preachers, that they may proclaim Christ with your urgency and directness. Pray for the Church in Egypt and Africa that traces its origin to your missionary work. Help us to hear in your Gospel the living voice of the Lord himself. Amen.",
  },

  // ── MAY ──────────────────────────────────────────────────────────────────

  {
    name: "Saint Athanasius of Alexandria",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "The Son of God became man so that we might become God.",
    fullBio: `<h3>The Young Deacon of Nicaea</h3>
<p>Athanasius was born around 296 AD in Alexandria, Egypt, receiving an excellent Greek education and early training in Christian theology. As a young deacon he accompanied Bishop Alexander of Alexandria to the Council of Nicaea in 325 AD, where the great theological debate of the 4th century was formally settled: Is the Son of God fully divine — of the same substance (homoousios) as the Father — or is he a created being, elevated above all others but not truly God? Athanasius was already a passionate defender of the former position. Within a few years of Nicaea, he became Bishop of Alexandria.</p>

<h3>Athanasius Contra Mundum</h3>
<p>"Athanasius against the world" — this famous phrase captures the extraordinary drama of his episcopate. The Arian party, which denied Christ's full divinity, enjoyed imperial support for most of the 4th century. Emperors Constantius II, Julian the Apostate, and Valens all sided against Nicene orthodoxy. Athanasius was exiled from his see no fewer than five times, spending a total of seventeen of his forty-five years as bishop in exile — in Gaul, in Rome, in the Egyptian desert with the monks he deeply loved. Each time, he returned to Alexandria more determined. The people of Alexandria and the desert monks remained faithful to him, and through him, to the Council of Nicaea.</p>

<h3>Defender of the Incarnation</h3>
<p>Athanasius understood that the Arian controversy was not merely a technical theological dispute: if Christ is not truly God, then we are not truly saved, and the Incarnation does not mean what Christians believe it means. His treatise <em>On the Incarnation</em> — perhaps written before he became bishop — remains one of the most accessible and compelling works of early Christian theology. In it he articulates the "wonderful exchange": "The Son of God became man so that we might become God" — the doctrine of divinization (theosis) that is central to Eastern Christian spirituality.</p>

<h3>Death and Legacy</h3>
<p>Athanasius died in Alexandria in 373 AD, after a final restoration to his see. His last years were spent in relative peace. He is venerated as a Doctor of the Church, pillar of Nicene orthodoxy, and a Father of both the Eastern and Western Church. The Nicene Creed — professed at every Sunday Mass and at major feasts — is his most enduring legacy.</p>`,
    reflection: "Athanasius spent seventeen years in exile for a single word: homoousios — 'of the same substance.' He refused to compromise on whether Jesus is truly God or merely God-like. In every generation, the temptation is to soften, to smooth edges, to choose comfort over truth. Athanasius chose truth — again and again, at enormous personal cost — and the Church has professed the full divinity of Christ at every Sunday Mass ever since. He is the patron of all who stand firm when the tide is against them.",
    prayerToSaint: "O Saint Athanasius, bishop, confessor, and Doctor of the Church, you stood alone against emperors and councils for the full divinity of Jesus Christ. Intercede for the Church in every age when the pressure to compromise the faith feels overwhelming. Strengthen all who must stand firm for truth when the world is against them, and help us to profess the Creed each Sunday with the same conviction for which you were willing to suffer all things. Amen.",
  },

  {
    name: "Saint Philip Neri",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory XV (1622)",
    quote: "A joyful heart is more easily made perfect than a downcast one.",
    fullBio: `<h3>The Apostle of Rome</h3>
<p>Filippo Romolo Neri was born on July 21, 1515, in Florence, the son of a notary. At eighteen, he was sent to work with a wealthy merchant uncle near Montecassino, but a spiritual experience led him to abandon business and go to Rome — then a city of over 50,000 souls, rife with spiritual neglect, worldly clergy, and the devastation left by the Sack of Rome (1527). Philip arrived in Rome around 1534, with no position, no money, and apparently no plan. He lived for years as a private layman, studying philosophy and theology, praying at length in the catacombs of Sebastian, and working as a tutor.</p>

<h3>Apostolate Among the Young</h3>
<p>Philip's apostolate was informal and personal: he met men in the streets, the shops, the banks — wherever they were — and engaged them in conversation about their souls. He organized young men in prayer, Scripture reading, spiritual discussions, and pilgrimages to the seven major churches of Rome. He founded a confraternity to care for poor pilgrims. He was ordained a priest in 1551, aged 35, and his confessional at the church of San Giovanni dei Fiorentini became one of the most sought-after in Rome. He sat in confession for eight, ten, twelve hours a day.</p>

<h3>The Oratory</h3>
<p>Philip's informal gatherings of laymen for prayer, spiritual reading, hymn-singing (music was composed specifically for these meetings by composers including Palestrina), and charitable works became the "Oratory" — a new form of religious association. From this grew the Congregation of the Oratory, formally established in 1564 and given papal approval in 1575. The Oratorians spread Philip's method of informal, joyful, intellectually engaging spiritual formation throughout Europe and beyond. The musical form of the "oratorio" (Handel's <em>Messiah</em> is the most famous example) derives its name from Philip's gatherings.</p>

<h3>The Joyful Saint</h3>
<p>Philip Neri was famous for his humor, practical jokes, and complete unconventionality. He grew a half-beard and walked through Rome wearing a cushion on his head; he had visiting dignitaries read aloud from books of jokes before receiving them; he prescribed comedy and dancing to scrupulous penitents. He reportedly levitated during Mass and once reportedly experienced such intense spiritual joy that his heart physically expanded, breaking two of his ribs. He died on May 26, 1595, in Rome, aged 79. He was canonized in 1622.</p>`,
    reflection: "Philip Neri is the patron of joy — a quality he understood as deeply theological, not merely temperamental. Joy, for Philip, was the natural overflow of a soul possessed by God. He attacked spiritual gloom and scrupulosity as temptations, not virtues. His laughter and unconventionality were apostolic weapons: they disarmed the self-important and made the Gospel accessible to those put off by religiosity. The Church needs his witness in every age: that holiness is not dour but delightful.",
    prayerToSaint: "O Saint Philip Neri, joyful servant of God and apostle of Rome, you converted sinners with laughter as much as with sermons, and drew souls to God through the joy of friendship and prayer. Intercede for all who work in informal apostolates — youth ministry, campus ministry, street evangelism. Help us to be people whose faith is contagious, whose joy invites others in, and whose lives make the Gospel attractive and believable. Amen.",
  },

  {
    name: "Saint Rita of Cascia",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Leo XIII (1900)",
    quote: "Dear Lord, give me a part of your sufferings.",
    fullBio: `<h3>Wife, Mother, and Widow</h3>
<p>Rita was born around 1381 in Roccaporena, near Cascia in Umbria, Italy. From childhood she desired religious life, but her parents arranged her marriage to a man who was, by all accounts, quick-tempered and difficult. Rita accepted this as God's will and transformed her husband's life over the years through patience, prayer, and gentle love. Together they had twin sons. When her husband was killed in a family vendetta, Rita bore the grief of widowhood — and then, fearing that her sons might seek revenge and die in sin, she reportedly prayed that God would take them rather than let them become murderers. Both sons died of illness within a year, apparently reconciled to God.</p>

<h3>Nun and Mystic</h3>
<p>Now free to pursue the religious life she had always desired, Rita applied three times to the Augustinian convent at Cascia and was three times refused — because she was a widow and not a virgin. According to tradition, she was miraculously transported into the convent on the third attempt and was then accepted. She lived as an Augustinian nun for approximately forty years, distinguished by intense fasting, prayer, and desire to share in Christ's suffering.</p>

<h3>The Thorn of the Crown</h3>
<p>One of the most striking elements of Rita's life is her stigmatic wound. After meditating on Christ's Crown of Thorns and praying to share in his suffering, a wound appeared on her forehead as if a thorn had pierced it. The wound remained open and painful for fifteen years — and was reportedly miraculously closed when she went on pilgrimage to Rome. She died on May 22, 1457, reportedly with the scent of roses filling her cell. She is buried at the Basilica of Saint Rita in Cascia, a major pilgrimage site.</p>

<h3>Patron of Impossible Causes</h3>
<p>Rita is beloved throughout the Catholic world as the "patron of impossible causes" — a title reflecting the apparently impossible circumstances of her own life: the impossible marriage, the impossible grief, the impossible entry into religious life. Her feast is celebrated with the blessing of roses, which tradition associates with a miraculous rose that bloomed at her birthplace in January. She was beatified in 1626 and canonized in 1900.</p>`,
    reflection: "Rita's holiness was forged in circumstances she did not choose: a difficult husband, grief, heartbreak, rejection. She made no dramatic decisions — she simply chose to love, again and again, in the place where she found herself. Her life is a model for all who feel trapped by circumstances, all whose lives have not unfolded as they hoped. God can make saints anywhere: in a difficult marriage, in grief, in a convent cell with a thorn wound that never heals.",
    prayerToSaint: "O Saint Rita of Cascia, patron of impossible causes and sharer in the suffering of Christ, you walked the hardest paths of marriage, widowhood, and contemplation with unwavering trust in God. Intercede for all who feel that their situation is hopeless, that their petitions are impossible, that God has not heard their prayers. Help us to entrust to God the outcomes we cannot control, and to find in suffering a share in the Cross that leads to resurrection. Amen.",
  },

  // ── JUNE ─────────────────────────────────────────────────────────────────

  {
    name: "Saint Justin Martyr",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "I am proud to say that I am a Christian and that my only wish is to be found worthy of the title.",
    fullBio: `<h3>Philosopher and Convert</h3>
<p>Justin was born around 100 AD in Flavia Neapolis (modern Nablus, Palestine), to pagan parents. He received an excellent Greek philosophical education, studying Stoicism, Aristotelianism, Pythagoreanism, and Platonism in search of truth. He later recounted a conversation on a beach with an old man who directed him toward the Hebrew prophets and ultimately toward Christ — and Justin was baptized around 130 AD. He continued to wear the philosopher's cloak after his conversion, understanding Christianity as the true philosophy.</p>

<h3>The First Apologist</h3>
<p>Justin wrote the first sustained philosophical defense of Christianity addressed to the Roman Emperor (his <em>First Apology</em> is addressed to Antoninus Pius). In it he argued that the moral accusations against Christians were false, that Christianity was not a new religion but the fulfillment of all that was best in Greek philosophy and Jewish prophecy, and that the <em>logos</em> (divine reason) active in all human thought was fully incarnate in Jesus Christ. His <em>Second Apology</em> and his <em>Dialogue with Trypho</em> (a defense of Christianity against Jewish objections) round out his surviving works. Justin also gives us one of the most valuable early descriptions of the Sunday Eucharist — a document historians of liturgy study carefully to this day.</p>

<h3>Martyrdom in Rome</h3>
<p>Justin established a school in Rome where he taught philosophy and Christian theology. Around 165 AD, he and six companions were denounced by the Cynic philosopher Crescens (whom Justin had publicly debated) to the Roman prefect Rusticus. The exchange recorded in the Acts of Justin's martyrdom is remarkable for its calm philosophical clarity. When Rusticus asked what Justin believed, he replied: "I have tried to learn about every doctrine, and I have set my mind on the true doctrines of the Christians, even though they do not please those who hold false opinions." He was beheaded. He is the patron of philosophers and lecturers.</p>`,
    reflection: "Justin Martyr believed that truth is one, that wherever genuine reason discovers truth, it discovers a ray of the divine Logos, and that the Logos fully incarnate in Jesus Christ is therefore the answer to every philosophical search. His life insists that faith and reason are not enemies. The Christian does not abandon philosophy when she receives the faith; she finds that the faith answers the questions philosophy could only articulate. The greatest philosophers have always known they were looking for something; Justin found it.",
    prayerToSaint: "O Saint Justin Martyr, philosopher and first apologist of the faith, you showed that the love of wisdom leads, rightly pursued, to the Word of God made flesh. Intercede for all philosophers, professors, and those who seek truth through reason. Help the Church in every age to engage the intellectual questions of its time with both intellectual rigor and humble faith. Give courage to all who must defend the faith before hostile authorities or skeptical audiences. Amen.",
  },

  {
    name: "Saint Aloysius Gonzaga",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XIII (1726)",
    quote: "I am a piece of twisted iron; I entered the religious life to get twisted straight.",
    fullBio: `<h3>Noble Birth and Renunciation</h3>
<p>Aloysius (Luigi) Gonzaga was born on March 9, 1568, in the castle of Castiglione delle Stiviere, near Mantua, Italy, the eldest son of the Marquis Ferrante Gonzaga, an officer of King Philip II of Spain. He was born to inherit a principality and to play the games of Renaissance court politics. At a young age he was a page at the Spanish court and seems to have encountered the moral depravity of court life. He reportedly chose to avoid occasions of sin by keeping his eyes cast down and refusing to be alone with any woman, including his own mother.</p>

<h3>Renunciation and Jesuit Life</h3>
<p>After receiving his First Communion from Saint Charles Borromeo at age nine, Aloysius experienced a deepening sense of call to the religious life. At sixteen — and after three years of struggle against his father's resistance — he formally renounced his rights of inheritance to his younger brother and entered the Society of Jesus in Rome in 1585. His novitiate and studies at the Jesuit Roman College were marked by intense piety, rigorous intellectual work, and remarkable charity. He was reportedly told by his spiritual director Robert Bellarmine to relax his penances somewhat, as they were excessive.</p>

<h3>Death Serving the Plague-Stricken</h3>
<p>In 1591 a plague devastated Rome. Aloysius threw himself into caring for the sick at the Jesuit hospital, carrying patients on his back when necessary. He contracted the plague himself and died on June 21, 1591, at age 23, having received last rites from his spiritual director Saint Robert Bellarmine. He was beatified in 1605 and canonized in 1726. Pope Benedict XIII declared him patron of youth; Pope Pius XI extended this patronage. In 1991 John Paul II declared him patron of young people suffering from AIDS.</p>`,
    reflection: "Aloysius died at 23, having never been ordained, having never preached, having never written a theological treatise. What he did was serve plague victims — carrying them, cleaning them, praying with them — until he caught the disease himself. His short life is a challenge to everyone who measures holiness by achievement or visibility. He was holy enough, at 23, to die in service. That is the whole biography of a saint.",
    prayerToSaint: "O Saint Aloysius Gonzaga, patron of youth and model of purity, you exchanged a prince's title for the service of Christ and the sick. Intercede for all young people who seek holiness in a world that mocks it. Protect youth from the corruptions that surrounded you: the moral pollution, the lure of power and pleasure. Help them to find in Christ the one goal worthy of their full devotion, as you did in your brief and burning life. Amen.",
  },

  {
    name: "Saint Birth of John the Baptist",
    feastType: "Solemnity",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "He must increase, I must decrease.",
    fullBio: `<h3>The Solemnity of the Birth</h3>
<p>The Church celebrates the Birth of John the Baptist on June 24 as a Solemnity — one of the highest ranks in the liturgical calendar. Only three birthdays are celebrated liturgically in the Roman Rite: Our Lord Jesus Christ (December 25), the Blessed Virgin Mary (September 8), and John the Baptist (June 24). The reason is the same in each case: these three were uniquely sanctified — in John's case, sanctified in the womb when he leaped for joy at the greeting of the Virgin Mary (Luke 1:41-44), an event understood by the Church as his purification from original sin and filling with the Holy Spirit before birth.</p>

<h3>The Forerunner</h3>
<p>John the Baptist was the son of Zechariah, a Temple priest, and Elizabeth, a kinswoman of the Virgin Mary. His birth was announced by the angel Gabriel to Zechariah in the Temple — news so extraordinary that the elderly priest was struck mute until John was born and named. John grew up in the desert and emerged as a prophet around 28–29 AD, preaching repentance and baptizing in the Jordan River. The Gospels describe him in explicitly prophetic terms: clothed in camel's hair, eating locusts and wild honey, fulfilling the prophecy of Isaiah: "A voice crying in the wilderness: Prepare the way of the Lord."</p>

<h3>Witness to Christ</h3>
<p>When Jesus came to John for baptism, John tried to prevent him, saying "I need to be baptized by you, and do you come to me?" (Matthew 3:14). After the baptism, a voice from heaven and the descent of the dove confirmed Jesus as the Son of God. John's disciples gradually came to follow Jesus; John himself, when asked, gave the most selfless response in the Gospels: "He must increase, I must decrease" (John 3:30). He was imprisoned by Herod Antipas for condemning the king's adulterous marriage to his brother's wife, and was beheaded at the request of Salome, who danced for Herod. The Feast of the Beheading of John the Baptist is celebrated on August 29.</p>`,
    reflection: "John the Baptist's entire life was directed toward one thing: pointing to Jesus. 'Behold the Lamb of God' — that was his identity, his vocation, his whole purpose. When Jesus' ministry eclipsed his own, John rejoiced. When he was imprisoned and then killed, it was for speaking the truth about the holiness of marriage. He was the last and greatest of the prophets, the hinge between the Old and the New: the voice that introduced the Word.",
    prayerToSaint: "O Saint John the Baptist, voice in the wilderness and forerunner of the Lord, you spent your whole life pointing to the one who came after you. Intercede for all who prepare the way for others — catechists, spiritual directors, parents, priests — those who make the path smooth for others to find Christ. Help us to echo your great wisdom: 'He must increase, I must decrease.' Amen.",
  },

  {
    name: "Saint Peter and Paul",
    feastType: "Solemnity",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Peter: 'You are the Christ, the Son of the living God.' — Paul: 'For me, to live is Christ and to die is gain.'",
    fullBio: `<h3>The Two Great Pillars</h3>
<p>The Solemnity of Saints Peter and Paul, celebrated on June 29, honors the two greatest figures of the Apostolic Church — the first pope and the apostle to the Gentiles — who are traditionally held to have both been martyred in Rome. Their joint feast reflects a theological pairing: Peter represents the Jewish-rooted church of the Circumcision, faithful to the covenant; Paul represents the universal church opened to all nations. Together they span the whole mission of the Church.</p>

<h3>Simon Peter</h3>
<p>Simon, son of John, was a fisherman from Bethsaida in Galilee. Jesus renamed him Kephas (Peter, Rock) — "On this rock I will build my Church" (Matthew 16:18). Peter was the leader and spokesman of the Twelve: first to profess Jesus as Messiah, first to enter the empty tomb, first to preach on Pentecost. He was also the most dramatically flawed: he denied Christ three times on the night of the Passion and wept bitterly. His rehabilitation by the Risen Christ — "Feed my sheep" (John 21) — is one of the Gospel's most moving scenes. Peter preached throughout Judea, Antioch, and eventually Rome, where he was crucified upside down under Nero (around 64–68 AD), reportedly declaring himself unworthy to die in the same manner as his Lord.</p>

<h3>Saul of Tarsus, Called Paul</h3>
<p>Saul was a Pharisee, a Roman citizen, and a zealous persecutor of the Church — present at the stoning of Stephen, consenting to his death. On the road to Damascus to arrest Christians, he was struck by a blinding light and heard: "Saul, Saul, why are you persecuting me?" (Acts 9:4). Three days of blindness and prayer were followed by baptism, and the Church's greatest persecutor became her greatest missionary. Paul made three major missionary journeys across the Mediterranean world — Asia Minor, Greece, Malta, Rome — establishing churches in every major city and writing letters that form the theological spine of the New Testament. He was beheaded near Rome, on the Ostian Way, around 64–68 AD.</p>

<h3>Rome: The Center of Christendom</h3>
<p>Both Peter and Paul were martyred in Rome, making that city uniquely sacred in Christian geography: the see of Peter's successor and the city watered by the blood of the two greatest apostles. The Basilica of Saint Peter over Peter's tomb and the Basilica of Saint Paul Outside the Walls over Paul's tomb are two of the four major basilicas of Rome, pilgrimage destinations since the earliest centuries of the Church.</p>`,
    reflection: "Peter and Paul are a study in contrasts: the uneducated fisherman who spoke from the heart and the brilliant Pharisee who thought from the depths of philosophy. Peter's authority was rooted in election; Paul's in extraordinary conversion. Peter had known Jesus in the flesh; Paul had encountered him in blinding glory. The Church needs both: the authority of apostolic succession and the fire of personal conversion. United in martyrdom, they together built the foundation on which every generation of Christians stands.",
    prayerToSaint: "O Saints Peter and Paul, pillars of the Church and martyrs of Rome, you gave your lives for the Gospel — one crucified, one beheaded, both victorious. Intercede for the Church you founded in Rome, and for every diocese and community that traces its faith through the Apostolic Tradition you handed on. Pray for the Pope, successor of Peter; pray for all who preach the Gospel with Paul's fire. Help us to be worthy of the faith for which you died. Amen.",
  },

  // ── JULY ─────────────────────────────────────────────────────────────────

  {
    name: "Saint Thomas the Apostle",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "My Lord and my God!",
    fullBio: `<h3>The Twin</h3>
<p>Thomas, called Didymus (which means "Twin" in Greek), was one of the Twelve Apostles of Jesus. In the Gospel of John he appears more prominently than in the other Gospels. When Jesus announced he would return to Judea despite the danger, Thomas said to his fellow disciples: "Let us also go, that we may die with him" (John 11:16) — a remark of gloomy courage that is sometimes overlooked. At the Last Supper, when Jesus said "you know the way where I am going," Thomas replied honestly: "Lord, we do not know where you are going; how can we know the way?" — prompting Jesus' declaration "I am the way, the truth, and the life" (John 14:5-6).</p>

<h3>The Great Confession</h3>
<p>Thomas was absent when the Risen Christ appeared to the other disciples on Easter evening. When told of the Resurrection, he refused to believe without physical evidence: "Unless I see in his hands the print of the nails, and place my finger in the mark of the nails, and place my hand in his side, I will not believe" (John 20:25). When Jesus appeared again a week later and invited Thomas to do exactly what he had demanded, Thomas's response leapt beyond the physical evidence to the fullest confession of faith in the New Testament: "My Lord and my God!" (John 20:28). Jesus commended faith not dependent on sight — but did not condemn Thomas for needing sight.</p>

<h3>Apostle to India</h3>
<p>Tradition holds that Thomas evangelized Parthia (Iran), Persia, and ultimately India. The Thomas Christians of Kerala in India — the Saint Thomas Christians or Syro-Malabar Catholics — trace their origins to Thomas's mission to India, traditionally dated to 52 AD. They represent one of the oldest continuously existing Christian communities in the world. Thomas was martyred at Mylapore (now part of Chennai) by a lance or spear, around 72 AD. His feast is July 3. His body was brought to Edessa (modern Turkey) in the 3rd century, and his relics are now venerated at the Cathedral of Ortona in Italy.</p>`,
    reflection: "Thomas doubted — and the Church has never been embarrassed by this. Jesus did not condemn Thomas; he invited him to touch. The honest doubt that leads to deeper faith is not the enemy of faith but its deepening. Thomas's confession — 'My Lord and my God' — is the greatest explicit affirmation of Christ's divinity in the Gospels, and it came from the mouth of the man who had demanded proof. His story is the story of every person who has struggled with doubt and found, on the other side of it, a firmer faith.",
    prayerToSaint: "O Saint Thomas, Apostle to India and confessor of the living God, your journey from doubt to adoration is the story of every honest heart. Intercede for all who struggle with doubt and questions about the faith. Help them not to suppress their questions but to bring them honestly before the Lord, trusting that he who invited you to touch his wounds will also reach out to them in their unbelief. Amen.",
  },

  {
    name: "Saint James the Greater",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Lord, teach us to pray, as John taught his disciples.",
    fullBio: `<h3>Son of Thunder</h3>
<p>James, son of Zebedee, was a fisherman from the Sea of Galilee, the brother of John the Apostle, and — with Peter and John — one of the innermost circle of the Twelve. Jesus gave the brothers the nickname "Boanerges," meaning Sons of Thunder (Mark 3:17) — perhaps reflecting their impulsive temperament: they once asked Jesus to call down fire on a Samaritan village that had refused him hospitality (Luke 9:54), and they (or their mother) famously asked for the seats of honor at his right and left in glory (Matthew 20:20-21). Jesus responded that they would indeed drink his cup — a prophecy of their martyrdom.</p>

<h3>Witness to the Transfiguration</h3>
<p>James was present at the Transfiguration on Mount Tabor (Matthew 17:1-8), where Jesus' face shone like the sun and Moses and Elijah appeared. He was also in the garden of Gethsemane during the agony of Jesus — though, like the others, he fell asleep. He was the first of the Twelve to be martyred: "About that time Herod the king laid violent hands upon some who belonged to the Church. He killed James the brother of John with the sword" (Acts 12:1-2). This was around 44 AD, under Herod Agrippa I, making James the first apostle to die for the faith.</p>

<h3>Santiago de Compostela</h3>
<p>Tradition holds that James evangelized Spain before returning to Judea for his martyrdom, and that his body was miraculously transported to Galicia in northwestern Spain. The Cathedral of Santiago de Compostela, built over his alleged tomb, became one of the three great pilgrimage sites of medieval Christendom (alongside Rome and Jerusalem). The Camino de Santiago — the Way of Saint James — is walked by hundreds of thousands of pilgrims every year. James is the patron saint of Spain and of pilgrims.</p>`,
    reflection: "James asked for the seat of honor — and got the cup of suffering. He was the first of the Twelve to die. His ambition was not wrong in itself (we should desire the fullness of God's kingdom), but it was directed wrongly, toward position rather than service. Jesus redirected it: 'Whoever would be great among you must be your servant' (Matthew 20:26). James learned this; he drank the cup. Every pilgrimage walked on the Camino is a small school in the same lesson.",
    prayerToSaint: "O Saint James the Greater, Apostle and first martyr among the Twelve, you were with the Lord at his Transfiguration and at his agony. You drank the cup he offered. Intercede for all pilgrims — those who walk the Camino and those who make the pilgrimage of daily life. Help us to set aside our ambitions for honor and status, and to desire only what you ultimately desired: to follow Christ, wherever he leads, even to the cross. Amen.",
  },

  {
    name: "Saint Ignatius of Loyola",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory XV (1622)",
    quote: "Go forth and set the world on fire.",
    fullBio: `<h3>Soldier and Conversion</h3>
<p>Íñigo López de Loyola was born in 1491 at the castle of Loyola in the Basque Country of Spain, the youngest of thirteen children of a noble family. He was raised at court and trained as a soldier, cultivating his ambition, his vanity, and his love of chivalric adventure. In May 1521, at the siege of Pamplona, a French cannonball shattered his right leg and wounded his left. During a long convalescence at Loyola, having read the only books available — a life of Christ and a book of saints' lives — he experienced a conversion. The glitter of the knightly life left him empty; thoughts of the saints left him joyful and energized. He began to examine his own interior movements, laying the groundwork for what would become the Spiritual Exercises.</p>

<h3>Pilgrimage, Poverty, and Manresa</h3>
<p>After his recovery, Ignatius made a pilgrimage to the shrine of Our Lady at Montserrat, laid down his sword before her image, and spent a year of intense prayer and penance at Manresa. There, in a cave beside the River Cardoner, he received mystical illuminations that shaped his entire subsequent spiritual teaching — particularly the understanding that God speaks through "consolations" and "desolations," and that discernment of spirits is the key to spiritual growth. The Spiritual Exercises were born in Manresa.</p>

<h3>The Society of Jesus</h3>
<p>After studies in Barcelona, Alcalá, Salamanca, and Paris (where he gathered around him the original companions who would become the Society of Jesus), Ignatius and his companions pronounced their first vows at Montmartre in 1534. In 1540, Pope Paul III approved the Society of Jesus — the Jesuits — as a new religious order with a specific charism: "apostolic flexibility," going wherever the Pope needed them. Ignatius governed the order from Rome for fifteen years, producing the Jesuit Constitutions, a model of practical religious governance. The Jesuits' commitment to education, missionary work, and service of the Pope made them the principal agents of the Counter-Reformation. Ignatius died on July 31, 1556, having seen the Society grow to a thousand members across Europe and Asia.</p>`,
    reflection: "Ignatius was converted not by an angel but by boredom and a reading list. He was not struck down like Paul; he was laid up with a broken leg and given books about saints. God used the convalescence. This is a word to everyone recovering from a setback: in the enforced stillness, God speaks. Ignatius listened, examined his interior movements, and discovered the method that has guided millions to God. His Spiritual Exercises are a school for listening to God in the movements of one's own heart.",
    prayerToSaint: "O Saint Ignatius of Loyola, soldier of Christ and founder of the Society of Jesus, you learned to read the movements of your heart and found God there. Give us your discernment — the ability to distinguish the consolations of God from the deceits of the enemy. Help all Jesuits and those formed in Ignatian spirituality to carry out their mission with the same freedom, courage, and intelligence that animated your life. Set us on fire with love of God and souls. Amen.",
  },

  // ── AUGUST ───────────────────────────────────────────────────────────────

  {
    name: "Saint Alphonsus Liguori",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Gregory XVI (1839)",
    quote: "He who prays is certainly saved; he who prays not is certainly damned.",
    fullBio: `<h3>Lawyer Turned Priest</h3>
<p>Alphonsus Maria de' Liguori was born on September 27, 1696, in Marianella near Naples, Italy, to a noble family. He was a child prodigy — earning a doctorate in both civil and canon law at the University of Naples at age sixteen — and became a brilliant lawyer. In 1723, having lost a case through his own error, he abandoned law, declaring he had enough of the world, and was ordained a priest. He initially worked in Naples, preaching missions to the poor and the roughest neighborhoods of the city with remarkable effectiveness.</p>

<h3>Founder of the Redemptorists</h3>
<p>In 1732, during a preaching mission in the mountains of Campania, Alphonsus encountered the desperately poor and spiritually neglected shepherds and peasants of the region. He founded the Congregation of the Most Holy Redeemer (Redemptorists) specifically to serve the most abandoned poor — those without access to regular parish ministry. The Congregation, though challenged in its early decades by ecclesiastical politics and Alphonsus's own health crises, survived and spread throughout the world, producing Saint John Neumann, Saint Clement Hofbauer, and hundreds of other missionaries.</p>

<h3>Theologian of Mercy</h3>
<p>Alphonsus's most lasting intellectual contribution was his moral theology — specifically, his "equiprobabilism," a system that charted a middle way between the rigorous Jansenism that tormented penitents with impossibly high standards and the laxism that let everything slide. His <em>Moral Theology</em> (in nine volumes) became the standard text in Catholic seminaries for nearly two centuries. He also wrote beloved devotional works, including <em>The Glories of Mary</em> and <em>The Visits to the Blessed Sacrament</em>, works of warm, accessible piety. He was declared a Doctor of the Church in 1871 and patron of moral theologians and confessors. He died on August 1, 1787, at age 90.</p>`,
    reflection: "Alphonsus understood that the greatest danger facing ordinary Catholics was not laxness but scrupulosity — the paralyzing fear that they could never be good enough for God. His entire moral system was constructed to defend the freedom of conscience against an overly demanding rigorism. His famous axiom — 'He who prays is certainly saved' — is not a minimizing of the moral law but a maximizing of trust in God's mercy: prayer is the one act that always opens the soul to divine grace.",
    prayerToSaint: "O Saint Alphonsus Liguori, Doctor of the Church and patron of confessors, you gave the Church a moral theology of mercy and a devotional life of sweetness. Intercede for all confessors, moral theologians, and spiritual directors, that they may serve souls with your combination of doctrinal precision and pastoral tenderness. Free all who suffer under excessive scrupulosity, and help us to place our trust not in our own perfection but in the mercy of God. Amen.",
  },

  {
    name: "Saint Monica of Thagaste",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Nothing is far from God.",
    fullBio: `<h3>Wife and Mother</h3>
<p>Monica was born around 332 AD, probably in Thagaste, North Africa (modern Algeria). She was married to Patricius, a pagan Roman official who was difficult-tempered and unfaithful. Monica bore her marriage patiently, praying for her husband's conversion; he was baptized shortly before his death. She had three children, of whom the eldest, Augustine, would become the greatest theologian in the history of the Western Church — and her greatest sorrow and her greatest joy.</p>

<h3>Following Augustine</h3>
<p>For years, Augustine pursued a life of intellectual ambition, sensuality, and involvement with the Manichean sect, all of which caused Monica intense grief. She followed him to Carthage, to Rome, and to Milan — a mother in pursuit of a son's soul. In Milan she encountered the bishop Ambrose, who became her spiritual director and eventually the instrument of Augustine's conversion. Ambrose reportedly told her that the child of so many tears could not be lost. When Augustine was finally baptized by Ambrose at Easter 387 AD, Monica's joy was complete. She is reported to have said: "Son, nothing in this world now affords me delight. I do not know what there is now left for me to do or why I am still here, all my hopes in this world being now fulfilled."</p>

<h3>Death at Ostia</h3>
<p>Monica died at Ostia (the port of Rome), at age 56, while waiting with Augustine to return to Africa. A few days before her death, she and Augustine had a mystical experience together in a garden overlooking the sea — a conversation about the nature of eternal life that Augustine describes in the <em>Confessions</em> as a moment in which they "just barely touched" the edge of eternity. She is buried at Ostia; her relics were translated to Rome in 1430 and are enshrined in the church of Sant'Agostino. She is the patron of mothers, wives, and victims of abuse.</p>`,
    reflection: "Monica's tears purchased Augustine's soul. Her prayer, her patient love, her refusal to give up on the brilliant, restless, sinful son who kept running away — these are the hidden instruments of one of the greatest conversions in Christian history. She is the patron of every parent who prays for a child who has wandered from the faith; her long waiting is their long waiting. The promise Ambrose made her — that the child of so many tears could not be lost — is the promise that sustains them.",
    prayerToSaint: "O Saint Monica, patient mother and faithful intercessor, you never gave up on the son whose conversion cost you decades of tears and prayer. Intercede for all parents who pray for children who have left the faith. Give them your perseverance, your patience, and your unshakeable trust that God is at work even when they cannot see it. Help all wives in difficult marriages, and all who bear the burden of another's sin, to offer that burden with love and in hope. Amen.",
  },

  {
    name: "Saint Augustine of Hippo",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Our heart is restless, until it repose in Thee.",
    fullBio: `<h3>Youth and Wandering</h3>
<p>Aurelius Augustinus Hipponensis was born on November 13, 354, in Thagaste, North Africa, to Patricius, a pagan, and Monica, a devout Christian. He was brilliantly intelligent and received an excellent education in rhetoric at Carthage, destined for a career as a lawyer or teacher. He lived with a concubine for over a decade (who bore him his son Adeodatus), joined the Manichean sect (a dualist religion), then moved through Neoplatonism toward Christianity. He struggled famously with chastity — his prayer "Lord, make me pure, but not yet" summarizes the spiritual paralysis of his long journey.</p>

<h3>Conversion</h3>
<p>Augustine was teaching rhetoric in Milan when he began to attend the preaching of Bishop Ambrose. Ambrose's allegorical interpretation of Scripture removed the intellectual objections Augustine had raised against Christianity. The crisis came in the summer of 386: in a garden in Milan, hearing a child's voice repeating "Take up and read," he opened Paul's letter to the Romans and read: "Put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires" (Romans 13:14). "Instantly, at the end of this sentence," he writes in the <em>Confessions</em>, "by a light of security infused into my heart, all the darkness of doubt vanished away." He was baptized by Ambrose at the Easter Vigil, 387 AD.</p>

<h3>Bishop, Theologian, and Father of the Church</h3>
<p>Returning to Africa, Augustine was ordained priest (almost against his will) and became Bishop of Hippo in 396 AD, a position he held for 35 years until his death. His literary output was staggering: the <em>Confessions</em> (the first autobiography in Western literature and still one of the greatest spiritual books ever written), <em>The City of God</em> (a philosophy of history written in response to Rome's sack by the Visigoths), treatises on the Trinity, on grace and free will, on Scripture, against the Donatists and Pelagians. No writer after Paul has shaped the theology of the Western Church more profoundly. He died on August 28, 430, as the Vandals besieged his city.</p>`,
    reflection: "Augustine's greatness began with his honesty about his smallness. The <em>Confessions</em> opens with the admission that 'our heart is restless, until it repose in Thee' — a statement of the human condition that is both diagnosis and consolation. He looked at himself without illusion — the lust, the pride, the years of wandering — and saw not a monster but a man searching for something he could not name. And then he found it, and wrote it all down, so that every restless heart after him might know: the searching itself is not pathological. It is the trace of God in us.",
    prayerToSaint: "O Saint Augustine of Hippo, Doctor of Grace and Father of the Church, you searched for God in every philosophy and pleasure before finding him in his own Word. Intercede for all who wander in intellectual or moral confusion, seeking they know not what. Help the Church to speak to the restlessness of our age with your combination of intellectual honesty, mystical depth, and passionate love. Give us your famous prayer — and its answer: 'Lord, you have made us for yourself, and our heart is restless until it rests in you.' Amen.",
  },

  {
    name: "Saint Rose of Lima",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Clement X (1671)",
    quote: "Lord, increase my sufferings, and with them increase your love in my heart.",
    fullBio: `<h3>The First Saint of the Americas</h3>
<p>Isabel Flores de Oliva was born on April 20, 1586, in Lima, Peru, the daughter of Gaspar Flores, a Spanish soldier, and María de Oliva. She was given the nickname "Rose" by her mother — and later received from a mystical locution the assurance that the name was Christ's own gift to her. She grew up in a comfortably middle-class family in colonial Lima, a city that was the center of Spanish colonial power in South America.</p>

<h3>Mortification and Mysticism</h3>
<p>From an early age Rose was drawn to austere penance. She cut her hair to avoid vanity after it was admired; she rubbed pepper on her face to prevent its attractiveness being noticed; she wore a hair-shirt and a metal spiked circlet on her head in imitation of Christ's crown of thorns. While these practices may seem extreme to modern sensibilities, they were understood in her tradition as means of entering into union with Christ's Passion and making reparation for sin. She became a Dominican tertiary and lived as a recluse in a garden hermitage built by her brother, spending long hours in contemplative prayer.</p>

<h3>Apostolate to the Poor</h3>
<p>Despite her life of penance and prayer, Rose was not inactive. She established a room in her house as a clinic for the poor, the sick, and abandoned children. She worked with her hands — making embroidery and lace to support her family — and organized others in works of charity. She reportedly experienced mystical trials of extraordinary intensity in the last years of her life, including spiritual aridity and what she described as attacks from demonic forces. She died on August 24, 1617, at age 31. The city of Lima turned out en masse for her funeral, and the crowds were so great that her burial had to be delayed three days. She was beatified in 1668 and canonized in 1671 — the first person born in the Americas to be canonized.</p>`,
    reflection: "Rose of Lima is a challenge to every comfortable Christianity. She took the mystery of Christ's suffering seriously — mortally seriously — and invited it into her own body and soul. Whatever we make of her extreme penances, their purpose was love: love that wanted to feel what Christ felt, to be where he was, to make of her body an offering. The Church does not require such extremes, but she honors them as expressions of a love that refuses to be moderate.",
    prayerToSaint: "O Saint Rose of Lima, first canonized saint of the Americas and patroness of Latin America, you made of your life a garden of prayer and suffering for the love of Christ. Intercede for all the peoples of the Americas, that they may remain faithful to the Gospel that has shaped their culture. Help all who suffer in silence to unite their suffering to Christ's, and all who seek holiness amid the noise and distraction of the world to find, as you did, the hidden hermitage of prayer. Amen.",
  },

  {
    name: "Saint Bartholomew the Apostle",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "Rabbi, you are the Son of God; you are the King of Israel!",
    fullBio: `<h3>Nathanael, the Honest Man</h3>
<p>Bartholomew is generally identified with Nathanael of Cana in Galilee, who appears in the Gospel of John as one of the first disciples. His call is recorded in John 1:45-51: Philip found him and said, "We have found him of whom Moses in the Law and also the prophets wrote, Jesus of Nazareth, the son of Joseph." Nathanael's response was skeptical: "Can anything good come out of Nazareth?" When Jesus saw him coming, he said: "Behold, an Israelite indeed, in whom is no deceit!" — a remark that suggests Nathanael's honesty and uprightness were known to Jesus even before their meeting. Nathanael asked how Jesus knew him; Jesus replied that he had seen him under the fig tree before Philip called him — an apparent supernatural knowledge that immediately converted Nathanael to full faith: "Rabbi, you are the Son of God; you are the King of Israel!"</p>

<h3>Apostle to India and Armenia</h3>
<p>After the Resurrection and Pentecost, tradition associates Bartholomew with missions to India (where he reportedly left a Hebrew copy of the Gospel of Matthew), Mesopotamia, Persia, Egypt, and Armenia. The most consistent ancient tradition places his martyrdom in Armenia (modern Azerbaijan), where he was flayed alive (skinned) and beheaded. This mode of death has made him patron of tanners, plasterers, butchers, and all who work with leather. He is also patron of Armenia.</p>

<h3>Iconography</h3>
<p>Bartholomew is one of the most dramatically depicted saints in Western art. Michelangelo's <em>Last Judgment</em> in the Sistine Chapel includes a famous figure of Bartholomew holding his own skin — the face on the skin being a self-portrait of Michelangelo himself, in a darkly personal commentary on suffering and identity. This image captures the brutal reality of martyrdom and the artistic tradition's honest confrontation with it.</p>`,
    reflection: "Jesus praised Nathanael/Bartholomew for having no deceit in him. Honesty before God is the beginning of all prayer: the refusal to pretend, to perform, to wear a mask. Nathanael's first response to Philip was honest doubt ('Can anything good come from Nazareth?'); his second response, to Jesus himself, was honest faith ('You are the Son of God'). The path from honest doubt to honest faith is the only real path — and Jesus honors those who walk it.",
    prayerToSaint: "O Saint Bartholomew, Apostle of Christ, you were praised by our Lord for your honesty and faithfulness, and you sealed your faith with a martyr's death. Intercede for all who labor in difficult apostolates far from their homes. Pray for the Church in Armenia, which honors you as its patron. Help us to come before God as you came before Christ: without pretense, without duplicity, with the simplicity of a heart that has nothing to hide. Amen.",
  },

  // ── SEPTEMBER ────────────────────────────────────────────────────────────

  {
    name: "Saint Peter Claver",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Leo XIII (1888)",
    quote: "We must speak to them with our hands before we try to speak to them with our lips.",
    fullBio: `<h3>The Slave of the Slaves</h3>
<p>Pedro Claver was born in 1581 in Verdú, Catalonia, Spain, of peasant stock. He entered the Society of Jesus in 1602 and was sent to the New World, arriving in Cartagena de Indias (in modern Colombia) in 1610 — a city that was the primary port of entry for enslaved Africans in the Americas. There he was mentored by the lay brother Alfonso Rodríguez (now canonized), who told him he was destined for great things in the New World. Peter was ordained a priest in 1616 and immediately declared: "I will be a slave of the Black slaves forever."</p>

<h3>Ministry at the Docks</h3>
<p>For forty years, Peter Claver met every slave ship that arrived in Cartagena. He boarded the ships immediately — while the authorities were still completing formalities — and went below decks into the spaces where men, women, and children were packed, often sick, dying, terrified, and starving. He brought food, medicine, brandy, lemons, and tobacco; he bathed wounds and buried the dead. He learned the languages of the major African peoples represented in the slave trade and worked through interpreters to communicate with others. He baptized an estimated 300,000 enslaved persons during his ministry.</p>

<h3>Death and Legacy</h3>
<p>Peter Claver spent the last four years of his life largely incapacitated by disease, neglected and mistreated by those who were supposed to care for him. He died on September 8, 1654. The city that had largely ignored him during his final years turned out en masse for his funeral. He was canonized in 1888 and declared patron of missions to African peoples and of Colombia. Pope Leo XIII canonized him on the same day as Alfonso Rodríguez, the lay brother who had prophesied his vocation.</p>`,
    reflection: "Peter Claver did not try to abolish slavery through legislation or political agitation — he couldn't. What he could do, he did: he went where the slaves were, and he treated them as human beings, as brothers, as souls for whom Christ had died. 'We must speak to them with our hands before we try to speak to them with our lips.' The history of the Church's engagement with slavery is complicated and sometimes shameful; Peter Claver stands in that history as one who chose, in the face of an unjust system, to love.",
    prayerToSaint: "O Saint Peter Claver, apostle to enslaved Africans and servant of the most marginalized, you gave your entire priestly life to those the world had discarded. Intercede for all who are trafficked, enslaved, or deprived of their dignity today. Help the Church and every Christian to see in every human person — whatever their race, condition, or legal status — the face of Christ, deserving of love and service. Amen.",
  },

  {
    name: "Saint John Chrysostom",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "The road of the good life is narrow but it is not impassable. Its joy comes from within.",
    fullBio: `<h3>The Golden-Mouthed</h3>
<p>John of Antioch, later called "Chrysostom" (Golden-Mouthed) for the quality of his preaching, was born around 347 AD in Antioch, Syria (modern Antakya, Turkey), to a wealthy family. His father was a military officer who died shortly after his birth. His mother Anthusa raised him with great care and sacrificed any prospect of remarriage to devote herself to his education. John studied rhetoric under the famous pagan orator Libanius — reportedly the best student Libanius had — before turning to Christian theology under the bishop Meletius of Antioch. He was baptized around 368 and spent several years as an ascetic and monk in the mountains near Antioch before illness forced his return to the city.</p>

<h3>Preacher and Social Prophet</h3>
<p>Ordained a deacon (381) and then a priest (386) in Antioch, John burst onto the stage as one of the greatest preachers in Christian history. His homilies on the Gospels, on Paul's Letters, on the Psalms, and on various other biblical books fill dozens of volumes and are still read today for their exegetical insight and rhetorical brilliance. But his preaching was not merely beautiful — it was uncomfortable. He attacked the wealth of the Antiochene upper classes with an urgency reminiscent of the Old Testament prophets: "The rich man is often simply the greater thief." He preached that the Eucharist on the altar demands care for Christ in the poor.</p>

<h3>Bishop of Constantinople and Exile</h3>
<p>In 398, against his will, John was appointed Archbishop of Constantinople, the imperial capital. He immediately reformed the court-like lifestyle of the clergy, sold off the luxurious furnishings of the episcopal palace to give the proceeds to the poor, and established hospitals. His plain speaking made him powerful enemies, especially Empress Eudoxia, whom he appeared to criticize in a famous sermon comparing her to Herodias. He was exiled twice; the second time was permanent. He died in September 407 at Comana in Pontus, en route to a more distant exile, reportedly saying: "Thanks be to God for all things."</p>`,
    reflection: "John Chrysostom lost his see, his reputation, and his life for saying things that powerful people did not want to hear. His homilies on the Eucharist and the poor are among the most challenging words in all Christian literature: you cannot honor Christ on the altar while ignoring Christ in the poor. This connection — Eucharist and the poor, liturgy and justice — is the heart of Christian social teaching, and Chrysostom articulated it with a directness that cost him everything.",
    prayerToSaint: "O Saint John Chrysostom, golden-mouthed preacher and Doctor of the Church, you proclaimed the Word of God with power and paid for it with exile and death. Intercede for all preachers and teachers of the faith, that they may speak the truth in love and never sacrifice the Gospel's demands on the altar of human approval. Help us to hear in your words the urgent voice of Christ: 'Whatever you did for the least of these my brothers, you did for me.' Amen.",
  },

  {
    name: "Saint Matthew the Apostle",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "As Jesus was walking along, he saw a man called Matthew sitting at the tax booth; and he said to him, 'Follow me.' And he got up and followed him.",
    fullBio: `<h3>The Tax Collector</h3>
<p>Matthew (Levi in Mark and Luke) was a publican — a tax collector — at Capernaum, working for the Roman occupiers and therefore despised by his fellow Jews as a collaborator and extortionist. Tax collectors were excluded from the synagogue, unable to testify in court, and considered ritually impure. When Jesus passed by Matthew's tax booth and said simply "Follow me," Matthew's response was immediate and total. He left everything and followed.</p>

<h3>The Feast and the Pharisees</h3>
<p>To celebrate his new life, Matthew threw a great banquet at which Jesus reclined at table "with many tax collectors and sinners" (Matthew 9:10). When the Pharisees asked the disciples why Jesus ate with such people, Jesus replied: "It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but sinners" (Matthew 9:12-13). This scene — the penitent feast, the murmuring of the righteous, the physician of souls who goes where the sick are — encapsulates the Gospel of Matthew's whole vision of Jesus.</p>

<h3>The Gospel of Matthew</h3>
<p>Tradition identifies Matthew as the author of the first Gospel, written for a Jewish-Christian audience. It is the most structured of the four Gospels — organized around five great discourses, deliberately evoking the five books of Moses — and the most quoted in early Christian liturgy and catechesis. The Gospel begins with a genealogy tracing Jesus back to Abraham and David, and ends with the Great Commission: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit" (Matthew 28:19). Tradition holds that Matthew evangelized in Ethiopia or Persia and was martyred.</p>`,
    reflection: "Matthew's call is the most economical conversion story in the Gospels: one sentence, one response, one feast. He did not ask for time to think, to settle his affairs, to give notice. He got up and followed. What made that possible was probably not unusual virtue — Matthew had done nothing virtuous in years. It was the directness of the invitation and the fact that the one who invited him looked at a man the whole world had written off and saw someone worth calling. That is the look that changes lives.",
    prayerToSaint: "O Saint Matthew the Apostle and Evangelist, you rose from the tax booth to become a witness to the Resurrection and author of the first Gospel. Intercede for all who feel too sinful, too far from God, too lost in their occupation to answer the call to follow Christ. Help us to respond to every invitation from God with your simplicity and courage: to get up, leave what holds us back, and follow. Amen.",
  },

  {
    name: "Saint Michael, Gabriel, and Raphael",
    feastType: "Feast",
    liturgicalColor: "White",
    canonizedBy: "Pre-Congregation",
    quote: "Michael: 'Who is like God?' — Gabriel: 'Do not be afraid.' — Raphael: 'I am Raphael, one of the seven angels who stand before the Lord.'",
    fullBio: `<h3>The Three Named Archangels</h3>
<p>The Catholic tradition names three archangels, whose names appear in the canonical Scriptures: Michael, Gabriel, and Raphael. They are venerated together on September 29 (Michaelmas) — a feast that appears in the Roman calendar from at least the 5th century. Angels are pure spiritual beings who serve God and are sent as messengers and protectors to human beings. The archangels are the highest of the angelic orders and are entrusted with the most important divine missions.</p>

<h3>Saint Michael</h3>
<p>Michael — whose name in Hebrew means "Who is like God?" — appears in the Book of Daniel as the angelic protector of Israel (Daniel 10:13, 12:1), in the Letter of Jude as disputing with the devil over the body of Moses, and in the Book of Revelation as the leader of the heavenly army that defeats the dragon (Revelation 12:7-9). He is the patron of the Church, of soldiers, of police, and of all who fight against evil. The traditional Prayer to Saint Michael, composed by Pope Leo XIII after a vision, invokes his protection against "the wickedness and snares of the devil."</p>

<h3>Saint Gabriel</h3>
<p>Gabriel — whose name means "God is my strength" — appears in Daniel as the interpreter of visions (Daniel 8:16; 9:21). In the New Testament, he announces the birth of John the Baptist to Zechariah (Luke 1:19) and the Incarnation to Mary: "Hail, full of grace, the Lord is with you" (Luke 1:28). The Annunciation — Gabriel's announcement to Mary — is celebrated on March 25 and is the foundational moment of the New Testament. Gabriel is the patron of communications workers and messengers.</p>

<h3>Saint Raphael</h3>
<p>Raphael — whose name means "God heals" — appears in the deuterocanonical Book of Tobit as a companion and guide who protects Tobias and heals his father's blindness, revealing his identity at the end: "I am Raphael, one of the seven holy angels, which present the prayers of the saints, and which go in and out before the glory of the Holy One" (Tobit 12:15). He is the patron of travelers, the blind, the sick, and medical workers.</p>`,
    reflection: "The archangels remind us that the spiritual world is not a dim backdrop to the 'real' world of matter and history — it is a populated, active realm of beings who serve God and minister to us. Michael's battle, Gabriel's announcement, Raphael's healing: these are not myths but disclosures of reality. Prayer to the angels is not superstition; it is the acknowledgment that we are surrounded by helpers we cannot see, and that the most real battles are fought in the spirit.",
    prayerToSaint: "O Saints Michael, Gabriel, and Raphael, archangels and ministers of God's grace, you serve the Lord of Hosts and are sent to protect, announce, and heal. Saint Michael, defend us in battle against evil. Saint Gabriel, help us to say yes to God as Mary said yes. Saint Raphael, guide and heal us on our pilgrimage. Archangels of God, be our companions in prayer and protectors on our journey to the eternal city. Amen.",
  },

  // ── OCTOBER ──────────────────────────────────────────────────────────────

  {
    name: "Saint Ignatius of Antioch",
    feastType: "Memorial",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "I am God's wheat, and I am ground by the teeth of wild beasts that I may be found pure bread of Christ.",
    fullBio: `<h3>Bishop of Antioch and Apostolic Father</h3>
<p>Ignatius of Antioch (also called Theophorus, "God-bearer") was the third bishop of Antioch, one of the great sees of early Christianity, and a figure who may have known the Apostles personally — perhaps even a disciple of John the Apostle. He was arrested during the reign of Emperor Trajan (98–117 AD) and sent to Rome under military guard to be thrown to the wild beasts in the arena. This journey — across Asia Minor and then by ship to Rome — became an extraordinary apostolic opportunity. He wrote seven letters (to the churches at Ephesus, Magnesia, Tralles, Rome, Philadelphia, and Smyrna, and to Polycarp of Smyrna) which are among the most precious documents of early Christianity.</p>

<h3>The Seven Letters</h3>
<p>Ignatius's letters, written while a prisoner en route to martyrdom, reveal a bishop of passionate conviction, remarkable theological depth, and a burning desire for martyrdom he understood as the completion of his discipleship. Key theological contributions: he is the first writer to use the word "Catholic" to describe the universal Church ("Wherever the bishop appears, there let the congregation be, just as wherever Christ Jesus is, there is the Catholic Church"). He is among the earliest clear witnesses to the Real Presence ("The Eucharist is the flesh of our Savior Jesus Christ, the flesh which suffered for our sins and which the Father, in His graciousness, raised up again"). He is also the first to clearly articulate the three-fold ministry of bishop, priest, and deacon.</p>

<h3>Martyrdom</h3>
<p>Ignatius was martyred in Rome, probably around 108–117 AD, thrown to the lions in the Colosseum. He had begged the Roman Christians not to intervene to save him, writing: "Suffer me to be eaten by the beasts, through whom I can attain to God. I am God's wheat, and I am ground by the teeth of wild beasts that I may be found pure bread of Christ." His relics were returned to Antioch and later translated to Rome, where they rest in the church of Sant'Ignazio.</p>`,
    reflection: "Ignatius went to his death not merely accepting it but desiring it — not out of morbidity but out of love. He understood martyrdom as the final act of discipleship: the union of one's entire being, including one's body, with the suffering and death of Christ. His letters, written in chains, are among the most joyful and life-affirming in the Christian tradition. The man approaching the lions writes: 'Let me be ground by the teeth of beasts that I may be found pure bread.' This is not despair. This is love at its most intense.",
    prayerToSaint: "O Saint Ignatius of Antioch, bishop, martyr, and Apostolic Father, your journey to martyrdom gave the Church some of her most precious early theology and your witness to the Real Presence and the episcopate has been foundational for twenty centuries. Intercede for all bishops, that they may shepherd their flocks with your passion and conviction. Help us to love Christ as you loved him — to the point where no sacrifice seems too great. Amen.",
  },

  {
    name: "Saint Luke the Evangelist",
    feastType: "Feast",
    liturgicalColor: "Red",
    canonizedBy: "Pre-Congregation",
    quote: "God has visited his people.",
    fullBio: `<h3>Physician and Companion of Paul</h3>
<p>Luke is identified in the Letter to the Colossians as "the beloved physician" (Colossians 4:14) and appears as a companion of Paul in the "we passages" of Acts (Acts 16:10 and following), indicating he was present at key moments of the second and third missionary journeys. He was with Paul during his Roman imprisonment (2 Timothy 4:11). He was a Gentile (non-Jew), making him the only non-Jewish author in the New Testament. His education as a physician gave him particular attention to healing miracles in his Gospel, and tradition credits him with painting the first icon of the Virgin Mary.</p>

<h3>The Gospel of Luke</h3>
<p>Luke's Gospel is addressed to "Theophilus" (a Greek name, probably a Roman patron) and is distinguished by its literary sophistication, its attention to the poor and marginalized, its prominent role for women, and its beautiful canticles: the Magnificat of Mary, the Benedictus of Zechariah, and the Nunc Dimittis of Simeon. More than any other Gospel, Luke emphasizes prayer (Jesus prays before every major event), the work of the Holy Spirit, and God's mercy to sinners (the Prodigal Son, Zacchaeus, the Good Samaritan, the Penitent Thief). The infancy narrative is told entirely from Mary's perspective — "Mary treasured all these things and pondered them in her heart" — suggesting Luke may have received this material from Mary herself.</p>

<h3>Acts of the Apostles</h3>
<p>Luke also wrote the Acts of the Apostles, the only New Testament account of the early Church's history from Pentecost through Paul's imprisonment in Rome. Together, the Gospel and Acts constitute the longest single work in the New Testament, written by a single author. Tradition says Luke died at age 84 in Boeotia (Greece), never having married. His feast is October 18. He is patron of physicians, surgeons, artists, painters, and students.</p>`,
    reflection: "Luke's Gospel is the Gospel of mercy — the one where the Father runs to meet the returning prodigal, where Jesus promises paradise to the penitent thief, where the woman who lost one coin searches until she finds it. Luke heard the Gospel through the lens of a healer: he saw sin as sickness, grace as medicine, and Jesus as the physician of souls. His attention to women, to the poor, to the outsider, makes his Gospel the one most urgently needed in every age that forgets the excluded.",
    prayerToSaint: "O Saint Luke the Evangelist, beloved physician and faithful companion of Paul, you gave us the most beautiful accounts of the Nativity and the Resurrection appearances, and the most tender portraits of God's mercy to sinners. Intercede for all physicians and medical workers, that they may heal with your compassion. Inspire all artists and writers who serve the faith. Help us to read your Gospel with open hearts, receiving the mercy it offers so freely. Amen.",
  },

  // ── NOVEMBER ─────────────────────────────────────────────────────────────

  {
    name: "Saint John of the Cross",
    feastType: "Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XIII (1726)",
    quote: "In the evening of life, we will be judged on love alone.",
    fullBio: `<h3>Early Life and Carmelite Vocation</h3>
<p>Juan de Yepes was born on June 24, 1542, in Fontiveros, Castile, Spain, to a poor weaver family. His father died when he was young, leaving the family in genuine poverty. Juan grew up in orphanages and charitable institutions, received a good humanistic education at a Jesuit school, and entered the Carmelite Order in 1563, taking the name Juan de Santo Matía. He studied theology at Salamanca, was ordained a priest in 1567, and there met Teresa of Ávila — who persuaded him to join her reform of the Carmelite Order rather than transfer to the Carthusians.</p>

<h3>Co-Reformer and Prisoner</h3>
<p>John became one of the first Discalced (Barefoot) Carmelites, the reformed branch that Teresa was founding. In 1577, he was seized by the Calced (unreformed) Carmelites who opposed the reform and imprisoned in a cell in Toledo for nine months. The cell was tiny, dark, cold, and the treatment brutal. It was in this darkness that John experienced both his deepest spiritual trials — the "dark night of the soul" — and composed some of the greatest mystical poetry in the Spanish language, including the <em>Spiritual Canticle</em> and poems that became the <em>Dark Night of the Soul</em> and the <em>Ascent of Mount Carmel</em>.</p>

<h3>Mystical Doctor</h3>
<p>After his escape from prison (which he attributed to the intercession of Our Lady), John continued his work of reforming the Carmelites and guiding souls in prayer. His four major prose works — <em>Ascent of Mount Carmel</em>, <em>Dark Night of the Soul</em>, <em>Spiritual Canticle</em>, and <em>Living Flame of Love</em> — are the most rigorous and profound mystical theology in the Western tradition. He mapped the journey of the soul from initial conversion through the "active and passive nights" of sense and spirit to the transforming union with God. He died on December 14, 1591, at Úbeda, Spain, reportedly saying: "Into your hands, Lord, I commend my spirit." He was canonized in 1726 and declared a Doctor of the Church in 1926.</p>`,
    reflection: "The dark night of the soul — the phrase John gave us — is not a poetic metaphor for depression. It is a precise description of a stage of the spiritual life in which God seems absent, prayer feels empty, and consolations disappear. John's great discovery — and gift to every soul who has experienced this darkness — is that the apparent absence of God is often the prelude to a deeper presence: the work God does in the soul when all the supports are removed. The darkness is not punishment. It is purification. And at the end of it, there is light.",
    prayerToSaint: "O Saint John of the Cross, Doctor of the Church and master of the spiritual life, you traversed the darkest nights of the soul and found on the other side a union with God that surpasses all understanding. Intercede for all who suffer spiritual dryness, who feel abandoned by God, who pray in darkness without consolation. Help them to persevere, trusting that the dark night is the soul's passage to the dawn. And teach us all, in the evening of life, to be judged on love alone. Amen.",
  },

  // ── DECEMBER ─────────────────────────────────────────────────────────────

  {
    name: "Saint Damien of Molokai",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Benedict XVI (2009)",
    quote: "I want to be a saint. We have to try.",
    fullBio: `<h3>The Priest Who Chose Molokai</h3>
<p>Jozef De Veuster was born on January 3, 1840, in Tremelo, Belgium, the seventh of eight children of a Flemish farming family. He entered the Congregation of the Sacred Hearts of Jesus and Mary, taking the name Damien, and was sent to the Hawaiian Islands in 1864 as a missionary, arriving in Honolulu and being ordained a priest there. For nine years he worked on the island of Hawaii, building churches and evangelizing. In 1873, when the bishop asked for a volunteer to serve the leper colony on Molokai — a settlement where the Hawaiian government had been confining persons with leprosy since 1865, effectively exiling them without medical care or spiritual ministry — Damien volunteered. He meant to stay a few months. He stayed until he died.</p>

<h3>Father to the Dying</h3>
<p>The colony at Kalaupapa on Molokai was, when Damien arrived, a place of despair: the dying sick had been left largely to their own devices, with little housing, no medical care, and a pervasive sense of abandonment. Damien changed this. He built houses and a church with his own hands, established a school, organized a choir and a band, cared for the sick and dressed their wounds, buried the dead, and provided the community with dignity, purpose, and faith. He wrote to his superiors: "I make myself a leper with the lepers to gain all for Jesus Christ."</p>

<h3>Contraction of Leprosy and Death</h3>
<p>In 1884, Damien accidentally immersed his foot in boiling water and felt nothing — realizing he had contracted leprosy. He announced to his congregation the following Sunday: "We lepers..." He continued his work for five more years until his death on April 15, 1889, aged 49. He died of leprosy in the colony he had transformed. He was beatified by Pope John Paul II in 1995 and canonized by Pope Benedict XVI in 2009. He is the patron of those suffering from leprosy and HIV/AIDS, and of Hawaii and Belgium.</p>`,
    reflection: "Damien went to Molokai thinking he would be a missionary; he became a leper. He spent himself for people the world wanted to forget, in a place the world wanted to ignore. When he announced 'We lepers' from the pulpit, he was not practicing solidarity as a technique — he had literally become one of them, his own body sharing their disease. This is the furthest reach of the Incarnation: God becomes what we are, so we might become what he is.",
    prayerToSaint: "O Saint Damien of Molokai, priest and martyr of charity, you chose the company of the dying over the comfort of the living, and in doing so revealed the face of Christ in the most abandoned. Intercede for all who suffer from leprosy and HIV/AIDS, and for all who are stigmatized or isolated by illness. Inspire healthcare workers and missionaries who serve in difficult conditions. Help us to remember that in giving ourselves for others, we find ourselves — and in their suffering faces, we find Christ. Amen.",
  },

  {
    name: "Saint Bernadette Soubirous",
    feastType: "Optional Memorial",
    liturgicalColor: "White",
    canonizedBy: "Pope Pius XI (1933)",
    quote: "The Virgin used me as a broom to remove the dust. When the work is done, the broom is put back in its place, behind the door.",
    fullBio: `<h3>The Miller's Daughter</h3>
<p>Marie-Bernarde (Bernadette) Soubirous was born on January 7, 1844, in Lourdes, France, the eldest daughter of a miller who had fallen into poverty. The family lived at various times in a former jail cell (the Cachot). Bernadette suffered from severe asthma and was intellectually simple — unable to read or write French, speaking only the local Occitan dialect. She had not yet made her First Communion at age fourteen due to her incomplete catechesis. In every external respect, she was the least likely person to receive a major Marian apparition.</p>

<h3>The Eighteen Apparitions</h3>
<p>On February 11, 1858, while gathering firewood by the Grotto of Massabielle near Lourdes, Bernadette saw a vision of "a small young lady" in the niche of the rock. The apparitions continued eighteen times until July 16, 1858. During one of these apparitions, the Lady asked Bernadette to scratch in the mud of the grotto — and a spring broke through, the spring whose waters have been associated with miraculous healings for over 165 years. On March 25 (the Feast of the Annunciation), the Lady identified herself: "I am the Immaculate Conception" — a theological term that the barely literate Bernadette could not have known or invented, and which had only been defined as dogma four years earlier (1854).</p>

<h3>Nun at Nevers</h3>
<p>Bernadette suffered the apparitions, the investigations, the curious crowds, and the skeptics with remarkable patience and humility. Approved by the Bishop of Tarbes in 1862, she entered the Sisters of Notre Dame de Nevers in 1866, where she lived until her death on April 16, 1879, aged 35, of tuberculosis of the bone. She never visited Lourdes again after entering the convent. Her body is incorrupt and is enshrined in the chapel of her convent at Nevers. She was beatified in 1925 and canonized in 1933. Lourdes, with its healing spring, receives over six million pilgrims annually.</p>`,
    reflection: "Bernadette was the broom — she knew it and said so. The Immaculate Conception appeared to an illiterate asthmatic peasant girl in a garbage dump, rather than to a theologian in a university. This is the logic of the Gospel: 'God chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong' (1 Corinthians 1:27). Bernadette's simplicity was her credential. The spring that flows at Lourdes is not a metaphor; millions have knelt beside it and found healing — of body, of spirit, and of the deepest form of despair.",
    prayerToSaint: "O Saint Bernadette of Lourdes, simple visionary and faithful witness of the Immaculate Conception, you saw what the wise and powerful could not see, and you bore your vision with extraordinary courage and humility. Intercede for all who are sick and make pilgrimage to Lourdes and to every shrine of Our Lady. Help us to come before God as you came before the Lady: with nothing to offer but our weakness and our trust. Amen.",
  },
];

// ─── MUTATION ─────────────────────────────────────────────────────────────────

export const seed10 = mutation({
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
