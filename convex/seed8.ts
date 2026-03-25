import { mutation } from "./_generated/server";

// ─── NEW ARTICLES ─────────────────────────────────────────────────────────────

const NEW_ARTICLES = [
  // ── LITURGICAL SEASONS ───────────────────────────────────────────────────
  {
    slug: "the-liturgical-calendar",
    title: "The Liturgical Calendar",
    category: "Liturgical Seasons",
    sortOrder: 11,
    summary: "The Church's calendar of seasons, feasts, and cycles that structures the Christian year.",
    content: `<h2>The Liturgical Calendar</h2>
<p>The liturgical calendar is the Church's annual cycle of prayer, worship, and commemoration. It orders the entire life of the Church around the central mystery of Jesus Christ — his Incarnation, Passion, Death, Resurrection, and the sending of the Holy Spirit. Rather than following the secular calendar, Catholics live by a sacred rhythm rooted in salvation history.</p>

<h3>The Six Seasons</h3>
<p>The liturgical year is divided into six seasons, each with its own spirit, color, and emphasis:</p>
<ul>
<li><strong>Advent</strong> — Four weeks of preparation before Christmas. Color: <em>violet</em> (or blue in some traditions). A season of hopeful longing for Christ's coming.</li>
<li><strong>Christmas</strong> — From Christmas Eve through the Baptism of the Lord. Color: <em>white/gold</em>. Celebrates the Incarnation and the revelation of God made flesh.</li>
<li><strong>Ordinary Time I</strong> — Weeks between Christmas and Ash Wednesday. Color: <em>green</em>. A time of growth in discipleship.</li>
<li><strong>Lent</strong> — Forty days of penance from Ash Wednesday to Holy Thursday. Color: <em>violet</em>. A season of prayer, fasting, and almsgiving in preparation for Easter.</li>
<li><strong>Easter (Eastertide)</strong> — Fifty days from Easter Sunday to Pentecost. Color: <em>white/gold</em>. The most sacred season, celebrating Christ's Resurrection.</li>
<li><strong>Ordinary Time II</strong> — From Pentecost to the end of the year. Color: <em>green</em>. The longest season, focused on living the Christian life.</li>
</ul>

<h3>The Lectionary Cycles</h3>
<p>The Sunday Lectionary follows a three-year cycle (A, B, C), ensuring that the faithful hear the breadth of Scripture over time. Year A focuses on Matthew, Year B on Mark, Year C on Luke. John's Gospel is read throughout all three years, especially during the great feasts. The weekday Lectionary follows a two-year cycle. This systematic reading ensures that Catholics are nourished by the whole of Sacred Scripture throughout their lives.</p>

<h3>Holy Days of Obligation</h3>
<p>In addition to every Sunday, the Church designates certain feasts as Holy Days of Obligation, on which Catholics are required to attend Mass. In the United States, these are: Mary, Mother of God (January 1), Ascension of the Lord (40 days after Easter, or the following Sunday), Assumption of Mary (August 15), All Saints' Day (November 1), Immaculate Conception (December 8), and Christmas (December 25).</p>

<h3>Liturgical Colors</h3>
<p>The Church uses colors to communicate the spirit of each season and feast. <strong>Violet/Purple</strong> — penance and preparation (Advent, Lent). <strong>White/Gold</strong> — joy and glory (Christmas, Easter, feasts of Christ, Mary, and non-martyr saints). <strong>Red</strong> — the Holy Spirit and martyrdom (Pentecost, feasts of Apostles and Martyrs). <strong>Green</strong> — hope and growth (Ordinary Time). <strong>Rose</strong> — joy within penance, used on Gaudete Sunday (Advent) and Laetare Sunday (Lent). <strong>Black or Violet</strong> — mourning and prayer for the dead (Masses for the deceased).</p>

<h3>The Sanctoral Cycle</h3>
<p>Woven throughout the liturgical year is the sanctoral cycle — the commemorations of Our Lady and the saints on their feast days. These celebrations unite the Church on earth with the Church in heaven, reminding us that holiness is achievable and that the saints pray for us. Major feasts interrupt Ordinary Time; minor commemorations enrich daily prayer without displacing the season's themes.</p>`,
  },
  {
    slug: "understanding-lent",
    title: "Understanding Lent",
    category: "Liturgical Seasons",
    sortOrder: 12,
    summary: "The meaning, history, and practices of the forty-day season of Lent.",
    content: `<h2>Understanding Lent</h2>
<p>Lent is the Church's great forty-day season of conversion, penance, and preparation for the celebration of Easter. It begins on Ash Wednesday and concludes at the Mass of the Lord's Supper on Holy Thursday evening, when the Easter Triduum begins. The word "Lent" comes from the Old English <em>lencten</em>, meaning "spring" — the season in which it falls in the Northern Hemisphere.</p>

<h3>The Number Forty</h3>
<p>The number forty has deep biblical resonance. Moses spent forty days on Mount Sinai receiving the Law. The Israelites wandered forty years in the desert, purified for entry into the Promised Land. Elijah traveled forty days to Mount Horeb. Most importantly, Jesus fasted for forty days in the desert before beginning his public ministry — and it is this forty-day fast that the Church imitates in Lent. Lent is our desert time, our time of testing and purification before the joy of Easter.</p>

<h3>The Three Pillars of Lent</h3>
<p>The Church prescribes three traditional Lenten disciplines, all rooted in Scripture (Matthew 6:1-18):</p>
<ul>
<li><strong>Prayer</strong> — Deepening one's relationship with God through additional prayer, Scripture reading, attendance at daily Mass, the Stations of the Cross, and other devotions. Lent is a time to make more room for God in daily life.</li>
<li><strong>Fasting</strong> — On Ash Wednesday and Good Friday, Catholics ages 18–59 are obliged to fast (one full meal and two smaller meals that together don't equal one full meal). Fasting disciplines the body, unites us to the sufferings of Christ and the hungry of the world, and clears space for prayer.</li>
<li><strong>Almsgiving</strong> — Acts of charity — giving money, time, or goods to those in need. Almsgiving breaks our attachment to material things and expresses the love of neighbor that should define every Christian.</li>
</ul>

<h3>Friday Abstinence</h3>
<p>On all Fridays of Lent, Catholics aged 14 and older are required to abstain from meat (beef, pork, chicken, etc.). Fish is permitted. This practice is a small weekly fast in commemoration of Christ's Passion and Death on a Friday. It is a reminder that every Friday is a "little Good Friday."</p>

<h3>The History of Lent</h3>
<p>Lenten preparation is attested in the earliest centuries of the Church, initially as a two-day or forty-hour fast before Easter. By the 4th century, a forty-day fast had become widespread throughout the Church. The Council of Nicaea (325 AD) makes reference to a forty-day Lenten season. As the Church developed, Lent became the primary time of intense preparation for adult candidates for Baptism (catechumens), as well as for public sinners seeking reconciliation. This ancient connection to baptismal preparation remains visible today in the RCIA (Rite of Christian Initiation of Adults).</p>

<h3>Lent as a Time of Grace</h3>
<p>Lent is not primarily about hardship for its own sake. The Church calls it a "favorable time" and a "joyful season" — because it is an opportunity to return to God with our whole heart. The prophet Joel cries: "Return to me with your whole heart, with fasting, weeping, and mourning. Rend your hearts, not your garments" (Joel 2:12-13). Lent invites us to do just that: to turn from whatever has kept us from God, to receive his mercy in the sacraments, and to prepare our hearts for the Easter proclamation that Christ is truly risen.</p>`,
  },
  {
    slug: "ash-wednesday",
    title: "Ash Wednesday",
    category: "Liturgical Seasons",
    sortOrder: 13,
    summary: "The beginning of Lent, its meaning, practices, and biblical roots.",
    content: `<h2>Ash Wednesday</h2>
<p>Ash Wednesday marks the beginning of the Lenten season, occurring forty-six days before Easter Sunday (forty days, not counting Sundays). It is a day of fast and abstinence, and the faithful receive ashes on their foreheads as a sign of penance and mortality. While not a Holy Day of Obligation, Ash Wednesday is one of the most attended days of the Catholic liturgical year — a witness to the human heart's deep longing for God and its awareness of its own frailty.</p>

<h3>The Rite of Ashes</h3>
<p>During the Mass or a Liturgy of the Word, the faithful come forward and receive ashes on their forehead. The minister says one of two formulas:</p>
<ul>
<li><em>"Remember that you are dust, and to dust you shall return"</em> (Genesis 3:19)</li>
<li><em>"Repent, and believe in the Gospel"</em> (Mark 1:15)</li>
</ul>
<p>The ashes are made by burning the blessed palms from the previous year's Palm Sunday. This beautiful continuity — last year's triumph becomes this year's reminder of mortality — speaks to the whole movement of the Christian life: glory through the Cross.</p>

<h3>The Symbolism of Ashes</h3>
<p>Throughout the Old Testament, ashes signify mourning, penance, and humility before God. Job sat in ashes when confronted with God's majesty (Job 42:6). Jonah's call to repentance led the people of Nineveh to sit in sackcloth and ashes (Jonah 3:6). Daniel confessed his sins "in fasting, sackcloth, and ashes" (Daniel 9:3). For Christians, the ashes carry a double meaning: <strong>mortality</strong> (we came from the earth and will return to it) and <strong>conversion</strong> (we repent and turn toward God).</p>

<h3>Wearing Ashes in Public</h3>
<p>Some wonder whether to wear ashes publicly, recalling Jesus' warning against "public displays of piety" (Matthew 6:1). But the distinction is important: Jesus condemns ostentatious piety done to win human praise. Wearing ashes is not a trophy of spiritual achievement — it is a visible reminder of one's own sinfulness and need for God. It is also a public witness to the faith, a sign to the world that death is real and repentance is necessary.</p>

<h3>Fasting and Abstinence</h3>
<p>Ash Wednesday is one of only two days in the year when the Church's universal law requires both fasting and abstinence from meat (the other is Good Friday). Fasting means eating one full meal and two smaller ones that together do not equal a full meal; no eating between meals. Abstinence means no meat. Those between 18 and 59 are bound to fast; those 14 and over are bound to abstain.</p>

<h3>The Start of a Sacred Journey</h3>
<p>Ash Wednesday is not an end but a beginning — the opening of the Church's great pilgrimage to Easter. The smudge of ash on the forehead is an invitation: forty days to pray more deeply, to fast more seriously, to give more generously. Forty days to let God do what he has always wanted to do — transform us, heal us, and prepare us for the joy of the Resurrection.</p>`,
  },
  {
    slug: "lenten-symbols",
    title: "Lenten Symbols",
    category: "Liturgical Seasons",
    sortOrder: 14,
    summary: "The symbols of the Lenten season and their spiritual meaning.",
    content: `<h2>Lenten Symbols</h2>
<p>The Catholic Church employs a rich visual language throughout the liturgical year. During Lent, the symbols deliberately strip away the beautiful and comfortable to draw our attention to what is essential: penance, conversion, and the Cross of Christ.</p>

<h3>Violet (Purple)</h3>
<p>Violet is the color of Lent and Advent — the two penitential seasons of the Church year. Historically, purple/violet dye was extremely expensive, making it the color of royalty and dignity. In the liturgical context, violet carries a dual meaning: <strong>penance</strong> (a darkening of the soul's joy in sorrow for sin) and <strong>royal dignity</strong> (we prepare for the coming of the King). The priest's vestments, altar cloths, and other furnishings take on violet during Lent, giving the church a more somber, austere appearance.</p>

<h3>Ashes</h3>
<p>Received on Ash Wednesday, ashes are perhaps the most striking Lenten symbol. Made from burning the previous year's palm branches, ashes signify our origin from dust and our return to it at death. They recall the words of God to Adam after the Fall: "You are dust, and to dust you shall return" (Genesis 3:19). Wearing ashes is an act of public humility — an acknowledgment that we are mortal, sinful, and in need of God's mercy.</p>

<h3>The Fish</h3>
<p>The fish is one of the oldest Christian symbols, dating to the early Church where the Greek word <em>ichthys</em> (fish) was used as an acronym: <em>Iēsous Christos, Theou Yios, Sōtēr</em> — "Jesus Christ, Son of God, Savior." During Lent, the fish takes on additional significance as the permitted food on Fridays of abstinence. When Catholics eat fish on Fridays, they participate in a universal sign of solidarity with Christ's Passion and with the universal Church.</p>

<h3>The Barren Rock or Desert</h3>
<p>Jesus spent forty days in the desert — a barren, empty landscape — before beginning his public ministry. The desert is a powerful symbol of Lent: stripped of comfort, beauty, and distraction, it is also a place of profound encounter with God. Lent invites us into our own interior desert, to confront what lies beneath the noise and busyness of life, and to let God speak to us in the silence. Just as the desert prepares the land for spring growth, Lenten austerity prepares the soul for Easter's new life.</p>

<h3>The Suppression of Alleluia and Gloria</h3>
<p>The word "Alleluia" — a Hebrew exclamation of praise meaning "Praise the Lord!" — is not sung or spoken during Lent. It is as though the Church buries the Alleluia alive, waiting for Easter morning to bring it back with even greater joy. Similarly, the Gloria (the angelic hymn of praise) is not sung at Sunday Mass during Lent, except on solemnities. The return of both the Gloria and the Alleluia at the Easter Vigil is one of the most moving moments of the liturgical year.</p>

<h3>Veiled Statues and Crosses</h3>
<p>In some parishes, statues and crosses are veiled in violet cloth beginning on the Fifth Sunday of Lent (Passion Sunday). This practice, known as Passiontide veiling, intensifies focus on the approaching Passion and death of Christ. By concealing the beautiful images we are accustomed to, the Church invites a deeper interior poverty and concentration on the essential mystery. The veils are removed at the Easter Vigil, when Christ is revealed in his Resurrection glory.</p>

<h3>Flowers and Music</h3>
<p>Flowers are typically removed from the altar area during Lent (except on solemnities), contributing to the austere simplicity of the season. The music of the Lenten season is often simpler and more sober than at other times of year. Organs may be played more sparingly; festive hymns give way to penitential chants and somber melodies. This sensory simplification helps attune the worshipper to the interior work of conversion that Lent calls for.</p>`,
  },
  {
    slug: "holy-week-symbols",
    title: "Holy Week Symbols",
    category: "Liturgical Seasons",
    sortOrder: 15,
    summary: "The symbols of Holy Week — Palm Sunday through Holy Saturday — and their meaning.",
    content: `<h2>Holy Week Symbols</h2>
<p>Holy Week is the most sacred week of the Church's year, beginning with Palm Sunday and culminating in the Easter Triduum. Each day is filled with ancient symbols that tell the story of Christ's Passion, Death, and Resurrection.</p>

<h3>Palm Branches (Palm Sunday)</h3>
<p>Holy Week begins with the Commemoration of the Lord's Entry into Jerusalem on Palm Sunday. Blessed palm branches are distributed to the faithful, recalling the jubilant crowds who waved palm fronds and spread garments before Jesus as he entered Jerusalem riding a donkey, crying "Hosanna to the Son of David!" (Matthew 21:9). Palm branches have multiple layers of meaning: <strong>victory</strong> (the ancient symbol of triumph), <strong>martyrdom</strong> (early Christian iconography used palms for martyrs), and <strong>contradiction</strong> (the same crowd that shouts "Hosanna!" will soon cry "Crucify him!"). The contrast of Palm Sunday's triumph with the Passion narrative that follows in the same liturgy captures the paradox of the Cross — the way to glory runs through suffering.</p>
<p>The blessed palms kept at home are sacramentals — objects blessed by the Church for the sanctification of the faithful. The following Ash Wednesday, they are traditionally burned to create the ashes for that year's Ash Wednesday rite.</p>

<h3>The Veiling of Crosses (Passiontide)</h3>
<p>Beginning on Passion Sunday (the Fifth Sunday of Lent, two weeks before Easter), and continuing through Good Friday, crosses and sacred images may be veiled in purple cloth. This practice of Passiontide veiling is an ancient tradition that intensifies our attention on the approaching Passion. The beauty and consolation normally offered by crucifixes and statues is withdrawn, as if to say: the hour of darkness is near. The veils are removed dramatically during the Liturgy of Good Friday (the veneration of the Cross) or at the Easter Vigil.</p>

<h3>The Holy Oils</h3>
<p>On Holy Thursday (Chrism Mass), usually celebrated in the morning at the cathedral church, the bishop blesses or consecrates the three holy oils used in the sacraments throughout the year:</p>
<ul>
<li><strong>Oil of the Catechumens (OC)</strong> — Blessed oil used in the preparation of candidates for Baptism and in the rite of Baptism itself.</li>
<li><strong>Oil of the Sick (OS)</strong> — Blessed oil used in the Anointing of the Sick.</li>
<li><strong>Sacred Chrism (SC)</strong> — Consecrated olive oil mixed with balsam, used in Baptism, Confirmation, Holy Orders, and the dedication of churches and altars. Only bishops may consecrate Chrism. It carries the perfume of Christ — the "Anointed One."</li>
</ul>
<p>The Chrism Mass is a powerful sign of priestly unity: priests renew their commitment to priestly service alongside the bishop, and receive the oils to carry back to their parishes for the year ahead.</p>

<h3>The Stripping of the Altar</h3>
<p>After the Mass of the Lord's Supper on Holy Thursday evening, the altar is stripped bare — cloths, candles, and all ornamentation are removed in silence. This powerful ritual enacts the humiliation and abandonment of Christ. The empty altar will remain bare until the Easter Vigil, when it is once again clothed in white and adorned with flowers. Many churches then observe a period of adoration before the Blessed Sacrament — reposing in a place of repose — recalling Christ's agony in Gethsemane.</p>

<h3>The Veneration of the Cross (Good Friday)</h3>
<p>The Celebration of the Lord's Passion on Good Friday includes the veneration of the Cross, in which the faithful come forward to bow before, kiss, or touch their forehead to the cross. This ancient act of devotion is not worship of an object but veneration of the instrument of our salvation. As the unveiling takes place, the deacon or priest sings three times: "Behold the wood of the Cross, on which hung the salvation of the world." The response: "Come, let us adore."</p>

<h3>The Easter Fire and Candle</h3>
<p>The Easter Vigil begins in darkness. A great bonfire is lit outside the church — the Easter Fire — symbolizing Christ the Light who breaks into the darkness of sin and death. The Paschal Candle, a large white candle inscribed with the cross and the year, is lit from this fire. As the deacon carries it into the dark church singing <em>"Lumen Christi"</em> (Light of Christ), the congregation's individual candles are lit in procession from it. The light spreads through the darkness, as the light of the Resurrection spreads through a world in sin.</p>`,
  },
  {
    slug: "laetare-sunday",
    title: "Laetare Sunday",
    category: "Liturgical Seasons",
    sortOrder: 16,
    summary: "The Fourth Sunday of Lent — a day of joy within penance.",
    content: `<h2>Laetare Sunday</h2>
<p>The Fourth Sunday of Lent is known as <em>Laetare Sunday</em>, from the Latin word for "rejoice." It takes its name from the opening words of the Entrance Antiphon of the Mass: <em>"Laetare Jerusalem"</em> — "Rejoice, O Jerusalem!" (cf. Isaiah 66:10). This Sunday stands as a brief ray of Easter light in the midst of the Lenten season, a moment of anticipatory joy that refreshes the faithful for the remaining weeks of penance.</p>

<h3>The Color Rose</h3>
<p>On Laetare Sunday, the Church departs from the violet vestments of Lent and uses <strong>rose</strong> (a lighter, warmer tone). Rose is not a different liturgical color but a lighter shade of violet/purple, signifying a modulation of the penitential mood into something gentler and more joyful. Many parishes also use rose flowers on the altar on this day, a cheerful contrast to the austerity that surrounds it. Some parishes and families observe the tradition of bringing flowers or other small celebrations, though the Lenten disciplines of fasting and abstinence continue.</p>

<h3>A Historical Practice: The Golden Rose</h3>
<p>From at least the 11th century, Popes would bless a golden rose on Laetare Sunday and present it as a gift of honor to a distinguished person, city, or shrine. This Golden Rose, made of gold and perfumed with musk and balsam, symbolized the joy of Easter and the Church's spiritual springtime. The custom survives today, though rarely practiced.</p>

<h3>Midpoint of Lent</h3>
<p>Laetare Sunday falls at the midpoint of Lent, and the Church uses it to look ahead to the goal of Lenten discipline: Easter. The joy expressed is not a relaxation of penance but a reminder of why we fast and pray — because Easter is coming. Just as a runner's strength is renewed at the halfway point by the sight of the finish line, so the Church renews the faithful's Lenten resolve by letting them glimpse, briefly, the Easter joy toward which they are journeying.</p>

<h3>Laetare and Gaudete Sunday</h3>
<p>Laetare Sunday has a counterpart in Advent: <em>Gaudete Sunday</em>, the Third Sunday of Advent, which similarly breaks the penitential violet with rose vestments. The word <em>Gaudete</em> ("Rejoice") comes from the opening of the Mass: "Rejoice in the Lord always; again I say, rejoice!" (Philippians 4:4). Together, these two Sundays reveal the Church's wisdom: long seasons of preparation are lightened by joy, lest the faithful mistake penance for its own end. Penance exists to open the heart to joy.</p>`,
  },
  {
    slug: "advent-season",
    title: "The Advent Season",
    category: "Liturgical Seasons",
    sortOrder: 17,
    summary: "The meaning and practices of Advent — the Church's season of joyful waiting.",
    content: `<h2>The Advent Season</h2>
<p>Advent is the Church's season of preparation for the coming of Christ. It lasts four weeks (with the first Sunday falling on the Sunday nearest November 30, the feast of St. Andrew) and opens the new liturgical year. The word "Advent" comes from the Latin <em>adventus</em> — arrival, or coming. The color is violet (or in some traditions, blue), and the mood is one of hopeful, watchful expectation.</p>

<h3>The Three Comings of Christ</h3>
<p>The Church's Advent liturgy holds together three distinct "comings" of Christ, giving the season its theological depth:</p>
<ul>
<li><strong>His First Coming in History</strong> — The Incarnation: the birth of Jesus in Bethlehem two thousand years ago. This historical event is the foundation of everything. We cannot "re-do" it, but we can contemplate it ever more deeply and receive its fruits anew each year.</li>
<li><strong>His Coming in Grace (the Present)</strong> — Christ comes to us now in the sacraments, in the Word, in the poor, in prayer, and in the community of the Church. Advent is a call to awaken to his presence already among us and to be ready to receive him.</li>
<li><strong>His Final Coming in Glory</strong> — The Parousia: the return of Christ at the end of time to judge the living and the dead and to bring the Kingdom of God to its fulfillment. The early weeks of Advent emphasize this eschatological (end-times) coming, which gives Advent its note of urgency and vigilance.</li>
</ul>

<h3>Advent as Preparation, Not Pre-Christmas</h3>
<p>In contemporary culture, the Christmas season begins in November and largely ignores Advent. For Catholics, Advent has its own distinct character that should not be collapsed into early Christmas celebration. It is a penitential season — not as severe as Lent, but marked by sobriety, prayer, and expectation. The Alleluia and Gloria are not suppressed as in Lent, but the full festive expression of Christmas is reserved for Christmas itself.</p>

<h3>Advent Practices</h3>
<p>Traditional Advent practices include: daily reading of the Old Testament prophecies of the Messiah (especially Isaiah); praying the <em>O Antiphons</em> (the great Advent prayers beginning December 17 — "O Wisdom," "O Lord of Might," "O Root of Jesse," etc.); use of the Advent wreath and its four candles; the <em>Rorate Mass</em> (a votive Mass of the Blessed Virgin Mary in Advent, celebrated at dawn); increased attention to the Sacrament of Penance; and acts of charity to prepare for the One who comes as a poor child.</p>

<h3>Advent and the Old Testament</h3>
<p>The Sunday Lectionary during Advent draws heavily on the prophets — especially Isaiah, who is called "the Fifth Gospel" for the richness of his messianic prophecies. Hearing the longing of Israel for its Messiah, the Church enters into that longing on behalf of the whole world. We cry with the prophet: "O that you would tear open the heavens and come down!" (Isaiah 64:1). In so doing, we become conscious of our own need for God and of the world's need for salvation.</p>`,
  },
  {
    slug: "advent-symbols",
    title: "Advent Symbols",
    category: "Liturgical Seasons",
    sortOrder: 18,
    summary: "The symbols of Advent — the wreath, the Jesse Tree, and the violet of preparation.",
    content: `<h2>Advent Symbols</h2>
<p>The Advent season is rich with symbols that help the faithful enter into the spirit of watchful waiting for the coming of Christ. These symbols are found in churches, homes, and schools — accessible expressions of the season's deep theological meaning.</p>

<h3>The Advent Wreath</h3>
<p>The Advent wreath is a circular wreath of evergreen branches holding four candles — three violet and one rose — arranged in a circle. A fifth white candle (the Christ candle) may be placed in the center, lit on Christmas. The wreath is placed prominently in homes and churches, and one candle is lit each Sunday of Advent, with prayers and perhaps the singing of hymns.</p>
<p>Each element carries meaning:</p>
<ul>
<li><strong>The circular shape</strong> — Eternity; God has no beginning or end.</li>
<li><strong>The evergreen branches</strong> — Life that endures even in winter; the eternal life that Christ brings.</li>
<li><strong>The four candles</strong> — The four weeks of Advent; also sometimes associated with the four thousand years between Adam and Christ, or the four major prophets.</li>
<li><strong>Three violet candles</strong> — Penance and preparation; the weeks of expectation.</li>
<li><strong>One rose candle</strong> — Joy; lit on Gaudete Sunday (Third Sunday of Advent), anticipating Christmas joy.</li>
<li><strong>The increasing light</strong> — As each candle is added, the wreath grows brighter, symbolizing the growing light of Christ drawing nearer.</li>
</ul>
<p>The wreath has roots in pre-Christian Germanic traditions of light in winter darkness, but the Church baptized this custom and filled it with Christian meaning.</p>

<h3>Advent Purple / Violet</h3>
<p>As in Lent, the liturgical color of Advent is violet (purple), signaling a season of preparation and penance. The church's vestments, altar cloths, and furnishings take on this color from the First Sunday of Advent through Christmas Eve. The purple of Advent differs from the purple of Lent in spirit: Lenten purple is heavier, more somber, oriented toward the Cross; Advent purple carries a note of royal anticipation — we prepare for the King who is coming.</p>

<h3>The Jesse Tree</h3>
<p>The Jesse Tree is a devotional tradition that traces the genealogy of Jesus through the Old Testament. It takes its name from Jesse, the father of King David, and the prophecy of Isaiah: "A shoot shall come out from the stump of Jesse, and a branch shall grow out of his roots" (Isaiah 11:1). Each day of Advent, a symbol representing a figure in the story of salvation — Adam and Eve, Noah, Abraham, Moses, Ruth, David, Isaiah — is hung on a tree or branch. By Christmas, the tree is full, telling the whole story of God's preparation for the coming of his Son. The Jesse Tree is a particularly beautiful tradition for families with children, teaching salvation history through visual story.</p>

<h3>The "O Antiphons"</h3>
<p>Beginning December 17, the Church prays the seven "O Antiphons" at Evening Prayer (Vespers), each beginning with "O" followed by a title of the Messiah drawn from the Old Testament: O Sapientia (Wisdom), O Adonai (Lord), O Radix Jesse (Root of Jesse), O Clavis David (Key of David), O Oriens (Daystar), O Rex Gentium (King of Nations), O Emmanuel (God With Us). These seven titles, prayed in reverse order, spell the acrostic <em>ERO CRAS</em> — "Tomorrow I will be there." They are the Church's most intense cry of Advent longing, reaching its climax on December 23 with "O Emmanuel."</p>`,
  },
  {
    slug: "christmas-traditions",
    title: "Christmas Traditions and Symbols",
    category: "Liturgical Seasons",
    sortOrder: 19,
    summary: "The Catholic meaning behind Christmas traditions — the nativity, Christmas tree, and more.",
    content: `<h2>Christmas Traditions and Symbols</h2>
<p>Christmas celebrates the Incarnation of the Son of God — God becoming man in the person of Jesus Christ, born of the Virgin Mary in Bethlehem. The Church observes Christmas not as a single day but as a season, running from Christmas Eve through the Feast of the Baptism of the Lord (the Sunday following January 6). Many beloved Christmas traditions have deep Catholic roots.</p>

<h3>The Nativity Scene (Crèche)</h3>
<p>The nativity scene — depicting the infant Jesus in a manger, surrounded by Mary, Joseph, the shepherds, the ox and the donkey, and eventually the Magi — is perhaps the most distinctly Catholic of all Christmas traditions. It was developed by <strong>St. Francis of Assisi</strong> in 1223 in Greccio, Italy. Francis obtained permission from Pope Honorius III to create a living nativity scene (with real animals and people) to help the poor and illiterate meditate on the mystery of the Incarnation. The tradition spread throughout the world and into homes, churches, and public squares.</p>
<p>The nativity scene places before our eyes the central mystery of Christmas: "The Word became flesh and dwelt among us" (John 1:14). God, infinite and eternal, took on our flesh in poverty, humility, and vulnerability. The manger is the first altar; the swaddling clothes foreshadow the burial cloths; the poverty of the stable foreshadows the poverty of the Cross.</p>

<h3>The Christmas Tree</h3>
<p>The Christmas tree — an evergreen tree decorated with lights and ornaments — has pre-Christian roots in Germanic winter solstice traditions, but it was Christianized through the influence of St. Boniface (8th century) and later popularized by German Catholics in the 16th century. The evergreen symbolizes eternal life that does not die with the season. The lights represent Christ as "the light of the world" (John 8:12) and the star that led the Magi. The star or angel on top of the tree evokes the Star of Bethlehem or the angel who announced the birth to the shepherds.</p>
<p>St. Boniface is credited with replacing the worship of a sacred oak tree by cutting it down and pointing instead to a young fir tree, whose triangular shape he associated with the Trinity. Whether or not this story is precisely historical, it captures the Church's approach: transforming natural symbols and elevating them toward God.</p>

<h3>The Christmas Gifts and the Magi</h3>
<p>The tradition of giving gifts at Christmas is associated with the gifts of the Magi — wise men from the East who came to worship the infant Jesus and presented him with gold, frankincense, and myrrh (Matthew 2:11). These gifts carry symbolic meaning: gold for a king, frankincense for God (used in worship), and myrrh (an embalming spice) foreshadowing his death. Gift-giving at Christmas thus connects the generosity of human love with the self-giving love of God made flesh. St. Nicholas of Myra (4th century bishop, patron of children and the poor), whose generous gift-giving to the poor inspired the tradition of "Santa Claus," is another Catholic root of Christmas gift traditions.</p>

<h3>The Twelve Days of Christmas</h3>
<p>Christmas is not one day but twelve — from December 25 through January 5, culminating in Epiphany on January 6. The liturgical season continues beyond this, through the Baptism of the Lord. The popular song "The Twelve Days of Christmas" reflects this older understanding of Christmas as a prolonged feast rather than a single day. The key feasts of the Christmas season include St. Stephen (December 26), St. John the Apostle (December 27), Holy Innocents (December 28), The Holy Family (Sunday after Christmas), Mary, Mother of God (January 1), Epiphany (January 6), and Baptism of the Lord.</p>

<h3>The Christmas Masses</h3>
<p>The Church traditionally celebrates three distinct Masses on Christmas Day, each with its own mystery: the Mass at Midnight (the physical birth of Christ in time), the Mass at Dawn (the light of Christ rising on the world), and the Mass during the Day (the eternal generation of the Word of God). The Midnight Mass is the most celebrated, capturing the wonder of God entering our night. The Gospel at the Mass during the Day is the Prologue of John: "In the beginning was the Word, and the Word was with God, and the Word was God" — lifting the celebration from the historical to the eternal.</p>`,
  },
  {
    slug: "christ-the-king-sunday",
    title: "The Feast of Christ the King",
    category: "Liturgical Seasons",
    sortOrder: 20,
    summary: "The last Sunday of the liturgical year, celebrating Christ's universal kingship.",
    content: `<h2>The Feast of Christ the King</h2>
<p>The Solemnity of Our Lord Jesus Christ, King of the Universe — commonly called the Feast of Christ the King — is celebrated on the last Sunday of the liturgical year, the Sunday before the First Sunday of Advent. It is a relatively recent feast, established in 1925 by Pope Pius XI, but it celebrates a truth as ancient as the Gospel: that Jesus Christ is Lord of all creation, all history, and every human heart.</p>

<h3>Origin of the Feast</h3>
<p>Pope Pius XI instituted this feast in his encyclical <em>Quas Primas</em> (1925). The historical context was the rise of totalitarian ideologies — nationalism, fascism, and communism — that sought to displace Christ from public life and culture. Against these movements, the Church proclaimed a counter-cultural truth: Jesus Christ, not any earthly power or ideology, is the true King. Human societies find their proper order and peace only when they acknowledge the sovereignty of Christ.</p>

<h3>The Nature of Christ's Kingship</h3>
<p>Christ's kingship is unlike any earthly kingdom. He said to Pilate: "My kingdom is not of this world" (John 18:36). His throne is the Cross; his crown is made of thorns; his royal procession is the Way of the Cross. He reigns not by force but by love, not by domination but by service. "The Son of Man did not come to be served, but to serve, and to give his life as a ransom for many" (Matthew 20:28). The Feast of Christ the King is, paradoxically, inseparable from Good Friday — the King reigns most visibly from the wood of the Cross.</p>

<h3>A Universal Kingship</h3>
<p>Christ's kingship extends over all nations and peoples, over history and eternity. The Book of Revelation pictures him as "King of kings and Lord of lords" (Revelation 19:16). Every knee shall bow and every tongue confess that Jesus Christ is Lord (Philippians 2:10-11). This universal lordship is not a claim about political power but about ultimate reality: the risen Christ is the Alpha and the Omega, the beginning and the end (Revelation 1:8), and all things will ultimately be gathered up in him (Ephesians 1:10).</p>

<h3>The Feast as the Year's End</h3>
<p>Placed at the close of the liturgical year, the Feast of Christ the King serves as the destination toward which the whole year has been moving. It looks back over the year's journey — through Advent expectation, Christmas wonder, Lenten penance, Easter joy, and the long growth of Ordinary Time — and declares: all of this is oriented toward the Kingdom of God. It also looks forward to Advent and a new year, reminding us that we live in a time of waiting for the King to come again in glory. "Come, Lord Jesus" (Revelation 22:20) is both the prayer of Advent and the prayer of the Feast of Christ the King.</p>`,
  },

  // ── RCIA & FAITH INITIATION ───────────────────────────────────────────────
  {
    slug: "rite-of-scrutinies",
    title: "The Rite of Scrutinies and Exorcisms",
    category: "RCIA & Initiation",
    sortOrder: 21,
    summary: "The three scrutinies of the Lenten catechumenate that prepare candidates for Baptism.",
    content: `<h2>The Rite of Scrutinies and Exorcisms</h2>
<p>Among the most ancient and powerful rituals of the RCIA (Rite of Christian Initiation of Adults), the Scrutinies are three solemn rites celebrated on the Third, Fourth, and Fifth Sundays of Lent. They are directed to the Elect — those who have been chosen (elected) at the Rite of Election on the First Sunday of Lent to receive Baptism, Confirmation, and Eucharist at the Easter Vigil.</p>

<h3>What Is a Scrutiny?</h3>
<p>The Latin word <em>scrutinium</em> means an examination or searching. The Scrutinies are not an examination of the candidates by the community, but a spiritual examination of conscience and a purification of heart. They are "meant to uncover, and then heal all that is weak, defective, or sinful in the hearts of the elect; to bring out, then strengthen all that is upright, strong, and good" (RCIA, 141). In essence, they are intense prayers over the candidates, asking God to expose what needs healing and strengthen what is good.</p>

<h3>The Three Scrutinies</h3>
<p>Each Scrutiny follows a similar structure: after the homily, the Elect are called forward. The assembly prays for them in silence. The Celebrant leads prayers of intercession. Then the Celebrant stretches his hands over the Elect and prays the exorcism — a solemn prayer asking God to free them from the influence of evil and prepare them for Baptism.</p>
<ul>
<li><strong>First Scrutiny</strong> (Third Sunday of Lent) — Linked to the Gospel of the Samaritan Woman (John 4:5-42). The exorcism prays for the gift of faith and conversion from the worship of false gods.</li>
<li><strong>Second Scrutiny</strong> (Fourth Sunday of Lent) — Linked to the Gospel of the Man Born Blind (John 9:1-41). The exorcism prays for enlightenment and freedom from spiritual blindness.</li>
<li><strong>Third Scrutiny</strong> (Fifth Sunday of Lent) — Linked to the Gospel of the Raising of Lazarus (John 11:1-45). The exorcism prays for liberation from the power of death and sin.</li>
</ul>

<h3>The Exorcisms</h3>
<p>The word "exorcism" in the context of the Scrutinies does not refer to the solemn exorcism of a person in the grip of demonic possession (which is an extraordinary situation requiring the Church's special rite). Rather, these are "minor exorcisms" — formal prayers of the Church asking God to strengthen the candidates against the influence of sin and Satan, and to purify their hearts for reception of the sacraments. They are powerful prayers of intercession, confident petitions that God will act in the lives of those preparing for new life in Christ.</p>

<h3>The Elect and the Community</h3>
<p>The Scrutinies are not private affairs but celebrations of the whole community. The entire congregation prays in solidarity with the Elect, and the Scrutinies remind the faithful of their own Baptism and ongoing need for conversion. Watching the Elect undergo these intense prayers should move every Catholic to a renewal of their own Lenten resolve and gratitude for their own baptismal grace.</p>`,
  },
  {
    slug: "the-pharisees",
    title: "The Pharisees",
    category: "RCIA & Initiation",
    sortOrder: 22,
    summary: "Who the Pharisees were, their beliefs, and their role in the Gospels.",
    content: `<h2>The Pharisees</h2>
<p>The Pharisees were one of the major Jewish sects of the Second Temple period (roughly 536 BC to 70 AD). They play a significant role in the Gospels, often appearing as opponents of Jesus — though the reality is more nuanced than simple enmity. Understanding who the Pharisees were helps illuminate the Gospel narratives and Jesus' teaching ministry.</p>

<h3>Historical Origins</h3>
<p>The Pharisees emerged as a distinct movement in the 2nd century BC, during the period of Hasmonean rule. Their name likely derives from the Hebrew <em>perushim</em>, meaning "separated ones." They arose as a popular religious movement committed to the strict observance of the Mosaic Law — not just in the Temple, but in everyday life. They were a reaction against Hellenistic (Greek) cultural influence that threatened Jewish religious identity.</p>

<h3>Pharisaic Beliefs</h3>
<p>The Pharisees held several distinctive beliefs that set them apart from other Jewish groups, particularly the Sadducees:</p>
<ul>
<li><strong>Oral Torah</strong> — Beyond the written Torah (the five books of Moses), the Pharisees believed in an authoritative oral tradition passed down from Moses through the prophets to the present day. This oral tradition, later codified in the Mishnah (c. 200 AD), interpreted and applied the written Law to daily life.</li>
<li><strong>Resurrection of the Body</strong> — The Pharisees believed in the resurrection of the dead, a belief the Sadducees rejected (Mark 12:18). This made them closer to early Christian belief on a key point of eschatology.</li>
<li><strong>Angels and Spirits</strong> — They affirmed the existence of angels and spiritual beings, while Sadducees denied this (Acts 23:8).</li>
<li><strong>Divine Providence and Human Freedom</strong> — They believed in both God's sovereignty and human free will, navigating a middle ground between fatalism and pure autonomy.</li>
</ul>

<h3>The Pharisees and Jesus</h3>
<p>The Gospel portrayal of the Pharisees is complex. Jesus frequently criticizes their hypocrisy — following the letter of the Law while missing its spirit, performing religious acts for human praise, burdening the people with excessive regulations (Matthew 23). Yet Jesus also dines with Pharisees (Luke 7:36; 11:37), is warned by them of Herod's threats (Luke 13:31), and shares their belief in the resurrection. Nicodemus and Joseph of Arimathea were Pharisees sympathetic to Jesus (John 3:1; 19:38-39). St. Paul identifies himself as "a Pharisee, son of Pharisees" (Acts 23:6).</p>
<p>The primary conflict was not legal observance per se but authority: Jesus claimed to interpret the Law with an authority that transcended the tradition ("You have heard that it was said... but I say to you," Matthew 5). He also challenged their tendency to substitute external conformity for interior conversion of heart.</p>

<h3>The Pharisaic Legacy</h3>
<p>After the destruction of Jerusalem in 70 AD, the Pharisees were the only major Jewish group to survive. Rabbinic Judaism — the form of Judaism practiced today — is the direct heir of Pharisaic tradition. This means that Judaism and Christianity share common roots in Pharisaic Judaism's commitment to Scripture, prayer, and the moral life.</p>`,
  },

  // ── CHURCH & WORSHIP ─────────────────────────────────────────────────────
  {
    slug: "the-sanctuary",
    title: "The Sanctuary of a Catholic Church",
    category: "Church & Worship",
    sortOrder: 23,
    summary: "The sacred space of the Catholic church building and the meaning of its elements.",
    content: `<h2>The Sanctuary of a Catholic Church</h2>
<p>A Catholic church building is not merely an assembly hall; it is a sacred space designed to lift the mind and heart to God. Every element of its architecture and furnishing carries theological meaning. Understanding the church building helps Catholics worship more consciously and reverence what they encounter.</p>

<h3>The Nave</h3>
<p>The <em>nave</em> (from the Latin <em>navis</em>, ship) is the main body of the church where the congregation gathers. The image of the ship is ancient and intentional: the Church is the ark of salvation, carrying God's people through the waters of this world to eternal life. Rows of pews or chairs fill the nave, and it is oriented toward the sanctuary. The faithful come to the nave to participate in the liturgy as the "priestly people" united with Christ's sacrifice.</p>

<h3>The Sanctuary</h3>
<p>The <em>sanctuary</em> is the sacred area at the front of the church, typically elevated, where the Mass is celebrated. It is set apart from the nave (sometimes by a railing called the <em>communion rail</em> or <em>balustrade</em>) to signify the distinction between the priesthood and the faithful, though both together offer the one sacrifice of Christ. The sanctuary contains the altar, the ambo, the presider's chair, and (in traditional churches) the tabernacle.</p>

<h3>The Altar</h3>
<p>The altar is the most sacred element of the church — the table of the Lord's Supper and the stone of sacrifice. A proper altar is made of stone and contains a <em>relic</em> of a martyr, embedded in the <em>sepulchrum</em> (a small cavity in the altar stone). This practice goes back to the early Church, when Mass was celebrated over the tombs of martyrs. The altar represents Christ himself — it is covered with a white cloth and adorned with candles and a crucifix, all pointing to the sacrifice of the Mass.</p>

<h3>The Ambo (Pulpit)</h3>
<p>The <em>ambo</em> is the raised lectern from which the Scriptures are proclaimed. It is the "table of the Word" — the counterpart to the altar as the table of the Eucharist. Both are essential: the Mass consists of the Liturgy of the Word and the Liturgy of the Eucharist. The ambo is typically made of fine material and elevated, signifying the dignity of God's Word. Only the readings, Responsorial Psalm, Easter Proclamation, and homily are done from the ambo; other announcements are made from elsewhere.</p>

<h3>The Tabernacle</h3>
<p>The <em>tabernacle</em> is the sacred vessel in which the consecrated Eucharist (the Body of Christ) is reserved after Mass, primarily for the communion of the sick and for adoration. The word comes from the Latin <em>tabernaculum</em> (tent or dwelling), evoking the Tent of Meeting in the desert where God dwelt among Israel. A sanctuary lamp — a red candle or oil lamp — burns perpetually before the tabernacle as a sign that Christ is truly present. Catholics genuflect (lower the right knee to the ground) before the tabernacle as an act of adoration.</p>

<h3>The Baptismal Font</h3>
<p>The baptismal font holds the water used in the Sacrament of Baptism. It is traditionally located near the entrance of the church, signifying that Baptism is the entrance into the Church. The font may be a large pool for immersion or a smaller basin for infusion (pouring). Near the font, a vessel of holy water is usually placed for the faithful to bless themselves upon entering, renewing their baptismal promises. Many churches position the font prominently, restored to visibility near the sanctuary, to emphasize Baptism's centrality.</p>

<h3>The Confessional or Reconciliation Room</h3>
<p>The confessional is the place where the Sacrament of Penance is celebrated — where Catholics confess their sins to a priest and receive absolution. Traditional confessionals have a screen separating penitent and priest, preserving anonymity. Modern reconciliation rooms may allow for face-to-face confession as well. The presence of the confessional in every Catholic church is a visible sign that the Church is a hospital for sinners, always open for healing and forgiveness.</p>`,
  },
  {
    slug: "things-on-the-altar",
    title: "Things We See on the Altar",
    category: "Church & Worship",
    sortOrder: 24,
    summary: "The sacred vessels and linens of the Mass and their meaning.",
    content: `<h2>Things We See on the Altar</h2>
<p>The altar is the center of the Catholic liturgy — the table of sacrifice and the table of the Lord's Supper. The objects placed on and near the altar are not decorative props but liturgical instruments with precise purposes and deep symbolic meaning, rooted in Scripture and centuries of tradition.</p>

<h3>The Altar Cloth (Corporal and Fair Linen)</h3>
<p>The <em>fair linen</em> is the long white cloth that covers the top of the altar during Mass. White signifies purity and the resurrection. The <em>corporal</em> is a smaller square of white linen placed on the fair linen, upon which the chalice and paten are set. The corporal (from the Latin <em>corpus</em>, body) is used to catch any particle of the consecrated host or drop of the Precious Blood that might fall. It is folded carefully after Mass and purified regularly. These linens recall the linen cloths used to wrap the body of Christ (John 20:7) and the linen shroud of the Eucharist.</p>

<h3>The Chalice</h3>
<p>The <em>chalice</em> is the cup that holds the wine to be consecrated into the Blood of Christ at Mass. Church law requires that the inner surface of the chalice be made of non-absorbent material — gold, silver, or other suitable metals. The chalice recalls the "cup of salvation" of Psalm 116:13 and the cup that Jesus took at the Last Supper: "This is my blood of the covenant" (Matthew 26:28).</p>

<h3>The Paten</h3>
<p>The <em>paten</em> is the plate or dish on which the bread (large host) for the priest's communion is placed, and on which the large host is consecrated into the Body of Christ. It is typically made of gold or silver. Smaller patens (or ciborium lids) are used for the faithful's communion hosts. The paten directly touches the Body of Christ and is thus treated with great reverence.</p>

<h3>The Ciborium</h3>
<p>The <em>ciborium</em> is a covered cup or vessel used to hold the smaller hosts for the communion of the faithful. After Mass, any remaining consecrated hosts are placed in the ciborium and reserved in the tabernacle. The ciborium typically has a lid, and when the Blessed Sacrament is reserved in it, it is covered with a white veil (humeral veil).</p>

<h3>The Cruet</h3>
<p>Small vessels called <em>cruets</em> hold the water and wine that will be used at Mass. At the Preparation of the Gifts, the deacon or priest pours wine and a few drops of water into the chalice, saying: "By the mystery of this water and wine, may we come to share in the divinity of Christ who humbled himself to share in our humanity." The small amount of water mixed with wine symbolizes the Incarnation — humanity united with divinity — and the union of the faithful with Christ in the offering.</p>

<h3>The Candles</h3>
<p>Candles on or near the altar serve both as light and as symbols of Christ, "the light of the world" (John 8:12). At least two candles are required for Mass (four or six for more solemn celebrations; seven for pontifical Mass celebrated by a bishop). The Paschal Candle, a large decorated candle blessed at the Easter Vigil, burns prominently near the altar throughout Eastertide and at all baptisms and funerals throughout the year.</p>

<h3>The Crucifix</h3>
<p>The General Instruction of the Roman Missal requires that a cross — either on the altar itself or clearly visible from the sanctuary — be present during Mass. This is not optional: the Mass is the re-presentation of Christ's sacrifice, and the crucifix makes this connection visible. The priest celebrates Mass "facing the cross," as it were, whether ad orientem (priest facing the same direction as the people) or versus populum (facing the congregation, with the cross between them).</p>

<h3>The Missal (Roman Missal)</h3>
<p>The <em>Roman Missal</em> (or Sacramentary) is the large book containing the prayers of the Mass. The current edition is the <em>Roman Missal, Third Edition</em>. It sits on a stand or <em>missal stand</em> on the altar. The prayers of the Mass — the Collect, the Eucharistic Prayer, the Prayer over the Offerings, the Prayer after Communion — are all found in this book, which is the Church's official liturgical text.</p>`,
  },
  {
    slug: "the-catholic-mass-eucharist",
    title: "The Catholic Mass: The Sacrament of the Eucharist",
    category: "Church & Worship",
    sortOrder: 25,
    summary: "A comprehensive guide to the structure and meaning of the Catholic Mass.",
    content: `<h2>The Catholic Mass: The Sacrament of the Eucharist</h2>
<p>The Mass is the highest act of Catholic worship and "the source and summit of the Christian life" (Vatican II, <em>Lumen Gentium</em> 11). It is simultaneously a memorial, a sacrifice, and a meal — three dimensions of one indivisible reality. At Mass, heaven and earth meet: the eternal self-offering of Christ to the Father becomes present in our time and place, and the faithful are united with it.</p>

<h3>The Structure of the Mass</h3>
<p>The Mass has four main parts:</p>

<h3>1. The Introductory Rites</h3>
<p>The Mass begins with the <strong>Entrance Procession</strong> and <strong>Greeting</strong>, establishing the community gathered in Christ's name. The <strong>Penitential Act</strong> (Confiteor or Kyrie) acknowledges our sinfulness and God's mercy. On Sundays (outside Lent), the <strong>Gloria</strong> — the ancient hymn of the angels — is sung or recited. The <strong>Collect</strong> (Opening Prayer) gathers the intentions of the community and presents them to God. These rites prepare the assembly to hear God's Word and offer the Eucharist.</p>

<h3>2. The Liturgy of the Word</h3>
<p>The Church sets a rich table of Scripture at every Mass. The <strong>First Reading</strong> is typically from the Old Testament (in Ordinary Time) or from the Acts of the Apostles (in Easter). The <strong>Responsorial Psalm</strong> is a prayerful response from the Psalms. The <strong>Second Reading</strong> is from the New Testament letters. Then the assembly rises for the <strong>Gospel</strong> — the high point of the Liturgy of the Word — proclaimed by the deacon or priest. The <strong>Homily</strong> breaks open the Word. The <strong>Creed</strong> expresses the community's shared faith. The <strong>Prayer of the Faithful</strong> (Universal Prayer) brings the needs of the Church and world before God.</p>

<h3>3. The Liturgy of the Eucharist</h3>
<p>This is the heart of the Mass, in three movements:</p>
<ul>
<li><strong>Preparation of the Gifts (Offertory)</strong> — Bread and wine are brought to the altar. The priest offers them to God with ancient prayers. The faithful's gifts of money are also brought forward, symbolizing the offering of their lives.</li>
<li><strong>The Eucharistic Prayer</strong> — The center of the entire Mass. The priest prays the <em>Preface</em> (praise and thanksgiving), which flows into the <em>Sanctus</em> ("Holy, holy, holy"). The <em>Epiclesis</em> invokes the Holy Spirit. The <em>Words of Institution</em> ("This is my Body... This is my Blood") — the words of Christ at the Last Supper — effect the consecration: bread and wine become the Body and Blood of Christ. The <em>Memorial Acclamation</em> proclaims the mystery. The <em>Intercessions</em> remember the living, the dead, the Pope, the bishop, and the saints. The prayer concludes with the solemn <em>Doxology</em> and the Great Amen.</li>
<li><strong>The Communion Rite</strong> — The Our Father is prayed. A rite of peace is exchanged. The <em>Agnus Dei</em> ("Lamb of God") is sung as the host is broken. The faithful receive Holy Communion — the Body and Blood of Christ under the forms of bread and wine.</li>
</ul>

<h3>4. The Concluding Rites</h3>
<p>After a period of silent thanksgiving, the Mass concludes with a final <strong>Blessing</strong> and the <strong>Dismissal</strong>. The Latin dismissal — "<em>Ite, Missa est</em>" ("Go, it is the dismissal") — gives the Mass its name. The faithful are sent forth to live the Eucharist in the world: to be what they have received.</p>

<h3>Real Presence</h3>
<p>The Catholic Church teaches with absolute certainty that Christ is truly, really, and substantially present — Body, Blood, Soul, and Divinity — under the appearances of bread and wine after the consecration. This is the doctrine of the <strong>Real Presence</strong>. The substance of the bread and wine is entirely changed into Christ, while only the appearances (accidents) remain. This change is called <em>transubstantiation</em>. The Real Presence is not symbolic or metaphorical: "This is my body" means precisely what it says (Matthew 26:26; John 6:51-58).</p>`,
  },
  {
    slug: "sign-of-the-cross",
    title: "The Sign of the Cross",
    category: "Church & Worship",
    sortOrder: 26,
    summary: "The ancient Christian gesture — its history, meaning, and proper form.",
    content: `<h2>The Sign of the Cross</h2>
<p>The Sign of the Cross is the most fundamental and ancient gesture of the Christian faith. It is the gesture by which a Catholic begins and ends prayer, blesses himself, and identifies himself as a disciple of Christ crucified. In four simple movements — touching the forehead, the chest, the left shoulder, and the right shoulder — the Catholic confesses the two central mysteries of the faith: the Trinity and the Redemption.</p>

<h3>The Words and Gesture</h3>
<p>The Sign of the Cross in the Latin Church is made with the right hand, touching:</p>
<ul>
<li>The forehead — <strong>"In the name of the Father"</strong></li>
<li>The chest — <strong>"and of the Son"</strong></li>
<li>The left shoulder — <strong>"and of the Holy"</strong></li>
<li>The right shoulder — <strong>"Spirit. Amen."</strong></li>
</ul>
<p>The movement traces a cross — the instrument of our salvation — upon the body. The words invoke the Most Holy Trinity, in whose name we have been baptized (Matthew 28:19). Together, they declare: I belong to the God who is Father, Son, and Holy Spirit, and I am saved by the Cross of Christ.</p>

<h3>A Very Ancient Practice</h3>
<p>The Sign of the Cross is attested from the very earliest centuries of Christianity. Tertullian (c. 200 AD) writes: "In all our travels and movements, in all our coming in and going out, in putting on our shoes, at the bath, at the table, in lighting our candles, in lying down, in sitting down, whatever employment occupies us, we mark our foreheads with the sign of the cross." This was a small cross traced on the forehead with the thumb — the "small sign" still made by the faithful on their forehead, lips, and heart before the Gospel is proclaimed.</p>

<h3>What It Confesses</h3>
<p>The Sign of the Cross is a brief creed in gesture. It confesses:</p>
<ul>
<li><strong>The Holy Trinity</strong> — Father, Son, and Holy Spirit: three Persons, one God. At Baptism, every Christian is baptized "in the name" (singular) of the three Persons, confessing their unity.</li>
<li><strong>The Cross as Salvation</strong> — The instrument of Christ's death is the sign of our salvation. Paul writes: "I decided to know nothing among you except Jesus Christ and him crucified" (1 Corinthians 2:2). Making the cross on one's body is a reminder that we are saved by his Cross.</li>
<li><strong>Belonging to Christ</strong> — The cross is branded on the Christian at Baptism. Making this sign publicly is an act of ownership and discipleship: "I am not ashamed of the Gospel" (Romans 1:16).</li>
</ul>

<h3>When Catholics Make the Sign of the Cross</h3>
<p>Catholics make the Sign of the Cross: at the beginning and end of all prayer, at the beginning and end of Mass, when passing before the Blessed Sacrament, when entering or leaving a church, before and after meals, at the beginning of difficult tasks, and whenever they need to remind themselves of God's presence. Holy water is often used when making the sign, recalling the waters of Baptism in which the cross was first signed upon one's soul.</p>`,
  },
  {
    slug: "why-catholics-genuflect",
    title: "Why Do Catholics Genuflect?",
    category: "Church & Worship",
    sortOrder: 27,
    summary: "The meaning and practice of genuflection — lowering the right knee before the Blessed Sacrament.",
    content: `<h2>Why Do Catholics Genuflect?</h2>
<p>To <em>genuflect</em> (from the Latin <em>genu flectere</em>, "to bend the knee") means to lower the right knee to the floor as an act of reverence. Catholics genuflect when passing before the tabernacle or the exposed Blessed Sacrament — an act of adoration directed to Jesus Christ truly present in the Eucharist. It is one of the most visible and distinctive gestures of Catholic practice.</p>

<h3>Biblical Roots</h3>
<p>Bending the knee before God or a superior is a gesture found throughout the Old and New Testaments. The Psalmist invites: "Come, let us bow down in worship, let us kneel before the Lord our Maker" (Psalm 95:6). At the name of Jesus, "every knee should bow, in heaven and on earth and under the earth" (Philippians 2:10). This universal genuflection before Christ — professed by St. Paul as the destiny of all creation — is expressed in miniature every time a Catholic bows the knee before the tabernacle.</p>

<h3>Before the Real Presence</h3>
<p>Catholics genuflect specifically before the tabernacle because they believe — with the full faith of the Church — that Jesus Christ is truly, really, and substantially present in the Eucharist reserved there. If Christ is truly present, then what could be more natural than to bow before him? The genuflection is not a cultural formality but a theological statement: "My Lord and my God" (John 20:28). It is the gesture of Thomas, recognizing Christ risen.</p>

<h3>The Proper Form</h3>
<p>A proper genuflection is made by lowering the <strong>right knee</strong> to the floor (not just a bob or nod of the head), briefly, and then rising. This is done when entering and leaving a pew in church, when passing before the tabernacle, and at certain solemn moments in the liturgy. When the Blessed Sacrament is exposed (as in Eucharistic adoration), a <strong>double genuflection</strong> (both knees, touching the floor briefly) is the traditional sign of more profound adoration, though a single genuflection is now standard.</p>

<h3>A Counter-Cultural Act</h3>
<p>In a world that bows to fame, wealth, and power, the genuflection is a counter-cultural act. It says: the most important Presence in this building — and in this life — is not any human being, however important, but God himself. It is a small act of faith, hope, and love: faith that Christ is truly present, hope in the Eucharist as the food of eternal life, love expressed in the body's submission to the divine Majesty.</p>`,
  },
  {
    slug: "why-catholics-kneel",
    title: "Why Do Catholics Kneel?",
    category: "Church & Worship",
    sortOrder: 28,
    summary: "The theology and practice of kneeling in Catholic worship.",
    content: `<h2>Why Do Catholics Kneel?</h2>
<p>Kneeling is one of the most expressive bodily postures in Catholic worship. It is the posture of adoration, penitence, and humble petition — the body bowing before the infinite greatness and goodness of God. Catholics kneel at key moments in the Mass and in private prayer, expressing with their bodies what their hearts profess.</p>

<h3>The Theology of Bodily Posture</h3>
<p>Christian worship engages the whole person — body, mind, and spirit. The Catholic tradition has always understood that the body participates in prayer: we stand, we sit, we kneel, we bow, we make the Sign of the Cross. These gestures are not mere cultural conventions; they express and deepen interior states of soul. "Bend the knee of your heart," says an ancient prayer — but the Church also bends the knee of the body, understanding that body and soul are one.</p>

<h3>Biblical Roots of Kneeling</h3>
<p>Scripture is filled with kneeling before God. Solomon "knelt before the whole assembly of Israel" to pray at the dedication of the Temple (1 Kings 8:54). Daniel knelt three times a day to pray, even at the risk of his life (Daniel 6:10). Jesus himself "knelt down and prayed" in Gethsemane (Luke 22:41). Paul writes that he bows his knees before the Father (Ephesians 3:14). St. Stephen knelt as he was being stoned (Acts 7:60). Peter knelt and prayed before raising Tabitha from the dead (Acts 9:40). The evidence of the New Testament is clear: kneeling was the normal posture of earnest Christian prayer.</p>

<h3>When Catholics Kneel at Mass</h3>
<p>In the ordinary form of the Roman Rite, Catholics kneel:</p>
<ul>
<li><strong>After the Agnus Dei</strong> — From this point until the priest's communion, the faithful kneel in adoration before the Body and Blood of Christ about to be received.</li>
<li><strong>During the Consecration</strong> — The moment when the priest speaks the words of institution, bread and wine become the Body and Blood of Christ. Kneeling at this moment is the Church's universal posture of adoration before the miracle of transubstantiation.</li>
<li><strong>After receiving Communion</strong> — Kneeling (or sitting) for a period of silent thanksgiving after receiving the Eucharist is the traditional posture of grateful adoration.</li>
</ul>

<h3>Kneeling in Private Prayer</h3>
<p>Many saints and spiritual directors recommend kneeling for private prayer, at least at the beginning and end. Kneeling focuses the mind, disciplines the body, and creates an attitude of humble dependence on God. Teresa of Ávila, John of the Cross, and Thomas Aquinas all knelt for hours in prayer. The posture of the body helps form the posture of the soul.</p>

<h3>Easter and Kneeling</h3>
<p>Interestingly, the ancient Church did not kneel on Sundays or during Eastertide. Canon 20 of the First Council of Nicaea (325 AD) forbade kneeling on Sundays, because Sunday is the day of Resurrection — a day of standing before the Risen Lord. This tradition continues in some Eastern Catholic and Orthodox churches. It is a reminder that kneeling, the posture of penance and petition, is not the only Christian posture: the Easter proclamation calls us also to stand upright, raised with Christ.</p>`,
  },

  // ── FAITH & TEACHING ──────────────────────────────────────────────────────
  {
    slug: "catechism-of-the-catholic-church",
    title: "The Catechism of the Catholic Church",
    category: "Faith & Teaching",
    sortOrder: 29,
    summary: "What the Catechism is, its history, structure, and how to use it.",
    content: `<h2>The Catechism of the Catholic Church</h2>
<p>The <em>Catechism of the Catholic Church</em> (CCC) is the comprehensive, authoritative statement of Catholic belief and practice. Published in French in 1992 and promulgated by Pope John Paul II with the Apostolic Constitution <em>Fidei Depositum</em>, the CCC was the first universal catechism of the Church in over four hundred years — since the <em>Roman Catechism</em> of 1566, produced by the Council of Trent.</p>

<h3>Origins and History</h3>
<p>The Second Vatican Council (1962–1965) called for a renewal of catechesis — the teaching of the faith. In 1985, at the Extraordinary Synod of Bishops marking the twentieth anniversary of Vatican II's close, a proposal was made for a compendium of Catholic teaching that could serve as a reference point for all catechetical work. A commission of twelve cardinals and bishops, led by then-Cardinal Joseph Ratzinger (later Pope Benedict XVI), worked for six years to produce the text, consulting the entire worldwide episcopate in the process. The result was the CCC, welcomed as a "sure norm for teaching the faith" by John Paul II.</p>

<h3>The Four Pillars</h3>
<p>The CCC is organized around four foundational pillars, following the traditional structure of catechesis going back to the early Church:</p>
<ul>
<li><strong>Part One: The Profession of Faith</strong> — The Creed. What Catholics believe about God, creation, Jesus Christ, the Holy Spirit, the Church, and the last things. Organized around the Apostles' Creed (Paragraphs 1–1065).</li>
<li><strong>Part Two: The Celebration of the Christian Mystery</strong> — The Sacraments. How Catholics worship and how the seven sacraments communicate grace (Paragraphs 1066–1690).</li>
<li><strong>Part Three: Life in Christ</strong> — The Commandments. Catholic moral teaching, organized around the Ten Commandments and the theological and cardinal virtues (Paragraphs 1691–2557).</li>
<li><strong>Part Four: Christian Prayer</strong> — Prayer. The theology and practice of prayer, organized around the Lord's Prayer (Paragraphs 2558–2865).</li>
</ul>

<h3>How to Use the Catechism</h3>
<p>The CCC has 2,865 numbered paragraphs and extensive indices, making it accessible for both study and reference. The margins contain cross-references to Scripture, council documents, and other Church teaching. A useful companion is the <em>Compendium of the Catechism</em> (2005), which presents the same content in question-and-answer format. For beginners, starting with Part One (the Creed) and using the index to explore specific topics is recommended.</p>

<h3>The Catechism and the CCC's Authority</h3>
<p>The CCC carries significant but not absolute authority. It is not itself a dogmatic definition but a faithful and authoritative synthesis of the Church's teaching. Where it presents definitive Catholic doctrine, it binds the conscience of the faithful. Where it presents theological explanations, these are reliable guides within the Tradition. Its authority flows from the authority of the teaching Church (the Magisterium) which produced and promulgated it.</p>

<h3>Catechesis Throughout History</h3>
<p>Catechesis — the systematic teaching of the faith — is as old as the Church itself. The earliest catechetical text, the <em>Didache</em> (c. 100 AD), taught basic Christian doctrine and moral life. The great Catechetical School of Alexandria (2nd–3rd centuries) produced Clement and Origen. St. Augustine's <em>De Catechizandis Rudibus</em> is a classic guide. The medieval catechisms, the Tridentine <em>Roman Catechism</em>, and the national catechisms of the 19th–20th centuries prepared the ground for the CCC. The CCC synthesizes all of this Tradition in a form accessible to the contemporary world.</p>`,
  },
  {
    slug: "the-bible-catholic",
    title: "The Bible: A Catholic Guide",
    category: "Faith & Teaching",
    sortOrder: 30,
    summary: "The Catholic understanding of Scripture — its books, inspiration, interpretation, and use.",
    content: `<h2>The Bible: A Catholic Guide</h2>
<p>The Bible is the inspired Word of God — the collection of sacred writings through which God reveals himself, his will, and the story of salvation. Catholics believe that the Bible is a uniquely authoritative book: not merely a human record of religious experience, but a text in which God himself is the principal author. Understanding what Catholics believe about Scripture — and why — is essential to the Catholic faith.</p>

<h3>The Canon: 73 Books</h3>
<p>The Catholic Bible contains <strong>73 books</strong> — 46 in the Old Testament and 27 in the New Testament. Protestant Bibles contain 66 books, having removed 7 books from the Old Testament during the Reformation of the 16th century. These seven books — Tobit, Judith, 1 Maccabees, 2 Maccabees, Wisdom, Sirach, and Baruch (plus additions to Daniel and Esther) — are called <em>deuterocanonical</em> (second canon) by Catholics and <em>apocrypha</em> (hidden) by Protestants. Catholics consider them fully inspired and canonical; they have been part of the Greek Old Testament (Septuagint) since before Christ and were cited by the New Testament authors and early Church Fathers.</p>

<h3>Inspiration and Inerrancy</h3>
<p>The Catholic Church teaches that the Bible is <strong>divinely inspired</strong>: God is the primary author, and human authors wrote what God intended, in their own words and in their own historical and cultural contexts. "All Scripture is inspired by God" (2 Timothy 3:16). This inspiration extends to the whole of Scripture, not just to selected parts.</p>
<p>The Church also teaches <strong>biblical inerrancy</strong>: Scripture, properly interpreted, does not err in what it asserts for the sake of our salvation. This does not mean that the Bible must be read as a scientific textbook or a literal historical chronicle. The <em>Pontifical Biblical Commission</em> and documents like <em>Dei Verbum</em> (Vatican II, 1965) clarify that interpreting Scripture requires attention to the literary genre, the historical context, and the intended meaning of the human author, always within the living Tradition of the Church.</p>

<h3>The Four Senses of Scripture</h3>
<p>The Church's tradition identifies four complementary ways of reading Scripture:</p>
<ul>
<li><strong>Literal</strong> — What the text actually says; the foundation of all interpretation.</li>
<li><strong>Allegorical</strong> — How the text points to Christ; Old Testament events and figures as prefigurations of the New (e.g., the crossing of the Red Sea as a type of Baptism).</li>
<li><strong>Moral</strong> — What the text demands of our conduct and interior life.</li>
<li><strong>Anagogical</strong> — How the text points to eternal life and the heavenly realities (e.g., Jerusalem as an image of the heavenly Jerusalem).</li>
</ul>

<h3>Scripture and Tradition</h3>
<p>Catholics do not hold to <em>sola scriptura</em> — the principle that Scripture alone is the rule of faith, upheld by many Protestants. Instead, the Church teaches that Divine Revelation is transmitted through both Sacred Scripture and Sacred Tradition, both of which flow from one divine source and are received together in the Church. The Magisterium (the Church's teaching authority) does not stand above the Word of God but serves it — authenticating, interpreting, and protecting it.</p>

<h3>Reading the Bible as a Catholic</h3>
<p>The Church strongly encourages all Catholics to read Scripture regularly. St. Jerome famously said: "Ignorance of Scripture is ignorance of Christ." Practical approaches include: <em>lectio divina</em> (sacred reading — read, meditate, pray, contemplate); following the daily Mass readings; reading a book of the Bible from beginning to end; using a Catholic study Bible with notes; and participating in a parish Bible study. The Navarre Bible, the Ignatius Catholic Study Bible, and the United States Catholic Catechism provide excellent tools for formation.</p>`,
  },
];

// ─── ARTICLES TO FIX (markdown → html) ──────────────────────────────────────

const ARTICLE_FIXES: Record<string, string> = {
  "the-mass-explained": `<h2>The Mass Explained</h2>
<p>The Mass is the central act of Catholic worship. It is simultaneously a memorial, a sacrifice, and a meal — not three different things but three dimensions of one reality.</p>
<p>As <strong>memorial</strong> (Greek: anamnesis), the Mass does not merely recall Calvary from a distance. It makes present the one sacrifice of Christ, rendering it effective here and now. "Do this in memory of me" means: make this present, re-present it, bring it into this time and place.</p>
<p>As <strong>sacrifice</strong>, the Mass is the unbloody re-presentation of Christ's death on the Cross. The same Christ who died on Calvary is offered on the altar — not killed again (he died once, for all: Hebrews 7:27) but presented to the Father in his glorified state.</p>
<p>As <strong>meal</strong>, the Mass culminates in Communion — receiving the Body and Blood of Christ under the forms of bread and wine. "Unless you eat the flesh of the Son of Man and drink his blood, you have no life in you" (John 6:53).</p>
<p>The Mass has two main parts: the Liturgy of the Word (readings, homily, Creed, general intercessions) and the Liturgy of the Eucharist (offertory, Eucharistic Prayer, Communion rite). Together they form one act of worship.</p>`,

  "how-to-go-to-confession": `<h2>How to Go to Confession</h2>
<p>Confession — the Sacrament of Penance and Reconciliation — is one of the great gifts Christ left his Church. "Whose sins you forgive are forgiven them; whose sins you retain are retained" (John 20:23). The priest, acting in the person of Christ, pronounces absolution that is real, objective, and complete.</p>
<h3>Preparation</h3>
<p>Examine your conscience using the Ten Commandments or the Beatitudes as a guide. Be honest. What have you done, thought, or said that you know was wrong? What good have you failed to do? Mortal sins (grave matter, full knowledge, deliberate consent) must be confessed in kind and number. Venial sins may also be confessed.</p>
<h3>In the Confessional</h3>
<p>Make the Sign of the Cross and say: "Bless me Father, for I have sinned. It has been [time] since my last confession." Then confess your sins. Listen to any counsel the priest offers. He will give you a penance. Express your Act of Contrition. Receive absolution.</p>
<h3>Act of Contrition</h3>
<p><em>"O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen."</em></p>
<h3>After Confession</h3>
<p>Complete your penance promptly. Give thanks. Go in peace.</p>
<p>Do not be afraid of the priest. He has heard everything. His only concern is your soul. If you have been away for years, he will welcome you as the father welcomed the Prodigal Son.</p>`,

  "the-rosary-how-to-pray-it": `<h2>The Rosary: How to Pray It</h2>
<p>The Rosary is a meditation on the life of Christ through the eyes of his Mother. It uses the repetition of vocal prayers — particularly the Hail Mary — to create a rhythm that frees the mind for contemplation.</p>
<h3>The Prayers</h3>
<ul>
<li>The Apostles' Creed (on the crucifix)</li>
<li>Our Father (on each large bead)</li>
<li>Hail Mary (on each small bead — 10 per decade)</li>
<li>Glory Be (after each decade)</li>
<li>Fatima Prayer (optional, after each Glory Be): <em>"O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy."</em></li>
</ul>
<h3>The Mysteries</h3>
<p>Each decade meditates on one mystery of Christ's life:</p>
<ul>
<li><strong>Joyful Mysteries</strong> (Monday, Saturday) — Annunciation, Visitation, Nativity, Presentation, Finding in the Temple.</li>
<li><strong>Luminous Mysteries</strong> (Thursday) — Baptism of Jesus, Wedding at Cana, Proclamation of the Kingdom, Transfiguration, Institution of the Eucharist.</li>
<li><strong>Sorrowful Mysteries</strong> (Tuesday, Friday) — Agony in the Garden, Scourging, Crowning with Thorns, Carrying the Cross, Crucifixion.</li>
<li><strong>Glorious Mysteries</strong> (Wednesday, Sunday) — Resurrection, Ascension, Descent of the Holy Spirit, Assumption, Coronation of Mary.</li>
</ul>
<h3>How to Pray It</h3>
<p>Hold the crucifix, pray the Creed. Move to the first large bead (Our Father), then three small beads (Hail Marys for faith, hope, and charity), then a Glory Be. Announce the first mystery, pray an Our Father, ten Hail Marys, Glory Be, Fatima Prayer. Repeat for each decade. Conclude with the Hail Holy Queen.</p>`,

  "mary-in-catholic-faith": `<h2>Mary in Catholic Faith</h2>
<p>Mary holds a unique place in Catholic theology and devotion — not because Catholics worship her (they do not), but because of her unique role in salvation history as the Mother of God Incarnate.</p>
<h3>The Four Marian Dogmas</h3>
<p><em>Theotokos</em> (God-bearer, 431 AD): Mary is truly the Mother of God because Jesus, whom she bore, is truly God. This is not primarily a statement about Mary but about Christ — it guards his full divinity.</p>
<p><em>Perpetual Virginity</em>: Mary was a virgin before, during, and after the birth of Jesus. The "brothers and sisters" of Jesus mentioned in the Gospels are understood in Catholic tradition as cousins or kinsmen (the Greek and Aramaic words for "brother" covered these relationships).</p>
<p><em>Immaculate Conception</em> (defined 1854): From the first moment of her conception, Mary was preserved from original sin by the merits of Christ, applied to her in anticipation. She was not sinless by her own power but by a singular grace.</p>
<p><em>Assumption</em> (defined 1950): At the end of her earthly life, Mary was taken body and soul into heavenly glory. Whether this followed death or not is not defined.</p>
<h3>Veneration vs. Worship</h3>
<p>Catholics venerate Mary (dulia, or more precisely hyperdulia — a higher form of veneration proper to her unique dignity). They worship only God (latria). Asking Mary to pray for us is no different in principle from asking a friend to pray — except Mary is alive in God's presence, her prayers are powerful, and she loves every soul as her spiritual child.</p>
<h3>Mary and the Church</h3>
<p>Vatican II's <em>Lumen Gentium</em> ends with a chapter on Mary as model and mother of the Church. She is the first disciple, the first to say yes to God's word, and the image of what the Church is called to be.</p>`,

  "the-papacy": `<h2>The Papacy: Peter's Successor</h2>
<p>The Pope is the Bishop of Rome and successor of St. Peter, the visible head of the Catholic Church on earth. The papacy is not a medieval invention — it is rooted in the explicit words of Christ: "You are Peter, and on this rock I will build my church" (Matthew 16:18).</p>
<p>Peter exercised a clear primacy among the Apostles: he speaks for the group, is named first in every list, receives the special commission to "strengthen your brothers" (Luke 22:32), and is told three times to "feed my sheep" (John 21). This primacy passed to his successors in Rome — a fact acknowledged, even grudgingly, by many in the ancient world.</p>
<h3>Papal Infallibility</h3>
<p>Defined at Vatican I (1870), papal infallibility is widely misunderstood. The Pope is not personally sinless or always right. He is protected from error only when: (1) he speaks <em>ex cathedra</em> — from the chair of Peter, as teacher of the universal Church; (2) on a matter of faith or morals; (3) with the explicit intention of binding the whole Church. This has happened only twice in the dogmatic form: the Immaculate Conception (1854) and the Assumption (1950).</p>
<p>All ordinary papal teaching commands respect and religious assent — the faithful should not casually dismiss it — but it does not carry the same authority as a formal dogmatic definition.</p>
<h3>The Pope and the Bishops</h3>
<p>The Pope governs the Church together with the college of bishops. He is not an absolute monarch disconnected from the episcopate. Episcopal conferences, synods, and ecumenical councils are all expressions of collegial governance. But the Pope has supreme authority in the Church and his decisions do not require the bishops' ratification to be valid.</p>`,

  "saints-intercession-communion": `<h2>Saints, Intercession, and the Communion of Saints</h2>
<p>The Communion of Saints is the spiritual bond uniting all members of Christ's Body: the Church Militant (believers on earth), the Church Suffering (souls in purgatory), and the Church Triumphant (saints in heaven). Death does not sever the bonds of charity within this one Body.</p>
<p>Saints are not dead — they are more alive than we are, living in the fullness of God's presence. To ask a saint to pray for us is to ask a member of Christ's Body to intercede, just as we ask a friend on earth to pray. The difference is that heavenly intercessors see God face to face, love us with a purified love, and their prayers are powerful.</p>
<h3>The Basis in Scripture</h3>
<p>The Book of Revelation depicts heavenly beings offering the prayers of the saints to God (Rev 5:8; 8:3-4). The "great cloud of witnesses" of Hebrews 12:1 actively surrounds the earthly Church. Paul asks his communities for their prayers — the same dynamic applies across the veil of death.</p>
<h3>How the Church Canonizes</h3>
<p>Canonization is the formal declaration that a person is in heaven and worthy of universal veneration. The process requires: evidence of heroic virtue (leading to beatification), and typically two verified miracles after beatification. The Pope's declaration is an exercise of infallible teaching — the Church cannot err in proposing someone as a model of holiness.</p>
<h3>Relics</h3>
<p>The veneration of relics is ancient (Acts 19:12; 2 Kings 13:21). First-class relics are physical remains of the saint; second-class are objects they used; third-class are objects touched to first-class relics. Veneration (not worship) of relics honors the Holy Spirit who dwelt in those bodies and anticipates the resurrection.</p>`,

  "heaven-hell-last-things": `<h2>Heaven, Hell, and the Last Things</h2>
<p>The "Last Things" — death, judgment, heaven, and hell — are the horizon against which all Christian life is lived. The Church does not allow us to sentimentalize them away.</p>
<h3>Death</h3>
<p>Death is the separation of soul and body. It is the consequence of original sin (Romans 5:12), but Christ has transformed it: for the Christian, death is not the end but the passage to the Father. Nevertheless, it is a real and total event. At death, each soul faces the Particular Judgment.</p>
<h3>The Particular Judgment</h3>
<p>At the moment of death, each person is judged by Christ. Those who die in mortal sin and do not repent go to hell. Those who die in God's grace but need purification go to purgatory. Those who are perfectly conformed to Christ enter heaven immediately.</p>
<h3>Heaven</h3>
<p>Heaven is the beatific vision — the direct, immediate knowledge and love of God as he knows and loves himself. It is not a consolation prize or an eternal vacation; it is the fulfillment of human nature as God created it. The joy of heaven is not diminished by the variety of degrees of glory among the saints — each vessel is filled to its capacity.</p>
<h3>Hell</h3>
<p>Hell is real. Jesus speaks of it more than anyone else in Scripture. It is the state of eternal separation from God, freely chosen. The Church has never named any particular person as damned, but she does not teach universal salvation. Hell is the logical consequence of human freedom: God will not force himself on anyone. The doors of hell, as C.S. Lewis said, are locked from the inside.</p>
<h3>The Last Judgment</h3>
<p>At the end of time, souls will be reunited with their bodies in the resurrection. The general or Last Judgment will publicly manifest God's justice — every hidden thing brought to light. Then the eternal separation between those who chose God and those who chose themselves will be made final and visible.</p>`,
};

// ─── FORMULA FIX ──────────────────────────────────────────────────────────────

const FORMULA_FIXES: Record<string, string> = {
  "ten-commandments": `<h2>The Ten Commandments</h2>
<p>Given by God to Moses on Mount Sinai, the Ten Commandments are the foundation of moral life. They express the fundamental duties toward God and neighbor.</p>
<ul>
<li><strong>I. I am the Lord your God: you shall not have strange gods before me.</strong><br/>We are to worship only the one true God, rejecting idolatry and false worship in all its forms.</li>
<li><strong>II. You shall not take the name of the Lord your God in vain.</strong><br/>The name of God is holy. We must not swear falsely or use His name disrespectfully.</li>
<li><strong>III. Remember to keep holy the Lord's Day.</strong><br/>Sunday, the day of the Lord's Resurrection, must be observed with rest, Mass, and works of charity.</li>
<li><strong>IV. Honor your father and your mother.</strong><br/>We must respect and care for our parents and legitimate authorities.</li>
<li><strong>V. You shall not kill.</strong><br/>Human life is sacred from conception to natural death. Unjust killing is gravely wrong.</li>
<li><strong>VI. You shall not commit adultery.</strong><br/>We must respect the gift of sexuality within the covenant of marriage.</li>
<li><strong>VII. You shall not steal.</strong><br/>We must respect the property of others and work for just distribution of goods.</li>
<li><strong>VIII. You shall not bear false witness against your neighbor.</strong><br/>We must speak the truth in all things and protect the good name of others.</li>
<li><strong>IX. You shall not covet your neighbor's wife.</strong><br/>We must guard purity of heart and mind, not desiring what belongs to another.</li>
<li><strong>X. You shall not covet your neighbor's goods.</strong><br/>We must not covet what belongs to another, but practice contentment and generosity.</li>
</ul>
<blockquote>"The Commandments are not a burden but a path to freedom and human dignity." — Catechism of the Catholic Church</blockquote>`,
};

// ─── MAIN MUTATION ────────────────────────────────────────────────────────────

export const seed8 = mutation({
  args: {},
  handler: async (ctx) => {
    // Get admin token
    const config = await ctx.db.query("adminConfig").withIndex("by_key", (q) => q.eq("key", "main")).first();
    if (!config) throw new Error("No adminConfig found");

    let articlesFixed = 0;
    let articlesAdded = 0;
    let formulasFixed = 0;

    // ── Fix existing articles ────────────────────────────────────────────────
    for (const [slug, newContent] of Object.entries(ARTICLE_FIXES)) {
      const existing = await ctx.db
        .query("articles")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .first();
      if (existing) {
        await ctx.db.patch(existing._id, { content: newContent });
        articlesFixed++;
      }
    }

    // ── Fix formulas ─────────────────────────────────────────────────────────
    for (const [slug, newContent] of Object.entries(FORMULA_FIXES)) {
      const existing = await ctx.db
        .query("formulas")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .first();
      if (existing) {
        await ctx.db.patch(existing._id, { content: newContent });
        formulasFixed++;
      }
    }

    // ── Add new articles ─────────────────────────────────────────────────────
    const existingSlugs = new Set(
      (await ctx.db.query("articles").collect()).map((a) => a.slug)
    );

    for (const article of NEW_ARTICLES) {
      if (!existingSlugs.has(article.slug)) {
        await ctx.db.insert("articles", {
          ...article,
          isActive: true,
          lastUpdated: "2024-01-01",
        });
        articlesAdded++;
      }
    }

    return { articlesFixed, formulasFixed, articlesAdded };
  },
});
